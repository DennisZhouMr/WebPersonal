(wx.webpackJsonp=wx.webpackJsonp||[]).push([[12],{"150":function(e,t,r){"use strict";r.r(t);var o=r(61),a=r.n(o);for(var n in o)"default"!==n&&function(e){r.d(t,e,function(){return o[e]})}(n);t.default=a.a},"391":function(e,t,r){"use strict";r.r(t);var o=r(150);for(var a in o)"default"!==a&&function(e){r.d(t,e,function(){return o[e]})}(a)},"61":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var o=function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e};function defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a,n,c=r(0),u=_interopRequireDefault(c),p=_interopRequireDefault(r(4)),i=_interopRequireDefault(r(3));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtBadge,_interopRequireDefault(r(2)).default),o(AtBadge,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,r)}if("value"in o)return o.value;var n=o.get;return void 0!==n?n.call(r):void 0})(AtBadge.prototype.__proto__||Object.getPrototypeOf(AtBadge.prototype),"_constructor",this).call(this,e),this.state={},this.$$refs=new u.default.RefsArray}},{"key":"formatValue","value":function formatValue(e,t){if(""===e||null==e)return"";var r=+e;return Number.isNaN(r)?e:t<r?t+"+":r}},{"key":"_createData","value":function _createData(e,t,r){this.__state=e||this.state||{},this.__props=t||this.props||{},this.$prefix;var o=this.__props,a=o.dot,n=o.value,u=o.maxValue,i=o.customStyle,s=this.formatValue(n,u),l=(0,p.default)(["at-badge"],this.__props.className),f=(0,c.internal_inline_style)(i);return Object.assign(this.__state,{"anonymousState__temp":l,"anonymousState__temp2":f,"dot":a,"val":s}),this.__state}}]),n=a=AtBadge,a.$$events=[],a.$$componentPath="node_modules/taro-ui/dist/weapp/components/badge/index",n);function AtBadge(){var e,t,r;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtBadge);for(var o=arguments.length,a=Array(o),n=0;n<o;n++)a[n]=arguments[n];return(t=r=_possibleConstructorReturn(this,(e=AtBadge.__proto__||Object.getPrototypeOf(AtBadge)).call.apply(e,[this].concat(a)))).$usedState=["anonymousState__temp","anonymousState__temp2","dot","val","value","maxValue","customStyle","className","children"],r.customComponents=[],_possibleConstructorReturn(r,t)}s.defaultProps={"dot":!1,"value":"","maxValue":99,"customStyle":{},"className":""},s.propTypes={"dot":i.default.bool,"value":i.default.oneOfType([i.default.string,i.default.number]),"maxValue":i.default.number,"customStyle":i.default.oneOfType([i.default.object,i.default.string]),"className":i.default.oneOfType([i.default.array,i.default.string])},t.default=s,Component(r(0).default.createComponent(s))}},[[391,0,1]]]);