// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"engine.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var API = [{
  brand: "Nike",
  name: "Air Max 97",
  type: "sneakers",
  images: ["static/sepatu2.png", "static/sepatu3.png", "static/sepatu4.png", "static/sepatu5.png"],
  price: 200,
  desc: "Since its debut nearly 25 years ago, the legendary Air Max 97 has been remixed by just about everyone who's anyone in the sneaker world, from Sean Wotherspoon to Lil Nas X. Inspired by the sleek aesthetics of Japanese bullet trains (or so the story goes), its wavy lines and formidable silhouette will sync up seamlessly with the type of big, brash pants we've been championing.",
  sizes: [36, 37, 38, 40, 37],
  sales: 1000
}, {
  brand: "Nike",
  name: "Air Foamposite 1",
  type: "sneakers",
  images: ["static/sepatu6.png", "static/sepatu7.png", "static/sepatu8.png"],
  price: 350,
  desc: "Thanks, in part, to a blockbuster collaboration with Comme des Garçons, the pendulum of popular opinion is once again swinging firmly towards Foams. We're not going to say we told you so but...we told you so.",
  sizes: [41, 42, 43, 44, 35],
  sales: 900
}, {
  brand: "Adidas",
  name: "Adilette Shower",
  type: "Flip flops",
  images: ["static/sendal1.png", "static/sendal2.png", "static/sendal3.png"],
  price: 3,
  desc: "Put these sandals on and you're ready to go. These slides combine 3-Stripes style with comfortable cloudfoam unitsole, combined midsole and outsole for superior cushioning. It features a striking adidas logo on the side.",
  sizes: [41, 34, 43, 44, 23],
  sales: 800
}, {
  brand: "Rebook",
  name: "Run & Sports",
  type: "Lace up Shoes",
  images: ["static/sepatu10.png", "static/sepatu11.png", "static/sepatu12.png"],
  price: 90,
  desc: "Put these sandals on and you're ready to go. These slides combine 3-Stripes style with comfortable cloudfoam unitsole, combined midsole and outsole for superior cushioning. It features a striking adidas logo on the side.",
  sizes: [41, 42, 36, 44, 34],
  sales: 700
}, {
  brand: "Puma",
  name: "SoftRide Sophia Running Shoes",
  type: "sneakers",
  images: ["static/sepatu13.png", "static/sepatu14.png", "static/sepatu15.png"],
  price: 65,
  desc: "Soft sneaks with an edge. SoftRide Sophia comes with SoftRide foam and SoftFoam+ to keep you comfy while you make a running session",
  sizes: [35, 36, 37, 38, 40],
  sales: 600
}, {
  brand: "Nike",
  name: "Airmax 90 sliders",
  type: "sneakers",
  images: ["static/sendal4.png", "static/sendal5.png", "static/sendal6.png"],
  price: 75,
  desc: "The Nike Air Max 90 Slide honours the legendary shoe that shook up the sneaker scene 30 years ago. The visible Max Air unit in the heel celebrates its strong heritage, while colourful stitched-in TPU elements add retro styling. The foam footbed and plush strap lining offer comfort and support. An embroidered Swoosh and premium materials elevate this slide into a category all its own.",
  sizes: [44, 42, 41, 38, 40],
  sales: 500
}, {
  brand: "Adidas",
  name: "Superstar shoes",
  type: "sneakers",
  images: ["static/sepatu16.png", "static/sepatu17.png", "static/sepatu18.png"],
  price: 173,
  desc: "There’s no wrong way to wear adidas Superstar shoes. The timeless design works in any setting, from classic white with black stripes to eye-catching all-over patterns and iridescent colors.",
  sizes: [35, 36, 37, 38, 40, 41, 42, 43],
  sales: 900
}, {
  brand: "Rebook",
  name: "Club C 85",
  type: "sneakers",
  images: ["static/sepatu19.png", "static/sepatu20.png", "static/sepatu21.png"],
  price: 85,
  desc: "Smooth is how you roll. Now, you have the kicks to match. Slip on these Club C 85 sneakers and hit the scene. A simple style means these supple leather shoes pair up with anything. Because sometimes you don't have to say anything to make a statement.",
  sizes: [35, 37, 38, 40, 43],
  sales: 600
}, {
  brand: "Adidas",
  name: "Yeezy powerphase calabasas",
  type: "sneakers",
  images: ["static/sepatu22.png", "static/sepatu23.png", "static/sepatu24.png"],
  price: 175,
  desc: "Revived from the adidas archives, the Yeezy Powerphase blends simplicity with sophistication.",
  sizes: [40, 41, 42, 43],
  sales: 900
}, {
  brand: "Puma",
  name: "Match 74 Lace-Up Fashion",
  type: "Lace up Shoes",
  images: ["static/sepatu25.png", "static/sepatu26.png", "static/sepatu27.png"],
  price: 110,
  desc: "Taking cues from puma iconic 'match' from the 1974 tennis collection, the match stays true to a simplistic, yet classic approach to a tennis shoe. The match 74 citi series features a burnished leather upper and the extra lateral reinforcement that tennis players need on their shoes.",
  sizes: [35, 42, 43],
  sales: 400
}, {
  brand: "Adidas",
  name: "Pharrell NMD Hu",
  type: "sneakers",
  images: ["static/sepatu28.png", "static/sepatu29.png", "static/sepatu30.png"],
  price: 250,
  desc: "The adidas Originals x Pharrell Williams collaboration is an extension of Pharrell’s vision to meld fashion, design and functionality to create quality everyday staples.",
  sizes: [39, 40, 41, 42, 43],
  sales: 800
}, {
  brand: "Nike",
  name: "Dunk High Retro",
  type: "sneakers",
  images: ["static/sepatu31.png", "static/sepatu32.png", "static/sepatu33.png"],
  price: 180,
  desc: "The Nike Dunk High is the iconic model of sneakers loved by many sports enthusiasts. Strap your feet into the latest high-top sneaks on the market. Say goodbye to weak construction and sore feet with these shoes that are built to do battle. Slip these on for a more fulfilling experience at work or play",
  sizes: [36, 37, 42, 43, 49],
  sales: 900
}, {
  brand: "Rebook",
  name: "Beatnik sandals",
  type: "Flip flops",
  images: ["static/sendal7.png", "static/sendal8.png", "static/sendal9.png"],
  price: 160,
  desc: "Go for that bohemian poet vibe. These slip-on sandals have a low-key look. Saturated color from upper to outsole gives them a minimalist look. Deep ridges on the outsole create a fierce profile and add traction.",
  sizes: [35, 42, 48, 47],
  sales: 400
}];
var _default = API;
exports.default = _default;
},{}],"utils/state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stateObjectCreator;

