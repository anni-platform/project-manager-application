(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),l=(n(11),n(4)),u=n(1),m={projectNameLabel:"Project name",projectNamePlaceholder:"Project B",noProjects:"No projects",createProject:"Create project",removeProject:"Remove Project"};function i(e){var t=e.name,n=e.removeProject;return a.a.createElement("div",null,a.a.createElement("h3",null,t),a.a.createElement("button",{onClick:function(){return n(t)}},m.removeProject))}function j(e){var t=e.addProject,n=Object(r.useState)(""),o=Object(u.a)(n,2),c=o[0],l=o[1];return a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c&&(t({name:c}),l(""))}},a.a.createElement("label",{htmlFor:"projectName"},m.projectNameLabel,a.a.createElement("input",{id:"projectName",type:"text",className:"input",placeholder:m.projectNamePlaceholder,value:c,onChange:function(e){return l(e.target.value)}})),a.a.createElement("button",{type:"submit"},m.createProject))}var s=[{name:"Project A"},{name:"Project B"},{name:"Project C"}];function p(e){var t=e.defaultProjects,n=void 0===t?s:t,o=Object(r.useState)(n),c=Object(u.a)(o,2),p=c[0],d=c[1],v=function(e){return d(p.filter(function(t){return t.name!==e}))};return a.a.createElement("div",null,a.a.createElement("h2",null,"Projects"),0===p.length&&a.a.createElement("p",null,m.noProjects),p.map(function(e){return a.a.createElement(i,Object.assign({},e,{key:e.name,removeProject:v}))}),a.a.createElement(j,{addProject:function(e){return d(Object(l.a)(p).concat([e]))}}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(function(){return a.a.createElement("div",null,a.a.createElement("header",null,"Anni Project Manager Application"),a.a.createElement(p,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e,t,n){e.exports=n(13)}},[[5,2,1]]]);
//# sourceMappingURL=main.1ca6ae95.chunk.js.map