webpackHotUpdate_N_E("pages/index",{

/***/ "./component/header.js":
/*!*****************************!*\
  !*** ./component/header.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\MyPC\\Desktop\\nextjs-app\\component\\header.js";




function Header(props) {
  if (true) {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()("#search").on('click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#header-overlay').css('opacity', '1');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#header-overlay').css('visibility', 'unset');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#dropdown-menu').css('opacity', '0');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#dropdown-menu').css('visibility', 'hidden');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.dropdown-menu').css('opacity', '0');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.dropdown-menu').css('visibility', 'hidden');
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.box-main__box-about, .header-overlay, .navbar-header, .box-sliding, .banner, .box-menu').on('click', function () {
      localStorage.setItem('flag', false);

      var _flag = localStorage.getItem('flag');

      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#header-overlay').css('opacity', '0');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#header-overlay').css('visibility', 'hidden');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#search-input').css('background', '#fff'); // $('.dropdown-menu').css('display', 'none');
      // $('#header-overlay').css('display', 'none');
      // $('#header-overlay').toggle();
      // console.log(props);

      if (_flag === 'false') {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('#header-overlay').css('opacity', '0');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('#header-overlay').css('visibility', 'hidden');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('#dropdown-menu').css('opacity', '0');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('#dropdown-menu').css('visibility', 'hidden');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.dropdown-menu').css('opacity', '0');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.dropdown-menu').css('visibility', 'hidden');
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('#search-button').on('click', function () {
      console.log('fsdf');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#search-input').css('background', '#faebe7');
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('#dropdown-toggle').on('click', function () {// $('.dropdown-menu').toggle();
      // $('#header-overlay').css('opacity', '1');
      // $('#header-overlay').css('visibility', 'unset');
      // $('#header-overlay').toggle();
    }); //Button Navbar menu mobile

    jquery__WEBPACK_IMPORTED_MODULE_4___default()('#nav-mobile').on('click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#box-menu__click').toggle();
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#nav-mobile-close').css('display', 'block');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#nav-mobile').css('display', 'none');
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('#nav-mobile-close').on('click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#box-menu__click').css('display', 'none');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#nav-mobile').css('display', 'block');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#nav-mobile-close').css('display', 'none');
    }); //Button location pc

    jquery__WEBPACK_IMPORTED_MODULE_4___default()('#dropdown').on('click', function () {
      // localStorage.setItem('flag', false);
      // let _flag = localStorage.getItem('flag');
      // $('#header-overlay').css('opacity', '1');
      // $('#header-overlay').css('visibility', 'unset');
      // $('.dropdown-menu').css('opacity', '1');
      // $('.dropdown-menu').css('visibility', 'unset');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#dropdown-menu-pc').toggle(function () {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.dropdown-menu').css('opacity', '1');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.dropdown-menu').css('visibility', 'unset');
      }, function () {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.dropdown-menu').css('opacity', '0');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.dropdown-menu').css('visibility', 'hidden');
      });
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: "header",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header-content container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "navbar-header",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "pc",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBars"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 46
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
            id: "nav-mobile",
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBars"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
            id: "nav-mobile-close",
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "./logo.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
            className: "sp",
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingBag"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "dropdown",
        className: "box-main__box-local dropdown pc",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "dropdown-flex",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            id: "dropdown-toggle",
            className: "dropdown-toggle",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Xem gi\xE1, t\u1ED3n kho t\u1EA1i:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: ["H\u1ED3 Ch\xED Minh\u2003", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAngleDown"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            id: "dropdown-menu-pc",
            className: "dropdown-menu",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMapMarkerAlt"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 33
                }, this), "H\xE0 N\u1ED9i"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMapMarkerAlt"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 33
                }, this), "H\u1EA3i D\u01B0\u01A1ng"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMapMarkerAlt"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 33
                }, this), "H\u1ED3 Ch\xED Minh"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMapMarkerAlt"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 33
                }, this), "B\xECnh D\u01B0\u01A1ng"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        id: "search_mini_form",
        className: "box-main__form-search",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "input-group",
          id: "search",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            id: "search-input",
            className: "form-control",
            placeholder: "B\u1EA1n c\u1EA7n t\xECm g\xEC?",
            maxLength: "128",
            autoComplete: "off"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "input-group-btn",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              id: "search-button",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSearch"]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "box-main__box-about",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "box-about",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "about__box-icon pc",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPhone"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "about__box-content pc",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "title",
              children: "G\u1ECDi mua h\xE0ng:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: "1800.2097"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 32
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "box-about",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "about__box-icon pc",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMapMarkerAlt"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "about__box-content pc",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "title",
              children: "T\xECm c\u1EEDa h\xE0ng"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "box-about",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "about__box-icon pc",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingBag"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "about__box-content pc",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "title",
              children: "Gi\u1ECF h\xE0ng"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 9
  }, this);
}
_c = Header;

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsIiQiLCJvbiIsImNzcyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJfZmxhZyIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlIiwiZmFCYXJzIiwiZmFUaW1lcyIsImZhU2hvcHBpbmdCYWciLCJmYUFuZ2xlRG93biIsImZhTWFwTWFya2VyQWx0IiwiZmFTZWFyY2giLCJmYVBob25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBU0E7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUNsQyxZQUFxQjtBQUVqQkMsaURBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUMsRUFBYixDQUFnQixPQUFoQixFQUF5QixZQUFNO0FBQzNCRCxtREFBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJFLEdBQXJCLENBQXlCLFNBQXpCLEVBQW9DLEdBQXBDO0FBQ0FGLG1EQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkUsR0FBckIsQ0FBeUIsWUFBekIsRUFBdUMsT0FBdkM7QUFDQUYsbURBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CRSxHQUFwQixDQUF3QixTQUF4QixFQUFtQyxHQUFuQztBQUNBRixtREFBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JFLEdBQXBCLENBQXdCLFlBQXhCLEVBQXNDLFFBQXRDO0FBQ0FGLG1EQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkUsR0FBcEIsQ0FBd0IsU0FBeEIsRUFBbUMsR0FBbkM7QUFDQUYsbURBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CRSxHQUFwQixDQUF3QixZQUF4QixFQUFzQyxRQUF0QztBQUNILEtBUEQ7QUFRQUYsaURBQUMsQ0FBQyx5RkFBRCxDQUFELENBQTZGQyxFQUE3RixDQUFnRyxPQUFoRyxFQUF5RyxZQUFNO0FBQzNHRSxrQkFB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QUFBO0FBQUEsY0FyREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBcUZIO0tBcEt1QmQsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MTQ0NzkwY2MxYmI5MjM1MmQ2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBcclxuICAgIGZhUGhvbmUsXHJcbiAgICBmYVNob3BwaW5nQmFnLFxyXG4gICAgZmFTZWFyY2gsXHJcbiAgICBmYUJhcnMsXHJcbiAgICBmYUFuZ2xlRG93bixcclxuICAgIGZhTWFwTWFya2VyQWx0LFxyXG4gICAgZmFUaW1lc1xyXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIFxyXG4gICAgICAgICQoXCIjc2VhcmNoXCIpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgJCgnI2hlYWRlci1vdmVybGF5JykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAgICAgJCgnI2hlYWRlci1vdmVybGF5JykuY3NzKCd2aXNpYmlsaXR5JywgJ3Vuc2V0Jyk7XHJcbiAgICAgICAgICAgICQoJyNkcm9wZG93bi1tZW51JykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgICAgICAgICAgJCgnI2Ryb3Bkb3duLW1lbnUnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICQoJy5kcm9wZG93bi1tZW51JykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgICAgICAgICAgJCgnLmRyb3Bkb3duLW1lbnUnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCcuYm94LW1haW5fX2JveC1hYm91dCwgLmhlYWRlci1vdmVybGF5LCAubmF2YmFyLWhlYWRlciwgLmJveC1zbGlkaW5nLCAuYmFubmVyLCAuYm94LW1lbnUnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmbGFnJywgZmFsc2UpXHJcbiAgICAgICAgICAgIGxldCBfZmxhZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmbGFnJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKCcjaGVhZGVyLW92ZXJsYXknKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgICAgICAgICAkKCcjaGVhZGVyLW92ZXJsYXknKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICQoJyNzZWFyY2gtaW5wdXQnKS5jc3MoJ2JhY2tncm91bmQnLCAnI2ZmZicpO1xyXG4gICAgICAgICAgICAvLyAkKCcuZHJvcGRvd24tbWVudScpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIC8vICQoJyNoZWFkZXItb3ZlcmxheScpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIC8vICQoJyNoZWFkZXItb3ZlcmxheScpLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9wcyk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKF9mbGFnID09PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjaGVhZGVyLW92ZXJsYXknKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgICAgICAgICAgICAgJCgnI2hlYWRlci1vdmVybGF5JykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgJCgnI2Ryb3Bkb3duLW1lbnUnKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgICAgICAgICAgICAgJCgnI2Ryb3Bkb3duLW1lbnUnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuZHJvcGRvd24tbWVudScpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuZHJvcGRvd24tbWVudScpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnI3NlYXJjaC1idXR0b24nKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmc2RmJyk7XHJcbiAgICAgICAgICAgICQoJyNzZWFyY2gtaW5wdXQnKS5jc3MoJ2JhY2tncm91bmQnLCAnI2ZhZWJlNycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnI2Ryb3Bkb3duLXRvZ2dsZScpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gJCgnLmRyb3Bkb3duLW1lbnUnKS50b2dnbGUoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vICQoJyNoZWFkZXItb3ZlcmxheScpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgICAgIC8vICQoJyNoZWFkZXItb3ZlcmxheScpLmNzcygndmlzaWJpbGl0eScsICd1bnNldCcpO1xyXG4gICAgICAgICAgICAvLyAkKCcjaGVhZGVyLW92ZXJsYXknKS50b2dnbGUoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvL0J1dHRvbiBOYXZiYXIgbWVudSBtb2JpbGVcclxuICAgICAgICAkKCcjbmF2LW1vYmlsZScpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgJCgnI2JveC1tZW51X19jbGljaycpLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAkKCcjbmF2LW1vYmlsZS1jbG9zZScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICAgICAkKCcjbmF2LW1vYmlsZScpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCcjbmF2LW1vYmlsZS1jbG9zZScpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgJCgnI2JveC1tZW51X19jbGljaycpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgICQoJyNuYXYtbW9iaWxlJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICQoJyNuYXYtbW9iaWxlLWNsb3NlJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvL0J1dHRvbiBsb2NhdGlvbiBwY1xyXG4gICAgICAgICQoJyNkcm9wZG93bicpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZsYWcnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vIGxldCBfZmxhZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmbGFnJyk7XHJcbiAgICAgICAgICAgIC8vICQoJyNoZWFkZXItb3ZlcmxheScpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgICAgIC8vICQoJyNoZWFkZXItb3ZlcmxheScpLmNzcygndmlzaWJpbGl0eScsICd1bnNldCcpO1xyXG4gICAgICAgICAgICAvLyAkKCcuZHJvcGRvd24tbWVudScpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgICAgIC8vICQoJy5kcm9wZG93bi1tZW51JykuY3NzKCd2aXNpYmlsaXR5JywgJ3Vuc2V0Jyk7XHJcblxyXG4gICAgICAgICAgICAkKCcjZHJvcGRvd24tbWVudS1wYycpLnRvZ2dsZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoJy5kcm9wZG93bi1tZW51JykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAgICAgICAgICQoJy5kcm9wZG93bi1tZW51JykuY3NzKCd2aXNpYmlsaXR5JywgJ3Vuc2V0Jyk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoJy5kcm9wZG93bi1tZW51JykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgICAgICAgICAgICAgICQoJy5kcm9wZG93bi1tZW51JykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnQgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwY1wiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXJzfT48L0ZvbnRBd2Vzb21lSWNvbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWQ9XCJuYXYtbW9iaWxlXCIgaWNvbj17ZmFCYXJzfT48L0ZvbnRBd2Vzb21lSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpZD1cIm5hdi1tb2JpbGUtY2xvc2VcIiBpY29uPXtmYVRpbWVzfT48L0ZvbnRBd2Vzb21lSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2xvZ28uanBnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJzcFwiIGljb249e2ZhU2hvcHBpbmdCYWd9PjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImRyb3Bkb3duXCIgY2xhc3NOYW1lPVwiYm94LW1haW5fX2JveC1sb2NhbCBkcm9wZG93biBwY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBpZD1cImRyb3Bkb3duLXRvZ2dsZVwiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5YZW0gZ2nDoSwgdOG7k24ga2hvIHThuqFpOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5I4buTIENow60gTWluaOKAg1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQW5nbGVEb3dufT48L0ZvbnRBd2Vzb21lSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJkcm9wZG93bi1tZW51LXBjXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFNYXBNYXJrZXJBbHR9PjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEjDoCBO4buZaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYU1hcE1hcmtlckFsdH0+PC9Gb250QXdlc29tZUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSOG6o2kgRMawxqFuZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYU1hcE1hcmtlckFsdH0+PC9Gb250QXdlc29tZUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSOG7kyBDaMOtIE1pbmhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFNYXBNYXJrZXJBbHR9PjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIELDrG5oIETGsMahbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInNlYXJjaF9taW5pX2Zvcm1cIiBjbGFzc05hbWU9XCJib3gtbWFpbl9fZm9ybS1zZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCIgaWQ9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2gtaW5wdXRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkLhuqFuIGPhuqduIHTDrG0gZ8OsP1wiIG1heExlbmd0aD1cIjEyOFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWFyY2gtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNlYXJjaH0+PC9Gb250QXdlc29tZUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1tYWluX19ib3gtYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJib3gtYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF9fYm94LWljb24gcGNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQaG9uZX0+PC9Gb250QXdlc29tZUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0X19ib3gtY29udGVudCBwY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5H4buNaSBtdWEgaMOgbmc6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz4xODAwLjIwOTc8L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJib3gtYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF9fYm94LWljb24gcGNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFNYXBNYXJrZXJBbHR9PjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF9fYm94LWNvbnRlbnQgcGNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+VMOsbSBj4butYSBow6BuZzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJveC1hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0X19ib3gtaWNvbiBwY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNob3BwaW5nQmFnfT48L0ZvbnRBd2Vzb21lSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfX2JveC1jb250ZW50IHBjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPkdp4buPIGjDoG5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==