(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,a,t){e.exports=t(307)},156:function(e,a,t){},157:function(e,a,t){},181:function(e,a){},183:function(e,a){},222:function(e,a){},223:function(e,a){},280:function(e,a,t){},304:function(e,a){},307:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(55),i=t.n(r),o=(t(156),t(157),t(17)),c=t(28),s=t(23),u=t(24),d=t(27),p=t(25),m=t(8),h=t(26),g=t(9),v=t(3),f=t(29),b=t.n(f),E=function(e){return console.log("loggin in ",e),{type:"LOGING-IN-COMP",payload:e}},y=function(e){return{type:"SIGNING-UP-COMP",payload:e}},N=function(e,a,t){var n=a.c?"green":"red";a.c=n,t().components.notification&&e({type:"NOTIFICATION",payload:null}),e({type:"NOTIFICATION",payload:a}),setTimeout(function(){e({type:"NOTIFICATION",payload:null})},4500)},O=t(147),w="http://localhost:5000/",I=function(e){return{type:"SET-GAME-OBJECT",payload:{game:e}}},A=function(e){return{type:"BLOCK-OUT",payload:!0}},k="https://topner.herokuapp.com/",j=function(e){return{type:"SET-ACTIVE-USER",payload:{user:e}}},C=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(d.a)(this,Object(p.a)(a).call(this))).handleInputChange=e.handleInputChange.bind(Object(m.a)(e)),e.validateField=e.validateField.bind(Object(m.a)(e)),e.createUserAccount=e.createUserAccount.bind(Object(m.a)(e)),e}return Object(h.a)(a,e),Object(u.a)(a,[{key:"handleInputChange",value:function(e){var a=e.target,t=a.id,n=a.value;this.props.signupInputAction({id:t,value:n}),this.props.signupInputValidation({id:t,value:n})}},{key:"validateField",value:function(e){var a=e.target,t=a.id,n=a.value;this.props.signupInputValidation({id:t,value:n})}},{key:"createUserAccount",value:function(e){e.preventDefault(),this.props.createUserAccount(this.props.signup_input_data)}},{key:"render",value:function(){var e=this.props,a=e.signup_input_data,t=e.validation,n=e.auth,r=e.signingup,i=a.name,o=a.email,s=a.username,u=a.password,d=a.bank,p=a.account_number,m=a.confirm_password,h=t.name,g=t.email,v=t.username,f=t.password,b=t.bank,E=t.account_number,y=t.confirm_password,N=r?l.a.createElement("button",{className:"tp-auth-btn",disabled:!0},l.a.createElement("i",{className:"fas fa-circle-notch fa-spin"})," Creating account..."):l.a.createElement("button",{className:"tp-auth-btn",disabled:!1},"Create Account");return n?l.a.createElement(c.a,{to:"/dashboard"}):l.a.createElement("div",{className:"tp-auth-container"},l.a.createElement("h2",{className:"tp-auth-title"},"Sign up"),l.a.createElement("form",{onSubmit:this.createUserAccount},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"name"},"Fullname"),l.a.createElement("input",{type:"text",className:"tp-input-field ".concat(h?"":"tp-invalid-field"),placeholder:"John Doe",id:"name",required:!0,value:i,onChange:this.handleInputChange,onBlur:this.validateField}),l.a.createElement("p",{className:"tp-form-note"},"* Name must match the name in your bank account"),!h&&l.a.createElement("p",{className:"tp-field-error"},"*field is not valid")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",placeholder:"Email",className:"tp-input-field ".concat(g?"":"tp-invalid-field"),id:"email",required:!0,value:o,onChange:this.handleInputChange,onBlur:this.validateField}),!g&&l.a.createElement("p",{className:"tp-field-error"},"*email is not valid")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{type:"text",className:"tp-input-field ".concat(v?"":"tp-invalid-field"),placeholder:"Username",id:"username",required:!0,value:s,onChange:this.handleInputChange,onBlur:this.validateField}),l.a.createElement("p",{className:"tp-form-note"},"* Username can only have letters and _"),!v&&l.a.createElement("p",{className:"tp-field-error"},"*Username can contain only letters and _")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"bank"},"Bank Name"),l.a.createElement("select",{id:"bank",className:"tp-input-field ".concat(b?"":"tp-invalid-field"),required:!0,value:d,onChange:this.handleInputChange,onBlur:this.validateField},l.a.createElement("option",{disabled:!0},"Select your bank"),l.a.createElement("option",null,"Firstbank"),l.a.createElement("option",null,"UBA"),l.a.createElement("option",null,"Access Bank"),l.a.createElement("option",null,"Polaris Bank"),l.a.createElement("option",null,"Fidelity Bank"),l.a.createElement("option",null,"GTB"),l.a.createElement("option",null,"Eco Bank")),!b&&l.a.createElement("p",{className:"tp-field-error"},"*field is not valid")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"account_number"},"Account Number"),l.a.createElement("input",{type:"text",className:"tp-input-field ".concat(E?"":"tp-invalid-field"),placeholder:"Account Number",id:"account_number",required:!0,value:p,onChange:this.handleInputChange,onBlur:this.validateField}),l.a.createElement("p",{className:"tp-form-note"},"* Name in account must match name provided above"),!E&&l.a.createElement("p",{className:"tp-field-error"},"* Account should be numbers and not more or less than ten in length")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"tp-input-field ".concat(f?"":"tp-invalid-field"),placeholder:"Password",id:"password",required:!0,value:u,onChange:this.handleInputChange,onBlur:this.validateField}),l.a.createElement("div",{className:"tp-form-note"},l.a.createElement("p",null,"* must have an uppercase"),l.a.createElement("p",null,"* must have a lowercase"),l.a.createElement("p",null,"* must have a number"),l.a.createElement("p",null,"* must have any of this #$^+=!*()@%&")),!f&&l.a.createElement("p",{className:"tp-field-error"},"*password must contain numbers,lowercase, uppercas, any of this [@#$%..]")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"confirm_password"},"Confirm Password"),l.a.createElement("input",{type:"password",className:"tp-input-field ".concat(y?"":"tp-invalid-field"),placeholder:"Confirm Password",id:"confirm_password",required:!0,value:m,onChange:this.handleInputChange,onBlur:this.validateField}),!y&&l.a.createElement("p",{className:"tp-field-error"},"*passwords do not match")),l.a.createElement("div",null,N)))}}]),a}(n.Component),T=Object(g.b)(function(e){return{signup_input_data:e.input.signup,validation:e.validation.signup,error:e.error.signup,auth:e.auth.user,signingup:e.components.signingup}},function(e){return{signupInputAction:function(a){e(function(e){return{type:"SIGNUP_INPUT",payload:e}}(a))},signupInputValidation:function(a){e(function(e){return function(a,t){var n,l=e.id,r=e.value,i={type:"SIGNUP-VALIDATION",payload:{id:l,valid:null}};switch(l){case"name":n=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(r),i=Object(v.a)({},i,{payload:{id:l,valid:n,index:0}});break;case"email":n=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(r),i=Object(v.a)({},i,{payload:{id:l,valid:n,index:1}});break;case"password":a({type:"SIGNUP-VALIDATION",payload:{id:"confirm_password",valid:t().input.signup.confirm_password===r,index:5}}),n=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,30}$/.test(r),i=Object(v.a)({},i,{payload:{id:l,valid:n,index:5}});break;case"bank":n=["Firstbank","GTB","Polaris Bank","Access Bank","UBA","Fidelity Bank","Eco Bank"].includes(r),i=Object(v.a)({},i,{payload:{id:l,valid:n,index:3}});break;case"account_number":n=/^[0-9]{10}$/.test(r),i=Object(v.a)({},i,{payload:{id:l,valid:n,index:4}});break;case"confirm_password":n=r===t().input.signup.password,i=Object(v.a)({},i,{payload:{id:l,valid:n,index:6}});break;case"username":var o={id:l,valid:n=/^[a-z0-9-_A-Z]{6,30}$/.test(r),index:2};i=Object(v.a)({},i,{payload:o})}a(i)}}(a))},createUserAccount:function(a){e(function(e){return function(a){a(y(!0)),b.a.post("".concat(k,"auth/signup"),e,{withCredentials:!0}).then(function(e){var t=e.data,n=t.error,l=t.success;n?(a({type:"SIGNUP-ERROR",payload:{error:n.message,success:null}}),a(y(!1)),N(a,{type:"Signup error",message:n.message})):(a({type:"SIGNUP-SUCCESS",payload:{error:null,success:l.message}}),N(a,{type:"Account created",message:l.message})),a(y(!1))}).catch(function(e){a({type:"SIGNUP-ERROR",payload:e.message}),a(y(!1)),N(a,{type:"Signup error",message:e.message})})}}(a))}}})(C),S=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(d.a)(this,Object(p.a)(a).call(this))).handleInputChange=e.handleInputChange.bind(Object(m.a)(e)),e.validateField=e.validateField.bind(Object(m.a)(e)),e.logUserIn=e.logUserIn.bind(Object(m.a)(e)),e}return Object(h.a)(a,e),Object(u.a)(a,[{key:"handleInputChange",value:function(e){var a=e.target,t=a.id,n=a.value;this.props.loginInputAction({id:t,value:n})}},{key:"validateField",value:function(e){}},{key:"logUserIn",value:function(e){e.preventDefault(),this.props.loguserin(this.props.login_input_data)}},{key:"render",value:function(){var e=this.props,a=e.login_input_data,t=e.validation,n=e.auth,r=e.logingin,i=a.email,s=a.password,u=t.email,d=r?l.a.createElement("button",{className:"tp-auth-btn",disabled:!0},l.a.createElement("i",{className:"fas fa-circle-notch fa-spin"})," Loging in..."):l.a.createElement("button",{className:"tp-auth-btn",disabled:!1},"Log in");return n?l.a.createElement(c.a,{to:"/dashboard"}):l.a.createElement("div",{className:"tp-auth-container"},l.a.createElement("h2",{className:"tp-auth-title"},"Login"),l.a.createElement("form",{onSubmit:this.logUserIn},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",id:"email",placeholder:"Email",required:!0,className:"tp-input-field ".concat(u?"":"tp-invalid-field"),value:i,onChange:this.handleInputChange,onBlur:this.validateField}),!u&&l.a.createElement("p",{className:"tp-field-error"},"* email is invalid")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",placeholder:"password",required:!0,className:"tp-input-field",value:s,onChange:this.handleInputChange})),l.a.createElement("div",null,d),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement(o.b,{to:"/auth/password-reset",className:"tp-forgot-password"},"Forgot Password")))))}}]),a}(n.Component),F=Object(g.b)(function(e){return{login_input_data:e.input.login,validation:e.validation.login,auth:e.auth.user,error:e.error.login,logingin:e.components.logingin}},function(e){return{loginInputAction:function(a){e(function(e){return{type:"LOGIN_INPUT",payload:e}}(a))},loginValidation:function(a){e({type:"LOGIN-VALIDATION",payload:{valid:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)}})},loguserin:function(a){return e(function(e){return function(a,t){a(E(!0)),b.a.post("".concat(k,"auth/login"),e,{withCredentials:!0}).then(function(e){var n=e.data,l=n.error,r=n.success;if(l)a({type:"LOGIN-ERROR",payload:{error:l}}),a(E(!1)),N(a,{type:"Login error",message:"Invalid credentials, try again"},t);else{var i=O.verify(r.auth,"posiedonathenazeuskratoshydra");a({type:"SET-ACTIVE-USER",payload:{user:i.auth}}),a(E(!1))}}).catch(function(e){console.log(e),a({type:"LOGIN-ERROR",payload:{error:"Invalid credentials provided"}}),a(E(!1)),N(a,{type:"Login error",message:"Invalid Credentials try again"},t)})}}(a))}}})(S),U=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(d.a)(this,Object(p.a)(a).call(this))).handleInputChange=e.handleInputChange.bind(Object(m.a)(e)),e.validateField=e.validateField.bind(Object(m.a)(e)),e}return Object(h.a)(a,e),Object(u.a)(a,[{key:"handleInputChange",value:function(e){var a=e.target,t=a.id,n=a.value;this.props.passwordResetInputAction({id:t,value:n}),this.props.passwordResetValidation(n)}},{key:"validateField",value:function(e){this.props.passwordResetValidation(e.target.value)}},{key:"render",value:function(){var e=this.props,a=e.validation,t=e.resetpassword_input_data.email,n=a.email,r=a.validfield;return l.a.createElement("div",{className:"tp-auth-container"},l.a.createElement("h2",{className:"tp-auth-title"},"Password Reset"),l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",placeholder:"email",id:"email",required:!0,className:"tp-input-field ".concat(n?"":"tp-invalid-field"),value:t,onChange:this.handleInputChange,onBlur:this.validateField}),!n&&l.a.createElement("p",{className:"tp-field-error"},"* email is not valid")),l.a.createElement("div",null,l.a.createElement("button",{className:"tp-auth-btn",disabled:!r},"Send reset link"))))}}]),a}(n.Component),_=Object(g.b)(function(e){return{resetpassword_input_data:e.input.resetpassword,validation:e.validation.passwordreset}},function(e){return{passwordResetInputAction:function(a){e(function(e){return{type:"PASSWORD_RESET_INPUT",payload:e}}(a))},passwordResetValidation:function(a){e({type:"PASSWORD-RESET-VALIDATION",payload:{valid:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)}})}}})(U),R=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement(o.c,{activeClassName:"tp-active-link-class",exact:!0,to:"/auth/login"},"Login")),l.a.createElement("li",null,l.a.createElement(o.c,{activeClassName:"tp-active-link-class",exact:!0,to:"/auth/signup"},"Signup")))},G=Object(g.b)(function(e){return{dropdown:e.components.dropdownopen}},function(e){return{loguserout:function(a){return a.preventDefault(),e(function(e){b.a.post("".concat(k,"auth/logout"),{},{withCredentials:!0}).then(function(a){a.data.error||e(j(null))})})},openDropdown:function(){return e((console.log("opening drop down action "),{type:"DROP-COMP",payload:null}))}}})(function(e){var a=e.user,t=e.loguserout,n=e.dropdown,r=e.openDropdown;return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement("div",{className:"tp-initials",onClick:r},l.a.createElement("span",null,a.username[0]),l.a.createElement("div",{className:"tp-drop-down ".concat(n?"tp-open":"")},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/complaint"},"Send a Complaint")),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:void(0)",onClick:t},"logout")))))))}),P=function(e){var a=e.user,t=a?l.a.createElement(G,{user:a}):l.a.createElement(R,null);return l.a.createElement("nav",{className:"tp-navigation"},l.a.createElement("a",{href:"#default",className:"tp-brand"},"Topners"),l.a.createElement("ul",null,t))},B=(t(280),function(e){var a=e.question,t=e.submitAnswer,n=e.blockedout,r=a.option.map(function(e,a){return l.a.createElement("label",{className:"tp-radio-container",key:a},e,l.a.createElement("input",{type:"radio",name:"answer",onChange:t,value:e}),l.a.createElement("span",{className:"tp-checkmark"}))});return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",{className:"tp-question-head"},a.question),n?l.a.createElement("h2",{style:{color:"red"}},"Blocked out"):l.a.createElement("form",null,l.a.createElement("div",null,r)))}),z=function(){return l.a.createElement("div",{className:"tp-how-it-works"},l.a.createElement("h2",{className:"tp-how"},"How it works ?"),l.a.createElement("div",{className:"tp-step"},l.a.createElement("h4",null,"Step 1"),l.a.createElement("h5",null,"Deposit into your accout"),l.a.createElement("p",null,"The very first step is to pay money into your account, account with amount less than 100 would be blocked out of joining games, be rest assured that paying with us is very safe and secure")),l.a.createElement("div",{className:"tp-step"},l.a.createElement("h4",null,"Step 2"),l.a.createElement("h5",null,"Sign up for game"),l.a.createElement("p",null,"After depositing into your account, the next step is to sign up for a game, then wait to recieve questions for answering")),l.a.createElement("div",{className:"tp-step"},l.a.createElement("h4",null,"Step 3"),l.a.createElement("h5",null,"Got question?, be smart and fast"),l.a.createElement("p",null,"Questions are posted every"," ",l.a.createElement("b",null,"Sunday, at 7:30pm, dont just get them right, you need to be fast and fall among the top people, because only the ",l.a.createElement("b",null,"Topners")," win"))),l.a.createElement("div",{className:"tp-step"},l.a.createElement("h4",null,"Step 4"),l.a.createElement("h5",null,"I won , time to get paid"),l.a.createElement("p",null,"The best part, payments are made during the following week after previous game, please note that payments are made into the provided account number")),l.a.createElement("div",{className:"tp-step"},l.a.createElement("h4",{style:{color:"red"}},"Note"),l.a.createElement("p",null,"Questions are removed 10 minutes after they have been posted, in other words you have the first ten minutes after the question has been posted to answer them")))},D=t(149)("http://localhost:5000"),Z=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(d.a)(this,Object(p.a)(a).call(this))).signUpForGame=e.signUpForGame.bind(Object(m.a)(e)),e.submitAnswer=e.submitAnswer.bind(Object(m.a)(e)),e}return Object(h.a)(a,e),Object(u.a)(a,[{key:"signUpForGame",value:function(){var e=this.props.user;D.emit("signupforgame",e)}},{key:"submitAnswer",value:function(e){e.target.checked&&this.props.submitAnswer(e.target.value,D)}},{key:"componentDidMount",value:function(){var e=this;D.emit("sendGame"),D.on("getGame",function(a){e.props.setGameObject(a,D)}),D.on("err",function(e){}),D.on("joinshow",function(e){console.log(e)}),D.on("joinsuccessful",function(e){console.log(e)}),D.on("setuser",function(a){console.log(a),e.props.setActiveUser(a)})}},{key:"render",value:function(){var e=this.props,a=e.user,t=e.game,n=a||{},r=n.username,i=n.account_balance,o=t.game,s=t.correct,u=t.wrong,d=t.blockout;return a?l.a.createElement("div",{className:"tp-main-container"},l.a.createElement("div",{className:"tp-user-header"},l.a.createElement("h4",null,"hi, ",r),l.a.createElement("div",null,l.a.createElement("h4",null,"\u20a6 ",i.toFixed(1)),l.a.createElement("button",{className:"tp-top-up-account"},"Deposit"))),l.a.createElement("div",{className:"tp-question-container"},o?l.a.createElement(B,{question:o.question,submitAnswer:this.submitAnswer,correct:s,wrong:u,blockedout:d}):l.a.createElement("p",{className:"tp-form-note"},"! When you are signed up for a game, and question is available for answering , it will appear here")),l.a.createElement("div",{className:"tp-card-container"},l.a.createElement("div",{className:"tp-card",onClick:this.signUpForGame},l.a.createElement("div",{className:"tp-card-top"},l.a.createElement("h1",null,"Bronze")),l.a.createElement("div",{className:"tp-card-bottom"},l.a.createElement("div",{className:"tp-entrance-fee"},l.a.createElement("h4",null,"Entrance fee"),l.a.createElement("h4",null,"\u20a6100")),l.a.createElement("div",{className:"tp-possible-win"},l.a.createElement("h4",null,"Win"),l.a.createElement("h4",null,"upto 100k"))))),l.a.createElement(z,null)):l.a.createElement(c.a,{to:"/auth/login"})}}]),a}(n.Component),L=Object(g.b)(function(e){return{user:e.auth.user,game:e.game}},function(e){return{signuserupforgame:function(){return e((console.log("signing user up for game"),function(e){b.a.post("".concat(w,"signuserupforgame"),null,{withCredentials:!0}).then(function(e){console.log(e.data)}).catch(function(e){})}))},submitAnswer:function(a,t){return e(function(e,a){return function(t,n){var l=n().game,r=l.game,i=l.blockout,o=r.totalNumberOfWinners,c=r.totalNumberSubmitted,s=r.question.answer;i?N(t,{message:"You are blocked out",c:!1},n):e===s?o!==c?(a.emit("submitAnswer",n().auth.user),a.on("blockedOut",function(e){t(A(e))}),a.on("WinnerAlready",function(e){N(t,e,n),t(A(!0))})):(t(A(!0)),N(t,{message:"You are right but too slow",c:!1},n)):(t(A(!0)),N(t,{message:"You are wrong",c:!1},n))}}(a,t))},setGameObject:function(a){return e(I(a,D))},setActiveUser:function(a){return e(j(a))}}})(Z),q=function(){return l.a.createElement("div",{className:"tp-loader-container"},l.a.createElement("h1",null,"Hold on hoss checking authentication status"),l.a.createElement("p",null,"Wait a little bit......"))},x=function(e){var a=e.message,t=e.color;return l.a.createElement("div",{className:"tp-notification ".concat(a?"tp-show-notification":""),style:{background:t}},l.a.createElement("p",null,a))};var V=Object(g.b)(function(e){return{loading:e.auth.loading,user:e.auth.user,notification:e.components.notification}})(function(e){var a=e.loading,t=e.user,n=e.notification,r=e.socket;return a?l.a.createElement(q,null):l.a.createElement(o.a,null,l.a.createElement("div",{className:"App"},n&&l.a.createElement(x,{message:n.message,color:n.c}),l.a.createElement(P,{user:t}),l.a.createElement(c.d,null,l.a.createElement(c.b,{path:"/auth/signup",exact:!0,component:T}),l.a.createElement(c.b,{path:"/auth/login",exact:!0,component:F}),l.a.createElement(c.b,{path:"/dashboard",exact:!0,render:function(e){return l.a.createElement(L,Object.assign({},e,{socket:r}))}}),l.a.createElement(c.b,{path:"/auth/password-reset",exact:!0,component:_}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=t(31),W=t(21),M={login:{email:"",password:""},resetpassword:{email:""},signup:{name:"",email:"",username:"",bank:"Select your bank",account_number:"",password:"",confirm_password:""}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,a=arguments.length>1?arguments[1]:void 0,t=a.payload?a.payload:{},n=t.id,l=t.value;switch(a.type){case"LOGIN_INPUT":var r=Object(v.a)({},e.login,Object(W.a)({},n,l));e=Object(v.a)({},e,{login:r});break;case"SIGNUP_INPUT":var i=Object(v.a)({},e.signup,Object(W.a)({},n,l));e=Object(v.a)({},e,{signup:i});break;case"PASSWORD_RESET_INPUT":var o=Object(v.a)({},e.resetpassword,Object(W.a)({},n,l));e=Object(v.a)({},e,{resetpassword:o})}return e},J={signup:{name:!0,email:!0,password:!0,bank:!0,account_number:!0,confirm_password:!0,username:!0,validField:[!1,!1,!1,!1,!1,!1,!1]},login:{email:!0,validfield:!1},passwordreset:{email:!0,validfield:!1}},Y=function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0,n=t.payload?t.payload:{},l=n.id,r=n.valid,i=n.index;switch(t.type){case"SIGNUP-VALIDATION":var o=a.signup.validField;o[i]=r;var c=Object(v.a)({},a.signup,(e={},Object(W.a)(e,l,r),Object(W.a)(e,"validField",o),e));a=Object(v.a)({},a,{signup:c});break;case"LOGIN-VALIDATION":var s=Object(v.a)({},a.login,{email:r,validfield:r});a=Object(v.a)({},a,{login:s});break;case"PASSWORD-RESET-VALIDATION":var u=Object(v.a)({},a.passwordreset,{email:r,validfield:r});a=Object(v.a)({},a,{passwordreset:u})}return a},K={signup:{error:null,success:null},login:{error:null}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,a=arguments.length>1?arguments[1]:void 0,t=a.payload||{},n=t.error,l=t.success;switch(a.type){case"SIGNUP-ERROR":var r={error:n,success:l};e=Object(v.a)({},e,{signup:r});break;case"LOGIN-ERROR":console.log(n);var i={error:n};e=Object(v.a)({},e,{login:i})}return e},X={loading:!0,user:null},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,a=arguments.length>1?arguments[1]:void 0,t=a.payload?a.payload:{},n=t.loading,l=t.user;switch(a.type){case"AUTHENTICATION-END":e=Object(v.a)({},e,{loading:n});break;case"SET-ACTIVE-USER":console.log(l),e=Object(v.a)({},e,{user:l})}return e},ae={logingin:!1,signingup:!1,dropdownopen:!1,notification:null},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGING-IN-COMP":e=Object(v.a)({},e,{logingin:a.payload});break;case"SIGNING-UP-COMP":e=Object(v.a)({},e,{signingup:a.payload});break;case"DROP-COMP":var t=!e.dropdownopen;e=Object(v.a)({},e,{dropdownopen:t});break;case"NOTIFICATION":var n=a.payload;e=Object(v.a)({},e,{notification:n})}return e},ne={game:null,blockout:!1},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET-GAME-OBJECT":e=Object(v.a)({},e,{game:a.payload.game});break;case"WRONG-OR-RIGHT":e=Object(v.a)({},e,{correct:a.payload,wrong:!a.payload});break;case"BLOCK-OUT":e=Object(v.a)({},e,{blockout:a.payload})}return e},re=Object($.c)({input:H,validation:Y,error:Q,auth:ee,components:te,game:le}),ie=t(150),oe=Object($.d)(re,Object($.a)(ie.a));oe.dispatch(function(e){b.a.get("".concat(k,"auth/verify_authentication"),{withCredentials:!0}).then(function(a){var t=a.data,n=t.error,l=t.success;n?e({type:"AUTHENTICATION-END",payload:{loading:!1}}):(e({type:"AUTHENTICATION-END",payload:{loading:!1}}),e(j(l.auth)),e(function(e){b.a.get("".concat(w,"game"),{withCredentials:!0}).then(function(a){a.data.error&&e(I(null)),e(I(a.data.success.game))})}))}).catch(function(a){e({type:"AUTHENTICATION-END",payload:{loading:!1}})})}),i.a.render(l.a.createElement(g.a,{store:oe},l.a.createElement(V,{socket:D})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[151,1,2]]]);
//# sourceMappingURL=main.57f0f0a1.chunk.js.map