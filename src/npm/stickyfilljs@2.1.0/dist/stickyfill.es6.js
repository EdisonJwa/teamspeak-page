"use strict";let seppuku=!1;const isWindowDefined="undefined"!=typeof window;if(isWindowDefined&&window.getComputedStyle){const a=document.createElement("div");["","-webkit-","-moz-","-ms-"].some(t=>{try{a.style.position=t+"sticky"}catch(t){}return""!=a.style.position})&&(seppuku=!0)}else seppuku=!0;let isInitialized=!1;const shadowRootExists="undefined"!=typeof ShadowRoot,scroll={top:null,left:null},stickies=[];function extend(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])}function parseNumeric(t){return parseFloat(t)||0}function getDocOffsetTop(t){let e=0;for(;t;)e+=t.offsetTop,t=t.offsetParent;return e}class Sticky{constructor(e){if(!(e instanceof HTMLElement))throw new Error("First argument must be HTMLElement");if(stickies.some(t=>t._node===e))throw new Error("Stickyfill is already applied to this node");this._node=e,this._stickyMode=null,this._active=!1,stickies.push(this),this.refresh()}refresh(){if(!seppuku&&!this._removed){this._active&&this._deactivate();const n=this._node;var t=getComputedStyle(n),e={position:t.position,top:t.top,display:t.display,marginTop:t.marginTop,marginBottom:t.marginBottom,marginLeft:t.marginLeft,marginRight:t.marginRight,cssFloat:t.cssFloat};if(!isNaN(parseFloat(e.top))&&"table-cell"!=e.display&&"none"!=e.display){this._active=!0;var i=n.style.position;"sticky"!=t.position&&"-webkit-sticky"!=t.position||(n.style.position="static");const r=n.parentNode,l=shadowRootExists&&r instanceof ShadowRoot?r.host:r;var t=n.getBoundingClientRect(),o=l.getBoundingClientRect(),s=getComputedStyle(l),i=(this._parent={node:l,styles:{position:l.style.position},offsetHeight:l.offsetHeight},this._offsetToWindow={left:t.left,right:document.documentElement.clientWidth-t.right},this._offsetToParent={top:t.top-o.top-parseNumeric(s.borderTopWidth),left:t.left-o.left-parseNumeric(s.borderLeftWidth),right:-t.right+o.right-parseNumeric(s.borderRightWidth)},this._styles={position:i,top:n.style.top,bottom:n.style.bottom,left:n.style.left,right:n.style.right,width:n.style.width,marginTop:n.style.marginTop,marginLeft:n.style.marginLeft,marginRight:n.style.marginRight},parseNumeric(e.top)),o=(this._limits={start:t.top+window.pageYOffset-i,end:o.top+window.pageYOffset+l.offsetHeight-parseNumeric(s.borderBottomWidth)-n.offsetHeight-i-parseNumeric(e.marginBottom)},s.position);"absolute"!=o&&"relative"!=o&&(l.style.position="relative"),this._recalcPosition();const a=this._clone={};a.node=document.createElement("div"),extend(a.node.style,{width:t.right-t.left+"px",height:t.bottom-t.top+"px",marginTop:e.marginTop,marginBottom:e.marginBottom,marginLeft:e.marginLeft,marginRight:e.marginRight,cssFloat:e.cssFloat,padding:0,border:0,borderSpacing:0,fontSize:"1em",position:"static"}),r.insertBefore(a.node,n),a.docOffsetTop=getDocOffsetTop(a.node)}}}_recalcPosition(){if(this._active&&!this._removed){var t=scroll.top<=this._limits.start?"start":scroll.top>=this._limits.end?"end":"middle";if(this._stickyMode!=t){switch(t){case"start":extend(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:this._offsetToParent.top+"px",bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"middle":extend(this._node.style,{position:"fixed",left:this._offsetToWindow.left+"px",right:this._offsetToWindow.right+"px",top:this._styles.top,bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"end":extend(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:"auto",bottom:0,width:"auto",marginLeft:0,marginRight:0})}this._stickyMode=t}}}_fastCheck(){this._active&&!this._removed&&(1<Math.abs(getDocOffsetTop(this._clone.node)-this._clone.docOffsetTop)||1<Math.abs(this._parent.node.offsetHeight-this._parent.offsetHeight))&&this.refresh()}_deactivate(){this._active&&!this._removed&&(this._clone.node.parentNode.removeChild(this._clone.node),delete this._clone,extend(this._node.style,this._styles),delete this._styles,stickies.some(t=>t!==this&&t._parent&&t._parent.node===this._parent.node)||extend(this._parent.node.style,this._parent.styles),delete this._parent,this._stickyMode=null,this._active=!1,delete this._offsetToWindow,delete this._offsetToParent,delete this._limits)}remove(){this._deactivate(),stickies.some((t,e)=>{if(t._node===this._node)return stickies.splice(e,1),!0}),this._removed=!0}}const Stickyfill={stickies:stickies,Sticky:Sticky,forceSticky(){seppuku=!1,init(),this.refreshAll()},addOne(t){if(!(t instanceof HTMLElement)){if(!t.length||!t[0])return;t=t[0]}for(var e=0;e<stickies.length;e++)if(stickies[e]._node===t)return stickies[e];return new Sticky(t)},add(e){if((e=e instanceof HTMLElement?[e]:e).length){const i=[];for(let t=0;t<e.length;t++){const o=e[t];o instanceof HTMLElement?stickies.some(t=>{if(t._node===o)return i.push(t),!0})||i.push(new Sticky(o)):i.push(void 0)}return i}},refreshAll(){stickies.forEach(t=>t.refresh())},removeOne(e){if(!(e instanceof HTMLElement)){if(!e.length||!e[0])return;e=e[0]}stickies.some(t=>{if(t._node===e)return t.remove(),!0})},remove(e){if((e=e instanceof HTMLElement?[e]:e).length)for(let t=0;t<e.length;t++){const i=e[t];stickies.some(t=>{if(t._node===i)return t.remove(),!0})}},removeAll(){for(;stickies.length;)stickies[0].remove()}};function init(){if(!isInitialized){isInitialized=!0,o(),window.addEventListener("scroll",o),window.addEventListener("resize",Stickyfill.refreshAll),window.addEventListener("orientationchange",Stickyfill.refreshAll);let t,e,i;function o(){window.pageXOffset!=scroll.left?(scroll.top=window.pageYOffset,scroll.left=window.pageXOffset,Stickyfill.refreshAll()):window.pageYOffset!=scroll.top&&(scroll.top=window.pageYOffset,scroll.left=window.pageXOffset,stickies.forEach(t=>t._recalcPosition()))}function s(){t=setInterval(function(){stickies.forEach(t=>t._fastCheck())},500)}"hidden"in document?(e="hidden",i="visibilitychange"):"webkitHidden"in document&&(e="webkitHidden",i="webkitvisibilitychange"),i?(document[e]||s(),document.addEventListener(i,()=>{document[e]?clearInterval(t):s()})):s()}}seppuku||init(),"undefined"!=typeof module&&module.exports?module.exports=Stickyfill:isWindowDefined&&(window.Stickyfill=Stickyfill);