/**
 * skylark-graphics-layout - The skylark measure class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","./layout"],function(t,i){var n=/\d*\D*\s*/g,o=t.klass({klassName:"Margin",left:{get:function(){return this._.left}},top:{get:function(){return this._.top}},right:{get:function(){return this._.right}},bottom:{get:function(){return this._.bottom}},getAll:function(){return this.left==this.bottom&&this.top==this.right&&this.right==this.left?this.left:null},setAll:function(t){this._={left:t,right:t,top:t,bottom:t}},clone:function(){var t=this._;return new Padding(t.top,t.right,t.left,t.bottom)},equale:function(t){return this.left==t.left&&this.top==t.top&&this.right==t.right&&this.bottom==t.bottom},equale:function(t){return this.left==t.left&&this.top==t.top&&this.right==t.right&&this.bottom==t.bottom},toArray:function(){return[this.top,this.right,this.left,this.bottom]},toPlain:function(){return{top:this.top,right:this.right,left:this.left,bottom:this.bottom}},toCss:function(t){return Padding.toCss(this,t)},toString:function(){var t=this.left.toString(),i=this.top.toString(),n=this.right.toString(),o=this.bottom.toString();return n==t?i==o?i==n?i.toString():i+" "+n:i+" "+n+" "+o:i+" "+n+" "+t+" "+o},_construct:function(t,i,n,o){void 0===o&&(void 0===n?void 0===i?o=n=i=void 0===t?t=0:t:(o=t,n=i):(o=n,n=i)),this._={left:n,right:i,top:t,bottom:o}}});return Object.mixin(o,{fromArray:function(t){switch(t.length){case 1:return new o(t[0],t[0],t[0],t[0]);case 2:case 3:case 4:return new o(t[0],t[1],t[1],t[0]);default:return}},fromPlain:function(t){return new o(t.t,t.r,t.l,t.b)},fromString:function(t){var i,r,e,s,h=t.match(n);switch(h.length){case 1:i=r=e=s=h[0];break;case 2:i=s=h[0],r=e=h[1];break;case 3:i=h[0],r=e=h[1],s=h[2];break;case 4:i=h[0],r=h[1],e=h[2],s=h[3]}return new o(i,r,e,s)},Zero:new o(0)}),o.fromCss=function(t){return new o(t.marginTop,t.marginRight,t.marginLeft,t.marginBottom)},o.toCss=function(t,i){return i||(i={}),i.marginTop=t.top.toString(),i.marginRight=t.right.toString(),i.marginLeft=t.left.toString(),i.marginBottom=t.bottom.toString(),i},o});
//# sourceMappingURL=sourcemaps/Margin.js.map
