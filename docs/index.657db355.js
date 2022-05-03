function e(e){return e&&e.__esModule?e.default:e}var t={};t=function(){function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}function t(n,r){function a(t,a,o){if("undefined"!=typeof document){"number"==typeof(o=e({},r,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var s in o)o[s]&&(i+="; "+s,!0!==o[s]&&(i+="="+o[s].split(";")[0]));return document.cookie=t+"="+n.write(a,t)+i}}function o(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],r={},a=0;a<t.length;a++){var o=t[a].split("="),i=o.slice(1).join("=");try{var s=decodeURIComponent(o[0]);if(r[s]=n.read(i,s),e===s)break}catch(e){}}return e?r[e]:r}}return Object.create({set:a,get:o,remove:function(t,n){a(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(n)}})}return t({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}();const n={CHAT:document.querySelector(".chat"),DIALOG:document.querySelector(".chat__box"),SETTINGS:document.querySelector("[data-modal='settings']"),CONFIRMATION:document.querySelector("[data-modal='confirmation']"),AUTHORIZATION:document.querySelector("[data-modal='authorization']"),EXIT:document.querySelector(".chat__btn--exit"),LOGIN:document.querySelector(".modal__form--login"),CHANGE_NAME:document.querySelector(".modal__form--settings"),FORM:document.querySelector(".chat__form"),NAME:document.querySelector("[name='name']"),INPUT:document.querySelector(".chat__input"),MESSAGES:document.querySelector(".chat__list"),START:document.querySelector(".chat__btn--start")};document.querySelector("#settings"),document.querySelector("#confirmation"),document.querySelector("#authorization"),document.querySelector(".modal__form--code");function r(){n.MESSAGES.firstElementChild.scrollIntoView({block:"end",behavior:"smooth"})}function a(e,t){const n=e.target,r=n.querySelector(".message-error");n.classList.add("error"),r.textContent=t}function o(e){const t=e.target;t.querySelector(".message-error")&&t.classList.remove("error")}function i(e,t){let n,r,a=!1;return function o(...i){if(a)return n=this,void(r=i);a=!0,e.apply(this,i),setTimeout((()=>{a=!1,r&&(o.apply(n,r),n=null,r=null)}),t)}}const s="https://mighty-cove-31255.herokuapp.com/api/user",u="https://mighty-cove-31255.herokuapp.com/api/user/me",c="https://mighty-cove-31255.herokuapp.com/api/messages",d="ws://mighty-cove-31255.herokuapp.com/websockets?",l={NAME:"Я",COMPANION:"Собеседник мой",EMAIL:""},h={START:1,END:20,STORAGE:[],USER:document.getElementsByClassName("message--user"),SOCKET:null};async function m(){const e=await fetch(c);if(!e.ok)throw new Error("Неполадки на сервере");const{messages:t}=await e.json();return t}function f(e){this.dataModal=e.target.dataset.modal,this.modal=document.querySelector(`#${this.dataModal}`),this.closeBtn=this.modal.querySelector(".modal__close"),this.form=this.modal.querySelector(".modal__form"),this.closeModal=()=>{this.modal.classList.remove("open"),this.removeListeners()},this.submitCloseModal=()=>{},this.closeModalOutsideOfContent=e=>{e.target===this.modal&&this.closeModal()},this.removeListeners=()=>{this.modal.removeEventListener("click",this.closeModal),this.closeBtn.removeEventListener("click",this.closeModal),this.modal.removeEventListener("click",this.closeModalOutsideOfContent)},this.modal.classList.add("open"),this.closeBtn.addEventListener("click",this.closeModal),this.modal.addEventListener("click",this.closeModalOutsideOfContent)}function g(e){return new f(e)}function w(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function v(e){return w(1,arguments),e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}function y(e){w(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function p(e){if(w(1,arguments),!v(e)&&"number"!=typeof e)return!1;var t=y(e);return!isNaN(Number(t))}var b={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},T=function(e,t,n){var r,a=b[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function S(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var C={date:S({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:S({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:S({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},M={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function E(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=a.width?String(a.width):o;r=e.formattingValues[i]||e.formattingValues[o]}else{var s=e.defaultWidth,u=a.width?String(a.width):e.defaultWidth;r=e.values[u]||e.values[s]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function k(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,s=o[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(u)?x(u,(function(e){return e.test(s)})):D(u,(function(e){return e.test(s)}));i=e.valueCallback?e.valueCallback(c):c,i=n.valueCallback?n.valueCallback(i):i;var d=t.slice(s.length);return{value:i,rest:d}}}function D(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function x(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}var A,O={code:"en-US",formatDistance:T,formatLong:C,formatRelative:function(e,t,n,r){return M[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:E({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:E({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:E({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:E({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:E({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(A={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(A.matchPattern);if(!n)return null;var r=n[0],a=e.match(A.parsePattern);if(!a)return null;var o=A.valueCallback?A.valueCallback(a[0]):a[0];o=t.valueCallback?t.valueCallback(o):o;var i=e.slice(r.length);return{value:o,rest:i}}),era:k({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:k({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:k({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:k({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:k({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function U(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function N(e,t){w(2,arguments);var n=y(e).getTime(),r=U(t);return new Date(n+r)}function q(e,t){w(2,arguments);var n=U(t);return N(e,-n)}function P(e){w(1,arguments);var t=1,n=y(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function L(e){w(1,arguments);var t=y(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=P(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=P(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function I(e){w(1,arguments);var t=L(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=P(n);return r}function _(e,t){w(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,o=null==a?0:U(a),i=null==n.weekStartsOn?o:U(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=y(e),u=s.getUTCDay(),c=(u<i?7:0)+u-i;return s.setUTCDate(s.getUTCDate()-c),s.setUTCHours(0,0,0,0),s}function W(e,t){w(1,arguments);var n=y(e),r=n.getUTCFullYear(),a=t||{},o=a.locale,i=o&&o.options&&o.options.firstWeekContainsDate,s=null==i?1:U(i),u=null==a.firstWeekContainsDate?s:U(a.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,u),c.setUTCHours(0,0,0,0);var d=_(c,t),l=new Date(0);l.setUTCFullYear(r,0,u),l.setUTCHours(0,0,0,0);var h=_(l,t);return n.getTime()>=d.getTime()?r+1:n.getTime()>=h.getTime()?r:r-1}function R(e,t){w(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:U(a),i=null==n.firstWeekContainsDate?o:U(n.firstWeekContainsDate),s=W(e,t),u=new Date(0);u.setUTCFullYear(s,0,i),u.setUTCHours(0,0,0,0);var c=_(u,t);return c}function Y(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var G={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return Y("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):Y(n+1,2)},d:function(e,t){return Y(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return Y(e.getUTCHours()%12||12,t.length)},H:function(e,t){return Y(e.getUTCHours(),t.length)},m:function(e,t){return Y(e.getUTCMinutes(),t.length)},s:function(e,t){return Y(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return Y(Math.floor(r*Math.pow(10,n-3)),t.length)}},H="midnight",j="noon",F="morning",z="afternoon",B="evening",X="night";function Q(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+Y(o,2)}function J(e,t){return e%60==0?(e>0?"-":"+")+Y(Math.abs(e)/60,2):$(e,t)}function $(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+Y(Math.floor(a/60),2)+n+Y(a%60,2)}var K={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return G.y(e,t)},Y:function(e,t,n,r){var a=W(e,r),o=a>0?a:1-a;return"YY"===t?Y(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):Y(o,t.length)},R:function(e,t){return Y(L(e),t.length)},u:function(e,t){return Y(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return Y(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return Y(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return G.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return Y(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){w(1,arguments);var n=y(e),r=_(n,t).getTime()-R(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):Y(a,t.length)},I:function(e,t,n){var r=function(e){w(1,arguments);var t=y(e),n=P(t).getTime()-I(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):Y(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):G.d(e,t)},D:function(e,t,n){var r=function(e){w(1,arguments);var t=y(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):Y(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return Y(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return Y(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return Y(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?j:0===a?H:a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?B:a>=12?z:a>=4?F:X,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return G.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):G.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):Y(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):Y(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):G.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):G.s(e,t)},S:function(e,t){return G.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return J(a);case"XXXX":case"XX":return $(a);default:return $(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return J(a);case"xxxx":case"xx":return $(a);default:return $(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Q(a,":");default:return"GMT"+$(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Q(a,":");default:return"GMT"+$(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return Y(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return Y((r._originalDate||e).getTime(),t.length)}};function Z(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}}function V(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}}var ee={p:V,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return Z(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",Z(a,t)).replace("{{time}}",V(o,t))}};function te(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var ne=["D","DD"],re=["YY","YYYY"];function ae(e){return-1!==ne.indexOf(e)}function oe(e){return-1!==re.indexOf(e)}function ie(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var se=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ue=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ce=/^'([^]*?)'?$/,de=/''/g,le=/[a-zA-Z]/;function he(e){return e.match(ce)[1].replace(de,"'")}class me{constructor({text:e,user:{email:t,name:n},createdAt:r,status:a}){this.email=t,this.text=e,this.name=n,this.time=r||function(e){return w(1,arguments),y(e).getTime()}(new Date),this.status=a||"unread"}createItem(){this.template=document.querySelector("#messageTemplate"),this.item=document.createElement("li"),this.item.classList.add("message"),this.item.append(this.template.content.cloneNode(!0)),this.itemAuthor=this.item.querySelector(".message__name"),this.itemText=this.item.querySelector(".message__text"),this.itemTime=this.item.querySelector(".message__time");const e=this.email===l.EMAIL;return e&&this.item.classList.add("message--user"),this.status&&this.item.classList.add("message--sent"),this.itemAuthor.textContent=e?l.NAME:this.name,this.itemText.textContent=this.text,this.itemTime.textContent=function(e,t,n){w(2,arguments);var r=String(t),a=n||{},o=a.locale||O,i=o.options&&o.options.firstWeekContainsDate,s=null==i?1:U(i),u=null==a.firstWeekContainsDate?s:U(a.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=o.options&&o.options.weekStartsOn,d=null==c?0:U(c),l=null==a.weekStartsOn?d:U(a.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var h=y(e);if(!p(h))throw new RangeError("Invalid time value");var m=te(h),f=q(h,m),g={firstWeekContainsDate:u,weekStartsOn:l,locale:o,_originalDate:h};return r.match(ue).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,ee[t])(e,o.formatLong,g):e})).join("").match(se).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return he(n);var i=K[r];if(i)return!a.useAdditionalWeekYearTokens&&oe(n)&&ie(n,t,e),!a.useAdditionalDayOfYearTokens&&ae(n)&&ie(n,t,e),i(f,n,o.localize,g);if(r.match(le))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("")}(new Date(this.time),"HH:mm"),this.item}appendItem=e=>e.append(this.createItem());prependItem=e=>e.prepend(this.createItem())}function fe(e,t=h.START,r=h.END){if(e.length){for(let a=t;a<=r;a++){new me(e[e.length-a]).appendItem(n.MESSAGES)}h.START+=20,h.END+=20}}function ge(e){e.querySelector(".loader").classList.toggle("active"),e.querySelector(".sk-chase").classList.toggle("active");const t=e.querySelector(".loader.active");t&&(t.focus(),t.addEventListener("blur",(()=>{t.focus()})))}function we(e){this.token=e,this.data=e=>JSON.parse(e.data),this.checkMessage=()=>this.socket.addEventListener("message",this.renderMessage),this.sendMessage=e=>this.socket.send(JSON.stringify({text:e})),this.renderMessage=e=>{new me(this.data(e)).prependItem(n.MESSAGES),r()},this.checkError=()=>{this.socket.addEventListener("error",(()=>{console.log(`[error] ${error.message}`)}))},this.checkClose=()=>{this.socket.addEventListener("close",(e=>{e.wasClean?console.log(`[close] Соединение закрыто чисто, код=${e.code} причина=${e.reason}`):(console.log("[close] Соединение прервано"),this.init())}))},this.disconnect=()=>{this.socket.close(1e3,"Работа закончена")},this.init=()=>{this.socket=new WebSocket(`${d}${this.token}`),this.checkMessage(),this.checkError(),this.checkClose()}}const ve=e=>e.target.closest(".modal__form").reset();function ye(e){const t=e.target.querySelector(".modal__input"),{value:n}=t;if(!n)throw new Error("Введите что-то");return n.trim()}function pe(){const n=e(t).get("token");if(!n)throw new Error("Вы не авторизованны");return n}function be(e,t){l.EMAIL=e,l.NAME=t||"Я",n.NAME.value=l.NAME,n.EXIT.style.display=t?"block":"none",n.AUTHORIZATION.style.display=t?"none":"block"}async function Te(e){const t=await function(e){return fetch(u,{headers:{Authorization:`Bearer ${e}`}})}(e);if(!t.ok)throw new Error("Ошибка запроса");const{email:n,name:r}=await t.json();be(n,r)}const Se=i((function(){n.MESSAGES.scrollTop-n.MESSAGES.offsetHeight+n.MESSAGES.scrollHeight<=50&&fe(h.STORAGE)}),300),Ce=i((function(){const e=-n.MESSAGES.scrollTop>n.MESSAGES.offsetHeight;n.START.style.opacity=e?"1":null,n.START.style.visibility=e?"visible":null}),200);!async function(){ge(n.CHAT);try{const e=pe();await Te(e),h.SOCKET=new we(e),h.SOCKET.init(),h.STORAGE=await m(),fe(h.STORAGE)}catch(e){console.log(e.message),be()}finally{ge(n.CHAT)}}(),n.SETTINGS.addEventListener("click",g),n.AUTHORIZATION.addEventListener("click",g),n.CONFIRMATION.addEventListener("submit",(async function(e){e.preventDefault();try{const t=ye(e),r=e.target.closest(".modal");if(!(await function(e){const t={email:e},n={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json;charset=utf-8"}};return fetch(s,n)}(t)).ok)throw new Error("Ошибка запроса");g(e),o(e),ve(e),r.classList.remove("open"),n.AUTHORIZATION.dataset.modal="confirmation"}catch(t){a(e,t.message)}})),n.FORM.addEventListener("submit",(function(e){e.preventDefault();const{value:t}=n.INPUT;t&&(h.SOCKET.sendMessage(t),n.INPUT.value="")})),n.LOGIN.addEventListener("submit",(async function(r){try{r.preventDefault();const a=ye(r);await Te(a),function(n){const r=new Date((new Date).getTime()+36e6);e(t).set("token",n,{expires:r})}(a),document.querySelector(".chat__btns").style.zIndex="101";r.target.closest(".modal").classList.remove("open"),ge(n.DIALOG),ve(r),h.STORAGE=await m(),fe(h.STORAGE),h.SOCKET=new we(a),h.SOCKET.init()}catch(e){a(r,"Введите верный код")}finally{ge(n.DIALOG),document.querySelector(".chat__btns").style.zIndex=null}})),n.CHANGE_NAME.addEventListener("submit",(async function(e){try{e.preventDefault();const t=pe();o(e);const{value:n}=e.target.querySelector(".modal__input");await function(e,t){const n={name:e},r={Authorization:`Bearer ${t}`,"Content-Type":"application/json;charset=utf-8"},a={method:"PATCH",body:JSON.stringify(n),headers:r};return fetch(s,a)}(n,t),a(e,"Вы сменили ник"),l.NAME=n.trim(),[...h.USER].forEach((e=>{e.querySelector(".message__name").textContent=l.NAME}))}catch(t){a(e,t.message)}})),n.EXIT.addEventListener("click",(function(){e(t).remove("token"),h.SOCKET.disconnect(),n.MESSAGES.replaceChildren(),be(),h.START=1,h.END=20,h.STORAGE=[],n.AUTHORIZATION.dataset.modal="authorization"})),n.START.addEventListener("click",r),n.MESSAGES.addEventListener("scroll",Se),n.MESSAGES.addEventListener("scroll",Ce);
//# sourceMappingURL=index.657db355.js.map
