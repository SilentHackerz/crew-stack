webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(5), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, ReactDom, HomePage) {
		console.log('Loaded the Home Page');
		ReactDom.render(React.createElement(HomePage, null), document.getElementById('componentContainer'));
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	//webpack --progress --colors --watch (for development)
	//webpack -p (for production)

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * ReactDOM v0.14.0
	 *
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	// Based off https://github.com/ForbesLindesay/umd/blob/master/template.js
	;(function (f) {
	  // CommonJS
	  if ((false ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
	    module.exports = f(__webpack_require__(1));

	    // RequireJS
	  } else if (true) {
	      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	      // <script>
	    } else {
	        var g;
	        if (typeof window !== "undefined") {
	          g = window;
	        } else if (typeof global !== "undefined") {
	          g = global;
	        } else if (typeof self !== "undefined") {
	          g = self;
	        } else {
	          // works providing we're not in "use strict";
	          // needed for Java 8 Nashorn
	          // see https://github.com/facebook/react/issues/3037
	          g = this;
	        }
	        g.ReactDOM = f(g.React);
	      }
	})(function (React) {
	  return React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
		var HomePage = React.createClass({
			displayName: 'HomePage',

			getInitialState: function getInitialState() {
				return {
					userName: 'ashwin'
				};
			},
			componentDidMount: function componentDidMount() {
				console.log('triggered once after initial render');
			},
			render: function render() {
				return React.createElement(
					'div',
					{ id: 'homePage' },
					'haha, ',
					this.state.userName
				);
			}
		});

		return HomePage;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
]);