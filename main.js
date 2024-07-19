(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>E});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),c=t(417),s=t.n(c),d=new URL(t(653),t.b),l=new URL(t(405),t.b),p=new URL(t(627),t.b),u=new URL(t(323),t.b),f=new URL(t(356),t.b),m=new URL(t(354),t.b),h=i()(r()),g=s()(d),v=s()(l),b=s()(p),x=s()(u),y=s()(f),w=s()(m);h.push([n.id,`@font-face {\n    font-family: "pacifico";\n    src: url(${g}) format("woff2"),\n        url(${v}) format("woff");\n}\n\n@font-face {\n    font-family: "caviar";\n    src: url(${b}) format("woff2"),\n        url(${x}) format("woff");\n    font-weight: normal;\n}\n\n@font-face {\n    font-family: "caviar";\n    src: url(${y}) format("woff2"),\n        url(${w}) format("woff");\n    font-weight: bold;\n}\n\n:root {\n    --main-color: #22d3ee;\n    --light-color: #ecfeff;\n    --dark-color: #155e75;\n    --text-color: #083344;\n    --hover-color: #06b6d4;\n    width: 100%;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    color: var(--text-color);\n}\n\nbody {\n    background-color: var(--light-color);\n    position: relative;\n    min-width: min-content;\n}\n\n/* header navigation */\nheader {\n    position: sticky;\n    top: 0;\n    z-index: 1;\n}\n\nnav {\n    width: 100%;\n    height: 60px;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n}\n\nnav button {\n    appearance: none;\n    border: none;\n    background-color: var(--main-color);\n    font-family: "pacifico", sans-serif;\n    font-size: 2rem;\n    color: var(--light-color);\n}\n\nnav button:hover,\nnav button:active {\n    background-color: var(--hover-color);\n    text-shadow: 0px 0px 8px var(--light-color);\n}\n\nnav button.highlight {\n    text-shadow: 0px 0px 8px var(--light-color);\n    text-decoration: overline solid;\n}\n\n/* home page styling */\n#content > div {\n    display: grid;\n    justify-items: center;\n    font-family: "caviar", sans-serif;\n}\n\n.home-content p{\n    font-size: 1.4rem;\n    line-height: 1.5;\n}\n\n.home-content h2 {\n    font-size: 2rem;\n    margin: 12px 0;\n}\n\n.home-content h2 > span {\n    text-decoration: underline;\n}\n\n#hero-img {\n    width: 100%;\n    max-width: 960px;\n    object-fit: cover;\n    object-position: bottom;\n    position: relative;\n    margin-bottom: 16px;\n}\n\n/* menu page styling */\n.menu-content {\n    margin-top: 16px;\n    margin-bottom: 16px;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 400px);\n    grid-auto-rows: 400px;\n    gap: 16px;\n    justify-content: center;\n}\n\n.menu-content div {\n    border: 2px solid var(--dark-color);\n    border-radius: 6px;\n    display: grid;\n    justify-items: center;\n    gap: 16px;\n    padding: 16px 0;\n\n}\n\n.menu-content div:hover {\n    background-color: var(--main-color);\n    color: var(--light-color);\n    h2 {\n        text-shadow: 0px 0px 8px var(--light-color);\n    }\n    border-color: var(--hover-color);\n}\n\n.menu-content img {\n    width: 100%;\n    height: 250px;\n    object-fit: cover;\n}\n\n.menu-content p {\n    text-align: center;\n    font-weight: bold;\n    line-height: 1.3;\n}\n\n.menu-content h2 {\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\n.menu-content p,\n.menu-content h2 {\n    color: inherit;\n}\n\n/*About page styling*/\n.about-content {\n    padding: 16px 16px;\n    gap: 24px;\n    grid-template-columns: minmax(468px, 960px);\n    justify-content: center;\n}\n\n.about-content > div {\n    display: grid;\n    border: 2px solid var(--dark-color);\n    border-radius: 6px;\n    width: 100%;\n    padding: 24px;\n    font-size: 1.5rem;\n}\n\n.about-content h2 {\n    text-align: center;\n    text-decoration: underline;\n    font-size: 2rem;\n    margin-bottom: 16px;\n}`,""]);const E=h},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},494:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},354:(n,e,t)=>{n.exports=t.p+"754e69c3742527ac68d0.woff"},356:(n,e,t)=>{n.exports=t.p+"c07a0dd085b9245e1ecf.woff2"},323:(n,e,t)=>{n.exports=t.p+"976609a869c5d3e14c2b.woff"},627:(n,e,t)=>{n.exports=t.p+"ddc20ce9c4a6f6c5a83a.woff2"},405:(n,e,t)=>{n.exports=t.p+"99e72057ddd81de0301f.woff"},653:(n,e,t)=>{n.exports=t.p+"f84415b25e0fc8915ed5.woff2"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;const o=t.p+"ea4d28aaf74fe4429cfd.jpg",r=[{name:"Burger",img:t.p+"7efd897db49e9c1c92a4.jpg",text:"The sweet combinations of carbs, fats and protein! It's like heaven in an bun!"},{name:"Fries",img:t.p+"329e8a869bd60bbc5224.jpg",text:"From an boring potato to one of the most loved foods in the world! That's the power of deep frying!"},{name:"Pizza",img:t.p+"374fc4780de4302fcc67.jpg",text:"The italian classic that lives in our hearts (and arteries, literally)! It's simply irresistible!"},{name:"Ice Cream",img:t.p+"cbf5ca22d01264b6d7e9.jpg",text:"The mix of fats and sugar that it's simply delicious! Everybody loves its texture and iciness!"}],a=[{title:"Mission",content:"<p>In an time where the needs and desires of the individual must be protected and fulfilled, although the current knowledge about eating habits and it's impacts in the matters of health and life quality says that beeing undisciplined is bad, we aim at serving what one wants!</p>"},{title:"Address",content:"<p>The Cholesterol Empire</p><p>Almost The Cofin Street 5432, Yougettingthere</p><p>The Federated States of Sweetness.</p>"},{title:"Contact",content:"<p>McLovin Faterson: 5555-5444</p><p>E-mail: eatuntiltheend@realemail.com</p>"}];var i=t(72),c=t.n(i),s=t(825),d=t.n(s),l=t(659),p=t.n(l),u=t(56),f=t.n(u),m=t(540),h=t.n(m),g=t(494),v=t.n(g),b=t(208),x={};x.styleTagTransform=v(),x.setAttributes=f(),x.insert=p().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=h(),c()(b.A,x),b.A&&b.A.locals&&b.A.locals,function(){document.querySelector("nav").addEventListener("click",(function(n){if(/-btn$/.test(n.target.id))switch(n.isTrusted&&document.querySelector("#content > div").remove(),n.target.id){case"menu-btn":e(function(){const n=document.createElement("div");n.classList.add("menu-content");for(let e of r){const t=document.createElement("div"),o=document.createElement("h2"),r=document.createElement("img"),a=document.createElement("p");o.textContent=e.name.toUpperCase(),r.alt=e.name,r.src=e.img,a.textContent=e.text,t.appendChild(o),t.appendChild(r),t.appendChild(a),n.appendChild(t)}return n}()),t("menu-btn");break;case"home-btn":e(function(){const n=document.createElement("div");n.classList.add("home-content");const e=new Image;e.src=o,e.id="hero-img";const t=document.createElement("div");return t.innerHTML="<p>There is something magical about food.<br>For some reason, unhealthy food <strong>TASTE BETTER!</strong></p><h2>Thats why <span>The Cholesterol Empire</span> was created!</h2><p>A place for you, who wants to eat without thinking about the consequences!</p><p>Who cares if you don't live to see another day, what's important is to<br><strong>EAT TASTEFULL FOOD!</strong></p>",n.appendChild(e),n.appendChild(t),n}()),t("home-btn");break;case"about-btn":e(function(){const n=document.createElement("div");n.classList.add("about-content");for(let e of a){const t=document.createElement("div"),o=document.createElement("h2"),r=document.createElement("div");o.textContent=e.title,r.innerHTML=e.content,t.appendChild(o),t.appendChild(r),n.appendChild(t)}return n}()),t("about-btn")}}));const n=new Event("click",{bubbles:!0});function e(n){document.querySelector("#content").appendChild(n)}function t(n){document.querySelectorAll("nav > button").forEach((e=>{e.id===n?e.classList.add("highlight"):e.classList.remove("highlight")}))}document.querySelector("#home-btn").dispatchEvent(n)}()})();