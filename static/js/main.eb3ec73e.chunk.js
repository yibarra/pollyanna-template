(this["webpackJsonppollyanna-template"]=this["webpackJsonppollyanna-template"]||[]).push([[0],{138:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),l=a(12),i=a(8),s=(a(46),a(27)),u=a.n(s),m=a(17),d={apiKey:"AIzaSyC9q1TXBElkRkxna3UBh_cR8j6YT9PDhuo",authDomain:"pollyanna-template.firebaseapp.com",databaseURL:"https://pollyanna-template.firebaseio.com",projectId:"pollyanna-template",storageBucket:"pollyanna-template.appspot.com",messagingSenderId:"522096783918",appId:"1:522096783918:web:5f4f8403f8a73bad0625bf"},f=Object(n.createContext)({pages:{}}),p=function(e){return r.a.createElement(m.b,Object.assign({firebase:u.a},d),r.a.createElement(m.a,{path:"pages/",orderByValue:"created_on"},(function(t){var a=t.value;return r.a.createElement(f.Provider,{value:{pages:a}},e.children)})))},b=a(1),E=Object(n.createContext)({page:{},setPage:function(){}}),v=function(e){var t=e.location,a=e.pages,o=Object(n.useState)({}),c=Object(b.a)(o,2),l=c[0],i=c[1],s=Object(n.useCallback)((function(e){if(Array.isArray(a)){var t=!0,n=!1,r=void 0;try{for(var o,c=a[Symbol.iterator]();!(t=(o=c.next()).done);t=!0){var l=o.value;""===e||"/"===e?i(l):l.slug==="/".concat(e)&&i(l)}}catch(s){n=!0,r=s}finally{try{t||null==c.return||c.return()}finally{if(n)throw r}}}}),[a,i]),u=Object(n.useCallback)((function(e){if(e instanceof Object){var t=e.pathname.substring(1).split("/")[0];return s(t)}return s("/")}),[s]);return Object(n.useEffect)((function(){u(t)}),[u,t]),r.a.createElement(E.Provider,{value:{page:l,setPage:i}},e.children)},g=Object(n.createContext)({location:"",theme:null}),h=function(e){var t=Object(n.useState)(null),a=Object(b.a)(t,2),o=a[0],c=a[1],l=Object(n.useContext)(E).page,i=Object(n.useCallback)((function(){l instanceof Object&&c(l.theme)}),[l,c]),s=Object(n.useCallback)((function(e){if(e instanceof Object)return i(e)}),[i]);return Object(n.useEffect)((function(){s(l)}),[s,l]),r.a.createElement(g.Provider,{value:{theme:o,setThemeColor:function(e){if(e){var t=o;o instanceof Object&&(t["--background-color"]=e,t["--text-color"]=e,c(t),document.documentElement.style.setProperty("--background-color",e),document.documentElement.style.setProperty("--text-color",e))}}}},e.children)},y=a(57),j=a(58),O=a(74),N=a(59),x=a(16),C=a(75),w=Object(n.createContext)({audio:{},audios:null,onPlayAudio:function(){},onSetAudio:function(){}}),k=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(O.a)(this,Object(N.a)(t).call(this,e))).state={analyser:null,audio:null,audioData:"",buffer:null,context:null,dataArray:null,source:null,paused:!1,progress:0},a.analyser=null,a.audioRef=Object(n.createRef)(),a.callbackAnimation=function(){},a.refAnimation=null,a.animation=a.animation.bind(Object(x.a)(a)),a.onPlayAudio=a.onPlayAudio.bind(Object(x.a)(a)),a.onSetAudio=a.onSetAudio.bind(Object(x.a)(a)),a}return Object(C.a)(t,e),Object(j.a)(t,[{key:"animation",value:function(){"function"===typeof this.callbackAnimation?(this.refAnimation=requestAnimationFrame(this.animation),null!==this.refAnimation&&null!==this.analyser&&this.refAnimation>0&&this.analyser.getByteFrequencyData(this.state.dataArray),this.callbackAnimation(this.state.dataArray,this.state.audio)):cancelAnimationFrame(this.refAnimation)}},{key:"onLoadAudio",value:function(e){var t=this;if(!e.url)return!1;var a=new XMLHttpRequest;a.open("GET",e.url,!0),a.onprogress=function(e){var a=Math.floor(e.loaded/e.total*100);!1===isNaN(a)&&t.setState({progress:a})},a.onload=function(a){t.audioRef.current.src=e.url,t.audioRef.current.load(),t.setState({audio:new Audio(t.state.audioData.url)},(function(){var e=t.state.audio;try{e.onloadeddata=function(e){return t.onLoadAudioComplete(e)}}catch(a){console.log("Error: ",a)}}))},a.send()}},{key:"onLoadAudioComplete",value:function(e){var t=this;if(e instanceof Object===!1||!e)return!1;this.setState({context:new AudioContext},(function(){t.setState({analyser:t.state.context.createAnalyser(),source:t.state.context.createMediaElementSource(t.state.audio)},(function(){t.analyser=t.state.analyser,t.state.source.connect(t.analyser),t.analyser.connect(t.state.context.destination),t.analyser.fftSize=512,t.setState({buffer:t.analyser.frequencyBinCount},(function(){t.setState({dataArray:new Uint8Array(t.analyser.frequencyBinCount)},(function(){return t.onPlayAudio(!0)}))}))}))}))}},{key:"onPlayAudio",value:function(e){var t=this;if(!this.state.audio)return!1;if(this.state.audio instanceof Object===!1)return!1;try{if(!0===e&&!0===this.state.audio.paused)return this.state.audio.play(),this.setState({paused:!1},(function(){return t.animation(t.state.buffer)})),!0;this.state.audio.pause(),this.setState({paused:!0},(function(){return cancelAnimationFrame(t.refAnimation)}))}catch(a){console.error("Error: ",a)}return!1}},{key:"onSetAudio",value:function(e,t){var a=this;e instanceof Object&&(this.onPlayAudio(),this.setState({audioData:e},(function(){a.callbackAnimation=t,a.onLoadAudio(a.state.audioData)})))}},{key:"render",value:function(){var e=this;return r.a.createElement(m.b,Object.assign({firebase:u.a},d),r.a.createElement(m.a,{path:"audios/",orderByValue:"created_on"},(function(t){var a=t.value;return r.a.createElement(w.Provider,{value:{audio:e.state,audios:a,onPlayAudio:e.onPlayAudio,onSetAudio:e.onSetAudio}},r.a.createElement("audio",{crossOrigin:"anonymous",ref:e.audioRef}),e.props.children)})))}}]),t}(n.Component),S=a(2),P=a.n(S),A=a(4),M=(a(138),function(e){var t=Object(A.c)().t,a=e.pages;return r.a.createElement("div",{className:"header--menu"},r.a.createElement("ul",{className:"header--menu--list"},Array.isArray(a)&&a.map((function(e,a){return r.a.createElement("li",{className:"header--menu--item",key:a,style:{order:e.index}},r.a.createElement(l.b,{activeClassName:"active",className:"link",exact:"/"===e.slug,to:e.slug},t(e.name)))}))))}),R=(a(141),function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],o=t[1],c=function(e,t,a){if(e instanceof Object===!1)return!1;o(a),e.changeLanguage(t)},l=function(e){var t=e.languages,n=a/t.length*100,r=parseInt(Math.floor(100/t.length));return{left:"".concat(n,"%"),width:"".concat(r,"%")}};return r.a.createElement("div",{className:"lang-select"},r.a.createElement("span",{className:"lang-select--icon"},r.a.createElement("i",{className:"material-icons"},"language")),r.a.createElement(A.a,null,(function(e,t){var a=t.i18n;return r.a.createElement(n.Fragment,null,r.a.createElement("ul",{className:"lang-select--list"},function(e){return!(e instanceof Object===!1||!e)&&(!!Array.isArray(e.languages)&&e.languages.sort((function(e,t){return e.localeCompare(t)})).reverse().map((function(t,a){return r.a.createElement("li",{className:"lang-select--item",key:a},r.a.createElement("button",{className:"lang",onClick:function(){return c(e,t,a)}},t))})))}(a)),r.a.createElement("div",{className:"lang-select--active",style:l(a)}))})))}),F=(a(142),Object(i.f)((function(e){var t=e.active,a=e.onActive;return r.a.createElement("div",{className:"header--top"},r.a.createElement("button",{className:"header--top--btn",onClick:function(){return a(t)},"data-active":t},r.a.createElement("i",{className:"material-icons play"},"menu"),r.a.createElement("i",{className:"material-icons"},"close")),r.a.createElement(R,null))})));a(143);Headers.propTypes={any:P.a.any};var T=function(e){var t=Object(n.useContext)(f).pages,a=e.location,o=Object(n.useState)(!1),c=Object(b.a)(o,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){a&&i(!1)}),[a]),r.a.createElement("header",{className:"header","data-active":l},r.a.createElement(F,{active:l,onActive:function(){i(!l)}}),r.a.createElement(M,{pages:t}))},B=(a(144),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer--info"},r.a.createElement("div",{className:"footer--networks"},r.a.createElement("ul",{className:"footer--networks--list"},[{url:"/",name:"Facebook"},{url:"/",name:"Instagram"},{url:"/",name:"Youtube"}].map((function(e,t){return r.a.createElement("li",{className:"footer--networks--item",key:t},r.a.createElement("a",{className:"link",href:e.url},e.name))})))),r.a.createElement("p",{className:"copy"},r.a.createElement("i",{className:"material-icons"},"copyright"),r.a.createElement("a",{className:"to",href:"tomail()"},r.a.createElement("span",{className:"mail"},"yeissonibarra@gmail.com")))))}),I=a(65),q=(a(158),function(e){var t=e.height,a=e.type,n=e.width;return r.a.createElement("div",{className:"text-scroll","data-type":a},r.a.createElement("div",{className:"text-scroll--info"},r.a.createElement("h1",null,"Pollyanna Ferrari"),r.a.createElement("p",null,"Rio de Janeiro Brasil")),r.a.createElement(I.Scrollbars,{style:{width:n,height:t}},e.children))}),Y=(a(159),a(11)),D=a(40),V=(a(160),function(e){var t=Object(n.useRef)(!1),a=function(e,t){if(e instanceof Object===!1)return!1;Object(D.default)(Object(Y.a)({targets:e,easing:"easeOutSine"},t))},o=function(e){return e<10?"0".concat(e+1):e};return Object(n.useEffect)((function(){t.current?function(){var n=c.a.findDOMNode(t.current.querySelector(".last")),r=c.a.findDOMNode(t.current.querySelector(".current"));e.last>e.current?(a(r,{translateY:[-85,0],delay:100,duration:400}),a(n,{translateY:[0,85],delay:150,duration:300})):(a(r,{translateY:[85,0],delay:100,duration:300}),a(n,{translateY:[0,-85],delay:150,duration:300}))}():t.current=!0})),r.a.createElement("div",{className:"number-text","data-type":e.type,ref:t},r.a.createElement("p",{className:"last"},o(e.last)),r.a.createElement("p",{className:"current"},o(e.current)))}),_=a(66),z=a(76),L=(a(162),function(e){var t=Object(_.useMouseMove)(1),a=Object(n.useRef)(!1),o=Object(Y.a)({},e.defaultSettings,{},e.options),c=Object(n.useState)({}),l=Object(b.a)(c,2),i=l[0],s=l[1],u=o.reverse?-1:1,m=Object(n.useCallback)((function(e,a,n,r){if(t instanceof Object===!1)return!1;var c=(t.x-n)/e,l=(t.y-r)/a,i=Math.min(Math.max(c,0),1),s=Math.min(Math.max(l,0),1);return{tiltX:(u*(o.max/2-i*o.max)).toFixed(2),tiltY:(u*(s*o.max-o.max/2)).toFixed(2),percentageX:100*i,percentageY:100*s}}),[o,t,u]),d=Object(n.useCallback)((function(e,t,a,n){var r=m(e,t,a,n);s(Object(Y.a)({},i,{transform:"perspective(".concat(o.perspective,"px) rotateX(").concat("x"===o.axis?0:r.tiltY,"deg) rotateY(").concat("y"===o.axis?0:r.tiltX,"deg) scale3d(").concat(o.scale,", ").concat(o.scale,", ").concat(o.scale,")")}))}),[i,s,o,m]),f=Object(n.useCallback)((function(){if(a.current instanceof Object===!1)return!1;var e=a.current.getBoundingClientRect(),t=a.current.offsetWidth,n=a.current.offsetHeight,r=e.left,o=e.top;d(t,n,r,o)}),[d,a]);return Object(z.a)((function(){f()}),[t]),r.a.createElement("div",{className:"repultion--item",ref:a,style:i},e.children)}),J=(a(163),{reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1.1",speed:"1000",transition:!0,axis:null,reset:!0}),X=function(e){var t=r.a.Children.map(e.children,(function(t,a){return r.a.createElement(L,{defaultSettings:Object(Y.a)({},J,{},e.items[a]),key:a},t)}));return r.a.createElement("div",{className:"repultion"},t)},G=(a(164),function(e){var t=e.item;return r.a.createElement("div",{className:"slider--background"},r.a.createElement(X,{items:[{max:5,perspective:3e3,scale:1},{max:7,perspective:3e3,scale:1},{max:10,perspective:3e3,scale:1},{max:13,perspective:3e3,scale:1}]},t.backgroundItems&&t.backgroundItems.map((function(e,t){var a=e.name,n=e.url;return r.a.createElement("img",{className:"image",src:"".concat("").concat(n),alt:a,key:t})}))),r.a.createElement("div",{className:"slider--background--icon"},r.a.createElement("span",{className:"scroll-icon"},r.a.createElement("span",{className:"scroll-icon__wheel-outer"},r.a.createElement("span",{className:"scroll-icon__wheel-inner"})))))}),U=(a(165),function(e){var t=function(t,a){if(!1===Number.isInteger(t))return!1;switch(t){case 3:return r.a.createElement("li",{className:"slider--controls--item",key:a});case 4:case 2:case 1:default:return r.a.createElement("li",{className:"slider--controls--item","data-current":e.current===a,key:a},r.a.createElement("button",{className:"item",onClick:function(){return e.setCurrent(a)}}))}};return r.a.createElement("ul",{className:"slider--controls","data-type":e.type},function(){var a=[];if(1===e.type||2===e.type||4===e.type)for(var n=0;n<e.length;n++)a.push(t(e.type,n));else 3===e.type&&a.push(t(e.type));return a}(e.current))}),H=(a(166),function(e){var t=e.children,a=e.current,n=e.last,o=r.a.Children.map(t,(function(e,t){return r.a.createElement("li",{className:"slider--item","data-active":a===t,"data-last":n===t,key:t},e)}));return r.a.createElement("ul",{className:"slider--container"},o)}),Z=(a(167),function(e){var t=e.background,a=e.callback,o=e.current,c=e.children,l=e.items,i=e.type,s=Object(n.useState)("next"),u=Object(b.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)(null),p=Object(b.a)(f,2),E=p[0],v=p[1];return r.a.createElement("div",{className:"slider","data-direction":m,"data-type":i},r.a.createElement(H,{children:c,current:o,last:E}),(1===i||4===i)&&r.a.createElement(V,{current:o,last:E,type:1}),1===i&&!0===t&&r.a.createElement(G,{item:l[0]}),r.a.createElement(U,{current:o,type:i,setCurrent:function(e){if(!1===Number.isInteger(e))return!1;"function"===typeof a&&(d(e>o?"next":"prev"),v(o),a(e))},length:r.a.Children.count(c)}))}),W=(a(168),function(e){return r.a.createElement("div",{className:"gallery-item"},r.a.createElement("img",{src:e.src,alt:e.title}))}),$=(a(169),function(e){return r.a.createElement("div",{className:"gallery-min"},e.items&&r.a.createElement(Z,{current:e.current,callback:function(t){if(!1===Number.isInteger(t))return!1;e.items[t]instanceof Object&&e.setCurrent(t)},type:4},e.items.map((function(t,a){return r.a.createElement(W,Object.assign({current:e.current,last:e.last},t,{index:a,key:a}))}))))}),K=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(0),l=Object(b.a)(c,2),i=l[0],s=l[1],u=[{title:"1",src:"/images/pollyanna-bio-gallery.jpg"},{title:"2",src:"/images/pollyanna-bio-gallery-2.jpg"},{title:"2",src:"/images/pollyanna-bio-gallery-3.jpg"},{title:"2",src:"/images/pollyanna-bio-gallery-4.jpg"},{title:"2",src:"/images/pollyanna-bio-gallery-5.jpg"},{title:"2",src:"/images/pollyanna-bio-gallery-6.jpg"},{title:"2",src:"/images/pollyanna-bio-gallery-7.jpg"},{title:"2",src:"/images/pollyanna-bio-gallery-8.jpg"},{title:"2",src:"/images/pollyanna-bio-gallery-9.jpg"},{title:"2",src:"/images/pollyanna-bio-gallery-10.jpg"},{title:"2",src:"/images/pollyanna-bio-gallery-11.jpg"}],m=function(e){!0===Number.isInteger(e)&&(s(a),o(e))};return r.a.createElement("div",{className:"page bio"},r.a.createElement("div",{className:"wrapper"},r.a.createElement($,{current:a,last:i,onNextPrev:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"prev",t=0,n=u.length-1;"prev"===e?t=a-1<0?n:a-1:"next"===e&&(t=a+1>n?0:a+1),m(t)},setCurrent:o,items:u,type:2}),r.a.createElement(q,{width:500,height:300,type:2},r.a.createElement("p",null,"Cantora carioca formada em Musicoterapia pelo \xa0",r.a.createElement("a",{href:"http://www.cbmmusica.edu.br/",className:"link"},"Conservat\xf3rio Brasileiro de M\xfasica"),", onde estudou tamb\xe9m canto l\xedrico e viol\xe3o. Por\xe9m, foi no samba, na bossa nova, na m\xfasica brasileira que se encontrou e faz dela sua express\xe3o art\xedstica."),r.a.createElement("p",null,"Pollyanna estudou canto na \xa0",r.a.createElement("a",{href:"http://www.casadochoro.com.br/portal/view/escola_portatil",className:"link"},"Escola Port\xe1til de Choro"),".\xa0 Vocalista do ",r.a.createElement("strong",null,"Grupo Fala Brasil")," de samba e choro durante 10 anos."),r.a.createElement("p",null,"Vocalista do bloco Musicalidade, que leva carnaval para asilos de idosos. Comp\xf4s trilha sonora para document\xe1rios e pe\xe7as teatrais."),r.a.createElement("p",null,"Entrevistas para ",r.a.createElement("strong",null,"NY Times"),", ",r.a.createElement("strong",null,"Canal Futura"),", ",r.a.createElement("strong",null,"Programa Estrelas (Rede Globo)"),", ",r.a.createElement("strong",null,'Document\xe1rio "Pollyanna Ferrari - Canto dos Cantos" (TV Pinel), Radio Multi Rio'),"."),r.a.createElement("p",null,"Tem se apresentado h\xe1 15 anos no Rio de Janeiro, al\xe9m de shows na Fran\xe7a em 2015, 2016 e 2017 e em Portugal em 2018."),r.a.createElement("p",null,"Graduou-se em Musicoterapia pelo Conservat\xf3rio Brasileiro de M\xfasica, especializou-se em Sa\xfade Mental pela UFRJ, onde tamb\xe9m fez Mestrado em Psicologia Social."),r.a.createElement("p",null,'Assessora T\xe9cnica dos projetos de cultura e gera\xe7\xe3o de renda da Rede de Sa\xfade Mental Prefeitura (RJ) (2014-2017). Professora da disciplina "Musicoterapia e Cultura" da P\xf3s Gradua\xe7\xe3o em Musicoterapia (CBM-CEU). Consultora do Ecomuseu Nega Vilma \xad Comunidade Santa Marta (desde 2009).'),r.a.createElement("p",null,"Na ",r.a.createElement("a",{href:"http://www.amtrj.com.br/",className:"link"},"Associa\xe7\xe3o de Musicoterapia do Estado do Rio de Janeiro")," foi Presidente, Vice Presidente, 2\xaa Secret\xe1ria e membro do Conselho Consultivo."),r.a.createElement("p",null,"Coordenadora do Coletivo Carnavalesco T\xe1 Pirando, Pirado, Pirou!, bloco de carnaval da rede p\xfablica de sa\xfade mental durante 5 anos."),r.a.createElement("p",null,"Membro ",r.a.createElement("strong",null,"Fundadora do Coletivo Porto L\xfadico")," onde desenvolve musicoterapia comunit\xe1ria com crian\xe7as e jovens do Instituto Profissional o Ter\xe7o, no Porto."))))},Q=function(e){var t=Object(A.c)().t,a=e.contacts,n=e.credits,o=function(e,a,n){return r.a.createElement("span",{className:"value",key:n},r.a.createElement("i",{className:"material-icons"},e),t(a))};return r.a.createElement("div",{className:"contact--info"},r.a.createElement("div",{className:"contact--info--container"},r.a.createElement("h1",{className:"title-main"},t("contatos")),r.a.createElement("ul",{className:"contact--info--list"},a&&a.map((function(e,t){return r.a.createElement("li",{className:"contact--info--item",key:t},r.a.createElement("p",{className:"text"},r.a.createElement("span",{className:"title"},e.label),"email"===e.type&&o(e.icon,e.value),"phones"===e.type&&e.value.map((function(e,t){return o(e.icon,e,t)}))))})))),r.a.createElement("div",{className:"contact--info--container"},r.a.createElement("h1",{className:"title-main"},t("creditos")),r.a.createElement("ul",{className:"contact--info--list credits"},n&&n.map((function(e,t){return r.a.createElement("li",{className:"contact--info--item",key:t},r.a.createElement("a",{className:"text",href:e.url,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("span",{className:"title"},e.name),o("link",e.pro)))})))))},ee=a(29),te=a(30),ae=a.n(te),ne=(a(172),function(e){var t=e.error,a=e.name,o=e.required,c=e.placeholder,l=e.type,i=Object(A.c)().t,s=Object(n.useState)(!0),u=Object(b.a)(s,2),m=u[0],d=u[1],f=Object(n.useRef)(null);return r.a.createElement("label",{className:"input","data-error":!m},r.a.createElement("input",{className:"input--input",name:a,onKeyUp:function(){if(!1===f.hasOwnProperty("current")&&f.current instanceof Object)return!1;var e=f.current.hasOwnProperty("value")?f.current.value:"";if(""!==e){switch(l){case"phone":if(!0===/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm.test(e))return d(!0);break;case"email":if(!0===/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e))return d(!0);break;case"text":case"":default:if(!0===/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(e))return d(!0)}return d(!1)}},ref:f,required:o,placeholder:i(c),type:"text"}),r.a.createElement("label",{className:"input--label"},r.a.createElement("span",{className:"text"},i(a)),r.a.createElement("label",{className:"input--error"},i(t))))}),re=(a(173),function(e){var t=e.name,a=e.required,n=e.placeholder,o=Object(A.c)().t;return r.a.createElement("label",{className:"text-area"},r.a.createElement("textarea",{className:"text-area--input",name:t,rows:"9",placeholder:o(n),required:a}),r.a.createElement("label",{className:"text-area--label"},o(t)))}),oe=function(e){var t=e.item,a=e.index;return r.a.createElement(n.Fragment,null,function(e,t){if(e instanceof Object===!1)return!1;switch(e.type){case"textarea":return r.a.createElement(re,Object.assign({},e,{key:t}));case"email":case"text":default:return r.a.createElement(ne,Object.assign({},e,{key:t}))}}(t,a))},ce=(a(174),function(e){var t=Object(A.c)().t,a=e.form,o=Object(n.useRef)(null);return Object(n.useEffect)((function(){ae.a instanceof Object&&ae.a.init("user_3XRze6mVdBi6uFqANdpRs")})),r.a.createElement("form",{className:"form",onSubmit:function(e){if(e.preventDefault(),o.current instanceof Object){var t=new FormData(o.current);!function(e){if(e instanceof Object===!1)return!1;ae.a.send("gmail","email_contact",e).then((function(e){return console.log("SUCCESS!",e.status,e.text)}),(function(e){return console.log("FAILED...",e)}))}(Array.from(t.entries()).reduce((function(e,t){return Object(Y.a)({},e,Object(ee.a)({},t[0],t[1]))}),{}))}},autoComplete:"off",ref:o},Array.isArray(a)&&a.map((function(e,t){return r.a.createElement(oe,{item:e,index:t,key:t})})),r.a.createElement("button",{className:"btn btn-more"},t("send")))}),le=(a(175),function(e){var t=Object(A.c)().t,a=e.page,n=a.form,o=a.contacts,c=a.credits;return r.a.createElement("div",{className:"contact"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(Q,{contacts:o,credits:c}),r.a.createElement("div",{className:"contact--form"},r.a.createElement("h1",{className:"title-main"},t("message")),r.a.createElement(ce,{form:n}))))}),ie=(a(176),function(){return r.a.createElement("div",{className:"page bio"},r.a.createElement("h1",null,"Events"))}),se=a(67),ue=a.n(se),me=a(68),de=(a(177),function(e){var t=Object(A.c)().t;return r.a.createElement("div",{className:"webdoor--item--content"},r.a.createElement("p",{className:"title"},t(e.name)),r.a.createElement("p",{className:"description"},t(e.description)),r.a.createElement(l.b,{className:"btn-more r",to:e.linkUrl},t(e.linkText)))}),fe=(a(178),function(e){var t=e.items,a=e.current,o=e.setCurrent;return r.a.createElement("section",{className:"webdoor"},t&&r.a.createElement(n.Fragment,null,r.a.createElement(Z,{current:a,callback:function(e){if(!1===Number.isInteger(e))return!1;t[e]instanceof Object&&o(e)},items:t,type:1,background:!0},t.map((function(e,t){return r.a.createElement(de,Object.assign({},e,{key:t}))})))))}),pe=(a(179),function(e){var t=Object(n.useState)(0),a=Object(b.a)(t,2),o=a[0],c=a[1],l=e.page.webdoor,i=function(e){!0===Number.isInteger(e)&&c(e)},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"prev",t=0,a=l.length-1;"prev"===e?t=o-1<0?a:o-1:"next"===e&&(t=o+1>a?0:o+1),i(t)},u=Object(me.a)({onSwipedLeft:function(){return s("next")},onSwipedRight:function(){return s("prev")},onSwipedDown:function(){return s("prev")},onSwipedUp:function(){return s("next")},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return r.a.createElement("div",Object.assign({className:"page home"},u),r.a.createElement(ue.a,{upHandler:function(){return s("next")},downHandler:function(){return s("prev")}},r.a.createElement(fe,{current:o,items:l,onNextPrev:s,setCurrent:c})))}),be=a(69),Ee=a.n(be),ve=a(73),ge=(a(180),function(e){var t=e.paused,a=e.onPlay;return r.a.createElement("div",{className:"mini-player--controls"},r.a.createElement("button",{className:"btn btn-play",onClick:function(){return a(t)},"data-paused":!t},r.a.createElement("i",{className:"material-icons"},"play_arrow"),r.a.createElement("i",{className:"material-icons"},"pause")),r.a.createElement("button",{className:"btn",onClick:function(){return e.onNextPrev("prev")}},r.a.createElement("i",{className:"material-icons"},"skip_previous")),r.a.createElement("button",{className:"btn",onClick:function(){return e.onNextPrev("next")}},r.a.createElement("i",{className:"material-icons"},"skip_next")))}),he=(a(181),function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),o=e.color,c=e.height,l=e.item,i=e.onSetAudio,s=e.width,u=function(e){return e<10?"0".concat(e):e},m=Object(n.useCallback)((function(e,t,n){var r=function(e){var t=Math.floor(e/60),a=(e%60).toFixed(0);return"".concat(u(t),":").concat(u(a))};!function(){var e=100*t/n,i=e/100*(s-20);e>=0?(a.current.beginPath(),a.current.clearRect(0,0,s,c),a.current.fillStyle=o,a.current.fillRect(0,Math.floor(c/2)+2,s,1),a.current.fillRect(0,Math.floor(c/2),i,5),function(e){a.current.font="14px Inria Serif";var t=e;a.current.fillText(t,0,20)}(l.name),function(e,t){a.current.font="10px Roboto Mono";var n=r(e>=0?e:0);a.current.fillText(n,70,c),a.current.font="800 10px Roboto Mono";var o=r(t>=0?t:0);a.current.fillText(o,s-(a.current.measureText(o).width+20),c)}(t,n)):function(){a.current.font="14px Inria Serif";a.current.fillText("loading...",0,20)}()}()}),[o,c,l,s]),d=Object(n.useCallback)((function(e,t){e&&e.length&&t instanceof Object&&m(e,t.currentTime,t.duration)}),[m]);return Object(n.useEffect)((function(){a.current=t.current.getContext("2d"),a.current.fillStyle="transparent",m([]),i(l,d)}),[d,i,l,m]),r.a.createElement("div",{className:"mini-player-timer"},r.a.createElement("div",{className:"progress"},r.a.createElement("canvas",{height:e.height,width:e.width,ref:t})))}),ye=(a(182),function(){var e=Object(n.useContext)(w),t=Object(n.useContext)(g),a=Object(ve.a)(),o=Object(b.a)(a,1)[0],c=e.audios,l=e.audio,i=e.onSetAudio,s=e.onPlayAudio,u=e.audio.paused,m=Object(n.useState)({}),d=Object(b.a)(m,2),f=d[0],p=d[1],E=Object(n.useState)(0),v=Object(b.a)(E,2),h=v[0],y=v[1],j=Object(n.useCallback)((function(e){e instanceof Object&&p(e)}),[p]),O=Object(n.useCallback)((function(e){if(!0===Number.isInteger(e)){var t=c[e];t instanceof Object&&j(t),y(e)}}),[c,j]);return Object(n.useEffect)((function(){c&&O(0),o<768&&s(!1)}),[c,O,s,o]),r.a.createElement(Ee.a,{in:!0,appear:!0,duration:1e3,onEntering:{translateX:[100,0],opacity:[0,1]},onExiting:{translateX:-100,opacity:0},easing:"cubicBezier(0.075, 0.82, 0.165, 1)",delay:300},f instanceof Object&&o>=768&&r.a.createElement("div",{className:"mini-player"},r.a.createElement(ge,{audio:l,onNextPrev:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"prev",t=0,a=c.length-1;"prev"===e?t=h-1<0?a:h-1:"next"===e&&(t=h+1>a?0:h+1),O(t)},onPlay:s,paused:u}),r.a.createElement(he,{color:t instanceof Object&&t.theme?t.theme["--text-color"]:"#222",height:60,item:f,paused:u,width:310,onSetAudio:i})))}),je=(a(183),function(e){var t=Object(n.useContext)(E).page;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement(T,{location:e.location}),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,render:function(){return r.a.createElement(pe,Object.assign({},e,{page:t}))}}),r.a.createElement(i.a,{path:"/bio",component:K}),r.a.createElement(i.a,{path:"/events",component:ie}),r.a.createElement(i.a,{path:"/contact",render:function(){return r.a.createElement(le,Object.assign({},e,{page:t}))}})),r.a.createElement(B,null)),r.a.createElement(k,null,r.a.createElement(ye,null)))}),Oe=(a(184),function(e){var t=Object(n.useState)(!1),a=Object(b.a)(t,2),o=a[0],c=a[1];return Object(n.useEffect)((function(){return window.addEventListener("load",(function(){return c(!0)}),!1),function(){window.removeEventListener("load",(function(){}))}}),[]),r.a.createElement("div",{className:"loader","data-complete":o},e.children)}),Ne=function(){var e=function(e,t,a){var n,r,o,c=function(e){return Math.floor(Math.max(Math.min(256*e,255),0))},l=function(e,t,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?e+6*(t-e)*a:a<.5?t:a<2/3?e+(t-e)*(2/3-a)*6:e},i=a<.5?a*(1+t):a+t-a*t,s=2*a-i;return n=l(s,i,e+1/3),r=l(s,i,e),o=l(s,i,e-1/3),[c(n),c(r),c(o)]}(Math.random(),1,.01*(Math.floor(16*Math.random())+75)),t=Object(b.a)(e,3);return function(e,t,a){return"#".concat(e.toString(16)).concat(t.toString(16)).concat(a.toString(16))}(t[0],t[1],t[2])},xe=Object(n.createContext)({color:"",setNewColor:function(){}}),Ce=function(e){var t=Object(n.useState)(Ne()),a=Object(b.a)(t,2),o=a[0],c=a[1];return r.a.createElement(xe.Provider,{value:{color:o,setNewColor:function(){return c(Ne()),o}}},e.children)},we=(a(185),function(e){var t=Object(n.useRef)(),a=Object(n.useContext)(g);return Object(n.useEffect)((function(){var e;(e=a.theme)instanceof Object&&Object.entries(e).forEach((function(e){var a=Object(b.a)(e,2),n=a[0],r=a[1];t.current.style.setProperty(n,r)}))})),r.a.createElement("div",{className:"theme",ref:t},r.a.createElement(Ce,null,e.children))}),ke=(a(56),Object(i.f)((function(e){return r.a.createElement(n.Suspense,{fallback:"loading..."},r.a.createElement(p,null,r.a.createElement(f.Consumer,null,(function(t){return r.a.createElement(v,Object.assign({location:e.location},t),r.a.createElement(h,t,r.a.createElement(we,null,r.a.createElement(Oe,null),r.a.createElement(je,{location:e.location}))))}))))}))),Se=a(44),Pe=a(70),Ae=a(71),Me=a(72);Se.a.use(A.b).init({resources:{pt:{translation:Me},fr:{translation:Ae},en:{translation:Pe}},lng:"pt",fallbackLng:["pt","fr","en"],interpolation:{escapeValue:!1}});Se.a,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(l.a,{basename:""},r.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},56:function(e,t,a){},70:function(e){e.exports=JSON.parse('{"home":"Home","bio":"Biox","events":"Eventx","contact":"Contaxu","Fotografo":"photographer","interview":"Interview","seeMore":"View more","webdoorOne":"Brazilian Singer from Rio de Janeiro, graduated in Music Therapy at the Brazilian Conservatory of Music, where she also studied lyrical singing and guitar. However, it was in samba, bossa nova, Brazilian music that she found herself artistically.","webdoorTwo":"Porto Canal, NY Times, \u201cCanal Futura\u201d, \u201cPrograma Estrelas\u201d (Rede Globo), Documentary Pollyanna Ferrari - canto dos cantos, Radio Multi Rio.","name":"Name","nameError":"Invalid name","yourName":"Your name","email":"E-mail","emailError":"Invalid email","yourEmail":"Your email","phone":"Phone","phoneError":"Invalid phone","yourPhone":"Your phone","message":"Message","yourMessage":"Your message","successMessage":"Thank you for your message. We will contact you soon.","send":"Send"}')},71:function(e){e.exports=JSON.parse('{"home":"Accueil","bio":"Biox","events":"Eventx","contact":"Contaxu","Fotografo":"photographerx","interview":"Elle a \xe9t\xe9 interview\xe9e","webdoorOne":"Pollyanna est une chanteuse br\xe9silienne de Rio de Janeiro. Elle est dipl\xf4m\xe9e en musicoth\xe9rapie au Conservatoire Br\xe9silien de Musique, o\xf9 elle a \xe9galement \xe9tudi\xe9 le chant classique et la guitare. Cependant, c\'est dans la samba, la bossa nova et dans la musique br\xe9silienne qu\u2019elle s\u2019est r\xe9v\xe9l\xe9e artistiquement.","seeMore":"See morX","webdoorTwo":"Elle a \xe9t\xe9 interview\xe9e pour le \u201cPorto Canal\u201d, le New York Times, \u201cCanal Futura\u201d, \u201cPrograma Estrelas\u201d (Rede Globo), le documentaire Pollyanna Ferrari - Canto dos Cantos, Radio Multi Rio.","name":"Nom","nameError":"Nom incorrect","yourName":"Votre nom","email":"E-mail","emailError":"E-mail incorrect","yourEmail":"Votre email","phone":"T\xe9l\xe9phone","phoneError":"T\xe9l\xe9phone incorrect","yourPhone":"Votre t\xe9l\xe9phone","message":"Message","yourMessage":"Votre message","successMessage":"Merci pour votre message. Nous vous contacterons bient\xf4t.","send":"Send"}')},72:function(e){e.exports=JSON.parse('{"home":"Home","bio":"Bio","events":"Eventos","contact":"Contact","Fotografo":"Fotografo","interview":"Entrevistas","seeMore":"Ver mais","webdoorOne":"Cantora carioca formada em Musicoterapia pelo Conservat\xf3rio Brasileiro de M\xfasica, onde estudou tamb\xe9m canto l\xedrico e viol\xe3o. Por\xe9m, foi no samba, na bossa nova, na m\xfasica brasileira que se encontrou e faz dela sua express\xe3o art\xedstica.","webdoorTwo":"Entrevistas para Porto Canal, NY Times, Canal Futura, Programa Estrelas (Rede Globo), Pel\xedcula Documental Pollyanna Ferrari - Cantos dos Cantos (TV Pinel), Radio Multi Rio, O Gaiense.","credits":"Credits","name":"Nome","nameError":"Nome invalido","yourName":"Seu nome","email":"E-mail","emailError":"Email invalido","yourEmail":"Seu e-mail","phone":"Telefone","phoneError":"N\xfamero de telefone invalido","yourPhone":"Seu telefone","message":"Mensagem","yourMessage":"Sua mensagem","successMessage":"Agradecemos sua mensagem. Entraremos em contato em breve.","send":"Enviar"}')},78:function(e,t,a){e.exports=a(186)}},[[78,1,2]]]);
//# sourceMappingURL=main.eb3ec73e.chunk.js.map