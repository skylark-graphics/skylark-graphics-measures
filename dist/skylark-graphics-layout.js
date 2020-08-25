/**
 * skylark-graphics-layout - The skylark measure class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(n,i){var e=i.define,require=i.require,r="function"==typeof e&&e.amd,o=!r&&"undefined"!=typeof exports;if(!r&&!e){var s={};e=i.define=function(t,n,i){"function"==typeof i?(s[t]={factory:i,deps:n.map(function(n){return function(t,n){if("."!==t[0])return t;var i=n.split("/"),e=t.split("/");i.pop();for(var r=0;r<e.length;r++)"."!=e[r]&&(".."==e[r]?i.pop():i.push(e[r]));return i.join("/")}(n,t)}),resolved:!1,exports:null},require(t)):s[t]={factory:null,resolved:!0,exports:i}},require=i.require=function(t){if(!s.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var module=s[t];if(!module.resolved){var n=[];module.deps.forEach(function(t){n.push(require(t))}),module.exports=module.factory.apply(i,n)||null,module.resolved=!0}return module.exports}}if(!e)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(n,require){n("skylark-graphics-layout/layout",["skylark-langx/skylark","skylark-langx/langx"],function(t,n){return t.attach("graphics.layout",{log2:function(t){for(var n=1,i=0;t>n;)n<<=1,i++;return i}})}),n("skylark-graphics-layout/DisplayMode",["skylark-langx/langx","./layout"],function(t,n){var i=["none","inline","block","listtem","inlineblock","tableRowGroup","tablecell","tablerow"];return t.mixin(i,{none:0,inline:1,block:2,listtem:3,inlineblock:4,tableRowGroup:5,tablecell:6,tablerow:7}),i.fromCss=function(t){switch(t){case"none":return i.none;case"inline":return i.inline;case"block":return i.block;case"list-item":return i.listtem;case"inline-block":return i.inlineblock;case"table-cell":return i.tablecell;case"table-row":return i.tablerow;case"table-row-group":return i.tableRowGroup;default:return}},i.toCss=function(t){switch(t){case i.none:return"none";case i.inline:return"inline";case i.block:return"block";case i.listtem:return"list-item";case i.inlineblock:return"inline-block";case i.tablecell:return"table-cell";case i.tablerow:return"table-row";case i.tableRowGroup:return"table-row-group";default:return}},n.DisplayMode=i}),n("skylark-graphics-layout/FloatMode",["skylark-langx/langx","./layout"],function(t,n){var i=["none","left","right"];return t.mixin(i,{none:0,left:1,right:2}),n.FloatMode=i}),n("skylark-graphics-layout/Flow",["skylark-langx/langx","./layout"],function(t,n){var i=t.klass({klassName:"Flow",display:{get:function(){return this._.display}},float:{get:function(){return this._.float}},position:{get:function(){return this._.position}},toCss:function(t){return i.toCss(this,t)},_construct:function(t){this._={display:t.display,float:t.float,position:t.position}}});return i.fromPlain=function(t){return new i({display:t.display,float:t.float,position:t.position})},i.fromCss=i.fromPlain,i.toCss=function(t,n){return n||(n={}),t.display&&(n.display=DisplayMode.toCss(t.display)),t.repeat&&(n.float=t.float.toString()),t.position&&(n.position=t.position.toString()),n},n.Flow=i}),n("skylark-langx-numbers/Vector2",["./numbers"],function(t){function n(t,n){this.x=t||0,this.y=n||0}return Object.defineProperties(n.prototype,{width:{get:function(){return this.x},set:function(t){this.x=t}},height:{get:function(){return this.y},set:function(t){this.y=t}}}),Object.assign(n.prototype,{set:function(t,n){return this.x=t,this.y=n,this},setScalar:function(t){return this.x=t,this.y=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},clone:function(){return new this.constructor(this.x,this.y)},copy:function(t){return this.x=t.x,this.y=t.y,this},add:function(t,n){return void 0!==n?(console.warn("Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,n)):(this.x+=t.x,this.y+=t.y,this)},addScalar:function(t){return this.x+=t,this.y+=t,this},addVectors:function(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this},addScaledVector:function(t,n){return this.x+=t.x*n,this.y+=t.y*n,this},sub:function(t,n){return void 0!==n?(console.warn("Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,n)):(this.x-=t.x,this.y-=t.y,this)},subScalar:function(t){return this.x-=t,this.y-=t,this},subVectors:function(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this},multiplyScalar:function(t){return this.x*=t,this.y*=t,this},divide:function(t){return this.x/=t.x,this.y/=t.y,this},divideScalar:function(t){return this.multiplyScalar(1/t)},applyMatrix3:function(t){var n=this.x,i=this.y,e=t.elements;return this.x=e[0]*n+e[3]*i+e[6],this.y=e[1]*n+e[4]*i+e[7],this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this},clamp:function(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this},clampScalar:function(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this},clampLength:function(t,n){var i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(t){return this.x*t.x+this.y*t.y},cross:function(t){return this.x*t.y-this.y*t.x},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){var t=Math.atan2(-this.y,-this.x)+Math.PI;return t},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},distanceToSquared:function(t){var n=this.x-t.x,i=this.y-t.y;return n*n+i*i},manhattanDistanceTo:function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)},setLength:function(t){return this.normalize().multiplyScalar(t)},lerp:function(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this},lerpVectors:function(t,n,i){return this.subVectors(n,t).multiplyScalar(i).add(t)},equals:function(t){return t.x===this.x&&t.y===this.y},fromArray:function(t,n){return void 0===n&&(n=0),this.x=t[n],this.y=t[n+1],this},toArray:function(t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),t[n]=this.x,t[n+1]=this.y,t},rotateAround:function(t,n){var i=Math.cos(n),e=Math.sin(n),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*e+t.x,this.y=r*e+o*i+t.y,this}}),t.Vector2=n}),n("skylark-graphics-layout/Location",["skylark-langx/langx","skylark-langx-numbers/Vector2","./layout"],function(t,n,i){var e=n.inherit({klassName:"Location",left:{get:function(){return this.x},set:function(t){this.x=t}},top:{get:function(){return this.y},set:function(t){this.y=t}}});return i.Location=e}),n("skylark-graphics-layout/Margin",["skylark-langx/langx","./layout"],function(t,n){var i=/\d*\D*\s*/g,e=t.klass({klassName:"Margin",left:{get:function(){return this._.left}},top:{get:function(){return this._.top}},right:{get:function(){return this._.right}},bottom:{get:function(){return this._.bottom}},getAll:function(){return this.left==this.bottom&&this.top==this.right&&this.right==this.left?this.left:null},setAll:function(t){this._={left:t,right:t,top:t,bottom:t}},clone:function(){var t=this._;return new Padding(t.top,t.right,t.left,t.bottom)},equale:function(t){return this.left==t.left&&this.top==t.top&&this.right==t.right&&this.bottom==t.bottom},equale:function(t){return this.left==t.left&&this.top==t.top&&this.right==t.right&&this.bottom==t.bottom},toArray:function(){return[this.top,this.right,this.left,this.bottom]},toPlain:function(){return{top:this.top,right:this.right,left:this.left,bottom:this.bottom}},toCss:function(t){return Padding.toCss(this,t)},toString:function(){var t=this.left.toString(),n=this.top.toString(),i=this.right.toString(),e=this.bottom.toString();return i==t?n==e?n==i?n.toString():n+" "+i:n+" "+i+" "+e:n+" "+i+" "+t+" "+e},_construct:function(t,n,i,e){void 0===e&&(void 0===i?void 0===n?e=i=n=void 0===t?t=0:t:(e=t,i=n):(e=i,i=n)),this._={left:i,right:n,top:t,bottom:e}}});return Object.mixin(e,{fromArray:function(t){switch(t.length){case 1:return new e(t[0],t[0],t[0],t[0]);case 2:case 3:case 4:return new e(t[0],t[1],t[1],t[0]);default:return}},fromPlain:function(t){return new e(t.t,t.r,t.l,t.b)},fromString:function(t){var n,r,o,s,a=t.match(i),u=a.length;switch(u){case 1:n=r=o=s=a[0];break;case 2:n=s=a[0],r=o=a[1];break;case 3:n=a[0],r=o=a[1],s=a[2];break;case 4:n=a[0],r=a[1],o=a[2],s=a[3]}return new e(n,r,o,s)},Zero:new e(0)}),e.fromCss=function(t){return new e(t.marginTop,t.marginRight,t.marginLeft,t.marginBottom)},e.toCss=function(t,n){return n||(n={}),n.marginTop=t.top.toString(),n.marginRight=t.right.toString(),n.marginLeft=t.left.toString(),n.marginBottom=t.bottom.toString(),n},e}),n("skylark-graphics-layout/MeasureType",["skylark-langx/langx","./layout"],function(t,n){var i=["auto","inherit","initial","mid","min","max","none","percent","unit"];return t.mixin(i,{auto:0,inherit:1,initial:2,mid:3,min:4,max:5,none:6,percent:7,unit:8}),n.MeasureType=i}),n("skylark-graphics-layout/MeasureUnit",["skylark-langx/langx","./layout"],function(t,n){var i=["em","ex","px","pt","pc","cm","mm","in"];return t.mixin(i,{em:0,ex:1,px:2,pt:3,pc:4,cm:5,mm:6,in:7}),n.MeasureUnit=i}),n("skylark-graphics-layout/MeasureValue",["skylark-langx/langx","./layout","./MeasureType","./MeasureUnit"],function(n,i,e,r){var o=n.klass({klassName:"MeasureValue",mtype:{get:function(){return this._.mtype},set:function(t){var n=this._;switch(n.mtype=t,t){case e.auto:n.unit=null,n.value=null;break;case e.percent:n.unit=null}}},unit:{get:function(){return this._.unit},set:function(n){var i=this._;switch(t=i.mtype,t){case e.unit:i.unit=n}}},value:{get:function(){return this._.value},set:function(n){var i=this._;switch(t=i.mtype,t){case e.unit:case e.percent:i.value=n}}},clone:function(){var t=this._;return new o(t.mtype,t.unit,t.value)},notEqual:function(t){return!t||t.mtype!=this.mtype||t.unit!=this.unit||t.value!=this.value},equal:function(t){return!this.notEqual(t)},toString:function(){switch(this.mtype){case e.auto:case e.min:case e.max:case e.mid:return this.mtype.toString();case e.unit:return this.value+this.unit.toString();case e.percent:return this.value+"%"}},_construct:function(t,n,i){var e={};void 0!=t&&(e.mtype=t),void 0!=n&&(e.value=n),void 0!=i&&(e.unit=i),this._=e}});return o.fromNumber=function(t){return new o(e.unit,t,r.px)},o.fromString=function(t){if("auto"==t)return o.auto;if("min"==t)return o.min;if("max"==t)return o.max;if("mid"==t)return o.mid;for(var n,i,s,a=r.map(function(t){return t.getText()}).concat("%"),u=0;u<a.length;u++)if(-1!=t.indexOf(a[u])){i=parseInt(t.substring(0,t.length-a[u].length),10),"%"==a[u]?n=e.percent:(n=e.unit,s=r.fromString(a[u]));break}return new o(n,i,s)},o.fromPlain=function(t){return new o(t.mtype,t.value,t.unit)},o.fromArray=function(t){return new o(t[0],t.length>1?t[1]:"undefined",t.length>1?t[2]:void 0)},o.auto=new o(e.auto),o.mid=new o(e.mid),o.min=new o(e.min),o.max=new o(e.max),i.MeasureValue=o}),n("skylark-graphics-layout/Padding",["skylark-langx/langx","./layout"],function(t,n){var i=/\d*\D*\s*/g,e=t.klass({klassName:"Padding",left:{get:function(){return this._.left}},top:{get:function(){return this._.top}},right:{get:function(){return this._.right}},bottom:{get:function(){return this._.bottom}},getAll:function(){return this.left==this.bottom&&this.top==this.right&&this.right==this.left?this.left:null},setAll:function(t){this._={left:t,right:t,top:t,bottom:t}},clone:function(){var t=this._;return new e(t.top,t.right,t.left,t.bottom)},equale:function(t){return this.left==t.left&&this.top==t.top&&this.right==t.right&&this.bottom==t.bottom},equale:function(t){return this.left==t.left&&this.top==t.top&&this.right==t.right&&this.bottom==t.bottom},toArray:function(){return[this.top,this.right,this.left,this.bottom]},toPlain:function(){return{top:this.top,right:this.right,left:this.left,bottom:this.bottom}},toCss:function(t){return e.toCss(this,t)},toString:function(){var t=this.left.toString(),n=this.top.toString(),i=this.right.toString(),e=this.bottom.toString();return i==t?n==e?n==i?n.toString():n+" "+i:n+" "+i+" "+e:n+" "+i+" "+t+" "+e},_construct:function(t,n,i,e){void 0===e&&(void 0===i?void 0===n?e=i=n=void 0===t?t=0:t:(e=t,i=n):(e=i,i=n)),this._={left:i,right:n,top:t,bottom:e}}});return t.mixin(e,{fromArray:function(t){switch(t.length){case 1:return new e(t[0],t[0],t[0],t[0]);case 2:case 3:case 4:return new e(t[0],t[1],t[1],t[0]);default:return}},fromPlain:function(t){return new e(t.t,t.r,t.l,t.b)},fromString:function(t){var n,r,o,s,a=t.match(i),u=a.length;switch(u){case 1:n=r=o=s=a[0];break;case 2:n=s=a[0],r=o=a[1];break;case 3:n=a[0],r=o=a[1],s=a[2];break;case 4:n=a[0],r=a[1],o=a[2],s=a[3]}return new e(n,r,o,s)},Zero:new e(0)}),e.fromCss=function(t){return new e(t.paddingTop,t.paddingRight,t.paddingLeft,t.paddingBottom)},e.toCss=function(t,n){return n||(n={}),t&&(n.paddingTop=t.top.toString(),n.paddingRight=t.right.toString(),n.paddingLeft=t.left.toString(),n.paddingBottom=t.bottom.toString()),n},e}),n("skylark-graphics-layout/PositionMode",["skylark-langx/langx","./layout"],function(t,n){var i=["absolute","fixed","relative","static"];return t.mixin(i,{absolute:0,fixed:1,relative:2,static:3}),n.PositionMode=i}),n("skylark-graphics-layout/Restriction",["skylark-langx/langx","./layout"],function(t,n){var i=t.klass({klassName:"Restriction",maxHeight:{get:function(){return this._.maxHeight}},maxWidth:{get:function(){return this._.maxWidth}},minHeight:{get:function(){return this._.minHeight}},minWidth:{get:function(){return this._.minWidth}},toCss:function(t){return i.toCss(this,t)},toString:function(){var t=this.minWidth,n=this.minHeight,i=this.maxWidth,e=this.maxHeight;return t.toString()+" "+n.toString()+" "+i.toString()+" "+e.toString()},_consturct:function(t,n,i,e){this._={minWidth:t,minHeight:n,maxWidth:i,maxHeight:e}}});return i.fromString=function(t){var n=t.split(" ");return i.fromArray(n)},i.fromPlain=function(t){var n=t.minWidth,e=t.minHeight,r=t.maxWidth,o=t.maxHeight;return n=n||MeasureValue.none,e=e||MeasureValue.none,r=r||MeasureValue.none,o=o||MeasureValue.none,new i(n,e,r,o)},i.fromArray=function(t){return new i(t.length>0?t[0]:MeasureValue.none,t.length>1?t[1]:MeasureValue.none,t.length>2?t[2]:MeasureValue.none,t.length>3?t[3]:MeasureValue.none)},i.fromCss=function(t){return i.fromPlain(t)},i.toCss=function(t,n){if(n||(n={}),t){var i=t.maxWidth,e=t.maxHeight,r=t.minWidth,o=t.minHeight;i&&(n.maxWidth=i.type===MeasureType.none?"":i.toString()),e&&(n.maxHeight=e.type===MeasureType.none?"":e.toString()),r&&(n.minWidth=r.type===MeasureType.none?"":r.toString()),o&&(n.minHeight=o.type===MeasureType.none?"":o.toString())}return n},i.none=new i(MeasureValue.none,MeasureValue.none,MeasureValue.none,MeasureValue.none),i}),n("skylark-graphics-layout/Size",["skylark-langx/langx","skylark-langx-numbers/Vector2","./layout"],function(t,n,i){var e=n.inherit({klassName:"Size",width:{get:function(){return this._.width}},height:{get:function(){return this._.height}},clone:function(){var t=this._;return new e(t.width,t.height)},toArray:function(){return[this.width,this.height]},toPlain:function(){return{width:this.width,height:this.height}},toString:function(){return this.width+","+this.height},init:function(t,n){var i=this._={};i.width=t||0,i.height=n||0}});return e.fromString=function(t){var n=t.split(",");return new e(parseFloat(n[0]),parseFloat(n[1]))},e.fromPlain=function(t){return new e(t.w||t.width,t.h||t.height)},e.fromArray=function(t){return new e(t[0],t[1])},e.Zero=new e(0,0),i.Size=e}),n("skylark-graphics-layout/main",["./layout","./DisplayMode","./FloatMode","./Flow","./Location","./Margin","./MeasureType","./MeasureUnit","./MeasureValue","./Padding","./PositionMode","./Restriction","./Size"],function(t){return t}),n("skylark-graphics-layout",["skylark-graphics-layout/main"],function(t){return t})}(e),!r){var a=require("skylark-langx-ns");o?module.exports=a:i.skylarkjs=a}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-graphics-layout.js.map
