/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Flag the module as loaded
    /******/ module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        /******/ configurable: false,
        /******/ enumerable: true,
        /******/ get: getter,
        /******/
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/ __webpack_require__.p = '';
  /******/
  /******/ // Load entry module and return exports
  /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ =
        __webpack_require__(1);
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_message__ =
        __webpack_require__(2);

      var supportedAPI = ['init', 'message']; // enlist all methods supported by API (e.g. `mw('event', 'user-login');`)

      /**
    The main entry of the application
    */

      function app(window) {
        console.log('JS-Widget starting'); // set default configurations

        var configurations = {
          someDefaultConfiguration: false,
        }; // all methods that were called till now and stored in queue
        // needs to be called now

        var globalObject = window[window['JS-Widget']];
        var queue = globalObject.q;

        if (queue) {
          for (var i = 0; i < queue.length; i++) {
            if (queue[i][0].toLowerCase() == 'init') {
              configurations = extendObject(configurations, queue[i][1]);
              console.log('JS-Widget started', configurations);
            } else apiHandler(queue[i][0], queue[i][1]);
          }
        } // override temporary (until the app loaded) handler
        // for widget's API calls

        globalObject = apiHandler;
        globalObject.configurations = configurations;
      }
      /**
    Method that handles all API calls
    */

      function apiHandler(api, params) {
        if (!api) throw Error('API method required');
        api = api.toLowerCase();
        if (supportedAPI.indexOf(api) === -1)
          throw Error('Method '.concat(api, ' is not supported'));
        console.log('Handling API call '.concat(api), params);

        switch (api) {
          // TODO: add API implementation
          case 'message':
            Object(
              __WEBPACK_IMPORTED_MODULE_1__views_message__['a' /* show */]
            )(params);
            break;

          default:
            console.warn('No handler defined for '.concat(api));
        }
      }

      function extendObject(a, b) {
        for (var key in b) {
          if (b.hasOwnProperty(key)) a[key] = b[key];
        }

        return a;
      }

      app(window);

      /***/
    },
    /* 1 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* unused harmony export ping */
      function ping() {
        return 'pong';
      }

      /***/
    },
    /* 2 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony export (immutable) */ __webpack_exports__['a'] = show;
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__message_html__ =
        __webpack_require__(3);
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__message_html___default =
        __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__message_html__);
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_css__ =
        __webpack_require__(4);
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_css___default =
        __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__message_css__);
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ('value' in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, 'prototype', { writable: false });
        return Constructor;
      }

      var elements = [];
      var body;
      function show(text) {
        // convert plain HTML string into DOM elements
        var temporary = document.createElement('div');
        temporary.innerHTML =
          __WEBPACK_IMPORTED_MODULE_0__message_html___default.a; //   temporary.getElementsByClassName('js-widget-dialog')[0].textContent = text;
        // append elements to body

        body = document.getElementsByTagName('body')[0];

        while (temporary.children.length > 0) {
          elements.push(temporary.children[0]);
          body.appendChild(temporary.children[0]);
        }

        var Calculator = /*#__PURE__*/ (function () {
          function Calculator(
            previousOperandTextElement,
            currentOperandTextElement
          ) {
            _classCallCheck(this, Calculator);

            this.previousOperandTextElement = previousOperandTextElement;
            this.currentOperandTextElement = currentOperandTextElement;
            this.clear();
          }

          _createClass(Calculator, [
            {
              key: 'clear',
              value: function clear() {
                this.currentOperand = '';
                this.previousOperand = '';
                this.operation = undefined;
              },
            },
            {
              key: 'delete',
              value: function _delete() {
                this.currentOperand = this.currentOperand
                  .toString()
                  .slice(0, -1);
              },
            },
            {
              key: 'appendNumber',
              value: function appendNumber(number) {
                if (number === '.' && this.currentOperand.includes('.')) return;
                this.currentOperand =
                  this.currentOperand.toString() + number.toString();
              },
            },
            {
              key: 'chooseOperation',
              value: function chooseOperation(operation) {
                if (this.currentOperand === '') return;

                if (this.previousOperand !== '') {
                  this.compute();
                }

                this.operation = operation;
                this.previousOperand = this.currentOperand;
                this.currentOperand = '';
              },
            },
            {
              key: 'compute',
              value: function compute() {
                var computation;
                var prev = parseFloat(this.previousOperand);
                var current = parseFloat(this.currentOperand);
                if (isNaN(prev) || isNaN(current)) return;

                switch (this.operation) {
                  case '+':
                    computation = prev + current;
                    break;

                  case '-':
                    computation = prev - current;
                    break;

                  case '*':
                    computation = prev * current;
                    break;

                  case '÷':
                    computation = prev / current;
                    break;

                  default:
                    return;
                }

                this.currentOperand = computation;
                this.operation = undefined;
                this.previousOperand = '';
              },
            },
            {
              key: 'getDisplayNumber',
              value: function getDisplayNumber(number) {
                var stringNumber = number.toString();
                var integerDigits = parseFloat(stringNumber.split('.')[0]);
                var decimalDigits = stringNumber.split('.')[1];
                var integerDisplay;

                if (isNaN(integerDigits)) {
                  integerDisplay = '';
                } else {
                  integerDisplay = integerDigits.toLocaleString('en', {
                    maximumFractionDigits: 0,
                  });
                }

                if (decimalDigits != null) {
                  return ''.concat(integerDisplay, '.').concat(decimalDigits);
                } else {
                  return integerDisplay;
                }
              },
            },
            {
              key: 'updateDisplay',
              value: function updateDisplay() {
                this.currentOperandTextElement.innerText =
                  this.getDisplayNumber(this.currentOperand);

                if (this.operation != null) {
                  this.previousOperandTextElement.innerText = ''
                    .concat(this.getDisplayNumber(this.previousOperand), ' ')
                    .concat(this.operation);
                } else {
                  this.previousOperandTextElement.innerText = '';
                }
              },
            },
          ]);

          return Calculator;
        })();

        var numberButtons = document.querySelectorAll('[data-number]');
        var operationButtons = document.querySelectorAll('[data-operation]');
        var equalsButton = document.querySelector('[data-equals]');
        var deleteButton = document.querySelector('[data-delete]');
        var allClearButton = document.querySelector('[data-all-clear]');
        var previousOperandTextElement = document.querySelector(
          '[data-previous-operand]'
        );
        var currentOperandTextElement = document.querySelector(
          '[data-current-operand]'
        );
        var calculator = new Calculator(
          previousOperandTextElement,
          currentOperandTextElement
        );
        numberButtons.forEach(function (button) {
          button.addEventListener('click', function () {
            calculator.appendNumber(button.innerText);
            calculator.updateDisplay();
          });
        });
        operationButtons.forEach(function (button) {
          button.addEventListener('click', function () {
            calculator.chooseOperation(button.innerText);
            calculator.updateDisplay();
          });
        });
        equalsButton.addEventListener('click', function (button) {
          calculator.compute();
          calculator.updateDisplay();
        });
        allClearButton.addEventListener('click', function (button) {
          calculator.clear();
          calculator.updateDisplay();
        });
        deleteButton.addEventListener('click', function (button) {
          calculator['delete']();
          calculator.updateDisplay();
        });
        body.addEventListener('click', close);
      } // export function close() {
      //   while (elements.length > 0) {
      //     elements.pop().remove();
      //   }
      //   //   body.removeEventListener('click', close);
      // }

      /***/
    },
    /* 3 */
    /***/ function (module, exports) {
      module.exports =
        '<!-- <div class="js-widget-overlay"> -->\n    <div class="calculator-grid">\n        <div class="output">\n            <div data-previous-operand class="previous-operand"></div>\n      <div data-current-operand class="current-operand"></div>\n    </div>\n    <button data-all-clear class="span-two">AC</button>\n    <button data-delete>DEL</button>\n    <button data-operation>÷</button>\n    <button data-number>1</button>\n    <button data-number>2</button>\n    <button data-number>3</button>\n    <button data-operation>*</button>\n    <button data-number>4</button>\n    <button data-number>5</button>\n    <button data-number>6</button>\n    <button data-operation>+</button>\n    <button data-number>7</button>\n    <button data-number>8</button>\n    <button data-number>9</button>\n    <button data-operation>-</button>\n    <button data-number>.</button>\n    <button data-number>0</button>\n    <button data-equals class="span-two">=</button>\n</div>\n</div>\n\n<!-- <div class="js-widget-dialog"></div> -->\n';

      /***/
    },
    /* 4 */
    /***/ function (module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__(5);
      if (typeof content === 'string') content = [[module.i, content, '']];
      // Prepare cssTransformation
      var transform;

      var options = { hmr: true };
      options.transform = transform;
      // add the styles to the DOM
      var update = __webpack_require__(7)(content, options);
      if (content.locals) module.exports = content.locals;
      // Hot Module Replacement
      if (false) {
        // When the styles change, update the <style> tags
        if (!content.locals) {
          module.hot.accept(
            '!!../../node_modules/css-loader/dist/cjs.js!./message.css',
            function () {
              var newContent = require('!!../../node_modules/css-loader/dist/cjs.js!./message.css');
              if (typeof newContent === 'string')
                newContent = [[module.id, newContent, '']];
              update(newContent);
            }
          );
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function () {
          update();
        });
      }

      /***/
    },
    /* 5 */
    /***/ function (module, exports, __webpack_require__) {
      // Imports
      var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
      exports = ___CSS_LOADER_API_IMPORT___(false);
      // Module
      exports.push([
        module.i,
        '/* .js-widget-overlay {\n  z-index: 10001;\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  opacity: 0.8;\n  background-color: #000;\n} */\n/* \n.js-widget-dialog {\n  position: fixed;\n  z-index: 10002;\n  background: #fff;\n  left: 50%;\n  top: 30%;\n  margin: 0 0 0 -120px;\n  width: 200px;\n  padding: 10px 20px;\n  border: solid 1px #333;\n} */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-family: Gotham Rounded, sans-serif;\n  font-weight: normal;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  background: linear-gradient(to right, #00aaff, #00ff6c);\n}\n\n.calculator-grid {\n  display: grid;\n  border: 1px solid black;\n  justify-content: center;\n  align-content: center;\n  min-height: 1vh;\n  max-width: 49.4vh;\n  /* width: 28.2%; */\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-gap: 1px;\n  grid-template-columns: repeat(4, 100px);\n  grid-template-rows: minmax(120px, auto) repeat(5, 100px);\n}\n\n.calculator-grid > button {\n  cursor: pointer;\n  font-size: 2rem;\n  border: 1px solid white;\n  outline: none;\n  background-color: rgba(255, 255, 255, 0.75);\n}\n\n.calculator-grid > button:hover {\n  background-color: rgba(255, 255, 255, 0.9);\n}\n\n.span-two {\n  grid-column: span 2;\n}\n\n.output {\n  grid-column: 1 / -1;\n  background-color: rgba(0, 0, 0, 0.75);\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-around;\n  flex-direction: column;\n  padding: 10px;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n\n.output .previous-operand {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 1.5rem;\n}\n\n.output .current-operand {\n  color: white;\n  font-size: 2.5rem;\n}\n',
        '',
      ]);
      // Exports
      module.exports = exports;

      /***/
    },
    /* 6 */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
      // css base code, injected by the css-loader
      // eslint-disable-next-line func-names
      module.exports = function (useSourceMap) {
        var list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);

            if (item[2]) {
              return '@media '.concat(item[2], ' {').concat(content, '}');
            }

            return content;
          }).join('');
        }; // import a list of modules into the list
        // eslint-disable-next-line func-names

        list.i = function (modules, mediaQuery, dedupe) {
          if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
          }

          var alreadyImportedModules = {};

          if (dedupe) {
            for (var i = 0; i < this.length; i++) {
              // eslint-disable-next-line prefer-destructuring
              var id = this[i][0];

              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }

          for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);

            if (dedupe && alreadyImportedModules[item[0]]) {
              // eslint-disable-next-line no-continue
              continue;
            }

            if (mediaQuery) {
              if (!item[2]) {
                item[2] = mediaQuery;
              } else {
                item[2] = ''.concat(mediaQuery, ' and ').concat(item[2]);
              }
            }

            list.push(item);
          }
        };

        return list;
      };

      function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

        var cssMapping = item[3];

        if (!cssMapping) {
          return content;
        }

        if (useSourceMap && typeof btoa === 'function') {
          var sourceMapping = toComment(cssMapping);
          var sourceURLs = cssMapping.sources.map(function (source) {
            return '/*# sourceURL='
              .concat(cssMapping.sourceRoot || '')
              .concat(source, ' */');
          });
          return [content]
            .concat(sourceURLs)
            .concat([sourceMapping])
            .join('\n');
        }

        return [content].join('\n');
      } // Adapted from convert-source-map (MIT)

      function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(
          unescape(encodeURIComponent(JSON.stringify(sourceMap)))
        );
        var data =
          'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            base64
          );
        return '/*# '.concat(data, ' */');
      }

      /***/
    },
    /* 7 */
    /***/ function (module, exports, __webpack_require__) {
      /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

      var stylesInDom = {};

      var memoize = function (fn) {
        var memo;

        return function () {
          if (typeof memo === 'undefined') memo = fn.apply(this, arguments);
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

      var getElement = (function (fn) {
        var memo = {};

        return function (selector) {
          if (typeof memo[selector] === 'undefined') {
            var styleTarget = fn.call(this, selector);
            // Special case to return head of iframe instead of iframe itself
            if (styleTarget instanceof window.HTMLIFrameElement) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                styleTarget = null;
              }
            }
            memo[selector] = styleTarget;
          }
          return memo[selector];
        };
      })(function (target) {
        return document.querySelector(target);
      });

      var singleton = null;
      var singletonCounter = 0;
      var stylesInsertedAtTop = [];

      var fixUrls = __webpack_require__(8);

      module.exports = function (list, options) {
        if (typeof DEBUG !== 'undefined' && DEBUG) {
          if (typeof document !== 'object')
            throw new Error(
              'The style-loader cannot be used in a non-browser environment'
            );
        }

        options = options || {};

        options.attrs = typeof options.attrs === 'object' ? options.attrs : {};

        // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page
        if (!options.singleton && typeof options.singleton !== 'boolean')
          options.singleton = isOldIE();

        // By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = 'head';

        // By default, add <style> tags to the bottom of the target
        if (!options.insertAt) options.insertAt = 'bottom';

        var styles = listToStyles(list, options);

        addStylesToDom(styles, options);

        return function update(newList) {
          var mayRemove = [];

          for (var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];

            domStyle.refs--;
            mayRemove.push(domStyle);
          }

          if (newList) {
            var newStyles = listToStyles(newList, options);
            addStylesToDom(newStyles, options);
          }

          for (var i = 0; i < mayRemove.length; i++) {
            var domStyle = mayRemove[i];

            if (domStyle.refs === 0) {
              for (var j = 0; j < domStyle.parts.length; j++)
                domStyle.parts[j]();

              delete stylesInDom[domStyle.id];
            }
          }
        };
      };

      function addStylesToDom(styles, options) {
        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs++;

            for (var j = 0; j < domStyle.parts.length; j++) {
              domStyle.parts[j](item.parts[j]);
            }

            for (; j < item.parts.length; j++) {
              domStyle.parts.push(addStyle(item.parts[j], options));
            }
          } else {
            var parts = [];

            for (var j = 0; j < item.parts.length; j++) {
              parts.push(addStyle(item.parts[j], options));
            }

            stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
          }
        }
      }

      function listToStyles(list, options) {
        var styles = [];
        var newStyles = {};

        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = options.base ? item[0] + options.base : item[0];
          var css = item[1];
          var media = item[2];
          var sourceMap = item[3];
          var part = { css: css, media: media, sourceMap: sourceMap };

          if (!newStyles[id])
            styles.push((newStyles[id] = { id: id, parts: [part] }));
          else newStyles[id].parts.push(part);
        }

        return styles;
      }

      function insertStyleElement(options, style) {
        var target = getElement(options.insertInto);

        if (!target) {
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
          );
        }

        var lastStyleElementInsertedAtTop =
          stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

        if (options.insertAt === 'top') {
          if (!lastStyleElementInsertedAtTop) {
            target.insertBefore(style, target.firstChild);
          } else if (lastStyleElementInsertedAtTop.nextSibling) {
            target.insertBefore(
              style,
              lastStyleElementInsertedAtTop.nextSibling
            );
          } else {
            target.appendChild(style);
          }
          stylesInsertedAtTop.push(style);
        } else if (options.insertAt === 'bottom') {
          target.appendChild(style);
        } else if (
          typeof options.insertAt === 'object' &&
          options.insertAt.before
        ) {
          var nextSibling = getElement(
            options.insertInto + ' ' + options.insertAt.before
          );
          target.insertBefore(style, nextSibling);
        } else {
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        }
      }

      function removeStyleElement(style) {
        if (style.parentNode === null) return false;
        style.parentNode.removeChild(style);

        var idx = stylesInsertedAtTop.indexOf(style);
        if (idx >= 0) {
          stylesInsertedAtTop.splice(idx, 1);
        }
      }

      function createStyleElement(options) {
        var style = document.createElement('style');

        options.attrs.type = 'text/css';

        addAttrs(style, options.attrs);
        insertStyleElement(options, style);

        return style;
      }

      function createLinkElement(options) {
        var link = document.createElement('link');

        options.attrs.type = 'text/css';
        options.attrs.rel = 'stylesheet';

        addAttrs(link, options.attrs);
        insertStyleElement(options, link);

        return link;
      }

      function addAttrs(el, attrs) {
        Object.keys(attrs).forEach(function (key) {
          el.setAttribute(key, attrs[key]);
        });
      }

      function addStyle(obj, options) {
        var style, update, remove, result;

        // If a transform function was defined, run it on the css
        if (options.transform && obj.css) {
          result = options.transform(obj.css);

          if (result) {
            // If transform returns a value, use that instead of the original css.
            // This allows running runtime transformations on the css.
            obj.css = result;
          } else {
            // If the transform function returns a falsy value, don't add this css.
            // This allows conditional loading of css
            return function () {
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
          typeof URL === 'function' &&
          typeof URL.createObjectURL === 'function' &&
          typeof URL.revokeObjectURL === 'function' &&
          typeof Blob === 'function' &&
          typeof btoa === 'function'
        ) {
          style = createLinkElement(options);
          update = updateLink.bind(null, style, options);
          remove = function () {
            removeStyleElement(style);

            if (style.href) URL.revokeObjectURL(style.href);
          };
        } else {
          style = createStyleElement(options);
          update = applyToTag.bind(null, style);
          remove = function () {
            removeStyleElement(style);
          };
        }

        update(obj);

        return function updateStyle(newObj) {
          if (newObj) {
            if (
              newObj.css === obj.css &&
              newObj.media === obj.media &&
              newObj.sourceMap === obj.sourceMap
            ) {
              return;
            }

            update((obj = newObj));
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

      function applyToSingletonTag(style, index, remove, obj) {
        var css = remove ? '' : obj.css;

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

      function applyToTag(style, obj) {
        var css = obj.css;
        var media = obj.media;

        if (media) {
          style.setAttribute('media', media);
        }

        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          while (style.firstChild) {
            style.removeChild(style.firstChild);
          }

          style.appendChild(document.createTextNode(css));
        }
      }

      function updateLink(link, options, obj) {
        var css = obj.css;
        var sourceMap = obj.sourceMap;

        /*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
        var autoFixUrls =
          options.convertToAbsoluteUrls === undefined && sourceMap;

        if (options.convertToAbsoluteUrls || autoFixUrls) {
          css = fixUrls(css);
        }

        if (sourceMap) {
          // http://stackoverflow.com/a/26603875
          css +=
            '\n/*# sourceMappingURL=data:application/json;base64,' +
            btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) +
            ' */';
        }

        var blob = new Blob([css], { type: 'text/css' });

        var oldSrc = link.href;

        link.href = URL.createObjectURL(blob);

        if (oldSrc) URL.revokeObjectURL(oldSrc);
      }

      /***/
    },
    /* 8 */
    /***/ function (module, exports) {
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
        var location = typeof window !== 'undefined' && window.location;

        if (!location) {
          throw new Error('fixUrls requires window.location');
        }

        // blank or null?
        if (!css || typeof css !== 'string') {
          return css;
        }

        var baseUrl = location.protocol + '//' + location.host;
        var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, '/');

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
        var fixedCss = css.replace(
          /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
          function (fullMatch, origUrl) {
            // strip quotes (if they exist)
            var unquotedOrigUrl = origUrl
              .trim()
              .replace(/^"(.*)"$/, function (o, $1) {
                return $1;
              })
              .replace(/^'(.*)'$/, function (o, $1) {
                return $1;
              });

            // already a full url? no change
            if (
              /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(
                unquotedOrigUrl
              )
            ) {
              return fullMatch;
            }

            // convert the url to a full url
            var newUrl;

            if (unquotedOrigUrl.indexOf('//') === 0) {
              //TODO: should we add protocol?
              newUrl = unquotedOrigUrl;
            } else if (unquotedOrigUrl.indexOf('/') === 0) {
              // path should be relative to the base url
              newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
            } else {
              // path should be relative to current directory
              newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ''); // Strip leading './'
            }

            // send back the fixed url(...)
            return 'url(' + JSON.stringify(newUrl) + ')';
          }
        );

        // send back the fixed css
        return fixedCss;
      };

      /***/
    },
    /******/
  ]
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2ViNWUzZWQwMDk4YzIzZDZlOGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tZXNzYWdlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21lc3NhZ2UuY3NzP2IwOTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21lc3NhZ2UuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiXSwibmFtZXMiOlsic3VwcG9ydGVkQVBJIiwiYXBwIiwid2luZG93IiwiY29uc29sZSIsImxvZyIsImNvbmZpZ3VyYXRpb25zIiwic29tZURlZmF1bHRDb25maWd1cmF0aW9uIiwiZ2xvYmFsT2JqZWN0IiwicXVldWUiLCJxIiwiaSIsImxlbmd0aCIsInRvTG93ZXJDYXNlIiwiZXh0ZW5kT2JqZWN0IiwiYXBpSGFuZGxlciIsImFwaSIsInBhcmFtcyIsIkVycm9yIiwiaW5kZXhPZiIsInNob3ciLCJ3YXJuIiwiYSIsImIiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInBpbmciLCJlbGVtZW50cyIsImJvZHkiLCJ0ZXh0IiwidGVtcG9yYXJ5IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiaHRtbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY2hpbGRyZW4iLCJwdXNoIiwiYXBwZW5kQ2hpbGQiLCJDYWxjdWxhdG9yIiwicHJldmlvdXNPcGVyYW5kVGV4dEVsZW1lbnQiLCJjdXJyZW50T3BlcmFuZFRleHRFbGVtZW50IiwiY2xlYXIiLCJjdXJyZW50T3BlcmFuZCIsInByZXZpb3VzT3BlcmFuZCIsIm9wZXJhdGlvbiIsInVuZGVmaW5lZCIsInRvU3RyaW5nIiwic2xpY2UiLCJudW1iZXIiLCJpbmNsdWRlcyIsImNvbXB1dGUiLCJjb21wdXRhdGlvbiIsInByZXYiLCJwYXJzZUZsb2F0IiwiY3VycmVudCIsImlzTmFOIiwic3RyaW5nTnVtYmVyIiwiaW50ZWdlckRpZ2l0cyIsInNwbGl0IiwiZGVjaW1hbERpZ2l0cyIsImludGVnZXJEaXNwbGF5IiwidG9Mb2NhbGVTdHJpbmciLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJpbm5lclRleHQiLCJnZXREaXNwbGF5TnVtYmVyIiwibnVtYmVyQnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvcGVyYXRpb25CdXR0b25zIiwiZXF1YWxzQnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImRlbGV0ZUJ1dHRvbiIsImFsbENsZWFyQnV0dG9uIiwiY2FsY3VsYXRvciIsImZvckVhY2giLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwZW5kTnVtYmVyIiwidXBkYXRlRGlzcGxheSIsImNob29zZU9wZXJhdGlvbiIsImNsb3NlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM1V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBIiwiZmlsZSI6IndpZGdldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNlYjVlM2VkMDA5OGMyM2Q2ZThkIiwiaW1wb3J0IHsgcGluZyB9IGZyb20gJy4vc2VydmljZXMnO1xuaW1wb3J0IHsgc2hvdyB9IGZyb20gJy4vdmlld3MvbWVzc2FnZSc7XG5cbmNvbnN0IHN1cHBvcnRlZEFQSSA9IFsnaW5pdCcsICdtZXNzYWdlJ107IC8vIGVubGlzdCBhbGwgbWV0aG9kcyBzdXBwb3J0ZWQgYnkgQVBJIChlLmcuIGBtdygnZXZlbnQnLCAndXNlci1sb2dpbicpO2ApXG5cbi8qKlxuICAgIFRoZSBtYWluIGVudHJ5IG9mIHRoZSBhcHBsaWNhdGlvblxuICAgICovXG5mdW5jdGlvbiBhcHAod2luZG93KSB7XG4gIGNvbnNvbGUubG9nKCdKUy1XaWRnZXQgc3RhcnRpbmcnKTtcblxuICAvLyBzZXQgZGVmYXVsdCBjb25maWd1cmF0aW9uc1xuICBsZXQgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgc29tZURlZmF1bHRDb25maWd1cmF0aW9uOiBmYWxzZSxcbiAgfTtcblxuICAvLyBhbGwgbWV0aG9kcyB0aGF0IHdlcmUgY2FsbGVkIHRpbGwgbm93IGFuZCBzdG9yZWQgaW4gcXVldWVcbiAgLy8gbmVlZHMgdG8gYmUgY2FsbGVkIG5vd1xuICBsZXQgZ2xvYmFsT2JqZWN0ID0gd2luZG93W3dpbmRvd1snSlMtV2lkZ2V0J11dO1xuICBsZXQgcXVldWUgPSBnbG9iYWxPYmplY3QucTtcbiAgaWYgKHF1ZXVlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHF1ZXVlW2ldWzBdLnRvTG93ZXJDYXNlKCkgPT0gJ2luaXQnKSB7XG4gICAgICAgIGNvbmZpZ3VyYXRpb25zID0gZXh0ZW5kT2JqZWN0KGNvbmZpZ3VyYXRpb25zLCBxdWV1ZVtpXVsxXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdKUy1XaWRnZXQgc3RhcnRlZCcsIGNvbmZpZ3VyYXRpb25zKTtcbiAgICAgIH0gZWxzZSBhcGlIYW5kbGVyKHF1ZXVlW2ldWzBdLCBxdWV1ZVtpXVsxXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gb3ZlcnJpZGUgdGVtcG9yYXJ5ICh1bnRpbCB0aGUgYXBwIGxvYWRlZCkgaGFuZGxlclxuICAvLyBmb3Igd2lkZ2V0J3MgQVBJIGNhbGxzXG4gIGdsb2JhbE9iamVjdCA9IGFwaUhhbmRsZXI7XG4gIGdsb2JhbE9iamVjdC5jb25maWd1cmF0aW9ucyA9IGNvbmZpZ3VyYXRpb25zO1xufVxuXG4vKipcbiAgICBNZXRob2QgdGhhdCBoYW5kbGVzIGFsbCBBUEkgY2FsbHNcbiAgICAqL1xuZnVuY3Rpb24gYXBpSGFuZGxlcihhcGksIHBhcmFtcykge1xuICBpZiAoIWFwaSkgdGhyb3cgRXJyb3IoJ0FQSSBtZXRob2QgcmVxdWlyZWQnKTtcbiAgYXBpID0gYXBpLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKHN1cHBvcnRlZEFQSS5pbmRleE9mKGFwaSkgPT09IC0xKVxuICAgIHRocm93IEVycm9yKGBNZXRob2QgJHthcGl9IGlzIG5vdCBzdXBwb3J0ZWRgKTtcblxuICBjb25zb2xlLmxvZyhgSGFuZGxpbmcgQVBJIGNhbGwgJHthcGl9YCwgcGFyYW1zKTtcblxuICBzd2l0Y2ggKGFwaSkge1xuICAgIC8vIFRPRE86IGFkZCBBUEkgaW1wbGVtZW50YXRpb25cbiAgICBjYXNlICdtZXNzYWdlJzpcbiAgICAgIHNob3cocGFyYW1zKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLndhcm4oYE5vIGhhbmRsZXIgZGVmaW5lZCBmb3IgJHthcGl9YCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0ZW5kT2JqZWN0KGEsIGIpIHtcbiAgZm9yICh2YXIga2V5IGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIGFba2V5XSA9IGJba2V5XTtcbiAgcmV0dXJuIGE7XG59XG5cbmFwcCh3aW5kb3cpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanMiLCJcbmV4cG9ydCBmdW5jdGlvbiBwaW5nKCkge1xuICAgIHJldHVybiAncG9uZyc7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzLmpzIiwiaW1wb3J0IGh0bWwgZnJvbSAnLi9tZXNzYWdlLmh0bWwnO1xuaW1wb3J0ICcuL21lc3NhZ2UuY3NzJztcblxubGV0IGVsZW1lbnRzID0gW107XG5sZXQgYm9keTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3codGV4dCkge1xuICAvLyBjb252ZXJ0IHBsYWluIEhUTUwgc3RyaW5nIGludG8gRE9NIGVsZW1lbnRzXG4gIGxldCB0ZW1wb3JhcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGVtcG9yYXJ5LmlubmVySFRNTCA9IGh0bWw7XG4gIC8vICAgdGVtcG9yYXJ5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2pzLXdpZGdldC1kaWFsb2cnKVswXS50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgLy8gYXBwZW5kIGVsZW1lbnRzIHRvIGJvZHlcbiAgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG4gIHdoaWxlICh0ZW1wb3JhcnkuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIGVsZW1lbnRzLnB1c2godGVtcG9yYXJ5LmNoaWxkcmVuWzBdKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKHRlbXBvcmFyeS5jaGlsZHJlblswXSk7XG4gIH1cblxuICBjbGFzcyBDYWxjdWxhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihwcmV2aW91c09wZXJhbmRUZXh0RWxlbWVudCwgY3VycmVudE9wZXJhbmRUZXh0RWxlbWVudCkge1xuICAgICAgdGhpcy5wcmV2aW91c09wZXJhbmRUZXh0RWxlbWVudCA9IHByZXZpb3VzT3BlcmFuZFRleHRFbGVtZW50O1xuICAgICAgdGhpcy5jdXJyZW50T3BlcmFuZFRleHRFbGVtZW50ID0gY3VycmVudE9wZXJhbmRUZXh0RWxlbWVudDtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgIHRoaXMuY3VycmVudE9wZXJhbmQgPSAnJztcbiAgICAgIHRoaXMucHJldmlvdXNPcGVyYW5kID0gJyc7XG4gICAgICB0aGlzLm9wZXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICB0aGlzLmN1cnJlbnRPcGVyYW5kID0gdGhpcy5jdXJyZW50T3BlcmFuZC50b1N0cmluZygpLnNsaWNlKDAsIC0xKTtcbiAgICB9XG5cbiAgICBhcHBlbmROdW1iZXIobnVtYmVyKSB7XG4gICAgICBpZiAobnVtYmVyID09PSAnLicgJiYgdGhpcy5jdXJyZW50T3BlcmFuZC5pbmNsdWRlcygnLicpKSByZXR1cm47XG4gICAgICB0aGlzLmN1cnJlbnRPcGVyYW5kID0gdGhpcy5jdXJyZW50T3BlcmFuZC50b1N0cmluZygpICsgbnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgY2hvb3NlT3BlcmF0aW9uKG9wZXJhdGlvbikge1xuICAgICAgaWYgKHRoaXMuY3VycmVudE9wZXJhbmQgPT09ICcnKSByZXR1cm47XG4gICAgICBpZiAodGhpcy5wcmV2aW91c09wZXJhbmQgIT09ICcnKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVyYXRpb24gPSBvcGVyYXRpb247XG4gICAgICB0aGlzLnByZXZpb3VzT3BlcmFuZCA9IHRoaXMuY3VycmVudE9wZXJhbmQ7XG4gICAgICB0aGlzLmN1cnJlbnRPcGVyYW5kID0gJyc7XG4gICAgfVxuXG4gICAgY29tcHV0ZSgpIHtcbiAgICAgIGxldCBjb21wdXRhdGlvbjtcbiAgICAgIGNvbnN0IHByZXYgPSBwYXJzZUZsb2F0KHRoaXMucHJldmlvdXNPcGVyYW5kKTtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBwYXJzZUZsb2F0KHRoaXMuY3VycmVudE9wZXJhbmQpO1xuICAgICAgaWYgKGlzTmFOKHByZXYpIHx8IGlzTmFOKGN1cnJlbnQpKSByZXR1cm47XG4gICAgICBzd2l0Y2ggKHRoaXMub3BlcmF0aW9uKSB7XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgIGNvbXB1dGF0aW9uID0gcHJldiArIGN1cnJlbnQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgIGNvbXB1dGF0aW9uID0gcHJldiAtIGN1cnJlbnQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgIGNvbXB1dGF0aW9uID0gcHJldiAqIGN1cnJlbnQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ8O3JzpcbiAgICAgICAgICBjb21wdXRhdGlvbiA9IHByZXYgLyBjdXJyZW50O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3VycmVudE9wZXJhbmQgPSBjb21wdXRhdGlvbjtcbiAgICAgIHRoaXMub3BlcmF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5wcmV2aW91c09wZXJhbmQgPSAnJztcbiAgICB9XG5cbiAgICBnZXREaXNwbGF5TnVtYmVyKG51bWJlcikge1xuICAgICAgY29uc3Qgc3RyaW5nTnVtYmVyID0gbnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICBjb25zdCBpbnRlZ2VyRGlnaXRzID0gcGFyc2VGbG9hdChzdHJpbmdOdW1iZXIuc3BsaXQoJy4nKVswXSk7XG4gICAgICBjb25zdCBkZWNpbWFsRGlnaXRzID0gc3RyaW5nTnVtYmVyLnNwbGl0KCcuJylbMV07XG4gICAgICBsZXQgaW50ZWdlckRpc3BsYXk7XG4gICAgICBpZiAoaXNOYU4oaW50ZWdlckRpZ2l0cykpIHtcbiAgICAgICAgaW50ZWdlckRpc3BsYXkgPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludGVnZXJEaXNwbGF5ID0gaW50ZWdlckRpZ2l0cy50b0xvY2FsZVN0cmluZygnZW4nLCB7XG4gICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChkZWNpbWFsRGlnaXRzICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGAke2ludGVnZXJEaXNwbGF5fS4ke2RlY2ltYWxEaWdpdHN9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnRlZ2VyRGlzcGxheTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVEaXNwbGF5KCkge1xuICAgICAgdGhpcy5jdXJyZW50T3BlcmFuZFRleHRFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuZ2V0RGlzcGxheU51bWJlcihcbiAgICAgICAgdGhpcy5jdXJyZW50T3BlcmFuZFxuICAgICAgKTtcbiAgICAgIGlmICh0aGlzLm9wZXJhdGlvbiAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMucHJldmlvdXNPcGVyYW5kVGV4dEVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7dGhpcy5nZXREaXNwbGF5TnVtYmVyKFxuICAgICAgICAgIHRoaXMucHJldmlvdXNPcGVyYW5kXG4gICAgICAgICl9ICR7dGhpcy5vcGVyYXRpb259YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJldmlvdXNPcGVyYW5kVGV4dEVsZW1lbnQuaW5uZXJUZXh0ID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbnVtYmVyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW51bWJlcl0nKTtcbiAgY29uc3Qgb3BlcmF0aW9uQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW9wZXJhdGlvbl0nKTtcbiAgY29uc3QgZXF1YWxzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZXF1YWxzXScpO1xuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kZWxldGVdJyk7XG4gIGNvbnN0IGFsbENsZWFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYWxsLWNsZWFyXScpO1xuICBjb25zdCBwcmV2aW91c09wZXJhbmRUZXh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ1tkYXRhLXByZXZpb3VzLW9wZXJhbmRdJ1xuICApO1xuICBjb25zdCBjdXJyZW50T3BlcmFuZFRleHRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnW2RhdGEtY3VycmVudC1vcGVyYW5kXSdcbiAgKTtcblxuICBjb25zdCBjYWxjdWxhdG9yID0gbmV3IENhbGN1bGF0b3IoXG4gICAgcHJldmlvdXNPcGVyYW5kVGV4dEVsZW1lbnQsXG4gICAgY3VycmVudE9wZXJhbmRUZXh0RWxlbWVudFxuICApO1xuXG4gIG51bWJlckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY2FsY3VsYXRvci5hcHBlbmROdW1iZXIoYnV0dG9uLmlubmVyVGV4dCk7XG4gICAgICBjYWxjdWxhdG9yLnVwZGF0ZURpc3BsYXkoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgb3BlcmF0aW9uQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjYWxjdWxhdG9yLmNob29zZU9wZXJhdGlvbihidXR0b24uaW5uZXJUZXh0KTtcbiAgICAgIGNhbGN1bGF0b3IudXBkYXRlRGlzcGxheSgpO1xuICAgIH0pO1xuICB9KTtcblxuICBlcXVhbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoYnV0dG9uKSA9PiB7XG4gICAgY2FsY3VsYXRvci5jb21wdXRlKCk7XG4gICAgY2FsY3VsYXRvci51cGRhdGVEaXNwbGF5KCk7XG4gIH0pO1xuXG4gIGFsbENsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGJ1dHRvbikgPT4ge1xuICAgIGNhbGN1bGF0b3IuY2xlYXIoKTtcbiAgICBjYWxjdWxhdG9yLnVwZGF0ZURpc3BsYXkoKTtcbiAgfSk7XG5cbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGJ1dHRvbikgPT4ge1xuICAgIGNhbGN1bGF0b3IuZGVsZXRlKCk7XG4gICAgY2FsY3VsYXRvci51cGRhdGVEaXNwbGF5KCk7XG4gIH0pO1xuXG4gIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBjbG9zZSgpIHtcbi8vICAgd2hpbGUgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbi8vICAgICBlbGVtZW50cy5wb3AoKS5yZW1vdmUoKTtcbi8vICAgfVxuLy8gICAvLyAgIGJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7XG4vLyB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlld3MvbWVzc2FnZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxkaXYgY2xhc3M9XFxcImpzLXdpZGdldC1vdmVybGF5XFxcIj4gLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNhbGN1bGF0b3ItZ3JpZFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvdXRwdXRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgZGF0YS1wcmV2aW91cy1vcGVyYW5kIGNsYXNzPVxcXCJwcmV2aW91cy1vcGVyYW5kXFxcIj48L2Rpdj5cXG4gICAgICA8ZGl2IGRhdGEtY3VycmVudC1vcGVyYW5kIGNsYXNzPVxcXCJjdXJyZW50LW9wZXJhbmRcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGJ1dHRvbiBkYXRhLWFsbC1jbGVhciBjbGFzcz1cXFwic3Bhbi10d29cXFwiPkFDPC9idXR0b24+XFxuICAgIDxidXR0b24gZGF0YS1kZWxldGU+REVMPC9idXR0b24+XFxuICAgIDxidXR0b24gZGF0YS1vcGVyYXRpb24+w7c8L2J1dHRvbj5cXG4gICAgPGJ1dHRvbiBkYXRhLW51bWJlcj4xPC9idXR0b24+XFxuICAgIDxidXR0b24gZGF0YS1udW1iZXI+MjwvYnV0dG9uPlxcbiAgICA8YnV0dG9uIGRhdGEtbnVtYmVyPjM8L2J1dHRvbj5cXG4gICAgPGJ1dHRvbiBkYXRhLW9wZXJhdGlvbj4qPC9idXR0b24+XFxuICAgIDxidXR0b24gZGF0YS1udW1iZXI+NDwvYnV0dG9uPlxcbiAgICA8YnV0dG9uIGRhdGEtbnVtYmVyPjU8L2J1dHRvbj5cXG4gICAgPGJ1dHRvbiBkYXRhLW51bWJlcj42PC9idXR0b24+XFxuICAgIDxidXR0b24gZGF0YS1vcGVyYXRpb24+KzwvYnV0dG9uPlxcbiAgICA8YnV0dG9uIGRhdGEtbnVtYmVyPjc8L2J1dHRvbj5cXG4gICAgPGJ1dHRvbiBkYXRhLW51bWJlcj44PC9idXR0b24+XFxuICAgIDxidXR0b24gZGF0YS1udW1iZXI+OTwvYnV0dG9uPlxcbiAgICA8YnV0dG9uIGRhdGEtb3BlcmF0aW9uPi08L2J1dHRvbj5cXG4gICAgPGJ1dHRvbiBkYXRhLW51bWJlcj4uPC9idXR0b24+XFxuICAgIDxidXR0b24gZGF0YS1udW1iZXI+MDwvYnV0dG9uPlxcbiAgICA8YnV0dG9uIGRhdGEtZXF1YWxzIGNsYXNzPVxcXCJzcGFuLXR3b1xcXCI+PTwvYnV0dG9uPlxcbjwvZGl2PlxcbjwvZGl2PlxcblxcbjwhLS0gPGRpdiBjbGFzcz1cXFwianMtd2lkZ2V0LWRpYWxvZ1xcXCI+PC9kaXY+IC0tPlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL21lc3NhZ2UuaHRtbFxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZXNzYWdlLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZXNzYWdlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZXNzYWdlLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvbWVzc2FnZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIC5qcy13aWRnZXQtb3ZlcmxheSB7XFxuICB6LWluZGV4OiAxMDAwMTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMHB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICBsZWZ0OiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgb3BhY2l0eTogMC44O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59ICovXFxuLyogXFxuLmpzLXdpZGdldC1kaWFsb2cge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTAwMDI7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiAzMCU7XFxuICBtYXJnaW46IDAgMCAwIC0xMjBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4ICMzMzM7XFxufSAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogR290aGFtIFJvdW5kZWQsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMGFhZmYsICMwMGZmNmMpO1xcbn1cXG5cXG4uY2FsY3VsYXRvci1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMXZoO1xcbiAgbWF4LXdpZHRoOiA0OS40dmg7XFxuICAvKiB3aWR0aDogMjguMiU7ICovXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtZ2FwOiAxcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxMDBweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCgxMjBweCwgYXV0bykgcmVwZWF0KDUsIDEwMHB4KTtcXG59XFxuXFxuLmNhbGN1bGF0b3ItZ3JpZCA+IGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xcbn1cXG5cXG4uY2FsY3VsYXRvci1ncmlkID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXG59XFxuXFxuLnNwYW4tdHdvIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbi5vdXRwdXQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLm91dHB1dCAucHJldmlvdXMtb3BlcmFuZCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ub3V0cHV0IC5jdXJyZW50LW9wZXJhbmQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3JjL3ZpZXdzL21lc3NhZ2UuY3NzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAoc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
