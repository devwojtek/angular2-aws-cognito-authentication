webpackJsonp([2,4],{

/***/ 22:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 512:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
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

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
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

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(659);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(512)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../postcss-loader/index.js!./dragula.css", function() {
			var newContent = require("!!../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../postcss-loader/index.js!./dragula.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(660);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(512)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n}\n.gu-hide {\n  display: none !important;\n}\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n}\n.gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20);\n}\n", ""]);

// exports


/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "header > nav {\n    position: fixed;\n    top: 0;\n    z-index: 1;\n    height: 127px !important;\n}\n\n.m-t-body {\n    margin-top: 130px !important;    \n}\n\n.m-l-minus-7p {\n    margin-left: -7px !important;\n}\n@media (max-width: 994px) {\n    header > nav {\n        height: 64px !important;\n    }\n    ..m-t-body {\n        margin-top: 66px !important;\n    }\n}\nnav a {\n    cursor: pointer !important;\n}\n.ul-bar {\n    border-bottom: 1px solid #2c3e50;\n    border-bottom-left-radius: 2%;\n    border-bottom-right-radius: 2%;\n    border-top-left-radius: 2%;\n    border-top-right-radius: 2%;\n}\n\n.navbar-brand {\n\tbackground-image: url('/images/logo.jpg');\n\tbackground-size:cover;\n\tbackground-position:center;\n\t/*width:200px;*/\n\theight:inherit;\n\tclear:none;\t\n\tposition:relative;\n\tborder-radius:0px;\n}\n\n.side-menu {\n    position: fixed;\n    width: 16.5%;\n    height: 100%;\n    padding: 0 2px;\n    left: 0;\n}\n\n.side-menu .collection-item {\n    color: #337f99 !important;\n}\n\n.side-menu .collection-item.active {\n    background-color: #337f99;\n    color: #eafaf9 !important;\n}\n\n.m-t-2p {\n    margin-top: 2px !important;\n}\n\nbody {\n/*    background: skyblue;\n    background-image: url(\"/images/sky_texture1997.jpg\");\n    background-attachment: fixed;\n    background-size: cover;\n    background-position: center;*/\n}\n.cardwall {\n    background-color: #2c3e50;\n    padding: 10px;\n    padding-right: 0px;\n    width: 100%;\n    margin-bottom: 0;\n}\n\n.cardwall .col.s12 {\n    #width: 75%;\n    #margin: 6.4% 0 0 18.7%;\n    margin-left: 0;\n    background-color: #333;\n    padding-left: 0;\n    height: 12.1em;\n    padding-top: .2em;\n}\n\n.cardwall .col.s12>div {\n    cursor: pointer;\n    font-family: 'Open Sans Condensed', sans-serif;\n    font-weight: 175;\n    -webkit-perspective: 1500;\n    -ms-perspective: 1500;\n    -o-perspective: 1500;\n    perspective: 1500;\n}\n\n.cardwall .col.s12 > .col.s3 > div div,\n.cardwall .col.s12 > .col.s3 > div div+div {\n    position: relative;\n    height: initial;\n    width: initial;\n}\n.cardwall .col.s12 > .col.s3 > div,\n.cardwall .col.s12 > .col.s3 > div+div {\n    color: #fff;\n    width: 98%;\n    height: 170px;\n    position: absolute;\n    -webkit-transition: all 0.5s ease-in-out;\n    transition: all 0.5s ease-in-out;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n}\n.cardwall .rear ol {\n    margin: 10px;\n    position: relative;\n}\n.cardwall .rear ol li {\n    line-height: 1em;\n    text-align: left;\n}\n.front {\n\tpadding-top:25px;\n\tvertical-align:center;\n    text-align: center;\n    font-size: 24px;\n}\n\n.kpi {\n\tfont-size:30px;\n\tfont-weight:bolder;\n}\n\n.rear {\n    color: white;\n    text-align: center;\n    font-size: 12px;\n    -webkit-transform: rotateY(-180deg);\n    transform: rotateY(-180deg);\n    background: #4f6f8f;\n}\n.rear p {\n    margin: 0;\n}\n.cardwall .col.s12 > .col.s3:hover {\n    min-height: 150px;\n    max-height: 300px;\n\t\n}\n\n.cardwall .col.s12 > .col.s3:hover > .front {\n    -webkit-transform: rotateY(180deg);\n    transform: rotateY(180deg);\n}\n.cardwall .col.s12 > .col.s3:hover > .rear {\n    -webkit-transform: rotateY(0deg);\n    transform: rotateY(0deg);\n}\n#tile1 {\n    background: #f12481;\n}\n#tile2 {\n    background: #2ab9a7;\n}\n#tile3 {\n    background: #0fb9ef;\n}\n#tile4 {\n    background: #d67118;\n}\n#tile5 {\n    background: #912525;\n}\n#tile6 {\n    background: #6240f2;\n}\n#tile7 {\n    background: #29b765;\n}\n#tile8 {\n    background: #f1c410;\n}\n#tile9 {\n    background: #007fb8;\n}\nheader.top-menu {\n    position: fixed;\n    top: 0;\n    height: 60px;\n    margin: 0;\n}\n.col:not(:first-child),\n.col:not(:last-child) {\n    padding-right: 7px;\n    padding-left: 7px;\n    width: 24%;\n}\n.top-menu {\n    position: fixed;\n    /* Set the navbar to fixed position */\n    \n    top: 0;\n    /* Position the navbar at the top of the page */\n    \n    width: 100%;\n    /* Full width */\n    \n    z-index: 100;\n}\n.left-attachment {\n    float: left !important;\n}\n.center {\n    margin-left: auto;\n    margin-right: auto;\n    width: 40%;\n    position: relative;\n    color: white;\n    float: right;\n}\n.right-attachment {\n    float: right !important;\n}\n.top-menu ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: rgba(0, 0, 0, .8);\n    border-radius: 0px;\n    line-height: 1;\n\twidth:85%;\n\tmargin-top:1.5px;\n\tfloat:right;\n}\n.top-menu ul li.active {\n    border-radius: 0px;\n    border: 1px solid skyblue;\n}\n.main-actions-navigation li {\n    margin-left: auto;\n    margin-right: auto;\n    width: 20%;\n    text-align: center;\n    color: white;\n}\n.main-actions-navigation li a {\n    border: 1.5px outset skyblue;\n}\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a.active {\n    border: 1.5 solid inset;\n\tbackground-color:#2c3e50;\n\tcolor:skyblue;\n\t\n}\n.top-menu li {\n    float: right;\n}\n.top-menu li a {\n    display: block;\n    color: white;\n    padding: 16px;\n    text-decoration: none;\n    position: relative;\n    font-size: 18px;\n}\n.top-menu .ruby {\n    position: absolute;\n    top: 1px;\n    right: 1px;\n}\n.top-menu .ruby .badge {\n    background-color: red;\n}\n.top-menu li a:hover, .top-menu li a.active {\n\tbackground-color:#2c3e50;\n    color: skyblue;\n}\n/*.side-menu ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    background-color: #2c3e50;\n    width: 100%;\n    color: #fff;\n    border-radius: 0px;\n}\n.side-menu li {\n    dispilay: block;\n}\n.side-menu li a {\n    display: block;\n    font-size: 13;\n    padding: 10px 10px 11px 8px;\n    width: 100%;\n\t border-right: 2px solid skyblue;\n    color: white;\n}\n.side-menu li a.active,\n.side-menu li a:hover {\n    background-color: rgba(0, 0, 0, 0.8);\n    text-decoration: none;\n    border-right: 4px solid skyblue;\n    color: skyblue;\n}\n.side-menu li a.active {\n    color: skyblue;\n}*/\n.routerwall {\n    background-color: #2c3e50;\n    width: 100%;\n    margin-top: 10px;\n    border-radius: 0px;\n}\n\n.routerwall .col.s12 {\n    border-radius: 0px;\n}\n\n.routerwall .list-group-item {\n    padding: 0;\n    margin-top: 5px;\n    margin-left: auto;\n    margin-right: auto;\n    width: 94%;\n    border-radius: 0px;\n}\n.routerwall .panel {\n    overflow: visible;\n    padding-bottom: 3px;\n    min-height: 480px;\n    padding-left: 5px;\n    padding-right: 5px;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -webkit-box-orient: verticle;\n    -webkit-box-direction: normal;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    white-space: normal;\n    vertical-align: top;\n    position: relative;\n    margin-right: .2%;\n    margin-left: .2%;\n}\n.containerWall {\n    padding-left: 1%;\n    min-height: 20em;\n}\n\n.containerWall .panel ul {\n    min-height: 19em;   \n}\n\n.routerwall .panel-heading {\n    margin: 0px;\n    border-radius: 0px;\n    color: white;\n}\n.routerwall .panel-body {\n    padding: 0px;\n}\n.containerWall .panel-heading {\n    background-color: #0fb9ef;\n}\n.routercard {\n    top: 0;\n    font-size: 12px;\n}\n.routercard .top-card {\n    top: 0;\n    line-height: 15px;\n    background-color: rgba(122, 112, 122, .8);\n    padding: 5px;\n    color: white;\n}\n.routercard .customer-name {\n    padding: 0 10px;\n}\n.routercard .customer-vehicle {\n    padding: 0px 0px 0px 10px;\n    border-bottom: 1px solid rgba(51, 51, 51, .4);\n}\n.routercard .time {\n    padding: 3px;\n}\n\n.card {\n    background-color: coral;\n    /*box-shadow: 1px 1px 1px #d62c1a;*/\n    margin: 1%;\n}\n\n.p-l-10 {\n    padding-left: 19%;\n}\n\n\n.widget-wrapper {\n    position: relative;\n    float: left;\n    width: 25%;\n}\n\n.widget-wrapper>.widget {\n    border: 1px solid #dcdcdc;\n    margin-top: -1px;\n    margin-left: -1px;\n}\n\n.item-widget {\n    background: #fff;\n    position: relative;\n}\n\n.item-widget a {\n    color: #333;\n}\n\n.widget-wrapper .item-widget .image {\n    margin: 0;\n}\n\n.item-widget .image {\n    position: relative;\n    overflow: hidden;\n    max-width: 100%;\n}\n\n\n.item-widget .image img {\n    max-width: 100%;\n    max-height: 225px;\n    width: auto;\n    height: auto;\n}\n\n.absolute-center {\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n    margin: auto;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n}\na img {\n    border: 0 none;\n}\n\n.widget-wrapper .item-widget .item-details {\n    border-top: 0;\n}\n\n.item-widget .item-details {\n    border-top: 1px solid #dcdcdc;\n    padding: .4em 1em;\n    height: 5.35em;\n}\n\n.item-widget .item-details>div.title {\n    white-space: normal;\n    height: 2.9em;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n}\n\n.item-widget .item-details>div {\n    line-height: 1.45em;\n}\n\n.item-widget .title {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -o-text-overflow: ellipsis;\n    color: #333;\n}\n\n.item-widget div.price-row {\n    white-space: normal;\n    color: #333;\n    overflow: hidden;\n    height: 1.45em;\n}\n\n.item-widget .item-details>div {\n    line-height: 1.45em;\n}\n\n.item-widget div.price-row>div.discounted-price, .item-widget div.price-row>.current-price {\n    font-size: 16px;\n}\n\n.item-widget div.price-row>div:last-child {\n    padding-right: 0;\n}\n\n.item-widget div.price-row>div {\n    display: inline-block;\n    padding-right: 5px;\n}\n\n.item-widget div.price-row>div.discounted-price span.price, .item-widget div.price-row>.current-price span.price {\n    font-weight: bold;\n}\n\n.vehicle-card input[type=\"radio\"]{ /* HIDE RADIO */\n  visibility: hidden; /* Makes input not-clickable */\n  position: absolute; /* Remove input from document flow */\n}\n\n.vehicle-card > input[type=\"radio\"] + div.widget-wrapper{ /* IMAGE STYLES */\n  cursor:pointer;\n  border:2px solid transparent;\n}\n\n.vehicle-card > input[type=\"radio\"]:checked + div.widget-wrapper{ /* (RADIO CHECKED) IMAGE STYLES */\n  border:2px solid #f00;\n}\n\n\n.gu-mirror {\n    cursor: pointer;\n    display: table;\n    list-style: none;\n    position: fixed !important;\n    margin: 0 !important;\n    z-index: 9999 !important;\n    opacity: 0.8;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n    filter: alpha(opacity=80);\n}\n\n.gu-hide {\n    display: none !important;\n}\n\n.gu-unselectable {\n    -webkit-user-select: none !important;\n    -moz-user-select: none !important;\n    -ms-user-select: none !important;\n    user-select: none !important;\n}\n\n.gu-transit {\n    opacity: 0.2;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n    filter: alpha(opacity=20);\n}\n\ndiv.modal{\n    z-index: 10;\n    overflow: hidden;\n}\n\ndiv.modal .modal-header button.close {\n    float: right;\n    background-color: #fafafa !important;\n    color: #9F9F9F !important;\n    cursor: pointer;\n    -webkit-transition: .2s ease-out;\n    transition: .2s ease-out;\n    outline: 0;\n    border: none;\n    display: inline-block;\n    -webkit-tap-highlight-color: ;\n}\n\ndiv.modal .modal-header button.close span{ \n    font-size: 1.5em;\n}\n\ndiv.modal .modal-body .btn {\n    /*background-color: #337f99 !important;*/\n}\n\ndiv.modal .modal-footer {\n    display: none;\n}\n\npicker-modal section {\n    position: initial !important;\n}\n\npicker-modal .picker-modal {\n    overflow-y: hidden !important; \n}\n\npicker-modal .picker-modal-main {\n    width: 68% !important;\n    margin-left: 50%;\n    margin-bottom: 3%;\n}\n\npicker-modal .picker-modal-main .picker-wrap {\n    width: initial !important; \n}\n\napp-technician-dashboard-router div.routerwall {\n    background: white;\n}\n\napp-technician-dashboard-router div.containerWall.col.s2.center-align div.panel {\n    border: 1px solid #2c3e50;\n}\n\napp-technician-dashboard-router div.containerWall.col.s2.center-align div.panel-heading {\n    border: 1px solid;\n    border-color: #2c3e50;\n    border-radius: 4px;\n    width: 105.5%;\n    margin-left: -3%;\n}\napp-technician-dashboard-router div.containerWall.col.s2.center-align:nth-child(1) div.panel-heading {\n    background: yellow;\n    color: black;\n}\n\napp-technician-dashboard-router div.containerWall.col.s2.center-align:nth-child(6) div.panel-heading {\n    background: #009e0f;\n    color: white;\n}\n\napp-technician-dashboard-router div.containerWall.col.s2.center-align:nth-child(2) div.panel-heading {\n    background: #ff9900;\n    color: black;\n}\n\napp-technician-dashboard-router div.containerWall.col.s2.center-align:nth-child(3) div.panel-heading {\n    background: #2b78e4;\n    color: white;\n}\n\napp-technician-dashboard-router div.containerWall.col.s2.center-align:nth-child(4) div.panel-heading {\n    background: #ff00ff;\n    color: white;\n}\n\napp-technician-dashboard-router div.containerWall.col.s2.center-align:nth-child(5) div.panel-heading {\n    background: #b52422;\n    color: white;\n}\n\n\n.p-l-6{\n    padding-left: 6% !important;\n}", ""]);

// exports


/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(517);
module.exports = __webpack_require__(516);


/***/ })

},[720]);
//# sourceMappingURL=styles.bundle.js.map