!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=e=>{const t=document.getElementById(e),n=document.createElement("div");n.style.cssText="color:green;font-size:18px",t.addEventListener("submit",e=>{e.preventDefault(),t.appendChild(n),n.textContent="Ваш запрос обрабатывается";const r=new FormData(t);let l={};r.forEach((e,t)=>{l[t]=e}),o(l).then(e=>{if(200!==e.status)throw new Error("status network not 200");n.textContent="Ваша заявка принята"}).catch(e=>{n.style.cssText="color: red",n.textContent="Произошла ошибка, проверьте правильно ли введены данные",console.error(e)}).then(()=>{t.reset()})});const o=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};var r=()=>{document.querySelectorAll(".phone-user").forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^0-9\+]/,"")})}),document.querySelectorAll('input[placeholder="Ваше имя"]').forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^а-яё\s]/gi,"")})})};var l=(e,t)=>{const n=document.querySelectorAll(e),o=document.querySelector(t);n.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),o.style.display="block",o.addEventListener("click",e=>{let n=e.target;n.matches(".popup-close")?o.style.display="none":n.matches(t)&&(o.style.display="none")})})})};var c=()=>{const e=document.querySelector(".add-sentence-btn"),t=document.querySelectorAll(".shadow-block");e.addEventListener("click",()=>{t.forEach(t=>{let n=t.parentNode;n.classList.contains("hidden")&&(n.classList.remove("hidden"),e.style.display="none")})})};var s=(e,t,n)=>{const o=document.getElementById(e),r=document.querySelectorAll(t),l=document.querySelectorAll(n);o.addEventListener("click",e=>{let n=e.target;(n=n.closest(t))&&r.forEach((e,t)=>{e===n&&l.forEach((e,n)=>{e.style.display=t===n?"block":"none"})})})};var d=e=>{const t=document.getElementById(e),n=document.querySelector(".director-question"),o=document.getElementById("name_13"),r=document.getElementById("phone_13"),l=document.createElement("div");l.style.cssText="color:green;font-size:18px",t.addEventListener("submit",e=>{e.preventDefault(),t.appendChild(l),l.textContent="Ваш запрос обрабатывается";const s=new FormData(t);s.append("Question",n.value);let d={};s.forEach((e,t)=>{d[t]=e}),c(d).then(e=>{if(200!==e.status)throw new Error("status network not 200");l.textContent="Ваша заявка принята"}).then(()=>{""===o.value&&""===r.value&&(o.style.cssText="border-color: red",r.style.cssText="border-color: red",l.style.cssText="color: red",l.textContent="Заполните поля")}).catch(e=>{l.style.cssText="color: red",l.textContent="Произошла ошибка, проверьте правильно ли введены данные",console.error(e)}).then(()=>{t.reset()})});const c=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};var a=()=>{const e=document.querySelectorAll(".construct-btn"),t=document.querySelectorAll(".panel-collapse-two");e.forEach((e,n)=>{let o=t.length;e.addEventListener("click",()=>{for(let e=0;e<t.length;e++)t[e].style.display="none",n===e?t[++e].style.display="block":3===n&&(o.style.display="block")})});document.getElementById("myonoffswitch");const n=document.getElementById("accordion"),o=document.getElementById("second-well"),r=document.querySelectorAll(".form-control");document.getElementById("calc-result");o.style.display="none",r[2].disabled=!0,r[3].disabled=!0,n.addEventListener("click",e=>{let t=e.target,n=1e4;t.matches("#myonoffswitch")&&(t.checked?(o.style.display="none",console.log(n)):(n=15e3,console.log("price: ",n),o.style.display="block",r[2].disabled=!1,r[3].disabled=!1))})};(()=>{document.querySelectorAll("a").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault()})})})(),o("formMain"),o("formCall"),o("formCallSecond"),o("formDiscount"),o("formCheck"),r(),l("#call-btn",".popup-call"),l(".discount-btn",".popup-discount"),l(".check-btn",".popup-check"),l(".director-btn",".popup-consultation"),l(".call-btn",".popup-discount"),c(),s("accordion",".panel-heading-two",".panel-collapse-two"),s("accordion-two",".panel-heading",".panel-collapse"),d("director-form"),a()}]);