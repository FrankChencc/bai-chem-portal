(self.webpackChunkreact_antd_lottery=self.webpackChunkreact_antd_lottery||[]).push([[943],{3881:function(t,e,i){var n="Expected a function",r=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,p="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g,f="object"==typeof self&&self&&self.Object===Object&&self,h=p||f||Function("return this")(),y=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return h.Date.now()};function b(t,e,i){var r,o,a,s,l,u,c=0,p=!1,f=!1,h=!0;if("function"!=typeof t)throw new TypeError(n);function y(e){var i=r,n=o;return r=o=void 0,c=e,s=t.apply(n,i)}function b(t){var i=t-u;return void 0===u||i>=e||i<0||f&&t-c>=a}function S(){var t=m();if(b(t))return O(t);l=setTimeout(S,function(t){var i=e-(t-u);return f?v(i,a-(t-c)):i}(t))}function O(t){return l=void 0,h&&r?y(t):(r=o=void 0,s)}function T(){var t=m(),i=b(t);if(r=arguments,o=this,u=t,i){if(void 0===l)return function(t){return c=t,l=setTimeout(S,e),p?y(t):s}(u);if(f)return l=setTimeout(S,e),y(u)}return void 0===l&&(l=setTimeout(S,e)),s}return e=w(e)||0,g(i)&&(p=!!i.leading,a=(f="maxWait"in i)?d(w(i.maxWait)||0,e):a,h="trailing"in i?!!i.trailing:h),T.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=u=o=l=void 0},T.flush=function(){return void 0===l?s:O(m())},T}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&y.call(t)==o}(t))return r;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var i=l.test(t);return i||u.test(t)?c(t.slice(2),i?2:8):s.test(t)?r:+t}t.exports=function(t,e,i){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(n);return g(i)&&(r="leading"in i?!!i.leading:r,o="trailing"in i?!!i.trailing:o),b(t,e,{leading:r,maxWait:e,trailing:o})}},888:function(t,e,i){"use strict";var n=i(9047);function r(){}function o(){}o.resetWarningCache=r,t.exports=function(){function t(t,e,i,r,o,a){if(a!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:r};return i.PropTypes=i,i}},2007:function(t,e,i){t.exports=i(888)()},9047:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},206:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();function r(t){return t&&t.__esModule?t:{default:t}}var o=i(2791),a=r(o),s=r(i(3881)),l=r(i(2007)),u=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e,i){for(var n=!0;n;){var r=t,o=e,a=i;n=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,o);if(void 0!==s){if("value"in s)return s.value;var l=s.get;if(void 0===l)return;return l.call(a)}var u=Object.getPrototypeOf(r);if(null===u)return;t=u,e=o,i=a,n=!0,s=u=void 0}}(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t),this.serverSide="undefined"===typeof window,this.listener=(0,s.default)(this.handleScroll.bind(this),50),this.visibility={onScreen:!1,inViewport:!1},this.state={classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),n(e,[{key:"getElementTop",value:function(t){for(var e=0;t&&void 0!==t.offsetTop&&void 0!==t.clientTop;)e+=t.offsetTop+t.clientTop,t=t.offsetParent;return e}},{key:"getScrollPos",value:function(){return void 0!==this.scrollableParent.pageYOffset?this.scrollableParent.pageYOffset:this.scrollableParent.scrollTop}},{key:"getScrollableParentHeight",value:function(){return void 0!==this.scrollableParent.innerHeight?this.scrollableParent.innerHeight:this.scrollableParent.clientHeight}},{key:"getViewportTop",value:function(){return this.getScrollPos()+this.props.offset}},{key:"getViewportBottom",value:function(){return this.getScrollPos()+this.getScrollableParentHeight()-this.props.offset}},{key:"isInViewport",value:function(t){return t>=this.getViewportTop()&&t<=this.getViewportBottom()}},{key:"isAboveViewport",value:function(t){return t<this.getViewportTop()}},{key:"isBelowViewport",value:function(t){return t>this.getViewportBottom()}},{key:"inViewport",value:function(t,e){return this.isInViewport(t)||this.isInViewport(e)||this.isAboveViewport(t)&&this.isBelowViewport(e)}},{key:"onScreen",value:function(t,e){return!this.isAboveScreen(e)&&!this.isBelowScreen(t)}},{key:"isAboveScreen",value:function(t){return t<this.getScrollPos()}},{key:"isBelowScreen",value:function(t){return t>this.getScrollPos()+this.getScrollableParentHeight()}},{key:"getVisibility",value:function(){var t=this.getElementTop(this.node)-this.getElementTop(this.scrollableParent),e=t+this.node.clientHeight;return{inViewport:this.inViewport(t,e),onScreen:this.onScreen(t,e)}}},{key:"componentDidMount",value:function(){if(!this.serverSide){var t=this.props.scrollableParentSelector;this.scrollableParent=t?document.querySelector(t):window,this.scrollableParent&&this.scrollableParent.addEventListener?this.scrollableParent.addEventListener("scroll",this.listener):console.warn("Cannot find element by locator: "+this.props.scrollableParentSelector),this.props.animatePreScroll&&this.handleScroll()}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.delayedAnimationTimeout),clearTimeout(this.callbackTimeout),this.listener.cancel(),window&&window.removeEventListener&&window.removeEventListener("scroll",this.listener)}},{key:"visibilityHasChanged",value:function(t,e){return t.inViewport!==e.inViewport||t.onScreen!==e.onScreen}},{key:"animate",value:function(t,e){var i=this;this.delayedAnimationTimeout=setTimeout((function(){i.animating=!0,i.setState({classes:"animated "+t,style:{animationDuration:i.props.duration+"s"}}),i.callbackTimeout=setTimeout(e,1e3*i.props.duration)}),this.props.delay)}},{key:"animateIn",value:function(t){var e=this;this.animate(this.props.animateIn,(function(){e.props.animateOnce||(e.setState({style:{animationDuration:e.props.duration+"s",opacity:1}}),e.animating=!1);var i=e.getVisibility();t&&t(i)}))}},{key:"animateOut",value:function(t){var e=this;this.animate(this.props.animateOut,(function(){e.setState({classes:"animated",style:{animationDuration:e.props.duration+"s",opacity:0}});var i=e.getVisibility();i.inViewport&&e.props.animateIn?e.animateIn(e.props.afterAnimatedIn):e.animating=!1,t&&t(i)}))}},{key:"handleScroll",value:function(){if(!this.animating){var t=this.getVisibility();this.visibilityHasChanged(this.visibility,t)&&(clearTimeout(this.delayedAnimationTimeout),t.onScreen?t.inViewport&&this.props.animateIn?this.animateIn(this.props.afterAnimatedIn):t.onScreen&&this.visibility.inViewport&&this.props.animateOut&&1===this.state.style.opacity&&this.animateOut(this.props.afterAnimatedOut):this.setState({classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}),this.visibility=t)}}},{key:"render",value:function(){var t=this,e=this.props.className?this.props.className+" "+this.state.classes:this.state.classes;return a.default.createElement("div",{ref:function(e){t.node=e},className:e,style:Object.assign({},this.state.style,this.props.style)},this.props.children)}}]),e}(o.Component);e.default=u,u.defaultProps={offset:150,duration:1,initiallyVisible:!1,delay:0,animateOnce:!1,animatePreScroll:!0},u.propTypes={animateIn:l.default.string,animateOut:l.default.string,offset:l.default.number,duration:l.default.number,delay:l.default.number,initiallyVisible:l.default.bool,animateOnce:l.default.bool,style:l.default.object,scrollableParentSelector:l.default.string,className:l.default.string,animatePreScroll:l.default.bool},t.exports=e.default},1274:function(){}}]);