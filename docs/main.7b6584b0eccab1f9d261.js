(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=5)})([function(a,b,c){var d=c(1),e=c(2);e=e.__esModule?e.default:e,'string'==typeof e&&(e=[[a.i,e,'']]);d(e,{insert:'head',singleton:!1});a.exports=e.locals||{}},function(a,b,c){'use strict';function d(a){for(var b=-1,c=0;c<m.length;c++)if(m[c].identifier===a){b=c;break}return b}function e(a,b){for(var c={},e=[],f=0;f<a.length;f++){var g=a[f],h=b.base?g[0]+b.base:g[0],i=c[h]||0,k=''.concat(h,' ').concat(i);c[h]=i+1;var l=d(k),n={css:g[1],media:g[2],sourceMap:g[3]};-1===l?m.push({identifier:k,updater:j(n,b),references:1}):(m[l].references++,m[l].updater(n)),e.push(k)}return e}function f(a){var b=document.createElement('style'),d=a.attributes||{};if('undefined'==typeof d.nonce){var e=c.nc;e&&(d.nonce=e)}if(Object.keys(d).forEach(function(a){b.setAttribute(a,d[a])}),'function'==typeof a.insert)a.insert(b);else{var f=l(a.insert||'head');if(!f)throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.');f.appendChild(b)}return b}function g(a){return null!==a.parentNode&&void a.parentNode.removeChild(a)}function h(a,b,c,d){var e=c?'':d.media?'@media '.concat(d.media,' {').concat(d.css,'}'):d.css;if(a.styleSheet)a.styleSheet.cssText=n(b,e);else{var f=document.createTextNode(e),g=a.childNodes;g[b]&&a.removeChild(g[b]),g.length?a.insertBefore(f,g[b]):a.appendChild(f)}}function i(a,b,c){var d=c.css,e=c.media,f=c.sourceMap;if(e?a.setAttribute('media',e):a.removeAttribute('media'),f&&btoa&&(d+='\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(f)))),' */')),a.styleSheet)a.styleSheet.cssText=d;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(d))}}function j(a,b){var c,d,e;if(b.singleton){var j=p++;c=o||(o=f(b)),d=h.bind(null,c,j,!1),e=h.bind(null,c,j,!0)}else c=f(b),d=i.bind(null,c,b),e=function(){g(c)};return d(a),function(b){if(b){if(b.css===a.css&&b.media===a.media&&b.sourceMap===a.sourceMap)return;d(a=b)}else e()}}var k=function(){var a;return function(){return'undefined'==typeof a&&(a=!!(window&&document&&document.all&&!window.atob)),a}}(),l=function(){var a={};return function(b){if('undefined'==typeof a[b]){var c=document.querySelector(b);if(window.HTMLIFrameElement&&c instanceof window.HTMLIFrameElement)try{c=c.contentDocument.head}catch(a){c=null}a[b]=c}return a[b]}}(),m=[],n=function(){var a=[];return function(b,c){return a[b]=c,a.filter(Boolean).join('\n')}}(),o=null,p=0;a.exports=function(a,b){b=b||{},b.singleton||'boolean'==typeof b.singleton||(b.singleton=k()),a=a||[];var c=e(a,b);return function(a){if(a=a||[],'[object Array]'===Object.prototype.toString.call(a)){for(var f=0;f<c.length;f++){var g=c[f],h=d(g);m[h].references--}for(var i=e(a,b),j=0;j<c.length;j++){var k=c[j],l=d(k);0===m[l].references&&(m[l].updater(),m.splice(l,1))}c=i}}}},function(a,b,c){var d=c(3);b=d(!1),b.push([a.i,'.container {\r\n  background-color: #FFFFFF;\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\r\n  width: 400px;\r\n}\r\n\r\n.container .form {\r\n  padding: 30px 40px;\r\n}\r\n\r\n.container .form h2 {\r\n  text-align: center;\r\n  margin: 0 0 20px;\r\n}\r\n\r\n.container .form .form-control {\r\n  margin-bottom: 10px;\r\n  padding-bottom: 20px;\r\n  position: relative;\r\n}\r\n\r\n.container .form .form-control label {\r\n  color: #777;\r\n  display: block;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.container .form .form-control input {\r\n  border: 2px solid #F0F0F0;\r\n  border-radius: 4px;\r\n  display: block;\r\n  width: 100%;\r\n  padding: 10px;\r\n  font-size: 14px;\r\n}\r\n\r\n.container .form .form-control input:focus {\r\n  outline: 0;\r\n  border-color: #777;\r\n}\r\n\r\n.container .form .form-control small {\r\n  color: #E74C3C;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  visibility: hidden;\r\n}\r\n\r\n.container .form .form-control.success input {\r\n  border-color: #2ECC71;\r\n}\r\n\r\n.container .form .form-control.error input {\r\n  border-color: #E74C3C;\r\n}\r\n\r\n.container .form .form-control.error small {\r\n  visibility: visible;\r\n}\r\n\r\n.container .form button {\r\n  cursor: pointer;\r\n  background-color: #3498DB;\r\n  border: 2px solid #3498DB;\r\n  border-radius: 4px;\r\n  color: #FFFFFF;\r\n  display: block;\r\n  font-size: 20px;\r\n  padding: 10px;\r\n  margin-top: 20px;\r\n  width: 100%;\r\n  transition: background-color 1s;\r\n}\r\n\r\n.container .form button:hover {\r\n  background-color: #FFFFFF;\r\n  border: 2px solid #3498DB;\r\n  color: #3498DB;\r\n}\r\n','']),a.exports=b},function(a){'use strict';function b(a,b){var d=a[1]||'',e=a[3];if(!e)return d;if(b&&'function'==typeof btoa){var f=c(e),g=e.sources.map(function(a){return'/*# sourceURL='.concat(e.sourceRoot||'').concat(a,' */')});return[d].concat(g).concat([f]).join('\n')}return[d].join('\n')}function c(a){var b=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c='sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(b);return'/*# '.concat(c,' */')}a.exports=function(a){var c=[];return c.toString=function(){return this.map(function(c){var d=b(c,a);return c[2]?'@media '.concat(c[2],' {').concat(d,'}'):d}).join('')},c.i=function(a,b,d){'string'==typeof a&&(a=[[null,a,'']]);var e={};if(d)for(var f,g=0;g<this.length;g++)f=this[g][0],null!=f&&(e[f]=!0);for(var h,i=0;i<a.length;i++)(h=[].concat(a[i]),!(d&&e[h[0]]))&&(b&&(h[2]?h[2]=''.concat(b,' and ').concat(h[2]):h[2]=b),c.push(h))},c}},function(){},function(a,b,c){'use strict';c.r(b);var d=function(e,a){var b=e.parentElement;b.className='form-control error';var c=b.querySelector('small');c.innerText=a},e=function(c){var a=c.parentElement;a.className='form-control success'},f=function(b){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(b.value.trim())?e(b):d(b,'Email is not valid')},g=function(b){b.forEach(function(b){''===b.value.trim()?d(b,''.concat(j(b),' is required')):e(b)})},h=function(f,a,b){f.value.length<a?d(f,''.concat(j(f),' must be at least ').concat(a,' characters')):f.value.length>b?d(f,''.concat(j(f),' must be less than ').concat(b,' characters')):e(f)},i=function(c,a){c.value!==a.value&&d(a,'Passwords do not match')},j=function(d){var a=d.id.charAt(0).toUpperCase(),b=d.id.slice(1);return a+b},k=c(0),l=document.getElementById('form'),m=document.getElementById('username'),n=document.getElementById('email'),o=document.getElementById('password'),p=document.getElementById('password2'),q=function(){l.addEventListener('submit',function(b){b.preventDefault(),g([m,n,o,p]),h(m,3,15),h(o,6,25),f(n),i(o,p)})},r=c(4);(function(){console.log('Init'),q()})()}]);