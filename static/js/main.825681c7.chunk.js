(this["webpackJsonppollyanna-template"]=this["webpackJsonppollyanna-template"]||[]).push([[0],{139:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),c=a(10),l=a(8),s=(a(49),a(27)),u=a.n(s),m=a(17),d={apiKey:"AIzaSyC9q1TXBElkRkxna3UBh_cR8j6YT9PDhuo",authDomain:"pollyanna-template.firebaseapp.com",databaseURL:"https://pollyanna-template.firebaseio.com",projectId:"pollyanna-template",storageBucket:"pollyanna-template.appspot.com",messagingSenderId:"522096783918",appId:"1:522096783918:web:5f4f8403f8a73bad0625bf"},f=Object(n.createContext)({pages:{}}),p=function(e){return r.a.createElement(m.b,Object.assign({firebase:u.a},d),r.a.createElement(m.a,{path:"pages/",orderByValue:"created_on"},(function(t){var a=t.value;return r.a.createElement(f.Provider,{value:{pages:a}},e.children)})))},b=a(1),v=Object(n.createContext)({page:{},setPage:function(){}}),h=function(e){var t=e.children,a=e.location,o=e.pages,i=Object(n.useState)({}),c=Object(b.a)(i,2),l=c[0],s=c[1],u=Object(n.useCallback)((function(e){if(Array.isArray(o)){var t=!0,a=!1,n=void 0;try{for(var r,i=o[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var c=r.value;""===e||"/"===e?s(c):c.slug==="/".concat(e)&&s(c)}}catch(l){a=!0,n=l}finally{try{t||null==i.return||i.return()}finally{if(a)throw n}}}}),[o,s]),m=Object(n.useCallback)((function(e){if(e instanceof Object){var t=e.hash.replace("#/","");return u(t)}return u("/")}),[u]);return Object(n.useEffect)((function(){m(a)}),[m,a]),r.a.createElement(v.Provider,{value:{page:l,setPage:s}},t)},E=Object(n.createContext)({location:"",theme:null}),y=function(e){var t=Object(n.useState)(null),a=Object(b.a)(t,2),o=a[0],i=a[1],c=Object(n.useContext)(v).page,l=Object(n.useCallback)((function(){c instanceof Object&&i(c.theme)}),[c,i]),s=Object(n.useCallback)((function(e){if(e instanceof Object)return l(e)}),[l]);return Object(n.useEffect)((function(){s(c)}),[s,c]),r.a.createElement(E.Provider,{value:{theme:o,setThemeColor:function(e){if(e){var t=o;o instanceof Object&&(t["--background-color"]=e,t["--text-color"]=e,i(t),document.documentElement.style.setProperty("--background-color",e),document.documentElement.style.setProperty("--text-color",e))}}}},e.children)},g=a(60),O=a.n(g),j=a(61),N=a(62),C=a(75),x=a(63),P=a(16),M=a(76),w=Object(n.createContext)({audio:{},audios:null,onPlayAudio:function(){},onSetAudio:function(){}}),k=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(C.a)(this,Object(x.a)(t).call(this,e))).state={analyser:null,audio:null,audioData:"",buffer:null,context:null,dataArray:null,source:null,paused:!1,progress:0},a.analyser=null,a.audioRef=Object(n.createRef)(),a.callbackAnimation=function(){},a.refAnimation=null,a.animation=a.animation.bind(Object(P.a)(a)),a.onPlayAudio=a.onPlayAudio.bind(Object(P.a)(a)),a.onSetAudio=a.onSetAudio.bind(Object(P.a)(a)),a}return Object(M.a)(t,e),Object(N.a)(t,[{key:"animation",value:function(){"function"===typeof this.callbackAnimation?(this.refAnimation=requestAnimationFrame(this.animation),null!==this.refAnimation&&null!==this.analyser&&this.refAnimation>0&&this.analyser.getByteFrequencyData(this.state.dataArray),this.callbackAnimation(this.state.dataArray,this.state.audio)):cancelAnimationFrame(this.refAnimation)}},{key:"onLoadAudio",value:function(e){var t=this;if(!e.url)return!1;var a=new XMLHttpRequest;a.open("GET",e.url,!0),a.onprogress=function(e){var a=Math.floor(e.loaded/e.total*100);!1===isNaN(a)&&t.setState({progress:a})},a.onload=function(a){t.audioRef.current.src=e.url,t.audioRef.current.load(),t.setState({audio:new Audio(t.state.audioData.url)},(function(){var e=t.state.audio;try{e.onloadeddata=function(e){return t.onLoadAudioComplete(e)}}catch(a){console.log("Error: ",a)}}))},a.send()}},{key:"onLoadAudioComplete",value:function(e){var t=this;if(e instanceof Object===!1||!e)return!1;this.setState({context:new AudioContext},(function(){t.setState({analyser:t.state.context.createAnalyser(),source:t.state.context.createMediaElementSource(t.state.audio)},(function(){t.analyser=t.state.analyser,t.state.source.connect(t.analyser),t.analyser.connect(t.state.context.destination),t.analyser.fftSize=512,t.setState({buffer:t.analyser.frequencyBinCount},(function(){t.setState({dataArray:new Uint8Array(t.analyser.frequencyBinCount)},(function(){return t.onPlayAudio(!0)}))}))}))}))}},{key:"onPlayAudio",value:function(e){var t=this;if(!this.state.audio)return!1;if(this.state.audio instanceof Object===!1)return!1;try{if(!0===e&&!0===this.state.audio.paused)return this.state.audio.play(),this.setState({paused:!1},(function(){return t.animation(t.state.buffer)})),!0;this.state.audio.pause(),this.setState({paused:!0},(function(){return cancelAnimationFrame(t.refAnimation)}))}catch(a){console.error("Error: ",a)}return!1}},{key:"onSetAudio",value:function(e,t){var a=this;e instanceof Object&&(this.onPlayAudio(),this.setState({audioData:e},(function(){a.callbackAnimation=t,a.onLoadAudio(a.state.audioData)})))}},{key:"render",value:function(){var e=this;return r.a.createElement(m.b,Object.assign({firebase:u.a},d),r.a.createElement(m.a,{path:"audios/",orderByValue:"created_on"},(function(t){var a=t.value;return r.a.createElement(w.Provider,{value:{audio:e.state,audios:a,onPlayAudio:e.onPlayAudio,onSetAudio:e.onSetAudio}},r.a.createElement("audio",{crossOrigin:"anonymous",ref:e.audioRef}),e.props.children)})))}}]),t}(n.Component),S=a(2),A=a.n(S),R=a(3),T=(a(139),function(e){var t=e.pages,a=Object(R.c)().t;return r.a.createElement("div",{className:"header--menu"},r.a.createElement("ul",{className:"header--menu--list"},Array.isArray(t)&&t.map((function(e,t){return r.a.createElement("li",{className:"header--menu--item",key:t,style:{order:e.index}},r.a.createElement(c.c,{activeClassName:"active",className:"link",exact:"/"===e.slug,to:e.slug},a(e.name)))}))))}),F=(a(142),function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],o=t[1],i=function(e,t,a){if(e instanceof Object===!1)return!1;o(a),e.changeLanguage(t)},c=function(e){var t=e.languages,n=a/t.length*100,r=parseInt(Math.floor(100/t.length));return{left:"".concat(n,"%"),width:"".concat(r,"%")}};return r.a.createElement("div",{className:"lang-select"},r.a.createElement("span",{className:"lang-select--icon"},r.a.createElement("i",{className:"material-icons"},"language")),r.a.createElement(R.a,null,(function(e,t){var a=t.i18n;return r.a.createElement(n.Fragment,null,r.a.createElement("ul",{className:"lang-select--list"},function(e){return!(e instanceof Object===!1||!e)&&(!!Array.isArray(e.languages)&&e.languages.sort((function(e,t){return e.localeCompare(t)})).reverse().map((function(t,a){return r.a.createElement("li",{className:"lang-select--item",key:a},r.a.createElement("button",{className:"lang",onClick:function(){return i(e,t,a)}},t))})))}(a)),r.a.createElement("div",{className:"lang-select--active",style:c(a)}))})))}),B=(a(143),Object(l.f)((function(e){var t=e.active,a=e.onActive;return r.a.createElement("div",{className:"header--top"},r.a.createElement("button",{className:"header--top--btn",onClick:function(){return a(t)},"data-active":t},r.a.createElement("i",{className:"material-icons play"},"menu"),r.a.createElement("i",{className:"material-icons"},"close")),r.a.createElement(F,null))})));a(144);Headers.propTypes={any:A.a.any};var I=function(e){var t=Object(n.useContext)(f).pages,a=e.location,o=Object(n.useState)(!1),i=Object(b.a)(o,2),c=i[0],l=i[1];return Object(n.useEffect)((function(){a&&l(!1)}),[a]),r.a.createElement("header",{className:"header","data-active":c},r.a.createElement(B,{active:c,onActive:function(){l(!c)}}),r.a.createElement(T,{pages:t}))},q=(a(145),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer--info"},r.a.createElement("div",{className:"footer--networks"},r.a.createElement("ul",{className:"footer--networks--list"},[{url:"/",name:"Facebook"},{url:"/",name:"Instagram"},{url:"/",name:"Youtube"}].map((function(e,t){return r.a.createElement("li",{className:"footer--networks--item",key:t},r.a.createElement("a",{className:"link",href:e.url},e.name))})))),r.a.createElement("p",{className:"copy"},r.a.createElement("i",{className:"material-icons"},"copyright"),r.a.createElement("a",{className:"to",href:"tomail()"},r.a.createElement("span",{className:"mail"},"yeissonibarra@gmail.com")))))}),J=a(28),Y=a.n(J),V=a(29),D=a(12),_=a(43),z=(a(146),function(e){var t=Object(n.useRef)(!1),a=function(e,t){if(e instanceof Object===!1)return!1;Object(_.default)(Object(D.a)({targets:e,easing:"easeOutSine"},t))},o=function(e){return e<9?"0".concat(e+1):e+1};return Object(n.useEffect)((function(){t.current?function(){var n=i.a.findDOMNode(t.current.querySelector(".last")),r=i.a.findDOMNode(t.current.querySelector(".current"));e.last>e.current?(a(r,{translateY:[-85,0],delay:100,duration:400}),a(n,{translateY:[0,85],delay:150,duration:300})):(a(r,{translateY:[85,0],delay:100,duration:300}),a(n,{translateY:[0,-85],delay:150,duration:300}))}():t.current=!0})),r.a.createElement("div",{className:"number-text","data-type":e.type,ref:t},r.a.createElement("p",{className:"last"},o(e.last)),r.a.createElement("p",{className:"current"},o(e.current)))}),L=a(69),G=a(77),H=(a(148),function(e){var t=Object(L.useMouseMove)(1),a=Object(n.useRef)(!1),o=Object(D.a)({},e.defaultSettings,{},e.options),i=Object(n.useState)({}),c=Object(b.a)(i,2),l=c[0],s=c[1],u=o.reverse?-1:1,m=Object(n.useCallback)((function(e,a,n,r){if(t instanceof Object===!1)return!1;var i=(t.x-n)/e,c=(t.y-r)/a,l=Math.min(Math.max(i,0),1),s=Math.min(Math.max(c,0),1);return{tiltX:(u*(o.max/2-l*o.max)).toFixed(2),tiltY:(u*(s*o.max-o.max/2)).toFixed(2),percentageX:100*l,percentageY:100*s}}),[o,t,u]),d=Object(n.useCallback)((function(e,t,a,n){var r=m(e,t,a,n);s(Object(D.a)({},l,{transform:"perspective(".concat(o.perspective,"px) rotateX(").concat("x"===o.axis?0:r.tiltY,"deg) rotateY(").concat("y"===o.axis?0:r.tiltX,"deg) scale3d(").concat(o.scale,", ").concat(o.scale,", ").concat(o.scale,")")}))}),[l,s,o,m]),f=Object(n.useCallback)((function(){if(a.current instanceof Object===!1)return!1;var e=a.current.getBoundingClientRect(),t=a.current.offsetWidth,n=a.current.offsetHeight,r=e.left,o=e.top;d(t,n,r,o)}),[d,a]);return Object(G.a)((function(){f()}),[t]),r.a.createElement("div",{className:"repultion--item",ref:a,style:l},e.children)}),U=(a(149),{reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1.1",speed:"1000",transition:!0,axis:null,reset:!0}),X=function(e){var t=r.a.Children.map(e.children,(function(t,a){return r.a.createElement(H,{defaultSettings:Object(D.a)({},U,{},e.items[a]),key:a},t)}));return r.a.createElement("div",{className:"repultion"},t)},Z=(a(150),function(e){var t=e.item;return r.a.createElement("div",{className:"slider--background"},r.a.createElement(X,{items:[{max:5,perspective:3e3,scale:1},{max:7,perspective:3e3,scale:1},{max:10,perspective:3e3,scale:1},{max:13,perspective:3e3,scale:1}]},t.backgroundItems&&t.backgroundItems.map((function(e,t){var a=e.name,n=e.url;return r.a.createElement("img",{className:"image",src:"".concat("").concat(n),alt:a,key:t})}))),r.a.createElement("div",{className:"slider--background--icon"},r.a.createElement("span",{className:"scroll-icon"},r.a.createElement("span",{className:"scroll-icon__wheel-outer"},r.a.createElement("span",{className:"scroll-icon__wheel-inner"})))))}),W=(a(151),function(e){var t=function(t,a){if(!1===Number.isInteger(t))return!1;switch(t){case 3:return r.a.createElement("li",{className:"slider--controls--item",key:a});case 4:case 2:case 1:default:return r.a.createElement("li",{className:"slider--controls--item","data-current":e.current===a,key:a},r.a.createElement("button",{className:"item",onClick:function(){return e.setCurrent(a)}}))}};return r.a.createElement("ul",{className:"slider--controls","data-type":e.type},function(){var a=[];if(1===e.type||2===e.type||4===e.type)for(var n=0;n<e.length;n++)a.push(t(e.type,n));else 3===e.type&&a.push(t(e.type));return a}(e.current))}),$=function(e){var t=e.active,a=e.children,n=e.last;return r.a.createElement("li",{className:"slider--item","data-active":t,"data-last":n},a)},K=(a(152),function(e){var t=e.children,a=e.current,n=e.last;return r.a.createElement("ul",{className:"slider--container"},r.a.Children.map(t,(function(e,t){return r.a.createElement($,{active:a===t,last:n===t,key:t},e)})))}),Q=(a(153),function(e){var t=e.background,a=e.callback,o=e.current,i=e.children,c=e.items,l=e.type,s=Object(n.useState)("next"),u=Object(b.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)(null),p=Object(b.a)(f,2),v=p[0],h=p[1],E=Object(n.useRef)(null);return r.a.createElement("div",{className:"slider","data-direction":m,"data-type":l,onMouseMove:function(e){if(e instanceof Object===!1&&!1===E.hasOwnProperty("current"))return!1;var t=E.current,a=t.getBoundingClientRect();t.style.setProperty("--x",e.clientX-(a.left+Math.floor(a.width/2))),t.style.setProperty("--y",e.clientY-(a.top+Math.floor(a.height/2)))},onMouseLeave:function(e){if(e instanceof Object===!1&&!1===E.hasOwnProperty("current"))return!1;E.current.style.setProperty("--x",0),E.current.style.setProperty("--y",0)},ref:E},1===l&&!0===t&&r.a.createElement(Z,{item:c[0]}),r.a.createElement(K,{children:i,current:o,last:v}),(1===l||4===l)&&r.a.createElement(z,{current:o,last:v,type:1}),r.a.createElement(W,{current:o,type:l,setCurrent:function(e){if(!1===Number.isInteger(e))return!1;"function"===typeof a&&(d(e>o?"next":"prev"),h(o),a(e))},length:r.a.Children.count(i)}))}),ee=(a(154),function(e){var t=e.url,a=e.author;return r.a.createElement("div",{className:"gallery-item"},r.a.createElement("img",{src:t,alt:a}))}),te=(a(155),function(e){return r.a.createElement("div",{className:"gallery-min"},e.items&&r.a.createElement(Q,{current:e.current,callback:function(t){if(!1===Number.isInteger(t))return!1;e.items[t]instanceof Object&&e.setCurrent(t)},type:4},e.items.map((function(t,a){return r.a.createElement(ee,Object.assign({current:e.current,last:e.last},t,{index:a,key:a}))}))))}),ae=a(70),ne=a(32),re=(a(169),function(e){var t=e.children,a=e.height,n=e.type,o=Object(ne.a)(),i=Object(b.a)(o,1)[0];return r.a.createElement("div",{className:"text-scroll","data-type":n},r.a.createElement("div",{className:"text-scroll--info"},r.a.createElement("h1",null,"Pollyanna Ferrari"),r.a.createElement("p",null,"Rio de Janeiro Brasil")),i>768&&r.a.createElement(ae.Scrollbars,{style:{height:a}},t),i<=768&&r.a.createElement("div",null,t))}),oe=(a(170),function(e){var t=e.mobile,a=e.page.gallery,o=Object(R.c)().t,i=Object(n.useState)(0),c=Object(b.a)(i,2),l=c[0],s=c[1],u=Object(n.useState)(0),m=Object(b.a)(u,2),d=m[0],f=m[1],p=function(e){!0===Number.isInteger(e)&&(f(l),s(e))},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"prev",t=0,n=a.length-1;"prev"===e?t=l-1<0?n:l-1:"next"===e&&(t=l+1>n?0:l+1),p(t)},h=function(e){!0!==t.isMobile()&&v(e)},E=Object(V.a)({onSwipedLeft:function(){return h("next")},onSwipedRight:function(){return h("prev")},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return r.a.createElement("div",Object.assign({className:"page bio"},E),r.a.createElement(Y.a,{upHandler:function(){return h("prev")},downHandler:function(){return h("next")}},r.a.createElement("div",{className:"wrapper"},r.a.createElement(te,{current:l,last:d,onNextPrev:v,setCurrent:s,items:a,type:2}),r.a.createElement("div",{className:"bio--scroll"},r.a.createElement("span",{className:"scroll-icon"},r.a.createElement("span",{className:"scroll-icon__wheel-outer"},r.a.createElement("span",{className:"scroll-icon__wheel-inner"})))),r.a.createElement(re,{height:300,type:2},r.a.createElement("p",null,o("bioRelease"))))))}),ie=function(e){var t=Object(R.c)().t,a=e.contacts,n=e.credits,o=function(e,a,n){return r.a.createElement("span",{className:"value",key:n},r.a.createElement("i",{className:"material-icons"},e),t(a))};return r.a.createElement("div",{className:"contact--info"},r.a.createElement("div",{className:"contact--info--container"},r.a.createElement("h1",{className:"title-main"},t("contatos")),r.a.createElement("ul",{className:"contact--info--list"},a&&a.map((function(e,t){return r.a.createElement("li",{className:"contact--info--item",key:t},r.a.createElement("p",{className:"text"},r.a.createElement("span",{className:"title"},e.label),"email"===e.type&&o(e.icon,e.value),"phones"===e.type&&e.value.map((function(e,t){return o(e.icon,e,t)}))))})))),r.a.createElement("div",{className:"contact--info--container"},r.a.createElement("h1",{className:"title-main"},t("creditos")),r.a.createElement("ul",{className:"contact--info--list credits"},n&&n.map((function(e,t){return r.a.createElement("li",{className:"contact--info--item",key:t},r.a.createElement("a",{className:"text",href:e.url,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("span",{className:"title"},e.name),o("link",e.pro)))})))))},ce=a(30),le=a(33),se=a.n(le),ue=(a(173),function(e){var t=e.error,a=e.name,o=e.required,i=e.placeholder,c=e.type,l=Object(R.c)().t,s=Object(n.useState)(!0),u=Object(b.a)(s,2),m=u[0],d=u[1],f=Object(n.useRef)(null);return r.a.createElement("label",{className:"input","data-error":!m},r.a.createElement("input",{className:"input--input",name:a,onKeyUp:function(){if(!1===f.hasOwnProperty("current")&&f.current instanceof Object)return!1;var e=f.current.hasOwnProperty("value")?f.current.value:"";if(""!==e){switch(c){case"phone":if(!0===/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm.test(e))return d(!0);break;case"email":if(!0===/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e))return d(!0);break;case"text":case"":default:if(!0===/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(e))return d(!0)}return d(!1)}},ref:f,required:o,placeholder:l(i),type:"text"}),r.a.createElement("label",{className:"input--label"},r.a.createElement("span",{className:"text"},l(a)),r.a.createElement("label",{className:"input--error"},l(t))))}),me=(a(174),function(e){var t=e.name,a=e.required,n=e.placeholder,o=Object(R.c)().t;return r.a.createElement("label",{className:"text-area"},r.a.createElement("textarea",{className:"text-area--input",name:t,rows:"9",placeholder:o(n),required:a}),r.a.createElement("label",{className:"text-area--label"},o(t)))}),de=function(e){var t=e.item,a=e.index;return r.a.createElement(n.Fragment,null,function(e,t){if(e instanceof Object===!1)return!1;switch(e.type){case"textarea":return r.a.createElement(me,Object.assign({},e,{key:t}));case"email":case"text":default:return r.a.createElement(ue,Object.assign({},e,{key:t}))}}(t,a))},fe=(a(175),function(e){var t=Object(R.c)().t,a=e.form,o=Object(n.useRef)(null);return Object(n.useEffect)((function(){se.a instanceof Object&&se.a.init("user_3XRze6mVdBi6uFqANdpRs")})),r.a.createElement("form",{className:"form",onSubmit:function(e){if(e.preventDefault(),o.current instanceof Object){var t=new FormData(o.current);!function(e){if(e instanceof Object===!1)return!1;se.a.send("gmail","email_contact",e).then((function(e){return console.log("SUCCESS!",e.status,e.text)}),(function(e){return console.log("FAILED...",e)}))}(Array.from(t.entries()).reduce((function(e,t){return Object(D.a)({},e,Object(ce.a)({},t[0],t[1]))}),{}))}},autoComplete:"off",ref:o},Array.isArray(a)&&a.map((function(e,t){return r.a.createElement(de,{item:e,index:t,key:t})})),r.a.createElement("button",{className:"btn btn-more"},t("send")))}),pe=(a(176),function(e){var t=e.page,a=t.form,n=t.contacts,o=t.credits,i=Object(R.c)().t;return r.a.createElement("div",{className:"contact"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(ie,{contacts:n,credits:o}),r.a.createElement("div",{className:"contact--form"},r.a.createElement("h1",{className:"title-main"},i("message")),r.a.createElement(fe,{form:a}))))}),be=(a(177),function(){return r.a.createElement("div",{className:"page bio"},r.a.createElement("h1",null,"Events"))}),ve=(a(178),function(e){var t=Object(R.c)().t;return r.a.createElement("div",{className:"webdoor--item--content"},r.a.createElement("p",{className:"title"},t(e.name)),r.a.createElement("p",{className:"description"},t(e.description)),r.a.createElement(c.c,{className:"btn-more r",to:e.linkUrl},t(e.linkText)))}),he=(a(179),function(e){var t=e.items,a=e.current,o=e.setCurrent;return r.a.createElement("section",{className:"webdoor"},t&&r.a.createElement(n.Fragment,null,r.a.createElement(Q,{current:a,callback:function(e){if(!1===Number.isInteger(e))return!1;t[e]instanceof Object&&o(e)},items:t,type:1,background:!0},t.map((function(e,t){return r.a.createElement(ve,Object.assign({},e,{key:t}))})))))}),Ee=(a(180),function(e){var t=e.mobile,a=e.page.webdoor,o=Object(n.useState)(0),i=Object(b.a)(o,2),c=i[0],l=i[1],s=function(e){!0===Number.isInteger(e)&&l(e)},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"prev",t=0,n=a.length-1;"prev"===e?t=c-1<0?n:c-1:"next"===e&&(t=c+1>n?0:c+1),s(t)},m=function(e){!0!==t.isMobile()&&u(e)},d=Object(V.a)({onSwipedLeft:function(){return u("next")},onSwipedRight:function(){return u("prev")},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return r.a.createElement("div",Object.assign({className:"page home"},d),r.a.createElement(Y.a,{upHandler:function(){return m("prev")},downHandler:function(){return m("next")}},r.a.createElement(he,{current:c,items:a,onNextPrev:u,setCurrent:l})))}),ye=a(71),ge=a.n(ye),Oe=(a(181),function(e){var t=e.paused,a=e.onPlay;return r.a.createElement("div",{className:"mini-player--controls"},r.a.createElement("button",{className:"btn btn-play",onClick:function(){return a(t)},"data-paused":!t},r.a.createElement("i",{className:"material-icons"},"play_arrow"),r.a.createElement("i",{className:"material-icons"},"pause")),r.a.createElement("button",{className:"btn",onClick:function(){return e.onNextPrev("prev")}},r.a.createElement("i",{className:"material-icons"},"skip_previous")),r.a.createElement("button",{className:"btn",onClick:function(){return e.onNextPrev("next")}},r.a.createElement("i",{className:"material-icons"},"skip_next")))}),je=(a(182),function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),o=e.color,i=e.height,c=e.item,l=e.onSetAudio,s=e.width,u=function(e){return e<10?"0".concat(e):e},m=Object(n.useCallback)((function(e,t,n){var r=function(e){var t=Math.floor(e/60),a=(e%60).toFixed(0);return"".concat(u(t),":").concat(u(a))};!function(){var e=100*t/n,l=e/100*(s-20);e>=0?(a.current.beginPath(),a.current.clearRect(0,0,s,i),a.current.fillStyle=o,a.current.fillRect(0,Math.floor(i/2)+2,s,1),a.current.fillRect(0,Math.floor(i/2),l,5),function(e){a.current.font="14px Inria Serif";var t=e;a.current.fillText(t,0,20)}(c.name),function(e,t){a.current.font="10px Roboto Mono";var n=r(e>=0?e:0);a.current.fillText(n,70,i),a.current.font="800 10px Roboto Mono";var o=r(t>=0?t:0);a.current.fillText(o,s-(a.current.measureText(o).width+20),i)}(t,n)):function(){a.current.font="14px Inria Serif";a.current.fillText("loading...",0,20)}()}()}),[o,i,c,s]),d=Object(n.useCallback)((function(e,t){e&&e.length&&t instanceof Object&&m(e,t.currentTime,t.duration)}),[m]);return Object(n.useEffect)((function(){a.current=t.current.getContext("2d"),a.current.fillStyle="transparent",m([]),l(c,d)}),[d,l,c,m]),r.a.createElement("div",{className:"mini-player-timer"},r.a.createElement("div",{className:"progress"},r.a.createElement("canvas",{height:e.height,width:e.width,ref:t})))}),Ne=(a(183),function(){var e=Object(n.useContext)(w),t=Object(n.useContext)(E),a=Object(ne.a)(),o=Object(b.a)(a,1)[0],i=e.audios,c=e.audio,l=e.onSetAudio,s=e.onPlayAudio,u=e.audio.paused,m=Object(n.useState)({}),d=Object(b.a)(m,2),f=d[0],p=d[1],v=Object(n.useState)(0),h=Object(b.a)(v,2),y=h[0],g=h[1],O=Object(n.useCallback)((function(e){e instanceof Object&&p(e)}),[p]),j=Object(n.useCallback)((function(e){if(!0===Number.isInteger(e)){var t=i[e];t instanceof Object&&O(t),g(e)}}),[i,O]);return Object(n.useEffect)((function(){i&&j(0),o<768&&s(!1)}),[i,j,s,o]),r.a.createElement(ge.a,{in:!0,appear:!0,duration:1e3,onEntering:{translateX:[100,0],opacity:[0,1]},onExiting:{translateX:-100,opacity:0},easing:"cubicBezier(0.075, 0.82, 0.165, 1)",delay:300},f instanceof Object&&o>=768&&r.a.createElement("div",{className:"mini-player"},r.a.createElement(Oe,{audio:c,onNextPrev:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"prev",t=0,a=i.length-1;"prev"===e?t=y-1<0?a:y-1:"next"===e&&(t=y+1>a?0:y+1),j(t)},onPlay:s,paused:u}),r.a.createElement(je,{color:t instanceof Object&&t.theme?t.theme["--text-color"]:"#222",height:60,item:f,paused:u,width:310,onSetAudio:l})))}),Ce=(a(184),function(e){var t=O()(),a=Object(n.useContext)(v).page;return r.a.createElement(c.b,{basename:"/"},r.a.createElement("div",{className:"content"},r.a.createElement(I,{location:e.location}),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,render:function(){return r.a.createElement(Ee,Object.assign({},e,{page:a,mobile:t}))}}),r.a.createElement(l.a,{path:"/bio",render:function(){return r.a.createElement(oe,Object.assign({},e,{page:a,mobile:t}))}}),r.a.createElement(l.a,{path:"/events",render:function(){return r.a.createElement(be,Object.assign({},e,{page:a,mobile:t}))}}),r.a.createElement(l.a,{path:"/contact",render:function(){return r.a.createElement(pe,Object.assign({},e,{page:a,mobile:t}))}})),r.a.createElement(q,null)),r.a.createElement(k,null,r.a.createElement(Ne,null)))}),xe=(a(185),function(e){var t=Object(n.useState)(!1),a=Object(b.a)(t,2),o=a[0],i=a[1];return Object(n.useEffect)((function(){return window.addEventListener("load",(function(){return i(!0)}),!1),function(){window.removeEventListener("load",(function(){}))}}),[]),r.a.createElement("div",{className:"loader","data-complete":o},e.children)}),Pe=function(){var e=function(e,t,a){var n,r,o,i=function(e){return Math.floor(Math.max(Math.min(256*e,255),0))},c=function(e,t,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?e+6*(t-e)*a:a<.5?t:a<2/3?e+(t-e)*(2/3-a)*6:e},l=a<.5?a*(1+t):a+t-a*t,s=2*a-l;return n=c(s,l,e+1/3),r=c(s,l,e),o=c(s,l,e-1/3),[i(n),i(r),i(o)]}(Math.random(),1,.01*(Math.floor(16*Math.random())+75)),t=Object(b.a)(e,3);return function(e,t,a){return"#".concat(e.toString(16)).concat(t.toString(16)).concat(a.toString(16))}(t[0],t[1],t[2])},Me=Object(n.createContext)({color:"",setNewColor:function(){}}),we=function(e){var t=Object(n.useState)(Pe()),a=Object(b.a)(t,2),o=a[0],i=a[1];return r.a.createElement(Me.Provider,{value:{color:o,setNewColor:function(){return i(Pe()),o}}},e.children)},ke=(a(186),function(e){var t=Object(n.useRef)(),a=Object(n.useContext)(E);return Object(n.useEffect)((function(){var e;(e=a.theme)instanceof Object&&Object.entries(e).forEach((function(e){var a=Object(b.a)(e,2),n=a[0],r=a[1];t.current.style.setProperty(n,r)}))})),r.a.createElement("div",{className:"theme",ref:t},r.a.createElement(we,null,e.children))}),Se=(a(59),Object(l.f)((function(e){var t=e.location;return r.a.createElement(n.Suspense,{fallback:"loading..."},r.a.createElement(p,null,r.a.createElement(f.Consumer,null,(function(e){return r.a.createElement(h,Object.assign({location:t},e),r.a.createElement(y,e,r.a.createElement(ke,null,r.a.createElement(xe,null),r.a.createElement(Ce,{location:t}))))}))))}))),Ae=a(47),Re=a(72),Te=a(73),Fe=a(74);Ae.a.use(R.b).init({resources:{pt:{translation:Fe},fr:{translation:Te},en:{translation:Re}},lng:"pt",fallbackLng:["pt","fr","en"],interpolation:{escapeValue:!1}});Ae.a,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(c.a,{basename:""},r.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},59:function(e,t,a){},72:function(e){e.exports=JSON.parse('{"home":"Home","bio":"Biox","events":"Eventx","contact":"Contaxu","Fotografo":"photographer","interview":"Interview","seeMore":"View more","webdoorOne":"Brazilian Singer from Rio de Janeiro, graduated in Music Therapy at the Brazilian Conservatory of Music, where she also studied lyrical singing and guitar. However, it was in samba, bossa nova, Brazilian music that she found herself artistically.","webdoorTwo":"Porto Canal, NY Times, \u201cCanal Futura\u201d, \u201cPrograma Estrelas\u201d (Rede Globo), Documentary Pollyanna Ferrari - canto dos cantos, Radio Multi Rio.","bioRelease":"At the Brazilian Conservatory of Music she graduated in Music Therapy, where she also studied singing and guitar. She studied at \u201cEscola Port\xe1til de M\xfasica\u201d at UniRio.\\n\\nVocalist of the \u201cFala Brasil\u201d Group of samba and choro for 10 years. Carnival block singer of \u201cMusicalidade\u201d. She composed an original soundtrack for documentaries and plays.\\n\\nInterviews for \u201cPorto Canal\u201d, NY Times, \u201cCanal Futura\u201d, \u201cPrograma Estrelas\u201d (Rede Globo), Documentary Pollyanna Ferrari - canto dos cantos, Radio Multi Rio.\\n\\nShe has performed for 15 years in Rio de Janeiro, as well as shows in France in 2015, 2016, 2017, 2019 and 2020 and in Portugal where she lives since 2017.\\n\\nIn the field of Music Therapy, she specialized in Mental Health from Federal University of Rio de Janeiro, where she also made a Master in Social Psychology.\\n\\nProfessor of the discipline Music Therapy and Culture of the Post Graduation in Music Therapy at the Brazilian Conservatory of Music (2014-2017).\\n\\nTechnical Advisor at the culture and work department for projects in the public mental health system in the City Hall of Rio de Janeiro  (2014-2017).\\n\\nConsultant at the \u201cEcomuseu Nega Vilma\u201d in Santa Marta, favela in Rio de Janeiro (2009-2017).\\n\\nAt the Music Therapy Association of the State of Rio de Janeiro, she was President, Vice President, 2nd Secretary and member of the Advisory Board.\\n\\nCoordinator of the Coletivo Carnavalesco T\xe1 Pirando, Pirado, Pirou!, a Carnival block formed by users, families and professionals from the public mental health system in Rio de Janeiro (2010-2015).\\n\\n Founding Member of the \u201cColetivo Porto L\xfadico\u201d where she developed community music therapy with children and young people at the \u201cInstituto Profissional o Ter\xe7o\u201d, in Porto (2017-2018).","name":"Name","nameError":"Invalid name","yourName":"Your name","email":"E-mail","emailError":"Invalid email","yourEmail":"Your email","phone":"Phone","phoneError":"Invalid phone","yourPhone":"Your phone","message":"Message","yourMessage":"Your message","successMessage":"Thank you for your message. We will contact you soon.","send":"Send"}')},73:function(e){e.exports=JSON.parse('{"home":"Accueil","bio":"Bio","events":"Eventx","contact":"Contact","Fotografo":"photographerx","interview":"Elle a \xe9t\xe9 interview\xe9e","webdoorOne":"Pollyanna est une chanteuse br\xe9silienne de Rio de Janeiro. Elle est dipl\xf4m\xe9e en musicoth\xe9rapie au Conservatoire Br\xe9silien de Musique, o\xf9 elle a \xe9galement \xe9tudi\xe9 le chant classique et la guitare. Cependant, c\'est dans la samba, la bossa nova et dans la musique br\xe9silienne qu\u2019elle s\u2019est r\xe9v\xe9l\xe9e artistiquement.","seeMore":"Voir plus","webdoorTwo":"Elle a \xe9t\xe9 interview\xe9e pour le \u201cPorto Canal\u201d, le New York Times, \u201cCanal Futura\u201d, \u201cPrograma Estrelas\u201d (Rede Globo), le documentaire Pollyanna Ferrari - Canto dos Cantos, Radio Multi Rio.","bioRelease":"Au Conservatoire Br\xe9silien de Musique, elle est dipl\xf4m\xe9e en musicoth\xe9rapie, o\xf9 elle a \xe9galement \xe9tudi\xe9 le chant et la guitare. Elle a \xe9tudi\xe9 \xe0 \u201cEscola Port\xe1til de M\xfasica\u201d \xe0 UniRio.\\n\\nElle a \xe9t\xe9 chanteuse du groupe \u201cFala Brasil\u201d de Samba et Choro pendant 10 ans puis Chanteuse du groupe de Carnival \u201cMusicalidade\u201d.\\n\\nElle a compos\xe9e la bande sonore originale pour des films documentaires et pour le th\xe9\xe3tre.\\n\\nElle a \xe9t\xe9 interview\xe9e pour le \u201cPorto Canal\u201d, le New York Times, \u201cCanal Futura\u201d, \u201cPrograma Estrelas\u201d (Rede Globo), le documentaire Pollyanna Ferrari - Canto dos Cantos, Radio Multi Rio.\\n\\nPollyanna a jou\xe9 pendant 15 ans \xe0 Rio de Janeiro, et elle s\xb4est produite en France en 2015, 2016, 2017, 2019 et 2020 et au Portugal o\xf9 elle vit depuis 2017.\\n\\nDans le domaine de la musicoth\xe9rapie, elle s\'est sp\xe9cialis\xe9e en sant\xe9 mentale \xe0 l\'Universit\xe9 F\xe9d\xe9rale de Rio de Janeiro, o\xf9 elle a \xe9galement fait une ma\xeetrise en Psychologie Sociale.\\n\\nElle est Professeure de la discipline Musicoth\xe9rapie et culture de la post-graduation en musicoth\xe9rapie du Conservatoire Br\xe9silien de Musique (2014-2017).\\n\\nElle a \xe9galement \xe9t\xe9 Conseill\xe8re technique pour des projets au d\xe9partement \xb4\xb4culture et travail\xb4\xb4 \xe1 la Mairie de Rio de Janeiro (2014-2017).\\n\\nConseill\xe8re de l\'\xc9comus\xe9e \u201cNega Vilma\u201d, dans la favela Santa Marta (2009-2017).\\n\\n\xc0 l\u2019Association de Musicoth\xe9rapie de l\u2019\xc9tat de Rio de Janeiro, elle \xe9tait pr\xe9sident, vice-pr\xe9sidente, deuxi\xe8me secr\xe9taire et membre du conseil consultatif.\\n\\nCoordinatrice du \u201cColetivo Carnavalesco T\xe1 Pirando, Pirado, Pirou!\u201d, Groupe de musique du Carnaval de la sant\xe9 mentale publique (2010-2015).\\n\\nMembre fondateur du collectif \u201cPorto Ludico\u201d, o\xf9 elle a d\xe9velopp\xe9 la musicoth\xe9rapie communautaire avec les enfants et les jeunes de l\'Institut professionnel \u201cdo Ter\xe7o\u201d de Porto (2017-2018).","name":"Nom","nameError":"Nom incorrect","yourName":"Votre nom","email":"E-mail","emailError":"E-mail incorrect","yourEmail":"Votre email","phone":"T\xe9l\xe9phone","phoneError":"T\xe9l\xe9phone incorrect","yourPhone":"Votre t\xe9l\xe9phone","message":"Message","yourMessage":"Votre message","successMessage":"Merci pour votre message. Nous vous contacterons bient\xf4t.","send":"Envoyer"}')},74:function(e){e.exports=JSON.parse('{"home":"Home","bio":"Bio","events":"Eventos","contact":"Contact","Fotografo":"Fotografo","interview":"Entrevistas","seeMore":"Ver mais","webdoorOne":"Cantora carioca formada em Musicoterapia pelo Conservat\xf3rio Brasileiro de M\xfasica, onde estudou tamb\xe9m canto l\xedrico e viol\xe3o. Por\xe9m, foi no samba, na bossa nova, na m\xfasica brasileira que se encontrou e faz dela sua express\xe3o art\xedstica.","webdoorTwo":"Entrevistas para Porto Canal, NY Times, Canal Futura, Programa Estrelas (Rede Globo), Pel\xedcula Documental Pollyanna Ferrari - Cantos dos Cantos (TV Pinel), Radio Multi Rio, O Gaiense.","credits":"Credits","bioRelease":"No Conservat\xf3rio Brasileiro de M\xfasica fez gradua\xe7\xe3o em Musicoterapia, onde cursou tamb\xe9m canto e viol\xe3o. Estudou na Escola Port\xe1til de M\xfasica da UniRio.\\n\\nVocalista do Grupo Fala Brasil de samba e choro durante 10 anos. Cantora do  bloco de carnaval Musicalidade. Comp\xf4s trilha sonora para document\xe1rios e pe\xe7as teatrais.\\n\\nEntrevistas para Porto Canal, NY Times, Canal Futura, Programa Estrelas (Rede Globo), Document\xe1rio Pollyanna Ferrari - Canto dos Cantos (TV Pinel), Radio Multi Rio.\\n\\nTem se apresentado h\xe1 15 anos no Rio de Janeiro, al\xe9m de shows na Fran\xe7a em 2015, 2016, 2017, 2019, 2020 e em Portugal onde vive desde 2017.\\n\\nNo \xe2mbito da Musicoterapia, especializou-se em Sa\xfade Mental pela Universidade Federal do Rio de Janeiro, onde tamb\xe9m fez Mestrado em Psicologia Social.\\n\\nProfessora da disciplina Musicoterapia e Cultura da P\xf3s Gradua\xe7\xe3o em Musicoterapia no Conservat\xf3rio Brasileiro de M\xfasica (2014-2017).\\n\\nAssessora T\xe9cnica dos projetos de cultura e trabalho da Rede de Sa\xfade Mental na Prefeitura do Rio de Janeiro (2014-2017).\\n\\nConsultora do Ecomuseu Nega Vilma \xad Comunidade Santa Marta (2009-2017).\\n\\nNa Associa\xe7\xe3o de Musicoterapia do Estado do Rio de Janeiro foi Presidente, Vice Presidente, 2\xaa Secret\xe1ria e membro do Conselho Consultivo.\\n\\nCoordenadora do Coletivo Carnavalesco T\xe1 Pirando, Pirado, Pirou!, bloco de carnaval da rede p\xfablica de sa\xfade mental (2010-2015).\\n\\nMembro Fundadora do Coletivo Porto L\xfadico onde desenvolveu musicoterapia comunit\xe1ria com crian\xe7as e jovens do Instituto Profissional o Ter\xe7o, no Porto (2017-2018).","name":"Nome","nameError":"Nome invalido","yourName":"Seu nome","email":"E-mail","emailError":"Email invalido","yourEmail":"Seu e-mail","phone":"Telefone","phoneError":"N\xfamero de telefone invalido","yourPhone":"Seu telefone","message":"Mensagem","yourMessage":"Sua mensagem","successMessage":"Agradecemos sua mensagem. Entraremos em contato em breve.","send":"Enviar"}')},79:function(e,t,a){e.exports=a(187)}},[[79,1,2]]]);
//# sourceMappingURL=main.825681c7.chunk.js.map