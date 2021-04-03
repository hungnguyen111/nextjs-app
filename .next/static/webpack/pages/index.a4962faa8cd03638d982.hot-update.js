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
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#dropdown-menu-pc').toggleClass('active');
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
              lineNumber: 90,
              columnNumber: 46
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
            id: "nav-mobile",
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBars"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
            id: "nav-mobile-close",
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "./logo.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
            className: "sp",
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingBag"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
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
                lineNumber: 104,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: ["H\u1ED3 Ch\xED Minh\u2003", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAngleDown"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
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
                  lineNumber: 112,
                  columnNumber: 33
                }, this), "H\xE0 N\u1ED9i"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMapMarkerAlt"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 33
                }, this), "H\u1EA3i D\u01B0\u01A1ng"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMapMarkerAlt"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 33
                }, this), "H\u1ED3 Ch\xED Minh"]
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
                }, this), "B\xECnh D\u01B0\u01A1ng"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
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
            lineNumber: 132,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "input-group-btn",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              id: "search-button",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSearch"]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
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
              lineNumber: 143,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "about__box-content pc",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "title",
              children: "G\u1ECDi mua h\xE0ng:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: "1800.2097"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 32
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "box-about",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "about__box-icon pc",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMapMarkerAlt"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "about__box-content pc",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "title",
              children: "T\xECm c\u1EEDa h\xE0ng"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "box-about",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "about__box-icon pc",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingBag"]
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
              children: "Gi\u1ECF h\xE0ng"
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
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsIiQiLCJvbiIsImNzcyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJfZmxhZyIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJmYUJhcnMiLCJmYVRpbWVzIiwiZmFTaG9wcGluZ0JhZyIsImZhQW5nbGVEb3duIiwiZmFNYXBNYXJrZXJBbHQiLCJmYVNlYXJjaCIsImZhUGhvbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFTQTtBQUVlLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQ2xDLFlBQXFCO0FBRWpCQyxpREFBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhQyxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLFlBQU07QUFDM0JELG1EQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkUsR0FBckIsQ0FBeUIsU0FBekIsRUFBb0MsR0FBcEM7QUFDQUYsbURBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCRSxHQUFyQixDQUF5QixZQUF6QixFQUF1QyxPQUF2QztBQUNBRixtREFBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JFLEdBQXBCLENBQXdCLFNBQXhCLEVBQW1DLEdBQW5DO0FBQ0FGLG1EQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkUsR0FBcEIsQ0FBd0IsWUFBeEIsRUFBc0MsUUFBdEM7QUFDQUYsbURBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CRSxHQUFwQixDQUF3QixTQUF4QixFQUFtQyxHQUFuQztBQUNBRixtREFBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JFLEdBQXBCLENBQXdCLFlBQXhCLEVBQXNDLFFBQXRDO0FBQ0gsS0FQRDtBQVFBRixpREFBQyxDQUFDLHlGQUFELENBQUQsQ0FBNkZDLEVBQTdGLENBQWdHLE9BQWhHLEVBQXlHLFlB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QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsb0JBQWY7QUFBQSxtQ0FDSSxxRUFBQyw4RUFBRDtBQUFpQixrQkFBSSxFQUFFRixnRkFBY0E7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFJSTtBQUFLLHFCQUFTLEVBQUMsdUJBQWY7QUFBQSxtQ0FDSTtBQUFHLHVCQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZKLGVBa0JJO0FBQUcsbUJBQVMsRUFBQyxXQUFiO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLG9CQUFmO0FBQUEsbUNBQ0kscUVBQUMsOEVBQUQ7QUFBaUIsa0JBQUksRUFBRUYsK0VBQWFBO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBSUk7QUFBSyxxQkFBUyxFQUFDLHVCQUFmO0FBQUEsbUNBQ0k7QUFBRyx1QkFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFGSDtLQTVKdUJmLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTQ5NjJmYWE4Y2QwMzYzOGQ5ODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgXHJcbiAgICBmYVBob25lLFxyXG4gICAgZmFTaG9wcGluZ0JhZyxcclxuICAgIGZhU2VhcmNoLFxyXG4gICAgZmFCYXJzLFxyXG4gICAgZmFBbmdsZURvd24sXHJcbiAgICBmYU1hcE1hcmtlckFsdCxcclxuICAgIGZhVGltZXNcclxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBcclxuICAgICAgICAkKFwiI3NlYXJjaFwiKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICQoJyNoZWFkZXItb3ZlcmxheScpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgICAgICQoJyNoZWFkZXItb3ZlcmxheScpLmNzcygndmlzaWJpbGl0eScsICd1bnNldCcpO1xyXG4gICAgICAgICAgICAkKCcjZHJvcGRvd24tbWVudScpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICAgICAgICAgICQoJyNkcm9wZG93bi1tZW51JykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAkKCcuZHJvcGRvd24tbWVudScpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICAgICAgICAgICQoJy5kcm9wZG93bi1tZW51JykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnLmJveC1tYWluX19ib3gtYWJvdXQsIC5oZWFkZXItb3ZlcmxheSwgLm5hdmJhci1oZWFkZXIsIC5ib3gtc2xpZGluZywgLmJhbm5lciwgLmJveC1tZW51Jykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmxhZycsIGZhbHNlKVxyXG4gICAgICAgICAgICBsZXQgX2ZsYWcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmxhZycpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJCgnI2hlYWRlci1vdmVybGF5JykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgICAgICAgICAgJCgnI2hlYWRlci1vdmVybGF5JykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAkKCcjc2VhcmNoLWlucHV0JykuY3NzKCdiYWNrZ3JvdW5kJywgJyNmZmYnKTtcclxuICAgICAgICAgICAgLy8gJCgnLmRyb3Bkb3duLW1lbnUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAvLyAkKCcjaGVhZGVyLW92ZXJsYXknKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAvLyAkKCcjaGVhZGVyLW92ZXJsYXknKS50b2dnbGUoKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvcHMpO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChfZmxhZyA9PT0gJ2ZhbHNlJykge1xyXG4gICAgICAgICAgICAgICAgJCgnI2hlYWRlci1vdmVybGF5JykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgICAgICAgICAgICAgICQoJyNoZWFkZXItb3ZlcmxheScpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICQoJyNkcm9wZG93bi1tZW51JykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgICAgICAgICAgICAgICQoJyNkcm9wZG93bi1tZW51JykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmRyb3Bkb3duLW1lbnUnKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmRyb3Bkb3duLW1lbnUnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJyNzZWFyY2gtYnV0dG9uJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZnNkZicpO1xyXG4gICAgICAgICAgICAkKCcjc2VhcmNoLWlucHV0JykuY3NzKCdiYWNrZ3JvdW5kJywgJyNmYWViZTcnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJyNkcm9wZG93bi10b2dnbGUnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICQoJy5kcm9wZG93bi1tZW51JykudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAkKCcjaGVhZGVyLW92ZXJsYXknKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICAgICAvLyAkKCcjaGVhZGVyLW92ZXJsYXknKS5jc3MoJ3Zpc2liaWxpdHknLCAndW5zZXQnKTtcclxuICAgICAgICAgICAgLy8gJCgnI2hlYWRlci1vdmVybGF5JykudG9nZ2xlKCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy9CdXR0b24gTmF2YmFyIG1lbnUgbW9iaWxlXHJcbiAgICAgICAgJCgnI25hdi1tb2JpbGUnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICQoJyNib3gtbWVudV9fY2xpY2snKS50b2dnbGUoKTtcclxuICAgICAgICAgICAgJCgnI25hdi1tb2JpbGUtY2xvc2UnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICAgICAgJCgnI25hdi1tb2JpbGUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnI25hdi1tb2JpbGUtY2xvc2UnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICQoJyNib3gtbWVudV9fY2xpY2snKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAkKCcjbmF2LW1vYmlsZScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICAgICAkKCcjbmF2LW1vYmlsZS1jbG9zZScpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy9CdXR0b24gbG9jYXRpb24gcGNcclxuICAgICAgICAkKCcjZHJvcGRvd24nKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmbGFnJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAvLyBsZXQgX2ZsYWcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmxhZycpO1xyXG4gICAgICAgICAgICAvLyAkKCcjaGVhZGVyLW92ZXJsYXknKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICAgICAvLyAkKCcjaGVhZGVyLW92ZXJsYXknKS5jc3MoJ3Zpc2liaWxpdHknLCAndW5zZXQnKTtcclxuICAgICAgICAgICAgLy8gJCgnLmRyb3Bkb3duLW1lbnUnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICAgICAvLyAkKCcuZHJvcGRvd24tbWVudScpLmNzcygndmlzaWJpbGl0eScsICd1bnNldCcpO1xyXG5cclxuICAgICAgICAgICAgJCgnI2Ryb3Bkb3duLW1lbnUtcGMnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnQgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwY1wiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXJzfT48L0ZvbnRBd2Vzb21lSWNvbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWQ9XCJuYXYtbW9iaWxlXCIgaWNvbj17ZmFCYXJzfT48L0ZvbnRBd2Vzb21lSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpZD1cIm5hdi1tb2JpbGUtY2xvc2VcIiBpY29uPXtmYVRpbWVzfT48L0ZvbnRBd2Vzb21lSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2xvZ28uanBnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJzcFwiIGljb249e2ZhU2hvcHBpbmdCYWd9PjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImRyb3Bkb3duXCIgY2xhc3NOYW1lPVwiYm94LW1haW5fX2JveC1sb2NhbCBkcm9wZG93biBwY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBpZD1cImRyb3Bkb3duLXRvZ2dsZVwiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5YZW0gZ2nDoSwgdOG7k24ga2hvIHThuqFpOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5I4buTIENow60gTWluaOKAg1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQW5nbGVEb3dufT48L0ZvbnRBd2Vzb21lSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJkcm9wZG93bi1tZW51LXBjXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFNYXBNYXJrZXJBbHR9PjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEjDoCBO4buZaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYU1hcE1hcmtlckFsdH0+PC9Gb250QXdlc29tZUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSOG6o2kgRMawxqFuZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYU1hcE1hcmtlckFsdH0+PC9Gb250QXdlc29tZUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSOG7kyBDaMOtIE1pbmhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFNYXBNYXJrZXJBbHR9PjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIELDrG5oIETGsMahbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInNlYXJjaF9taW5pX2Zvcm1cIiBjbGFzc05hbWU9XCJib3gtbWFpbl9fZm9ybS1zZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCIgaWQ9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2gtaW5wdXRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkLhuqFuIGPhuqduIHTDrG0gZ8OsP1wiIG1heExlbmd0aD1cIjEyOFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWFyY2gtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNlYXJjaH0+PC9Gb250QXdlc29tZUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1tYWluX19ib3gtYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJib3gtYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF9fYm94LWljb24gcGNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQaG9uZX0+PC9Gb250QXdlc29tZUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0X19ib3gtY29udGVudCBwY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5H4buNaSBtdWEgaMOgbmc6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz4xODAwLjIwOTc8L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJib3gtYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF9fYm94LWljb24gcGNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFNYXBNYXJrZXJBbHR9PjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF9fYm94LWNvbnRlbnQgcGNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+VMOsbSBj4butYSBow6BuZzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJveC1hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0X19ib3gtaWNvbiBwY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNob3BwaW5nQmFnfT48L0ZvbnRBd2Vzb21lSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfX2JveC1jb250ZW50IHBjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPkdp4buPIGjDoG5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==