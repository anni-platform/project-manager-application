(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){"use strict";var a,r,c,o=n(53),l=n.n(o),i=(n(2),n(3),n(10)),u=n.n(i),m=n(21),s=n(4),d=(n(0),n(14),n(29)),p=n.n(d),f=n(5),b=n.n(f),j=n(11),v=n.n(j),E=["imageCollection","prose","motion"],g=["moodBoard","storyBoard","styleFrames"],O=(a={},Object(s.a)(a,"prose","prose"),Object(s.a)(a,"motion","motion"),Object(s.a)(a,"imageCollection",["moodBoard","storyBoard","styleFrames"]),a),h=(r={},Object(s.a)(r,"imageCollection","Image collection"),Object(s.a)(r,"prose","Script"),Object(s.a)(r,"motion","Animation"),r),y=(c={},Object(s.a)(c,"moodBoard","Mood board"),Object(s.a)(c,"storyBoard","Story board"),Object(s.a)(c,"styleFrames","Style frames"),c),P=b.a.oneOf(E),S=b.a.oneOf(g),w=b.a.shape({id:b.a.string,name:b.a.string,type:P.isRequired,subtype:S}),C=(b.a.shape({name:b.a.string,sections:b.a.arrayOf(w)}),{overviewLink:"Overview"}),k=[{id:v()("Script"),name:"Script",type:"prose"},{id:v()("Mood board"),name:"Mood board",type:"imageCollection",subtype:"moodBoard"},{id:v()("Story board"),name:"Story board",type:"imageCollection",subtype:"storyBoard"},{id:v()("Style frames"),name:"Style frames",type:"imageCollection",subtype:"styleFrames"},{id:v()("Animation"),name:"Animation",type:"motion"}];function I(e){return{id:v()(e),name:e,sections:k}}var x,A=(x="projects","".concat("anni-pma-").concat(x)),N=[],D=function(){var e=Object(m.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.getItem(A);case 3:if(t=e.sent){e.next=8;break}return e.next=7,p.a.setItem(A,N);case 7:return e.abrupt("return",N);case 8:return e.abrupt("return",t);case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}},e,null,[[0,11]])}));return function(){return e.apply(this,arguments)}}();function L(e){if(e)return p.a.setItem(A,e)}n.d(t,"a",function(){return F}),n.d(t,"n",function(){return U}),n.d(t,"g",function(){return"imageCollection"}),n.d(t,"i",function(){return"prose"}),n.d(t,"h",function(){return"motion"}),n.d(t,"f",function(){return"moodBoard"}),n.d(t,"c",function(){return O}),n.d(t,"e",function(){return h}),n.d(t,"d",function(){return y}),n.d(t,"l",function(){return C}),n.d(t,"b",function(){return k}),n.d(t,"j",function(){return I}),n.d(t,"k",function(){return D}),n.d(t,"m",function(){return L});var R,T="swbiv6r9kwfs4os";if(Object({NODE_ENV:"production",PUBLIC_URL:"https://anni.io/project-manager-application",REACT_APP_BASE_PATH:"/project-manager-application",REACT_APP_DROPBOX_CLIENT_ID:"swbiv6r9kwfs4os"}).REACT_APP_INTEG_TEST){var _=n(146);T=_.integClientId,R=_.integAccessToken}var B=l()({clientId:T,authRedirect:"https://anni.io/project-manager-application",defaultAccessToken:R}),F=(B.DropboxContext,B.DropboxProvider),U=B.useDropboxClient},12:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(){return r.a.createElement("div",null,"Loading...")}},146:function(e,t){},147:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),o=n(17),l=n.n(o),i=n(1);function u(e){var t=e.children;return c.a.createElement(i.a,null,t)}n(147);var m=n(3),s=n(14),d=n.n(s),p=n(6),f=n(8),b=function(e){var t="/project-manager-application";return"/"===e?"".concat(t,"/"):"".concat(t,"/").concat(e,"/")},j={projectNameLabel:"Project name",projectNamePlaceholder:"Project B",noProjects:"No projects",createProject:"Create project",removeProject:"Remove project",removeProjectAriaLabel:"Remove {name} project",errorProjectNameTaken:"Sorry, that project name is already taken."},v=function(e){return j.removeProjectAriaLabel.replace(/\{.*?\}/,e)};function E(e){var t=e.id,n=e.name,a=e.removeProject;return c.a.createElement("div",null,c.a.createElement("h3",null,c.a.createElement(f.a,{to:b(t)},n)),c.a.createElement("button",{"aria-label":v(n),onClick:function(){return a(n)}},j.removeProject))}var g="projectNameErrorId";function O(e){var t=e.addProject,n=e.validateProject,o=Object(r.useState)(""),l=Object(a.a)(o,2),u=l[0],m=l[1],s=Object(r.useState)(null),d=Object(a.a)(s,2),p=d[0],f=d[1];return c.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),u){var a=Object(i.j)(u),r=n(a);null===r?(t(a),m("")):f(r)}}},c.a.createElement("label",{htmlFor:"projectName"},j.projectNameLabel,c.a.createElement("input",{"aria-describedby":p&&g,"aria-invalid":!!p||null,id:"projectName",type:"text",className:"input",placeholder:j.projectNamePlaceholder,value:u,onChange:function(e){f(null),m(e.target.value)}})),p&&c.a.createElement("p",{style:{color:"magenta"},id:g},p.message),c.a.createElement("button",{type:"submit",id:"create-project-form-button"},j.createProject))}function h(e){var t=e.projects,n=e.setProjects,a=function(e){return n(t.filter(function(t){return t.name!==e}))};return c.a.createElement("div",{id:"dashboard-screen"},c.a.createElement("h2",null,"Projects"),0===t.length&&c.a.createElement("p",null,j.noProjects),t.map(function(e){return c.a.createElement(E,Object.assign({},e,{key:e.name,removeProject:a}))}),c.a.createElement(O,{addProject:function(e){return n([].concat(Object(p.a)(t),[e]))},validateProject:function(e){var n=e.name;return t.find(function(e){return e.name===n})?{message:j.errorProjectNameTaken}:null}}))}var y=n(55),P="PROJECT_SECTION",S="PROJECT_SECTION_NAV",w="404 - Page not found",C=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,w))},k=n(22),I=n(12),x=c.a.lazy(function(){return Promise.all([n.e(2),n.e(5)]).then(n.bind(null,354))});function A(e){return c.a.createElement("div",null,c.a.createElement(r.Suspense,{fallback:c.a.createElement(I.a,null)},c.a.createElement(x,e)))}var N=n(4),D=n(10),L=n.n(D),R=n(21),T=n(56),_=n.n(T),B=n(57),F=n.n(B),U=n(23),M=Object(U.SortableHandle)(function(){return c.a.createElement("span",{style:{border:"1px dotted gold",cursor:"grab",padding:8,display:"inline-block"}},":::")}),H=Object(U.SortableElement)(function(e){var t=e.renderItem,n=void 0===t?function(){return"feed me"}:t,a=e.value;return c.a.createElement("li",null,c.a.createElement(M,null),"string"===typeof n?a:n(a))}),J=Object(U.SortableContainer)(function(e){var t=e.items,n=e.listStyle,a=void 0===n?{}:n,r=Object(k.a)(e,["items","listStyle"]);return c.a.createElement("ul",{style:a},t.map(function(e,t){return c.a.createElement(H,Object.assign({key:"item-".concat(t),index:t,value:e},r))}))}),W=["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"];function G(e){var t=e.axis,n=void 0===t?"y":t,o=e.defaultItems,l=void 0===o?W:o,i=e.onReorder,u=void 0===i?function(){return null}:i,m=Object(k.a)(e,["axis","defaultItems","onReorder"]),s=Object(r.useState)(l),d=Object(a.a)(s,2),f=d[0],b=d[1];Object(r.useEffect)(function(){var e=F()(l,f);e.length>0&&b([].concat(Object(p.a)(f),Object(p.a)(e)))}),Object(r.useEffect)(function(){l!==f&&b(l)},[l]);return c.a.createElement(J,Object.assign({},m,{axis:n,items:f,onSortEnd:function(e){var t=e.oldIndex,n=e.newIndex,a=Object(U.arrayMove)(f,t,n);u(a),b(a)},useDragHandle:!0}))}function V(e){var t=e.removeFile;return function(e){var n=e.file,a=e.id,r=e.url,o=e.preview,l=e.title,i=e.description;return c.a.createElement("figure",{style:{maxWidth:300,position:"relative"}},c.a.createElement("img",{src:r||o,alt:l||i||n&&n.name,style:{maxWidth:"100%",height:"auto"}}),c.a.createElement("figcaption",null,i),c.a.createElement("button",{onClick:function(){return t(a)}},"\xd7 delete"))}}var z={display:"flex",flexWrap:"wrap"},q="imageCollectionUploadInput";function X(e){var t=Object(r.useState)(e),n=Object(a.a)(t,2);return{isFileDropActive:n[0],setIsActive:n[1]}}function $(e){var t=e.children,n=e.onDrop,a=X(!1),r=a.isFileDropActive,o=a.setIsActive;return c.a.createElement("div",{onDropCapture:function(e){var t;e.preventDefault(),e.preventDefault(),(t=e.dataTransfer.items?Object(p.a)(e.dataTransfer.items).filter(function(e){return"file"===e.kind}).map(function(e){return e.getAsFile()}):Object(p.a)(e.dataTransfer.files))&&n(t)},onDragOverCapture:function(e){e.preventDefault(),o(!0)},onDragLeaveCapture:function(){return o(!1)},style:{padding:8,background:r?"MediumSpringGreen":"transparent"}},t)}function K(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(R.a)(L.a.mark(function e(t){var n,a,r,c,o,l,i;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.newFiles,a=t.collection,r=t.save,c=t.uploadImage,e.next=3,Promise.all(n.map(function(e){var t=e.file;return c({file:t})}));case 3:o=e.sent,l=o.reduce(function(e,t,a){var r=t.url;return Object(m.a)({},e,Object(N.a)({},n[a].id,r))},{}),i=a.map(function(e){var t=l[e.id];return t?Object(m.a)({},e,{url:t,uploaded:!0}):e}),r({collection:i});case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Y(e){var t=e.collection,n=e.save,o=Object(r.useState)(t||[]),l=Object(a.a)(o,2),i=l[0],u=l[1],s=Object(r.useState)(!1),f=Object(a.a)(s,2),b=f[0],j=f[1],v=Object(r.useState)(null),E=Object(a.a)(v,2),g=E[0],O=E[1],h=Object(r.useState)(!1),y=Object(a.a)(h,2),P=y[0],S=y[1],w=X().isFileDropActive,C=function(e){e&&function(e){var n=!d()(t,e||i);return S(n),n}(e)&&u(e)};function k(e){var t=e.map(function(e){return{id:_()(e.name),name:e.name,file:e,preview:URL.createObjectURL&&URL.createObjectURL(e),uploaded:!1}});C([].concat(Object(p.a)(i),Object(p.a)(t)))}function I(){return(I=Object(R.a)(L.a.mark(function a(){var r;return L.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(O(null),!(r=i.filter(function(e){return!e.uploaded})).length){a.next=9;break}return j(!0),a.next=6,K(Object(m.a)({},e,{collection:i,newFiles:r,save:n})).catch(O);case 6:j(!1),a.next=10;break;case 9:d()(t,i)||n({collection:i});case 10:case"end":return a.stop()}},a)}))).apply(this,arguments)}return Object(r.useEffect)(function(){C(t)},[t]),c.a.createElement($,{onDrop:k},i.length>0?c.a.createElement(G,{axis:"xy",defaultItems:i,listStyle:z,onReorder:C,renderItem:V({removeFile:function(e){C(i.filter(function(t){return t.id!==e}))}})}):c.a.createElement("p",null,"No images."),c.a.createElement("label",{htmlFor:q},"Upload image ",w&&"ACTIVE!"),c.a.createElement("input",{id:q,name:q,type:"file",accept:"image/png, image/jpeg",multiple:!0,onChange:function(e){var t=e.target;k(Object(p.a)(t.files))}}),b?"Saving...":c.a.createElement("button",{disabled:!P,onClick:function(){return I.apply(this,arguments)}},"Save"),g&&c.a.createElement("p",{style:{color:"red"}},g.message))}Y.defaultProps={uploadImage:console.log};var Z=c.a.lazy(function(){return n.e(4).then(n.bind(null,355))});function ee(e){return c.a.createElement("div",null,c.a.createElement(r.Suspense,{fallback:c.a.createElement(I.a,null)},c.a.createElement(Z,e)))}function te(e){var t=e.updateProjectSection,n=Object(k.a)(e,["updateProjectSection"]),a=n.id,r=n.name,o=n.project,l=n.subtype,u=n.type,s=Object(m.a)({},n,{save:function(e){return t(o.id,a,e)}});return c.a.createElement("div",{"data-testid":P},c.a.createElement("h1",null,o.name," - ",r),function(e,t){switch(e){case i.i:return c.a.createElement(A,t);case i.g:return c.a.createElement(Y,t);case i.h:return c.a.createElement(ee,t);default:return c.a.createElement("div",null,"Section content pending for type: ",e)}}(u,s),l&&" - ".concat(l))}function ne(e){var t=e.project;return c.a.createElement("div",{"data-testid":P},c.a.createElement("h1",null,t.name),c.a.createElement("p",null,t.details))}var ae=n(11),re=n.n(ae),ce={newProjectSectionNameLabel:"New project section name",newProjectSectionNamePlaceholder:"Section name",saveNewProjectSectionButtonLabel:"Add new project section"},oe="type",le="subtype",ie={name:"",type:i.g,subtype:i.f},ue=function(e,t){return e===t.type},me=function(e,t){return e===t.subtype},se=function(e,t){return Object(m.a)({},e,t)};function de(e){var t=e.saveNewSection,n=Object(r.useReducer)(se,ie),o=Object(a.a)(n,2),l=o[0],u=o[1],s=function(e){return u({subtype:e})};return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(Object(m.a)({},l,{id:re()(l.name)})),u(ie)}},c.a.createElement("label",null,ce.newProjectSectionNameLabel,c.a.createElement("input",{value:l.name,onChange:function(e){var t,n=e.target;return t=n.value,u({name:t})},name:"newProjectSectionName",placeholder:ce.newProjectSectionNamePlaceholder})),c.a.createElement("ul",null,Object.entries(i.c).map(function(e){var t=Object(a.a)(e,2),n=t[0],r=t[1];return c.a.createElement("li",{key:n},c.a.createElement("label",null,c.a.createElement("input",{checked:ue(n,l),type:"radio",name:oe,onChange:function(){return function(e){u({type:e}),s(Array.isArray(i.c[e])?i.c[e][0]:null)}(n)},value:n}),i.e[n]),ue(n,l)&&Array.isArray(r)&&c.a.createElement("ul",null,r.map(function(e){return c.a.createElement("li",{key:e},c.a.createElement("label",null,c.a.createElement("input",{checked:me(e,l),type:"radio",name:le,onChange:function(){return s(e)},value:n}),i.d[e]))})))})),c.a.createElement("button",{type:"submit"},ce.saveNewProjectSectionButtonLabel))}var pe={cancel:"Cancel",saveChanges:"Save Changes"};function fe(e){var t=e.project,n=e.updateProject,o=e.toggleEditing,l=Object(r.useState)(t),i=Object(a.a)(l,2),u=i[0],s=i[1],d=u.sections;return c.a.createElement("div",null,c.a.createElement(G,{defaultItems:d,onReorder:function(e){return s(Object(m.a)({},t,{sections:e}))},renderItem:function(e){var t=e.name;return c.a.createElement("strong",null,t)}}),c.a.createElement(de,{project:u,saveNewSection:function(e){s({id:t.id,sections:[].concat(Object(p.a)(d),[e])})}}),c.a.createElement("button",{onClick:function(){n(u),o()}},pe.saveChanges),c.a.createElement("button",{onClick:o},pe.cancel))}var be=Object(y.a)(function(e){return e.projects},function(e){return e.projectId},function(e,t){return e.find(function(e){return e.id===t})});function je(e){var t=Object(r.useState)(!1),n=Object(a.a)(t,2),o=n[0],l=n[1],u=be(e),m=e.updateProject,s=e.updateProjectSection,d=e.uploadImage;if(!u)return c.a.createElement(C,null);var p=c.a.createElement("ul",{"data-testid":S},c.a.createElement("li",null,c.a.createElement(f.a,{to:"./"},i.l.overviewLink)),u.sections.map(function(e,t){var n=e.id,a=e.name;return c.a.createElement("li",{key:n},c.a.createElement(f.a,{to:n},a))}),c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){return l(!0)}},"Edit project sections"))),b=c.a.createElement(fe,{project:u,toggleEditing:function(){return l(!1)},updateProject:m});return c.a.createElement("div",null,c.a.createElement(f.b,null,c.a.createElement(ne,{default:!0,project:u}),u.sections.map(function(e,t){return c.a.createElement(te,Object.assign({key:e.id,path:e.id,project:u,updateProjectSection:s,uploadImage:d},e))})),o?b:p)}je.defaultProps={updateProject:function(){return null}};var ve,Ee="abce".split("").map(function(e){return{id:"project-".concat(e),name:"Project ".concat(e.toUpperCase()),details:"Details about project ".concat(e.toUpperCase()),sections:i.b}}),ge=(n(177),function(){return c.a.createElement("div",null,"Home")});function Oe(e){var t=e.client,n=e.authUrl,o=e.logout,l=Object(r.useState)(null),i=Object(a.a)(l,2),u=i[0],m=i[1];return Object(r.useEffect)(function(){t&&(window.history.pushState("",document.title,window.location.pathname+window.location.search),t.usersGetCurrentAccount().then(m))},[]),t?u?c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("h2",null,u.name.familiar_name),c.a.createElement("img",{style:{borderRadius:"50%"},with:50,height:50,src:u.profile_photo_url,alt:u.name.display_name}),c.a.createElement("button",{onClick:o},"Logout"))):c.a.createElement(I.a,null):c.a.createElement("a",{href:n},"Login to Dropbox")}function he(e){var t=e.defaultProjects,n=void 0===t?Ee:t,o=Object(r.useState)(!1),l=Object(a.a)(o,2),u=l[0],s=l[1],p=Object(i.n)(),j=p.client,v=p.updateDatabase,E=p.uploadImage;ve=n;var g=Object(r.useState)(n),O=Object(a.a)(g,2),y=O[0],P=O[1];function S(e){P(y.map(function(t){return t.id===e.id?Object(m.a)({},t,e):t}))}return Object(r.useEffect)(function(){j||(window.location.href="https://anni.io/project-manager-application")},[j]),Object(r.useEffect)(function(){j&&!d()(ve,y)&&(Object(i.m)(y),v({data:{projects:y}}),ve=y)}),c.a.createElement("div",{className:"App",id:"anni-project-manager-app"},c.a.createElement("header",null,"Anni Project Manager Application",c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(f.a,{to:b("/")},"Home")),j&&c.a.createElement("li",null,c.a.createElement(f.a,{to:b("dashboard")},"Dashboard")),c.a.createElement("li",null,c.a.createElement(Oe,p)))),c.a.createElement(f.b,{basePath:"/project-manager-application"},c.a.createElement(ge,{path:"/project-manager-application"}),c.a.createElement(h,{path:b("dashboard"),projects:y,setProjects:P}),c.a.createElement(je,{path:b(":projectId/*"),projects:y,updateProject:S,updateProjectSection:function(e,t,n){var a=y.find(function(t){return t.id===e}),r=a.sections.find(function(e){return e.id===t});a&&r&&S(Object(m.a)({},a,{sections:a.sections.map(function(e){return delete e.editorContent,e.id===t?Object(m.a)({},e,n):e})}))},uploadImage:E}),c.a.createElement(C,{default:!0})),c.a.createElement("footer",{style:{padding:"100px 20px",background:"MintCream",float:"right"}},c.a.createElement("button",{onClick:function(){return s(!u)}},"Debug State"),u&&c.a.createElement("pre",{style:{background:"lavender",padding:10}},JSON.stringify(y,null,2))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ye=document.getElementById("root");function Pe(e){var t=e.children;return c.a.createElement("div",{className:"PresentationPanel"},t)}function Se(){var e=Object(i.n)().authUrl;return c.a.createElement(Pe,null,c.a.createElement("div",null,c.a.createElement("h1",null,"Anni"),c.a.createElement("a",{href:e},"Login with Dropbox")))}l.a.render(c.a.createElement(u,null,c.a.createElement(function(){var e=Object(i.n)(),t=e.client,n=e.readDatabase,o=Object(r.useState)(null),l=Object(a.a)(o,2),m=l[0],s=l[1];return Object(r.useEffect)(function(){t&&n().then(function(e){e?s(e.projects):Object(i.k)().then(s)})},[]),t?m?c.a.createElement(u,null,c.a.createElement(he,{defaultProjects:m})):c.a.createElement(Pe,null,c.a.createElement(I.a,null)):c.a.createElement(Se,null)},null)),ye),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e,t,n){e.exports=n(178)}},[[59,1,3]]]);
//# sourceMappingURL=main.e84c0be9.chunk.js.map