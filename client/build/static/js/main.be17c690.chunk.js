(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e,t,a){e.exports=a(327)},162:function(e,t,a){},163:function(e,t,a){},187:function(e,t){},189:function(e,t){},228:function(e,t){},229:function(e,t){},288:function(e,t,a){},324:function(e,t){},327:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),l=a(32),i=a.n(l),c=(a(162),a(163),a(11)),s=a(30),u=a(12),p=a(13),d=a(16),m=a(14),h=a(8),b=a(15),f=a(7),v=a(2),E=a(38),g=a.n(E),y=function(e){return{type:"DOING-ASYNC",payload:e}},O=a(150),N=a(17),w=a(6),j=(n={signupforgame:"SIGN-UP-FOR-GAME",error:"ERROR",success:"SUCCESS",setuser:"SET-USER",submitanswer:"SUBMIT-ANSWER",getgameobject:"GET-GAME",setgameobject:"SET-GAME",blockout:"BLOCK-OUT",youwin:"WIN",totalwinnersreached:"TOTAL-WINNERS-REACHED",wronganswer:"WRONG-ANSWER"},Object(w.a)(n,"submitanswer","SUBMIT-ANSWER"),Object(w.a)(n,"updateprofile","UPDATE-PROFILE"),Object(w.a)(n,"turngameonoroff","TURN-ON-OFF"),Object(w.a)(n,"verifyaccount","VERIFY"),Object(w.a)(n,"passwordreset","PASSWORDRESET"),Object(w.a)(n,"verifyreset","VERIFYRESET"),Object(w.a)(n,"resetuser","RESETUSER"),Object(w.a)(n,"withdrawcash","WITHDRAW-CASH"),Object(w.a)(n,"verifyuserpayment","VERIFY-USER-PAYMENT"),Object(w.a)(n,"paymentsuccessful","PAYMENT-SUCCESSFUL"),Object(w.a)(n,"retrypayment","RETRY-PAYMENT"),Object(w.a)(n,"paymenterror","PAYMENT-ERROR"),Object(w.a)(n,"requestverification","REQUEST-VERIFICATION"),Object(w.a)(n,"newuserjoined","NEW-USER-JOINED-GAME"),Object(w.a)(n,"modify","MODIFY"),n),k=j.updateprofile,A=j.verifyaccount,I=j.passwordreset,C=j.verifyreset,S=j.withdrawcash,P=j.requestverification,T="".concat("https://topner.herokuapp.com","/"),R=function(e){return{type:"SET-ACTIVE-USER",payload:{user:e}}},U=function(e){return function(t,a){t(y(!0));var n=a().components.Socket,r=a().auth.user;n.emit(k,{data:e,_id:r})}},_=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).handleInputChange=e.handleInputChange.bind(Object(h.a)(e)),e.validateField=e.validateField.bind(Object(h.a)(e)),e.createUserAccount=e.createUserAccount.bind(Object(h.a)(e)),e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.id,n=t.value;this.props.signupInputAction({id:a,value:n}),this.props.signupInputValidation({id:a,value:n})}},{key:"validateField",value:function(e){var t=e.target,a=t.id,n=t.value;this.props.signupInputValidation({id:a,value:n})}},{key:"createUserAccount",value:function(e){e.preventDefault(),this.props.createUserAccount(this.props.signup_input_data)}},{key:"render",value:function(){var e=this.props,t=e.signup_input_data,a=e.validation,n=e.auth,r=e.signingup,l=t.name,i=t.email,c=t.username,u=t.password,p=(t.bank,t.account_number,t.confirm_password),d=a.name,m=a.email,h=a.username,b=a.password,f=(a.bank,a.account_number,a.confirm_password),v=r?o.a.createElement("button",{className:"tp-auth-btn",disabled:!0},o.a.createElement("i",{className:"fas fa-circle-notch fa-spin"})," Creating account..."):o.a.createElement("button",{className:"tp-auth-btn",disabled:!1},"Create Account");return n?o.a.createElement(s.a,{to:"/dashboard"}):o.a.createElement("div",{className:"tp-auth-container"},o.a.createElement("h2",{className:"tp-auth-title"},"Sign up"),o.a.createElement("form",{onSubmit:this.createUserAccount},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"name"},"Fullname"),o.a.createElement("input",{type:"text",className:"tp-input-field ".concat(d?"":"tp-invalid-field"),placeholder:"John Doe",id:"name",required:!0,value:l,onChange:this.handleInputChange,onBlur:this.validateField}),!d&&o.a.createElement("p",{className:"tp-field-error"},"*field is not valid")),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{type:"email",placeholder:"Email",className:"tp-input-field ".concat(m?"":"tp-invalid-field"),id:"email",required:!0,value:i,onChange:this.handleInputChange,onBlur:this.validateField}),!m&&o.a.createElement("p",{className:"tp-field-error"},"*email is not valid")),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"username"},"Username"),o.a.createElement("input",{type:"text",className:"tp-input-field ".concat(h?"":"tp-invalid-field"),placeholder:"Username",id:"username",required:!0,value:c,onChange:this.handleInputChange,onBlur:this.validateField}),o.a.createElement("p",{className:"tp-form-note"},"* Username can only have letters and _"),!h&&o.a.createElement("p",{className:"tp-field-error"},"*Username can contain only letters and _")),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{type:"password",className:"tp-input-field ".concat(b?"":"tp-invalid-field"),placeholder:"Password",id:"password",required:!0,value:u,onChange:this.handleInputChange,onBlur:this.validateField}),o.a.createElement("div",{className:"tp-form-note"},o.a.createElement("p",null,"* must have an uppercase"),o.a.createElement("p",null,"* must have a lowercase"),o.a.createElement("p",null,"* must have a number"),o.a.createElement("p",null,"* must have any of this #$^+=!*()@%&")),!b&&o.a.createElement("p",{className:"tp-field-error"},"*password must contain numbers,lowercase, uppercas, any of this [@#$%..]")),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"confirm_password"},"Confirm Password"),o.a.createElement("input",{type:"password",className:"tp-input-field ".concat(f?"":"tp-invalid-field"),placeholder:"Confirm Password",id:"confirm_password",required:!0,value:p,onChange:this.handleInputChange,onBlur:this.validateField}),!f&&o.a.createElement("p",{className:"tp-field-error"},"*passwords do not match")),o.a.createElement("div",null,v)))}}]),t}(r.Component),F=Object(f.b)(function(e){return{signup_input_data:e.input.signup,validation:e.validation.signup,error:e.error.signup,auth:e.auth.user,signingup:e.components.signingup}},function(e){return{signupInputAction:function(t){e(function(e){return{type:"SIGNUP_INPUT",payload:e}}(t))},signupInputValidation:function(t){e(function(e){return function(t,a){var n,r=e.id,o=e.value,l={type:"SIGNUP-VALIDATION",payload:{id:r,valid:null}};switch(r){case"name":n=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(o),l=Object(v.a)({},l,{payload:{id:r,valid:n,index:0}});break;case"email":n=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(o),l=Object(v.a)({},l,{payload:{id:r,valid:n,index:1}});break;case"password":t({type:"SIGNUP-VALIDATION",payload:{id:"confirm_password",valid:a().input.signup.confirm_password===o,index:5}}),n=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,30}$/.test(o),l=Object(v.a)({},l,{payload:{id:r,valid:n,index:5}});break;case"bank":n=["Firstbank","GTB","Polaris Bank","Access Bank","UBA","Fidelity Bank","Eco Bank"].includes(o),l=Object(v.a)({},l,{payload:{id:r,valid:n,index:3}});break;case"account_number":n=/^[0-9]{10}$/.test(o),l=Object(v.a)({},l,{payload:{id:r,valid:n,index:4}});break;case"confirm_password":n=o===a().input.signup.password,l=Object(v.a)({},l,{payload:{id:r,valid:n,index:6}});break;case"username":var i={id:r,valid:n=/^[a-z0-9-_A-Z]{6,30}$/.test(o),index:2};l=Object(v.a)({},l,{payload:i})}t(l)}}(t))},createUserAccount:function(t){e(function(e){return function(t,a){t(y(!0)),g.a.post("".concat(T,"auth/signup"),e,{withCredentials:!0}).then(function(e){var a=e.data,n=a.error,r=a.success;n?(t({type:"SIGNUP-ERROR",payload:{error:n.message,success:null}}),t(y(!1)),Object(N.b)(n.message,{delay:50,className:"tp-toast-error"})):(t({type:"SIGNUP-SUCCESS",payload:{error:null,success:r.message}}),t(y(!1)),Object(N.b)("Account created successfully, you can login now",{delay:50,className:"tp-toast-success"}))}).catch(function(e){t({type:"SIGNUP-ERROR",payload:e.message}),t(y(!1)),Object(N.b)(e.message,{delay:50,className:"tp-toast-error"})})}}(t))}}})(_),G=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).handleInputChange=e.handleInputChange.bind(Object(h.a)(e)),e.validateField=e.validateField.bind(Object(h.a)(e)),e.logUserIn=e.logUserIn.bind(Object(h.a)(e)),e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.id,n=t.value;this.props.loginInputAction({id:a,value:n})}},{key:"validateField",value:function(e){}},{key:"logUserIn",value:function(e){e.preventDefault(),this.props.loguserin(this.props.login_input_data)}},{key:"render",value:function(){var e=this.props,t=e.login_input_data,a=e.validation,n=e.auth,r=e.logingin,l=t.email,i=t.password,u=a.email,p=r?o.a.createElement("button",{className:"tp-auth-btn",disabled:!0},o.a.createElement("i",{className:"fas fa-circle-notch fa-spin"})," Loging in..."):o.a.createElement("button",{className:"tp-auth-btn",disabled:!1},"Log in");return n?o.a.createElement(s.a,{to:"/dashboard"}):o.a.createElement("div",{className:"tp-auth-container"},o.a.createElement("h2",{className:"tp-auth-title"},"Login"),o.a.createElement("form",{onSubmit:this.logUserIn},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{type:"email",id:"email",placeholder:"Email",required:!0,className:"tp-input-field ".concat(u?"":"tp-invalid-field"),value:l,onChange:this.handleInputChange,onBlur:this.validateField}),!u&&o.a.createElement("p",{className:"tp-field-error"},"* email is invalid")),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{type:"password",id:"password",placeholder:"password",required:!0,className:"tp-input-field",value:i,onChange:this.handleInputChange})),o.a.createElement("div",null,p),o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement(c.b,{to:"/auth/password-reset",className:"tp-forgot-password"},"Forgot Password")))))}}]),t}(r.Component),q=Object(f.b)(function(e){return{login_input_data:e.input.login,validation:e.validation.login,auth:e.auth.user,error:e.error.login,logingin:e.components.logingin}},function(e){return{loginInputAction:function(t){e(function(e){return{type:"LOGIN_INPUT",payload:e}}(t))},loginValidation:function(t){e({type:"LOGIN-VALIDATION",payload:{valid:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)}})},loguserin:function(t){return e(function(e){return function(t,a){t(y(!0)),g.a.post("".concat(T,"auth/login"),e,{withCredentials:!0}).then(function(e){var a=e.data,n=a.error,r=a.success;if(n)t({type:"LOGIN-ERROR",payload:{error:n}}),t(y(!1)),Object(N.b)("Invalid credentials provided",{delay:50,className:"tp-toast-error"});else{var o=O.verify(r.auth,"posiedonathenazeuskratoshydra");t({type:"SET-ACTIVE-USER",payload:{user:o.auth}}),t(y(!1))}}).catch(function(e){console.log(e),t({type:"LOGIN-ERROR",payload:{error:"Invalid credentials provided"}}),t(y(!1)),Object(N.b)(e.message,{delay:50,className:"tp-toast-error"})})}}(t))}}})(G),D=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).handleInputChange=e.handleInputChange.bind(Object(h.a)(e)),e.requestPasswordReset=e.requestPasswordReset.bind(Object(h.a)(e)),e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.id,n=t.value;this.props.passwordResetInputAction({id:a,value:n})}},{key:"requestPasswordReset",value:function(e){e.preventDefault();var t=this.props.resetpassword_input_data.email;this.props.requestPasswordReset(t)}},{key:"render",value:function(){var e=this.props,t=e.validation,a=e.resetpassword_input_data,n=e.user,r=a.email,l=t.email;t.validfield;return n?o.a.createElement(s.a,{to:"/dashboard"}):o.a.createElement("div",{className:"tp-auth-container"},o.a.createElement("h2",{className:"tp-auth-title"},"Password Reset"),o.a.createElement("form",{onSubmit:this.requestPasswordReset},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{type:"email",placeholder:"email",id:"email",required:!0,className:"tp-input-field ".concat(l?"":"tp-invalid-field"),value:r,onChange:this.handleInputChange})),o.a.createElement("div",null,o.a.createElement("button",{className:"tp-auth-btn"},"Send reset link"))))}}]),t}(r.Component),B=Object(f.b)(function(e){return{resetpassword_input_data:e.input.resetpassword,validation:e.validation.passwordreset,user:e.auth.user}},function(e){return{passwordResetInputAction:function(t){e(function(e){return{type:"PASSWORD_RESET_INPUT",payload:e}}(t))},passwordResetValidation:function(t){e({type:"PASSWORD-RESET-VALIDATION",payload:{valid:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)}})},requestPasswordReset:function(t){e(function(e){return function(t,a){t(y(!0)),a().components.Socket.emit(I,e)}}(t))}}})(D),z=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("li",null,o.a.createElement(c.c,{activeClassName:"tp-active-link-class",exact:!0,to:"/auth/login"},"Login")),o.a.createElement("li",null,o.a.createElement(c.c,{activeClassName:"tp-active-link-class",exact:!0,to:"/auth/signup"},"Signup")))},W=Object(f.b)(function(e){return{dropdown:e.components.dropdownopen}},function(e){return{loguserout:function(t){return t.preventDefault(),e(function(e){e(y(!0)),g.a.post("".concat(T,"auth/logout"),{},{withCredentials:!0}).then(function(t){t.data.error?e(y(!1)):(e(R(null)),e(y(!1)))}).catch(function(t){e(y(!0))})})},openDropdown:function(){return e((console.log("opening drop down action "),{type:"DROP-COMP",payload:null}))}}})(function(e){var t=e.user,a=e.loguserout,n=e.dropdown,r=e.openDropdown;return o.a.createElement(o.a.Fragment,null,o.a.createElement("li",null,o.a.createElement("div",{className:"tp-initials",onClick:r},o.a.createElement("span",null,t.username[0]),o.a.createElement("div",{className:"tp-drop-down ".concat(n?"tp-open":"")},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.b,{to:"/update_profile"},"Update profile")),o.a.createElement("li",null,o.a.createElement(c.b,{to:"/withdrawal"},"Withdraw cash")),o.a.createElement("li",null,o.a.createElement("a",{href:"javascript:void(0)",onClick:a},"logout")))))))}),x=function(e){var t=e.user,a=t?o.a.createElement(W,{user:t}):o.a.createElement(z,null);return o.a.createElement("nav",{className:"tp-navigation"},o.a.createElement(c.b,{to:"/dashboard",className:"tp-brand"},"Topners"),o.a.createElement("ul",null,a))},Z=(a(288),function(e){var t=e.question,a=e.submitAnswer,n=e.blockedout,r=t.option.map(function(e,t){return o.a.createElement("label",{className:"tp-radio-container",key:t},e,o.a.createElement("input",{type:"radio",name:"answer",onChange:a,value:e}),o.a.createElement("span",{className:"tp-checkmark"}))});return o.a.createElement("div",{className:"tp-question"},o.a.createElement("h3",{className:"tp-question-head"},t.question),n?o.a.createElement("h2",{style:{color:"red"}},"Blocked out"):o.a.createElement("form",null,o.a.createElement("div",null,r)))}),L=function(){return o.a.createElement("div",{className:"tp-how-it-works"},o.a.createElement("h2",{className:"tp-how"},"How it works ?"),o.a.createElement("div",{className:"tp-step"},o.a.createElement("h4",null,"Step 1"),o.a.createElement("h5",null,"Deposit into your accout"),o.a.createElement("p",null,"The very first step is to pay money into your account, account with amount less than 100 would be blocked out of joining games, be rest assured that paying with us is very safe and secure")),o.a.createElement("div",{className:"tp-step"},o.a.createElement("h4",null,"Step 2"),o.a.createElement("h5",null,"Sign up for game"),o.a.createElement("p",null,"After depositing into your account, the next step is to sign up for a game, then wait to recieve questions for answering")),o.a.createElement("div",{className:"tp-step"},o.a.createElement("h4",null,"Step 3"),o.a.createElement("h5",null,"Got question?, be smart and fast"),o.a.createElement("p",null,"Questions are posted every"," ",o.a.createElement("b",null,"Sunday, at 7:30pm, dont just get them right, you need to be fast and fall among the top people, because only the ",o.a.createElement("b",null,"Topners")," win"))),o.a.createElement("div",{className:"tp-step"},o.a.createElement("h4",null,"Step 4"),o.a.createElement("h5",null,"I won , time to get paid"),o.a.createElement("p",null,"The best part, payments are made during the following week after previous game, please note that payments are made into the provided account number")),o.a.createElement("div",{className:"tp-step"},o.a.createElement("h4",{style:{color:"red"}},"Note"),o.a.createElement("p",null,"Questions are removed 10 minutes after they have been posted, in other words you have the first ten minutes after the question has been posted to answer them")))},V=j.signupforgame,M=j.submitanswer,$=j.getgameobject,Y=j.setgameobject,H=j.verifyuserpayment,J=function(e){return function(t,a){t(y(!0));var n=a().components.Socket,r=localStorage.getItem("user");n.emit(H,{reference:e,user:r})}},K=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).signUpForGame=e.signUpForGame.bind(Object(h.a)(e)),e.submitAnswer=e.submitAnswer.bind(Object(h.a)(e)),e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"signUpForGame",value:function(){return this.props.doingAsync(!0),this.props.signupForGame()}},{key:"submitAnswer",value:function(e){if(e.target.checked)return this.props.doingAsync(!0),this.props.submitAnswer(e.target.value)}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){this.props.getGameObject()}},{key:"render",value:function(){var e=this.props,t=e.user,a=e.game,n=t||{},r=n.username,l=n.account_balance,i=n.account_number,c=n.bank,u=n.signupForNextGameShow,p=a.game,d=a.correct,m=a.wrong,h=a.blockout,b=p||{},f=b.gameison,v=b.pricepool,E=b.possibleWinners;return t?o.a.createElement("div",{className:"tp-main-container"},o.a.createElement("div",{className:"tp-user-header"},o.a.createElement("h4",null,"hi, ",r),o.a.createElement("div",null,o.a.createElement("h4",null,"\u20a6 ",l.toFixed(1)),o.a.createElement("a",{href:"https://paystack.com/pay/topnerz",className:"tp-top-up-account"},"Deposit"))),i&&c?"":o.a.createElement("p",{className:"tp-form-note"},"You have not provided an account number or bank name, please update your profile"),o.a.createElement("div",{className:"tp-question-container"},p&&f&&u?o.a.createElement(Z,{question:p.question,submitAnswer:this.submitAnswer,correct:d,wrong:m,blockedout:h}):o.a.createElement("p",{className:"tp-form-note"},"! When you are signed up for a game, and question is available for answering , it will appear here")),o.a.createElement("div",{className:"tp-card-container"},o.a.createElement("div",{className:"tp-card ".concat((f||u)&&"tp-block-out"),onClick:this.signUpForGame},o.a.createElement("div",{className:"tp-card-top"},o.a.createElement("h1",null,"Fastsmart"),o.a.createElement("span",{className:"tp-indicator ".concat(u?"tp-indicator-open":"tp-indicator-close"),label:"Indicates if you are signed up for a game already"})),o.a.createElement("div",{className:"tp-card-bottom"},o.a.createElement("div",{className:"tp-entrance-fee"},o.a.createElement("h4",null,"Entrance fee"),o.a.createElement("h4",null,"\u20a6100")),o.a.createElement("div",{className:"tp-possible-win"},o.a.createElement("h4",null,"Pool"),o.a.createElement("h4",null,"\u20a6",v)),o.a.createElement("div",{className:"tp-possible-win"},o.a.createElement("h4",null,"Top"),o.a.createElement("h4",null,E))))),o.a.createElement(L,null)):o.a.createElement(s.a,{to:"/auth/login"})}}]),t}(r.Component),Q=Object(f.b)(function(e){return{user:e.auth.user,game:e.game}},function(e){return{signupForGame:function(){return e(function(e,t){e(y(!0));var a=t().auth.user;t().components.Socket.emit(V,a)})},getGameObject:function(){return e(function(e,t){t().components.Socket.emit($)})},submitAnswer:function(t){return e(function(e){return function(t,a){t(y(!0));var n=a().auth.user,r=a().game.game.question.answer,o=a().game.game.totalNumberOfWinners;a().components.Socket.emit(M,{user:n,checkanswer:e===r,totalNumberOfWinners:o})}}(t))},doingAsync:function(t){return e(y(t))}}})(K),X=function(){return o.a.createElement("div",{className:"tp-loader-container"},o.a.createElement("div",{className:"tp-loader"},o.a.createElement("div",{className:"tp-load tp-loader1"}),o.a.createElement("div",{className:"tp-load tp-loader2"}),o.a.createElement("div",{className:"tp-load tp-loader3"}),o.a.createElement("h3",{style:{color:"#fff"}},"Loading...")))},ee=j.error,te=j.success,ae=j.setuser,ne=j.newuserjoined,re=j.setgameobject,oe=j.totalwinnersreached,le=j.paymentsuccessful,ie=j.paymenterror,ce=j.modify,se=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={redirect:!1},e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){this.props.toast.configure({autoClose:!1})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.Socket,a=this.props.toast;t.on(ee,function(t){a.isActive(1)?(a.dismiss(1),a(t,{toastId:1,delay:50,type:a.TYPE.INFO,className:"tp-toast-error"})):a(t,{toastId:1,delay:50,type:a.TYPE.INFO,className:"tp-toast-error"}),e.props.doingAsync(!1)}),t.on(te,function(t){a.dismiss(2),a(t,{toastId:2,delay:50,type:a.TYPE.INFO,className:"tp-toast-success"}),e.props.doingAsync(!1)}),t.on(ae,function(t){return e.props.setActiveUser(t)}),t.on(re,function(t){e.props.setGameObject(t)}),t.on(oe,function(t){return e.props.doingAsync(!1),a(t,{delay:50,type:a.TYPE.INFO,className:"tp-toast-success"})}),t.on(le,function(t){a(t,{delay:50,className:"tp-toast-success"}),e.setState({redirect:!0}),e.props.doingAsync(!1)}),t.on(ie,function(t){a(t,{delay:50,className:"tp-toast-error"}),e.setState({redirect:!0}),e.props.doingAsync(!1)}),t.on(ne,function(){t.emit(ce)})}},{key:"render",value:function(){return this.state.redirect?o.a.createElement(s.a,{to:"/dashboard"}):null}}]),t}(r.Component),ue=Object(f.b)(function(e){return{Socket:e.components.Socket}},function(e){return{setGameObject:function(t){return e((a=t,function(e,t){e({type:Y,payload:a})}));var a},setActiveUser:function(t){return e(R(t))},doingAsync:function(t){return e(y(t))},updateUserProfile:function(t){return e(U(t))},verifyUserPaymentAndUpdateUserBalance:function(t){return e(J(t))}}})(se),pe=(a(289),function(){return o.a.createElement("div",{className:"tp-spinner-container"},o.a.createElement("div",{className:"lds-spinner"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null)))}),de=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).updateUserProfile=e.updateUserProfile.bind(Object(h.a)(e)),e.handleInputChange=e.handleInputChange.bind(Object(h.a)(e)),e.requestVerification=e.requestVerification.bind(Object(h.a)(e)),e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.id,n=t.value;console.log(a," ",n),this.props.updateProfileInputAction({id:a,value:n})}},{key:"updateUserProfile",value:function(e){var t=this.props.input_data,a=t.name,n=t.bank,r=t.account_number;e.preventDefault();return/^[0-9]{10}$/.test(r)?/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(a)?["Firstbank","GTB","Polaris Bank","Access Bank","UBA","Fidelity Bank","Eco Bank"].includes(n)?this.props.updateUserProfile(t):Object(N.b)("Invalid bank name provided",{delay:50,className:"tp-toast-error"}):Object(N.b)("Invalid name provided",{delay:50,className:"tp-toast-error"}):Object(N.b)("Invalid account number",{delay:50,className:"tp-toast-error"})}},{key:"requestVerification",value:function(e){e.preventDefault(),this.props.requestVerification()}},{key:"render",value:function(){var e=this.props,t=e.user,a=e.input_data,n=t||{},r=n.name,l=n.account_number,i=n.bank,c=n.verified,u=a.name,p=a.bank,d=a.account_number;return t?o.a.createElement("div",{className:"tp-updateprofile-container"},!c&&o.a.createElement("p",{className:"tp-form-note"},"Your account is not verified and thereby limited, please verify your account to get full control"," ",o.a.createElement("a",{onClick:this.requestVerification,style:{color:"red",textDecoration:"underline"}},"Verify Account now")),o.a.createElement("div",{className:"tp-updateprofile-user"}),o.a.createElement("div",{className:"tp-auth-container"},o.a.createElement("h2",{className:"tp-auth-title"},"Update profile"),o.a.createElement("form",{onSubmit:this.updateUserProfile},o.a.createElement("h5",null,"Name: ",r),o.a.createElement("label",{htmlFor:"name",className:"tp-label"},"Name",o.a.createElement("input",{type:"text",placeholder:"new name",className:"tp-input-field",required:!0,value:u,onChange:this.handleInputChange,id:"name"})),o.a.createElement("div",null,o.a.createElement("h5",null,"Bankname: ",i),o.a.createElement("label",{htmlFor:"bank"},"Bank Name"),o.a.createElement("select",{id:"bank",required:!0,value:p,onChange:this.handleInputChange},o.a.createElement("option",{disabled:!0},"Select your bank"),o.a.createElement("option",null,"Firstbank"),o.a.createElement("option",null,"UBA"),o.a.createElement("option",null,"Access Bank"),o.a.createElement("option",null,"Polaris Bank"),o.a.createElement("option",null,"Fidelity Bank"),o.a.createElement("option",null,"GTB"),o.a.createElement("option",null,"Eco Bank"))),o.a.createElement("div",null,o.a.createElement("h5",null,"Account number: ",l),o.a.createElement("label",{htmlFor:"account_number"},"Account number"),o.a.createElement("input",{type:"text",placeholder:"Account number",id:"account_number",value:d,onChange:this.handleInputChange})),o.a.createElement("div",null,o.a.createElement("button",{className:"tp-auth-btn"},"Save Changes"))))):o.a.createElement(s.a,{to:"/auth/login"})}}]),t}(r.Component),me=Object(f.b)(function(e){return{user:e.auth.user,input_data:e.input.updateProfile}},function(e){return{updateUserProfile:function(t){return e(U(t))},updateProfileInputAction:function(t){return e(function(e){return{type:"UPDATE-PROFILE-INPUT",payload:e}}(t))},requestVerification:function(t){return e(function(e,t){e(y(!0));var a=t().components.Socket,n=t().auth.user;a.emit(P,{user:n})})}}})(de),he=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.verifyAccount)(e.match.params)}},{key:"render",value:function(){return null}}]),t}(r.Component),be=Object(f.b)(null,function(e){return{verifyAccount:function(t){return e(function(e){return function(t,a){t(y(!0));var n=a().components.Socket;console.log(n),n.emit(A,e)}}(t))}}})(he),fe=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={valid:!0,checked:!1,input:{password:"Samson1@",confirm_password:"Samson1@"}},e.handleInputChange=e.handleInputChange.bind(Object(h.a)(e)),e.resetPassword=e.resetPassword.bind(Object(h.a)(e)),e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;e.email,e.token;console.log(this.props)}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.id,n=t.value;console.log(a,n);var r=Object(v.a)({},this.state.input,Object(w.a)({},a,n));this.setState({input:r})}},{key:"resetPassword",value:function(e){e.preventDefault();var t=this.state.input,a=t.password,n=t.confirm_password,r=this.props.match.params,o=r.email,l=r.token,i=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,30}$/;return a!==n?Object(N.b)("Passwords do not match",{delay:50,className:"tp-toast-error"}):i.test(a)&&i.test(n)?(this.setState({valid:!0}),this.props.validateResetToken({password:a,email:o,token:l})):(this.setState({valid:!1}),Object(N.b)("Password/Confirm-password must contain uppercase, lowercase, numbers, and symbols",{delay:50,className:"tp-toast-error"}))}},{key:"render",value:function(){var e=this.props.user,t=this.state.input,a=t.password,n=t.confirm_password,r=this.state.valid;return e?o.a.createElement(s.a,{to:"/dashboard"}):o.a.createElement("div",{className:"tp-auth-container"},o.a.createElement("form",{onSubmit:this.resetPassword},o.a.createElement("label",{className:"tp-label"},"Password",o.a.createElement("input",{type:"password",className:"tp-input-field ".concat(!r&&"tp-invalid-field"),placeholder:"Confirm password",value:a,id:"password",onChange:this.handleInputChange,required:!0})),o.a.createElement("label",{className:"tp-label"},"Confirm password",o.a.createElement("input",{type:"password",className:"tp-input-field ".concat(!r&&"tp-invalid-field"),placeholder:"Password",id:"confirm_password",value:n,onChange:this.handleInputChange,required:!0})),o.a.createElement("div",null,o.a.createElement("button",{className:"tp-auth-btn"},"Reset Password"))))}}]),t}(r.Component),ve=Object(f.b)(function(e){return{user:e.auth.user}},function(e){return{validateResetToken:function(t){return e(function(e){return function(t,a){t(y(!0)),a().components.Socket.emit(C,e)}}(t))}}})(fe),Ee=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={number:1e3},e.handleInputChange=e.handleInputChange.bind(Object(h.a)(e)),e.requestWithdrawal=e.requestWithdrawal.bind(Object(h.a)(e)),e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target.value;this.setState({number:t})}},{key:"requestWithdrawal",value:function(e){var t=this.state.number;e.preventDefault(),this.props.requestWithdrawal(t)}},{key:"render",value:function(){var e=this.state.number,t=this.props.user,a=t||{},n=a.account_balance,r=a.verified,l=n<1e3?"red":"green";return t?o.a.createElement("div",{className:"tp-auth-container"},!r&&o.a.createElement("p",{className:"tp-form-note"},"Account is not verified, withdrawals are limited to \u20a65000"),o.a.createElement("h4",null,"your balance is",o.a.createElement("span",{style:{color:l}}," \u20a6",n)),o.a.createElement("form",{onSubmit:this.requestWithdrawal},o.a.createElement("label",{className:"tp-label"},"Amount to Withdraw",o.a.createElement("input",{type:"number",min:"1000",max:"20000",required:!0,value:e,onChange:this.handleInputChange,placeholder:"Withdraw how much"})),o.a.createElement("div",null,o.a.createElement("button",{className:"tp-auth-btn"},"Request withdrawal")))):o.a.createElement(s.a,{to:"/auth/login"})}}]),t}(r.Component),ge=Object(f.b)(function(e){return{user:e.auth.user}},function(e){return{requestWithdrawal:function(t){return e(function(e){return function(t,a){t(y(!0));var n=a().components.Socket,r=a().auth.user;n.emit(S,{user:r,amount:e})}}(t))}}})(Ee),ye=a(154),Oe=a.n(ye),Ne=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.search,t=Oe.a.parse(e).reference;this.props.verifyPaymentAndUpdateUserBalance(t)}},{key:"render",value:function(){return null}}]),t}(r.Component),we=Object(f.b)(function(e){return{user:e.auth}},function(e){return{verifyPaymentAndUpdateUserBalance:function(t){return e(J(t))}}})(Ne);var je=Object(f.b)(function(e){return{loading:e.auth.loading,user:e.auth.user,doingAsync:e.components.doingAsync}})(function(e){var t=e.loading,a=e.user,n=e.doingAsync,r=e.socket;return t?o.a.createElement(X,null):o.a.createElement(c.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(N.a,null),o.a.createElement(x,{user:a}),n&&o.a.createElement(pe,null),o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/auth/signup",exact:!0,component:F}),o.a.createElement(s.b,{path:"/auth/login",exact:!0,component:q}),o.a.createElement(s.b,{path:"/",exact:!0,component:Q}),o.a.createElement(s.b,{path:"/dashboard",exact:!0,render:function(e){return o.a.createElement(Q,Object.assign({},e,{socket:r}))}}),o.a.createElement(s.b,{path:"/auth/password-reset",exact:!0,component:B}),o.a.createElement(s.b,{path:"/update_profile",exact:!0,render:function(e){return o.a.createElement(me,Object.assign({},e,{user:a}))}}),o.a.createElement(s.b,{path:"/verify_email/:email/:token",exact:!0,component:be}),o.a.createElement(s.b,{path:"/password_reset/:email/:token",exact:!0,component:ve}),o.a.createElement(s.b,{path:"/withdrawal",exact:!0,component:ge}),o.a.createElement(s.b,{path:"/payment/verify",exact:!0,component:we})),o.a.createElement(ue,{toast:N.b})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=a(33),Ae={login:{email:"",password:""},resetpassword:{email:""},signup:{name:"",email:"",username:"",password:"",confirm_password:""},updateProfile:{name:"Odiagbe Osaro",bank:"Select your bank",account_number:""}},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0,a=t.payload?t.payload:{},n=a.id,r=a.value;switch(t.type){case"LOGIN_INPUT":var o=Object(v.a)({},e.login,Object(w.a)({},n,r));e=Object(v.a)({},e,{login:o});break;case"SIGNUP_INPUT":var l=Object(v.a)({},e.signup,Object(w.a)({},n,r));e=Object(v.a)({},e,{signup:l});break;case"PASSWORD_RESET_INPUT":var i=Object(v.a)({},e.resetpassword,Object(w.a)({},n,r));e=Object(v.a)({},e,{resetpassword:i});break;case"UPDATE-PROFILE-INPUT":var c=Object(v.a)({},e.updateProfile,Object(w.a)({},n,r));e=Object(v.a)({},e,{updateProfile:c})}return e},Ce={signup:{name:!0,email:!0,password:!0,bank:!0,account_number:!0,confirm_password:!0,username:!0,validField:[!1,!1,!1,!1,!1,!1,!1]},login:{email:!0,validfield:!1},passwordreset:{email:!0,validfield:!1}},Se=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,a=arguments.length>1?arguments[1]:void 0,n=a.payload?a.payload:{},r=n.id,o=n.valid,l=n.index;switch(a.type){case"SIGNUP-VALIDATION":var i=t.signup.validField;i[l]=o;var c=Object(v.a)({},t.signup,(e={},Object(w.a)(e,r,o),Object(w.a)(e,"validField",i),e));t=Object(v.a)({},t,{signup:c});break;case"LOGIN-VALIDATION":var s=Object(v.a)({},t.login,{email:o,validfield:o});t=Object(v.a)({},t,{login:s});break;case"PASSWORD-RESET-VALIDATION":var u=Object(v.a)({},t.passwordreset,{email:o,validfield:o});t=Object(v.a)({},t,{passwordreset:u})}return t},Pe={signup:{error:null,success:null},login:{error:null}},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0,a=t.payload||{},n=a.error,r=a.success;switch(t.type){case"SIGNUP-ERROR":var o={error:n,success:r};e=Object(v.a)({},e,{signup:o});break;case"LOGIN-ERROR":console.log(n);var l={error:n};e=Object(v.a)({},e,{login:l})}return e},Re={loading:!0,user:null},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0,a=t.payload?t.payload:{},n=a.loading,r=a.user;switch(t.type){case"AUTHENTICATION-END":e=Object(v.a)({},e,{loading:n});break;case"SET-ACTIVE-USER":console.log(r),e=Object(v.a)({},e,{user:r})}return e},_e={logingin:!1,signingup:!1,dropdownopen:!1,notification:null,Socket:null,doingAsync:!1},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGING-IN-COMP":e=Object(v.a)({},e,{logingin:t.payload});break;case"SIGNING-UP-COMP":e=Object(v.a)({},e,{signingup:t.payload});break;case"DROP-COMP":var a=!e.dropdownopen;e=Object(v.a)({},e,{dropdownopen:a});break;case"NOTIFICATION":var n=t.payload;e=Object(v.a)({},e,{notification:n});break;case"CREATE-SOCKET-CONNECTION":var r=t.payload;e=Object(v.a)({},e,{Socket:r});break;case"DOING-ASYNC":e=Object(v.a)({},e,{doingAsync:t.payload})}return e},Ge=j.setgameobject;console.log(Ge);var qe={game:null,blockout:!1},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-GAME-OBJECT":e=Object(v.a)({},e,{game:t.payload.game});break;case"WRONG-OR-RIGHT":e=Object(v.a)({},e,{correct:t.payload,wrong:!t.payload});break;case"BLOCK-OUT":e=Object(v.a)({},e,{blockout:t.payload});break;case Ge:console.log("dispatched an action"),e=Object(v.a)({},e,{game:t.payload})}return e},Be=Object(ke.c)({input:Ie,validation:Se,error:Te,auth:Ue,components:Fe,game:De}),ze=a(155),We=a(156)("https://topner.herokuapp.com"),xe=Object(ke.d)(Be,Object(ke.a)(ze.a));xe.dispatch(function(e){e(y(!0)),g.a.get("".concat(T,"auth/verify_authentication"),{withCredentials:!0}).then(function(t){var a=t.data,n=a.error,r=a.success;n?(e({type:"AUTHENTICATION-END",payload:{loading:!1}}),e(y(!1))):(e({type:"AUTHENTICATION-END",payload:{loading:!1}}),e(y(!1)),e(R(r.auth)),localStorage.setItem("user",JSON.stringify(Object(v.a)({},r.auth,{password:null}))))}).catch(function(t){e({type:"AUTHENTICATION-END",payload:{loading:!1}}),e(y(!1))})}),xe.getState().components.Socket||xe.dispatch({type:"CREATE-SOCKET-CONNECTION",payload:We}),i.a.render(o.a.createElement(f.a,{store:xe},o.a.createElement(je,{socket:We})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[157,1,2]]]);
//# sourceMappingURL=main.be17c690.chunk.js.map