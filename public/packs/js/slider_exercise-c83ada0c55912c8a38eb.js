/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/slider_exercise.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/slider_exercise.js":
/*!*************************************************!*\
  !*** ./app/javascript/packs/slider_exercise.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_exercise_slider_exercise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugins/exercise/slider_exercise */ "./app/javascript/plugins/exercise/slider_exercise.js");

Object(_plugins_exercise_slider_exercise__WEBPACK_IMPORTED_MODULE_0__["sliderExercise"])();

/***/ }),

/***/ "./app/javascript/plugins/exercise/slider_exercise.js":
/*!************************************************************!*\
  !*** ./app/javascript/plugins/exercise/slider_exercise.js ***!
  \************************************************************/
/*! exports provided: sliderExercise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderExercise", function() { return sliderExercise; });
/* harmony import */ var _slider_exercise_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider_exercise.scss */ "./app/javascript/plugins/exercise/slider_exercise.scss");
/* harmony import */ var _slider_exercise_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slider_exercise_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var circle_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! circle-slider */ "./node_modules/circle-slider/lib/index.js");
/* harmony import */ var circle_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(circle_slider__WEBPACK_IMPORTED_MODULE_1__);



var sliderExercise = function sliderExercise() {
  var options = {
    snap: 45,
    clockwise: true,
    startPos: "top"
  };
  var time = document.querySelector('#exercise_time');
  var exerciseTime;
  var cs = new circle_slider__WEBPACK_IMPORTED_MODULE_1___default.a("#slider", options);
  var exercise = document.querySelector('.slider-exercise');
  cs.on("sliderMove", function (angle) {
    if (angle > 0 && angle <= 30) {
      exerciseTime = '10';
    } else if (angle > 31 && angle <= 60) {
      exerciseTime = '20';
    } else if (angle > 61 && angle <= 90) {
      exerciseTime = '30';
    } else if (angle > 91 && angle <= 120) {
      exerciseTime = '40';
    } else if (angle > 121 && angle <= 150) {
      exerciseTime = '50';
    } else if (angle > 151 && angle <= 180) {
      exerciseTime = '60';
    } else if (angle > 181 && angle <= 210) {
      exerciseTime = '70';
    } else if (angle > 211 && angle <= 240) {
      exerciseTime = '80';
    } else if (angle > 241 && angle <= 270) {
      exerciseTime = '90';
    } else if (angle > 271 && angle <= 300) {
      exerciseTime = '100';
    } else if (angle > 301 && angle <= 330) {
      exerciseTime = '110';
    } else if (angle > 331 && angle <= 360) {
      exerciseTime = '120';
    }

    exercise.textContent = exerciseTime;
    time.value = exerciseTime;
  });
  cs.on("sliderUp", function (angle) {
    var option = document.querySelector("option[value='".concat(exerciseTime, "']"));
    option.selected = true;
  });
};



/***/ }),

