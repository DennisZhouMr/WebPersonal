(wx.webpackJsonp=wx.webpackJsonp||[]).push([[16],{"156":function(t,e,o){"use strict";o.r(e);var n=o(67),r=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e.default=r.a},"406":function(t,e,o){"use strict";o.r(e);var n=o(156);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r)},"67":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var H=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var o=[],n=!0,r=!1,s=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(o.push(i.value),!e||o.length!==e);n=!0);}catch(t){r=!0,s=t}finally{try{!n&&u.return&&u.return()}finally{if(r)throw s}}return o}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(t,e,o){return e&&defineProperties(t.prototype,e),o&&defineProperties(t,o),t};function defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r,s,U=o(0),d=_interopRequireDefault(U),x=_interopRequireDefault(o(4)),i=_interopRequireDefault(o(3)),u=_interopRequireDefault(o(2));function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function D(t,e,o,n){return 60*t*60*24+60*e*60+60*o+n}var a=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(AtCountdown,u.default),n(AtCountdown,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var r=Object.getPrototypeOf(t);return null===r?void 0:get(r,e,o)}if("value"in n)return n.value;var s=n.get;return void 0!==s?s.call(o):void 0})(AtCountdown.prototype.__proto__||Object.getPrototypeOf(AtCountdown.prototype),"_constructor",this).call(this,t);var e=this.props,o=e.day,n=e.hours,r=e.minutes,s=e.seconds;this.seconds=D(o,n,r,s);var i=this.calculateTime(),u=i.day,a=i.hours,c=i.minutes,l=i.seconds;this.state={"_day":u,"_hours":a,"_minutes":c,"_seconds":l},this.timer=void 0,this.$$refs=new d.default.RefsArray}},{"key":"setTimer","value":function setTimer(){this.timer||this.countdonwn()}},{"key":"clearTimer","value":function clearTimer(){this.timer&&(clearTimeout(this.timer),this.timer=void 0)}},{"key":"calculateTime","value":function calculateTime(){var t=0,e=0,o=0,n=0;return 0<this.seconds&&(t=this.props.isShowDay?Math.floor(this.seconds/86400):0,e=Math.floor(this.seconds/3600)-24*t,o=Math.floor(this.seconds/60)-24*t*60-60*e,n=Math.floor(this.seconds)-24*t*60*60-60*e*60-60*o),{"day":t,"hours":e,"minutes":o,"seconds":n}}},{"key":"countdonwn","value":function countdonwn(){var t=this,e=this.calculateTime(),o=e.day,n=e.hours,r=e.minutes,s=e.seconds;if(this.setState({"_day":o,"_hours":n,"_minutes":r,"_seconds":s}),this.seconds--,this.seconds<0)return this.clearTimer(),void(this.props.onTimeUp&&this.props.onTimeUp());this.timer=setTimeout(function(){t.countdonwn()},1e3)}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(t){var e,o,n,r;JSON.stringify(this.props)!==JSON.stringify(t)&&(e=t.day,o=t.hours,n=t.minutes,r=t.seconds,this.seconds=D(e,o,n,r),this.clearTimer(),this.setTimer())}},{"key":"componentDidMount","value":function componentDidMount(){this.setTimer()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearTimer()}},{"key":"componentDidHide","value":function componentDidHide(){this.clearTimer()}},{"key":"componentDidShow","value":function componentDidShow(){this.setTimer()}},{"key":"_createData","value":function _createData(t,e,o){this.__state=t||this.state||{},this.__props=e||this.props||{};var n=this.$prefix,r=(0,U.genCompid)(n+"$compid__782"),s=H(r,2),i=s[0],u=s[1],a=(0,U.genCompid)(n+"$compid__783"),c=H(a,2),l=c[0],d=c[1],p=(0,U.genCompid)(n+"$compid__784"),f=H(p,2),m=f[0],h=f[1],_=(0,U.genCompid)(n+"$compid__785"),y=H(_,2),v=y[0],w=y[1],b=this.__props,S=b.className,T=b.customStyle,C=b.format,g=b.isShowDay,D=b.isCard,O=b.isShowHour,$=this.__state,k=$._day,P=$._hours,j=$._minutes,A=$._seconds,M=(0,x.default)({"at-countdown":!0,"at-countdown--card":D},S),R=(0,U.internal_inline_style)(T);return g&&U.propsManager.set({"num":k,"separator":C.day},u,i),O&&U.propsManager.set({"num":P,"separator":C.hours},d,l),U.propsManager.set({"num":j,"separator":C.minutes},h,m),U.propsManager.set({"num":A,"separator":C.seconds},w,v),Object.assign(this.__state,{"anonymousState__temp":M,"anonymousState__temp2":R,"$compid__782":u,"$compid__783":d,"$compid__784":h,"$compid__785":w,"isShowDay":g,"isShowHour":O}),this.__state}}]),s=r=AtCountdown,r.$$events=[],r.$$componentPath="node_modules/taro-ui/dist/weapp/components/countdown/index",s);function AtCountdown(){var t,e,o;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,AtCountdown);for(var n=arguments.length,r=Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=o=_possibleConstructorReturn(this,(t=AtCountdown.__proto__||Object.getPrototypeOf(AtCountdown)).call.apply(t,[this].concat(r)))).$usedState=["anonymousState__temp","anonymousState__temp2","$compid__782","$compid__783","$compid__784","$compid__785","isShowDay","isShowHour","_day","_hours","_minutes","_seconds","day","hours","minutes","seconds","className","customStyle","format","isCard"],o.customComponents=["AtCountdownItem"],_possibleConstructorReturn(o,e)}a.defaultProps={"customStyle":"","className":"","isCard":!1,"isShowDay":!1,"isShowHour":!0,"format":{"day":"天","hours":"时","minutes":"分","seconds":"秒"},"day":0,"hours":0,"minutes":0,"seconds":0,"onTimeUp":function onTimeUp(){}},a.propTypes={"customStyle":i.default.oneOfType([i.default.object,i.default.string]),"className":i.default.oneOfType([i.default.array,i.default.string]),"isCard":i.default.bool,"isShowDay":i.default.bool,"isShowHour":i.default.bool,"format":i.default.object,"day":i.default.number,"hours":i.default.number,"minutes":i.default.number,"seconds":i.default.number,"onTimeUp":i.default.func},e.default=a,Component(o(0).default.createComponent(a))}},[[406,0,1]]]);