parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var t=document.querySelector(".start"),e=document.querySelector("tbody"),r=document.querySelector(".game-score"),n=document.querySelector(".message-start"),o=document.querySelector(".message-win"),a=document.querySelector(".message-lose"),s=[],c={0:[0,0,0,0],1:[0,0,0,0],2:[0,0,0,0],3:[0,0,0,0]},i=[],u=[],f=0,l=null,d=null,h=!1,v=function(){var t=Math.floor(10*Math.random())+1;return 4===t?t:t=2},m=function(){var t=Math.floor(4*Math.random())+0,e=Math.floor(4*Math.random())+0;return 0===c[t][e]?[t,e]:t>=3?[--t,e]:[++t,e]},w=function(t){var e=[];for(var r in t)for(var n=0;n<t[r].length;n++)""===t[r][n]&&e.push([r,n]);if(!(e.length<1)){var o=Math.floor(Math.random()*(e.length-1-0+1))+0;t[e[o][0]][e[o][1]]=v()}},L=function(){for(var t=0;t<4;t++)for(var r=0;r<4;r++)0!==c[t][r]?(e.rows[t].cells[r].textContent=c[t][r],e.rows[t].cells[r].className="field-cell field-cell--".concat(c[t][r])):(c[t][r]="",e.rows[t].cells[r].textContent=c[t][r],e.rows[t].cells[r].className="field-cell")},g=function(t,e){t.sort(function(t,r){var n=t,o=r;return"right"!==e&&"down"!==e||(n=r,o=t),""===n&&(n=0),""===o&&(o=0),0===o?-1:0===n?1:0})},p=function(t){for(var e in t.splice(0,16),c)c[e].map(function(e){t.push(e)});return t},y=function(t){for(var e=0;e<4;e++){if(g(c[e],t),"left"===t)for(var r=0;r<4;r++)if(""===c[e][r]&&(c[e][r]=0),c[e][r]===c[e][r+1]){c[e][r]=c[e][r]+c[e][r+1],f+=c[e][r],c[e][r+1]=0,g(c[e],t);break}if("right"===t)for(var n=3;n>=0;n--)if(""===c[e][n]&&(c[e][n]=0),c[e][n]===c[e][n-1]){c[e][n]=c[e][n]+c[e][n-1],f+=c[e][n],c[e][n-1]=0,g(c[e],t);break}}},M=function(t){if("down"!==t)for(var e=0;e<4;e++){for(var r=[],n=0;n<4;n++)r.push(c[n][e]);g(r);for(var o=0;o<4;o++)""===r[o]&&(r[o]=0),r[o]===r[o+1]&&(r[o]=r[o]+r[o+1],f+=r[o],r[o+1]=0),g(r),c[o][e]=r[o]}else for(var a=0;a<4;a++){for(var s=[],i=0;i<4;i++)s.push(c[i][a]);g(s,t);for(var u=3;u>=0;u--)""===s[u]&&(s[u]=0),s[u]===s[u-1]&&(s[u]=s[u]+s[u-1],f+=s[u],s[u-1]=0),g(s,t),c[u][a]=s[u]}},k=function(t){for(var e in t)for(var r=0;r<t[e].length;r++)if(2048===t[e][r]&&o.classList.remove("hidden"),0===t[e][r]||""===t[e][r])return;for(var n=0;n<4;n++)for(var s=0;s<4;s++){if(t[n][s]===t[n][s+1]||t[n][s]===t[n][s-1])return;if(0===n&&t[n][s]===t[n+1][s])return;if(!(1!==n&&2!==n||t[n][s]!==t[n+1][s]&&t[n][s]!==t[n-1][s]))return;if(3===n&&t[n][s]===t[n-1][s])return}a.classList.remove("hidden")},b=function(t){switch(t){case"ArrowLeft":y("left");break;case"ArrowRight":y("right");break;case"ArrowUp":M("up");break;case"ArrowDown":M("down")}};t.addEventListener("click",function(e){c={0:[0,0,0,0],1:[0,0,0,0],2:[0,0,0,0],3:[0,0,0,0]},f=0,t.matches(".start")&&(t.classList.remove("start"),t.classList.add("restart"),t.textContent="restart"),n.classList.add("hidden"),a.classList.add("hidden"),o.classList.add("hidden"),s=m(),c[s[0]][s[1]]=v(),s=m(),c[s[0]][s[1]]=v(),L()}),document.addEventListener("keydown",function(t){p(i),b(t.key),L(),p(u)}),document.addEventListener("keyup",function(e){t.matches(".start")||i.join()!==u.join()&&(r.textContent=f,w(c),L(),k(c))}),document.addEventListener("touchstart",function(t){var e=t.touches[0];l=e.clientX,d=e.clientY}),document.addEventListener("touchmove",function(t){if(l&&d){var e=t.touches[0].clientX,r=t.touches[0].clientY,n=e-l,o=r-d,a="";a=Math.abs(n)>=Math.abs(o)?n>0?"ArrowRight":"ArrowLeft":o>0?"ArrowDown":"ArrowUp",p(i),b(a),L(),p(u),l=null,d=null,h=!0}}),document.addEventListener("touchend",function(e){h&&(t.matches(".start")||i.join()!==u.join()&&(r.textContent=f,w(c),L(),k(c),h=!1))});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.c939b8b4.js.map