(this.webpackJsonpnewmarkethotels=this.webpackJsonpnewmarkethotels||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),o=n.n(s),c=(n(17),n(6)),i=n.n(c),u=n(7),l=n(2),p=n(3),h=n(5),d=n(4),m=n(11),v=n(1),f=new function e(){Object(l.a)(this,e),Object(v.h)(this,{loading:!0,isLoggedIn:!1,username:""})},g=n(10),b=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"inputField"},r.a.createElement("input",{className:"input",type:this.props.type,placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){return e.props.onChange(t.target.value)}}))}}]),n}(r.a.Component),j=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"submitButton"},r.a.createElement("button",{className:"btn",disabled:this.props.disabled,onClick:function(){return e.props.onClick()}},this.props.text))}}]),n}(r.a.Component),w=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={username:"",password:"",buttonDisabled:!1},a}return Object(p.a)(n,[{key:"setInputValue",value:function(e,t){(t=t.trim()).length>12||this.setState(Object(g.a)({},e,t))}},{key:"resetForm",value:function(){this.setState({username:"",password:"",buttonDisabled:!1})}},{key:"doLogIn",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.username){e.next=2;break}return e.abrupt("return");case 2:if(this.state.password){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,fetch("/login",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})});case 7:return t=e.sent,e.next=10,t.json();case 10:(n=e.sent)&&n.success?(f.isLoggedIn=!0,f.username=n.username):n&&!1===n.success&&(this.resetForm(),alert(n.msg)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0),this.resetForm();case 18:case"end":return e.stop()}}),e,this,[[4,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"loginForm"},"Log In",r.a.createElement(b,{type:"text",placeholder:"THIS HASNT UPDATED",value:this.state.username?this.state.username:"",onChange:function(t){return e.setInputValue("username",t)}}),r.a.createElement(b,{type:"password",placeholder:"password",value:this.state.password?this.state.password:"",onChange:function(t){return e.setInputValue("password",t)}}),r.a.createElement(j,{text:"Login",onClick:function(){return e.doLogIn()}}))}}]),n}(r.a.Component),k=(n(20),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/isLoggedIn",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success?(f.loading=!1,f.isLoggedIn=!0,f.username=n.username,this.render()):(f.loading=!1,f.isLoggedIn=!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),f.loading=!1,f.isLoggedIn=!1;case 14:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"DoLogOut",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/logout",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success&&(f.isLoggedIn=!1,f.username=""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return f.loading?r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},"Loading, please wait...")):f.isLoggedIn?r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},"Welcome ",f.username,r.a.createElement(j,{text:"Log Out",disabled:!1,onClick:function(){return e.DoLogOut()}}))):r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},r.a.createElement(w,null)))}}]),n}(r.a.Component)),O=Object(m.a)(k);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.3093b826.chunk.js.map