(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports={createForm:"SourceCreate_createForm__2KrBN",createFields:"SourceCreate_createFields__8F5Ek",labelTitle:"SourceCreate_labelTitle__3LPuJ"}},14:function(e,t,a){e.exports={section:"SourceCard_section__hWmMe",name:"SourceCard_name__327TD",url:"SourceCard_url__59iZD"}},15:function(e,t,a){e.exports={element:"NavMenuElement_element__3XeYF",elementArrow:"NavMenuElement_elementArrow__29-0h",button:"NavMenuElement_button__1qALZ",buttonArrow:"NavMenuElement_buttonArrow__1nY71"}},17:function(e,t,a){e.exports={newsletterHead:"TitleBar_newsletterHead__Zupct",title:"TitleBar_title__3MWB3",timeStamp:"TitleBar_timeStamp__wN8_N"}},18:function(e,t,a){e.exports={on:"PostButton_on__dfo7m"}},21:function(e,t,a){e.exports={addSource:"SourcesList_addSource__qePJ3"}},32:function(e,t,a){e.exports={content:"PostCardList_content__15L4_",contentFlex:"PostCardList_contentFlex__2hHWd"}},33:function(e,t,a){e.exports={menu:"NavMenu_menu__1haFk"}},34:function(e,t,a){e.exports=a(57)},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(26),s=a.n(r),c=a(10),l=a(6),i=a(29),u=a(30),p=a.n(u),d=a(31),h=a.n(d),m=a(1),f=a(2),b=a(4),_=a(3),v=a(5),y=function(e){var t=0,a=new Date,n=1===a.getMinutes().toString().length?"0"+a.getMinutes():a.getMinutes(),o=a.getHours()>=12?"pm":"am";return t=0===a.getHours()?12:a.getHours()>12?a.getHours()-12:a.getHours(),["Sunday","Monday","Tueday","Wedday","Thuday","Friday","Saturday"][a.getDay()]+", "+["January","February","March","April","May","June","July","August","September","October","November","December"][a.getMonth()]+" "+a.getDate()+", "+a.getFullYear()+" | "+t+":"+n+o},E=a(17),O=a.n(E),g=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return o.a.createElement("header",{className:O.a.newsletterHead},o.a.createElement("div",{className:O.a.title,id:"title"},"The Newsletter"),o.a.createElement("time",{className:O.a.timeStamp},o.a.createElement(y,null)))}}]),t}(o.a.Component),S="http://the-newsletter-app-back";function j(){return{type:"SET_POSTS",payload:fetch("".concat(S,"/list")).then(function(e){return e.json()})}}function w(e){return{type:"UPDATE_POST",payload:fetch("http://the-newsletter-app-back",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:e.id,action:"update",fields:e.fields})}).then(function(e){return console.log("server reply for update: ".concat(e.json()))})}}function C(e){return{type:"ADD_SOURCE",payload:fetch(S,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({action:e.action,id:e.id||"",fields:e.fields})}).then(function(e){return e.json()})}}function N(){return{type:"SET_SOURCES",payload:fetch("".concat(S,"/sources")).then(function(e){return e.json()})}}function P(e){return{type:"SELECT_POST",payload:fetch("".concat(S,"/post/").concat(e)).then(function(e){return e.json()})}}var k=a(7),T=a(18),M=a.n(T),A=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(o)))).updatePost=function(){var e="";e=!a.props.value;var t={id:a.props.postId,fields:{}},n={};n["".concat(a.props.type)]=e,t.fields=n,a.props.updatePost(t)},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e="",t="";switch(this.props.type){case"star":e="fas fa-star",t=this.props.value?M.a.on:M.a.regular;break;default:e="far fa-trash-alt",t=M.a.delete}return o.a.createElement("button",{className:t,onClick:this.updatePost},o.a.createElement("i",{className:e}))}}]),t}(o.a.Component),x=Object(c.b)(function(e){return{updatePost:e.updatePost}},function(e){return Object(l.b)({updatePost:w},e)})(A),D={1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"},L={1:"Sun",2:"Mon",3:"Tue",4:"Wed",5:"Thu",6:"Fri",7:"Sat"},H=function(e){var t=new Date(e),a="".concat(t.getHours(),":").concat(t.getMinutes()," am");return t.getHours()>12&&(a="".concat(t.getHours()-12,":").concat(t.getMinutes()," pm")),"".concat(L[t.getDay()+1]," ").concat(t.getDate()," ").concat(D[t.getMonth()+1]," at ").concat(a)},W=a(8),F=a.n(W),J=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(b.a)(this,Object(_.a)(t).call(this,e))).handleClick=function(){a.props.selector(a.props.post._id)},a.handleClick=a.handleClick.bind(Object(k.a)(Object(k.a)(a))),a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e="".concat(this.props.post.text.replace(/<(?:.|\n)*?>/gm," "),"..."),t="";t=this.props.post.read?F.a.bodyRead:F.a.body;var a=H(new Date(this.props.post.published));return o.a.createElement("article",{className:t,key:this.props.post._id},o.a.createElement("header",{className:F.a.title,onClick:this.handleClick},this.props.post.title),o.a.createElement("section",{className:F.a.secondLine},o.a.createElement("div",{className:F.a.source},"@ ",this.props.post.source),o.a.createElement(x,{type:"star",value:this.props.post.star,postId:this.props.post._id})),o.a.createElement("section",{className:F.a.text,onClick:this.handleClick,dangerouslySetInnerHTML:{__html:e}}),o.a.createElement("footer",{className:F.a.statusLine},o.a.createElement("div",null,a),o.a.createElement("div",null,"~ ",this.props.post.readTime," mins")),o.a.createElement("div",{className:F.a.divider}))}}]),t}(o.a.Component),I=a(32),U=a.n(I),R=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(o)))).fetchMessages=function(){a.props.setPosts()},a.selectPostToShow=function(e){a.props.selectPost(e).then(function(e){return a.props.showPost(e)})},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){this.fetchMessages()}},{key:"componentDidMount",value:function(){this.refresher=setInterval(this.fetchMessages,5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.refresher)}},{key:"render",value:function(){var e=this;return o.a.createElement("section",{className:U.a.content},this.props.posts.map(function(t){return o.a.createElement("section",{key:t._id},o.a.createElement(J,{selector:e.selectPostToShow,post:t}))}))}}]),t}(o.a.Component),B=Object(c.b)(function(e){return{posts:e.posts,selectPost:e.selectPost,selectModule:e.selectModule}},function(e){return Object(l.b)({setPosts:j,selectPost:P},e)})(R),Y=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e="";switch(this.props.type){case"edit":e="fas fa-pencil-alt";break;case"add":e="fas fa-plus";break;default:e="far fa-trash-alt"}return o.a.createElement("button",null,o.a.createElement("i",{className:e}))}}]),t}(o.a.Component),X=a(14),Z=a.n(X),q=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"goHome",value:function(){}},{key:"render",value:function(){return o.a.createElement("section",{className:Z.a.section},o.a.createElement("section",{className:Z.a.nameWrapper},o.a.createElement("p",{onClick:this.goHome,className:Z.a.name},this.props.source.name),o.a.createElement("p",{className:Z.a.url},this.props.source.url)),o.a.createElement("section",{className:Z.a.buttonsWrapper},o.a.createElement(Y,{type:"edit",postId:this.props.source._id}),o.a.createElement(Y,{type:"delete"})))}}]),t}(o.a.Component),z=a(12),K=a.n(z),Q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(b.a)(this,Object(_.a)(t).call(this,e))).state={name:"",url:"",homepage:""},a.handleChange=a.handleChange.bind(Object(k.a)(Object(k.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(k.a)(Object(k.a)(a))),a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"handleChange",value:function(e){var t={};t[e.target.name]=e.target.value,this.setState(t)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={name:e.target[0].value,url:e.target[1].value,home:e.target[2].value};this.props.toggle(),this.props.create(t)}},{key:"render",value:function(){return console.log(this.props),o.a.createElement("form",{onSubmit:this.handleSubmit,className:K.a.createForm},o.a.createElement("label",null,o.a.createElement("div",{className:K.a.labelTitle},"Name"),o.a.createElement("input",{className:K.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange})),o.a.createElement("label",null,o.a.createElement("div",{className:K.a.labelTitle},"URL"),o.a.createElement("input",{type:"text",name:"url",value:this.state.url,onChange:this.handleChange})),o.a.createElement("label",null,o.a.createElement("div",{className:K.a.labelTitle},"Homepage"),o.a.createElement("input",{type:"text",name:"home",value:this.state.home,onChange:this.handleChange})),o.a.createElement("button",{className:K.a.submit,as:"input",type:"submit",value:"Submit"},"Create"))}}]),t}(o.a.Component),V=a(21),$=a.n(V),G=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(o)))).state={showAddSource:!1},a.toggleAddSource=function(){a.setState(function(e){return{showAddSource:!a.state.showAddSource}}),console.log(a.state.showAddSource)},a.fetchSources=function(){a.props.setSources()},a.createSource=function(e){var t={action:["source","create"],fields:e};a.props.addSource(t)},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){this.fetchSources()}},{key:"componentDidMount",value:function(){this.refresher=setInterval(this.fetchSources,5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.refresher)}},{key:"render",value:function(){return o.a.createElement("section",{className:$.a.section},o.a.createElement("div",{className:$.a.addSource,onClick:this.toggleAddSource},o.a.createElement(Y,{type:"add"}),"Add Source"),this.state.showAddSource?o.a.createElement(Q,{create:this.createSource,toggle:this.toggleAddSource}):null,this.props.sources.map(function(e){return o.a.createElement(q,{source:e,key:e._id})}))}}]),t}(o.a.Component),ee=Object(c.b)(function(e){return{sources:e.sources,addSource:e.addSource}},function(e){return Object(l.b)({setSources:N,addSource:C},e)})(G),te=a(9),ae=a.n(te),ne=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(o)))).handleClick=function(){window.open(a.props.post.url,"_blank")},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e="";e=this.props.post.author?"by ".concat(this.props.post.author):"";var t=this.props.post.text,a=H(new Date(this.props.post.published)),n=H(new Date(this.props.post.parsed));return o.a.createElement("article",{className:ae.a.body},o.a.createElement("header",{className:ae.a.title,onClick:this.handleClick},this.props.post.title),o.a.createElement("div",{className:ae.a.secondLine},o.a.createElement("div",{className:ae.a.author},e),o.a.createElement("div",{className:ae.a.buttonsWrapper},o.a.createElement(x,{type:"star",value:this.props.post.star,postId:this.props.post._id}),o.a.createElement(x,{type:"delete"}))),o.a.createElement("section",{className:ae.a.text,dangerouslySetInnerHTML:{__html:t}}),o.a.createElement("div",{className:ae.a.divider}),o.a.createElement("footer",{className:ae.a.statusLine},o.a.createElement("div",null,"published: ",a),o.a.createElement("div",null,"parsed: ",n),o.a.createElement("div",null,"~ ",this.props.post.pages," pages")))}}]),t}(o.a.Component),oe=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(b.a)(this,Object(_.a)(t).call(this,e))).setPostToShow=function(e){a.setState({post:e.payload}),a.props.toggle("show")},a.state={post:{}},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){switch(this.props.show){case"Home":return o.a.createElement(B,{showPost:this.setPostToShow});case"show":return o.a.createElement(ne,{post:this.state.post});case"Sources":return o.a.createElement(ee,null);default:return o.a.createElement(B,null)}}}]),t}(o.a.Component),re=a(15),se=a.n(re),ce=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(o)))).handleClick=function(){a.props.show(a.props.name)},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){if("arrow"===this.props.name){return o.a.createElement("section",{className:se.a.elementArrow,onClick:this.handleClick},o.a.createElement("div",{className:se.a.buttonArrow},o.a.createElement("i",{className:"fas fa-chevron-left"})))}return o.a.createElement("section",{className:se.a.element,onClick:this.handleClick},o.a.createElement("div",{className:se.a.button},this.props.name))}}]),t}(o.a.Component),le=a(33),ie=a.n(le),ue=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",{className:ie.a.menu},o.a.createElement(ce,{show:this.props.show,name:"arrow"}),o.a.createElement(ce,{show:this.props.show,name:"Home"}),o.a.createElement(ce,{show:this.props.show,name:"Sources"}))}}]),t}(o.a.Component),pe=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(o)))).state={module:"Home"},a.showModule=function(e){a.setState(function(t){return{module:e}})},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return o.a.createElement("main",null,o.a.createElement(g,null),o.a.createElement(oe,{show:this.state.module,toggle:this.showModule}),o.a.createElement(ue,{show:this.showModule}))}}]),t}(o.a.Component);a(56),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));h.a.load({google:{families:["Aleo:300,300i,400,400i,700","IBM Plex Mono:300,400"]}});var de=Object(l.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POSTS":return t.payload;default:return e}},sources:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SOURCES":return t.payload;default:return e}},addSource:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_SOURCE":return t.payload;default:return e}},updatePost:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_POST":return t.payload;default:return e}},selectPost:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_POST":return t.payload;default:return e}},sourceCreateModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_MODULE":return t.payload;default:return e}}}),he=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d)(Object(l.a)(p.a,i.logger));s.a.render(o.a.createElement(c.a,{store:Object(l.e)(de,{posts:[],sources:[],addSource:"",updatePost:"",selectPost:"",sourceCreateModule:!0},he)},o.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports={body:"PostCard_body__3hbvz",bodyFlex:"PostCard_bodyFlex__1TYUE",bodyRead:"PostCard_bodyRead__1JMP2",title:"PostCard_title__131Au",secondLine:"PostCard_secondLine__KD5pA",source:"PostCard_source__3-ict",text:"PostCard_text__2kRll",statusLine:"PostCard_statusLine__1d_h8",divider:"PostCard_divider__3wj7f"}},9:function(e,t,a){e.exports={body:"PostShow_body__1NQ_n",title:"PostShow_title__2HfCj",secondLine:"PostShow_secondLine__9dJW5",author:"PostShow_author__1S4ap",buttonsWrapper:"PostShow_buttonsWrapper__10ox5",text:"PostShow_text__27vjt",divider:"PostShow_divider__zhco3",statusLine:"PostShow_statusLine__3higE"}}},[[34,1,2]]]);
//# sourceMappingURL=main.c9c0aa73.chunk.js.map