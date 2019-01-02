(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(48)},21:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=(n(21),n(9)),i=n(2),u=n(15),m=n(4),s=n(5),d=n.n(s),p=function(e){var t="/project-manager-application";return"/"===e?"".concat(t,"/"):"".concat(t,"/").concat(e,"/")},j={projectNameLabel:"Project name",projectNamePlaceholder:"Project B",noProjects:"No projects",createProject:"Create project",removeProject:"Remove project",removeProjectAriaLabel:"Remove {name} project",errorProjectNameTaken:"Sorry, that project name is already taken."},f=function(e){return j.removeProjectAriaLabel.replace(/\{.*?\}/,e)};function E(e){var t=e.id,n=e.name,a=e.removeProject;return r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(m.a,{to:p(t)},n)),r.a.createElement("button",{"aria-label":f(n),onClick:function(){return a(n)}},j.removeProject))}var v="projectNameErrorId";function b(e){var t=e.addProject,n=e.validateProject,o=Object(a.useState)(""),c=Object(i.a)(o,2),l=c[0],u=c[1],m=Object(a.useState)(null),s=Object(i.a)(m,2),p=s[0],f=s[1];return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),l){var a={id:d()(l),name:l},r=n(a);null===r?(t(a),u("")):f(r)}}},r.a.createElement("label",{htmlFor:"projectName"},j.projectNameLabel,r.a.createElement("input",{"aria-describedby":p&&v,"aria-invalid":!!p||null,id:"projectName",type:"text",className:"input",placeholder:j.projectNamePlaceholder,value:l,onChange:function(e){f(null),u(e.target.value)}})),p&&r.a.createElement("p",{style:{color:"magenta"},id:v},p.message),r.a.createElement("button",{type:"submit"},j.createProject))}function g(e){var t=e.projects,n=e.setProjects,a=function(e){return n(t.filter(function(t){return t.name!==e}))};return r.a.createElement("div",null,r.a.createElement("h2",null,"Projects"),0===t.length&&r.a.createElement("p",null,j.noProjects),t.map(function(e){return r.a.createElement(E,Object.assign({},e,{key:e.name,removeProject:a}))}),r.a.createElement(b,{addProject:function(e){return n(Object(u.a)(t).concat([e]))},validateProject:function(e){var n=e.name;return t.find(function(e){return e.name===n})?{message:j.errorProjectNameTaken}:null}}))}var y=n(14),P="PROJECT_SECTION",O="PROJECT_SECTION_NAV",h=n(1),C=n.n(h),S=C.a.oneOf(["imageCollection","prose","motion"]),I=C.a.oneOf(["moodBoard","storyBoard","styleFrames"]),k=C.a.shape({id:C.a.string,name:C.a.string,type:S.isRequired,subtype:I}),w=(C.a.shape({name:C.a.string,sections:C.a.arrayOf(k)}),{overviewLink:"Overview"}),N=[{id:d()("Script"),name:"Script",type:"prose"},{id:d()("Mood board"),name:"Mood board",type:"imageCollection",subtype:"moodBoard"},{id:d()("Story board"),name:"Story board",type:"imageCollection",subtype:"storyBoard"},{id:d()("Style frames"),name:"Style frames",type:"imageCollection",subtype:"styleFrames"},{id:d()("Animation"),name:"Animation",type:"motion"}],A="404 - Page not found",R=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,A))};function B(e){var t=e.name,n=e.project,a=e.subtype,o=e.type;return r.a.createElement("div",{"data-testid":P},r.a.createElement("h1",null,n.name," - ",t),o,a&&" - ".concat(a))}function L(e){var t=e.project;return r.a.createElement("div",{"data-testid":P},r.a.createElement("h1",null,t.name),r.a.createElement("p",null,t.details))}var T=n(11),x=n(7),D=Object(x.SortableHandle)(function(){return r.a.createElement("span",null,"::")}),H=Object(x.SortableElement)(function(e){var t=e.renderItem,n=void 0===t?function(){return"feed me"}:t,a=e.value;return r.a.createElement("li",null,r.a.createElement(D,null),"string"===typeof a?a:n(a))}),J=Object(x.SortableContainer)(function(e){var t=e.items,n=Object(T.a)(e,["items"]);return r.a.createElement("ul",null,t.map(function(e,t){return r.a.createElement(H,Object.assign({key:"item-".concat(t),index:t,value:e},n))}))}),M=["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"];function F(e){var t=e.defaultItems,n=void 0===t?M:t,o=e.onReorder,c=void 0===o?function(){return null}:o,l=Object(T.a)(e,["defaultItems","onReorder"]),u=Object(a.useState)(n),m=Object(i.a)(u,2),s=m[0],d=m[1];return r.a.createElement(J,Object.assign({},l,{items:s,onSortEnd:function(e){var t=e.oldIndex,n=e.newIndex,a=Object(x.arrayMove)(s,t,n);c(a),d(a)},useDragHandle:!0}))}var _={cancel:"Cancel",saveChanges:"Save Changes"};function U(e){var t=e.project,n=e.updateProject,o=e.toggleEditing,c=Object(a.useState)(t),u=Object(i.a)(c,2),m=u[0],s=u[1],d=m.sections;return r.a.createElement("div",null,r.a.createElement(F,{defaultItems:d,onReorder:function(e){return s(Object(l.a)({},t,{sections:e}))},renderItem:function(e){var t=e.name;return r.a.createElement("strong",null,t)}}),r.a.createElement("button",{onClick:function(){n(m),o()}},_.saveChanges),r.a.createElement("button",{onClick:o},_.cancel))}var W=Object(y.a)(function(e){return e.projects},function(e){return e.projectId},function(e,t){return e.find(function(e){return e.id===t})});function q(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),o=n[0],c=n[1],l=W(e),u=e.updateProject;if(!l)return r.a.createElement(R,null);var s=r.a.createElement("ul",{"data-testid":O},r.a.createElement("li",null,r.a.createElement(m.a,{to:"./"},w.overviewLink)),l.sections.map(function(e,t){var n=e.id,a=e.name;return r.a.createElement("li",{key:n},r.a.createElement(m.a,{to:n},a))}),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){return c(!0)}},"Edit project sections"))),d=r.a.createElement(U,{project:l,toggleEditing:function(){return c(!1)},updateProject:u});return r.a.createElement("div",null,r.a.createElement(m.b,null,r.a.createElement(L,{default:!0,project:l}),l.sections.map(function(e,t){return r.a.createElement(B,Object.assign({key:e.id,path:e.id,project:l},e))})),o?d:s)}q.defaultProps={updateProject:function(){return null}};var V="abce".split("").map(function(e){return{id:"project-".concat(e),name:"Project ".concat(e.toUpperCase()),details:"Details about project ".concat(e.toUpperCase()),sections:N}}),$=(n(46),function(){return r.a.createElement("div",null,"Home")});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=document.getElementById("root");c.a.render(r.a.createElement(function(e){var t=e.defaultProjects,n=void 0===t?V:t,o=Object(a.useState)(n),c=Object(i.a)(o,2),u=c[0],s=c[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,"Anni Project Manager Application",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.a,{to:p("/")},"Home")),r.a.createElement("li",null,r.a.createElement(m.a,{to:p("dashboard")},"Dashboard")))),r.a.createElement(m.b,null,r.a.createElement($,{path:p("/")}),r.a.createElement(g,{path:p("dashboard"),projects:u,setProjects:s}),r.a.createElement(q,{path:p(":projectId/*"),projects:u,updateProject:function(e){s(u.map(function(t){return t.id===e.id?Object(l.a)({},t,e):t}))}}),r.a.createElement(R,{default:!0})))},null),z),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.0b7e4291.chunk.js.map