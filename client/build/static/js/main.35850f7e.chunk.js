(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,a,t){e.exports=t(307)},156:function(e,a,t){},157:function(e,a,t){},181:function(e,a){},183:function(e,a){},222:function(e,a){},223:function(e,a){},280:function(e,a,t){},304:function(e,a){},307:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(55),o=t.n(r),i=(t(156),t(157),t(17)),c=t(28),s=t(21),u=t(22),p=t(24),d=t(23),m=t(9),h=t(25),g=t(8),v=t(3),E=t(43),b=t.n(E),f=function(e){return console.log("loggin in ",e),{type:"LOGING-IN-COMP",payload:e}},N=function(e){return{type:"SIGNING-UP-COMP",payload:e}},O=function(e,a,t){var n=a.c?"green":"red";a.c=n,t().components.notification&&e({type:"NOTIFICATION",payload:null}),e({type:"NOTIFICATION",payload:a}),setTimeout(function(){e({type:"NOTIFICATION",payload:null})},4500)},y=t(147),w="https://topner.herokuapp.com/",I=function(e){return{type:"SET-ACTIVE-USER",payload:{user:e}}},A=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(p.a)(this,Object(d.a)(a).call(this))).handleInputChange=e.handleInputChange.bind(Object(m.a)(e)),e.validateField=e.validateField.bind(Object(m.a)(e)),e.createUserAccount=e.createUserAccount.bind(Object(m.a)(e)),e}return Object(h.a)(a,e),Object(u.a)(a,[{key:"handleInputChange",value:function(e){var a=e.target,t=a.id,n=a.value;this.props.signupInputAction({id:t,value:n}),this.props.signupInputValidation({id:t,value:n})}},{key:"validateField",value:function(e){var a=e.target,t=a.id,n=a.value;this.props.signupInputValidation({id:t,value:n})}},{key:"createUserAccount",value:function(e){e.preventDefault(),this.props.createUserAccount(this.props.signup_input_data)}},{key:"render",value:function(){var e=this.props,a=e.signup_input_data,t=e.validation,n=e.auth,r=e.signingup,o=a.name,i=a.email,s=a.username,u=a.password,p=a.bank,d=a.account_number,m=a.confirm_password,h=t.name,g=t.email,v=t.username,E=t.password,b=t.bank,f=t.account_number,N=t.confirm_password,O=r?l.a.createElement("button",{className:"tp-auth-btn",disabled:!0},l.a.createElement("i",{className:"fas fa-circle-notch fa-spin"})," Creating account..."):l.a.createElement("button",{className:"tp-auth-btn",disabled:!1},"Create Account");return n?l.a.createElement(c.a,{to:"/dashboard"}):l.a.createElement("div",{className:"tp-auth-container"},l.a.createElement("h2",{className:"tp-auth-title"},"Sign up"),l.a.createElement("form",{onSubmit:this.createUserAccount},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"name"},"Fullname"),l.a.createElement("input",{type:"text",className:"tp-input-field ".concat(h?"":"tp-invalid-field"),placeholder:"John Doe",id:"name",required:!0,value:o,onChange:this.handleInputChange,onBlur:this.validateField}),l.a.createElement("p",{className:"tp-form-note"},"* Name must match the name in your bank account"),!h&&l.a.createElement("p",{className:"tp-field-error"},"*field is not valid")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",placeholder:"Email",className:"tp-input-field ".concat(g?"":"tp-invalid-field"),id:"email",required:!0,value:i,onChange:this.handleInputChange,onBlur:this.validateField}),!g&&l.a.createElement("p",{className:"tp-field-error"},"*email is not valid")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{type:"text",className:"tp-input-field ".concat(v?"":"tp-invalid-field"),placeholder:"Username",id:"username",required:!0,value:s,onChange:this.handleInputChange,onBlur:this.validateField}),l.a.createElement("p",{className:"tp-form-note"},"* Username can only have letters and _"),!v&&l.a.createElement("p",{className:"tp-field-error"},"*Username can contain only letters and _")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"bank"},"Bank Name"),l.a.createElement("select",{id:"bank",className:"tp-input-field ".concat(b?"":"tp-invalid-field"),required:!0,value:p,onChange:this.handleInputChange,onBlur:this.validateField},l.a.createElement("option",{disabled:!0},"Select your bank"),l.a.createElement("option",null,"Firstbank"),l.a.createElement("option",null,"UBA"),l.a.createElement("option",null,"Access Bank"),l.a.createElement("option",null,"Polaris Bank"),l.a.createElement("option",null,"Fidelity Bank"),l.a.createElement("option",null,"GTB"),l.a.createElement("option",null,"Eco Bank")),!b&&l.a.createElement("p",{className:"tp-field-error"},"*field is not valid")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"account_number"},"Account Number"),l.a.createElement("input",{type:"text",className:"tp-input-field ".concat(f?"":"tp-invalid-field"),placeholder:"Account Number",id:"account_number",required:!0,value:d,onChange:this.handleInputChange,onBlur:this.validateField}),l.a.createElement("p",{className:"tp-form-note"},"* Name in account must match name provided above"),!f&&l.a.createElement("p",{className:"tp-field-error"},"* Account should be numbers and not more or less than ten in length")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"tp-input-field ".concat(E?"":"tp-invalid-field"),placeholder:"Password",id:"password",required:!0,value:u,onChange:this.handleInputChange,onBlur:this.validateField}),l.a.createElement("div",{className:"tp-form-note"},l.a.createElement("p",null,"* must have an uppercase"),l.a.createElement("p",null,"* must have a lowercase"),l.a.createElement("p",null,"* must have a number"),l.a.createElement("p",null,"* must have any of this #$^+=!*()@%&")),!E&&l.a.createElement("p",{className:"tp-field-error"},"*password must contain numbers,lowercase, uppercas, any of this [@#$%..]")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"confirm_password"},"Confirm Password"),l.a.createElement("input",{type:"password",className:"tp-input-field ".concat(N?"":"tp-invalid-field"),placeholder:"Confirm Password",id:"confirm_password",required:!0,value:m,onChange:this.handleInputChange,onBlur:this.validateField}),!N&&l.a.createElement("p",{className:"tp-field-error"},"*passwords do not match")),l.a.createElement("div",null,O)))}}]),a}(n.Component),k=Object(g.b)(function(e){return{signup_input_data:e.input.signup,validation:e.validation.signup,error:e.error.signup,auth:e.auth.user,signingup:e.components.signingup}},function(e){return{signupInputAction:function(a){e(function(e){return{type:"SIGNUP_INPUT",payload:e}}(a))},signupInputValidation:function(a){e(function(e){return function(a,t){var n,l=e.id,r=e.value,o={type:"SIGNUP-VALIDATION",payload:{id:l,valid:null}};switch(l){case"name":n=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(r),o=Object(v.a)({},o,{payload:{id:l,valid:n,index:0}});break;case"email":n=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(r),o=Object(v.a)({},o,{payload:{id:l,valid:n,index:1}});break;case"password":a({type:"SIGNUP-VALIDATION",payload:{id:"confirm_password",valid:t().input.signup.confirm_password===r,index:5}}),n=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,30}$/.test(r),o=Object(v.a)({},o,{payload:{id:l,valid:n,index:5}});break;case"bank":n=["Firstbank","GTB","Polaris Bank","Access Bank","UBA","Fidelity Bank","Eco Bank"].includes(r),o=Object(v.a)({},o,{payload:{id:l,valid:n,index:3}});break;case"account_number":n=/^[0-9]{10}$/.test(r),o=Object(v.a)({},o,{payload:{id:l,valid:n,index:4}});break;case"confirm_password":n=r===t().input.signup.password,o=Object(v.a)({},o,{payload:{id:l,valid:n,index:6}});break;case"username":var i={id:l,valid:n=/^[a-z0-9-_A-Z]{6,30}$/.test(r),index:2};o=Object(v.a)({},o,{payload:i})}a(o)}}(a))},createUserAccount:function(a){e(function(e){return function(a,t){a(N(!0)),b.a.post("".concat(w,"auth/signup"),e,{withCredentials:!0}).then(function(e){var n=e.data,l=n.error,r=n.success;l?(a({type:"SIGNUP-ERROR",payload:{error:l.message,success:null}}),a(N(!1)),O(a,{message:l.message,c:!1},t)):(a({type:"SIGNUP-SUCCESS",payload:{error:null,success:r.message}}),O(a,{c:!0,message:r.message},t)),a(N(!1))}).catch(function(e){a({type:"SIGNUP-ERROR",payload:e.message}),a(N(!1)),O(a,{type:"Signup error",message:e.message},t)})}}(a))}}})(A),j=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(p.a)(this,Object(d.a)(a).call(this))).handleInputChange=e.handleInputChange.bind(Object(m.a)(e)),e.validateField=e.validateField.bind(Object(m.a)(e)),e.logUserIn=e.logUserIn.bind(Object(m.a)(e)),e}return Object(h.a)(a,e),Object(u.a)(a,[{key:"handleInputChange",value:function(e){var a=e.target,t=a.id,n=a.value;this.props.loginInputAction({id:t,value:n})}},{key:"validateField",value:function(e){}},{key:"logUserIn",value:function(e){e.preventDefault(),this.props.loguserin(this.props.login_input_data)}},{key:"render",value:function(){var e=this.props,a=e.login_input_data,t=e.validation,n=e.auth,r=e.logingin,o=a.email,s=a.password,u=t.email,p=r?l.a.createElement("button",{className:"tp-auth-btn",disabled:!0},l.a.createElement("i",{className:"fas fa-circle-notch fa-spin"})," Loging in..."):l.a.createElement("button",{className:"tp-auth-btn",disabled:!1},"Log in");return n?l.a.createElement(c.a,{to:"/dashboard"}):l.a.createElement("div",{className:"tp-auth-container"},l.a.createElement("h2",{className:"tp-auth-title"},"Login"),l.a.createElement("form",{onSubmit:this.logUserIn},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",id:"email",placeholder:"Email",required:!0,className:"tp-input-field ".concat(u?"":"tp-invalid-field"),value:o,onChange:this.handleInputChange,onBlur:this.validateField}),!u&&l.a.createElement("p",{className:"tp-field-error"},"* email is invalid")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",placeholder:"password",required:!0,className:"tp-input-field",value:s,onChange:this.handleInputChange})),l.a.createElement("div",null,p),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement(i.b,{to:"/auth/password-reset",className:"tp-forgot-password"},"Forgot Password")))))}}]),a}(n.Component),C=Object(g.b)(function(e){return{login_input_data:e.input.login,validation:e.validation.login,auth:e.auth.user,error:e.error.login,logingin:e.components.logingin}},function(e){return{loginInputAction:function(a){e(function(e){return{type:"LOGIN_INPUT",payload:e}}(a))},loginValidation:function(a){e({type:"LOGIN-VALIDATION",payload:{valid:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)}})},loguserin:function(a){return e(function(e){return function(a,t){a(f(!0)),b.a.post("".concat(w,"auth/login"),e,{withCredentials:!0}).then(function(e){var n=e.data,l=n.error,r=n.success;if(l)a({type:"LOGIN-ERROR",payload:{error:l}}),a(f(!1)),O(a,{type:"Login error",message:"Invalid credentials, try again"},t);else{var o=y.verify(r.auth,"posiedonathenazeuskratoshydra");a({type:"SET-ACTIVE-USER",payload:{user:o.auth}}),a(f(!1))}}).catch(function(e){console.log(e),a({type:"LOGIN-ERROR",payload:{error:"Invalid credentials provided"}}),a(f(!1)),O(a,{type:"Login error",message:"Invalid Credentials try again"},t)})}}(a))}}})(j),S=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(p.a)(this,Object(d.a)(a).call(this))).handleInputChange=e.handleInputChange.bind(Object(m.a)(e)),e.validateField=e.validateField.bind(Object(m.a)(e)),e}return Object(h.a)(a,e),Object(u.a)(a,[{key:"handleInputChange",value:function(e){var a=e.target,t=a.id,n=a.value;this.props.passwordResetInputAction({id:t,value:n}),this.props.passwordResetValidation(n)}},{key:"validateField",value:function(e){this.props.passwordResetValidation(e.target.value)}},{key:"render",value:function(){var e=this.props,a=e.validation,t=e.resetpassword_input_data.email,n=a.email,r=a.validfield;return l.a.createElement("div",{className:"tp-auth-container"},l.a.createElement("h2",{className:"tp-auth-title"},"Password Reset"),l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",placeholder:"email",id:"email",required:!0,className:"tp-input-field ".concat(n?"":"tp-invalid-field"),value:t,onChange:this.handleInputChange,onBlur:this.validateField}),!n&&l.a.createElement("p",{className:"tp-field-error"},"* email is not valid")),l.a.createElement("div",null,l.a.createElement("button",{className:"tp-auth-btn",disabled:!r},"Send reset link"))))}}]),a}(n.Component),T=Object(g.b)(function(e){return{resetpassword_input_data:e.input.resetpassword,validation:e.validation.passwordreset}},function(e){return{passwordResetInputAction:function(a){e(function(e){return{type:"PASSWORD_RESET_INPUT",payload:e}}(a))},passwordResetValidation:function(a){e({type:"PASSWORD-RESET-VALIDATION",payload:{valid:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)}})}}})(S),R=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement(i.c,{activeClassName:"tp-active-link-class",exact:!0,to:"/auth/login"},"Login")),l.a.createElement("li",null,l.a.createElement(i.c,{activeClassName:"tp-active-link-class",exact:!0,to:"/auth/signup"},"Signup")))},U=Object(g.b)(function(e){return{dropdown:e.components.dropdownopen}},function(e){return{loguserout:function(a){return a.preventDefault(),e(function(e){b.a.post("".concat(w,"auth/logout"),{},{withCredentials:!0}).then(function(a){a.data.error||e(I(null))})})},openDropdown:function(){return e((console.log("opening drop down action "),{type:"DROP-COMP",payload:null}))}}})(function(e){var a=e.user,t=e.loguserout,n=e.dropdown,r=e.openDropdown;return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement("div",{className:"tp-initials",onClick:r},l.a.createElement("span",null,a.username[0]),l.a.createElement("div",{className:"tp-drop-down ".concat(n?"tp-open":"")},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.b,{to:"/complaint"},"Send a Complaint")),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:void(0)",onClick:t},"logout")))))))}),F=function(e){var a=e.user,t=a?l.a.createElement(U,{user:a}):l.a.createElement(R,null);return l.a.createElement("nav",{className:"tp-navigation"},l.a.createElement("a",{href:"#default",className:"tp-brand"},"Topners"),l.a.createElement("ul",null,t))},G=(t(280),function(e){var a=e.question,t=e.submitAnswer,n=e.blockedout,r=a.option.map(function(e,a){return l.a.createElement("label",{className:"tp-radio-container",key:a},e,l.a.createElement("input",{type:"radio",name:"answer",onChange:t,value:e}),l.a.createElement("span",{className:"tp-checkmark"}))});return l.a.createElement("div",{className:"tp-question"},l.a.createElement("h3",{className:"tp-question-head"},a.question),n?l.a.createElement("h2",{style:{color:"red"}},"Blocked out"):l.a.createElement("form",null,l.a.createElement("div",null,r)))}),_=function(){return l.a.createElement("div",{className:"tp-how-it-works"},l.a.createElement("h2",{className:"tp-how"},"How it works ?"),l.a.createElement("div",{className:"tp-step"},l.a.createElement("h4",null,"Step 1"),l.a.createElement("h5",null,"Deposit into your accout"),l.a.createElement("p",null,"The very first step is to pay money into your account, account with amount less than 100 would be blocked out of joining games, be rest assured that paying with us is very safe and secure")),l.a.createElement("div",{className:"tp-step"},l.a.createElement("h4",null,"Step 2"),l.a.createElement("h5",null,"Sign up for game"),l.a.createElement("p",null,"After depositing into your account, the next step is to sign up for a game, then wait to recieve questions for answering")),l.a.createElement("div",{className:"tp-step"},l.a.createElement("h4",null,"Step 3"),l.a.createElement("h5",null,"Got question?, be smart and fast"),l.a.createElement("p",null,"Questions are posted every"," ",l.a.createElement("b",null,"Sunday, at 7:30pm, dont just get them right, you need to be fast and fall among the top people, because only the ",l.a.createElement("b",null,"Topners")," win"))),l.a.createElement("div",{className:"tp-step"},l.a.createElement("h4",null,"Step 4"),l.a.createElement("h5",null,"I won , time to get paid"),l.a.createElement("p",null,"The best part, payments are made during the following week after previous game, please note that payments are made into the provided account number")),l.a.createElement("div",{className:"tp-step"},l.a.createElement("h4",{style:{color:"red"}},"Note"),l.a.createElement("p",null,"Questions are removed 10 minutes after they have been posted, in other words you have the first ten minutes after the question has been posted to answer them")))},P=t(18),B=Object(P.a)({signupforgame:"SIGN-UP-FOR-GAME",error:"ERROR",success:"SUCCESS",setuser:"SET-USER",submitanswer:"SUBMIT-ANSWER",getgameobject:"GET-GAME",setgameobject:"SET-GAME",blockout:"BLOCK-OUT",winner:"WIN",totalwinnersreached:"TOTAL-WINNERS-REACHED",wronganswer:"WRONG-ANSWER"},"submitanswer","SUBMIT-ANSWER"),z=B.signupforgame,D=B.submitanswer,L=B.getgameobject,Z=B.setgameobject,x=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(p.a)(this,Object(d.a)(a).call(this))).signUpForGame=e.signUpForGame.bind(Object(m.a)(e)),e.submitAnswer=e.submitAnswer.bind(Object(m.a)(e)),e}return Object(h.a)(a,e),Object(u.a)(a,[{key:"signUpForGame",value:function(){if(!this.props.user.signupForNextGameShow)return this.props.signupForGame();console.log("Already signed up")}},{key:"submitAnswer",value:function(e){if(e.target.checked)return this.props.submitAnswer(e.target.value)}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){this.props.getGameObject()}},{key:"render",value:function(){var e=this.props,a=e.user,t=e.game,n=a||{},r=n.username,o=n.account_balance,i=n.signupForNextGameShow,s=t.game,u=t.correct,p=t.wrong,d=t.blockout,m=t.gameison;return console.log(s),a?l.a.createElement("div",{className:"tp-main-container"},l.a.createElement("div",{className:"tp-user-header"},l.a.createElement("h4",null,"hi, ",r),l.a.createElement("div",null,l.a.createElement("h4",null,"\u20a6 ",o.toFixed(1)),l.a.createElement("button",{className:"tp-top-up-account"},"Deposit"))),l.a.createElement("div",{className:"tp-question-container"},s&&m&&i?l.a.createElement(G,{question:s.question,submitAnswer:this.submitAnswer,correct:u,wrong:p,blockedout:d}):l.a.createElement("p",{className:"tp-form-note"},"! When you are signed up for a game, and question is available for answering , it will appear here")),l.a.createElement("div",{className:"tp-card-container"},l.a.createElement("div",{className:"tp-card",onClick:this.signUpForGame},l.a.createElement("div",{className:"tp-card-top"},l.a.createElement("h1",null,"Bronze")),l.a.createElement("div",{className:"tp-card-bottom"},l.a.createElement("div",{className:"tp-entrance-fee"},l.a.createElement("h4",null,"Entrance fee"),l.a.createElement("h4",null,"\u20a6100")),l.a.createElement("div",{className:"tp-possible-win"},l.a.createElement("h4",null,"Win"),l.a.createElement("h4",null,"upto 100k"))))),l.a.createElement(_,null)):l.a.createElement(c.a,{to:"/auth/login"})}}]),a}(n.Component),q=Object(g.b)(function(e){return{user:e.auth.user,game:e.game}},function(e){return{signupForGame:function(){return e(function(e,a){var t=a().auth.user;a().components.Socket.emit(z,t)})},getGameObject:function(){return e(function(e,a){a().components.Socket.emit(L)})},submitAnswer:function(a){return e(function(e){return function(a,t){var n=t().auth.user,l=t().game.game.question.answer,r=t().game.game.totalNumberOfWinners;t().components.Socket.emit(D,{user:n,checkanswer:e===l,totalNumberOfWinners:r})}}(a))}}})(x),W=function(){return l.a.createElement("div",{className:"tp-loader-container"},l.a.createElement("div",{className:"tp-loader"},l.a.createElement("div",{className:"tp-load tp-loader1"}),l.a.createElement("div",{className:"tp-load tp-loader2"}),l.a.createElement("div",{className:"tp-load tp-loader3"}),l.a.createElement("h3",{style:{color:"#fff"}},"Loading...")))},V=function(e){var a=e.message,t=e.color;return l.a.createElement("div",{className:"tp-notification ".concat(a?"tp-show-notification":""),style:{background:t}},l.a.createElement("p",null,a))},M=B.error,$=B.success,H=B.setuser,J=B.setgameobject,K=B.blockout,Q=B.winner,X=B.wronganswer,Y=B.totalwinnersreached,ee=function(e){function a(){return Object(s.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.Socket;a.on("ERROR",function(e){console.log(e)}),a.on(M,function(e){console.log(e)}),a.on($,function(e){console.log(e)}),a.on(H,function(a){e.props.setActiveUser(a)}),a.on(J,function(a){e.props.setGameObject(a)}),a.on(K,function(e){console.log(e)}),a.on(Y,function(e){console.log(e)}),a.on(Q,function(e){console.log("hey"),console.log(e)}),a.on(X,function(e){console.log(e)})}},{key:"render",value:function(){return null}}]),a}(n.Component),ae=Object(g.b)(function(e){return{Socket:e.components.Socket}},function(e){return{setGameObject:function(a){return e((t=a,console.log(t),function(e){e({type:Z,payload:t})}));var t},setActiveUser:function(a){return e(I(a))}}})(ee);var te=Object(g.b)(function(e){return{loading:e.auth.loading,user:e.auth.user,notification:e.components.notification}})(function(e){var a=e.loading,t=e.user,n=e.notification,r=e.socket;return a?l.a.createElement(W,null):l.a.createElement(i.a,null,l.a.createElement("div",{className:"App"},n&&l.a.createElement(V,{message:n.message,color:n.c}),l.a.createElement(F,{user:t}),l.a.createElement(c.d,null,l.a.createElement(c.b,{path:"/auth/signup",exact:!0,component:k}),l.a.createElement(c.b,{path:"/auth/login",exact:!0,component:C}),l.a.createElement(c.b,{path:"/dashboard",exact:!0,render:function(e){return l.a.createElement(q,Object.assign({},e,{socket:r}))}}),l.a.createElement(c.b,{path:"/auth/password-reset",exact:!0,component:T})),l.a.createElement(ae,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=t(30),le={login:{email:"",password:""},resetpassword:{email:""},signup:{name:"",email:"",username:"",bank:"Select your bank",account_number:"",password:"",confirm_password:""}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,a=arguments.length>1?arguments[1]:void 0,t=a.payload?a.payload:{},n=t.id,l=t.value;switch(a.type){case"LOGIN_INPUT":var r=Object(v.a)({},e.login,Object(P.a)({},n,l));e=Object(v.a)({},e,{login:r});break;case"SIGNUP_INPUT":var o=Object(v.a)({},e.signup,Object(P.a)({},n,l));e=Object(v.a)({},e,{signup:o});break;case"PASSWORD_RESET_INPUT":var i=Object(v.a)({},e.resetpassword,Object(P.a)({},n,l));e=Object(v.a)({},e,{resetpassword:i})}return e},oe={signup:{name:!0,email:!0,password:!0,bank:!0,account_number:!0,confirm_password:!0,username:!0,validField:[!1,!1,!1,!1,!1,!1,!1]},login:{email:!0,validfield:!1},passwordreset:{email:!0,validfield:!1}},ie=function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0,n=t.payload?t.payload:{},l=n.id,r=n.valid,o=n.index;switch(t.type){case"SIGNUP-VALIDATION":var i=a.signup.validField;i[o]=r;var c=Object(v.a)({},a.signup,(e={},Object(P.a)(e,l,r),Object(P.a)(e,"validField",i),e));a=Object(v.a)({},a,{signup:c});break;case"LOGIN-VALIDATION":var s=Object(v.a)({},a.login,{email:r,validfield:r});a=Object(v.a)({},a,{login:s});break;case"PASSWORD-RESET-VALIDATION":var u=Object(v.a)({},a.passwordreset,{email:r,validfield:r});a=Object(v.a)({},a,{passwordreset:u})}return a},ce={signup:{error:null,success:null},login:{error:null}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,a=arguments.length>1?arguments[1]:void 0,t=a.payload||{},n=t.error,l=t.success;switch(a.type){case"SIGNUP-ERROR":var r={error:n,success:l};e=Object(v.a)({},e,{signup:r});break;case"LOGIN-ERROR":console.log(n);var o={error:n};e=Object(v.a)({},e,{login:o})}return e},ue={loading:!0,user:null},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,a=arguments.length>1?arguments[1]:void 0,t=a.payload?a.payload:{},n=t.loading,l=t.user;switch(a.type){case"AUTHENTICATION-END":e=Object(v.a)({},e,{loading:n});break;case"SET-ACTIVE-USER":console.log(l),e=Object(v.a)({},e,{user:l})}return e},de={logingin:!1,signingup:!1,dropdownopen:!1,notification:null,Socket:null},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGING-IN-COMP":e=Object(v.a)({},e,{logingin:a.payload});break;case"SIGNING-UP-COMP":e=Object(v.a)({},e,{signingup:a.payload});break;case"DROP-COMP":var t=!e.dropdownopen;e=Object(v.a)({},e,{dropdownopen:t});break;case"NOTIFICATION":var n=a.payload;e=Object(v.a)({},e,{notification:n});break;case"CREATE-SOCKET-CONNECTION":var l=a.payload;e=Object(v.a)({},e,{Socket:l})}return e},he=B.setgameobject;console.log(he);var ge={game:null,blockout:!1},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET-GAME-OBJECT":e=Object(v.a)({},e,{game:a.payload.game});break;case"WRONG-OR-RIGHT":e=Object(v.a)({},e,{correct:a.payload,wrong:!a.payload});break;case"BLOCK-OUT":e=Object(v.a)({},e,{blockout:a.payload});break;case he:console.log("dispatched an action"),e=Object(v.a)({},e,{game:a.payload})}return e},Ee=Object(ne.c)({input:re,validation:ie,error:se,auth:pe,components:me,game:ve}),be=t(149),fe=t(150),Ne=(B.error,B.success,B.setuser,B.setgameobject,fe("https://topner.herokuapp.com")),Oe=Object(ne.d)(Ee,Object(ne.a)(be.a));Oe.dispatch(function(e){b.a.get("".concat(w,"auth/verify_authentication"),{withCredentials:!0}).then(function(a){var t=a.data,n=t.error,l=t.success;n?e({type:"AUTHENTICATION-END",payload:{loading:!1}}):(e({type:"AUTHENTICATION-END",payload:{loading:!1}}),e(I(l.auth)))}).catch(function(a){e({type:"AUTHENTICATION-END",payload:{loading:!1}})})}),Oe.getState().components.Socket||Oe.dispatch({type:"CREATE-SOCKET-CONNECTION",payload:Ne}),o.a.render(l.a.createElement(g.a,{store:Oe},l.a.createElement(te,{socket:Ne})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[151,1,2]]]);
//# sourceMappingURL=main.35850f7e.chunk.js.map