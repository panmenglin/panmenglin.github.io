(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueBlocks"] = factory();
	else
		root["VueBlocks"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://panmenglin.github.io/tenon-examples/vue/";
/******/
/******/ 	var jsonpArray = window["webpackJsonpVueBlocks"] = window["webpackJsonpVueBlocks"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!***************************************!*\
  !*** multi ./src/components/entry.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/panmenglin3/Project/tenon/examples/vue/src/components/entry.js */"9931");


/***/ }),

/***/ "1662":
/*!*************************************!*\
  !*** ./src/components/ChartPie.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartPie_vue_vue_type_template_id_b5b1f9ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartPie.vue?vue&type=template&id=b5b1f9ca&scoped=true& */ "7784");
/* harmony import */ var _ChartPie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartPie.vue?vue&type=script&lang=js& */ "ab12");
/* empty/unused harmony star reexport *//* harmony import */ var _ChartPie_vue_vue_type_style_index_0_id_b5b1f9ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChartPie.vue?vue&type=style&index=0&id=b5b1f9ca&scoped=true&lang=css& */ "1cc3");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChartPie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartPie_vue_vue_type_template_id_b5b1f9ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartPie_vue_vue_type_template_id_b5b1f9ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b5b1f9ca",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "1cc3":
/*!**********************************************************************************************!*\
  !*** ./src/components/ChartPie.vue?vue&type=style&index=0&id=b5b1f9ca&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartPie_vue_vue_type_style_index_0_id_b5b1f9ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--7-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./ChartPie.vue?vue&type=style&index=0&id=b5b1f9ca&scoped=true&lang=css& */ "7871");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartPie_vue_vue_type_style_index_0_id_b5b1f9ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartPie_vue_vue_type_style_index_0_id_b5b1f9ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartPie_vue_vue_type_style_index_0_id_b5b1f9ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartPie_vue_vue_type_style_index_0_id_b5b1f9ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "3b02":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a740ce16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ChartPie.vue?vue&type=template&id=b5b1f9ca&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container",attrs:{"id":"fff"}},[_c('div',{staticClass:"filter"},[_c('Select',{staticStyle:{"width":"200px","margin-right":"10px"},model:{value:(_vm.model1),callback:function ($$v) {_vm.model1=$$v},expression:"model1"}},_vm._l((_vm.cityList),function(item){return _c('Option',{key:item.value,attrs:{"value":item.value}},[_vm._v(_vm._s(item.label))])}),1),_c('Button',{attrs:{"type":"primary"},on:{"click":_vm.info}},[_vm._v("Display info prompt")])],1),_c('v-chart',{staticClass:"chart",attrs:{"id":"ffchart","option":_vm.option,"autoresize":""}}),_c('div',{ref:"root"})],1)}
var staticRenderFns = []



/***/ }),

/***/ "7784":
/*!********************************************************************************!*\
  !*** ./src/components/ChartPie.vue?vue&type=template&id=b5b1f9ca&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a740ce16_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartPie_vue_vue_type_template_id_b5b1f9ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a740ce16-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./ChartPie.vue?vue&type=template&id=b5b1f9ca&scoped=true& */ "3b02");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a740ce16_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartPie_vue_vue_type_template_id_b5b1f9ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a740ce16_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartPie_vue_vue_type_template_id_b5b1f9ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "7871":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ChartPie.vue?vue&type=style&index=0&id=b5b1f9ca&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9931":
