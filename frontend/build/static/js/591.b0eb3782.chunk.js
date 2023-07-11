"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[591],{6591:function(e,n,t){t.r(n);var r=t(4165),a=t(5861),i=t(885),o=t(2791),c=t(4880),u=t(2810),l=t(3999),s=t(5434),d=t(9895),f=t(9508),p=t(542),h=t(1255),v=(t(9568),t(3108)),m=t(5094),x=t(3373),y=t(184);n.default=function(){var e=(0,p.k6)(),n=(0,f.x)(),t=n.isLoading,b=n.error,Z=n.sendRequest,j=n.clearError,C=(0,c.useParams)().placeId,g=(0,o.useState)(),V=(0,i.Z)(g,2),E=V[0],N=V[1],w=(0,o.useContext)(v.V),T=(0,m.c)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),k=(0,i.Z)(T,3),I=k[0],A=k[1],S=k[2];(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z("https://localhost:5000/api"+"/places/".concat(C));case 3:n=e.sent,N(n.place),S({title:{value:n.place.title,isValid:!0},description:{value:n.place.description,isValid:!0}},!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[Z,C,S]);var P=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.prev=1,n.next=4,Z("https://localhost:5000/api"+"/places/".concat(C),"PATCH",JSON.stringify({title:I.inputs.title.value,description:I.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+w.token});case 4:n.sent,e.push("/"+w.userId+"/places"),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(1);case 10:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}();return t?(0,y.jsx)("div",{className:"center",children:(0,y.jsx)(d.Z,{})}):E||b?(0,y.jsxs)(o.Fragment,{children:[(0,y.jsx)(s.Z,{error:b,onClear:j}),!t&&E&&(0,y.jsxs)("form",{className:"place-form",onSubmit:P,children:[(0,y.jsx)(u.Z,{id:"title",element:"input",type:"text",label:"Title",validators:[(0,h.hg)()],errorText:"Please enter a valid title.",onInput:A,initialValue:E.title,initialValid:I.inputs.title.isValid}),(0,y.jsx)(u.Z,{id:"description",element:"textarea",label:"Description",validators:[(0,h.CP)(5)],errorText:"Please enter a valid description (min. 5 characters).",onInput:A,initialValue:E.description,initialValid:I.inputs.description.isValid}),(0,y.jsx)(l.Z,{type:"submit",disabled:!I.isValid,children:"UPDATE PLACE"})]})]}):(0,y.jsx)("div",{className:"center",children:(0,y.jsx)(x.Z,{children:(0,y.jsx)("h2",{children:"Could not find place!"})})})}},3999:function(e,n,t){t.d(n,{Z:function(){return i}});t(2791);var r=t(1523),a=t(184),i=function(e){return e.href?(0,a.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?(0,a.jsx)(r.rU,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):(0,a.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})}},2810:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(885),a=t(1413),i=t(2791),o=t(1255),c=t(184),u=function(e,n){switch(n.type){case"CHANGE":return(0,a.Z)((0,a.Z)({},e),{},{value:n.val,isValid:(0,o.Gu)(n.val,n.validators)});case"TOUCH":return(0,a.Z)((0,a.Z)({},e),{},{isTouched:!0});default:return e}};function l(e){var n=(0,i.useReducer)(u,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),t=(0,r.Z)(n,2),a=t[0],o=t[1],l=e.id,s=e.onInput,d=a.value,f=a.isValid;(0,i.useEffect)((function(){e.onInput(l,d,f)}),[l,d,f,s]);var p=function(n){o({type:"CHANGE",val:n.target.value,validators:e.validators})},h=function(){o({type:"TOUCH"})},v="input"===e.element?(0,c.jsx)("input",{onChange:p,id:e.id,type:e.type,placeholder:e.placeholder,value:a.value,onBlur:h}):(0,c.jsx)("textarea",{onChange:p,id:e.id,rows:e.rows||3,value:a.value,onBlur:h});return(0,c.jsxs)("div",{className:"form-control ".concat(!a.isValid&&a.isTouched&&"form-control--invalid"),children:[(0,c.jsx)("label",{htmlFor:e.id,children:e.label}),v,!a.isValid&&a.isTouched&&(0,c.jsx)("p",{children:e.errorText})]})}},3373:function(e,n,t){t.d(n,{Z:function(){return a}});t(2791);var r=t(184),a=function(e){return(0,r.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}},5434:function(e,n,t){t(2791);var r=t(2921),a=t(3999),i=t(184);n.Z=function(e){return(0,i.jsx)(r.Z,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,i.jsx)(a.Z,{onClick:e.onClear,children:"Okay"}),children:(0,i.jsx)("p",{children:e.error})})}},2921:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(1413),a=t(2791),i=t(4164),o=t(549),c=t(9422),u=t(184),l=function(e){var n=(0,u.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,u.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,u.jsx)("h2",{children:e.header})}),(0,u.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[(0,u.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,u.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return i.createPortal(n,document.getElementById("modal-hook"))},s=function(e){return(0,u.jsxs)(a.Fragment,{children:[e.show&&(0,u.jsx)(c.Z,{onClick:e.onCancel}),(0,u.jsx)(o.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,u.jsx)(l,(0,r.Z)({},e))})]})}},5094:function(e,n,t){t.d(n,{c:function(){return u}});var r=t(885),a=t(2167),i=t(1413),o=t(2791),c=function(e,n){switch(n.type){case"INPUT_CHANGE":var t=!0;for(var r in e.inputs)e.inputs[r]&&(t=r===n.inputId?t&&n.isValid:t&&e.inputs[r].isValid);return(0,i.Z)((0,i.Z)({},e),{},{inputs:(0,i.Z)((0,i.Z)({},e.inputs),{},(0,a.Z)({},n.inputId,{value:n.value,isValid:n.isValid})),isValid:t});case"SET_DATA":return{inputs:n.inputs,isValid:n.formIsValid};default:return e}},u=function(e,n){var t=(0,o.useReducer)(c,{inputs:e,isValid:n}),a=(0,r.Z)(t,2),i=a[0],u=a[1];return[i,(0,o.useCallback)((function(e,n,t){u({type:"INPUT_CHANGE",value:n,isValid:t,inputId:e})}),[]),(0,o.useCallback)((function(e,n){u({type:"SET_DATA",inputs:e,formIsValid:n})}),[])]}},9508:function(e,n,t){t.d(n,{x:function(){return c}});var r=t(4165),a=t(5861),i=t(885),o=t(2791),c=function(){var e=(0,o.useState)(!1),n=(0,i.Z)(e,2),t=n[0],c=n[1],u=(0,o.useState)(null),l=(0,i.Z)(u,2),s=l[0],d=l[1],f=(0,o.useRef)([]),p=(0,o.useCallback)(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,i,o,u,l,s=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:"GET",a=s.length>2&&void 0!==s[2]?s[2]:null,i=s.length>3&&void 0!==s[3]?s[3]:{},c(!0),o=new AbortController,f.current.push(o),e.prev=6,e.next=9,fetch(n,{method:t,body:a,headers:i,signal:o.signal});case 9:return u=e.sent,e.next=12,u.json();case 12:if(l=e.sent,f.current=f.current.filter((function(e){return e!==o})),u.ok){e.next=16;break}throw new Error(l.message);case 16:return c(!1),e.abrupt("return",l);case 20:throw e.prev=20,e.t0=e.catch(6),d(e.t0.message),c(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(n){return e.apply(this,arguments)}}(),[]);return(0,o.useEffect)((function(){return function(){f.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:t,error:s,sendRequest:p,clearError:function(){d(null)}}}},1255:function(e,n,t){t.d(n,{Ox:function(){return s},CP:function(){return l},hg:function(){return u},Gu:function(){return d}});var r=t(8192);var a="REQUIRE",i="MINLENGTH",o="MAXLENGTH",c="EMAIL",u=function(){return{type:a}},l=function(e){return{type:i,val:e}},s=function(){return{type:c}},d=function(e,n){var t,u=!0,l=function(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=(0,r.Z)(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){u=!0,o=e},f:function(){try{c||null==t.return||t.return()}finally{if(u)throw o}}}}(n);try{for(l.s();!(t=l.n()).done;){var s=t.value;s.type===a&&(u=u&&e.trim().length>0),s.type===i&&(u=u&&e.trim().length>=s.val),s.type===o&&(u=u&&e.trim().length<=s.val),"MIN"===s.type&&(u=u&&+e>=s.val),"MAX"===s.type&&(u=u&&+e<=s.val),s.type===c&&(u=u&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){l.e(d)}finally{l.f()}return u}},9568:function(){}}]);
//# sourceMappingURL=591.b0eb3782.chunk.js.map