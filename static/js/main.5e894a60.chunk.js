(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e){e.exports={a:[{id:"project-a",name:"Project A",details:"info about project A"},{id:"project-b",name:"Project B",details:"info about project C"},{id:"project-c",name:"Project C",details:"info about project C"}]}},12:function(e,t,a){e.exports=a(38)},17:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),l=(a(17),a(3)),i=a(11),u=a(2),m=a(9),j=a.n(m),d=function(e){var t="/project-manager-application";return"/"===e?"".concat(t).concat("/"):"".concat(t,"/").concat(e).concat("/")},p={projectNameLabel:"Project name",projectNamePlaceholder:"Project B",noProjects:"No projects",createProject:"Create project",removeProject:"Remove project",removeProjectAriaLabel:"Remove {name} project",errorProjectNameTaken:"Sorry, that project name is already taken."},s=function(e){return p.removeProjectAriaLabel.replace(/\{.*?\}/,e)};function v(e){var t=e.id,a=e.name,n=e.removeProject;return r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(u.a,{to:d(t)},a)),r.a.createElement("button",{"aria-label":s(a),onClick:function(){return n(a)}},p.removeProject))}var f="projectNameErrorId";function E(e){var t=e.addProject,a=e.validateProject,o=Object(n.useState)(""),c=Object(l.a)(o,2),i=c[0],u=c[1],m=Object(n.useState)(null),d=Object(l.a)(m,2),s=d[0],v=d[1];return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),i){var n={id:j()(i),name:i},r=a(n);null===r?(t(n),u("")):v(r)}}},r.a.createElement("label",{htmlFor:"projectName"},p.projectNameLabel,r.a.createElement("input",{"aria-describedby":s&&f,"aria-invalid":!!s||null,id:"projectName",type:"text",className:"input",placeholder:p.projectNamePlaceholder,value:i,onChange:function(e){v(null),u(e.target.value)}})),s&&r.a.createElement("p",{style:{color:"magenta"},id:f},s.message),r.a.createElement("button",{type:"submit"},p.createProject))}function b(e){var t=e.projects,a=e.setProjects,n=function(e){return a(t.filter(function(t){return t.name!==e}))};return r.a.createElement("div",null,r.a.createElement("h2",null,"Projects"),0===t.length&&r.a.createElement("p",null,p.noProjects),t.map(function(e){return r.a.createElement(v,Object.assign({},e,{key:e.name,removeProject:n}))}),r.a.createElement(E,{addProject:function(e){return a(Object(i.a)(t).concat([e]))},validateProject:function(e){var a=e.name;return t.find(function(e){return e.name===a})?{message:p.errorProjectNameTaken}:null}}))}var P="404 - Page not found",h=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,P))};function g(e){var t=e.projects,a=e.projectId,n=t.find(function(e){return e.id===a});return n?r.a.createElement("div",null,r.a.createElement("h1",null,n.name),r.a.createElement("p",null,n.details)):r.a.createElement(h,null)}var w=a(10),N=function(){return r.a.createElement("div",null,"Home")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(function(e){var t=e.defaultProjects,a=void 0===t?w.a:t,o=Object(n.useState)(a),c=Object(l.a)(o,2),i=c[0],m=c[1];return r.a.createElement("div",null,r.a.createElement("header",null,"Anni Project Manager Application",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.a,{to:d("/")},"Home")),r.a.createElement("li",null,r.a.createElement(u.a,{to:d("dashboard")},"Dashboard")))),r.a.createElement(u.b,null,r.a.createElement(N,{path:"/"}),r.a.createElement(b,{path:d("dashboard"),projects:i,setProjects:m}),r.a.createElement(g,{path:d(":projectId"),projects:i}),r.a.createElement(h,{default:!0})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.5e894a60.chunk.js.map