import React, { Component } from "react";
import { connect } from "react-redux";
import { setGameObject } from "../../store/actions/gameAction";
import { setActiveUser } from "../../store/actions/authActions";
import actions from "../../io/actions";
import { doingAsync } from "../../store/actions/componentActions";
const {
  error,
  success,
  setuser,
  setgameobject,
  blockout,
  youwin,
  wronganswer,
  totalwinnersreached
} = actions;
class Io extends Component {
  componentWillMount() {
    const { toast } = this.props;
    toast.configure({
      autoClose: false
    });
  }
  componentDidMount() {
    const Socket = this.props.Socket;
    const { toast } = this.props;
    Socket.on(error, response => {
      const id = 1;
      if (toast.isActive(id)) {
        toast.dismiss(id);
        toast(response, {
          toastId: id,
          delay: 50,
          type: toast.TYPE.INFO,
          className: "tp-toast-error"
        });
      } else {
        toast(response, {
          toastId: id,
          delay: 50,
          type: toast.TYPE.INFO,
          className: "tp-toast-error"
        });
      }
      this.props.doingAsync(false);
    });

    Socket.on(success, response => {
      const id = 2;
      toast.dismiss(id);
      toast(response, {
        toastId: id,
        delay: 50,
        type: toast.TYPE.INFO,
        className: "tp-toast-success"
      });
      this.props.doingAsync(false);
    });

    Socket.on(setuser, user => {
      console.log("user is emitted");
      console.log("user: ", user);
      return this.props.setActiveUser(user);
    });

    Socket.on(setgameobject, game => {
      this.props.setGameObject(game);
    });

    Socket.on(blockout, response => {
      toast.update("Blocked out", {
        delay: 5000,
        type: toast.TYPE.INFO,
        className: "tp-toast-error"
      });
    });

    Socket.on(totalwinnersreached, response => {
      this.props.doingAsync(false);
      return toast(response, {
        delay: 50,
        type: toast.TYPE.INFO,
        className: "tp-toast-success"
      });
    });

    Socket.on(youwin, response => {
      console.log("i win");
      this.props.doingAsync(false);
      return toast(response, {
        delay: 50,
        type: toast.TYPE.INFO,
        className: "tp-toast-success"
      });
    });

    Socket.on(wronganswer, response => {
      const id = 6;
      if (toast.isActive(id)) {
        toast.dismiss(id);
        toast(response, {
          toastId: id,
          delay: 50,
          type: toast.TYPE.INFO,
          className: "tp-toast-error"
        });
      } else {
        toast(response, {
          toastId: id,
          delay: 50,
          type: toast.TYPE.INFO,
          className: "tp-toast-error"
        });
      }
    });
  }
  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setGameObject: game => {
      return dispatch(setGameObject(game));
    },
    setActiveUser: user => {
      return dispatch(setActiveUser(user));
    },
    doingAsync: done => {
      return dispatch(doingAsync(done));
    }
  };
};

const mapStateToProps = state => {
  return { Socket: state.components.Socket };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Io);