/***/ "./app/javascript/plugins/exercise/slider_exercise.scss":
/*!**************************************************************!*\
  !*** ./app/javascript/plugins/exercise/slider_exercise.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!./slider_exercise.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./app/javascript/plugins/exercise/slider_exercise.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true,"sourceMap":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/circle-slider/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/circle-slider/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventEmitter = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js");

var CircleSlider = function (_EventEmitter) {
  _inherits(CircleSlider, _EventEmitter);

  /**
   * Creates an instance of CircleSlider inside the element with the id `targetId`
   * @param {String} targetId              The id of the element to contain the circle slider.
   * @param {Object} [options]             An object containing options for the slider.
   * @param {Number} [options.snap]        Makes the handle snap to every multiple of this number.
   * @param {Boolean} [options.clockwise]  True to make clockwise the positive direction.
   * @param {"top"|"bottom"|"left"|"right"} [options.startPos]
   *    Which side the handle should start at.
   * @memberof CircleSlider
   */
  function CircleSlider(targetId, options) {
    _classCallCheck(this, CircleSlider);

    // allow both "id" or "#id"
    var _this2 = _possibleConstructorReturn(this, (CircleSlider.__proto__ || Object.getPrototypeOf(CircleSlider)).call(this));

    _this2.root = document.getElementById(targetId) || document.getElementById(targetId.slice(1));
    _this2.outputAngle = 0;

    if (options) {
      _this2.clockwise = options.clockwise; // affects _formatOutputAngle
      _this2.snapMultiplier = options.snap;
      _this2.startPos = options.startPos;
    } else {
      _this2.clockwise = false;
      _this2.snapMultiplier = 0;
      _this2.startPos = "right";
    }

    _this2.startOffset = 0; // "right" is default

    switch (_this2.startPos) {
      case "top":
        _this2.startOffset = 270;
        break;
      case "left":
        _this2.startOffset = 180;
        break;
      case "bottom":
        _this2.startOffset = 90;
        break;
      default:
        break;
    }

    // validation
    if (!_this2.root) {
      console.error("CircleSlider: Didn't find any element with id " + targetId);
    }

    // create the child elements and append them
    _this2.hc = CircleSlider._createHandleContainerElem();
    _this2.handle = CircleSlider._createHandleElem();
    _this2.hc.appendChild(_this2.handle);
    _this2.root.appendChild(_this2.hc);

    // put the handle at the correct position
    _this2.hc.style.cssText = "transform: rotate(" + _this2.startOffset + "deg);";

    // just to keep track of all event names
    _this2.events = {
      sliderMove: "sliderMove",
      sliderUp: "sliderUp"
    };

    // active is true when user is holding down handle
    _this2.active = false;
    // mouse events
    _this2._addEventListeners("mousedown", "mousemove", "mouseup");
    // touch events
    _this2._addEventListeners("touchstart", "touchmove", "touchend");

    // bind methods
    _this2._mouseMoveHandler = _this2._mouseMoveHandler.bind(_this2);
    return _this2;
  }

  // public methods

  /**
   * Returns the angle/value of the slider.
   *
   * @returns The current value
   * @memberof CircleSlider
   */


  _createClass(CircleSlider, [{
    key: "getAngle",
    value: function getAngle() {
      return this.outputAngle;
    }

    /**
     * Manually sets the angle/value of the slider.
     *
     * @param {Number} angle  The new value for the slider
     * @memberof CircleSlider
     */

  }, {
    key: "setAngle",
    value: function setAngle(angle) {
      var rawAngle = this._formatInputAngle(angle);
      this._moveHandle(rawAngle);
    }
  }, {
    key: "_formatInputAngle",
    value: function _formatInputAngle(angle) {
      var rawAngle = this.clockwise === true ? CircleSlider.modulo(Math.round(angle) - 360 + this.startOffset, 360) : CircleSlider.modulo(360 - Math.round(angle) + this.startOffset, 360);
      return rawAngle;
    }

    // "private" methods

  }, {
    key: "_addEventListeners",
    value: function _addEventListeners(startEvent, moveEvent, endEvent) {
      var _this3 = this;

      // user presses handle
      this.handle.addEventListener(startEvent, function (e) {
        // prevent text selection
        e.preventDefault();

        if (!_this3.active) {
          _this3.active = true;

          // user moves handle
          document.addEventListener(moveEvent, _this3._mouseMoveHandler, false);

          // user lets go
          var _this = _this3;
          document.addEventListener(endEvent, function endFunc(ev) {
            _this.active = false;
            document.removeEventListener(moveEvent, _this._mouseMoveHandler, false);
            _this.emit(_this.events.sliderUp, _this.outputAngle);

            // remove event listener after this has been fired once
            ev.currentTarget.removeEventListener(endEvent, endFunc, false);
          });
        }
      });
    }
  }, {
    key: "_mouseMoveHandler",
    value: function _mouseMoveHandler(e) {
      e.preventDefault();
      this._moveHandle(this._getRawAngle(e));
    }
  }, {
    key: "_moveHandle",
    value: function _moveHandle(rawAngle) {
      var angle = rawAngle;
      // snap handle to multiples of snapMultiplier
      if (this.snapMultiplier) {
        var sm = this.snapMultiplier;
        var delta = Math.abs(angle - Math.round(angle / sm) * sm);
        if (delta <= 5) {
          angle = Math.round(angle / sm) * sm;
        }
      }

      // move the handle visually
      this.hc.style.cssText = "transform: rotate(" + angle + "deg);";

      this.outputAngle = this._formatOutputAngle(angle);

      this.emit(this.events.sliderMove, this.outputAngle);
    }
  }, {
    key: "_formatOutputAngle",
    value: function _formatOutputAngle(angle) {
      var outputAngle = this.clockwise === true ? CircleSlider.modulo(360 + Math.round(angle) - this.startOffset, 360) : CircleSlider.modulo(360 - Math.round(angle) + this.startOffset, 360);
      return outputAngle;
    }
  }, {
    key: "_getRawAngle",
    value: function _getRawAngle(e) {
      var pivot = CircleSlider._getCenter(this.root);
      var mouse = void 0;
      if (e.type === "touchmove") {
        mouse = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
      } else {
        mouse = {
          x: e.clientX,
          y: e.clientY
        };
      }

      var angle = CircleSlider._radToDeg(Math.atan2(mouse.y - pivot.y, mouse.x - pivot.x)) % 360;
      return angle;
    }
  }], [{
    key: "_getCenter",
    value: function _getCenter(elem) {
      var rect = elem.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
    }
  }, {
    key: "_radToDeg",
    value: function _radToDeg(rad) {
      return rad * (180 / Math.PI);
    }

    // % can return negative numbers

  }, {
    key: "modulo",
    value: function modulo(n, m) {
      return (n % m + m) % m;
    }

    // Uninteresting methods

  }, {
    key: "_createHandleContainerElem",
    value: function _createHandleContainerElem() {
      var hc = document.createElement("div");
      hc.className = "cs-handle-container";
      return hc;
    }
  }, {
    key: "_createHandleElem",
    value: function _createHandleElem() {
      var h = document.createElement("div");
      h.className = "cs-handle";
      return h;
    }
  }]);

  return CircleSlider;
}(EventEmitter);

