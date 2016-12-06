"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MnForm=function(_HTMLElement){function MnForm(self){var _this,_ret;return _classCallCheck(this,MnForm),self=_this=_possibleConstructorReturn(this,(MnForm.__proto__||Object.getPrototypeOf(MnForm)).call(this,self)),_this.setForm(),_ret=self,_possibleConstructorReturn(_this,_ret)}return _inherits(MnForm,_HTMLElement),_createClass(MnForm,[{key:"setForm",value:function(){function putInForm(element){form.appendChild(element)}function getNameAndValue(attr){var name=attr.name,value=attr.value;return{name:name,value:value}}function defaults(attribute){return attribute.hasOwnProperty("default")}function notImplemented(defaultAttr){return!attributes.some(function(attribute){return attribute.name===defaultAttr.name})}function setAttribute(attribute){var attributeSpec=attributeSpecs.filter(function(spec){return spec.name===attribute.name})[0];if(!attributeSpec)return!1;var isDefaultAttribute=attributeSpec.hasOwnProperty("default"),attributeValue=attribute.value;if(isDefaultAttribute){var isValidValue=attributeSpec.hasOwnProperty("values")&&attributeSpec.values.indexOf(attributeValue)>=0,value=isValidValue?attributeValue:attributeSpec.default;form.setAttribute(attribute.name,value)}else attributeValue&&form.setAttribute(attribute.name,attributeValue)}var _this2=this,attributeSpecs=[{name:"spellcheck",default:"false",values:["true","false"]},{name:"name",default:"form"},{name:"novalidate",default:"true"},{name:"disabled"},{name:"autocapitalize"},{name:"id",remove:!0}],form=document.createElement("form"),attributes=Array.from(this.attributes).map(getNameAndValue),defaultAttibutes=attributeSpecs.filter(defaults).filter(notImplemented);attributes=attributes.concat(defaultAttibutes),attributes.forEach(setAttribute),attributeSpecs.filter(function(attr){return attr.remove}).forEach(function(attr){_this2.removeAttribute(attr.name)}),Array.from(this.children).forEach(putInForm),this.insertBefore(form,this.firstChild)}}]),MnForm}(HTMLElement);customElements.define("mn-form",MnForm);
//# sourceMappingURL=mn-form.js.map