function stateObjectCreator(init) {
  return {
    state: init,
    processedState: init
  };
}
},{}],"utils/filter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AddFilter;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AddFilter(filters, strictMode) {
  var self = {
    filter: _objectSpread({}, filters),
    strictMode: strictMode
  };

  var addFilterBehaviour = function addFilterBehaviour() {
    return {
      AddFilter: function AddFilter(type, name) {
        this.filter[type].push(name);
      },
      RemoveFilter: function RemoveFilter(type, name) {
        var index = this.filter[type].indexOf(name);

        if (index > -1) {
          this.filter[type].splice(index, 1);
        }
      },
      ClearFilter: function ClearFilter(type) {
        this.filter[type] = [];
      },
      filter_array: function filter_array() {
        var _this = this;

        this.processedState = this.state.filter(function (state) {
          var bool = true;

          var _loop = function _loop() {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                values = _Object$entries$_i[1];

            if (state[key] === undefined) {
              bool = false;
              return "break";
            }

            if (values === undefined || values.length == 0) {
              return "continue";
            }

            if (values.every(function (value) {
              return value.toString().indexOf("-") > -1;
            })) {
              var _iterator = _createForOfIteratorHelper(values),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var value = _step.value;

                  var _value$split = value.split("-"),
                      _value$split2 = _slicedToArray(_value$split, 2),
                      min = _value$split2[0],
                      max = _value$split2[1];

                  if (parseInt(min) > parseInt(max)) {
                    var _ref = [max, min];
                    min = _ref[0];
                    max = _ref[1];
                  }

                  bool = parseInt(min) <= state[key] && state[key] <= parseInt(max);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } else {
              bool = values.some(function (value) {
                return state[key].toString().includes(value);
              });
            }

            if (_this.strictMode) {
              if (!bool) {
                return "break";
              }
            }
          };

          for (var _i = 0, _Object$entries = Object.entries(_this.filter); _i < _Object$entries.length; _i++) {
            var _ret = _loop();

            if (_ret === "break") break;
            if (_ret === "continue") continue;
          }

          return bool;
        });
        return this.processedState;
      }
    };
  };

  return _objectSpread(_objectSpread({}, self), addFilterBehaviour());
}
},{}],"utils/sort.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AddSort;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AddSort() {
  var self = {
    sort: ""
  };

  var addSortBehaviour = function addSortBehaviour() {
    return {
      RemoveSort: function RemoveSort() {
        this.sort = "";
      },
      AddSort: function AddSort(type) {
        this.sort = type;
      },
      sort_array: function sort_array(key) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "ASC";
        var logic = arguments.length > 2 ? arguments[2] : undefined;
        if (this.sort !== "") this.RemoveSort();
        this.AddSort(key);

        if (logic && typeof logic === "function") {
          this.processedState = this.processedState.sort(logic);
          return this.processedState;
        }

        this.processedState = this.processedState.sort(function (a, b) {
          var x = a[key];
          var y = b[key];
          return x < y ? -1 : x > y ? 1 : 0;
        });

        if (type === "DESC") {
          this.processedState = this.processedState.reverse();
        }

        return this.processedState;
      }
    };
  };

  return _objectSpread(_objectSpread({}, self), addSortBehaviour());
}
},{}],"utils/getElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addGetElement;

