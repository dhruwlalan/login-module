!function(e){function t(t){for(var o,s,u=t[0],l=t[1],i=t[2],c=0,m=[];c<u.length;c++)s=u[c],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(d&&d(t);m.length;)m.shift()();return n.push.apply(n,i||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],o=!0,u=1;u<r.length;u++){var l=r[u];0!==a[l]&&(o=!1)}o&&(n.splice(t--,1),e=s(s.s=r[0]))}return e}var o={},a={4:0},n=[];function s(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=o,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(r,o,function(t){return e[t]}.bind(null,o));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var d=l;n.push([237,0]),r()}({0:function(e,t){e.exports={edit:document.getElementById("edit"),logout:document.getElementById("logout"),formLogin:document.querySelector(".form--login"),formGroupEmail:document.querySelector(".form__group--email"),formGroupPass:document.querySelector(".form__group--pass"),formGroupInputs:document.querySelectorAll(".form__group-input"),emailInput:document.getElementById("emailInput"),emailLabel:document.getElementById("emailLabel"),passInput:document.getElementById("passInput"),passLabel:document.getElementById("passLabel"),eyeSvgForPass:document.getElementById("eyeSvgForPass"),btnLoginText:document.querySelector(".btn__login--text"),formSignup:document.querySelector(".form--signup"),formGroupName:document.querySelector(".form__group--name"),nameInput:document.getElementById("nameInput"),nameLabel:document.getElementById("nameLabel"),btnSignupText:document.querySelector(".btn__signup--text"),formForgetPassword:document.querySelector(".form--forget-password"),btnForgetPasswordText:document.querySelector(".btn__forget-password--text"),formResetPassword:document.querySelector(".form--reset-password"),btnResetText:document.querySelector(".btn__reset--text"),home:document.getElementById("home"),formEditData:document.querySelector(".form--edit--data"),formEditProfile:document.querySelector(".form--edit--profile"),formEditPass:document.querySelector(".form--edit--pass"),formGroupCurPass:document.querySelector(".form__group--curpass"),formGroupNewPass:document.querySelector(".form__group--newpass"),curPassInput:document.getElementById("CurPassInput"),curPassLabel:document.getElementById("CurPassLabel"),newPassInput:document.getElementById("NewPassInput"),newPassLabel:document.getElementById("NewPassLabel"),eyeSvgForCurPass:document.getElementById("eyeSvgForCurPass"),eyeSvgForNewPass:document.getElementById("eyeSvgForNewPass"),btnUpdateDataText:document.querySelector(".btn__update-data--text"),btnUpdateProfileText:document.querySelector(".btn__update-profile--text"),btnChangePasswordText:document.querySelector(".btn__change-password--text"),uploadImagePreview:document.getElementById("uploadImagePreview"),uploadImageInput:document.getElementById("uploadImageInput"),uploadImageLabel:document.getElementById("uploadImageLabel"),removeImageLabel:document.getElementById("removeImageLabel")}},13:function(e,t,r){"use strict";r(6),r.p,r(7),r(8),r(9)},2:function(e,t,r){"use strict";t.a=function(e,t){var r;"success"===e?r='<div class="alert alert--success">'.concat(t,"</div>"):"error"===e&&(r='<div class="alert alert--error">'.concat(t,"</div>")),document.body.insertAdjacentHTML("afterbegin",r),document.querySelector(".alert").classList.add("slideInDown"),setTimeout((function(){var e=document.querySelector(".alert");e.classList.add("slideOutUp"),e.classList.remove("slideInDown"),setTimeout((function(){e.remove()}),500)}),1500)}},237:function(e,t,r){"use strict";r.r(t);r(30),r(24),r(25),r(35),r(26),r(13);var o=r(5),a=r.n(o),n=r(20),s=r.n(n),u=r(2),l=r(0),i=r.n(l);function d(e,t,r,o,a,n,s){try{var u=e[n](s),l=u.value}catch(e){return void r(e)}u.done?t(l):Promise.resolve(l).then(o,a)}var c="notEntered",m="notEntered";i.a.formGroupInputs.forEach((function(e){e.addEventListener("focusin",(function(e){e.target.parentNode.classList.add("focus-input"),e.target.parentNode.querySelector(":scope > label").classList.add("focus-label")})),e.addEventListener("focusout",(function(e){e.target.parentNode.classList.remove("focus-input"),e.target.parentNode.querySelector(":scope > label").classList.remove("focus-label")}))})),i.a.formGroupEmail.addEventListener("mouseenter",(function(){0===i.a.emailInput.value.length&&(i.a.formGroupEmail.classList.add("hover-input"),i.a.emailLabel.classList.add("hover-label"))})),i.a.formGroupEmail.addEventListener("mouseleave",(function(){i.a.formGroupEmail.classList.remove("hover-input"),i.a.emailLabel.classList.remove("hover-label")})),i.a.formGroupPass.addEventListener("mouseenter",(function(){0===i.a.passInput.value.length&&(i.a.formGroupPass.classList.add("hover-input"),i.a.passLabel.classList.add("hover-label")),i.a.eyeSvgForPass.classList.add("showeyesvg")})),i.a.formGroupPass.addEventListener("mouseleave",(function(){i.a.formGroupPass.classList.remove("hover-input"),i.a.passLabel.classList.remove("hover-label"),i.a.eyeSvgForPass.classList.remove("showeyesvg")})),i.a.emailInput.value&&(c="EnteredAndValid",i.a.formGroupEmail.style.border="1px solid #002fff",i.a.emailLabel.style.color="#002fff"),i.a.passInput.value&&(m="EnteredAndValid",i.a.formGroupPass.style.border="1px solid #002fff",i.a.passlabel.style.color="#002fff"),i.a.emailInput.addEventListener("input",(function(){var e=i.a.emailInput.value;0===e.length?(c="notEntered",i.a.formGroupEmail.removeAttribute("style"),i.a.emailLabel.removeAttribute("style")):s.a.isEmail(e)?(c="EnteredAndValid",i.a.formGroupEmail.style.border="1px solid #002fff",i.a.emailLabel.style.color="#002fff"):(c="EnteredButInvalid",i.a.formGroupEmail.style.border="1px solid tomato",i.a.emailLabel.style.color="tomato")})),i.a.passInput.addEventListener("input",(function(){var e=i.a.passInput.value.length;0===e?(m="notEntered",i.a.formGroupPass.removeAttribute("style"),i.a.passLabel.removeAttribute("style")):e>7?(m="EnteredAndValid",i.a.formGroupPass.style.border="1px solid #002fff",i.a.passLabel.style.color="#002fff"):(m="EnteredButInvalid",i.a.formGroupPass.style.border="1px solid tomato",i.a.passLabel.style.color="tomato")})),i.a.eyeSvgForPass.addEventListener("click",(function(){"password"===i.a.passInput.getAttribute("type")?(i.a.passInput.setAttribute("type","text"),i.a.eyeSvgForPass.setAttribute("src","/assets/svg/passHide.svg"),i.a.eyeSvgForPass.style.display="inline-block"):(i.a.passInput.setAttribute("type","password"),i.a.eyeSvgForPass.setAttribute("src","/assets/svg/passShow.svg"),i.a.eyeSvgForPass.removeAttribute("style"))}));var p=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.a.btnLoginText.textContent="",i.a.btnLoginText.classList.add("spinner"),e.prev=2,e.next=5,a()({method:"POST",url:"/api/v1/users/login",data:{email:t,password:r}});case 5:"success"===e.sent.data.status&&(i.a.btnLoginText.classList.remove("spinner"),i.a.btnLoginText.innerHTML="&#10003;",Object(u.a)("success","Logged in Successfully!"),setTimeout((function(){location.assign("/")}),500)),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(2),i.a.btnLoginText.classList.remove("spinner"),i.a.btnLoginText.innerHTML="&#10007;",setTimeout((function(){i.a.btnLoginText.textContent="Login"}),500),Object(u.a)("error",e.t0.response.data.message);case 15:case"end":return e.stop()}}),e,null,[[2,9]])})),function(){var t=this,r=arguments;return new Promise((function(o,a){var n=e.apply(t,r);function s(e){d(n,o,a,s,u,"next",e)}function u(e){d(n,o,a,s,u,"throw",e)}s(void 0)}))});return function(e,r){return t.apply(this,arguments)}}();i.a.formLogin.addEventListener("submit",(function(e){if(e.preventDefault(),"notEntered"===c)Object(u.a)("error","Please enter your email address.");else if("EnteredButInvalid"===c)Object(u.a)("error","Please enter a valid email address.");else if("notEntered"===m)Object(u.a)("error","Please enter your password.");else if("EnteredButInvalid"===m)Object(u.a)("error","Password should be at least 8 characters long.");else{var t=i.a.emailInput.value,r=i.a.passInput.value;p(t,r)}}))},6:function(e,t,r){},7:function(e,t,r){e.exports=r.p+"assets/svg/passHide.svg"},8:function(e,t,r){e.exports=r.p+"assets/svg/passShow.svg"},9:function(e,t,r){e.exports=r.p+"assets/images/default.png"}});