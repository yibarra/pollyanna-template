(this["webpackJsonppollyanna-template"]=this["webpackJsonppollyanna-template"]||[]).push([[0],{137:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),i=a.n(o),c=a(12),l=a(8),s=a(1),u=(a(49),a(26)),m=a.n(u),d=a(16),f={apiKey:"AIzaSyC9q1TXBElkRkxna3UBh_cR8j6YT9PDhuo",authDomain:"pollyanna-template.firebaseapp.com",databaseURL:"https://pollyanna-template.firebaseio.com",projectId:"pollyanna-template",storageBucket:"pollyanna-template.appspot.com",messagingSenderId:"522096783918",appId:"1:522096783918:web:5f4f8403f8a73bad0625bf"},p=Object(n.createContext)({pages:{},loading:!1}),b=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),o=a[0],i=a[1];return r.a.createElement(d.b,Object.assign({firebase:m.a},f),r.a.createElement(d.a,{path:"pages/",orderByValue:"created_on"},(function(t){var a=t.value;return r.a.createElement(p.Provider,{value:{pages:a,loading:o,setLoading:i}},e.children)})))},v=Object(n.createContext)({page:{},pages:{},setPage:function(){}}),h=function(e){var t=e.children,a=e.location,o=e.pages,i=Object(n.useState)({}),c=Object(s.a)(i,2),l=c[0],u=c[1],m=Object(n.useCallback)((function(e){if(o instanceof Object){var t=o.filter((function(t){return e===t.slug}))[0];u(t)}}),[o,u]),d=Object(n.useCallback)((function(e){if(e instanceof Object){var t=e.pathname;return m(t)}return m("/")}),[m]);return Object(n.useEffect)((function(){d(a)}),[d,a]),r.a.createElement(v.Provider,{value:{page:l,pages:o,setPage:u}},t)},g=Object(n.createContext)({location:"",theme:null}),E=function(e){var t=Object(n.useState)(null),a=Object(s.a)(t,2),o=a[0],i=a[1],c=Object(n.useContext)(v).page,l=Object(n.useCallback)((function(){c instanceof Object&&i(c.theme)}),[c,i]),u=Object(n.useCallback)((function(e){if(e instanceof Object)return l(e)}),[l]);return Object(n.useEffect)((function(){u(c)}),[u,c]),r.a.createElement(g.Provider,{value:{theme:o,setThemeColor:function(e){if(e){var t=o;o instanceof Object&&(t["--background-color"]=e,t["--text-color"]=e,i(t),document.documentElement.style.setProperty("--background-color",e),document.documentElement.style.setProperty("--text-color",e))}}}},e.children)},y=a(60),O=a.n(y),j=a(61),N=a(62),C=a(74),P=a(63),M=a(15),w=a(75),k=Object(n.createContext)({audio:{},audios:null,onPlayAudio:function(){},onSetAudio:function(){}}),x=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(C.a)(this,Object(P.a)(t).call(this,e))).state={analyser:null,audio:null,audioData:"",buffer:null,context:null,dataArray:null,source:null,paused:!1,progress:0},a.analyser=null,a.audioRef=Object(n.createRef)(),a.callbackAnimation=function(){},a.refAnimation=null,a.animation=a.animation.bind(Object(M.a)(a)),a.onPlayAudio=a.onPlayAudio.bind(Object(M.a)(a)),a.onSetAudio=a.onSetAudio.bind(Object(M.a)(a)),a}return Object(w.a)(t,e),Object(N.a)(t,[{key:"animation",value:function(){"function"===typeof this.callbackAnimation?(this.refAnimation=requestAnimationFrame(this.animation),null!==this.refAnimation&&null!==this.analyser&&this.refAnimation>0&&this.analyser.getByteFrequencyData(this.state.dataArray),this.callbackAnimation(this.state.dataArray,this.state.audio)):cancelAnimationFrame(this.refAnimation)}},{key:"onLoadAudio",value:function(e){var t=this;if(!e.url)return!1;var a=new XMLHttpRequest;a.open("GET",e.url,!0),a.onprogress=function(e){var a=Math.floor(e.loaded/e.total*100);!1===isNaN(a)&&t.setState({progress:a})},a.onload=function(a){t.audioRef.current.src=e.url,t.audioRef.current.load(),t.setState({audio:new Audio(t.state.audioData.url)},(function(){var e=t.state.audio;try{e.onloadeddata=function(e){return t.onLoadAudioComplete(e)}}catch(a){console.log("Error: ",a)}}))},a.send()}},{key:"onLoadAudioComplete",value:function(e){var t=this;if(e instanceof Object===!1||!e)return!1;this.setState({context:new AudioContext},(function(){t.setState({analyser:t.state.context.createAnalyser(),source:t.state.context.createMediaElementSource(t.state.audio)},(function(){t.analyser=t.state.analyser,t.state.source.connect(t.analyser),t.analyser.connect(t.state.context.destination),t.analyser.fftSize=512,t.setState({buffer:t.analyser.frequencyBinCount},(function(){t.setState({dataArray:new Uint8Array(t.analyser.frequencyBinCount)},(function(){return t.onPlayAudio(!0)}))}))}))}))}},{key:"onPlayAudio",value:function(e){var t=this;if(!this.state.audio)return!1;if(this.state.audio instanceof Object===!1)return!1;try{if(!0===e&&!0===this.state.audio.paused)return this.state.audio.play(),this.setState({paused:!1},(function(){return t.animation(t.state.buffer)})),!0;this.state.audio.pause(),this.setState({paused:!0},(function(){return cancelAnimationFrame(t.refAnimation)}))}catch(a){console.error("Error: ",a)}return!1}},{key:"onSetAudio",value:function(e,t){var a=this;e instanceof Object&&(this.onPlayAudio(),e.volume=.2,this.setState({audioData:e},(function(){a.callbackAnimation=t,a.onLoadAudio(a.state.audioData)})))}},{key:"render",value:function(){var e=this;return r.a.createElement(d.b,Object.assign({firebase:m.a},f),r.a.createElement(d.a,{path:"audios/",orderByValue:"created_on"},(function(t){var a=t.value;return r.a.createElement(k.Provider,{value:{audio:e.state,audios:a,onPlayAudio:e.onPlayAudio,onSetAudio:e.onSetAudio}},r.a.createElement("audio",{crossOrigin:"anonymous",ref:e.audioRef}),e.props.children)})))}}]),t}(n.Component),S=a(2),A=a.n(S),R=a(3),T=(a(137),function(e){var t=e.pages,a=Object(R.c)().t;return r.a.createElement("div",{className:"header--menu"},r.a.createElement("ul",{className:"header--menu--list"},Array.isArray(t)&&t.map((function(e,t){return r.a.createElement("li",{className:"header--menu--item",key:t,style:{order:e.index}},r.a.createElement(c.b,{activeClassName:"active",className:"link",exact:"/"===e.slug,to:e.slug},a(e.name)))}))))}),F=(a(140),function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],o=t[1],i=function(e,t,a){if(e instanceof Object===!1)return!1;o(a),e.changeLanguage(t)},c=function(e){var t=e.languages,n=a/t.length*100,r=parseInt(Math.floor(100/t.length));return{left:"".concat(n,"%"),width:"".concat(r,"%")}};return r.a.createElement("div",{className:"lang-select"},r.a.createElement("span",{className:"lang-select--icon"},r.a.createElement("i",{className:"material-icons"},"language")),r.a.createElement(R.a,null,(function(e,t){var a=t.i18n;return r.a.createElement(n.Fragment,null,r.a.createElement("ul",{className:"lang-select--list"},function(e){return!(e instanceof Object===!1||!e)&&(!!Array.isArray(e.languages)&&e.languages.sort((function(e,t){return e.localeCompare(t)})).reverse().map((function(t,a){return r.a.createElement("li",{className:"lang-select--item",key:a},r.a.createElement("button",{className:"lang",onClick:function(){return i(e,t,a)}},t))})))}(a)),r.a.createElement("div",{className:"lang-select--active",style:c(a)}))})))}),B=(a(141),Object(l.d)((function(e){var t=e.active,a=e.onActive;return r.a.createElement("div",{className:"header--top"},r.a.createElement("button",{className:"header--top--btn",onClick:function(){return a(t)},"data-active":t},r.a.createElement("i",{className:"material-icons play"},"menu"),r.a.createElement("i",{className:"material-icons"},"close")),r.a.createElement(F,null))})));a(142);Headers.propTypes={any:A.a.any};var I=function(e){var t=Object(n.useContext)(p).pages,a=e.location,o=Object(n.useState)(!1),i=Object(s.a)(o,2),c=i[0],l=i[1];return Object(n.useEffect)((function(){a&&l(!1)}),[a]),r.a.createElement("header",{className:"header","data-active":c},r.a.createElement(B,{active:c,onActive:function(){l(!c)}}),r.a.createElement(T,{pages:t}))},q=(a(143),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer--info"},r.a.createElement("div",{className:"footer--networks"},r.a.createElement("ul",{className:"footer--networks--list"},[{url:"/",name:"Facebook"},{url:"/",name:"Instagram"},{url:"/",name:"Youtube"}].map((function(e,t){return r.a.createElement("li",{className:"footer--networks--item",key:t},r.a.createElement("a",{className:"link",href:e.url},e.name))})))),r.a.createElement("p",{className:"copy"},r.a.createElement("i",{className:"material-icons"},"copyright"),r.a.createElement("a",{className:"to",href:"tomail()"},r.a.createElement("span",{className:"mail"},"yeissonibarra@gmail.com")))))}),D=a(27),J=a.n(D),L=a(28),V=a(29),Y=a(43),z=(a(144),function(e){var t=e.last,a=e.current,o=e.type,c=Object(n.useRef)(!1),l=Object(n.useCallback)((function(e,t){if(e instanceof Object===!1)return!1;Object(Y.default)(Object(V.a)({targets:e,easing:"easeOutSine"},t))}),[]),s=Object(n.useCallback)((function(){var e=i.a.findDOMNode(c.current.querySelector(".last")),n=i.a.findDOMNode(c.current.querySelector(".current"));t>a?(l(n,{translateY:[-85,0],delay:100,duration:400,opacity:[0,1]}),l(e,{translateY:[0,85],delay:150,duration:300,opacity:[1,0]})):(l(n,{translateY:[85,0],delay:100,duration:300,opacity:[0,1]}),l(e,{translateY:[0,-85],delay:150,duration:300,opacity:[1,0]}))}),[l,t,a]),u=function(e){return isNaN(e)?"00":e<9?"0".concat(e+1):e+1};return Object(n.useEffect)((function(){c.current?s():c.current=!0}),[a,s]),r.a.createElement("div",{className:"number-text","data-type":o,ref:c},r.a.createElement("p",{className:"last"},u(t)),r.a.createElement("p",{className:"current"},u(a)))}),G=(a(145),function(e){var t=e.item,a=Object(R.c)().t;return r.a.createElement("div",{className:"slider--background"},r.a.createElement("div",{className:"slider--background--image"},t.backgroundItems&&t.backgroundItems.map((function(e,t){var a=e.name,n=e.url;return r.a.createElement("img",{className:"image",src:"".concat("").concat(n),alt:a,key:t})}))),r.a.createElement("div",{className:"slider--background--icon"},r.a.createElement("span",{className:"text"},a("scroll down"))))}),U=(a(146),function(e){var t=function(t,a){if(!1===Number.isInteger(t))return!1;switch(t){case 3:return r.a.createElement("li",{className:"slider--controls--item",key:a});case 4:case 2:case 1:default:return r.a.createElement("li",{className:"slider--controls--item","data-current":e.current===a,key:a},r.a.createElement("button",{className:"item",onClick:function(){return e.setCurrent(a)}}))}};return r.a.createElement("ul",{className:"slider--controls","data-type":e.type},function(){var a=[];if(1===e.type||2===e.type||4===e.type)for(var n=0;n<e.length;n++)a.push(t(e.type,n));else 3===e.type&&a.push(t(e.type));return a}(e.current))}),H=function(e){var t=e.active,a=e.children,n=e.last;return r.a.createElement("li",{className:"slider--item","data-active":t,"data-last":n},a)},_=(a(147),function(e){var t=e.children,a=e.current,n=e.last;return r.a.createElement("ul",{className:"slider--container"},r.a.Children.map(t,(function(e,t){return r.a.createElement(H,{active:a===t,last:n===t,key:t},e)})))}),W=(a(148),function(e){var t=e.background,a=e.callback,o=e.current,i=e.last,c=e.children,l=e.items,u=e.type,m=Object(n.useState)("next"),d=Object(s.a)(m,2),f=d[0],p=d[1],b=Object(n.useRef)(null);return r.a.createElement("div",{className:"slider","data-direction":f,"data-type":u,onMouseMove:function(e){if(e instanceof Object===!1&&!1===b.hasOwnProperty("current"))return!1;var t=b.current,a=t.getBoundingClientRect();t.style.setProperty("--x",e.clientX-(a.left+Math.floor(a.width/2))),t.style.setProperty("--y",e.clientY-(a.top+Math.floor(a.height/2)))},onMouseLeave:function(e){if(e instanceof Object===!1&&!1===b.hasOwnProperty("current"))return!1;b.current.style.setProperty("--x",0),b.current.style.setProperty("--y",0)},ref:b},1===u&&!0===t&&r.a.createElement(G,{item:l[0]}),r.a.createElement(_,{children:c,current:o,last:i}),(1===u||4===u)&&r.a.createElement(z,{current:o,last:i,type:1}),r.a.createElement(U,{current:o,type:u,setCurrent:function(e){if(isNaN(e))return!1;"function"===typeof a&&(p(e>o?"next":"prev"),a(e))},length:r.a.Children.count(c)}))}),X=(a(149),function(e){var t=e.url,a=e.author;return r.a.createElement("div",{className:"gallery-item"},r.a.createElement("img",{src:t,alt:a}))}),Z=(a(150),function(e){var t=e.current,a=e.handlerMobile,n=e.items,o=e.last,i=e.setCurrent,c=Object(L.a)({onSwipedLeft:function(){return a("next")},onSwipedRight:function(){return a("prev")},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return r.a.createElement("div",Object.assign({className:"gallery-min"},c),r.a.createElement(J.a,{upHandler:function(){return a("prev")},downHandler:function(){return a("next")}},n&&r.a.createElement(W,{current:t,callback:function(e){if(!1===Number.isInteger(e))return!1;n[e]instanceof Object&&i(e)},type:4},n.map((function(e,a){return r.a.createElement(X,Object.assign({current:t,last:o},e,{index:a,key:a}))})))))}),$=a(69),K=a(32),Q=(a(164),function(e){var t=e.children,a=e.height,n=e.type,o=Object(K.a)(),i=Object(s.a)(o,1)[0];return r.a.createElement("div",{className:"text-scroll","data-type":n},r.a.createElement("div",{className:"text-scroll--info"},r.a.createElement("h1",null,"Pollyanna Ferrari"),r.a.createElement("p",null,"Rio de Janeiro Brasil")),i>768&&r.a.createElement($.Scrollbars,{style:{height:a}},t),i<=768&&r.a.createElement("div",null,t))}),ee=(a(165),function(e){var t=e.loading,a=e.mobile,o=e.page.gallery,i=Object(R.c)().t,c=Object(n.useState)(0),l=Object(s.a)(c,2),u=l[0],m=l[1],d=Object(n.useState)(0),f=Object(s.a)(d,2),p=f[0],b=f[1],v=function(e){!0===Number.isInteger(e)&&(b(u),m(e))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"prev",t=0,a=o.length-1;"prev"===e?t=u-1<0?a:u-1:"next"===e&&(t=u+1>a?0:u+1),v(t)};return r.a.createElement("div",{className:"page bio","data-active":t},r.a.createElement("div",{className:"wrapper"},r.a.createElement(Z,{current:u,last:p,handlerMobile:function(e){!0!==a.isMobile()&&h(e)},onNextPrev:h,setCurrent:m,items:o,type:2}),r.a.createElement(Q,{height:310,type:2},r.a.createElement("p",null,i("bioRelease")))))}),te=function(e){var t=e.contacts,a=e.credits,n=Object(R.c)().t,o=function(e,t,a){return r.a.createElement("span",{className:"value",key:a},r.a.createElement("i",{className:"material-icons"},e),n(t))};return r.a.createElement("div",{className:"contact--info"},r.a.createElement("div",{className:"contact--info--container"},r.a.createElement("h1",{className:"title-main"},n("contatos")),r.a.createElement("ul",{className:"contact--info--list"},t&&t.map((function(e,t){return r.a.createElement("li",{className:"contact--info--item",key:t},r.a.createElement("p",{className:"text"},r.a.createElement("span",{className:"title"},e.label),"email"===e.type&&o(e.icon,e.value),"phones"===e.type&&e.value.map((function(e,t){return o(e.icon,e,t)}))))})))),r.a.createElement("div",{className:"contact--info--container"},r.a.createElement("h1",{className:"title-main"},n("creditos")),r.a.createElement("ul",{className:"contact--info--list credits"},a&&a.map((function(e,t){return r.a.createElement("li",{className:"contact--info--item",key:t},r.a.createElement("a",{className:"text",href:e.url,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("span",{className:"title"},e.name),o("link",e.pro)))})))))},ae=a(30),ne=a(33),re=a.n(ne),oe=(a(168),function(e){var t=e.error,a=e.name,o=e.required,i=e.placeholder,c=e.type,l=Object(R.c)().t,u=Object(n.useState)(!0),m=Object(s.a)(u,2),d=m[0],f=m[1],p=Object(n.useRef)(null);return r.a.createElement("label",{className:"input","data-error":!d},r.a.createElement("input",{className:"input--input",name:a,onKeyUp:function(){if(!1===p.hasOwnProperty("current")&&p.current instanceof Object)return!1;var e=p.current.hasOwnProperty("value")?p.current.value:"";if(""!==e){switch(c){case"phone":if(!0===/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm.test(e))return f(!0);break;case"email":if(!0===/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e))return f(!0);break;case"text":case"":default:if(!0===/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(e))return f(!0)}return f(!1)}},ref:p,required:o,placeholder:l(i),type:"text"}),r.a.createElement("label",{className:"input--label"},r.a.createElement("span",{className:"text"},l(a)),r.a.createElement("label",{className:"input--error"},l(t))))}),ie=(a(169),function(e){var t=e.name,a=e.required,n=e.placeholder,o=Object(R.c)().t;return r.a.createElement("label",{className:"text-area"},r.a.createElement("textarea",{className:"text-area--input",name:t,rows:"9",placeholder:o(n),required:a}),r.a.createElement("label",{className:"text-area--label"},o(t)))}),ce=function(e){var t=e.item,a=e.index;return r.a.createElement(n.Fragment,null,function(e,t){if(e instanceof Object===!1)return!1;switch(e.type){case"textarea":return r.a.createElement(ie,Object.assign({},e,{key:t}));case"email":case"text":default:return r.a.createElement(oe,Object.assign({},e,{key:t}))}}(t,a))},le=(a(170),function(e){var t=e.form,a=Object(R.c)().t,o=Object(n.useState)({send:!1,success:null}),i=Object(s.a)(o,2),c=i[0],l=i[1],u=Object(n.useRef)(null);return Object(n.useEffect)((function(){re.a instanceof Object&&re.a.init("user_C6xKjya40PvLv8ZRnNXrh")})),r.a.createElement("form",{autoComplete:"off",className:"form","data-send":c.send,onSubmit:function(e){if(e.preventDefault(),u.current instanceof Object){var t=new FormData(u.current);!function(e){if(e instanceof Object===!1)return!1;re.a.send("gmail","email_contact",e).then((function(e){return l({success:!0,send:!0})}),(function(e){return l({success:!1,send:!0})}))}(Array.from(t.entries()).reduce((function(e,t){return Object(V.a)({},e,Object(ae.a)({},t[0],t[1]))}),{}))}},ref:u},Array.isArray(t)&&r.a.createElement("div",{className:"form--inputs"},r.a.createElement("h1",{className:"title-main"},a("message")),t.map((function(e,t){return r.a.createElement(ce,{item:e,index:t,key:t})})),r.a.createElement("button",{className:"btn btn-more"},a("send"))),r.a.createElement("h1",{className:"title-main","data-error":!c.success},!0===c.success?a("successMessage"):a("errorMessage")))}),se=(a(171),function(e){var t=e.page,a=t.form,n=t.contacts,o=t.credits,i=e.loading;return r.a.createElement("div",{className:"contact","data-active":i},r.a.createElement("div",{className:"wrapper"},r.a.createElement(te,{contacts:n,credits:o}),r.a.createElement("div",{className:"contact--form"},r.a.createElement(le,{form:a}))))}),ue=(a(172),function(e){var t=e.description,a=e.linkUrl,n=e.linkText,o=e.name,i=Object(R.c)().t;return r.a.createElement("div",{className:"webdoor--item--content"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"title"},i(o)),r.a.createElement("p",{className:"description"},i(t)),r.a.createElement(c.b,{className:"btn-more r",to:a},i(n))))}),me=(a(173),function(e){var t=e.items,a=e.current,o=e.last,i=e.setCurrent;return r.a.createElement("section",{className:"webdoor"},t&&r.a.createElement(n.Fragment,null,r.a.createElement(W,{current:a,last:o,callback:function(e){if(isNaN(e))return!1;t[e]instanceof Object&&i(e)},items:t,type:1,background:!0},t.map((function(e,t){return r.a.createElement(ue,Object.assign({},e,{key:t}))})))))}),de=(a(174),function(e){var t=e.mobile,a=e.page.webdoor,o=e.loading,i=Object(n.useState)(0),c=Object(s.a)(i,2),l=c[0],u=c[1],m=Object(n.useState)(null),d=Object(s.a)(m,2),f=d[0],p=d[1],b=function(e){!0===Number.isInteger(e)&&(p(l),u(e))},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"prev",t=0,n=a.length-1;"prev"===e?t=l-1<0?n:l-1:"next"===e&&(t=l+1>n?0:l+1),b(t)},h=function(e){!0!==t.isMobile()&&v(e)},g=Object(L.a)({onSwipedLeft:function(){return setTimeout((function(){return v("next")}),300)},onSwipedRight:function(){return setTimeout((function(){return v("prev")}),300)},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return r.a.createElement("div",Object.assign({className:"page home"},g,{"data-active":o}),r.a.createElement(J.a,{upHandler:function(){return h("prev")},downHandler:function(){return h("next")}},r.a.createElement(me,{current:l,items:a,last:f,onNextPrev:v,setCurrent:b})))}),fe=a(70),pe=a.n(fe),be=(a(175),function(e){var t=e.paused,a=e.onPlay;return r.a.createElement("div",{className:"mini-player--controls"},r.a.createElement("button",{className:"btn btn-play",onClick:function(){return a(t)},"data-paused":!t},r.a.createElement("i",{className:"material-icons"},"play_arrow"),r.a.createElement("i",{className:"material-icons"},"pause")),r.a.createElement("button",{className:"btn",onClick:function(){return e.onNextPrev("prev")}},r.a.createElement("i",{className:"material-icons"},"skip_previous")),r.a.createElement("button",{className:"btn",onClick:function(){return e.onNextPrev("next")}},r.a.createElement("i",{className:"material-icons"},"skip_next")))}),ve=(a(176),function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),o=e.color,i=e.height,c=e.item,l=e.onSetAudio,s=e.width,u=function(e){return e<10?"0".concat(e):e},m=Object(n.useCallback)((function(e,t,n){var r=function(e){var t=Math.floor(e/60),a=(e%60).toFixed(0);return"".concat(u(t),":").concat(u(a))};!function(){var e=100*t/n,l=e/100*(s-20);e>=0?(a.current.beginPath(),a.current.clearRect(0,0,s,i),a.current.fillStyle=o,a.current.fillRect(0,Math.floor(i/2)+2,s,1),a.current.fillRect(0,Math.floor(i/2),l,5),function(e){a.current.font="14px Inria Serif";var t=e;a.current.fillText(t,0,20)}(c.name),function(e,t){a.current.font="10px Roboto Mono";var n=r(e>=0?e:0);a.current.fillText(n,70,i),a.current.font="800 10px Roboto Mono";var o=r(t>=0?t:0);a.current.fillText(o,s-(a.current.measureText(o).width+20),i)}(t,n)):function(){a.current.font="14px Inria Serif";a.current.fillText("loading...",0,20)}()}()}),[o,i,c,s]),d=Object(n.useCallback)((function(e,t){e&&e.length&&t instanceof Object&&m(e,t.currentTime,t.duration)}),[m]);return Object(n.useEffect)((function(){a.current=t.current.getContext("2d"),a.current.fillStyle="transparent",m([]),l(c,d)}),[d,l,c,m]),r.a.createElement("div",{className:"mini-player-timer"},r.a.createElement("div",{className:"progress"},r.a.createElement("canvas",{height:e.height,width:e.width,ref:t})))}),he=(a(177),function(){var e=Object(n.useContext)(k),t=Object(n.useContext)(g),a=Object(K.a)(),o=Object(s.a)(a,1)[0],i=e.audios,c=e.audio,l=e.onSetAudio,u=e.onPlayAudio,m=e.audio.paused,d=Object(n.useState)({}),f=Object(s.a)(d,2),p=f[0],b=f[1],v=Object(n.useState)(0),h=Object(s.a)(v,2),E=h[0],y=h[1],O=Object(n.useCallback)((function(e){e instanceof Object&&b(e)}),[b]),j=Object(n.useCallback)((function(e){if(!0===Number.isInteger(e)){var t=i[e];t instanceof Object&&O(t),y(e)}}),[i,O]),N=Object(n.useCallback)((function(){c.onended=function(e){console.log(e)}}),[c]);return Object(n.useEffect)((function(){i&&(j(0),N()),o<768&&u(!1)}),[i,N,j,u,o]),r.a.createElement(pe.a,{in:!0,appear:!0,duration:1e3,onEntering:{translateX:[100,0],opacity:[0,1]},onExiting:{translateX:-100,opacity:0},easing:"cubicBezier(0.075, 0.82, 0.165, 1)",delay:300},p instanceof Object&&o>=768&&r.a.createElement("div",{className:"mini-player"},r.a.createElement(be,{audio:c,onNextPrev:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"prev",t=0,a=i.length-1;"prev"===e?t=E-1<0?a:E-1:"next"===e&&(t=E+1>a?0:E+1),j(t)},onPlay:u,paused:m}),r.a.createElement(ve,{color:t instanceof Object&&t.theme?t.theme["--text-color"]:"#222",height:60,item:p,paused:m,width:310,onSetAudio:l})))}),ge=(a(178),function(e){var t=O()(),a=Object(n.useContext)(v),o=a.page,i=a.pages;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"content","data-loading":e.loading},r.a.createElement(I,{location:e.location}),i&&i.map((function(a,n){return r.a.createElement("section",{className:"page-current","data-active":o===a,key:n},function(a){if(a instanceof Object===!1)return!1;switch(a.type){case"bio":return r.a.createElement(ee,Object.assign({},e,{loading:e.loading,page:a,mobile:t}));case"contact":return r.a.createElement(se,Object.assign({},e,{loading:e.loading,page:a,mobile:t}));case"home":default:return r.a.createElement(de,Object.assign({},e,{loading:e.loading,page:a,mobile:t}))}}(a))})),r.a.createElement(q,null)),r.a.createElement(x,null,r.a.createElement(he,null)))}),Ee=(a(179),function(e){var t=e.loading,a=e.setLoading,o=Object(n.useRef)(null),i=Object(n.useCallback)((function(e,t,n){var r=t-e,i=e,c=t>e?1:-1,l=Math.abs(Math.floor(n/r)),s=setInterval((function(){if(o.current instanceof Object){var e=o.current.querySelector(".loading--bar");i+=c,e instanceof Object&&(e.style.width="".concat(i,"%")),i===t&&(clearInterval(s),a(!0))}}),l)}),[a]);return Object(n.useEffect)((function(){if(!1===t){!function(){var e=window.performance.timing,t=-(e.loadEventEnd-e.navigationStart),a=100*parseInt(t/700%50);i(0,100,a)}()}}),[t,i]),r.a.createElement("div",{className:"loading","data-complete":t,ref:o},r.a.createElement("div",{className:"loading--loader"},r.a.createElement("img",{src:"/images/logo.png",alt:"logo"})),r.a.createElement("div",{className:"loading--bar"}))}),ye=function(){var e=function(e,t,a){var n,r,o,i=function(e){return Math.floor(Math.max(Math.min(256*e,255),0))},c=function(e,t,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?e+6*(t-e)*a:a<.5?t:a<2/3?e+(t-e)*(2/3-a)*6:e},l=a<.5?a*(1+t):a+t-a*t,s=2*a-l;return n=c(s,l,e+1/3),r=c(s,l,e),o=c(s,l,e-1/3),[i(n),i(r),i(o)]}(Math.random(),1,.01*(Math.floor(16*Math.random())+75)),t=Object(s.a)(e,3);return function(e,t,a){return"#".concat(e.toString(16)).concat(t.toString(16)).concat(a.toString(16))}(t[0],t[1],t[2])},Oe=Object(n.createContext)({color:"",setNewColor:function(){}}),je=function(e){var t=Object(n.useState)(ye()),a=Object(s.a)(t,2),o=a[0],i=a[1];return r.a.createElement(Oe.Provider,{value:{color:o,setNewColor:function(){return i(ye()),o}}},e.children)},Ne=(a(180),function(e){var t=Object(n.useRef)(),a=Object(n.useContext)(g);return Object(n.useEffect)((function(){var e;(e=a.theme)instanceof Object&&Object.entries(e).forEach((function(e){var a=Object(s.a)(e,2),n=a[0],r=a[1];t.current.style.setProperty(n,r)}))})),r.a.createElement("div",{className:"theme",ref:t},r.a.createElement(je,null,e.children))}),Ce=(a(59),Object(l.d)((function(e){var t=e.location;return r.a.createElement(b,null,r.a.createElement(p.Consumer,null,(function(e){return r.a.createElement(h,Object.assign({location:t},e),r.a.createElement(E,e,r.a.createElement(Ne,null,r.a.createElement(Ee,{loading:e.loading,setLoading:e.setLoading}),r.a.createElement(ge,{loading:e.loading,location:t}))))})))}))),Pe=a(47),Me=a(71),we=a(72),ke=a(73);Pe.a.use(R.b).init({resources:{pt:{translation:ke},fr:{translation:we},en:{translation:Me}},lng:"pt",fallbackLng:["pt","fr","en"],interpolation:{escapeValue:!1}});Pe.a,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(c.a,{basename:""},r.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},59:function(e,t,a){},71:function(e){e.exports=JSON.parse('{"home":"Home","bio":"Bio","events":"Events","contact":"Contact","Fotografo":"photographer","interview":"Interview","seeMore":"View more","webdoorOne":"Brazilian Singer from Rio de Janeiro, graduated in Music Therapy at the Brazilian Conservatory of Music, where she also studied lyrical singing and guitar. However, it was in samba, bossa nova, Brazilian music that she found herself artistically.","webdoorTwo":"Porto Canal, NY Times, \u201cCanal Futura\u201d, \u201cPrograma Estrelas\u201d (Rede Globo), Documentary Pollyanna Ferrari - canto dos cantos, Radio Multi Rio.","bioRelease":"At the Brazilian Conservatory of Music she graduated in Music Therapy, where she also studied singing and guitar. She studied at \u201cEscola Port\xe1til de M\xfasica\u201d at UniRio.\\n\\nVocalist of the \u201cFala Brasil\u201d Group of samba and choro for 10 years. Carnival block singer of \u201cMusicalidade\u201d. She composed an original soundtrack for documentaries and plays.\\n\\nInterviews for \u201cPorto Canal\u201d, NY Times, \u201cCanal Futura\u201d, \u201cPrograma Estrelas\u201d (Rede Globo), Documentary Pollyanna Ferrari - canto dos cantos, Radio Multi Rio.\\n\\nShe has performed for 15 years in Rio de Janeiro, as well as shows in France in 2015, 2016, 2017, 2019 and 2020 and in Portugal where she lives since 2017.\\n\\nIn the field of Music Therapy, she specialized in Mental Health from Federal University of Rio de Janeiro, where she also made a Master in Social Psychology.\\n\\nProfessor of the discipline Music Therapy and Culture of the Post Graduation in Music Therapy at the Brazilian Conservatory of Music (2014-2017).\\n\\nTechnical Advisor at the culture and work department for projects in the public mental health system in the City Hall of Rio de Janeiro  (2014-2017).\\n\\nConsultant at the \u201cEcomuseu Nega Vilma\u201d in Santa Marta, favela in Rio de Janeiro (2009-2017).\\n\\nAt the Music Therapy Association of the State of Rio de Janeiro, she was President, Vice President, 2nd Secretary and member of the Advisory Board.\\n\\nCoordinator of the Coletivo Carnavalesco T\xe1 Pirando, Pirado, Pirou!, a Carnival block formed by users, families and professionals from the public mental health system in Rio de Janeiro (2010-2015).\\n\\n Founding Member of the \u201cColetivo Porto L\xfadico\u201d where she developed community music therapy with children and young people at the \u201cInstituto Profissional o Ter\xe7o\u201d, in Porto (2017-2018).","name":"Name","nameError":"Invalid name","yourName":"Your name","email":"E-mail","emailError":"Invalid email","yourEmail":"Your email","phone":"Phone","phones":"Phones","phoneError":"Invalid phone","yourPhone":"Your phone","message":"Message","yourMessage":"Your message","successMessage":"Thank you for your message. We will contact you soon.","errorMessage":"An error occurred,\\nplease try later","send":"Send","designer":"Designer","photographer":"Photographer","recordings":"Recordings","web developer":"Web Developer"}')},72:function(e){e.exports=JSON.parse('{"home":"Accueil","bio":"Bio","events":"Eventx","contact":"Contact","Fotografo":"photographerx","interview":"Elle a \xe9t\xe9 interview\xe9e","webdoorOne":"Pollyanna est une chanteuse br\xe9silienne de Rio de Janeiro. Elle est dipl\xf4m\xe9e en musicoth\xe9rapie au Conservatoire Br\xe9silien de Musique, o\xf9 elle a \xe9galement \xe9tudi\xe9 le chant classique et la guitare. Cependant, c\'est dans la samba, la bossa nova et dans la musique br\xe9silienne qu\u2019elle s\u2019est r\xe9v\xe9l\xe9e artistiquement.","seeMore":"Voir plus","webdoorTwo":"Elle a \xe9t\xe9 interview\xe9e pour le \u201cPorto Canal\u201d, le New York Times, \u201cCanal Futura\u201d, \u201cPrograma Estrelas\u201d (Rede Globo), le documentaire Pollyanna Ferrari - Canto dos Cantos, Radio Multi Rio.","bioRelease":"Au Conservatoire Br\xe9silien de Musique, elle est dipl\xf4m\xe9e en musicoth\xe9rapie, o\xf9 elle a \xe9galement \xe9tudi\xe9 le chant et la guitare. Elle a \xe9tudi\xe9 \xe0 \u201cEscola Port\xe1til de M\xfasica\u201d \xe0 UniRio.\\n\\nElle a \xe9t\xe9 chanteuse du groupe \u201cFala Brasil\u201d de Samba et Choro pendant 10 ans puis Chanteuse du groupe de Carnival \u201cMusicalidade\u201d.\\n\\nElle a compos\xe9e la bande sonore originale pour des films documentaires et pour le th\xe9\xe3tre.\\n\\nElle a \xe9t\xe9 interview\xe9e pour le \u201cPorto Canal\u201d, le New York Times, \u201cCanal Futura\u201d, \u201cPrograma Estrelas\u201d (Rede Globo), le documentaire Pollyanna Ferrari - Canto dos Cantos, Radio Multi Rio.\\n\\nPollyanna a jou\xe9 pendant 15 ans \xe0 Rio de Janeiro, et elle s\xb4est produite en France en 2015, 2016, 2017, 2019 et 2020 et au Portugal o\xf9 elle vit depuis 2017.\\n\\nDans le domaine de la musicoth\xe9rapie, elle s\'est sp\xe9cialis\xe9e en sant\xe9 mentale \xe0 l\'Universit\xe9 F\xe9d\xe9rale de Rio de Janeiro, o\xf9 elle a \xe9galement fait une ma\xeetrise en Psychologie Sociale.\\n\\nElle est Professeure de la discipline Musicoth\xe9rapie et culture de la post-graduation en musicoth\xe9rapie du Conservatoire Br\xe9silien de Musique (2014-2017).\\n\\nElle a \xe9galement \xe9t\xe9 Conseill\xe8re technique pour des projets au d\xe9partement \xb4\xb4culture et travail\xb4\xb4 \xe1 la Mairie de Rio de Janeiro (2014-2017).\\n\\nConseill\xe8re de l\'\xc9comus\xe9e \u201cNega Vilma\u201d, dans la favela Santa Marta (2009-2017).\\n\\n\xc0 l\u2019Association de Musicoth\xe9rapie de l\u2019\xc9tat de Rio de Janeiro, elle \xe9tait pr\xe9sident, vice-pr\xe9sidente, deuxi\xe8me secr\xe9taire et membre du conseil consultatif.\\n\\nCoordinatrice du \u201cColetivo Carnavalesco T\xe1 Pirando, Pirado, Pirou!\u201d, Groupe de musique du Carnaval de la sant\xe9 mentale publique (2010-2015).\\n\\nMembre fondateur du collectif \u201cPorto Ludico\u201d, o\xf9 elle a d\xe9velopp\xe9 la musicoth\xe9rapie communautaire avec les enfants et les jeunes de l\'Institut professionnel \u201cdo Ter\xe7o\u201d de Porto (2017-2018).","name":"Nom","nameError":"Nom incorrect","yourName":"Votre nom","email":"E-mail","emailError":"E-mail incorrect","yourEmail":"Votre email","phone":"T\xe9l\xe9phone","phones":"T\xe9l\xe9phones","phoneError":"T\xe9l\xe9phone incorrect","yourPhone":"Votre t\xe9l\xe9phone","message":"Message","yourMessage":"Votre message","successMessage":"Merci pour votre message. Nous vous contacterons bient\xf4t.","errorMessage":"Une erreur s\'est produite,\\nveuillez r\xe9essayer plus tard","send":"Envoyer","designer":"Designer","photographer":"Photographe","recordings":"Enregistrements","web developer":"D\xe9veloppeur Web"}')},73:function(e){e.exports=JSON.parse('{"home":"Home","bio":"Bio","events":"Eventos","contact":"Contact","Fotografo":"Fotografo","interview":"Entrevistas","seeMore":"Ver mais","webdoorOne":"Cantora carioca formada em Musicoterapia pelo Conservat\xf3rio Brasileiro de M\xfasica, onde estudou tamb\xe9m canto l\xedrico e viol\xe3o. Por\xe9m, foi no samba, na bossa nova, na m\xfasica brasileira que se encontrou e faz dela sua express\xe3o art\xedstica.","webdoorTwo":"Entrevistas para Porto Canal, NY Times, Canal Futura, Programa Estrelas (Rede Globo), Pel\xedcula Documental Pollyanna Ferrari - Cantos dos Cantos (TV Pinel), Radio Multi Rio, O Gaiense.","credits":"Credits","bioRelease":"No Conservat\xf3rio Brasileiro de M\xfasica fez gradua\xe7\xe3o em Musicoterapia, onde cursou tamb\xe9m canto e viol\xe3o. Estudou na Escola Port\xe1til de M\xfasica da UniRio.\\n\\nVocalista do Grupo Fala Brasil de samba e choro durante 10 anos. Cantora do  bloco de carnaval Musicalidade. Comp\xf4s trilha sonora para document\xe1rios e pe\xe7as teatrais.\\n\\nEntrevistas para Porto Canal, NY Times, Canal Futura, Programa Estrelas (Rede Globo), Document\xe1rio Pollyanna Ferrari - Canto dos Cantos (TV Pinel), Radio Multi Rio.\\n\\nTem se apresentado h\xe1 15 anos no Rio de Janeiro, al\xe9m de shows na Fran\xe7a em 2015, 2016, 2017, 2019, 2020 e em Portugal onde vive desde 2017.\\n\\nNo \xe2mbito da Musicoterapia, especializou-se em Sa\xfade Mental pela Universidade Federal do Rio de Janeiro, onde tamb\xe9m fez Mestrado em Psicologia Social.\\n\\nProfessora da disciplina Musicoterapia e Cultura da P\xf3s Gradua\xe7\xe3o em Musicoterapia no Conservat\xf3rio Brasileiro de M\xfasica (2014-2017).\\n\\nAssessora T\xe9cnica dos projetos de cultura e trabalho da Rede de Sa\xfade Mental na Prefeitura do Rio de Janeiro (2014-2017).\\n\\nConsultora do Ecomuseu Nega Vilma \xad Comunidade Santa Marta (2009-2017).\\n\\nNa Associa\xe7\xe3o de Musicoterapia do Estado do Rio de Janeiro foi Presidente, Vice Presidente, 2\xaa Secret\xe1ria e membro do Conselho Consultivo.\\n\\nCoordenadora do Coletivo Carnavalesco T\xe1 Pirando, Pirado, Pirou!, bloco de carnaval da rede p\xfablica de sa\xfade mental (2010-2015).\\n\\nMembro Fundadora do Coletivo Porto L\xfadico onde desenvolveu musicoterapia comunit\xe1ria com crian\xe7as e jovens do Instituto Profissional o Ter\xe7o, no Porto (2017-2018).","name":"Nome","nameError":"Nome invalido","yourName":"Seu nome","email":"E-mail","emailError":"Email invalido","yourEmail":"Seu e-mail","phone":"Telefone","phones":"Telefones","phoneError":"N\xfamero de telefone invalido","yourPhone":"Seu telefone","message":"Mensagem","yourMessage":"Sua mensagem","successMessage":"Agradecemos sua mensagem. Entraremos em contato em breve.","errorMessage":"Ocorreu um error,\\npor favor tentei mais tarde","send":"Enviar","designer":"Designer","photographer":"Fot\xf3grafo","recordings":"Grava\xe7\xf5es","web developer":"Desenvolvedor Web"}')},77:function(e,t,a){e.exports=a(181)}},[[77,1,2]]]);
//# sourceMappingURL=main.7e3ed259.chunk.js.map