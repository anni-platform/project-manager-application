(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{358:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return k});var a=n(241),l=n(242),i=n(356),o=n(243),r=n(357),c=n(0),u=n.n(c),s=n(244),d=n.n(s),h=n(245),g=n.n(h),m=n(189),p=n(346),f=n.n(p)()(),v=f.CharCounter,b=f.WordCounter,y=f.CustomCounter,C=[f],E=function(e){function t(){var e,n;Object(a.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).onToggle=function(e){e.preventDefault(),n.props.onToggle(n.props.style)},n}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=d()({toolbarItem:!0,active:this.props.active});return u.a.createElement("button",{className:e,onClick:this.onToggle},this.props.label)}}]),t}(c.Component),S=[{initial:"B",label:"Bold",style:"BOLD"},{initial:"I",label:"Italic",style:"ITALIC"},{initial:"U",label:"Underline",style:"UNDERLINE"},{initial:"S",label:"Strikethrough",style:"STRIKETHROUGH"}],w=function(e){var t=e.editorState.getCurrentInlineStyle(),n=e.condensed;return u.a.createElement("div",null,u.a.createElement("h3",null,"Text styles"),u.a.createElement("ul",null,S.map(function(a){return u.a.createElement("li",{key:a.label},u.a.createElement(E,{active:t.has(a.style),label:n?a.initial:a.label,onToggle:e.onToggle,style:a.style,noBorder:!0}))})))},T={padding:16,border:"2px solid limegreen"},k=function(e){function t(e){var n;Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).focus=function(){return n.refs.editor.focus()},n.onChange=function(e){n.setState({editorState:e})},n.save=function(){var e=n.state.editorState.getCurrentContent(),t=Object(m.convertToRaw)(e);n.props.save({textEditorContent:t})},n.toggleBlockType=function(e){n.onChange(m.RichUtils.toggleBlockType(n.state.editorState,e))},n.toggleInlineStyle=function(e){n.onChange(m.RichUtils.toggleInlineStyle(n.state.editorState,e))},n.handleKeyCommand=function(e,t){var a=m.RichUtils.handleKeyCommand(t,e);return!!a&&(n.onChange(a),!0)},n.displayContextualMenu=function(){var e=Object(m.getVisibleSelectionRect)(window),t=n.toolbar.getBoundingClientRect(),a=n.toolbarParent.getBoundingClientRect();null!==e&&e.width>1?n.setState({styles:{opacity:1,left:e.left-a.left-t.width/2+e.width/2,top:e.top-a.top-1.25*t.height,visibility:"visible"}}):n.hideContextualMenu()},n.hideContextualMenu=function(){n.setState({styles:{opacity:0,visibility:"hidden"}})};var l=n.props.textEditorContent;return n.state={editorState:l?m.EditorState.createWithContent(Object(m.convertFromRaw)(l)):m.EditorState.createEmpty()},n}return Object(r.a)(t,e),Object(l.a)(t,[{key:"averageReadingTime",value:function(e){var t=e.match(/\S+/g);return t?new Date(t.length/3*1e3).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]:"00:00:00"}},{key:"render",value:function(){var e=this,t=this.state.editorState;return u.a.createElement("div",{ref:function(t){return e.toolbarParent=t},style:T},u.a.createElement("div",{onClick:this.focus},u.a.createElement("div",null,u.a.createElement(g.a,{editorState:t,handleKeyCommand:this.handleKeyCommand,onChange:this.onChange,onClick:this.focus,placeholder:"Start writing here...",plugins:C,ref:"editor",spellCheck:!0}),u.a.createElement("button",{onClick:this.save,style:{padding:4,background:"limegreen"}},"Save"))),u.a.createElement("div",null,u.a.createElement(w,{editorState:t,onToggle:this.toggleInlineStyle}),u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(v,null)," characters"),u.a.createElement("li",null,u.a.createElement(b,null)," words"),u.a.createElement("li",null,"Reading time"," ",u.a.createElement(y,{countFunction:this.averageReadingTime})))))}}]),t}(c.Component);k.defaultProps={save:function(){return null}}}}]);
//# sourceMappingURL=5.0a4fa970.chunk.js.map