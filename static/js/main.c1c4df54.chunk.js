(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,t,n){},167:function(e,t,n){"use strict";n.r(t);var a,r,c,o=n(0),l=n.n(o),i=n(13),u=n.n(i),m=n(47),s=n(25),d=n.n(s),p=n(48),j=n(23),b=n.n(j),f=n(3),v=n(2),E=n.n(v),y=n(7),O=n.n(y),g=["imageCollection","prose","motion"],h=["moodBoard","storyBoard","styleFrames"],P=(a={},Object(f.a)(a,"prose","prose"),Object(f.a)(a,"motion","motion"),Object(f.a)(a,"imageCollection",["moodBoard","storyBoard","styleFrames"]),a),S=(r={},Object(f.a)(r,"imageCollection","Image collection"),Object(f.a)(r,"prose","Script"),Object(f.a)(r,"motion","Animation"),r),w=(c={},Object(f.a)(c,"moodBoard","Mood board"),Object(f.a)(c,"storyBoard","Story board"),Object(f.a)(c,"styleFrames","Style frames"),c),C=E.a.oneOf(g),k=E.a.oneOf(h),N=E.a.shape({id:E.a.string,name:E.a.string,type:C.isRequired,subtype:k}),I=(E.a.shape({name:E.a.string,sections:E.a.arrayOf(N)}),{overviewLink:"Overview"}),A=[{id:O()("Script"),name:"Script",type:"prose"},{id:O()("Mood board"),name:"Mood board",type:"imageCollection",subtype:"moodBoard"},{id:O()("Story board"),name:"Story board",type:"imageCollection",subtype:"storyBoard"},{id:O()("Style frames"),name:"Style frames",type:"imageCollection",subtype:"styleFrames"},{id:O()("Animation"),name:"Animation",type:"motion"}];var B,x=(B="projects","".concat("anni-pma-").concat(B)),L=[],R=function(){var e=Object(p.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.getItem(x);case 3:if(t=e.sent){e.next=8;break}return e.next=7,b.a.setItem(x,L);case 7:return e.abrupt("return",L);case 8:return e.abrupt("return",t);case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}},e,this,[[0,11]])}));return function(){return e.apply(this,arguments)}}();n(74);var D=n(9),M=n(1),T=n(49),F=n.n(T),J=n(10),H=n(5),_=function(e){var t="/project-manager-application";return"/"===e?"".concat(t,"/"):"".concat(t,"/").concat(e,"/")},U={projectNameLabel:"Project name",projectNamePlaceholder:"Project B",noProjects:"No projects",createProject:"Create project",removeProject:"Remove project",removeProjectAriaLabel:"Remove {name} project",errorProjectNameTaken:"Sorry, that project name is already taken."},W=function(e){return U.removeProjectAriaLabel.replace(/\{.*?\}/,e)};function q(e){var t=e.id,n=e.name,a=e.removeProject;return l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement(H.a,{to:_(t)},n)),l.a.createElement("button",{"aria-label":W(n),onClick:function(){return a(n)}},U.removeProject))}var V="projectNameErrorId";function $(e){var t=e.addProject,n=e.validateProject,a=Object(o.useState)(""),r=Object(M.a)(a,2),c=r[0],i=r[1],u=Object(o.useState)(null),m=Object(M.a)(u,2),s=m[0],d=m[1];return l.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),c){var a,r=(a=c,{id:O()(a),name:a,sections:A}),o=n(r);null===o?(t(r),i("")):d(o)}}},l.a.createElement("label",{htmlFor:"projectName"},U.projectNameLabel,l.a.createElement("input",{"aria-describedby":s&&V,"aria-invalid":!!s||null,id:"projectName",type:"text",className:"input",placeholder:U.projectNamePlaceholder,value:c,onChange:function(e){d(null),i(e.target.value)}})),s&&l.a.createElement("p",{style:{color:"magenta"},id:V},s.message),l.a.createElement("button",{type:"submit"},U.createProject))}function z(e){var t=e.projects,n=e.setProjects,a=function(e){return n(t.filter(function(t){return t.name!==e}))};return l.a.createElement("div",null,l.a.createElement("h2",null,"Projects"),0===t.length&&l.a.createElement("p",null,U.noProjects),t.map(function(e){return l.a.createElement(q,Object.assign({},e,{key:e.name,removeProject:a}))}),l.a.createElement($,{addProject:function(e){return n([].concat(Object(J.a)(t),[e]))},validateProject:function(e){var n=e.name;return t.find(function(e){return e.name===n})?{message:U.errorProjectNameTaken}:null}}))}var G=n(51),K="PROJECT_SECTION",Q="PROJECT_SECTION_NAV",X="404 - Page not found",Y=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,X))};function Z(e){var t=e.name,n=e.project,a=e.subtype,r=e.type;return l.a.createElement("div",{"data-testid":K},l.a.createElement("h1",null,n.name," - ",t),r,a&&" - ".concat(a))}function ee(e){var t=e.project;return l.a.createElement("div",{"data-testid":K},l.a.createElement("h1",null,t.name),l.a.createElement("p",null,t.details))}var te=n(26),ne=n(52),ae=n.n(ne),re=n(14),ce=Object(re.SortableHandle)(function(){return l.a.createElement("span",null,"::")}),oe=Object(re.SortableElement)(function(e){var t=e.renderItem,n=void 0===t?function(){return"feed me"}:t,a=e.value;return l.a.createElement("li",null,l.a.createElement(ce,null),"string"===typeof a?a:n(a))}),le=Object(re.SortableContainer)(function(e){var t=e.items,n=Object(te.a)(e,["items"]);return l.a.createElement("ul",null,t.map(function(e,t){return l.a.createElement(oe,Object.assign({key:"item-".concat(t),index:t,value:e},n))}))}),ie=["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"];function ue(e){var t=e.defaultItems,n=void 0===t?ie:t,a=e.onReorder,r=void 0===a?function(){return null}:a,c=Object(te.a)(e,["defaultItems","onReorder"]),i=Object(o.useState)(n),u=Object(M.a)(i,2),m=u[0],s=u[1];Object(o.useEffect)(function(){var e=ae()(n,m);e.length>0&&s([].concat(Object(J.a)(m),Object(J.a)(e)))});return l.a.createElement(le,Object.assign({},c,{items:m,onSortEnd:function(e){var t=e.oldIndex,n=e.newIndex,a=Object(re.arrayMove)(m,t,n);r(a),s(a)},useDragHandle:!0}))}var me={newProjectSectionNameLabel:"New project section name",newProjectSectionNamePlaceholder:"Section name",saveNewProjectSectionButtonLabel:"Add new project section"},se="type",de="subtype",pe={name:"",type:"imageCollection",subtype:"moodBoard"},je=function(e,t){return e===t.type},be=function(e,t){return e===t.subtype},fe=function(e,t){return Object(D.a)({},e,t)};function ve(e){var t=e.saveNewSection,n=Object(o.useReducer)(fe,pe),a=Object(M.a)(n,2),r=a[0],c=a[1],i=function(e){return c({subtype:e})};return l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(Object(D.a)({},r,{id:O()(r.name)})),c(pe)}},l.a.createElement("label",null,me.newProjectSectionNameLabel,l.a.createElement("input",{value:r.name,onChange:function(e){var t,n=e.target;return t=n.value,c({name:t})},name:"newProjectSectionName",placeholder:me.newProjectSectionNamePlaceholder})),l.a.createElement("ul",null,Object.entries(P).map(function(e){var t=Object(M.a)(e,2),n=t[0],a=t[1];return l.a.createElement("li",{key:n},l.a.createElement("label",null,l.a.createElement("input",{checked:je(n,r),type:"radio",name:se,onChange:function(){return function(e){c({type:e}),i(Array.isArray(P[e])?P[e][0]:null)}(n)},value:n}),S[n]),je(n,r)&&Array.isArray(a)&&l.a.createElement("ul",null,a.map(function(e){return l.a.createElement("li",{key:e},l.a.createElement("label",null,l.a.createElement("input",{checked:be(e,r),type:"radio",name:de,onChange:function(){return i(e)},value:n}),w[e]))})))})),l.a.createElement("button",{type:"submit"},me.saveNewProjectSectionButtonLabel))}var Ee={cancel:"Cancel",saveChanges:"Save Changes"};function ye(e){var t=e.project,n=e.updateProject,a=e.toggleEditing,r=Object(o.useState)(t),c=Object(M.a)(r,2),i=c[0],u=c[1],m=i.sections;return l.a.createElement("div",null,l.a.createElement(ue,{defaultItems:m,onReorder:function(e){return u(Object(D.a)({},t,{sections:e}))},renderItem:function(e){var t=e.name;return l.a.createElement("strong",null,t)}}),l.a.createElement(ve,{project:i,saveNewSection:function(e){u({id:t.id,sections:[].concat(Object(J.a)(m),[e])})}}),l.a.createElement("button",{onClick:function(){n(i),a()}},Ee.saveChanges),l.a.createElement("button",{onClick:a},Ee.cancel))}var Oe=Object(G.a)(function(e){return e.projects},function(e){return e.projectId},function(e,t){return e.find(function(e){return e.id===t})});function ge(e){var t=Object(o.useState)(!1),n=Object(M.a)(t,2),a=n[0],r=n[1],c=Oe(e),i=e.updateProject;if(!c)return l.a.createElement(Y,null);var u=l.a.createElement("ul",{"data-testid":Q},l.a.createElement("li",null,l.a.createElement(H.a,{to:"./"},I.overviewLink)),c.sections.map(function(e,t){var n=e.id,a=e.name;return l.a.createElement("li",{key:n},l.a.createElement(H.a,{to:n},a))}),l.a.createElement("li",null,l.a.createElement("button",{onClick:function(){return r(!0)}},"Edit project sections"))),m=l.a.createElement(ye,{project:c,toggleEditing:function(){return r(!1)},updateProject:i});return l.a.createElement("div",null,l.a.createElement(H.b,null,l.a.createElement(ee,{default:!0,project:c}),c.sections.map(function(e,t){return l.a.createElement(Z,Object.assign({key:e.id,path:e.id,project:c},e))})),a?m:u)}ge.defaultProps={updateProject:function(){return null}};var he,Pe="abce".split("").map(function(e){return{id:"project-".concat(e),name:"Project ".concat(e.toUpperCase()),details:"Details about project ".concat(e.toUpperCase()),sections:A}}),Se=(n(165),function(){return l.a.createElement("div",null,"Home")});function we(e){var t=e.defaultProjects,n=void 0===t?Pe:t,a=Object(o.useState)(!1),r=Object(M.a)(a,2),c=r[0],i=r[1];he=n;var u=Object(o.useState)(n),m=Object(M.a)(u,2),s=m[0],d=m[1];return Object(o.useEffect)(function(){F()(he,s)||(!function(e){if(e)b.a.setItem(x,e)}(s),he=s)}),l.a.createElement("div",{className:"App"},l.a.createElement("header",null,"Anni Project Manager Application",l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(H.a,{to:_("/")},"Home")),l.a.createElement("li",null,l.a.createElement(H.a,{to:_("dashboard")},"Dashboard")))),l.a.createElement(H.b,null,l.a.createElement(Se,{path:_("/")}),l.a.createElement(z,{path:_("dashboard"),projects:s,setProjects:d}),l.a.createElement(ge,{path:_(":projectId/*"),projects:s,updateProject:function(e){d(s.map(function(t){return t.id===e.id?Object(D.a)({},t,e):t}))}}),l.a.createElement(Y,{default:!0})),l.a.createElement("footer",{style:{padding:"100px 20px",background:"MintCream",float:"right"}},l.a.createElement("button",{onClick:function(){return i(!c)}},"Debug State"),c&&l.a.createElement("pre",{style:{background:"lavender",padding:10}},JSON.stringify(s,null,2))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=document.getElementById("root"),ke=Object(m.unstable_createResource)(R),Ne=function(){return l.a.createElement("div",null,"Loading...")};function Ie(){var e=ke.read();return l.a.createElement(we,{defaultProjects:e})}u.a.render(l.a.createElement(function(){return l.a.createElement(o.Suspense,{fallback:l.a.createElement(Ne,null)},l.a.createElement(Ie,null))},null),Ce),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},53:function(e,t,n){e.exports=n(167)},74:function(e,t,n){}},[[53,2,1]]]);
//# sourceMappingURL=main.c1c4df54.chunk.js.map