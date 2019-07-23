const Game = require("../database/models/game");
const User = require("../database/models/User");
const Winner = require("../database/models/Winner");
const Verification = require("../database/models/verificationModel");
const Withdrawal = require("../database/models/withdraw");
const sendEmail = require("../database/helpers/mailer");
const BCRYPT = require("bcrypt");
const randomString = require("crypto-random-string");
const verifyPayment = require("../database/helpers/verifyPaystackpayments");
const {
  error,
  success,
  setuser,
  setgameobject,
  resetuser,
  blockout,
  newuserjoined
} = require("./emitters");

module.exports = {
  getGame: () => {
    const game = Game.findOne({});
    return game;
  },

  signupForGame: (user, Socket) => {
    // get the id of the user
    const { _id } = user;
    // check for that user
    User.findOne({ _id }, (err, user) => {
      if (err) {
        Socket.emit(error, "Something went wrong");
      }

      if (user) {
        // get the user balance
        if (user.account_balance < 100 || user.signupForNextGameShow) {
          Socket.emit(error, "Insufficient Balance or Already Signed up");
        } else {
          // check to see if game is on
          Game.findOne({}, (err, game) => {
            if (err) {
              Socket.emit(error, "Something went wrong, try again");
            }

            if (game) {
              // check if there is an ongoing game
              if (game.gameison) {
                Socket.emit(error, "Game is on wait until next session");
              } else {
                // now we can sign user up for next session
                const newBalance = user.account_balance - 100;
                const totalNumberSubmitted = game.totalNumberSubmitted + 1;
                User.findOneAndUpdate(
                  { _id },
                  {
                    $set: {
                      signupForNextGameShow: true,
                      account_balance: newBalance
                    }
                  },
                  { new: true },
                  (err, doc) => {
                    if (err) {
                      Socket.emit(error, "Couldn't Join game, try again");
                    }
                    Socket.emit(success, "You have successfully signed up");
                    Socket.emit(setuser, { ...doc._doc, password: null });
                    Game.findOneAndUpdate(
                      {},
                      { totalNumberSubmitted },
                      { new: true },
                      (err, game) => {
                        Socket.broadcast.emit(
                          newuserjoined,
                          game.totalNumberSubmitted
                        );
                      }
                    );
                  }
                );
              }
            }
          });
        }
      }
    });
  },

  submitAnswer: ({ user, checkanswer, totalNumberOfWinners }, Socket) => {
    // check if the user is already blockedout
    // check if the answer is correct
    if (checkanswer) {
      Winner.findOne({}, (err, winner) => {
        // check if there is a winner object
        if (winner) {
          // check if the total winners has been reached
          if (totalNumberOfWinners === winner.winners.length) {
            Socket.emit(error, "Oops, correct but too slow");
          } else {
            // total number not  reached
            if (
              winner.winners.includes(user._id) ||
              winner.blockedOut.includes(user._id)
            ) {
              // if (winner.blockedOut.includes(user._id)) {
              // }
            } else {
              winner.winners.push(user);
              winner.blockedOut.push(user);
              winner.save();

              Socket.emit(success, "You were Correct and on time");
            }
          }
          Socket.emit(success, "You were Correct and on time");
        } else {
          const winner = new Winner({
            totalWinners: 0
          });

          winner.totalWinners = winner.totalWinners + 1;
          winner.winners.push(user);
          winner.blockedOut.push(user);

          winner.save();
          Socket.emit(succes, "You are correct and on time");
        }
      });
    } else {
      // block the user out

      Socket.emit(error, "Oops, that is wrong!!");
    }
    User.findOneAndUpdate(
      { _id: user._id },
      { $set: { signupForNextGameShow: false } },
      { new: true },
      (err, usr) => {
        if (err) {
          console.log(err);
        } else {
          Socket.emit(setuser, { ...usr._doc, password: null });
        }
      }
    );
    Socket.emit(blockout, true);
  },
  sendGame: (data, Socket) => {
    Socket.emit(setgameobject, data);
  },

  updateUserProfile: (payload, Socket) => {
    const { _id, data } = payload;
    // find user with the above id
    User.findOneAndUpdate({ _id }, { ...data }, { new: true }, (err, user) => {
      if (err) {
        Socket.emit(error, "Couldn' update profile, try again");
      }
      Socket.emit(setuser, { ...user._doc, password: null });
      Socket.emit(success, "Profile changed");
    });
  },

  turnGameOnOrOff: (turnon, Socket) => {
    Game.findOneAndUpdate(
      {},
      { gameison: turnon },
      { new: true },
      (err, game) => {
        Socket.broadcast.emit(setgameobject, game);
        Socket.emit(setgameobject, game);
      }
    );
  },

  updateGameObject: (data, Socket) => {
    const question = {};
    const option = data.options.split(",");
    const uniqueId = randomString({ length: 10 });
    const kickoftime = data.data;
    question.question = data.question;
    question.option = option;
    question.answer = data.answer;
    const gameison = false;
    const totalNumberOfWinners = data.totalWinners;
    Game.findOneAndUpdate(
      {},
      { question, kickoftime, uniqueId, gameison, totalNumberOfWinners },
      { new: true },
      (err, game) => {
        Socket.broadcast.emit(setgameobject, game);
        Socket.emit(setgameobject, game);
      }
    );
  },

  verifyUserAccount: (data, Socket) => {
    const { email, token } = data;
    Verification.findOneAndDelete({ token }, (err, doc) => {
      if (err) {
        Socket.emit(error, "Couldn't verify your account, try again");
      }
      if (doc) {
        User.findOneAndUpdate({ email }, { verified: true }, (err, doc) => {
          if (err) {
            Socket.emit(error, "Something went wrong, try again");
          } else {
            Socket.emit(success, "Your account has been verified");
          }
        });
      } else {
        Socket.emit(error, "Invalid token supplied");
      }
    });
  },

  sendPasswordReset: (email, Socket) => {
    User.findOne({ email }, (err, user) => {
      if (err) {
        Socket.emit(error, "Something went wrong, please try again");
      }
      if (user) {
        // do the neccessary stuff
        sendEmail({ type: "PASSWORDRESET", email: user.email, _id: user._id });
        Socket.emit(success, `Reset email has been sent to ${email}`);
      } else {
        Socket.emit(error, `No account found for ${email}, try signing up`);
      }
    });
  },

  verifyResetToken: (data, Socket) => {
    const { token, email, password } = data;
    // check to see if there is a token already assigned to the user
    Verification.findOne({ token }, (err, verify) => {
      if (err) {
        Socket.emit(error, "Something went wrong, please try again");
      }
      if (verify) {
        const newPassword = BCRYPT.hashSync(password, 10);
        User.findOneAndUpdate(
          { email },
          { $set: { password: newPassword } },
          (err, user) => {
            if (err) {
              Socket.emit(error, "Something went wrong, please try again");
            }
            if (user) {
              //deleteVerification
              Verification.findOneAndDelete({ email }, (err, done) => {
                if (err) {
                  Socket.emit(error, "Something went wrong, please try again");
                }
                Socket.emit(
                  success,
                  "Your have successfully reset your password"
                );
              });
            }
          }
        );
      } else {
        Socket.emit(error, "Invalid token provided");
      }
    });
  },

  resetUser: Socket => {
    User.update(
      { signupForNextGameShow: true },
      { signupForNextGameShow: false },
      { multi: true },
      (err, done) => {
        if (err) {
          console.log("error");
        } else {
          console.log("updated");
        }
      }
    );
    Socket.broadcast.emit(resetuser);
  },

  withdrawCash(data, Socket) {
    const { user, amount } = data;
    if (amount >= 1000 && amount <= 20000) {
      User.findOne({ _id: user._id }, (err, usr) => {
        if (err) {
          Socket.emit(error, "Something went wrong, please try again");
        } else {
          if (usr) {
            if (usr.account_balance >= amount) {
              const newBalance = user.account_balance - amount;
              User.findOneAndUpdate(
                { _id: usr._id },
                { $set: { account_balance: newBalance } },
                { new: true },
                (err, doc) => {
                  if (err) {
                    Socket.emit(error, "Something went wrong, try again");
                  } else {
                    if (doc) {
                      const newWithdrawal = new Withdrawal({
                        user: doc._id,
                        amount
                      });
                      newWithdrawal.save();
                      Socket.emit(
                        success,
                        `Withdrawal request of ${amount} was successfully made`
                      );
                      Socket.emit(setuser, { ...doc._doc, password: null });
                    }
                  }
                }
              );
            } else {
              Socket.emit(error, "Insufficient Balance");
            }
          }
        }
      });
    } else {
      Socket.emit(error, "Amount needs to be above 1000 and below 20000");
    }
  },

  verifyUserPayment: async (data, Socket) => {
    const { reference } = data;
    try {
      const reply = await verifyPayment(reference);
      const { data } = reply;
      if (data.status === "success") {
        const { amount, customer } = data;
        const { email } = customer;
        User.find({ email }, (err, user) => {
          if (err) {
            Socket.emit(error, "Something went wrong");
          } else {
            if (user) {
              console.log(user);
              let newBalance = user.account_balance + amount;
              User.findOneAndUpdate(
                { email },
                { $set: { account_balance: newBalance } },
                { new: true },
                (err, doc) => {
                  if (err) {
                    Socket.emit(error, err.message);
                  } else {
                    Socket.emit(setuser, { ...user, password: null });
                    Socket.emit(
                      success,
                      "You have successfully topped up your account"
                    );
                  }
                }
              );
            }
          }
        });
      } else {
        Socket.emit(error, "Couldnt complete transaction, try again");
      }
    } catch (err) {
      if (err) {
        Socket.emit(error, err.message);
      }
    }
  }
};