function addGetElement() {
  return {
    getElement: function getElement(name) {
      return this.state.filter(function (state) {
        return state.name === name;
      })[0];
    }
  };
}
},{}],"utils/getTop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addGetTop;

function addGetTop() {
  return {
    getTop: function getTop() {
      var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
      var temp = this.state.sort(function (a, b) {
        return b.sales - a.sales;
      });
      return temp.slice(0, number);
    }
  };
}
},{}],"controller.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _engine = _interopRequireDefault(require("./engine"));

var _state = _interopRequireDefault(require("./utils/state"));

var _filter = _interopRequireDefault(require("./utils/filter"));

var _sort = _interopRequireDefault(require("./utils/sort"));

var _getElement = _interopRequireDefault(require("./utils/getElement"));

var _getTop = _interopRequireDefault(require("./utils/getTop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function FilterAndSortedState(init, filtersToAdd, strictMode) {
  var obj = Object.assign({}, (0, _state.default)(init));
  obj = Object.assign(obj, (0, _filter.default)(filtersToAdd, strictMode));
  obj = Object.assign(obj, (0, _sort.default)());
  obj = Object.assign(obj, (0, _getElement.default)());
  obj = Object.assign(obj, (0, _getTop.default)());
  return obj;
}

var Shoes = FilterAndSortedState(_engine.default, {
  brand: [],
  type: [],
  sizes: [],
  price: []
}, true);

var renderCard = function renderCard() {
  var shoes = Shoes.processedState;
  var checkCard = document.querySelector(".card-grid");
  if (checkCard.hasChildNodes()) checkCard.replaceChildren();

  var _iterator = _createForOfIteratorHelper(shoes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var shoe = _step.value;
      var cardToAdd = "<div class=\"card\" onclick=\"toggle('.look-out'); toggle('.beta'); toggle('body'); lookOut('".concat(shoe.name, "')\"> \n               <div class=\"card-title\">\n                    ").concat(shoe.brand, "\n                    <div class=\"card-subtitle\">").concat(shoe.name, "</div>\n               </div>\n               <div class=\"card-image-wrapper\">\n                    <img\n                    src=\"").concat(shoe.images[0], "\"\n                    class=\"card-image rotate\"\n                    alt=\"").concat(shoe.name, "\"\n                    />\n              </div>\n              <div class=\"card-footer\">\n                    <div class=\"card-price\">\n                        Price\n                        <div class=\"price\">$").concat(shoe.price, "</div>\n                    </div>\n                    <div class=\"right-footer\">\n                        <div class=\"image-box\" onclick=\"window.buttonRiple(event, '#ccc')\">\n                            <img\n                            src=\"").concat(shoe.images[1], "\"\n                            class=\"reflect-left\"\n                            alt=\"sepatu\"\n                            width=\"40\"\n                            />\n                        </div>\n                        <div class=\"image-box\" onclick=\"window.buttonRiple(event, '#ccc')\">\n                            <img\n                            src=\"").concat(shoe.images[2], "\"\n                            class=\"reflect-right\"\n                            alt=\"sepatu\"\n                            width=\"40\"\n                            />\n                        </div>\n                    </div>\n                </div>\n          </div>");
      checkCard.innerHTML += cardToAdd;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

var resetLookOut = function resetLookOut() {
  var thingsToReset = ["images", "indicators", "title", "subtitle", "sizes", "description"];

  for (var _i = 0, _thingsToReset = thingsToReset; _i < _thingsToReset.length; _i++) {
    var toReset = _thingsToReset[_i];
    document.querySelector("#add-".concat(toReset)).replaceChildren();
  }
};

window.resetLookOut = resetLookOut;

var lookOut = function lookOut(name) {
  var shoe = Shoes.getElement(name);
  resetLookOut();

  var _iterator2 = _createForOfIteratorHelper(shoe.images),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var image = _step2.value;
      var imageToAdd = "<img src=\"".concat(image, "\" class=\"carousel-image\" alt=\"").concat(shoe.type, "\" />");
      var indicatorToAdd = "<div></div>";
      document.querySelector("#add-images").innerHTML += imageToAdd;
      document.querySelector("#add-indicators").innerHTML += indicatorToAdd;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  document.querySelector("#add-title").innerHTML = shoe.name;
  document.querySelector("#add-subtitle").innerHTML = shoe.brand;

  var _iterator3 = _createForOfIteratorHelper(shoe.sizes),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var size = _step3.value;
      var sizeToAdd = "<div class=\"grid-item\">".concat(size, "</div>");
      document.querySelector("#add-sizes").innerHTML += sizeToAdd;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  document.querySelector("#add-description").innerHTML = shoe.desc;
};

window.lookOut = lookOut;
var proxy = new Proxy(Shoes, {
  get: function get(target, prop, receiver) {
    if (prop === "AddFilter" || prop === "RemoveFilter") {
      return function () {
        if (arguments[0] === "price") {
          target.ClearFilter("price");
        }

        if (localStorage.getItem("filter")) {
          target.filter = JSON.parse(localStorage.getItem("filter"));
        }

        target[prop].apply(this, arguments);
        target.filter_array();

        if (target.sort) {
          target.sort_array(target.sort);
        }

        localStorage.setItem("filter", JSON.stringify(target.filter));
        renderCard();
      };
    }

    if (prop === "sort_array") {
      return function () {
        if (localStorage.getItem("filter")) {
          target.filter = JSON.parse(localStorage.getItem("filter"));
        }

        target.filter_array();
        target[prop].apply(this, arguments);
        renderCard();
      };
    }

    return target[prop];
  }
});

var setTopProduct = function setTopProduct() {
  var shoes = Shoes.getTop(3);
  var host = document.querySelector(".flex-card");
  if (host.hasChildNodes()) host.replaceChildren();

  var _iterator4 = _createForOfIteratorHelper(shoes),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var shoe = _step4.value;
      var cardToAdd = "<div class=\"horizontal-card\">\n        <div class=\"card-image\">\n          <img src=\"".concat(shoe.images[0], "\" width=\"90\" alt=\"").concat(shoe.type, "\" />\n        </div>\n        <div class=\"card-content\">\n          <div class=\"title\">").concat(shoe.name, "</div>\n          <div class=\"content\">\n            Price\n            <div class=\"price\">$").concat(shoe.price, "</div>\n          </div>\n        </div>\n      </div>");
      host.innerHTML += cardToAdd;
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
};

window.handleChange = function handleChange(checkbox) {
  if (checkbox.checked == true) {
    proxy.AddFilter(checkbox.getAttribute("data-filter-type"), checkbox.getAttribute("data-filter-name"));
  } else {
    proxy.RemoveFilter(checkbox.getAttribute("data-filter-type"), checkbox.getAttribute("data-filter-name"));
  }
};

var parent = document.querySelector("#filterSize");

var _iterator5 = _createForOfIteratorHelper(parent.children),
    _step5;

try {
  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
    var child = _step5.value;
    child.addEventListener("click", function (e) {
      proxy.ClearFilter("sizes");
      proxy.AddFilter("sizes", e.currentTarget.innerText);
    });
  }
} catch (err) {
  _iterator5.e(err);
} finally {
  _iterator5.f();
}

window.addEventListener("load", function () {
  renderCard();
  setTopProduct();
  lookOut("Air Max 97");
  localStorage.removeItem("filter");
});
var sorts = document.querySelectorAll(".sortable");

var _iterator6 = _createForOfIteratorHelper(sorts),
    _step6;

try {
  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
    var sort = _step6.value;
    sort.addEventListener("click", function (e) {
      if (e.currentTarget.classList.contains("active")) {
        proxy.sort_array(null);
      } else {
        proxy.sort_array(e.currentTarget.getAttribute("data-sort"));
      }
    });
  }
} catch (err) {
  _iterator6.e(err);
} finally {
  _iterator6.f();
}

var _default = proxy;
exports.default = _default;
},{"./engine":"engine.js","./utils/state":"utils/state.js","./utils/filter":"utils/filter.js","./utils/sort":"utils/sort.js","./utils/getElement":"utils/getElement.js","./utils/getTop":"utils/getTop.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _controller = _interopRequireDefault(require("./controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.addEventListener("load", function () {
  window.slideOne();
  window.slideTwo();
});
var sliderOne = document.getElementById("slider-1");
var sliderTwo = document.getElementById("slider-2");
var sliderTrack = document.querySelector(".slider-track");
var sliderMaxValue = document.getElementById("slider-1").max;

window.slideOne = function slideOne(e) {
  var values = document.querySelector("#label-1");
  setBubble(sliderOne, values);
  fillColor();

  _controller.default.AddFilter("price", "".concat(sliderTwo.value * 5, "-").concat(sliderOne.value * 5));
};

window.slideTwo = function slideTwo() {
  var values = document.querySelector("#label-2");
  setBubble(sliderTwo, values);
  fillColor();

  _controller.default.AddFilter("price", "".concat(sliderTwo.value * 5, "-").concat(sliderOne.value * 5));
};

window.setBubble = function setBubble(range, bubble) {
  var val = range.value;
  var min = range.min ? range.min : 0;
  var max = range.max ? range.max : 100;
  var newVal = Number((val - min) * 100 / (max - min));
  bubble.innerHTML = "$".concat(val * 5);
  bubble.style.left = "calc(".concat(newVal, "% + (").concat(10 - newVal * 0.2, "px))");
};

var buttonRiple = function buttonRiple(event) {
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#fff6";
  ripple(event.currentTarget, event, 20, color);
};

window.buttonRiple = buttonRiple;

window.fillColor = function fillColor() {
  var percent1 = sliderOne.value / sliderMaxValue * 100;
  var percent2 = sliderTwo.value / sliderMaxValue * 100;

  if (percent2 < percent1) {
    var temp = percent1;
    percent1 = percent2;
    percent2 = temp;
  }

  sliderTrack.style.background = "linear-gradient(to right, #dadae5 ".concat(percent1, "% , #3264fe ").concat(percent1, "% , #3264fe ").concat(percent2, "%, #dadae5 ").concat(percent2, "%)");
};

window.ripple = function ripple(parent, event, maxScale, color) {
  parent.style.position = "relative";
  parent.style.overflow = "hidden";
  var rect = parent.getBoundingClientRect();
  var ripple = document.createElement("span");
  ripple.classList.add("ripple");
  ripple.style.left = "".concat(event.clientX - rect.x, "px");
  ripple.style.top = "".concat(event.clientY - rect.y, "px");
  ripple.style.setProperty("--size", maxScale);
  ripple.style.setProperty("--color", color);
  var hasripple = parent.getElementsByClassName("ripple")[0];

  if (hasripple) {
    hasripple.remove();
  }

  parent.appendChild(ripple);
  setTimeout(function () {
    ripple.remove();
  }, 1200);
};

var accheads = document.querySelectorAll(".accordion-head");

var _iterator = _createForOfIteratorHelper(accheads),
    _step;

try {
  var _loop = function _loop() {
    var acchead = _step.value;
    acchead.addEventListener("click", function (event) {
      acchead.classList.toggle("active");
      acchead.nextSibling.nextSibling.classList.toggle("active");
      ripple(event.currentTarget, event, 100, "#ccc");
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var grids = document.querySelectorAll(".grid-item");

var _iterator2 = _createForOfIteratorHelper(grids),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var grid = _step2.value;
    grid.addEventListener("click", function (event) {
      ripple(event.currentTarget, event, 20, "#fff");

      var _iterator4 = _createForOfIteratorHelper(grids),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _grid = _step4.value;

          _grid.classList.remove("active");
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      event.currentTarget.classList.add("active");
    });
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

var menuLists = document.querySelectorAll(".menu-list");

var toggle = function toggle(qs) {
  document.querySelector(qs).classList.toggle("active");
};

window.toggle = toggle;

var _iterator3 = _createForOfIteratorHelper(menuLists),
    _step3;

try {
  var _loop2 = function _loop2() {
    var menuList = _step3.value;
    menuList.addEventListener("click", function (event) {
      var _iterator5 = _createForOfIteratorHelper(menuList.children),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var child = _step5.value;
          child.classList.remove("active");
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      event.target.classList.add("active");

      if (event.currentTarget.hasAttribute("has-title")) {
        document.querySelector(event.currentTarget.getAttribute("has-title")).innerText = event.target.innerText;
      }
    });
  };

  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    _loop2();
  }
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}

var slider = document.querySelector(".carousel-images");
var isDown = false;
var startX;
var scrollLeft;
slider.addEventListener("mousedown", function (e) {
  isDown = true;
  slider.style.cursor = "grabbing";
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", function () {
  isDown = false;
  slider.style.cursor = "pointer";
});
slider.addEventListener("mouseup", function () {
  isDown = false;
  slider.style.cursor = "pointer";
});
slider.addEventListener("mousemove", function (e) {
  if (!isDown) return;
  e.preventDefault();
  prevScroll = slider.scrollLeft;
  var x = e.pageX - slider.offsetLeft;
  var walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
},{"./controller":"controller.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51158" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map