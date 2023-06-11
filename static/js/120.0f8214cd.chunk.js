"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[120],{5466:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r,a,i,o,c,s,d,l,m,u=t(2791),h=t(9434),x=t(5218),p=t(890),b=t(3239),f=t(3634),j=t(1775),Z=t(1032),g=t(168),v=t(225),y=v.Z.div(r||(r=(0,g.Z)(["\n  margin: 0 auto;\n  padding: 1.25rem;\n  text-align: center;\n"]))),C=t(184),w=function(n){var e=n.children;return(0,C.jsx)(y,{children:e})},k=t(5705),_=t(6151),P=(0,v.Z)(k.l0)(a||(a=(0,g.Z)(["\n  padding: 1rem;\n  width: 30rem;\n  border: 1px solid black;\n  border-radius: 5px;\n  margin: 0 auto;\n  text-align: center;\n"]))),S=v.Z.div(i||(i=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 1rem;\n"]))),A=(v.Z.button(o||(o=(0,g.Z)(["\n  display: inline-block;\n  width: 10rem;\n  cursor: pointer;\n  border-radius: 0.25rem;\n  border: 0.0625rem solid gray;\n  :hover,\n  :focus {\n    color: rgb(255, 255, 255);\n    background-color: rgb(0, 0, 255);\n  }\n"]))),(0,v.Z)(k.gN)(c||(c=(0,g.Z)(["\n  display: block;\n  padding: 0.5rem;\n  width: 20rem;\n"])))),q=(0,v.Z)(k.Bc)(s||(s=(0,g.Z)(["\n  font-size: 14px;\n  color: red;\n"]))),T=v.Z.h2(d||(d=(0,g.Z)(["\n  margin-top: 0;\n  margin-bottom: 1rem;\n"]))),I=t(6727),L=I.Ry().shape({name:I.Z_().required("Required field!"),number:I.Z_().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,"Phone number is not valid").required("Required field!")}),N=function(n){var e=n.title,t=n.defaultName,r=void 0===t?"":t,a=n.defaultNumber,i=void 0===a?"":a,o=n.handleSubmit;return(0,C.jsx)(k.J9,{initialValues:{name:r,number:i},validationSchema:L,onSubmit:o,children:(0,C.jsxs)(P,{children:[(0,C.jsx)(T,{children:e}),(0,C.jsxs)(S,{children:[(0,C.jsx)("div",{children:(0,C.jsxs)("label",{children:["Contact name",(0,C.jsx)(A,{type:"text",name:"name",placeholder:"John Smith",required:!0}),(0,C.jsx)(q,{name:"name",component:"p"})]})}),(0,C.jsx)("div",{children:(0,C.jsxs)("label",{children:["Phone number",(0,C.jsx)(A,{type:"tel",name:"number",placeholder:"+145678265867",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,C.jsx)(q,{name:"number",component:"p"})]})}),(0,C.jsx)(_.Z,{variant:"contained",type:"submit",sx:{width:200},children:e})]})]})})},U=function(){var n=(0,h.I0)(),e=(0,Z.gW)();return(0,C.jsx)(N,{title:"Add contact",handleSubmit:function(t,r){e.find((function(n){return n.name.toLowerCase()===t.name.toLowerCase()}))?x.Am.error('Contact "'.concat(t.name.toUpperCase(),'" is alredy in contacts')):e.find((function(n){return n.number===t.number}))?x.Am.error('Contact with number"'.concat(t.number,'" is alredy in contacts')):(n((0,f.uK)(t)),r.resetForm())}})},E=t(6459),R=t(4808),z=function(){var n=(0,h.I0)(),e=(0,Z.L0)(),t=!(0,Z.wg)();return(0,C.jsx)(E.Z,{variant:"standard",label:"Enter name to filter...",type:"text",size:"small",sx:{mt:1,mb:1},value:e,disabled:t,onChange:function(e){var t=e.currentTarget.value;n((0,R.x)(t))}})},W=v.Z.ul(l||(l=(0,g.Z)(["\n  margin-top: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  text-align: left;\n"]))),F=v.Z.li(m||(m=(0,g.Z)(["\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n"]))),J=t(9658),K=t(1614),B=t(9439),D=t(1889),G=t(5391),V=t(4554),$=t(1413),H=function(n){var e=n.contact,t=n.handleClose,r=e.id,a=e.name,i=e.number,o=(0,h.I0)(),c=(0,Z.gW)();return(0,C.jsx)(N,{title:" Update contact",defaultName:a,defaultNumber:i,handleSubmit:function(n){c.find((function(e){var t=e.name,a=e.id;return t.toLowerCase()===n.name.toLowerCase()&&a!==r}))?x.Am.error('Contact "'.concat(n.name.toUpperCase(),'" is alredy in contacts')):c.find((function(e){var t=e.number,a=e.id;return t===n.number&&a!==r}))?x.Am.error('Contact with number"'.concat(n.number,'" is alredy in contacts')):(o((0,f.Tk)((0,$.Z)((0,$.Z)({},n),{},{id:r}))),t())}})},M={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"75%",bgcolor:"background.paper",border:"2px solid #a19e9e",borderRadius:"3px",boxShadow:24,p:4};function O(n){var e=n.open,t=n.handleClose,r=n.contact;return(0,C.jsx)(G.Z,{open:e,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,C.jsxs)(V.Z,{sx:M,children:[(0,C.jsx)(p.Z,{id:"modal-modal-title",variant:"h6",component:"h2",sx:{display:"flex",justifyContent:"center",mb:2},children:"Contact Editor"}),(0,C.jsx)(H,{contact:r,handleClose:t})]})})}var Q=function(n){var e=n.contact,t=e.id,r=e.name,a=e.number,i=(0,h.I0)(),o=(0,u.useState)(!1),c=(0,B.Z)(o,2),s=c[0],d=c[1];return(0,C.jsxs)(D.ZP,{container:!0,spacing:3,children:[(0,C.jsx)(D.ZP,{item:!0,xs:4,children:(0,C.jsx)("p",{children:r})}),(0,C.jsx)(D.ZP,{item:!0,xs:4,children:(0,C.jsx)("p",{children:a})}),(0,C.jsx)(D.ZP,{item:!0,xs:2,children:(0,C.jsx)(_.Z,{type:"button",variant:"contained",onClick:function(){return i((0,f.GK)(t))},children:"Delete"})}),(0,C.jsxs)(D.ZP,{item:!0,xs:2,children:[(0,C.jsx)(_.Z,{type:"button",variant:"contained",onClick:function(){return d(!0)},children:"Edit"}),(0,C.jsx)(O,{open:s,handleClose:function(){return d(!1)},contact:e})]})]})},X=function(){var n=(0,Z.wg)();return n?n.length>0?(0,C.jsx)(K.Z,{maxWidth:"sm",children:(0,C.jsx)(W,{children:n.map((function(n){return(0,C.jsx)(F,{children:(0,C.jsx)(Q,{contact:n})},n.id)}))})}):(0,C.jsx)(J.Z,{severity:"warning",sx:{marginTop:1},children:"There are no contacts matching the filter"}):(0,C.jsx)(J.Z,{severity:"warning",sx:{marginTop:1},children:"There are no contacts in adress book..."})};var Y=function(){var n=(0,h.I0)(),e=(0,h.v9)(j.xU),t=(0,h.v9)(j.zh),r=(0,Z.aC)().user;return(0,u.useEffect)((function(){n((0,f.yF)())}),[n]),(0,C.jsx)("main",{children:t?x.Am.error("Unable to load data from database!"):(0,C.jsxs)(w,{children:[(0,C.jsx)(p.Z,{variant:"h3",component:"h1",color:"primary.main",children:'Contacts of user "'.concat(r.name,'"')}),(0,C.jsx)(U,{title:"Add contact"}),(0,C.jsx)(p.Z,{variant:"h5",component:"h2",color:"primary.main",mt:"10px",align:"center",children:"Contacts list"}),(0,C.jsx)(z,{}),e?(0,C.jsx)("div",{children:(0,C.jsx)(b.Z,{})}):(0,C.jsx)(X,{})]})})}}}]);
//# sourceMappingURL=120.0f8214cd.chunk.js.map