/*!*********************************!*\
  !*** ./src/components/entry.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_panmenglin3_Project_tenon_examples_vue_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ "e260");
/* harmony import */ var _Users_panmenglin3_Project_tenon_examples_vue_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_panmenglin3_Project_tenon_examples_vue_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_panmenglin3_Project_tenon_examples_vue_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ "e6cf");
/* harmony import */ var _Users_panmenglin3_Project_tenon_examples_vue_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_panmenglin3_Project_tenon_examples_vue_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_panmenglin3_Project_tenon_examples_vue_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "cca6");
/* harmony import */ var _Users_panmenglin3_Project_tenon_examples_vue_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_panmenglin3_Project_tenon_examples_vue_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_panmenglin3_Project_tenon_examples_vue_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ "a79d");
/* harmony import */ var _Users_panmenglin3_Project_tenon_examples_vue_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_panmenglin3_Project_tenon_examples_vue_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "2b0e");
/* harmony import */ var view_design__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! view-design */ "f825");
/* harmony import */ var view_design__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(view_design__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var view_design_dist_styles_iview_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! view-design/dist/styles/iview.css */ "f8ce");
/* harmony import */ var view_design_dist_styles_iview_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(view_design_dist_styles_iview_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_echarts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-echarts */ "5c7f");
/* harmony import */ var echarts_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! echarts/core */ "3b8f");
/* harmony import */ var echarts_renderers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! echarts/renderers */ "ae9d");
/* harmony import */ var echarts_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! echarts/charts */ "e824");
/* harmony import */ var echarts_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! echarts/components */ "f235");
/* harmony import */ var _ChartPie_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ChartPie.vue */ "1662");













vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(view_design__WEBPACK_IMPORTED_MODULE_5___default.a);
Object(echarts_core__WEBPACK_IMPORTED_MODULE_8__["use"])([echarts_renderers__WEBPACK_IMPORTED_MODULE_9__["CanvasRenderer"], echarts_charts__WEBPACK_IMPORTED_MODULE_10__["BarChart"], echarts_components__WEBPACK_IMPORTED_MODULE_11__["GridComponent"], echarts_components__WEBPACK_IMPORTED_MODULE_11__["TooltipComponent"]]);
vue__WEBPACK_IMPORTED_MODULE_4__["default"].component('v-chart', vue_echarts__WEBPACK_IMPORTED_MODULE_7__["default"]);
var instance = null;
var blocks = {
  PieChart: {
    mount: function mount(el) {
      instance = new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
        render: function render(h) {
          return h(_ChartPie_vue__WEBPACK_IMPORTED_MODULE_12__["default"]);
        }
      }).$mount(el);
    },
    unmount: function unmount() {
      instance.$destroy();
      instance.$el.innerHTML = '';
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (blocks);

/***/ }),

/***/ "ab12":
/*!**************************************************************!*\
  !*** ./src/components/ChartPie.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartPie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./ChartPie.vue?vue&type=script&lang=js& */ "e45b");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartPie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "e45b":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ChartPie.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var echarts_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts/core */ "3b8f");
/* harmony import */ var echarts_renderers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts/renderers */ "ae9d");
/* harmony import */ var echarts_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts/charts */ "e824");
/* harmony import */ var echarts_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts/components */ "f235");
/* harmony import */ var vue_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-echarts */ "5c7f");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





Object(echarts_core__WEBPACK_IMPORTED_MODULE_0__["use"])([echarts_renderers__WEBPACK_IMPORTED_MODULE_1__["CanvasRenderer"], echarts_charts__WEBPACK_IMPORTED_MODULE_2__["PieChart"], echarts_components__WEBPACK_IMPORTED_MODULE_3__["TitleComponent"], echarts_components__WEBPACK_IMPORTED_MODULE_3__["TooltipComponent"], echarts_components__WEBPACK_IMPORTED_MODULE_3__["LegendComponent"]]);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PieChart",
  components: {
    VChart: vue_echarts__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      cityList: [{
        value: "New York",
        label: "New York"
      }, {
        value: "London",
        label: "London"
      }, {
        value: "Sydney",
        label: "Sydney"
      }, {
        value: "Ottawa",
        label: "Ottawa"
      }, {
        value: "Paris",
        label: "Paris"
      }, {
        value: "Canberra",
        label: "Canberra"
      }],
      model1: "",
      option: {
        title: {
          text: "Traffic Sources",
          left: "center"
        },
        width: 'auto',
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"]
        },
        series: [{
          name: "Traffic Sources",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [{
            value: 335,
            name: "Direct"
          }, {
            value: 310,
            name: "Email"
          }, {
            value: 234,
            name: "Ad Networks"
          }, {
            value: 135,
            name: "Video Ads"
          }, {
            value: 1548,
            name: "Search Engines"
          }],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }]
      }
    };
  },
  methods: {
    info: function info() {
      this.$Message.info("This is a info tip");
    }
  },
  mounted: function mounted() {
    console.log(this.$refs.root);
  }
});

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=index.d189418f.js.map