(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e,t,a){e.exports=a(327)},162:function(e,t,a){},163:function(e,t,a){},187:function(e,t){},189:function(e,t){},228:function(e,t){},229:function(e,t){},288:function(e,t,a){},324:function(e,t){},327:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),o=a(33),c=a.n(o),l=(a(162),a(163),a(12)),i=a(31),u=a(13),p=a(14),d=a(17),m=a(15),h=a(9),b=a(16),f=a(8),v=a(4),E=a(19),g=a.n(E),O=function(e){return{type:"DOING-ASYNC",payload:e}},y=a(150),N=a(2),w=a(7),j=(n={signupforgame:"SIGN-UP-FOR-GAME",error:"ERROR",success:"SUCCESS",setuser:"SET-USER",submitanswer:"SUBMIT-ANSWER",getgameobject:"GET-GAME",setgameobject:"SET-GAME",blockout:"BLOCK-OUT",youwin:"WIN",totalwinnersreached:"TOTAL-WINNERS-REACHED",wronganswer:"WRONG-ANSWER"},Object(w.a)(n,"submitanswer","SUBMIT-ANSWER"),Object(w.a)(n,"updateprofile","UPDATE-PROFILE"),Object(w.a)(n,"turngameonoroff","TURN-ON-OFF"),Object(w.a)(n,"verifyaccount","VERIFY"),Object(w.a)(n,"passwordreset","PASSWORDRESET"),Object(w.a)(n,"verifyreset","VERIFYRESET"),Object(w.a)(n,"resetuser","RESETUSER"),Object(w.a)(n,"withdrawcash","WITHDRAW-CASH"),Object(w.a)(n,"verifyuserpayment","VERIFY-USER-PAYMENT"),Object(w.a)(n,"paymentsuccessful","PAYMENT-SUCCESSFUL"),Object(w.a)(n,"retrypayment","RETRY-PAYMENT"),Object(w.a)(n,"paymenterror","PAYMENT-ERROR"),Object(w.a)(n,"requestverification","REQUEST-VERIFICATION"),Object(w.a)(n,"newuserjoined","NEW-USER-JOINED-GAME"),Object(w.a)(n,"modify","MODIFY"),n),A="https://topner.herokuapp.com",I="".concat(A,"/"),k=function(e){return{type:"SET-ACTIVE-USER",payload:{user:e}}},C=function(e){return function(t,a){t(O(!0)),g.a.post("".concat(I,"auth/profile/update"),{data:e},{withCredentials:!0}).then(function(e){var a=e.data,n=a.error,r=a.message,s=a.user;n?Object(N.b)(r,{className:"tp-toast-error"}):(t(k(s)),Object(N.b)(r,{className:"tp-toast-success"})),t(O(!1))}).catch(function(e){Object(N.b)(e.message,{className:"tp-toast-error"}),t(O(!1))})}},S=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).handleInputChange=e.handleInputChange.bind(Object(h.a)(e)),e.validateField=e.validateField.bind(Object(h.a)(e)),e.createUserAccount=e.createUserAccount.bind(Object(h.a)(e)),e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.id,n=t.value;this.props.signupInputAction({id:a,value:n}),this.props.signupInputValidation({id:a,value:n})}},{key:"validateField",value:function(e){var t=e.target,a=t.id,n=t.value;this.props.signupInputValidation({id:a,value:n})}},{key:"createUserAccount",value:function(e){e.preventDefault(),this.props.createUserAccount(this.props.signup_input_data)}},{key:"render",value:function(){var e=this.props,t=e.signup_input_data,a=e.validation,n=e.auth,r=e.signingup,o=t.name,c=t.email,l=t.username,u=t.password,p=(t.bank,t.account_number,t.confirm_password),d=a.name,m=a.email,h=a.username,b=a.password,f=(a.bank,a.account_number,a.confirm_password),v=r?s.a.createElement("button",{className:"tp-auth-btn",disabled:!0},s.a.createElement("i",{className:"fas fa-circle-notch fa-spin"})," Creating account..."):s.a.createElement("button",{className:"tp-auth-btn",disabled:!1},"Create Account");return n?s.a.createElement(i.a,{to:"/dashboard"}):s.a.createElement("div",{className:"tp-auth-container"},s.a.createElement("h2",{className:"tp-auth-title"},"Sign up"),s.a.createElement("form",{onSubmit:this.createUserAccount},s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"name"},"Fullname"),s.a.createElement("input",{type:"text",className:"tp-input-field ".concat(d?"":"tp-invalid-field"),placeholder:"John Doe",id:"name",required:!0,value:o,onChange:this.handleInputChange,onBlur:this.validateField}),!d&&s.a.createElement("p",{className:"tp-field-error"},"*field is not valid")),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("input",{type:"email",placeholder:"Email",className:"tp-input-field ".concat(m?"":"tp-invalid-field"),id:"email",required:!0,value:c,onChange:this.handleInputChange,onBlur:this.validateField}),!m&&s.a.createElement("p",{className:"tp-field-error"},"*email is not valid")),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"username"},"Username"),s.a.createElement("input",{type:"text",className:"tp-input-field ".concat(h?"":"tp-invalid-field"),placeholder:"Username",id:"username",required:!0,value:l,onChange:this.handleInputChange,onBlur:this.validateField}),s.a.createElement("p",{className:"tp-form-note"},"* Username can only have letters and _"),!h&&s.a.createElement("p",{className:"tp-field-error"},"*Username can contain only letters and _")),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("input",{type:"password",className:"tp-input-field ".concat(b?"":"tp-invalid-field"),placeholder:"Password",id:"password",required:!0,value:u,onChange:this.handleInputChange,onBlur:this.validateField}),s.a.createElement("div",{className:"tp-form-note"},s.a.createElement("p",null,"* must have an uppercase"),s.a.createElement("p",null,"* must have a lowercase"),s.a.createElement("p",null,"* must have a number"),s.a.createElement("p",null,"* must have any of this #$^+=!*()@%&")),!b&&s.a.createElement("p",{className:"tp-field-error"},"*password must contain numbers,lowercase, uppercas, any of this [@#$%..]")),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"confirm_password"},"Confirm Password"),s.a.createElement("input",{type:"password",className:"tp-input-field ".concat(f?"":"tp-invalid-field"),placeholder:"Confirm Password",id:"confirm_password",required:!0,value:p,onChange:this.handleInputChange,onBlur:this.validateField}),!f&&s.a.createElement("p",{className:"tp-field-error"},"*passwords do not match")),s.a.createElement("div",null,v)))}}]),t}(r.Component),P=Object(f.b)(function(e){return{signup_input_data:e.input.signup,validation:e.validation.signup,error:e.error.signup,auth:e.auth.user,signingup:e.components.signingup}},function(e){return{signupInputAction:function(t){e(function(e){return{type:"SIGNUP_INPUT",payload:e}}(t))},signupInputValidation:function(t){e(function(e){return function(t,a){var n,r=e.id,s=e.value,o={type:"SIGNUP-VALIDATION",payload:{id:r,valid:null}};switch(r){case"name":n=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(s),o=Object(v.a)({},o,{payload:{id:r,valid:n,index:0}});break;case"email":n=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(s),o=Object(v.a)({},o,{payload:{id:r,valid:n,index:1}});break;case"password":t({type:"SIGNUP-VALIDATION",payload:{id:"confirm_password",valid:a().input.signup.confirm_password===s,index:5}}),n=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,30}$/.test(s),o=Object(v.a)({},o,{payload:{id:r,valid:n,index:5}});break;case"bank":n=["Firstbank","GTB","Polaris Bank","Access Bank","UBA","Fidelity Bank","Eco Bank"].includes(s),o=Object(v.a)({},o,{payload:{id:r,valid:n,index:3}});break;case"account_number":n=/^[0-9]{10}$/.test(s),o=Object(v.a)({},o,{payload:{id:r,valid:n,index:4}});break;case"confirm_password":n=s===a().input.signup.password,o=Object(v.a)({},o,{payload:{id:r,valid:n,index:6}});break;case"username":var c={id:r,valid:n=/^[a-z0-9-_A-Z]{6,30}$/.test(s),index:2};o=Object(v.a)({},o,{payload:c})}t(o)}}(t))},createUserAccount:function(t){e(function(e){return function(t,a){t(O(!0)),g.a.post("".concat(I,"auth/signup"),e,{withCredentials:!0}).then(function(e){var a=e.data,n=a.error,r=a.success;n?(t({type:"SIGNUP-ERROR",payload:{error:n.message,success:null}}),t(O(!1)),Object(N.b)(n.message,{delay:50,className:"tp-toast-error"})):(t({type:"SIGNUP-SUCCESS",payload:{error:null,success:r.message}}),t(O(!1)),Object(N.b)("Account created successfully, you can login now",{delay:50,className:"tp-toast-success"}))}).catch(function(e){t({type:"SIGNUP-ERROR",payload:e.message}),t(O(!1)),Object(N.b)(e.message,{delay:50,className:"tp-toast-error"})})}}(t))}}})(S),T=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).handleInputChange=e.handleInputChange.bind(Object(h.a)(e)),e.validateField=e.validateField.bind(Object(h.a)(e)),e.logUserIn=e.logUserIn.bind(Object(h.a)(e)),e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.id,n=t.value;this.props.loginInputAction({id:a,value:n})}},{key:"validateField",value:function(e){}},{key:"logUserIn",value:function(e){e.preventDefault(),this.props.loguserin(this.props.login_input_data)}},{key:"render",value:function(){var e=this.props,t=e.login_input_data,a=e.validation,n=e.auth,r=e.logingin,o=t.email,c=t.password,u=a.email,p=r?s.a.createElement("button",{className:"tp-auth-btn",disabled:!0},s.a.createElement("i",{className:"fas fa-circle-notch fa-spin"})," Loging in..."):s.a.createElement("button",{className:"tp-auth-btn",disabled:!1},"Log in");return n?s.a.createElement(i.a,{to:"/dashboard"}):s.a.createElement("div",{className:"tp-auth-container"},s.a.createElement("h2",{className:"tp-auth-title"},"Login"),s.a.createElement("form",{onSubmit:this.logUserIn},s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("input",{type:"email",id:"email",placeholder:"Email",required:!0,className:"tp-input-field ".concat(u?"":"tp-invalid-field"),value:o,onChange:this.handleInputChange,onBlur:this.validateField}),!u&&s.a.createElement("p",{className:"tp-field-error"},"* email is invalid")),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("input",{type:"password",id:"password",placeholder:"password",required:!0,className:"tp-input-field",value:c,onChange:this.handleInputChange})),s.a.createElement("div",null,p),s.a.createElement("div",null,s.a.createElement("p",null,s.a.createElement(l.b,{to:"/auth/password-reset",className:"tp-forgot-password"},"Forgot Password")))))}}]),t}(r.Component),U=Object(f.b)(function(e){return{login_input_data:e.input.login,validation:e.validation.login,auth:e.auth.user,error:e.error.login,logingin:e.components.logingin}},function(e){return{loginInputAction:function(t){e(function(e){return{type:"LOGIN_INPUT",payload:e}}(t))},loginValidation:function(t){e({type:"LOGIN-VALIDATION",payload:{valid:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)}})},loguserin:function(t){return e(function(e){return function(t,a){t(O(!0)),g.a.post("".concat(I,"auth/login"),e,{withCredentials:!0}).then(function(e){var a=e.data,n=a.error,r=a.success;if(n)t({type:"LOGIN-ERROR",payload:{error:n}}),t(O(!1)),Object(N.b)("Invalid credentials provided",{delay:50,className:"tp-toast-error"});else{var s=y.verify(r.auth,"posiedonathenazeuskratoshydra");t({type:"SET-ACTIVE-USER",payload:{user:s.auth}}),t(O(!1))}}).catch(function(e){console.log(e),t({type:"LOGIN-ERROR",payload:{error:"Invalid credentials provided"}}),t(O(!1)),Object(N.b)(e.message,{delay:50,className:"tp-toast-error"})})}}(t))}}})(T),R=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).handleInputChange=e.handleInputChange.bind(Object(h.a)(e)),e.requestPasswordReset=e.requestPasswordReset.bind(Object(h.a)(e)),e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.id,n=t.value;this.props.passwordResetInputAction({id:a,value:n})}},{key:"requestPasswordReset",value:function(e){e.preventDefault();var t=this.props.resetpassword_input_data.email;this.props.requestPasswordReset(t)}},{key:"render",value:function(){var e=this.props,t=e.validation,a=e.resetpassword_input_data,n=e.user,r=a.email,o=t.email;t.validfield;return n?s.a.createElement(i.a,{to:"/dashboard"}):s.a.createElement("div",{className:"tp-auth-container"},s.a.createElement("h2",{className:"tp-auth-title"},"Password Reset"),s.a.createElement("form",{onSubmit:this.requestPasswordReset},s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("input",{type:"email",placeholder:"email",id:"email",required:!0,className:"tp-input-field ".concat(o?"":"tp-invalid-field"),value:r,onChange:this.handleInputChange})),s.a.createElement("div",null,s.a.createElement("button",{className:"tp-auth-btn"},"Send reset link"))))}}]),t}(r.Component),_=Object(f.b)(function(e){return{resetpassword_input_data:e.input.resetpassword,validation:e.validation.passwordreset,user:e.auth.user}},function(e){return{passwordResetInputAction:function(t){e(function(e){return{type:"PASSWORD_RESET_INPUT",payload:e}}(t))},passwordResetValidation:function(t){e({type:"PASSWORD-RESET-VALIDATION",payload:{valid:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)}})},requestPasswordReset:function(t){e(function(e){return function(t,a){t(O(!0)),g.a.post("".concat(I,"auth/account/password_reset"),{email:e}).then(function(e){var a=e.data,n=a.error,r=a.message;n?Object(N.b)(r,{className:"tp-toast-error"}):Object(N.b)(r,{className:"tp-toast-success"}),t(O(!1))}).catch(function(e){Object(N.b)(e.message,{className:"tp-toast-error"}),t(O(!1))})}}(t))}}})(R),F=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("li",null,s.a.createElement(l.c,{activeClassName:"tp-active-link-class",exact:!0,to:"/auth/login"},"Login")),s.a.createElement("li",null,s.a.createElement(l.c,{activeClassName:"tp-active-link-class",exact:!0,to:"/auth/signup"},"Signup")))},D=Object(f.b)(function(e){return{dropdown:e.components.dropdownopen}},function(e){return{loguserout:function(t){return t.preventDefault(),e(function(e){e(O(!0)),g.a.post("".concat(I,"auth/logout"),{},{withCredentials:!0}).then(function(t){t.data.error?e(O(!1)):(e(k(null)),e(O(!1)))}).catch(function(t){e(O(!0))})})},openDropdown:function(){return e((console.log("opening drop down action "),{type:"DROP-COMP",payload:null}))}}})(function(e){var t=e.user,a=e.loguserout,n=e.dropdown,r=e.openDropdown;return s.a.createElement(s.a.Fragment,null,s.a.createElement("li",null,s.a.createElement("div",{className:"tp-initials",onClick:r},s.a.createElement("span",null,t.username[0]),s.a.createElement("div",{className:"tp-drop-down ".concat(n?"tp-open":"")},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(l.b,{to:"/update_profile"},"Update profile")),s.a.createElement("li",null,s.a.createElement(l.b,{to:"/withdrawal"},"Withdraw cash")),s.a.createElement("li",null,s.a.createElement("a",{href:"javascript:void(0)",onClick:a},"logout")))))))}),q=function(e){var t=e.user,a=t?s.a.createElement(D,{user:t}):s.a.createElement(F,null);return s.a.createElement("nav",{className:"tp-navigation"},s.a.createElement(l.b,{to:"/dashboard",className:"tp-brand"},"Topners"),s.a.createElement("ul",null,a))},G=(a(288),function(e){var t=e.question,a=e.submitAnswer,n=e.blockedout,r=t.option.map(function(e,t){return s.a.createElement("label",{className:"tp-radio-container",key:t},e,s.a.createElement("input",{type:"radio",name:"answer",onChange:a,value:e}),s.a.createElement("span",{className:"tp-checkmark"}))});return s.a.createElement("div",{className:"tp-question"},s.a.createElement("h3",{className:"tp-question-head"},t.question),n?s.a.createElement("h2",{style:{color:"red"}},"Blocked out"):s.a.createElement("form",null,s.a.createElement("div",null,r)))}),B=function(){return s.a.createElement("div",{className:"tp-how-it-works"},s.a.createElement("h2",{className:"tp-how"},"How it works ?"),s.a.createElement("div",{className:"tp-step"},s.a.createElement("h4",null,"Step 1"),s.a.createElement("h5",null,"Deposit into your accout"),s.a.createElement("p",null,"The very first step is to pay money into your account, account with amount less than 100 would be blocked out of joining games, be rest assured that paying with us is very safe and secure")),s.a.createElement("div",{className:"tp-step"},s.a.createElement("h4",null,"Step 2"),s.a.createElement("h5",null,"Sign up for game"),s.a.createElement("p",null,"After depositing into your account, the next step is to sign up for a game, then wait to recieve questions for answering")),s.a.createElement("div",{className:"tp-step"},s.a.createElement("h4",null,"Step 3"),s.a.createElement("h5",null,"Got question?, be smart and fast"),s.a.createElement("p",null,"Questions are posted every"," ",s.a.createElement("b",null,"Sunday, at 7:30pm, dont just get them right, you need to be fast and fall among the top people, because only the ",s.a.createElement("b",null,"Topners")," win"))),s.a.createElement("div",{className:"tp-step"},s.a.createElement("h4",null,"Step 4"),s.a.createElement("h5",null,"I won , time to get paid"),s.a.createElement("p",null,"The best part, payments are made during the following week after previous game, please note that payments are made into the provided account number")),s.a.createElement("div",{className:"tp-step"},s.a.createElement("h4",{style:{color:"red"}},"Note"),s.a.createElement("p",null,"Questions are removed 10 minutes after they have been posted, in other words you have the first ten minutes after the question has been posted to answer them")))},z=j.setgameobject,x=function(e){return{type:z,payload:e}},Z=function(e){return function(t,a){t(O(!0)),g.a.post("".concat(A,"/payment/verify"),{reference:e},{withCredentials:!0}).then(function(e){var a=e.data,n=a.error,r=a.message,s=a.user;n?Object(N.b)(r,{className:"tp-toast-error"}):(Object(N.b)(r,{className:"tp-toast-success"}),t(k(s))),t(O(!1))}).catch(function(e){Object(N.b)(e.message,{className:"tp-toast-error"}),t(O(!1))})}},W=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).signUpForGame=e.signUpForGame.bind(Object(h.a)(e)),e.submitAnswer=e.submitAnswer.bind(Object(h.a)(e)),e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"signUpForGame",value:function(){return this.props.doingAsync(!0),this.props.signupForGame()}},{key:"submitAnswer",value:function(e){if(e.target.checked)return this.props.doingAsync(!0),this.props.submitAnswer(e.target.value)}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){this.props.getGameObject()}},{key:"render",value:function(){var e=this.props,t=e.user,a=e.game,n=t||{},r=n.username,o=n.account_balance,c=n.account_number,l=n.bank,u=n.signupForNextGameShow,p=a.game,d=a.correct,m=a.wrong,h=a.blockout,b=p||{},f=b.gameison,v=b.pricepool,E=b.possibleWinners;return t?s.a.createElement("div",{className:"tp-main-container"},s.a.createElement("div",{className:"tp-user-header"},s.a.createElement("h4",null,"hi, ",r),s.a.createElement("div",null,s.a.createElement("h4",null,"\u20a6 ",o.toFixed(1)),s.a.createElement("a",{href:"https://paystack.com/pay/topnerz",className:"tp-top-up-account"},"Deposit"))),c&&l?"":s.a.createElement("p",{className:"tp-form-note"},"You have not provided an account number or bank name, please update your profile"),s.a.createElement("div",{className:"tp-question-container"},p&&f&&u?s.a.createElement(G,{question:p.question,submitAnswer:this.submitAnswer,correct:d,wrong:m,blockedout:h}):s.a.createElement("p",{className:"tp-form-note"},"! When you are signed up for a game, and question is available for answering , it will appear here")),s.a.createElement("div",{className:"tp-card-container"},s.a.createElement("div",{className:"tp-card ".concat((f||u)&&"tp-block-out"),onClick:this.signUpForGame},s.a.createElement("div",{className:"tp-card-top"},s.a.createElement("h1",null,"Fastsmart"),s.a.createElement("span",{className:"tp-indicator ".concat(u?"tp-indicator-open":"tp-indicator-close"),label:"Indicates if you are signed up for a game already"})),s.a.createElement("div",{className:"tp-card-bottom"},s.a.createElement("div",{className:"tp-entrance-fee"},s.a.createElement("h4",null,"Entrance fee"),s.a.createElement("h4",null,"\u20a6100")),s.a.createElement("div",{className:"tp-possible-win"},s.a.createElement("h4",null,"Pool"),s.a.createElement("h4",null,"\u20a6",v)),s.a.createElement("div",{className:"tp-possible-win"},s.a.createElement("h4",null,"Top"),s.a.createElement("h4",null,E))))),s.a.createElement(B,null)):s.a.createElement(i.a,{to:"/auth/login"})}}]),t}(r.Component),L=Object(f.b)(function(e){return{user:e.auth.user,game:e.game}},function(e){return{signupForGame:function(){return e(function(e,t){e(O(!0));var a=t().auth.user;g.a.post("".concat(A,"/game/signupforgame"),{user:a},{withCredentials:!0}).then(function(t){var a=t.data,n=a.error,r=a.user,s=a.message,o=a.game;console.log(o),n?Object(N.b)(s,{className:"tp-toast-error"}):(e(k(r)),e(x(o)),Object(N.b)(s,{className:"tp-toast-success"})),e(O(!1))}).catch(function(t){Object(N.b)(t.message,{className:"tp-toast-error"}),e(O(!1))})})},getGameObject:function(){return e(function(e,t){e(O(!0)),g.a.get("".concat(A,"/game")).then(function(t){var a=t.data,n=a.game,r=a.error,s=a.message;r?Object(N.b)(s,{className:"tp-toast-error"}):e(x(n)),e(O(!1))}).catch(function(t){Object(N.b)("".concat(t.message,", couldn't fetch game, try refreshing again"),{className:"tp-toast-error"}),e(O(!1))})})},submitAnswer:function(t){return e(function(e){return function(t,a){t(O(!0));var n=a().auth.user,r=a().game.game.question.answer;g.a.post("".concat(A,"/game/submitanswer"),{user:n,checkanswer:e===r},{withCredentials:!0}).then(function(e){var a=e.data,n=a.error,r=a.user,s=a.message;n?Object(N.b)(s,{className:"tp-toast-error"}):Object(N.b)(s,{className:"tp-toast-success"}),r&&t(k(r)),t(O(!1))}).catch(function(e){Object(N.b)(e.message,{className:"tp-toast-error"}),t(O(!1))})}}(t))},doingAsync:function(t){return e(O(t))}}})(W),V=function(){return s.a.createElement("div",{className:"tp-loader-container"},s.a.createElement("div",{className:"tp-loader"},s.a.createElement("div",{className:"tp-load tp-loader1"}),s.a.createElement("div",{className:"tp-load tp-loader2"}),s.a.createElement("div",{className:"tp-load tp-loader3"}),s.a.createElement("h3",{style:{color:"#fff"}},"Loading...")))},M=j.error,$=j.success,Y=j.setuser,H=j.newuserjoined,J=j.setgameobject,K=j.totalwinnersreached,Q=j.paymentsuccessful,X=j.paymenterror,ee=j.modify,te=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={redirect:!1},e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){this.props.toast.configure({autoClose:!1})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.Socket,a=this.props.toast;t.on(M,function(t){a.isActive(1)?(a.dismiss(1),a(t,{toastId:1,delay:50,type:a.TYPE.INFO,className:"tp-toast-error"})):a(t,{toastId:1,delay:50,type:a.TYPE.INFO,className:"tp-toast-error"}),e.props.doingAsync(!1)}),t.on($,function(t){a.dismiss(2),a(t,{toastId:2,delay:50,type:a.TYPE.INFO,className:"tp-toast-success"}),e.props.doingAsync(!1)}),t.on(Y,function(t){return e.props.setActiveUser(t)}),t.on(J,function(t){e.props.setGameObject(t)}),t.on(K,function(t){return e.props.doingAsync(!1),a(t,{delay:50,type:a.TYPE.INFO,className:"tp-toast-success"})}),t.on(Q,function(t){a(t,{delay:50,className:"tp-toast-success"}),e.setState({redirect:!0}),e.props.doingAsync(!1)}),t.on(X,function(t){a(t,{delay:50,className:"tp-toast-error"}),e.setState({redirect:!0}),e.props.doingAsync(!1)}),t.on(H,function(){t.emit(ee)})}},{key:"render",value:function(){return this.state.redirect?s.a.createElement(i.a,{to:"/dashboard"}):null}}]),t}(r.Component),ae=Object(f.b)(function(e){return{Socket:e.components.Socket}},function(e){return{setGameObject:function(t){return e(x(t))},setActiveUser:function(t){return e(k(t))},doingAsync:function(t){return e(O(t))},updateUserProfile:function(t){return e(C(t))},verifyUserPaymentAndUpdateUserBalance:function(t){return e(Z(t))}}})(te),ne=(a(289),function(){return s.a.createElement("div",{className:"tp-spinner-container"},s.a.createElement("div",{className:"lds-spinner"},s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null)))}),re=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).updateUserProfile=e.updateUserProfile.bind(Object(h.a)(e)),e.handleInputChange=e.handleInputChange.bind(Object(h.a)(e)),e.requestVerification=e.requestVerification.bind(Object(h.a)(e)),e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.id,n=t.value;console.log(a," ",n),this.props.updateProfileInputAction({id:a,value:n})}},{key:"updateUserProfile",value:function(e){var t=this.props.input_data,a=t.name,n=t.bank,r=t.account_number;e.preventDefault();return/^[0-9]{10}$/.test(r)?/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(a)?["Firstbank","GTB","Polaris Bank","Access Bank","UBA","Fidelity Bank","Eco Bank"].includes(n)?this.props.updateUserProfile(t):Object(N.b)("Invalid bank name provided",{delay:50,className:"tp-toast-error"}):Object(N.b)("Invalid name provided",{delay:50,className:"tp-toast-error"}):Object(N.b)("Invalid account number",{delay:50,className:"tp-toast-error"})}},{key:"requestVerification",value:function(e){e.preventDefault(),this.props.requestVerification()}},{key:"render",value:function(){var e=this.props,t=e.user,a=e.input_data,n=t||{},r=n.name,o=n.account_number,c=n.bank,l=n.verified,u=a.name,p=a.bank,d=a.account_number;return t?s.a.createElement("div",{className:"tp-updateprofile-container"},!l&&s.a.createElement("p",{className:"tp-form-note"},"Your account is not verified and thereby limited, please verify your account to get full control"," ",s.a.createElement("a",{onClick:this.requestVerification,style:{color:"red",textDecoration:"underline"}},"Verify Account now")),s.a.createElement("div",{className:"tp-updateprofile-user"}),s.a.createElement("div",{className:"tp-auth-container"},s.a.createElement("h2",{className:"tp-auth-title"},"Update profile"),s.a.createElement("form",{onSubmit:this.updateUserProfile},s.a.createElement("h5",null,"Name: ",r),s.a.createElement("label",{htmlFor:"name",className:"tp-label"},"Name",s.a.createElement("input",{type:"text",placeholder:"new name",className:"tp-input-field",required:!0,value:u,onChange:this.handleInputChange,id:"name"})),s.a.createElement("div",null,s.a.createElement("h5",null,"Bankname: ",c),s.a.createElement("label",{htmlFor:"bank"},"Bank Name"),s.a.createElement("select",{id:"bank",required:!0,value:p,onChange:this.handleInputChange},s.a.createElement("option",{disabled:!0},"Select your bank"),s.a.createElement("option",null,"Firstbank"),s.a.createElement("option",null,"UBA"),s.a.createElement("option",null,"Access Bank"),s.a.createElement("option",null,"Polaris Bank"),s.a.createElement("option",null,"Fidelity Bank"),s.a.createElement("option",null,"GTB"),s.a.createElement("option",null,"Eco Bank"))),s.a.createElement("div",null,s.a.createElement("h5",null,"Account number: ",o),s.a.createElement("label",{htmlFor:"account_number"},"Account number"),s.a.createElement("input",{type:"text",placeholder:"Account number",id:"account_number",value:d,onChange:this.handleInputChange})),s.a.createElement("div",null,s.a.createElement("button",{className:"tp-auth-btn"},"Save Changes"))))):s.a.createElement(i.a,{to:"/auth/login"})}}]),t}(r.Component),se=Object(f.b)(function(e){return{user:e.auth.user,input_data:e.input.updateProfile}},function(e){return{updateUserProfile:function(t){return e(C(t))},updateProfileInputAction:function(t){return e(function(e){return{type:"UPDATE-PROFILE-INPUT",payload:e}}(t))},requestVerification:function(t){return e(function(e,t){e(O(!0)),g.a.post("".concat(I,"auth/account/sendverification"),{},{withCredentials:!0}).then(function(t){var a=t.data,n=a.error,r=a.message;n?Object(N.b)(r,{className:"tp-toast-error"}):Object(N.b)(r,{className:"tp-toast-success"}),e(O(!1))}).catch(function(t){Object(N.b)(t.message,{className:"tp-toast-error"}),e(O(!1))})})}}})(re),oe=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.verifyAccount)(e.match.params)}},{key:"render",value:function(){return null}}]),t}(r.Component),ce=Object(f.b)(null,function(e){return{verifyAccount:function(t){return e(function(e){return function(t,a){t(O(!0)),g.a.post("".concat(I,"auth/account/verify"),{data:e},{withCredentials:!0}).then(function(e){var a=e.data,n=a.error,r=a.message,s=a.user;n?Object(N.b)(r,{className:"tp-toast-error"}):(t(k(s)),Object(N.b)(r,{className:"tp-toast-success"})),t(O(!1))}).catch(function(e){Object(N.b)(e.message,{className:"tp-toast-error"}),t(O(!1))})}}(t))}}})(oe),le=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={valid:!0,checked:!1,input:{password:"Samson1@",confirm_password:"Samson1@"}},e.handleInputChange=e.handleInputChange.bind(Object(h.a)(e)),e.resetPassword=e.resetPassword.bind(Object(h.a)(e)),e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;e.email,e.token;console.log(this.props)}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.id,n=t.value;console.log(a,n);var r=Object(v.a)({},this.state.input,Object(w.a)({},a,n));this.setState({input:r})}},{key:"resetPassword",value:function(e){e.preventDefault();var t=this.state.input,a=t.password,n=t.confirm_password,r=this.props.match.params,s=r.email,o=r.token,c=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,30}$/;return a!==n?Object(N.b)("Passwords do not match",{delay:50,className:"tp-toast-error"}):c.test(a)&&c.test(n)?(this.setState({valid:!0}),this.props.validateResetToken({password:a,email:s,token:o})):(this.setState({valid:!1}),Object(N.b)("Password/Confirm-password must contain uppercase, lowercase, numbers, and symbols",{delay:50,className:"tp-toast-error"}))}},{key:"render",value:function(){var e=this.props.user,t=this.state.input,a=t.password,n=t.confirm_password,r=this.state.valid;return e?s.a.createElement(i.a,{to:"/dashboard"}):s.a.createElement("div",{className:"tp-auth-container"},s.a.createElement("form",{onSubmit:this.resetPassword},s.a.createElement("label",{className:"tp-label"},"Password",s.a.createElement("input",{type:"password",className:"tp-input-field ".concat(!r&&"tp-invalid-field"),placeholder:"Confirm password",value:a,id:"password",onChange:this.handleInputChange,required:!0})),s.a.createElement("label",{className:"tp-label"},"Confirm password",s.a.createElement("input",{type:"password",className:"tp-input-field ".concat(!r&&"tp-invalid-field"),placeholder:"Password",id:"confirm_password",value:n,onChange:this.handleInputChange,required:!0})),s.a.createElement("div",null,s.a.createElement("button",{className:"tp-auth-btn"},"Reset Password"))))}}]),t}(r.Component),ie=Object(f.b)(function(e){return{user:e.auth.user}},function(e){return{validateResetToken:function(t){return e(function(e){return function(t,a){t(O(!0)),g.a.post("".concat(I,"auth/account/reset/validate"),{data:e}).then(function(e){var a=e.data,n=a.error,r=a.message;n?Object(N.b)(r,{className:"tp-toast-error"}):Object(N.b)(r,{className:"tp-toast-success"}),t(O(!1))}).catch(function(e){Object(N.b)(e.message,{className:"tp-toast-error"}),t(O(!1))})}}(t))}}})(le),ue=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={number:1e3},e.handleInputChange=e.handleInputChange.bind(Object(h.a)(e)),e.requestWithdrawal=e.requestWithdrawal.bind(Object(h.a)(e)),e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target.value;this.setState({number:t})}},{key:"requestWithdrawal",value:function(e){var t=this.state.number;e.preventDefault(),this.props.requestWithdrawal(t)}},{key:"render",value:function(){var e=this.state.number,t=this.props.user,a=t||{},n=a.account_balance,r=a.verified,o=n<1e3?"red":"green";return t?s.a.createElement("div",{className:"tp-auth-container"},!r&&s.a.createElement("p",{className:"tp-form-note"},"Account is not verified, withdrawals are limited to \u20a65000"),s.a.createElement("h4",null,"your balance is",s.a.createElement("span",{style:{color:o}}," \u20a6",n)),s.a.createElement("form",{onSubmit:this.requestWithdrawal},s.a.createElement("label",{className:"tp-label"},"Amount to Withdraw",s.a.createElement("input",{type:"number",min:"1000",max:"20000",required:!0,value:e,onChange:this.handleInputChange,placeholder:"Withdraw how much"})),s.a.createElement("div",null,s.a.createElement("button",{className:"tp-auth-btn"},"Request withdrawal")))):s.a.createElement(i.a,{to:"/auth/login"})}}]),t}(r.Component),pe=Object(f.b)(function(e){return{user:e.auth.user}},function(e){return{requestWithdrawal:function(t){return e(function(e){return function(t,a){t(O(!0)),g.a.post("".concat(I,"game/withdrawal"),{amount:e},{withCredentials:!0}).then(function(e){var a=e.data,n=a.error,r=a.user,s=a.message;n?Object(N.b)(s,{className:"tp-toast-error"}):(t(k(r)),Object(N.b)(s,{className:"tp-toast-success"})),t(O(!1))}).catch(function(e){Object(N.b)(e.message,{className:"tp-toast-error"})}),t(O(!1))}}(t))}}})(ue),de=a(154),me=a.n(de),he=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.search,t=me.a.parse(e).reference;this.props.verifyPaymentAndUpdateUserBalance(t)}},{key:"render",value:function(){return null}}]),t}(r.Component),be=Object(f.b)(function(e){return{user:e.auth}},function(e){return{verifyPaymentAndUpdateUserBalance:function(t){return e(Z(t))}}})(he);var fe=Object(f.b)(function(e){return{loading:e.auth.loading,user:e.auth.user,doingAsync:e.components.doingAsync}})(function(e){var t=e.loading,a=e.user,n=e.doingAsync,r=e.socket;return t?s.a.createElement(V,null):s.a.createElement(l.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(N.a,null),s.a.createElement(q,{user:a}),n&&s.a.createElement(ne,null),s.a.createElement(i.d,null,s.a.createElement(i.b,{path:"/auth/signup",exact:!0,component:P}),s.a.createElement(i.b,{path:"/auth/login",exact:!0,component:U}),s.a.createElement(i.b,{path:"/",exact:!0,component:L}),s.a.createElement(i.b,{path:"/dashboard",exact:!0,render:function(e){return s.a.createElement(L,Object.assign({},e,{socket:r}))}}),s.a.createElement(i.b,{path:"/auth/password-reset",exact:!0,component:_}),s.a.createElement(i.b,{path:"/update_profile",exact:!0,render:function(e){return s.a.createElement(se,Object.assign({},e,{user:a}))}}),s.a.createElement(i.b,{path:"/verify_email/:email/:token",exact:!0,component:ce}),s.a.createElement(i.b,{path:"/password_reset/:email/:token",exact:!0,component:ie}),s.a.createElement(i.b,{path:"/withdrawal",exact:!0,component:pe}),s.a.createElement(i.b,{path:"/payment/verify",exact:!0,component:be})),s.a.createElement(ae,{toast:N.b})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=a(34),Ee={login:{email:"",password:""},resetpassword:{email:""},signup:{name:"",email:"",username:"",password:"",confirm_password:""},updateProfile:{name:"Odiagbe Osaro",bank:"Select your bank",account_number:""}},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0,a=t.payload?t.payload:{},n=a.id,r=a.value;switch(t.type){case"LOGIN_INPUT":var s=Object(v.a)({},e.login,Object(w.a)({},n,r));e=Object(v.a)({},e,{login:s});break;case"SIGNUP_INPUT":var o=Object(v.a)({},e.signup,Object(w.a)({},n,r));e=Object(v.a)({},e,{signup:o});break;case"PASSWORD_RESET_INPUT":var c=Object(v.a)({},e.resetpassword,Object(w.a)({},n,r));e=Object(v.a)({},e,{resetpassword:c});break;case"UPDATE-PROFILE-INPUT":var l=Object(v.a)({},e.updateProfile,Object(w.a)({},n,r));e=Object(v.a)({},e,{updateProfile:l})}return e},Oe={signup:{name:!0,email:!0,password:!0,bank:!0,account_number:!0,confirm_password:!0,username:!0,validField:[!1,!1,!1,!1,!1,!1,!1]},login:{email:!0,validfield:!1},passwordreset:{email:!0,validfield:!1}},ye=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,a=arguments.length>1?arguments[1]:void 0,n=a.payload?a.payload:{},r=n.id,s=n.valid,o=n.index;switch(a.type){case"SIGNUP-VALIDATION":var c=t.signup.validField;c[o]=s;var l=Object(v.a)({},t.signup,(e={},Object(w.a)(e,r,s),Object(w.a)(e,"validField",c),e));t=Object(v.a)({},t,{signup:l});break;case"LOGIN-VALIDATION":var i=Object(v.a)({},t.login,{email:s,validfield:s});t=Object(v.a)({},t,{login:i});break;case"PASSWORD-RESET-VALIDATION":var u=Object(v.a)({},t.passwordreset,{email:s,validfield:s});t=Object(v.a)({},t,{passwordreset:u})}return t},Ne={signup:{error:null,success:null},login:{error:null}},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0,a=t.payload||{},n=a.error,r=a.success;switch(t.type){case"SIGNUP-ERROR":var s={error:n,success:r};e=Object(v.a)({},e,{signup:s});break;case"LOGIN-ERROR":console.log(n);var o={error:n};e=Object(v.a)({},e,{login:o})}return e},je={loading:!0,user:null},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0,a=t.payload?t.payload:{},n=a.loading,r=a.user;switch(t.type){case"AUTHENTICATION-END":e=Object(v.a)({},e,{loading:n});break;case"SET-ACTIVE-USER":console.log(r),e=Object(v.a)({},e,{user:r})}return e},Ie={logingin:!1,signingup:!1,dropdownopen:!1,notification:null,Socket:null,doingAsync:!1},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGING-IN-COMP":e=Object(v.a)({},e,{logingin:t.payload});break;case"SIGNING-UP-COMP":e=Object(v.a)({},e,{signingup:t.payload});break;case"DROP-COMP":var a=!e.dropdownopen;e=Object(v.a)({},e,{dropdownopen:a});break;case"NOTIFICATION":var n=t.payload;e=Object(v.a)({},e,{notification:n});break;case"CREATE-SOCKET-CONNECTION":var r=t.payload;e=Object(v.a)({},e,{Socket:r});break;case"DOING-ASYNC":e=Object(v.a)({},e,{doingAsync:t.payload})}return e},Ce=j.setgameobject,Se={game:null},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.payload),t.type){case Ce:e=Object(v.a)({},e,{game:t.payload})}return e},Te=Object(ve.c)({input:ge,validation:ye,error:we,auth:Ae,components:ke,game:Pe}),Ue=a(155),Re=a(156)(A),_e=Object(ve.d)(Te,Object(ve.a)(Ue.a));_e.dispatch(function(e){e(O(!0)),g.a.get("".concat(I,"auth/verify_authentication"),{withCredentials:!0}).then(function(t){var a=t.data,n=a.error,r=a.success;n?(e({type:"AUTHENTICATION-END",payload:{loading:!1}}),e(O(!1))):(e({type:"AUTHENTICATION-END",payload:{loading:!1}}),e(O(!1)),e(k(r.auth)),localStorage.setItem("user",JSON.stringify(Object(v.a)({},r.auth,{password:null}))))}).catch(function(t){e({type:"AUTHENTICATION-END",payload:{loading:!1}}),e(O(!1))})}),_e.getState().components.Socket||_e.dispatch({type:"CREATE-SOCKET-CONNECTION",payload:Re}),c.a.render(s.a.createElement(f.a,{store:_e},s.a.createElement(fe,{socket:Re})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[157,1,2]]]);
//# sourceMappingURL=main.2cd54177.chunk.js.map