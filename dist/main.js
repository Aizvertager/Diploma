!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=e=>{const t=document.getElementById(e),n=document.createElement("div");n.style.cssText="color:green;font-size:18px",t.addEventListener("submit",e=>{e.preventDefault(),t.appendChild(n),n.textContent="Ваш запрос обрабатывается";const r=new FormData(t);let c={};r.forEach((e,t)=>{c[t]=e}),o(c).then(e=>{if(200!==e.status)throw new Error("status network not 200");n.textContent="Ваша заявка принята"}).catch(e=>{n.style.cssText="color: red",n.textContent="Произошла ошибка, проверьте правильно ли введены данные",console.error(e)}).then(()=>{t.reset()})});const o=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};var r=()=>{document.querySelectorAll(".phone-user").forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^0-9\+]/,"")})}),document.querySelectorAll('input[placeholder="Ваше имя"]').forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^а-яё\s]/gi,"")})})};var c=(e,t)=>{const n=document.querySelectorAll(e),o=document.querySelector(t);n.forEach(e=>{e.addEventListener("click",()=>{o.style.display="block",o.addEventListener("click",e=>{let n=e.target;n.matches(".popup-close")?o.style.display="none":n.matches(t)&&(o.style.display="none")})})})};var l=()=>{const e=document.querySelector(".add-sentence-btn"),t=document.querySelectorAll(".shadow-block");e.addEventListener("click",()=>{t.forEach(t=>{let n=t.parentNode;n.classList.contains("hidden")&&(n.classList.remove("hidden"),e.style.display="none")})})};o("formMain"),o("formCall"),o("formCallSecond"),o("formDiscount"),o("formCheck"),r(),c("#call-btn",".popup-call"),c(".discount-btn",".popup-discount"),c(".check-btn",".popup-check"),c(".director-btn",".popup-consultation"),l()}]);