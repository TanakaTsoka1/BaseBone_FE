exports.ids = [3];
exports.modules = {

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("24ccc095", content, true, context)
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_56b3f828_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_56b3f828_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_56b3f828_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_56b3f828_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_56b3f828_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header[data-v-56b3f828]{height:80px;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center;margin-bottom:12px}.header button[data-v-56b3f828]{margin-right:8px}.right[data-v-56b3f828]{float:right;margin-left:8px}.left[data-v-56b3f828]{float:left}h1[data-v-56b3f828]{font-size:20px}.page[data-v-56b3f828]{margin:18px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_id.vue?vue&type=template&id=56b3f828&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_vm._ssrNode("<div class=\"header\" data-v-56b3f828>","</div>",[_c('NuxtLink',{attrs:{"to":"/"}},[_c('b-button',{attrs:{"type":"is-rounded","icon-right":"arrow-left"}})],1),_vm._ssrNode(" <h1 data-v-56b3f828>"+_vm._ssrEscape("Details for "+_vm._s(_vm.user.email))+"</h1>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form\" data-v-56b3f828>","</div>",[_c('b-field',{attrs:{"grouped":""}},[_c('b-field',{attrs:{"label":"Email","expanded":""}},[_c('b-input',{model:{value:(_vm.user.email),callback:function ($$v) {_vm.$set(_vm.user, "email", $$v)},expression:"user.email"}})],1),_vm._v(" "),_c('b-field',{attrs:{"label":"Phone Number","expanded":""}},[_c('b-input',{model:{value:(_vm.user.msisdn),callback:function ($$v) {_vm.$set(_vm.user, "msisdn", $$v)},expression:"user.msisdn"}})],1)],1),_vm._ssrNode(" "),_c('b-field',{attrs:{"grouped":""}},[_c('b-field',{attrs:{"label":"User Type","expanded":""}},[_c('b-input',{model:{value:(_vm.user.user_type),callback:function ($$v) {_vm.$set(_vm.user, "user_type", $$v)},expression:"user.user_type"}})],1),_vm._v(" "),_c('b-field',{attrs:{"label":"Free Premium Items"}},[_c('b-numberinput',{attrs:{"controls-alignment":"right","controls-position":"compact","min":"0","type":"is-light","defaultValue":"0"},model:{value:(_vm.user.free_premium_items),callback:function ($$v) {_vm.$set(_vm.user, "free_premium_items", $$v)},expression:"user.free_premium_items"}})],1)],1),_vm._ssrNode(" "),_c('b-button',{staticClass:"right",attrs:{"type":"is-primary","icon-left":"content-save"},on:{"click":_vm.submit}},[_vm._v("Save")]),_vm._ssrNode(" "),_c('b-button',{staticClass:"right",attrs:{"type":"is-danger","icon-left":"account-remove"},on:{"click":_vm.deleteUser}},[_vm._v("Delete")])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_id.vue?vue&type=template&id=56b3f828&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_id.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  data() {
    return {
      user: {}
    };
  },

  async fetch() {
    this.user = await fetch('https://f7b0efc1-99d2-4a67-a280-f2632dc7ed81.mock.pstmn.io/users').then(res => res.json()).then(({
      attributes
    }) => attributes.find(({
      _id
    }) => _id == this.$route.params.id));
  },

  methods: {
    async submit() {
      await fetch('https://f7b0efc1-99d2-4a67-a280-f2632dc7ed81.mock.pstmn.io/users', {
        method: 'PATCH',
        body: this.user
      }).then(res => res.json()).then(({
        status
      }) => {
        status == 'success' && this.$router.push({
          path: '/'
        });
      });
    },

    async deleteUser() {
      await fetch('https://f7b0efc1-99d2-4a67-a280-f2632dc7ed81.mock.pstmn.io/users?_id=' + this.user._id, {
        method: 'DELETE'
      }).then(res => res.json()).then(({
        status
      }) => {
        status == 'success' && this.$router.push({
          path: '/'
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "56b3f828",
  "4da18530"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map