module.exports = CircleSlider;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./app/javascript/plugins/exercise/slider_exercise.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./app/javascript/plugins/exercise/slider_exercise.scss ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#slider {\n  /*\n    position: relative is needed for the handle to be\n    positioned correctly, and border-radius: 100% just\n    makes the div round.\n  */\n  position: relative;\n  border-radius: 100%;\n  /* Other than the above two, go wild! */\n  height: 300px;\n  width: 300px;\n  background: -webkit-gradient(linear, left top, right top, from(#FF9A9E), to(#FAD0C4));\n  background: linear-gradient(90deg, #FF9A9E, #FAD0C4);\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*\n  Probably best to paste this exactly as is.\n  These CSS rules make sure that the handle rotates\n  properly, so don't change anything here.\n*/\n\n.cs-handle-container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  height: 2px;\n  margin-top: -1px; }\n\n/* Also paste as is */\n\n.cs-handle {\n  position: absolute;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n/* the appearance of the handle, feel free to change! */\n\n#slider .cs-handle {\n  height: 30px;\n  width: 30px;\n  /*\n    Change 'right' to change the offset from the edge.\n    E.g right: 0 puts the handle just next to the edge\n    of #slider, on the inside\n  */\n  right: -15px;\n  cursor: default;\n  border-radius: 100%;\n  background: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#efefef));\n  background: linear-gradient(180deg, #FFFFFF, #efefef);\n  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 10px 0; }\n\n#slider .cs-handle:active {\n  background: -webkit-gradient(linear, left top, left bottom, from(#EBEBEB), to(#DFDFDF));\n  background: linear-gradient(180deg, #EBEBEB, #DFDFDF); }\n", "",{"version":3,"sources":["/Users/mel/code/melawein/lifeline/app/javascript/plugins/exercise/slider_exercise.scss","slider_exercise.scss"],"names":[],"mappings":"AAAA;EACE;;;;GCIC;EDCD,kBAAkB;EAClB,mBAAmB;EAEnB,uCAAA;EACA,aAAa;EACb,YAAY;EACZ,qFAAoD;EAApD,oDAAoD;EACpD,aAAa;EACb,uBAAuB;EACvB,mBAAmB,EAAA;;AAGrB;;;;CCEC;;ADGD;EACE,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,QAAQ;EACR,WAAW;EACX,gBAAgB,EAAA;;AAGlB,qBAAA;;AACA;EACE,kBAAkB;EAClB,mCAA2B;UAA3B,2BAA2B,EAAA;;AAG7B,uDAAA;;AACA;EACE,YAAY;EACZ,WAAW;EACX;;;;GCAC;EDKD,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,uFAAqD;EAArD,qDAAqD;EACrD,2CAA2C,EAAA;;AAG7C;EACE,uFAAqD;EAArD,qDAAqD,EAAA","file":"slider_exercise.scss","sourcesContent":["#slider {\n  /*\n    position: relative is needed for the handle to be\n    positioned correctly, and border-radius: 100% just\n    makes the div round.\n  */\n  position: relative;\n  border-radius: 100%;\n\n  /* Other than the above two, go wild! */\n  height: 300px;\n  width: 300px;\n  background: linear-gradient(90deg, #FF9A9E, #FAD0C4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/*\n  Probably best to paste this exactly as is.\n  These CSS rules make sure that the handle rotates\n  properly, so don't change anything here.\n*/\n.cs-handle-container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  height: 2px;\n  margin-top: -1px;\n}\n\n/* Also paste as is */\n.cs-handle {\n  position: absolute;\n  transform: translateY(-50%);\n}\n\n/* the appearance of the handle, feel free to change! */\n#slider .cs-handle {\n  height: 30px;\n  width: 30px;\n  /*\n    Change 'right' to change the offset from the edge.\n    E.g right: 0 puts the handle just next to the edge\n    of #slider, on the inside\n  */\n  right: -15px;\n  cursor: default;\n  border-radius: 100%;\n  background: linear-gradient(180deg, #FFFFFF, #efefef);\n  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 10px 0;\n}\n\n#slider .cs-handle:active {\n  background: linear-gradient(180deg, #EBEBEB, #DFDFDF)\n}\n\n\n\n\n\n\n\n\n\n\n\n","#slider {\n  /*\n    position: relative is needed for the handle to be\n    positioned correctly, and border-radius: 100% just\n    makes the div round.\n  */\n  position: relative;\n  border-radius: 100%;\n  /* Other than the above two, go wild! */\n  height: 300px;\n  width: 300px;\n  background: linear-gradient(90deg, #FF9A9E, #FAD0C4);\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*\n  Probably best to paste this exactly as is.\n  These CSS rules make sure that the handle rotates\n  properly, so don't change anything here.\n*/\n.cs-handle-container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  height: 2px;\n  margin-top: -1px; }\n\n/* Also paste as is */\n.cs-handle {\n  position: absolute;\n  transform: translateY(-50%); }\n\n/* the appearance of the handle, feel free to change! */\n#slider .cs-handle {\n  height: 30px;\n  width: 30px;\n  /*\n    Change 'right' to change the offset from the edge.\n    E.g right: 0 puts the handle just next to the edge\n    of #slider, on the inside\n  */\n  right: -15px;\n  cursor: default;\n  border-radius: 100%;\n  background: linear-gradient(180deg, #FFFFFF, #efefef);\n  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 10px 0; }\n\n#slider .cs-handle:active {\n  background: linear-gradient(180deg, #EBEBEB, #DFDFDF); }\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/eventemitter3/index.js":
/*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
         listeners.fn === fn
      && (!once || listeners.once)
      && (!context || listeners.context === context)
    ) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
           listeners[i].fn !== fn
        || (once && !listeners[i].once)
        || (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })

/******/ });
//# sourceMappingURL=slider_exercise-c83ada0c55912c8a38eb.js.map