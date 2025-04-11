(function (React, reactDom, adminjs) {
  'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n.default = e;
    return Object.freeze(n);
  }

  var React__namespace = /*#__PURE__*/_interopNamespace(React);

  const UploadImage = ({
    onChange,
    property,
    record,
    customErrorMessage
  }) => {
    const [preview, setPreview] = React.useState(record?.params?.[property.name] || '');
    const handleChange = event => {
      const file = event.target.files?.[0];
      if (file) {
        setPreview(URL.createObjectURL(file)); // Update preview
        onChange(property.name, file);
      }
    };
    const inputRef = React__namespace.default.useRef(null);
    const handleFileInputClick = () => {
      inputRef.current.click();
    };
    React__namespace.default.useEffect(() => {
      console.log({
        property,
        record
      });
      console.log(record.errors?.image?.message);
    });
    return /*#__PURE__*/React__namespace.default.createElement("div", null, /*#__PURE__*/React__namespace.default.createElement("label", {
      htmlFor: ""
    }, "* ", property.name), /*#__PURE__*/React__namespace.default.createElement("section", {
      style: {
        backgroundColor: "white",
        padding: "2rem 4rem",
        borderRadius: "0.375rem",
        position: "relative"
      }
    }, /*#__PURE__*/React__namespace.default.createElement("div", {
      onClick: handleFileInputClick,
      style: {
        backgroundColor: "#FCFAF2",
        borderRadius: "0.5rem",
        borderWidth: "2px",
        borderStyle: "dashed",
        borderColor: "rgba(51, 51, 65, 0.75)",
        padding: "30.5px"
      }
    }, /*#__PURE__*/React__namespace.default.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        cursor: "pointer"
      }
    }, preview ? /*#__PURE__*/React__namespace.default.createElement("img", {
      src: preview,
      alt: "Preview",
      style: {
        marginTop: '10px',
        maxWidth: '100px'
      },
      onClick: handleFileInputClick
    }) : /*#__PURE__*/React__namespace.default.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React__namespace.default.createElement("p", null, "Click to upload"), /*#__PURE__*/React__namespace.default.createElement("p", null, "Max no of Image is 1"), /*#__PURE__*/React__namespace.default.createElement("p", null, ".Png, .Jpg images only*"))), /*#__PURE__*/React__namespace.default.createElement("input", {
      type: "file",
      id: "image",
      ref: inputRef,
      style: {
        display: "none"
      },
      name: "attachment",
      accept: "image/*",
      onChange: handleChange
    }))), /*#__PURE__*/React__namespace.default.createElement("h1", {
      style: {
        color: 'red',
        fontSize: '14px',
        marginBottom: '10px'
      }
    }, record.errors?.image?.message));
  };

  const UploadVideo = ({
    onChange,
    property,
    record,
    customErrorMessage
  }) => {
    const [preview, setPreview] = React.useState(record?.params?.[property.name] || '');
    const handleChangeFile = event => {
      let file = event.target.files?.[0];
      if (file) {
        setPreview(() => URL.createObjectURL(file)); // Update preview
        onChange(property.name, file);
      }
    };
    const handleChangeLink = event => {
      let altUrl = event.target.value;
      if (altUrl) {
        setPreview(() => altUrl); // Update preview
        onChange(property.name, altUrl);
      }
    };
    console.log({
      preview
    });
    const inputRef = React__namespace.default.useRef(null);
    const handleFileInputClick = () => {
      inputRef.current.click();
    };
    React__namespace.default.useEffect(() => {
      console.log({
        property,
        record
      });
      console.log(record.errors?.lessonvideo?.message);
    });
    React__namespace.default.useEffect(() => {
      return () => {
        if (preview?.startsWith("blob:")) {
          URL.revokeObjectURL(preview);
        }
      };
    }, [preview]);
    return /*#__PURE__*/React__namespace.default.createElement("div", null, /*#__PURE__*/React__namespace.default.createElement("label", {
      htmlFor: ""
    }, "* ", property.name), /*#__PURE__*/React__namespace.default.createElement("section", {
      style: {
        backgroundColor: "white",
        padding: "2rem 4rem",
        borderRadius: "0.375rem",
        position: "relative"
      }
    }, /*#__PURE__*/React__namespace.default.createElement("div", {
      onClick: handleFileInputClick,
      style: {
        backgroundColor: "#FCFAF2",
        borderRadius: "0.5rem",
        borderWidth: "2px",
        borderStyle: "dashed",
        borderColor: "rgba(51, 51, 65, 0.75)",
        padding: "30.5px"
      }
    }, /*#__PURE__*/React__namespace.default.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        cursor: "pointer"
      }
    }, preview ? /*#__PURE__*/React__namespace.default.createElement("video", {
      key: preview,
      onClick: handleFileInputClick,
      style: {
        marginTop: '10px',
        maxWidth: '400px'
      },
      controls: true,
      width: "500"
    }, /*#__PURE__*/React__namespace.default.createElement("source", {
      src: preview,
      type: "video/mp4"
    }), "Your browser does not support the video tag.") : /*#__PURE__*/React__namespace.default.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React__namespace.default.createElement("p", null, "Click to upload"), /*#__PURE__*/React__namespace.default.createElement("p", null, "Max no of video is 1"), /*#__PURE__*/React__namespace.default.createElement("p", null, ".Mp4 Videos only*"))), /*#__PURE__*/React__namespace.default.createElement("input", {
      type: "file",
      id: "videoUrl",
      ref: inputRef,
      style: {
        display: "none"
      },
      name: "attachment",
      accept: "video/*",
      onChange: handleChangeFile
    })), /*#__PURE__*/React__namespace.default.createElement("p", {
      style: {
        marginTop: '10px'
      }
    }, "or"), /*#__PURE__*/React__namespace.default.createElement("label", {
      htmlFor: "videoUrl",
      style: {
        margin: '10px 0px',
        display: 'flex',
        flexDirection: "column",
        gap: '10px'
      }
    }, "Video Url", /*#__PURE__*/React__namespace.default.createElement("input", {
      type: "text",
      id: "videoUrl",
      name: "videoUrl",
      accept: "video/*",
      onChange: handleChangeLink,
      style: {
        padding: '5px 10px',
        borderRadius: '5px',
        border: '1px solid rgb(187, 195, 203)',
        color: 'rgb(12, 30, 41)',
        fontSize: '14px'
      }
    }))), /*#__PURE__*/React__namespace.default.createElement("h1", {
      style: {
        color: 'red',
        fontSize: '14px',
        marginBottom: '10px'
      }
    }, record.errors?.lessonVideo?.message));
  };

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }

  function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (undefined !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }

  function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
  }

  function _defineProperty(e, r, t) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t, e;
  }

  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }

  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }

  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = true,
        o = false;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = true, n = r;
      } finally {
        try {
          if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }

  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : undefined;
    }
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }

  function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r[n];
    }
    return t;
  }

  function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o,
      r,
      i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }

  var _excluded$6 = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
  function useStateManager(_ref) {
    var _ref$defaultInputValu = _ref.defaultInputValue,
      defaultInputValue = _ref$defaultInputValu === undefined ? '' : _ref$defaultInputValu,
      _ref$defaultMenuIsOpe = _ref.defaultMenuIsOpen,
      defaultMenuIsOpen = _ref$defaultMenuIsOpe === undefined ? false : _ref$defaultMenuIsOpe,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === undefined ? null : _ref$defaultValue,
      propsInputValue = _ref.inputValue,
      propsMenuIsOpen = _ref.menuIsOpen,
      propsOnChange = _ref.onChange,
      propsOnInputChange = _ref.onInputChange,
      propsOnMenuClose = _ref.onMenuClose,
      propsOnMenuOpen = _ref.onMenuOpen,
      propsValue = _ref.value,
      restSelectProps = _objectWithoutProperties(_ref, _excluded$6);
    var _useState = React.useState(propsInputValue !== undefined ? propsInputValue : defaultInputValue),
      _useState2 = _slicedToArray(_useState, 2),
      stateInputValue = _useState2[0],
      setStateInputValue = _useState2[1];
    var _useState3 = React.useState(propsMenuIsOpen !== undefined ? propsMenuIsOpen : defaultMenuIsOpen),
      _useState4 = _slicedToArray(_useState3, 2),
      stateMenuIsOpen = _useState4[0],
      setStateMenuIsOpen = _useState4[1];
    var _useState5 = React.useState(propsValue !== undefined ? propsValue : defaultValue),
      _useState6 = _slicedToArray(_useState5, 2),
      stateValue = _useState6[0],
      setStateValue = _useState6[1];
    var onChange = React.useCallback(function (value, actionMeta) {
      if (typeof propsOnChange === 'function') {
        propsOnChange(value, actionMeta);
      }
      setStateValue(value);
    }, [propsOnChange]);
    var onInputChange = React.useCallback(function (value, actionMeta) {
      var newValue;
      if (typeof propsOnInputChange === 'function') {
        newValue = propsOnInputChange(value, actionMeta);
      }
      setStateInputValue(newValue !== undefined ? newValue : value);
    }, [propsOnInputChange]);
    var onMenuOpen = React.useCallback(function () {
      if (typeof propsOnMenuOpen === 'function') {
        propsOnMenuOpen();
      }
      setStateMenuIsOpen(true);
    }, [propsOnMenuOpen]);
    var onMenuClose = React.useCallback(function () {
      if (typeof propsOnMenuClose === 'function') {
        propsOnMenuClose();
      }
      setStateMenuIsOpen(false);
    }, [propsOnMenuClose]);
    var inputValue = propsInputValue !== undefined ? propsInputValue : stateInputValue;
    var menuIsOpen = propsMenuIsOpen !== undefined ? propsMenuIsOpen : stateMenuIsOpen;
    var value = propsValue !== undefined ? propsValue : stateValue;
    return _objectSpread2(_objectSpread2({}, restSelectProps), {}, {
      inputValue: inputValue,
      menuIsOpen: menuIsOpen,
      onChange: onChange,
      onInputChange: onInputChange,
      onMenuClose: onMenuClose,
      onMenuOpen: onMenuOpen,
      value: value
    });
  }

  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }

  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }

  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return _defineProperties(e.prototype, r), _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: false
    }), e;
  }

  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }

  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: true,
        configurable: true
      }
    }), Object.defineProperty(t, "prototype", {
      writable: false
    }), e && _setPrototypeOf(t, e);
  }

  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }

  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return !!t;
    })();
  }

  function _assertThisInitialized(e) {
    if (undefined === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }

  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (undefined !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }

  function _createSuper(t) {
    var r = _isNativeReflectConstruct();
    return function () {
      var e,
        o = _getPrototypeOf(t);
      if (r) {
        var s = _getPrototypeOf(this).constructor;
        e = Reflect.construct(o, arguments, s);
      } else e = o.apply(this, arguments);
      return _possibleConstructorReturn(this, e);
    };
  }

  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }

  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }

  /*

  Based off glamor's StyleSheet, thanks Sunil ❤️

  high performance StyleSheet for css-in-js systems

  - uses multiple style tags behind the scenes for millions of rules
  - uses `insertRule` for appending in production for *much* faster performance

  // usage

  import { StyleSheet } from '@emotion/sheet'

  let styleSheet = new StyleSheet({ key: '', container: document.head })

  styleSheet.insert('#box { border: 1px solid red; }')
  - appends a css rule into the stylesheet

  styleSheet.flush()
  - empties the stylesheet of all its contents

  */

  function sheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox

    /* istanbul ignore next */


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    } // this function should always return with a value
    // TS can't understand it though so we make it stop complaining here


    return undefined;
  }

  function createStyleElement(options) {
    var tag = document.createElement('style');
    tag.setAttribute('data-emotion', options.key);

    if (options.nonce !== undefined) {
      tag.setAttribute('nonce', options.nonce);
    }

    tag.appendChild(document.createTextNode(''));
    tag.setAttribute('data-s', '');
    return tag;
  }

  var StyleSheet = /*#__PURE__*/function () {
    // Using Node instead of HTMLElement since container may be a ShadowRoot
    function StyleSheet(options) {
      var _this = this;

      this._insertTag = function (tag) {
        var before;

        if (_this.tags.length === 0) {
          if (_this.insertionPoint) {
            before = _this.insertionPoint.nextSibling;
          } else if (_this.prepend) {
            before = _this.container.firstChild;
          } else {
            before = _this.before;
          }
        } else {
          before = _this.tags[_this.tags.length - 1].nextSibling;
        }

        _this.container.insertBefore(tag, before);

        _this.tags.push(tag);
      };

      this.isSpeedy = options.speedy === undefined ? true : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

      this.key = options.key;
      this.container = options.container;
      this.prepend = options.prepend;
      this.insertionPoint = options.insertionPoint;
      this.before = null;
    }

    var _proto = StyleSheet.prototype;

    _proto.hydrate = function hydrate(nodes) {
      nodes.forEach(this._insertTag);
    };

    _proto.insert = function insert(rule) {
      // the max length is how many rules we have per style tag, it's 65000 in speedy mode
      // it's 1 in dev because we insert source maps that map a single rule to a location
      // and you can only have one source map per style tag
      if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
        this._insertTag(createStyleElement(this));
      }

      var tag = this.tags[this.tags.length - 1];

      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);

        try {
          // this is the ultrafast version, works across browsers
          // the big drawback is that the css won't be editable in devtools
          sheet.insertRule(rule, sheet.cssRules.length);
        } catch (e) {
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }

      this.ctr++;
    };

    _proto.flush = function flush() {
      this.tags.forEach(function (tag) {
        var _tag$parentNode;

        return (_tag$parentNode = tag.parentNode) == null ? undefined : _tag$parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;
    };

    return StyleSheet;
  }();

  var MS = '-ms-';
  var MOZ = '-moz-';
  var WEBKIT = '-webkit-';

  var COMMENT = 'comm';
  var RULESET = 'rule';
  var DECLARATION = 'decl';
  var IMPORT = '@import';
  var KEYFRAMES = '@keyframes';
  var LAYER = '@layer';

  /**
   * @param {number}
   * @return {number}
   */
  var abs = Math.abs;

  /**
   * @param {number}
   * @return {string}
   */
  var from = String.fromCharCode;

  /**
   * @param {object}
   * @return {object}
   */
  var assign = Object.assign;

  /**
   * @param {string} value
   * @param {number} length
   * @return {number}
   */
  function hash (value, length) {
  	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
  }

  /**
   * @param {string} value
   * @return {string}
   */
  function trim (value) {
  	return value.trim()
  }

  /**
   * @param {string} value
   * @param {RegExp} pattern
   * @return {string?}
   */
  function match (value, pattern) {
  	return (value = pattern.exec(value)) ? value[0] : value
  }

  /**
   * @param {string} value
   * @param {(string|RegExp)} pattern
   * @param {string} replacement
   * @return {string}
   */
  function replace (value, pattern, replacement) {
  	return value.replace(pattern, replacement)
  }

  /**
   * @param {string} value
   * @param {string} search
   * @return {number}
   */
  function indexof (value, search) {
  	return value.indexOf(search)
  }

  /**
   * @param {string} value
   * @param {number} index
   * @return {number}
   */
  function charat (value, index) {
  	return value.charCodeAt(index) | 0
  }

  /**
   * @param {string} value
   * @param {number} begin
   * @param {number} end
   * @return {string}
   */
  function substr (value, begin, end) {
  	return value.slice(begin, end)
  }

  /**
   * @param {string} value
   * @return {number}
   */
  function strlen (value) {
  	return value.length
  }

  /**
   * @param {any[]} value
   * @return {number}
   */
  function sizeof (value) {
  	return value.length
  }

  /**
   * @param {any} value
   * @param {any[]} array
   * @return {any}
   */
  function append (value, array) {
  	return array.push(value), value
  }

  /**
   * @param {string[]} array
   * @param {function} callback
   * @return {string}
   */
  function combine (array, callback) {
  	return array.map(callback).join('')
  }

  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = '';

  /**
   * @param {string} value
   * @param {object | null} root
   * @param {object | null} parent
   * @param {string} type
   * @param {string[] | string} props
   * @param {object[] | string} children
   * @param {number} length
   */
  function node (value, root, parent, type, props, children, length) {
  	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
  }

  /**
   * @param {object} root
   * @param {object} props
   * @return {object}
   */
  function copy (root, props) {
  	return assign(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
  }

  /**
   * @return {number}
   */
  function char () {
  	return character
  }

  /**
   * @return {number}
   */
  function prev () {
  	character = position > 0 ? charat(characters, --position) : 0;

  	if (column--, character === 10)
  		column = 1, line--;

  	return character
  }

  /**
   * @return {number}
   */
  function next () {
  	character = position < length ? charat(characters, position++) : 0;

  	if (column++, character === 10)
  		column = 1, line++;

  	return character
  }

  /**
   * @return {number}
   */
  function peek () {
  	return charat(characters, position)
  }

  /**
   * @return {number}
   */
  function caret () {
  	return position
  }

  /**
   * @param {number} begin
   * @param {number} end
   * @return {string}
   */
  function slice (begin, end) {
  	return substr(characters, begin, end)
  }

  /**
   * @param {number} type
   * @return {number}
   */
  function token (type) {
  	switch (type) {
  		// \0 \t \n \r \s whitespace token
  		case 0: case 9: case 10: case 13: case 32:
  			return 5
  		// ! + , / > @ ~ isolate token
  		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
  		// ; { } breakpoint token
  		case 59: case 123: case 125:
  			return 4
  		// : accompanied token
  		case 58:
  			return 3
  		// " ' ( [ opening delimit token
  		case 34: case 39: case 40: case 91:
  			return 2
  		// ) ] closing delimit token
  		case 41: case 93:
  			return 1
  	}

  	return 0
  }

  /**
   * @param {string} value
   * @return {any[]}
   */
  function alloc (value) {
  	return line = column = 1, length = strlen(characters = value), position = 0, []
  }

  /**
   * @param {any} value
   * @return {any}
   */
  function dealloc (value) {
  	return characters = '', value
  }

  /**
   * @param {number} type
   * @return {string}
   */
  function delimit (type) {
  	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
  }

  /**
   * @param {number} type
   * @return {string}
   */
  function whitespace (type) {
  	while (character = peek())
  		if (character < 33)
  			next();
  		else
  			break

  	return token(type) > 2 || token(character) > 3 ? '' : ' '
  }

  /**
   * @param {number} index
   * @param {number} count
   * @return {string}
   */
  function escaping (index, count) {
  	while (--count && next())
  		// not 0-9 A-F a-f
  		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
  			break

  	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
  }

  /**
   * @param {number} type
   * @return {number}
   */
  function delimiter (type) {
  	while (next())
  		switch (character) {
  			// ] ) " '
  			case type:
  				return position
  			// " '
  			case 34: case 39:
  				if (type !== 34 && type !== 39)
  					delimiter(character);
  				break
  			// (
  			case 40:
  				if (type === 41)
  					delimiter(type);
  				break
  			// \
  			case 92:
  				next();
  				break
  		}

  	return position
  }

  /**
   * @param {number} type
   * @param {number} index
   * @return {number}
   */
  function commenter (type, index) {
  	while (next())
  		// //
  		if (type + character === 47 + 10)
  			break
  		// /*
  		else if (type + character === 42 + 42 && peek() === 47)
  			break

  	return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
  }

  /**
   * @param {number} index
   * @return {string}
   */
  function identifier (index) {
  	while (!token(peek()))
  		next();

  	return slice(index, position)
  }

  /**
   * @param {string} value
   * @return {object[]}
   */
  function compile (value) {
  	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {string[]} rule
   * @param {string[]} rules
   * @param {string[]} rulesets
   * @param {number[]} pseudo
   * @param {number[]} points
   * @param {string[]} declarations
   * @return {object}
   */
  function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  	var index = 0;
  	var offset = 0;
  	var length = pseudo;
  	var atrule = 0;
  	var property = 0;
  	var previous = 0;
  	var variable = 1;
  	var scanning = 1;
  	var ampersand = 1;
  	var character = 0;
  	var type = '';
  	var props = rules;
  	var children = rulesets;
  	var reference = rule;
  	var characters = type;

  	while (scanning)
  		switch (previous = character, character = next()) {
  			// (
  			case 40:
  				if (previous != 108 && charat(characters, length - 1) == 58) {
  					if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1)
  						ampersand = -1;
  					break
  				}
  			// " ' [
  			case 34: case 39: case 91:
  				characters += delimit(character);
  				break
  			// \t \n \r \s
  			case 9: case 10: case 13: case 32:
  				characters += whitespace(previous);
  				break
  			// \
  			case 92:
  				characters += escaping(caret() - 1, 7);
  				continue
  			// /
  			case 47:
  				switch (peek()) {
  					case 42: case 47:
  						append(comment(commenter(next(), caret()), root, parent), declarations);
  						break
  					default:
  						characters += '/';
  				}
  				break
  			// {
  			case 123 * variable:
  				points[index++] = strlen(characters) * ampersand;
  			// } ; \0
  			case 125 * variable: case 59: case 0:
  				switch (character) {
  					// \0 }
  					case 0: case 125: scanning = 0;
  					// ;
  					case 59 + offset: if (ampersand == -1) characters = replace(characters, /\f/g, '');
  						if (property > 0 && (strlen(characters) - length))
  							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
  						break
  					// @ ;
  					case 59: characters += ';';
  					// { rule/at-rule
  					default:
  						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);

  						if (character === 123)
  							if (offset === 0)
  								parse(characters, root, reference, reference, props, rulesets, length, points, children);
  							else
  								switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
  									// d l m s
  									case 100: case 108: case 109: case 115:
  										parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
  										break
  									default:
  										parse(characters, reference, reference, reference, [''], children, 0, points, children);
  								}
  				}

  				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
  				break
  			// :
  			case 58:
  				length = 1 + strlen(characters), property = previous;
  			default:
  				if (variable < 1)
  					if (character == 123)
  						--variable;
  					else if (character == 125 && variable++ == 0 && prev() == 125)
  						continue

  				switch (characters += from(character), character * variable) {
  					// &
  					case 38:
  						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
  						break
  					// ,
  					case 44:
  						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
  						break
  					// @
  					case 64:
  						// -
  						if (peek() === 45)
  							characters += delimit(next());

  						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
  						break
  					// -
  					case 45:
  						if (previous === 45 && strlen(characters) == 2)
  							variable = 0;
  				}
  		}

  	return rulesets
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {number} index
   * @param {number} offset
   * @param {string[]} rules
   * @param {number[]} points
   * @param {string} type
   * @param {string[]} props
   * @param {string[]} children
   * @param {number} length
   * @return {object}
   */
  function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
  	var post = offset - 1;
  	var rule = offset === 0 ? rules : [''];
  	var size = sizeof(rule);

  	for (var i = 0, j = 0, k = 0; i < index; ++i)
  		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
  			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
  				props[k++] = z;

  	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length)
  }

  /**
   * @param {number} value
   * @param {object} root
   * @param {object?} parent
   * @return {object}
   */
  function comment (value, root, parent) {
  	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0)
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {number} length
   * @return {object}
   */
  function declaration (value, root, parent, length) {
  	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length)
  }

  /**
   * @param {object[]} children
   * @param {function} callback
   * @return {string}
   */
  function serialize (children, callback) {
  	var output = '';
  	var length = sizeof(children);

  	for (var i = 0; i < length; i++)
  		output += callback(children[i], i, children, callback) || '';

  	return output
  }

  /**
   * @param {object} element
   * @param {number} index
   * @param {object[]} children
   * @param {function} callback
   * @return {string}
   */
  function stringify (element, index, children, callback) {
  	switch (element.type) {
  		case LAYER: if (element.children.length) break
  		case IMPORT: case DECLARATION: return element.return = element.return || element.value
  		case COMMENT: return ''
  		case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
  		case RULESET: element.value = element.props.join(',');
  	}

  	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
  }

  /**
   * @param {function[]} collection
   * @return {function}
   */
  function middleware (collection) {
  	var length = sizeof(collection);

  	return function (element, index, children, callback) {
  		var output = '';

  		for (var i = 0; i < length; i++)
  			output += collection[i](element, index, children, callback) || '';

  		return output
  	}
  }

  /**
   * @param {function} callback
   * @return {function}
   */
  function rulesheet (callback) {
  	return function (element) {
  		if (!element.root)
  			if (element = element.return)
  				callback(element);
  	}
  }

  function memoize(fn) {
    var cache = Object.create(null);
    return function (arg) {
      if (cache[arg] === undefined) cache[arg] = fn(arg);
      return cache[arg];
    };
  }

  var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
    var previous = 0;
    var character = 0;

    while (true) {
      previous = character;
      character = peek(); // &\f

      if (previous === 38 && character === 12) {
        points[index] = 1;
      }

      if (token(character)) {
        break;
      }

      next();
    }

    return slice(begin, position);
  };

  var toRules = function toRules(parsed, points) {
    // pretend we've started with a comma
    var index = -1;
    var character = 44;

    do {
      switch (token(character)) {
        case 0:
          // &\f
          if (character === 38 && peek() === 12) {
            // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
            // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
            // and when it should just concatenate the outer and inner selectors
            // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
            points[index] = 1;
          }

          parsed[index] += identifierWithPointTracking(position - 1, points, index);
          break;

        case 2:
          parsed[index] += delimit(character);
          break;

        case 4:
          // comma
          if (character === 44) {
            // colon
            parsed[++index] = peek() === 58 ? '&\f' : '';
            points[index] = parsed[index].length;
            break;
          }

        // fallthrough

        default:
          parsed[index] += from(character);
      }
    } while (character = next());

    return parsed;
  };

  var getRules = function getRules(value, points) {
    return dealloc(toRules(alloc(value), points));
  }; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


  var fixedElements = /* #__PURE__ */new WeakMap();
  var compat = function compat(element) {
    if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
    // negative .length indicates that this rule has been already prefixed
    element.length < 1) {
      return;
    }

    var value = element.value;
    var parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;

    while (parent.type !== 'rule') {
      parent = parent.parent;
      if (!parent) return;
    } // short-circuit for the simplest case


    if (element.props.length === 1 && value.charCodeAt(0) !== 58
    /* colon */
    && !fixedElements.get(parent)) {
      return;
    } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
    // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


    if (isImplicitRule) {
      return;
    }

    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;

    for (var i = 0, k = 0; i < rules.length; i++) {
      for (var j = 0; j < parentRules.length; j++, k++) {
        element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
      }
    }
  };
  var removeLabel = function removeLabel(element) {
    if (element.type === 'decl') {
      var value = element.value;

      if ( // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98) {
        // this ignores label
        element["return"] = '';
        element.value = '';
      }
    }
  };

  /* eslint-disable no-fallthrough */

  function prefix(value, length) {
    switch (hash(value, length)) {
      // color-adjust
      case 5103:
        return WEBKIT + 'print-' + value + value;
      // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return WEBKIT + value + value;
      // appearance, user-select, transform, hyphens, text-size-adjust

      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return WEBKIT + value + MOZ + value + MS + value + value;
      // flex, flex-direction

      case 6828:
      case 4268:
        return WEBKIT + value + MS + value + value;
      // order

      case 6165:
        return WEBKIT + value + MS + 'flex-' + value + value;
      // align-items

      case 5187:
        return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
      // align-self

      case 5443:
        return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value;
      // align-content

      case 4675:
        return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value;
      // flex-shrink

      case 5548:
        return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
      // flex-basis

      case 5292:
        return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
      // flex-grow

      case 6060:
        return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value;
      // transition

      case 4554:
        return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
      // cursor

      case 6187:
        return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
      // background, background-image

      case 5495:
      case 3959:
        return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
      // justify-content

      case 4968:
        return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value;
      // (margin|padding)-inline-(start|end)

      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
      // (min|max)?(width|height|inline-size|block-size)

      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        // stretch, max-content, min-content, fill-available
        if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            // -
            if (charat(value, length + 4) !== 45) break;
          // (f)ill-available, (f)it-content

          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
          // (s)tretch

          case 115:
            return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value;
        }
        break;
      // position: sticky

      case 4949:
        // (s)ticky?
        if (charat(value, length + 1) !== 115) break;
      // display: (flex|inline-flex)

      case 6444:
        switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
          // stic(k)y
          case 107:
            return replace(value, ':', ':' + WEBKIT) + value;
          // (inline-)?fl(e)x

          case 101:
            return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
        }

        break;
      // writing-mode

      case 5936:
        switch (charat(value, length + 11)) {
          // vertical-l(r)
          case 114:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
          // vertical-r(l)

          case 108:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
          // horizontal(-)tb

          case 45:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
        }

        return WEBKIT + value + MS + value + value;
    }

    return value;
  }

  var prefixer = function prefixer(element, index, children, callback) {
    if (element.length > -1) if (!element["return"]) switch (element.type) {
      case DECLARATION:
        element["return"] = prefix(element.value, element.length);
        break;

      case KEYFRAMES:
        return serialize([copy(element, {
          value: replace(element.value, '@', '@' + WEBKIT)
        })], callback);

      case RULESET:
        if (element.length) return combine(element.props, function (value) {
          switch (match(value, /(::plac\w+|:read-\w+)/)) {
            // :read-(only|write)
            case ':read-only':
            case ':read-write':
              return serialize([copy(element, {
                props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
              })], callback);
            // :placeholder

            case '::placeholder':
              return serialize([copy(element, {
                props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
              })], callback);
          }

          return '';
        });
    }
  };

  var defaultStylisPlugins = [prefixer];

  var createCache = function createCache(options) {
    var key = options.key;

    if (key === 'css') {
      var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
      // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
      // note this very very intentionally targets all style elements regardless of the key to ensure
      // that creating a cache works inside of render of a React component

      Array.prototype.forEach.call(ssrStyles, function (node) {
        // we want to only move elements which have a space in the data-emotion attribute value
        // because that indicates that it is an Emotion 11 server-side rendered style elements
        // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
        // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
        // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
        // will not result in the Emotion 10 styles being destroyed
        var dataEmotionAttribute = node.getAttribute('data-emotion');

        if (dataEmotionAttribute.indexOf(' ') === -1) {
          return;
        }

        document.head.appendChild(node);
        node.setAttribute('data-s', '');
      });
    }

    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

    var inserted = {};
    var container;
    var nodesToHydrate = [];

    {
      container = options.container || document.head;
      Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
        var attrib = node.getAttribute("data-emotion").split(' ');

        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }

        nodesToHydrate.push(node);
      });
    }

    var _insert;

    var omnipresentPlugins = [compat, removeLabel];

    {
      var currentSheet;
      var finalizingPlugins = [stringify, rulesheet(function (rule) {
        currentSheet.insert(rule);
      })];
      var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

      var stylis = function stylis(styles) {
        return serialize(compile(styles), serializer);
      };

      _insert = function insert(selector, serialized, sheet, shouldCache) {
        currentSheet = sheet;

        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

        if (shouldCache) {
          cache.inserted[serialized.name] = true;
        }
      };
    }

    var cache = {
      key: key,
      sheet: new StyleSheet({
        key: key,
        container: container,
        nonce: options.nonce,
        speedy: options.speedy,
        prepend: options.prepend,
        insertionPoint: options.insertionPoint
      }),
      nonce: options.nonce,
      inserted: inserted,
      registered: {},
      insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
  };

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var reactIs$1 = {exports: {}};

  var reactIs_development = {};

  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */



  {
    (function() {

  // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var hasSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
  var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
  var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
  var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
  var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
  var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
  var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
  // (unstable) APIs that have been removed. Can we remove the symbols?

  var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
  var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
  var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
  var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
  var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
  var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
  var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
  var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
  var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
  var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
  var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

  function isValidElementType(type) {
    return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
    type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
  }

  function typeOf(object) {
    if (typeof object === 'object' && object !== null) {
      var $$typeof = object.$$typeof;

      switch ($$typeof) {
        case REACT_ELEMENT_TYPE:
          var type = object.type;

          switch (type) {
            case REACT_ASYNC_MODE_TYPE:
            case REACT_CONCURRENT_MODE_TYPE:
            case REACT_FRAGMENT_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_SUSPENSE_TYPE:
              return type;

            default:
              var $$typeofType = type && type.$$typeof;

              switch ($$typeofType) {
                case REACT_CONTEXT_TYPE:
                case REACT_FORWARD_REF_TYPE:
                case REACT_LAZY_TYPE:
                case REACT_MEMO_TYPE:
                case REACT_PROVIDER_TYPE:
                  return $$typeofType;

                default:
                  return $$typeof;
              }

          }

        case REACT_PORTAL_TYPE:
          return $$typeof;
      }
    }

    return undefined;
  } // AsyncMode is deprecated along with isAsyncMode

  var AsyncMode = REACT_ASYNC_MODE_TYPE;
  var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  var ContextConsumer = REACT_CONTEXT_TYPE;
  var ContextProvider = REACT_PROVIDER_TYPE;
  var Element = REACT_ELEMENT_TYPE;
  var ForwardRef = REACT_FORWARD_REF_TYPE;
  var Fragment = REACT_FRAGMENT_TYPE;
  var Lazy = REACT_LAZY_TYPE;
  var Memo = REACT_MEMO_TYPE;
  var Portal = REACT_PORTAL_TYPE;
  var Profiler = REACT_PROFILER_TYPE;
  var StrictMode = REACT_STRICT_MODE_TYPE;
  var Suspense = REACT_SUSPENSE_TYPE;
  var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

  function isAsyncMode(object) {
    {
      if (!hasWarnedAboutDeprecatedIsAsyncMode) {
        hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

        console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
      }
    }

    return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
  }
  function isConcurrentMode(object) {
    return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
  }
  function isContextConsumer(object) {
    return typeOf(object) === REACT_CONTEXT_TYPE;
  }
  function isContextProvider(object) {
    return typeOf(object) === REACT_PROVIDER_TYPE;
  }
  function isElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
  function isForwardRef(object) {
    return typeOf(object) === REACT_FORWARD_REF_TYPE;
  }
  function isFragment(object) {
    return typeOf(object) === REACT_FRAGMENT_TYPE;
  }
  function isLazy(object) {
    return typeOf(object) === REACT_LAZY_TYPE;
  }
  function isMemo(object) {
    return typeOf(object) === REACT_MEMO_TYPE;
  }
  function isPortal(object) {
    return typeOf(object) === REACT_PORTAL_TYPE;
  }
  function isProfiler(object) {
    return typeOf(object) === REACT_PROFILER_TYPE;
  }
  function isStrictMode(object) {
    return typeOf(object) === REACT_STRICT_MODE_TYPE;
  }
  function isSuspense(object) {
    return typeOf(object) === REACT_SUSPENSE_TYPE;
  }

  reactIs_development.AsyncMode = AsyncMode;
  reactIs_development.ConcurrentMode = ConcurrentMode;
  reactIs_development.ContextConsumer = ContextConsumer;
  reactIs_development.ContextProvider = ContextProvider;
  reactIs_development.Element = Element;
  reactIs_development.ForwardRef = ForwardRef;
  reactIs_development.Fragment = Fragment;
  reactIs_development.Lazy = Lazy;
  reactIs_development.Memo = Memo;
  reactIs_development.Portal = Portal;
  reactIs_development.Profiler = Profiler;
  reactIs_development.StrictMode = StrictMode;
  reactIs_development.Suspense = Suspense;
  reactIs_development.isAsyncMode = isAsyncMode;
  reactIs_development.isConcurrentMode = isConcurrentMode;
  reactIs_development.isContextConsumer = isContextConsumer;
  reactIs_development.isContextProvider = isContextProvider;
  reactIs_development.isElement = isElement;
  reactIs_development.isForwardRef = isForwardRef;
  reactIs_development.isFragment = isFragment;
  reactIs_development.isLazy = isLazy;
  reactIs_development.isMemo = isMemo;
  reactIs_development.isPortal = isPortal;
  reactIs_development.isProfiler = isProfiler;
  reactIs_development.isStrictMode = isStrictMode;
  reactIs_development.isSuspense = isSuspense;
  reactIs_development.isValidElementType = isValidElementType;
  reactIs_development.typeOf = typeOf;
    })();
  }

  {
    reactIs$1.exports = reactIs_development;
  }

  var reactIsExports = reactIs$1.exports;

  var reactIs = reactIsExports;
  var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

  var isBrowser = true;

  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (registered[className] !== undefined) {
        registeredStyles.push(registered[className] + ";");
      } else if (className) {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var registerStyles = function registerStyles(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;

    if ( // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser === false ) && cache.registered[className] === undefined) {
      cache.registered[className] = serialized.styles;
    }
  };
  var insertStyles = function insertStyles(cache, serialized, isStringTag) {
    registerStyles(cache, serialized, isStringTag);
    var className = cache.key + "-" + serialized.name;

    if (cache.inserted[serialized.name] === undefined) {
      var current = serialized;

      do {
        cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

        current = current.next;
      } while (current !== undefined);
    }
  };

  /* eslint-disable */
  // Inspired by https://github.com/garycourt/murmurhash-js
  // Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
  function murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash

    var k,
        i = 0,
        len = str.length;

    for (; len >= 4; ++i, len -= 4) {
      k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
      k =
      /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
      k ^=
      /* k >>> r: */
      k >>> 24;
      h =
      /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Handle the last few bytes of the input array


    switch (len) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

      case 2:
        h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

      case 1:
        h ^= str.charCodeAt(i) & 0xff;
        h =
        /* Math.imul(h, m): */
        (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.


    h ^= h >>> 13;
    h =
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
  }

  var unitlessKeys = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };

  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

  var isCustomProperty = function isCustomProperty(property) {
    return property.charCodeAt(1) === 45;
  };

  var isProcessableValue = function isProcessableValue(value) {
    return value != null && typeof value !== 'boolean';
  };

  var processStyleName = /* #__PURE__ */memoize(function (styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
  });

  var processStyleValue = function processStyleValue(key, value) {
    switch (key) {
      case 'animation':
      case 'animationName':
        {
          if (typeof value === 'string') {
            return value.replace(animationRegex, function (match, p1, p2) {
              cursor = {
                name: p1,
                styles: p2,
                next: cursor
              };
              return p1;
            });
          }
        }
    }

    if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
      return value + 'px';
    }

    return value;
  };

  function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
      return '';
    }

    var componentSelector = interpolation;

    if (componentSelector.__emotion_styles !== undefined) {

      return componentSelector;
    }

    switch (typeof interpolation) {
      case 'boolean':
        {
          return '';
        }

      case 'object':
        {
          var keyframes = interpolation;

          if (keyframes.anim === 1) {
            cursor = {
              name: keyframes.name,
              styles: keyframes.styles,
              next: cursor
            };
            return keyframes.name;
          }

          var serializedStyles = interpolation;

          if (serializedStyles.styles !== undefined) {
            var next = serializedStyles.next;

            if (next !== undefined) {
              // not the most efficient thing ever but this is a pretty rare case
              // and there will be very few iterations of this generally
              while (next !== undefined) {
                cursor = {
                  name: next.name,
                  styles: next.styles,
                  next: cursor
                };
                next = next.next;
              }
            }

            var styles = serializedStyles.styles + ";";
            return styles;
          }

          return createStringFromObject(mergedProps, registered, interpolation);
        }

      case 'function':
        {
          if (mergedProps !== undefined) {
            var previousCursor = cursor;
            var result = interpolation(mergedProps);
            cursor = previousCursor;
            return handleInterpolation(mergedProps, registered, result);
          }

          break;
        }
    } // finalize string values (regular strings and functions interpolated into css calls)


    var asString = interpolation;

    {
      return asString;
    }
  }

  function createStringFromObject(mergedProps, registered, obj) {
    var string = '';

    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
      }
    } else {
      for (var key in obj) {
        var value = obj[key];

        if (typeof value !== 'object') {
          var asString = value;

          if (isProcessableValue(asString)) {
            string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
          }
        } else {

          if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value);

            switch (key) {
              case 'animation':
              case 'animationName':
                {
                  string += processStyleName(key) + ":" + interpolated + ";";
                  break;
                }

              default:
                {

                  string += key + "{" + interpolated + "}";
                }
            }
          }
        }
      }
    }

    return string;
  }

  var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g; // this is the cursor for keyframes
  // keyframes are stored on the SerializedStyles object as a linked list

  var cursor;
  function serializeStyles(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
      return args[0];
    }

    var stringMode = true;
    var styles = '';
    cursor = undefined;
    var strings = args[0];

    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation(mergedProps, registered, strings);
    } else {
      var asTemplateStringsArr = strings;

      styles += asTemplateStringsArr[0];
    } // we start at 1 since we've already handled the first arg


    for (var i = 1; i < args.length; i++) {
      styles += handleInterpolation(mergedProps, registered, args[i]);

      if (stringMode) {
        var templateStringsArr = strings;

        styles += templateStringsArr[i];
      }
    } // using a global regex with .exec is stateful so lastIndex has to be reset each time


    labelPattern.lastIndex = 0;
    var identifierName = '';
    var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

    while ((match = labelPattern.exec(styles)) !== null) {
      identifierName += '-' + match[1];
    }

    var name = murmur2(styles) + identifierName;

    return {
      name: name,
      styles: styles,
      next: cursor
    };
  }

  var syncFallback = function syncFallback(create) {
    return create();
  };

  var useInsertionEffect = React__namespace['useInsertion' + 'Effect'] ? React__namespace['useInsertion' + 'Effect'] : false;
  var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;

  var EmotionCacheContext = /* #__PURE__ */React__namespace.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
    key: 'css'
  }) : null);

  EmotionCacheContext.Provider;

  var withEmotionCache = function withEmotionCache(func) {
    return /*#__PURE__*/React.forwardRef(function (props, ref) {
      // the cache will never be null in the browser
      var cache = React.useContext(EmotionCacheContext);
      return func(props, cache, ref);
    });
  };

  var ThemeContext = /* #__PURE__ */React__namespace.createContext({});

  var hasOwn = {}.hasOwnProperty;

  var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
  var createEmotionProps = function createEmotionProps(type, props) {

    var newProps = {};

    for (var _key in props) {
      if (hasOwn.call(props, _key)) {
        newProps[_key] = props[_key];
      }
    }

    newProps[typePropName] = type; // Runtime labeling is an opt-in feature because:

    return newProps;
  };

  var Insertion = function Insertion(_ref) {
    var cache = _ref.cache,
        serialized = _ref.serialized,
        isStringTag = _ref.isStringTag;
    registerStyles(cache, serialized, isStringTag);
    useInsertionEffectAlwaysWithSyncFallback(function () {
      return insertStyles(cache, serialized, isStringTag);
    });

    return null;
  };

  var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
    var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
    // not passing the registered cache to serializeStyles because it would
    // make certain babel optimisations not possible

    if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
      cssProp = cache.registered[cssProp];
    }

    var WrappedComponent = props[typePropName];
    var registeredStyles = [cssProp];
    var className = '';

    if (typeof props.className === 'string') {
      className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
    } else if (props.className != null) {
      className = props.className + " ";
    }

    var serialized = serializeStyles(registeredStyles, undefined, React__namespace.useContext(ThemeContext));

    className += cache.key + "-" + serialized.name;
    var newProps = {};

    for (var _key2 in props) {
      if (hasOwn.call(props, _key2) && _key2 !== 'css' && _key2 !== typePropName && (true )) {
        newProps[_key2] = props[_key2];
      }
    }

    newProps.className = className;

    if (ref) {
      newProps.ref = ref;
    }

    return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(Insertion, {
      cache: cache,
      serialized: serialized,
      isStringTag: typeof WrappedComponent === 'string'
    }), /*#__PURE__*/React__namespace.createElement(WrappedComponent, newProps));
  });

  var Emotion$1 = Emotion;

  var jsx = function jsx(type, props) {
    // eslint-disable-next-line prefer-rest-params
    var args = arguments;

    if (props == null || !hasOwn.call(props, 'css')) {
      return React__namespace.createElement.apply(undefined, args);
    }

    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = Emotion$1;
    createElementArgArray[1] = createEmotionProps(type, props);

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return React__namespace.createElement.apply(null, createElementArgArray);
  };

  (function (_jsx) {
    var JSX;

    (function (_JSX) {})(JSX || (JSX = _jsx.JSX || (_jsx.JSX = {})));
  })(jsx);

  function css$2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return serializeStyles(args);
  }

  function keyframes() {
    var insertable = css$2.apply(undefined, arguments);
    var name = "animation-" + insertable.name;
    return {
      name: name,
      styles: "@keyframes " + name + "{" + insertable.styles + "}",
      anim: 1,
      toString: function toString() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  }

  function _taggedTemplateLiteral(e, t) {
    return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
      raw: {
        value: Object.freeze(t)
      }
    }));
  }

  /**
   * Custom positioning reference element.
   * @see https://floating-ui.com/docs/virtual-elements
   */

  const min = Math.min;
  const max = Math.max;
  const round = Math.round;
  const floor = Math.floor;
  const createCoords = v => ({
    x: v,
    y: v
  });
  function rectToClientRect(rect) {
    const {
      x,
      y,
      width,
      height
    } = rect;
    return {
      width,
      height,
      top: y,
      left: x,
      right: x + width,
      bottom: y + height,
      x,
      y
    };
  }

  function hasWindow() {
    return typeof window !== 'undefined';
  }
  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? undefined : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? undefined : _ref.documentElement;
  }
  function isNode(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === 'undefined') {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle$1(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
  }
  function isWebKit() {
    if (typeof CSS === 'undefined' || !CSS.supports) return false;
    return CSS.supports('-webkit-backdrop-filter', 'none');
  }
  function isLastTraversableNode(node) {
    return ['html', 'body', '#document'].includes(getNodeName(node));
  }
  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getParentNode(node) {
    if (getNodeName(node) === 'html') {
      return node;
    }
    const result =
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot ||
    // DOM Element detected.
    node.parentNode ||
    // ShadowRoot detected.
    isShadowRoot(node) && node.host ||
    // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === undefined) {
      list = [];
    }
    if (traverseIframes === undefined) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? undefined : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      const frameElement = getFrameElement(win);
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
  function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
  }

  function getCssDimensions(element) {
    const css = getComputedStyle$1(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }
  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }
  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $
    } = getCssDimensions(domElement);
    let x = ($ ? round(rect.width) : rect.width) / width;
    let y = ($ ? round(rect.height) : rect.height) / height;

    // 0, NaN, or Infinity should always fallback to 1.

    if (!x || !Number.isFinite(x)) {
      x = 1;
    }
    if (!y || !Number.isFinite(y)) {
      y = 1;
    }
    return {
      x,
      y
    };
  }
  const noOffsets = /*#__PURE__*/createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    {
      return false;
    }
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === undefined) {
      includeScale = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets() ? getVisualOffsets(domElement) : createCoords(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent;
      let currentWin = win;
      let currentIFrame = getFrameElement(currentWin);
      while (currentIFrame && offsetParent && offsetWin !== currentWin) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle$1(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x *= iframeScale.x;
        y *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x += left;
        y += top;
        currentWin = getWindow(currentIFrame);
        currentIFrame = getFrameElement(currentWin);
      }
    }
    return rectToClientRect({
      width,
      height,
      x,
      y
    });
  }
  function rectsAreEqual(a, b) {
    return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
  }

  // https://samthor.au/2021/observing-dom/
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
      var _io;
      clearTimeout(timeoutId);
      (_io = io) == null || _io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === undefined) {
        skip = false;
      }
      if (threshold === undefined) {
        threshold = 1;
      }
      cleanup();
      const elementRectForRootMargin = element.getBoundingClientRect();
      const {
        left,
        top,
        width,
        height
      } = elementRectForRootMargin;
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            // If the reference is clipped, the ratio is 0. Throttle the refresh
            // to prevent an infinite loop of updates.
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 1000);
          } else {
            refresh(false, ratio);
          }
        }
        if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
          // It's possible that even though the ratio is reported as 1, the
          // element is not actually fully within the IntersectionObserver's root
          // area anymore. This can happen under performance constraints. This may
          // be a bug in the browser's IntersectionObserver implementation. To
          // work around this, we compare the element's bounding rect now with
          // what it was at the time we created the IntersectionObserver. If they
          // are not equal then the element moved, so we refresh.
          refresh();
        }
        isFirstUpdate = false;
      }

      // Older browsers don't support a `document` as the root and will throw an
      // error.
      try {
        io = new IntersectionObserver(handleObserve, {
          ...options,
          // Handle <iframe>s
          root: root.ownerDocument
        });
      } catch (e) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }

  /**
   * Automatically updates the position of the floating element when necessary.
   * Should only be called when the floating element is mounted on the DOM or
   * visible on the screen.
   * @returns cleanup function that should be invoked when the floating element is
   * removed from the DOM or hidden from the screen.
   * @see https://floating-ui.com/docs/autoUpdate
   */
  function autoUpdate(reference, floating, update, options) {
    if (options === undefined) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === 'function',
      layoutShift = typeof IntersectionObserver === 'function',
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.addEventListener('scroll', update, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener('resize', update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver(_ref => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
          // Prevent update loops when using the `size` middleware.
          // https://github.com/floating-ui/floating-ui/issues/1740
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            var _resizeObserver;
            (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
          });
        }
        update();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
        update();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return () => {
      var _resizeObserver2;
      ancestors.forEach(ancestor => {
        ancestorScroll && ancestor.removeEventListener('scroll', update);
        ancestorResize && ancestor.removeEventListener('resize', update);
      });
      cleanupIo == null || cleanupIo();
      (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }

  var index = React.useLayoutEffect ;

  var _excluded$4 = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
  // ==============================
  // NO OP
  // ==============================

  var noop = function noop() {};

  // ==============================
  // Class Name Prefixer
  // ==============================

  /**
   String representation of component state for styling with class names.

   Expects an array of strings OR a string/object pair:
   - className(['comp', 'comp-arg', 'comp-arg-2'])
     @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
   - className('comp', { some: true, state: false })
     @returns 'react-select__comp react-select__comp--some'
  */
  function applyPrefixToName(prefix, name) {
    if (!name) {
      return prefix;
    } else if (name[0] === '-') {
      return prefix + name;
    } else {
      return prefix + '__' + name;
    }
  }
  function classNames(prefix, state) {
    for (var _len = arguments.length, classNameList = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      classNameList[_key - 2] = arguments[_key];
    }
    var arr = [].concat(classNameList);
    if (state && prefix) {
      for (var key in state) {
        if (state.hasOwnProperty(key) && state[key]) {
          arr.push("".concat(applyPrefixToName(prefix, key)));
        }
      }
    }
    return arr.filter(function (i) {
      return i;
    }).map(function (i) {
      return String(i).trim();
    }).join(' ');
  }
  // ==============================
  // Clean Value
  // ==============================

  var cleanValue = function cleanValue(value) {
    if (isArray(value)) return value.filter(Boolean);
    if (_typeof(value) === 'object' && value !== null) return [value];
    return [];
  };

  // ==============================
  // Clean Common Props
  // ==============================

  var cleanCommonProps = function cleanCommonProps(props) {
    //className
    props.className;
      props.clearValue;
      props.cx;
      props.getStyles;
      props.getClassNames;
      props.getValue;
      props.hasValue;
      props.isMulti;
      props.isRtl;
      props.options;
      props.selectOption;
      props.selectProps;
      props.setValue;
      props.theme;
      var innerProps = _objectWithoutProperties(props, _excluded$4);
    return _objectSpread2({}, innerProps);
  };

  // ==============================
  // Get Style Props
  // ==============================

  var getStyleProps = function getStyleProps(props, name, classNamesState) {
    var cx = props.cx,
      getStyles = props.getStyles,
      getClassNames = props.getClassNames,
      className = props.className;
    return {
      css: getStyles(name, props),
      className: cx(classNamesState !== null && classNamesState !== undefined ? classNamesState : {}, getClassNames(name, props), className)
    };
  };

  // ==============================
  // Scroll Helpers
  // ==============================

  function isDocumentElement(el) {
    return [document.documentElement, document.body, window].indexOf(el) > -1;
  }

  // Normalized Scroll Top
  // ------------------------------

  function normalizedHeight(el) {
    if (isDocumentElement(el)) {
      return window.innerHeight;
    }
    return el.clientHeight;
  }

  // Normalized scrollTo & scrollTop
  // ------------------------------

  function getScrollTop(el) {
    if (isDocumentElement(el)) {
      return window.pageYOffset;
    }
    return el.scrollTop;
  }
  function scrollTo(el, top) {
    // with a scroll distance, we perform scroll on the element
    if (isDocumentElement(el)) {
      window.scrollTo(0, top);
      return;
    }
    el.scrollTop = top;
  }

  // Get Scroll Parent
  // ------------------------------

  function getScrollParent(element) {
    var style = getComputedStyle(element);
    var excludeStaticParent = style.position === 'absolute';
    var overflowRx = /(auto|scroll)/;
    if (style.position === 'fixed') return document.documentElement;
    for (var parent = element; parent = parent.parentElement;) {
      style = getComputedStyle(parent);
      if (excludeStaticParent && style.position === 'static') {
        continue;
      }
      if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
        return parent;
      }
    }
    return document.documentElement;
  }

  // Animated Scroll To
  // ------------------------------

  /**
    @param t: time (elapsed)
    @param b: initial value
    @param c: amount of change
    @param d: duration
  */
  function easeOutCubic(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }
  function animatedScrollTo(element, to) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
    var start = getScrollTop(element);
    var change = to - start;
    var increment = 10;
    var currentTime = 0;
    function animateScroll() {
      currentTime += increment;
      var val = easeOutCubic(currentTime, start, change, duration);
      scrollTo(element, val);
      if (currentTime < duration) {
        window.requestAnimationFrame(animateScroll);
      } else {
        callback(element);
      }
    }
    animateScroll();
  }

  // Scroll Into View
  // ------------------------------

  function scrollIntoView(menuEl, focusedEl) {
    var menuRect = menuEl.getBoundingClientRect();
    var focusedRect = focusedEl.getBoundingClientRect();
    var overScroll = focusedEl.offsetHeight / 3;
    if (focusedRect.bottom + overScroll > menuRect.bottom) {
      scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
    } else if (focusedRect.top - overScroll < menuRect.top) {
      scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
    }
  }

  // ==============================
  // Get bounding client object
  // ==============================

  // cannot get keys using array notation with DOMRect
  function getBoundingClientObj(element) {
    var rect = element.getBoundingClientRect();
    return {
      bottom: rect.bottom,
      height: rect.height,
      left: rect.left,
      right: rect.right,
      top: rect.top,
      width: rect.width
    };
  }

  // ==============================
  // Touch Capability Detector
  // ==============================

  function isTouchCapable() {
    try {
      document.createEvent('TouchEvent');
      return true;
    } catch (e) {
      return false;
    }
  }

  // ==============================
  // Mobile Device Detector
  // ==============================

  function isMobileDevice() {
    try {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    } catch (e) {
      return false;
    }
  }

  // ==============================
  // Passive Event Detector
  // ==============================

  // https://github.com/rafgraph/detect-it/blob/main/src/index.ts#L19-L36
  var passiveOptionAccessed = false;
  var options = {
    get passive() {
      return passiveOptionAccessed = true;
    }
  };
  // check for SSR
  var w = typeof window !== 'undefined' ? window : {};
  if (w.addEventListener && w.removeEventListener) {
    w.addEventListener('p', noop, options);
    w.removeEventListener('p', noop, false);
  }
  var supportsPassiveEvents = passiveOptionAccessed;
  function notNullish(item) {
    return item != null;
  }
  function isArray(arg) {
    return Array.isArray(arg);
  }
  function valueTernary(isMulti, multiValue, singleValue) {
    return isMulti ? multiValue : singleValue;
  }
  function singleValueAsValue(singleValue) {
    return singleValue;
  }
  function multiValueAsValue(multiValue) {
    return multiValue;
  }
  var removeProps = function removeProps(propsObj) {
    for (var _len2 = arguments.length, properties = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      properties[_key2 - 1] = arguments[_key2];
    }
    var propsMap = Object.entries(propsObj).filter(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];
      return !properties.includes(key);
    });
    return propsMap.reduce(function (newProps, _ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        val = _ref4[1];
      newProps[key] = val;
      return newProps;
    }, {});
  };

  var _excluded$3 = ["children", "innerProps"],
    _excluded2$1 = ["children", "innerProps"];
  function getMenuPlacement(_ref) {
    var preferredMaxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      preferredPlacement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      controlHeight = _ref.controlHeight;
    var scrollParent = getScrollParent(menuEl);
    var defaultState = {
      placement: 'bottom',
      maxHeight: preferredMaxHeight
    };

    // something went wrong, return default state
    if (!menuEl || !menuEl.offsetParent) return defaultState;

    // we can't trust `scrollParent.scrollHeight` --> it may increase when
    // the menu is rendered
    var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;
    var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;
    var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;
    var viewHeight = isFixedPosition ? window.innerHeight : normalizedHeight(scrollParent);
    var scrollTop = getScrollTop(scrollParent);
    var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
    var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
    var viewSpaceAbove = containerTop - marginTop;
    var viewSpaceBelow = viewHeight - menuTop;
    var scrollSpaceAbove = viewSpaceAbove + scrollTop;
    var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
    var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
    var scrollUp = scrollTop + menuTop - marginTop;
    var scrollDuration = 160;
    switch (preferredPlacement) {
      case 'auto':
      case 'bottom':
        // 1: the menu will fit, do nothing
        if (viewSpaceBelow >= menuHeight) {
          return {
            placement: 'bottom',
            maxHeight: preferredMaxHeight
          };
        }

        // 2: the menu will fit, if scrolled
        if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
          if (shouldScroll) {
            animatedScrollTo(scrollParent, scrollDown, scrollDuration);
          }
          return {
            placement: 'bottom',
            maxHeight: preferredMaxHeight
          };
        }

        // 3: the menu will fit, if constrained
        if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
          if (shouldScroll) {
            animatedScrollTo(scrollParent, scrollDown, scrollDuration);
          }

          // we want to provide as much of the menu as possible to the user,
          // so give them whatever is available below rather than the minHeight.
          var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
          return {
            placement: 'bottom',
            maxHeight: constrainedHeight
          };
        }

        // 4. Forked beviour when there isn't enough space below

        // AUTO: flip the menu, render above
        if (preferredPlacement === 'auto' || isFixedPosition) {
          // may need to be constrained after flipping
          var _constrainedHeight = preferredMaxHeight;
          var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
          if (spaceAbove >= minHeight) {
            _constrainedHeight = Math.min(spaceAbove - marginBottom - controlHeight, preferredMaxHeight);
          }
          return {
            placement: 'top',
            maxHeight: _constrainedHeight
          };
        }

        // BOTTOM: allow browser to increase scrollable area and immediately set scroll
        if (preferredPlacement === 'bottom') {
          if (shouldScroll) {
            scrollTo(scrollParent, scrollDown);
          }
          return {
            placement: 'bottom',
            maxHeight: preferredMaxHeight
          };
        }
        break;
      case 'top':
        // 1: the menu will fit, do nothing
        if (viewSpaceAbove >= menuHeight) {
          return {
            placement: 'top',
            maxHeight: preferredMaxHeight
          };
        }

        // 2: the menu will fit, if scrolled
        if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
          if (shouldScroll) {
            animatedScrollTo(scrollParent, scrollUp, scrollDuration);
          }
          return {
            placement: 'top',
            maxHeight: preferredMaxHeight
          };
        }

        // 3: the menu will fit, if constrained
        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          var _constrainedHeight2 = preferredMaxHeight;

          // we want to provide as much of the menu as possible to the user,
          // so give them whatever is available below rather than the minHeight.
          if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
            _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
          }
          if (shouldScroll) {
            animatedScrollTo(scrollParent, scrollUp, scrollDuration);
          }
          return {
            placement: 'top',
            maxHeight: _constrainedHeight2
          };
        }

        // 4. not enough space, the browser WILL NOT increase scrollable area when
        // absolutely positioned element rendered above the viewport (only below).
        // Flip the menu, render below
        return {
          placement: 'bottom',
          maxHeight: preferredMaxHeight
        };
      default:
        throw new Error("Invalid placement provided \"".concat(preferredPlacement, "\"."));
    }
    return defaultState;
  }

  // Menu Component
  // ------------------------------

  function alignToControl(placement) {
    var placementToCSSProp = {
      bottom: 'top',
      top: 'bottom'
    };
    return placement ? placementToCSSProp[placement] : 'bottom';
  }
  var coercePlacement = function coercePlacement(p) {
    return p === 'auto' ? 'bottom' : p;
  };
  var menuCSS = function menuCSS(_ref2, unstyled) {
    var _objectSpread2$1;
    var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
    return _objectSpread2((_objectSpread2$1 = {
      label: 'menu'
    }, _defineProperty(_objectSpread2$1, alignToControl(placement), '100%'), _defineProperty(_objectSpread2$1, "position", 'absolute'), _defineProperty(_objectSpread2$1, "width", '100%'), _defineProperty(_objectSpread2$1, "zIndex", 1), _objectSpread2$1), unstyled ? {} : {
      backgroundColor: colors.neutral0,
      borderRadius: borderRadius,
      boxShadow: '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)',
      marginBottom: spacing.menuGutter,
      marginTop: spacing.menuGutter
    });
  };
  var PortalPlacementContext = /*#__PURE__*/React.createContext(null);

  // NOTE: internal only
  var MenuPlacer = function MenuPlacer(props) {
    var children = props.children,
      minMenuHeight = props.minMenuHeight,
      maxMenuHeight = props.maxMenuHeight,
      menuPlacement = props.menuPlacement,
      menuPosition = props.menuPosition,
      menuShouldScrollIntoView = props.menuShouldScrollIntoView,
      theme = props.theme;
    var _ref3 = React.useContext(PortalPlacementContext) || {},
      setPortalPlacement = _ref3.setPortalPlacement;
    var ref = React.useRef(null);
    var _useState = React.useState(maxMenuHeight),
      _useState2 = _slicedToArray(_useState, 2),
      maxHeight = _useState2[0],
      setMaxHeight = _useState2[1];
    var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      placement = _useState4[0],
      setPlacement = _useState4[1];
    var controlHeight = theme.spacing.controlHeight;
    index(function () {
      var menuEl = ref.current;
      if (!menuEl) return;

      // DO NOT scroll if position is fixed
      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: menuEl,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        controlHeight: controlHeight
      });
      setMaxHeight(state.maxHeight);
      setPlacement(state.placement);
      setPortalPlacement === null || setPortalPlacement === undefined ? undefined : setPortalPlacement(state.placement);
    }, [maxMenuHeight, menuPlacement, menuPosition, menuShouldScrollIntoView, minMenuHeight, setPortalPlacement, controlHeight]);
    return children({
      ref: ref,
      placerProps: _objectSpread2(_objectSpread2({}, props), {}, {
        placement: placement || coercePlacement(menuPlacement),
        maxHeight: maxHeight
      })
    });
  };
  var Menu = function Menu(props) {
    var children = props.children,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'menu', {
      menu: true
    }), {
      ref: innerRef
    }, innerProps), children);
  };
  var Menu$1 = Menu;

  // ==============================
  // Menu List
  // ==============================

  var menuListCSS = function menuListCSS(_ref4, unstyled) {
    var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
    return _objectSpread2({
      maxHeight: maxHeight,
      overflowY: 'auto',
      position: 'relative',
      // required for offset[Height, Top] > keyboard scroll
      WebkitOverflowScrolling: 'touch'
    }, unstyled ? {} : {
      paddingBottom: baseUnit,
      paddingTop: baseUnit
    });
  };
  var MenuList = function MenuList(props) {
    var children = props.children,
      innerProps = props.innerProps,
      innerRef = props.innerRef,
      isMulti = props.isMulti;
    return jsx("div", _extends({}, getStyleProps(props, 'menuList', {
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }), {
      ref: innerRef
    }, innerProps), children);
  };

  // ==============================
  // Menu Notices
  // ==============================

  var noticeCSS = function noticeCSS(_ref5, unstyled) {
    var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
    return _objectSpread2({
      textAlign: 'center'
    }, unstyled ? {} : {
      color: colors.neutral40,
      padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px")
    });
  };
  var noOptionsMessageCSS = noticeCSS;
  var loadingMessageCSS = noticeCSS;
  var NoOptionsMessage = function NoOptionsMessage(_ref6) {
    var _ref6$children = _ref6.children,
      children = _ref6$children === undefined ? 'No options' : _ref6$children,
      innerProps = _ref6.innerProps,
      restProps = _objectWithoutProperties(_ref6, _excluded$3);
    return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
      children: children,
      innerProps: innerProps
    }), 'noOptionsMessage', {
      'menu-notice': true,
      'menu-notice--no-options': true
    }), innerProps), children);
  };
  var LoadingMessage = function LoadingMessage(_ref7) {
    var _ref7$children = _ref7.children,
      children = _ref7$children === undefined ? 'Loading...' : _ref7$children,
      innerProps = _ref7.innerProps,
      restProps = _objectWithoutProperties(_ref7, _excluded2$1);
    return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
      children: children,
      innerProps: innerProps
    }), 'loadingMessage', {
      'menu-notice': true,
      'menu-notice--loading': true
    }), innerProps), children);
  };

  // ==============================
  // Menu Portal
  // ==============================

  var menuPortalCSS = function menuPortalCSS(_ref8) {
    var rect = _ref8.rect,
      offset = _ref8.offset,
      position = _ref8.position;
    return {
      left: rect.left,
      position: position,
      top: offset,
      width: rect.width,
      zIndex: 1
    };
  };
  var MenuPortal = function MenuPortal(props) {
    var appendTo = props.appendTo,
      children = props.children,
      controlElement = props.controlElement,
      innerProps = props.innerProps,
      menuPlacement = props.menuPlacement,
      menuPosition = props.menuPosition;
    var menuPortalRef = React.useRef(null);
    var cleanupRef = React.useRef(null);
    var _useState5 = React.useState(coercePlacement(menuPlacement)),
      _useState6 = _slicedToArray(_useState5, 2),
      placement = _useState6[0],
      setPortalPlacement = _useState6[1];
    var portalPlacementContext = React.useMemo(function () {
      return {
        setPortalPlacement: setPortalPlacement
      };
    }, []);
    var _useState7 = React.useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      computedPosition = _useState8[0],
      setComputedPosition = _useState8[1];
    var updateComputedPosition = React.useCallback(function () {
      if (!controlElement) return;
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = menuPosition === 'fixed' ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      if (offset !== (computedPosition === null || computedPosition === undefined ? undefined : computedPosition.offset) || rect.left !== (computedPosition === null || computedPosition === undefined ? undefined : computedPosition.rect.left) || rect.width !== (computedPosition === null || computedPosition === undefined ? undefined : computedPosition.rect.width)) {
        setComputedPosition({
          offset: offset,
          rect: rect
        });
      }
    }, [controlElement, menuPosition, placement, computedPosition === null || computedPosition === undefined ? undefined : computedPosition.offset, computedPosition === null || computedPosition === undefined ? undefined : computedPosition.rect.left, computedPosition === null || computedPosition === undefined ? undefined : computedPosition.rect.width]);
    index(function () {
      updateComputedPosition();
    }, [updateComputedPosition]);
    var runAutoUpdate = React.useCallback(function () {
      if (typeof cleanupRef.current === 'function') {
        cleanupRef.current();
        cleanupRef.current = null;
      }
      if (controlElement && menuPortalRef.current) {
        cleanupRef.current = autoUpdate(controlElement, menuPortalRef.current, updateComputedPosition, {
          elementResize: 'ResizeObserver' in window
        });
      }
    }, [controlElement, updateComputedPosition]);
    index(function () {
      runAutoUpdate();
    }, [runAutoUpdate]);
    var setMenuPortalElement = React.useCallback(function (menuPortalElement) {
      menuPortalRef.current = menuPortalElement;
      runAutoUpdate();
    }, [runAutoUpdate]);

    // bail early if required elements aren't present
    if (!appendTo && menuPosition !== 'fixed' || !computedPosition) return null;

    // same wrapper element whether fixed or portalled
    var menuWrapper = jsx("div", _extends({
      ref: setMenuPortalElement
    }, getStyleProps(_objectSpread2(_objectSpread2({}, props), {}, {
      offset: computedPosition.offset,
      position: menuPosition,
      rect: computedPosition.rect
    }), 'menuPortal', {
      'menu-portal': true
    }), innerProps), children);
    return jsx(PortalPlacementContext.Provider, {
      value: portalPlacementContext
    }, appendTo ? /*#__PURE__*/reactDom.createPortal(menuWrapper, appendTo) : menuWrapper);
  };

  // ==============================
  // Root Container
  // ==============================

  var containerCSS = function containerCSS(_ref) {
    var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
    return {
      label: 'container',
      direction: isRtl ? 'rtl' : undefined,
      pointerEvents: isDisabled ? 'none' : undefined,
      // cancel mouse events when disabled
      position: 'relative'
    };
  };
  var SelectContainer = function SelectContainer(props) {
    var children = props.children,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
    return jsx("div", _extends({}, getStyleProps(props, 'container', {
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }), innerProps), children);
  };

  // ==============================
  // Value Container
  // ==============================

  var valueContainerCSS = function valueContainerCSS(_ref2, unstyled) {
    var spacing = _ref2.theme.spacing,
      isMulti = _ref2.isMulti,
      hasValue = _ref2.hasValue,
      controlShouldRenderValue = _ref2.selectProps.controlShouldRenderValue;
    return _objectSpread2({
      alignItems: 'center',
      display: isMulti && hasValue && controlShouldRenderValue ? 'flex' : 'grid',
      flex: 1,
      flexWrap: 'wrap',
      WebkitOverflowScrolling: 'touch',
      position: 'relative',
      overflow: 'hidden'
    }, unstyled ? {} : {
      padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px")
    });
  };
  var ValueContainer = function ValueContainer(props) {
    var children = props.children,
      innerProps = props.innerProps,
      isMulti = props.isMulti,
      hasValue = props.hasValue;
    return jsx("div", _extends({}, getStyleProps(props, 'valueContainer', {
      'value-container': true,
      'value-container--is-multi': isMulti,
      'value-container--has-value': hasValue
    }), innerProps), children);
  };

  // ==============================
  // Indicator Container
  // ==============================

  var indicatorsContainerCSS = function indicatorsContainerCSS() {
    return {
      alignItems: 'center',
      alignSelf: 'stretch',
      display: 'flex',
      flexShrink: 0
    };
  };
  var IndicatorsContainer = function IndicatorsContainer(props) {
    var children = props.children,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'indicatorsContainer', {
      indicators: true
    }), innerProps), children);
  };

  var _templateObject;
  var _excluded$2 = ["size"],
    _excluded2 = ["innerProps", "isRtl", "size"];
  function _EMOTION_STRINGIFIED_CSS_ERROR__$3() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

  // ==============================
  // Dropdown & Clear Icons
  // ==============================
  var _ref2$2 = {
    name: "tj5bde-Svg",
    styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__$3
  };
  var Svg = function Svg(_ref) {
    var size = _ref.size,
      props = _objectWithoutProperties(_ref, _excluded$2);
    return jsx("svg", _extends({
      height: size,
      width: size,
      viewBox: "0 0 20 20",
      "aria-hidden": "true",
      focusable: "false",
      css: _ref2$2
    }, props));
  };
  var CrossIcon = function CrossIcon(props) {
    return jsx(Svg, _extends({
      size: 20
    }, props), jsx("path", {
      d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
    }));
  };
  var DownChevron = function DownChevron(props) {
    return jsx(Svg, _extends({
      size: 20
    }, props), jsx("path", {
      d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
    }));
  };

  // ==============================
  // Dropdown & Clear Buttons
  // ==============================

  var baseCSS = function baseCSS(_ref3, unstyled) {
    var isFocused = _ref3.isFocused,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
    return _objectSpread2({
      label: 'indicatorContainer',
      display: 'flex',
      transition: 'color 150ms'
    }, unstyled ? {} : {
      color: isFocused ? colors.neutral60 : colors.neutral20,
      padding: baseUnit * 2,
      ':hover': {
        color: isFocused ? colors.neutral80 : colors.neutral40
      }
    });
  };
  var dropdownIndicatorCSS = baseCSS;
  var DropdownIndicator = function DropdownIndicator(props) {
    var children = props.children,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'dropdownIndicator', {
      indicator: true,
      'dropdown-indicator': true
    }), innerProps), children || jsx(DownChevron, null));
  };
  var clearIndicatorCSS = baseCSS;
  var ClearIndicator = function ClearIndicator(props) {
    var children = props.children,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'clearIndicator', {
      indicator: true,
      'clear-indicator': true
    }), innerProps), children || jsx(CrossIcon, null));
  };

  // ==============================
  // Separator
  // ==============================

  var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4, unstyled) {
    var isDisabled = _ref4.isDisabled,
      _ref4$theme = _ref4.theme,
      baseUnit = _ref4$theme.spacing.baseUnit,
      colors = _ref4$theme.colors;
    return _objectSpread2({
      label: 'indicatorSeparator',
      alignSelf: 'stretch',
      width: 1
    }, unstyled ? {} : {
      backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
      marginBottom: baseUnit * 2,
      marginTop: baseUnit * 2
    });
  };
  var IndicatorSeparator = function IndicatorSeparator(props) {
    var innerProps = props.innerProps;
    return jsx("span", _extends({}, innerProps, getStyleProps(props, 'indicatorSeparator', {
      'indicator-separator': true
    })));
  };

  // ==============================
  // Loading
  // ==============================

  var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
  var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5, unstyled) {
    var isFocused = _ref5.isFocused,
      size = _ref5.size,
      _ref5$theme = _ref5.theme,
      colors = _ref5$theme.colors,
      baseUnit = _ref5$theme.spacing.baseUnit;
    return _objectSpread2({
      label: 'loadingIndicator',
      display: 'flex',
      transition: 'color 150ms',
      alignSelf: 'center',
      fontSize: size,
      lineHeight: 1,
      marginRight: size,
      textAlign: 'center',
      verticalAlign: 'middle'
    }, unstyled ? {} : {
      color: isFocused ? colors.neutral60 : colors.neutral20,
      padding: baseUnit * 2
    });
  };
  var LoadingDot = function LoadingDot(_ref6) {
    var delay = _ref6.delay,
      offset = _ref6.offset;
    return jsx("span", {
      css: /*#__PURE__*/css$2({
        animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
        backgroundColor: 'currentColor',
        borderRadius: '1em',
        display: 'inline-block',
        marginLeft: offset ? '1em' : undefined,
        height: '1em',
        verticalAlign: 'top',
        width: '1em'
      }, ";label:LoadingDot;", "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */")
    });
  };
  var LoadingIndicator = function LoadingIndicator(_ref7) {
    var innerProps = _ref7.innerProps,
      isRtl = _ref7.isRtl,
      _ref7$size = _ref7.size,
      size = _ref7$size === undefined ? 4 : _ref7$size,
      restProps = _objectWithoutProperties(_ref7, _excluded2);
    return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
      innerProps: innerProps,
      isRtl: isRtl,
      size: size
    }), 'loadingIndicator', {
      indicator: true,
      'loading-indicator': true
    }), innerProps), jsx(LoadingDot, {
      delay: 0,
      offset: isRtl
    }), jsx(LoadingDot, {
      delay: 160,
      offset: true
    }), jsx(LoadingDot, {
      delay: 320,
      offset: !isRtl
    }));
  };

  var css$1 = function css(_ref, unstyled) {
    var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
    return _objectSpread2({
      label: 'control',
      alignItems: 'center',
      cursor: 'default',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      minHeight: spacing.controlHeight,
      outline: '0 !important',
      position: 'relative',
      transition: 'all 100ms'
    }, unstyled ? {} : {
      backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
      borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
      borderRadius: borderRadius,
      borderStyle: 'solid',
      borderWidth: 1,
      boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : undefined,
      '&:hover': {
        borderColor: isFocused ? colors.primary : colors.neutral30
      }
    });
  };
  var Control = function Control(props) {
    var children = props.children,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
    return jsx("div", _extends({
      ref: innerRef
    }, getStyleProps(props, 'control', {
      control: true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }), innerProps, {
      "aria-disabled": isDisabled || undefined
    }), children);
  };
  var Control$1 = Control;

  var _excluded$1 = ["data"];
  var groupCSS = function groupCSS(_ref, unstyled) {
    var spacing = _ref.theme.spacing;
    return unstyled ? {} : {
      paddingBottom: spacing.baseUnit * 2,
      paddingTop: spacing.baseUnit * 2
    };
  };
  var Group = function Group(props) {
    var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      getClassNames = props.getClassNames,
      Heading = props.Heading,
      headingProps = props.headingProps,
      innerProps = props.innerProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
    return jsx("div", _extends({}, getStyleProps(props, 'group', {
      group: true
    }), innerProps), jsx(Heading, _extends({}, headingProps, {
      selectProps: selectProps,
      theme: theme,
      getStyles: getStyles,
      getClassNames: getClassNames,
      cx: cx
    }), label), jsx("div", null, children));
  };
  var groupHeadingCSS = function groupHeadingCSS(_ref2, unstyled) {
    var _ref2$theme = _ref2.theme,
      colors = _ref2$theme.colors,
      spacing = _ref2$theme.spacing;
    return _objectSpread2({
      label: 'group',
      cursor: 'default',
      display: 'block'
    }, unstyled ? {} : {
      color: colors.neutral40,
      fontSize: '75%',
      fontWeight: 500,
      marginBottom: '0.25em',
      paddingLeft: spacing.baseUnit * 3,
      paddingRight: spacing.baseUnit * 3,
      textTransform: 'uppercase'
    });
  };
  var GroupHeading = function GroupHeading(props) {
    var _cleanCommonProps = cleanCommonProps(props);
      _cleanCommonProps.data;
      var innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$1);
    return jsx("div", _extends({}, getStyleProps(props, 'groupHeading', {
      'group-heading': true
    }), innerProps));
  };
  var Group$1 = Group;

  var _excluded$5 = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
  var inputCSS = function inputCSS(_ref, unstyled) {
    var isDisabled = _ref.isDisabled,
      value = _ref.value,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
    return _objectSpread2(_objectSpread2({
      visibility: isDisabled ? 'hidden' : 'visible',
      // force css to recompute when value change due to @emotion bug.
      // We can remove it whenever the bug is fixed.
      transform: value ? 'translateZ(0)' : ''
    }, containerStyle), unstyled ? {} : {
      margin: spacing.baseUnit / 2,
      paddingBottom: spacing.baseUnit / 2,
      paddingTop: spacing.baseUnit / 2,
      color: colors.neutral80
    });
  };
  var spacingStyle = {
    gridArea: '1 / 2',
    font: 'inherit',
    minWidth: '2px',
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0
  };
  var containerStyle = {
    flex: '1 1 auto',
    display: 'inline-grid',
    gridArea: '1 / 1 / 2 / 3',
    gridTemplateColumns: '0 min-content',
    '&:after': _objectSpread2({
      content: 'attr(data-value) " "',
      visibility: 'hidden',
      whiteSpace: 'pre'
    }, spacingStyle)
  };
  var inputStyle = function inputStyle(isHidden) {
    return _objectSpread2({
      label: 'input',
      color: 'inherit',
      background: 0,
      opacity: isHidden ? 0 : 1,
      width: '100%'
    }, spacingStyle);
  };
  var Input = function Input(props) {
    var cx = props.cx,
      value = props.value;
    var _cleanCommonProps = cleanCommonProps(props),
      innerRef = _cleanCommonProps.innerRef,
      isDisabled = _cleanCommonProps.isDisabled,
      isHidden = _cleanCommonProps.isHidden,
      inputClassName = _cleanCommonProps.inputClassName,
      innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$5);
    return jsx("div", _extends({}, getStyleProps(props, 'input', {
      'input-container': true
    }), {
      "data-value": value || ''
    }), jsx("input", _extends({
      className: cx({
        input: true
      }, inputClassName),
      ref: innerRef,
      style: inputStyle(isHidden),
      disabled: isDisabled
    }, innerProps)));
  };
  var Input$1 = Input;

  var multiValueCSS = function multiValueCSS(_ref, unstyled) {
    var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
    return _objectSpread2({
      label: 'multiValue',
      display: 'flex',
      minWidth: 0
    }, unstyled ? {} : {
      backgroundColor: colors.neutral10,
      borderRadius: borderRadius / 2,
      margin: spacing.baseUnit / 2
    });
  };
  var multiValueLabelCSS = function multiValueLabelCSS(_ref2, unstyled) {
    var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
    return _objectSpread2({
      overflow: 'hidden',
      textOverflow: cropWithEllipsis || cropWithEllipsis === undefined ? 'ellipsis' : undefined,
      whiteSpace: 'nowrap'
    }, unstyled ? {} : {
      borderRadius: borderRadius / 2,
      color: colors.neutral80,
      fontSize: '85%',
      padding: 3,
      paddingLeft: 6
    });
  };
  var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3, unstyled) {
    var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
    return _objectSpread2({
      alignItems: 'center',
      display: 'flex'
    }, unstyled ? {} : {
      borderRadius: borderRadius / 2,
      backgroundColor: isFocused ? colors.dangerLight : undefined,
      paddingLeft: spacing.baseUnit,
      paddingRight: spacing.baseUnit,
      ':hover': {
        backgroundColor: colors.dangerLight,
        color: colors.danger
      }
    });
  };
  var MultiValueGeneric = function MultiValueGeneric(_ref4) {
    var children = _ref4.children,
      innerProps = _ref4.innerProps;
    return jsx("div", innerProps, children);
  };
  var MultiValueContainer = MultiValueGeneric;
  var MultiValueLabel = MultiValueGeneric;
  function MultiValueRemove(_ref5) {
    var children = _ref5.children,
      innerProps = _ref5.innerProps;
    return jsx("div", _extends({
      role: "button"
    }, innerProps), children || jsx(CrossIcon, {
      size: 14
    }));
  }
  var MultiValue = function MultiValue(props) {
    var children = props.children,
      components = props.components,
      data = props.data,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      removeProps = props.removeProps,
      selectProps = props.selectProps;
    var Container = components.Container,
      Label = components.Label,
      Remove = components.Remove;
    return jsx(Container, {
      data: data,
      innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, 'multiValue', {
        'multi-value': true,
        'multi-value--is-disabled': isDisabled
      })), innerProps),
      selectProps: selectProps
    }, jsx(Label, {
      data: data,
      innerProps: _objectSpread2({}, getStyleProps(props, 'multiValueLabel', {
        'multi-value__label': true
      })),
      selectProps: selectProps
    }, children), jsx(Remove, {
      data: data,
      innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, 'multiValueRemove', {
        'multi-value__remove': true
      })), {}, {
        'aria-label': "Remove ".concat(children || 'option')
      }, removeProps),
      selectProps: selectProps
    }));
  };
  var MultiValue$1 = MultiValue;

  var optionCSS = function optionCSS(_ref, unstyled) {
    var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
    return _objectSpread2({
      label: 'option',
      cursor: 'default',
      display: 'block',
      fontSize: 'inherit',
      width: '100%',
      userSelect: 'none',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
    }, unstyled ? {} : {
      backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
      color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
      padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
      // provide some affordance on touch devices
      ':active': {
        backgroundColor: !isDisabled ? isSelected ? colors.primary : colors.primary50 : undefined
      }
    });
  };
  var Option = function Option(props) {
    var children = props.children,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'option', {
      option: true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }), {
      ref: innerRef,
      "aria-disabled": isDisabled
    }, innerProps), children);
  };
  var Option$1 = Option;

  var placeholderCSS = function placeholderCSS(_ref, unstyled) {
    var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
    return _objectSpread2({
      label: 'placeholder',
      gridArea: '1 / 1 / 2 / 3'
    }, unstyled ? {} : {
      color: colors.neutral50,
      marginLeft: spacing.baseUnit / 2,
      marginRight: spacing.baseUnit / 2
    });
  };
  var Placeholder = function Placeholder(props) {
    var children = props.children,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'placeholder', {
      placeholder: true
    }), innerProps), children);
  };
  var Placeholder$1 = Placeholder;

  var css = function css(_ref, unstyled) {
    var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
    return _objectSpread2({
      label: 'singleValue',
      gridArea: '1 / 1 / 2 / 3',
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }, unstyled ? {} : {
      color: isDisabled ? colors.neutral40 : colors.neutral80,
      marginLeft: spacing.baseUnit / 2,
      marginRight: spacing.baseUnit / 2
    });
  };
  var SingleValue = function SingleValue(props) {
    var children = props.children,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
    return jsx("div", _extends({}, getStyleProps(props, 'singleValue', {
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }), innerProps), children);
  };
  var SingleValue$1 = SingleValue;

  var components = {
    ClearIndicator: ClearIndicator,
    Control: Control$1,
    DropdownIndicator: DropdownIndicator,
    DownChevron: DownChevron,
    CrossIcon: CrossIcon,
    Group: Group$1,
    GroupHeading: GroupHeading,
    IndicatorsContainer: IndicatorsContainer,
    IndicatorSeparator: IndicatorSeparator,
    Input: Input$1,
    LoadingIndicator: LoadingIndicator,
    Menu: Menu$1,
    MenuList: MenuList,
    MenuPortal: MenuPortal,
    LoadingMessage: LoadingMessage,
    NoOptionsMessage: NoOptionsMessage,
    MultiValue: MultiValue$1,
    MultiValueContainer: MultiValueContainer,
    MultiValueLabel: MultiValueLabel,
    MultiValueRemove: MultiValueRemove,
    Option: Option$1,
    Placeholder: Placeholder$1,
    SelectContainer: SelectContainer,
    SingleValue: SingleValue$1,
    ValueContainer: ValueContainer
  };
  var defaultComponents = function defaultComponents(props) {
    return _objectSpread2(_objectSpread2({}, components), props.components);
  };

  var safeIsNaN = Number.isNaN ||
      function ponyfill(value) {
          return typeof value === 'number' && value !== value;
      };
  function isEqual(first, second) {
      if (first === second) {
          return true;
      }
      if (safeIsNaN(first) && safeIsNaN(second)) {
          return true;
      }
      return false;
  }
  function areInputsEqual(newInputs, lastInputs) {
      if (newInputs.length !== lastInputs.length) {
          return false;
      }
      for (var i = 0; i < newInputs.length; i++) {
          if (!isEqual(newInputs[i], lastInputs[i])) {
              return false;
          }
      }
      return true;
  }

  function memoizeOne(resultFn, isEqual) {
      if (isEqual === undefined) { isEqual = areInputsEqual; }
      var cache = null;
      function memoized() {
          var newArgs = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              newArgs[_i] = arguments[_i];
          }
          if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
              return cache.lastResult;
          }
          var lastResult = resultFn.apply(this, newArgs);
          cache = {
              lastResult: lastResult,
              lastArgs: newArgs,
              lastThis: this,
          };
          return lastResult;
      }
      memoized.clear = function clear() {
          cache = null;
      };
      return memoized;
  }

  var memoizeOne_cjs = memoizeOne;

  var memoizeOne$1 = /*@__PURE__*/getDefaultExportFromCjs(memoizeOne_cjs);

  function _EMOTION_STRINGIFIED_CSS_ERROR__$2() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

  // Assistive text to describe visual elements. Hidden for sighted users.
  var _ref = {
    name: "1f43avz-a11yText-A11yText",
    styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IEpTWCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
  };
  var A11yText = function A11yText(props) {
    return jsx("span", _extends({
      css: _ref
    }, props));
  };
  var A11yText$1 = A11yText;

  var defaultAriaLiveMessages = {
    guidance: function guidance(props) {
      var isSearchable = props.isSearchable,
        isMulti = props.isMulti,
        tabSelectsValue = props.tabSelectsValue,
        context = props.context,
        isInitialFocus = props.isInitialFocus;
      switch (context) {
        case 'menu':
          return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(tabSelectsValue ? ', press Tab to select the option and exit the menu' : '', ".");
        case 'input':
          return isInitialFocus ? "".concat(props['aria-label'] || 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '') : '';
        case 'value':
          return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
        default:
          return '';
      }
    },
    onChange: function onChange(props) {
      var action = props.action,
        _props$label = props.label,
        label = _props$label === undefined ? '' : _props$label,
        labels = props.labels,
        isDisabled = props.isDisabled;
      switch (action) {
        case 'deselect-option':
        case 'pop-value':
        case 'remove-value':
          return "option ".concat(label, ", deselected.");
        case 'clear':
          return 'All selected options have been cleared.';
        case 'initial-input-focus':
          return "option".concat(labels.length > 1 ? 's' : '', " ").concat(labels.join(','), ", selected.");
        case 'select-option':
          return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
        default:
          return '';
      }
    },
    onFocus: function onFocus(props) {
      var context = props.context,
        focused = props.focused,
        options = props.options,
        _props$label2 = props.label,
        label = _props$label2 === undefined ? '' : _props$label2,
        selectValue = props.selectValue,
        isDisabled = props.isDisabled,
        isSelected = props.isSelected,
        isAppleDevice = props.isAppleDevice;
      var getArrayIndex = function getArrayIndex(arr, item) {
        return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : '';
      };
      if (context === 'value' && selectValue) {
        return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
      }
      if (context === 'menu' && isAppleDevice) {
        var disabled = isDisabled ? ' disabled' : '';
        var status = "".concat(isSelected ? ' selected' : '').concat(disabled);
        return "".concat(label).concat(status, ", ").concat(getArrayIndex(options, focused), ".");
      }
      return '';
    },
    onFilter: function onFilter(props) {
      var inputValue = props.inputValue,
        resultsMessage = props.resultsMessage;
      return "".concat(resultsMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
    }
  };

  var LiveRegion = function LiveRegion(props) {
    var ariaSelection = props.ariaSelection,
      focusedOption = props.focusedOption,
      focusedValue = props.focusedValue,
      focusableOptions = props.focusableOptions,
      isFocused = props.isFocused,
      selectValue = props.selectValue,
      selectProps = props.selectProps,
      id = props.id,
      isAppleDevice = props.isAppleDevice;
    var ariaLiveMessages = selectProps.ariaLiveMessages,
      getOptionLabel = selectProps.getOptionLabel,
      inputValue = selectProps.inputValue,
      isMulti = selectProps.isMulti,
      isOptionDisabled = selectProps.isOptionDisabled,
      isSearchable = selectProps.isSearchable,
      menuIsOpen = selectProps.menuIsOpen,
      options = selectProps.options,
      screenReaderStatus = selectProps.screenReaderStatus,
      tabSelectsValue = selectProps.tabSelectsValue,
      isLoading = selectProps.isLoading;
    var ariaLabel = selectProps['aria-label'];
    var ariaLive = selectProps['aria-live'];

    // Update aria live message configuration when prop changes
    var messages = React.useMemo(function () {
      return _objectSpread2(_objectSpread2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
    }, [ariaLiveMessages]);

    // Update aria live selected option when prop changes
    var ariaSelected = React.useMemo(function () {
      var message = '';
      if (ariaSelection && messages.onChange) {
        var option = ariaSelection.option,
          selectedOptions = ariaSelection.options,
          removedValue = ariaSelection.removedValue,
          removedValues = ariaSelection.removedValues,
          value = ariaSelection.value;
        // select-option when !isMulti does not return option so we assume selected option is value
        var asOption = function asOption(val) {
          return !Array.isArray(val) ? val : null;
        };

        // If there is just one item from the action then get its label
        var selected = removedValue || option || asOption(value);
        var label = selected ? getOptionLabel(selected) : '';

        // If there are multiple items from the action then return an array of labels
        var multiSelected = selectedOptions || removedValues || undefined;
        var labels = multiSelected ? multiSelected.map(getOptionLabel) : [];
        var onChangeProps = _objectSpread2({
          // multiSelected items are usually items that have already been selected
          // or set by the user as a default value so we assume they are not disabled
          isDisabled: selected && isOptionDisabled(selected, selectValue),
          label: label,
          labels: labels
        }, ariaSelection);
        message = messages.onChange(onChangeProps);
      }
      return message;
    }, [ariaSelection, messages, isOptionDisabled, selectValue, getOptionLabel]);
    var ariaFocused = React.useMemo(function () {
      var focusMsg = '';
      var focused = focusedOption || focusedValue;
      var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
      if (focused && messages.onFocus) {
        var onFocusProps = {
          focused: focused,
          label: getOptionLabel(focused),
          isDisabled: isOptionDisabled(focused, selectValue),
          isSelected: isSelected,
          options: focusableOptions,
          context: focused === focusedOption ? 'menu' : 'value',
          selectValue: selectValue,
          isAppleDevice: isAppleDevice
        };
        focusMsg = messages.onFocus(onFocusProps);
      }
      return focusMsg;
    }, [focusedOption, focusedValue, getOptionLabel, isOptionDisabled, messages, focusableOptions, selectValue, isAppleDevice]);
    var ariaResults = React.useMemo(function () {
      var resultsMsg = '';
      if (menuIsOpen && options.length && !isLoading && messages.onFilter) {
        var resultsMessage = screenReaderStatus({
          count: focusableOptions.length
        });
        resultsMsg = messages.onFilter({
          inputValue: inputValue,
          resultsMessage: resultsMessage
        });
      }
      return resultsMsg;
    }, [focusableOptions, inputValue, menuIsOpen, messages, options, screenReaderStatus, isLoading]);
    var isInitialFocus = (ariaSelection === null || ariaSelection === undefined ? undefined : ariaSelection.action) === 'initial-input-focus';
    var ariaGuidance = React.useMemo(function () {
      var guidanceMsg = '';
      if (messages.guidance) {
        var context = focusedValue ? 'value' : menuIsOpen ? 'menu' : 'input';
        guidanceMsg = messages.guidance({
          'aria-label': ariaLabel,
          context: context,
          isDisabled: focusedOption && isOptionDisabled(focusedOption, selectValue),
          isMulti: isMulti,
          isSearchable: isSearchable,
          tabSelectsValue: tabSelectsValue,
          isInitialFocus: isInitialFocus
        });
      }
      return guidanceMsg;
    }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled, isSearchable, menuIsOpen, messages, selectValue, tabSelectsValue, isInitialFocus]);
    var ScreenReaderText = jsx(React.Fragment, null, jsx("span", {
      id: "aria-selection"
    }, ariaSelected), jsx("span", {
      id: "aria-focused"
    }, ariaFocused), jsx("span", {
      id: "aria-results"
    }, ariaResults), jsx("span", {
      id: "aria-guidance"
    }, ariaGuidance));
    return jsx(React.Fragment, null, jsx(A11yText$1, {
      id: id
    }, isInitialFocus && ScreenReaderText), jsx(A11yText$1, {
      "aria-live": ariaLive,
      "aria-atomic": "false",
      "aria-relevant": "additions text",
      role: "log"
    }, isFocused && !isInitialFocus && ScreenReaderText));
  };
  var LiveRegion$1 = LiveRegion;

  var diacritics = [{
    base: 'A',
    letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
  }, {
    base: 'AA',
    letters: "\uA732"
  }, {
    base: 'AE',
    letters: "\xC6\u01FC\u01E2"
  }, {
    base: 'AO',
    letters: "\uA734"
  }, {
    base: 'AU',
    letters: "\uA736"
  }, {
    base: 'AV',
    letters: "\uA738\uA73A"
  }, {
    base: 'AY',
    letters: "\uA73C"
  }, {
    base: 'B',
    letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
  }, {
    base: 'C',
    letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
  }, {
    base: 'D',
    letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
  }, {
    base: 'DZ',
    letters: "\u01F1\u01C4"
  }, {
    base: 'Dz',
    letters: "\u01F2\u01C5"
  }, {
    base: 'E',
    letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
  }, {
    base: 'F',
    letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
  }, {
    base: 'G',
    letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
  }, {
    base: 'H',
    letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
  }, {
    base: 'I',
    letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
  }, {
    base: 'J',
    letters: "J\u24BF\uFF2A\u0134\u0248"
  }, {
    base: 'K',
    letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
  }, {
    base: 'L',
    letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
  }, {
    base: 'LJ',
    letters: "\u01C7"
  }, {
    base: 'Lj',
    letters: "\u01C8"
  }, {
    base: 'M',
    letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
  }, {
    base: 'N',
    letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
  }, {
    base: 'NJ',
    letters: "\u01CA"
  }, {
    base: 'Nj',
    letters: "\u01CB"
  }, {
    base: 'O',
    letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
  }, {
    base: 'OI',
    letters: "\u01A2"
  }, {
    base: 'OO',
    letters: "\uA74E"
  }, {
    base: 'OU',
    letters: "\u0222"
  }, {
    base: 'P',
    letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
  }, {
    base: 'Q',
    letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
  }, {
    base: 'R',
    letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
  }, {
    base: 'S',
    letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
  }, {
    base: 'T',
    letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
  }, {
    base: 'TZ',
    letters: "\uA728"
  }, {
    base: 'U',
    letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
  }, {
    base: 'V',
    letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
  }, {
    base: 'VY',
    letters: "\uA760"
  }, {
    base: 'W',
    letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
  }, {
    base: 'X',
    letters: "X\u24CD\uFF38\u1E8A\u1E8C"
  }, {
    base: 'Y',
    letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
  }, {
    base: 'Z',
    letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
  }, {
    base: 'a',
    letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
  }, {
    base: 'aa',
    letters: "\uA733"
  }, {
    base: 'ae',
    letters: "\xE6\u01FD\u01E3"
  }, {
    base: 'ao',
    letters: "\uA735"
  }, {
    base: 'au',
    letters: "\uA737"
  }, {
    base: 'av',
    letters: "\uA739\uA73B"
  }, {
    base: 'ay',
    letters: "\uA73D"
  }, {
    base: 'b',
    letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
  }, {
    base: 'c',
    letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
  }, {
    base: 'd',
    letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
  }, {
    base: 'dz',
    letters: "\u01F3\u01C6"
  }, {
    base: 'e',
    letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
  }, {
    base: 'f',
    letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
  }, {
    base: 'g',
    letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
  }, {
    base: 'h',
    letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
  }, {
    base: 'hv',
    letters: "\u0195"
  }, {
    base: 'i',
    letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
  }, {
    base: 'j',
    letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
  }, {
    base: 'k',
    letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
  }, {
    base: 'l',
    letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
  }, {
    base: 'lj',
    letters: "\u01C9"
  }, {
    base: 'm',
    letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
  }, {
    base: 'n',
    letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
  }, {
    base: 'nj',
    letters: "\u01CC"
  }, {
    base: 'o',
    letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
  }, {
    base: 'oi',
    letters: "\u01A3"
  }, {
    base: 'ou',
    letters: "\u0223"
  }, {
    base: 'oo',
    letters: "\uA74F"
  }, {
    base: 'p',
    letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
  }, {
    base: 'q',
    letters: "q\u24E0\uFF51\u024B\uA757\uA759"
  }, {
    base: 'r',
    letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
  }, {
    base: 's',
    letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
  }, {
    base: 't',
    letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
  }, {
    base: 'tz',
    letters: "\uA729"
  }, {
    base: 'u',
    letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
  }, {
    base: 'v',
    letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
  }, {
    base: 'vy',
    letters: "\uA761"
  }, {
    base: 'w',
    letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
  }, {
    base: 'x',
    letters: "x\u24E7\uFF58\u1E8B\u1E8D"
  }, {
    base: 'y',
    letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
  }, {
    base: 'z',
    letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
  }];
  var anyDiacritic = new RegExp('[' + diacritics.map(function (d) {
    return d.letters;
  }).join('') + ']', 'g');
  var diacriticToBase = {};
  for (var i = 0; i < diacritics.length; i++) {
    var diacritic = diacritics[i];
    for (var j = 0; j < diacritic.letters.length; j++) {
      diacriticToBase[diacritic.letters[j]] = diacritic.base;
    }
  }
  var stripDiacritics = function stripDiacritics(str) {
    return str.replace(anyDiacritic, function (match) {
      return diacriticToBase[match];
    });
  };

  var memoizedStripDiacriticsForInput = memoizeOne$1(stripDiacritics);
  var trimString = function trimString(str) {
    return str.replace(/^\s+|\s+$/g, '');
  };
  var defaultStringify = function defaultStringify(option) {
    return "".concat(option.label, " ").concat(option.value);
  };
  var createFilter = function createFilter(config) {
    return function (option, rawInput) {
      // eslint-disable-next-line no-underscore-dangle
      if (option.data.__isNew__) return true;
      var _ignoreCase$ignoreAcc = _objectSpread2({
          ignoreCase: true,
          ignoreAccents: true,
          stringify: defaultStringify,
          trim: true,
          matchFrom: 'any'
        }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;
      var input = trim ? trimString(rawInput) : rawInput;
      var candidate = trim ? trimString(stringify(option)) : stringify(option);
      if (ignoreCase) {
        input = input.toLowerCase();
        candidate = candidate.toLowerCase();
      }
      if (ignoreAccents) {
        input = memoizedStripDiacriticsForInput(input);
        candidate = stripDiacritics(candidate);
      }
      return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
    };
  };

  var _excluded = ["innerRef"];
  function DummyInput(_ref) {
    var innerRef = _ref.innerRef,
      props = _objectWithoutProperties(_ref, _excluded);
    // Remove animation props not meant for HTML elements
    var filteredProps = removeProps(props, 'onExited', 'in', 'enter', 'exit', 'appear');
    return jsx("input", _extends({
      ref: innerRef
    }, filteredProps, {
      css: /*#__PURE__*/css$2({
        label: 'dummyInput',
        // get rid of any default styles
        background: 0,
        border: 0,
        // important! this hides the flashing cursor
        caretColor: 'transparent',
        fontSize: 'inherit',
        gridArea: '1 / 1 / 2 / 3',
        outline: 0,
        padding: 0,
        // important! without `width` browsers won't allow focus
        width: 1,
        // remove cursor on desktop
        color: 'transparent',
        // remove cursor on mobile whilst maintaining "scroll into view" behaviour
        left: -100,
        opacity: 0,
        position: 'relative',
        transform: 'scale(.01)'
      }, ";label:DummyInput;", "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyByZW1vdmVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHVtbXlJbnB1dCh7XG4gIGlubmVyUmVmLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbnB1dCddICYge1xuICByZWFkb25seSBpbm5lclJlZjogUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xufSkge1xuICAvLyBSZW1vdmUgYW5pbWF0aW9uIHByb3BzIG5vdCBtZWFudCBmb3IgSFRNTCBlbGVtZW50c1xuICBjb25zdCBmaWx0ZXJlZFByb3BzID0gcmVtb3ZlUHJvcHMoXG4gICAgcHJvcHMsXG4gICAgJ29uRXhpdGVkJyxcbiAgICAnaW4nLFxuICAgICdlbnRlcicsXG4gICAgJ2V4aXQnLFxuICAgICdhcHBlYXInXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICB7Li4uZmlsdGVyZWRQcm9wc31cbiAgICAgIGNzcz17e1xuICAgICAgICBsYWJlbDogJ2R1bW15SW5wdXQnLFxuICAgICAgICAvLyBnZXQgcmlkIG9mIGFueSBkZWZhdWx0IHN0eWxlc1xuICAgICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgdGhpcyBoaWRlcyB0aGUgZmxhc2hpbmcgY3Vyc29yXG4gICAgICAgIGNhcmV0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIGdyaWRBcmVhOiAnMSAvIDEgLyAyIC8gMycsXG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgd2l0aG91dCBgd2lkdGhgIGJyb3dzZXJzIHdvbid0IGFsbG93IGZvY3VzXG4gICAgICAgIHdpZHRoOiAxLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gZGVza3RvcFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSguMDEpJyxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ== */")
    }));
  }

  var cancelScroll = function cancelScroll(event) {
    if (event.cancelable) event.preventDefault();
    event.stopPropagation();
  };
  function useScrollCapture(_ref) {
    var isEnabled = _ref.isEnabled,
      onBottomArrive = _ref.onBottomArrive,
      onBottomLeave = _ref.onBottomLeave,
      onTopArrive = _ref.onTopArrive,
      onTopLeave = _ref.onTopLeave;
    var isBottom = React.useRef(false);
    var isTop = React.useRef(false);
    var touchStart = React.useRef(0);
    var scrollTarget = React.useRef(null);
    var handleEventDelta = React.useCallback(function (event, delta) {
      if (scrollTarget.current === null) return;
      var _scrollTarget$current = scrollTarget.current,
        scrollTop = _scrollTarget$current.scrollTop,
        scrollHeight = _scrollTarget$current.scrollHeight,
        clientHeight = _scrollTarget$current.clientHeight;
      var target = scrollTarget.current;
      var isDeltaPositive = delta > 0;
      var availableScroll = scrollHeight - clientHeight - scrollTop;
      var shouldCancelScroll = false;

      // reset bottom/top flags
      if (availableScroll > delta && isBottom.current) {
        if (onBottomLeave) onBottomLeave(event);
        isBottom.current = false;
      }
      if (isDeltaPositive && isTop.current) {
        if (onTopLeave) onTopLeave(event);
        isTop.current = false;
      }

      // bottom limit
      if (isDeltaPositive && delta > availableScroll) {
        if (onBottomArrive && !isBottom.current) {
          onBottomArrive(event);
        }
        target.scrollTop = scrollHeight;
        shouldCancelScroll = true;
        isBottom.current = true;

        // top limit
      } else if (!isDeltaPositive && -delta > scrollTop) {
        if (onTopArrive && !isTop.current) {
          onTopArrive(event);
        }
        target.scrollTop = 0;
        shouldCancelScroll = true;
        isTop.current = true;
      }

      // cancel scroll
      if (shouldCancelScroll) {
        cancelScroll(event);
      }
    }, [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]);
    var onWheel = React.useCallback(function (event) {
      handleEventDelta(event, event.deltaY);
    }, [handleEventDelta]);
    var onTouchStart = React.useCallback(function (event) {
      // set touch start so we can calculate touchmove delta
      touchStart.current = event.changedTouches[0].clientY;
    }, []);
    var onTouchMove = React.useCallback(function (event) {
      var deltaY = touchStart.current - event.changedTouches[0].clientY;
      handleEventDelta(event, deltaY);
    }, [handleEventDelta]);
    var startListening = React.useCallback(function (el) {
      // bail early if no element is available to attach to
      if (!el) return;
      var notPassive = supportsPassiveEvents ? {
        passive: false
      } : false;
      el.addEventListener('wheel', onWheel, notPassive);
      el.addEventListener('touchstart', onTouchStart, notPassive);
      el.addEventListener('touchmove', onTouchMove, notPassive);
    }, [onTouchMove, onTouchStart, onWheel]);
    var stopListening = React.useCallback(function (el) {
      // bail early if no element is available to detach from
      if (!el) return;
      el.removeEventListener('wheel', onWheel, false);
      el.removeEventListener('touchstart', onTouchStart, false);
      el.removeEventListener('touchmove', onTouchMove, false);
    }, [onTouchMove, onTouchStart, onWheel]);
    React.useEffect(function () {
      if (!isEnabled) return;
      var element = scrollTarget.current;
      startListening(element);
      return function () {
        stopListening(element);
      };
    }, [isEnabled, startListening, stopListening]);
    return function (element) {
      scrollTarget.current = element;
    };
  }

  var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
  var LOCK_STYLES = {
    boxSizing: 'border-box',
    // account for possible declaration `width: 100%;` on body
    overflow: 'hidden',
    position: 'relative',
    height: '100%'
  };
  function preventTouchMove(e) {
    if (e.cancelable) e.preventDefault();
  }
  function allowTouchMove(e) {
    e.stopPropagation();
  }
  function preventInertiaScroll() {
    var top = this.scrollTop;
    var totalScroll = this.scrollHeight;
    var currentScroll = top + this.offsetHeight;
    if (top === 0) {
      this.scrollTop = 1;
    } else if (currentScroll === totalScroll) {
      this.scrollTop = top - 1;
    }
  }

  // `ontouchstart` check works on most browsers
  // `maxTouchPoints` works on IE10/11 and Surface
  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
  }
  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  var activeScrollLocks = 0;
  var listenerOptions = {
    capture: false,
    passive: false
  };
  function useScrollLock(_ref) {
    var isEnabled = _ref.isEnabled,
      _ref$accountForScroll = _ref.accountForScrollbars,
      accountForScrollbars = _ref$accountForScroll === undefined ? true : _ref$accountForScroll;
    var originalStyles = React.useRef({});
    var scrollTarget = React.useRef(null);
    var addScrollLock = React.useCallback(function (touchScrollTarget) {
      if (!canUseDOM) return;
      var target = document.body;
      var targetStyle = target && target.style;
      if (accountForScrollbars) {
        // store any styles already applied to the body
        STYLE_KEYS.forEach(function (key) {
          var val = targetStyle && targetStyle[key];
          originalStyles.current[key] = val;
        });
      }

      // apply the lock styles and padding if this is the first scroll lock
      if (accountForScrollbars && activeScrollLocks < 1) {
        var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
        var clientWidth = document.body ? document.body.clientWidth : 0;
        var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
        Object.keys(LOCK_STYLES).forEach(function (key) {
          var val = LOCK_STYLES[key];
          if (targetStyle) {
            targetStyle[key] = val;
          }
        });
        if (targetStyle) {
          targetStyle.paddingRight = "".concat(adjustedPadding, "px");
        }
      }

      // account for touch devices
      if (target && isTouchDevice()) {
        // Mobile Safari ignores { overflow: hidden } declaration on the body.
        target.addEventListener('touchmove', preventTouchMove, listenerOptions);

        // Allow scroll on provided target
        if (touchScrollTarget) {
          touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, listenerOptions);
          touchScrollTarget.addEventListener('touchmove', allowTouchMove, listenerOptions);
        }
      }

      // increment active scroll locks
      activeScrollLocks += 1;
    }, [accountForScrollbars]);
    var removeScrollLock = React.useCallback(function (touchScrollTarget) {
      if (!canUseDOM) return;
      var target = document.body;
      var targetStyle = target && target.style;

      // safely decrement active scroll locks
      activeScrollLocks = Math.max(activeScrollLocks - 1, 0);

      // reapply original body styles, if any
      if (accountForScrollbars && activeScrollLocks < 1) {
        STYLE_KEYS.forEach(function (key) {
          var val = originalStyles.current[key];
          if (targetStyle) {
            targetStyle[key] = val;
          }
        });
      }

      // remove touch listeners
      if (target && isTouchDevice()) {
        target.removeEventListener('touchmove', preventTouchMove, listenerOptions);
        if (touchScrollTarget) {
          touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, listenerOptions);
          touchScrollTarget.removeEventListener('touchmove', allowTouchMove, listenerOptions);
        }
      }
    }, [accountForScrollbars]);
    React.useEffect(function () {
      if (!isEnabled) return;
      var element = scrollTarget.current;
      addScrollLock(element);
      return function () {
        removeScrollLock(element);
      };
    }, [isEnabled, addScrollLock, removeScrollLock]);
    return function (element) {
      scrollTarget.current = element;
    };
  }

  function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
  var blurSelectInput = function blurSelectInput(event) {
    var element = event.target;
    return element.ownerDocument.activeElement && element.ownerDocument.activeElement.blur();
  };
  var _ref2$1 = {
    name: "bp8cua-ScrollManager",
    styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
  };
  function ScrollManager(_ref) {
    var children = _ref.children,
      lockEnabled = _ref.lockEnabled,
      _ref$captureEnabled = _ref.captureEnabled,
      captureEnabled = _ref$captureEnabled === undefined ? true : _ref$captureEnabled,
      onBottomArrive = _ref.onBottomArrive,
      onBottomLeave = _ref.onBottomLeave,
      onTopArrive = _ref.onTopArrive,
      onTopLeave = _ref.onTopLeave;
    var setScrollCaptureTarget = useScrollCapture({
      isEnabled: captureEnabled,
      onBottomArrive: onBottomArrive,
      onBottomLeave: onBottomLeave,
      onTopArrive: onTopArrive,
      onTopLeave: onTopLeave
    });
    var setScrollLockTarget = useScrollLock({
      isEnabled: lockEnabled
    });
    var targetRef = function targetRef(element) {
      setScrollCaptureTarget(element);
      setScrollLockTarget(element);
    };
    return jsx(React.Fragment, null, lockEnabled && jsx("div", {
      onClick: blurSelectInput,
      css: _ref2$1
    }), children(targetRef));
  }

  function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
  var _ref2 = {
    name: "5kkxb2-requiredInput-RequiredInput",
    styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__
  };
  var RequiredInput = function RequiredInput(_ref) {
    var name = _ref.name,
      onFocus = _ref.onFocus;
    return jsx("input", {
      required: true,
      name: name,
      tabIndex: -1,
      "aria-hidden": "true",
      onFocus: onFocus,
      css: _ref2
      // Prevent `Switching from uncontrolled to controlled` error
      ,
      value: "",
      onChange: function onChange() {}
    });
  };
  var RequiredInput$1 = RequiredInput;

  /// <reference types="user-agent-data-types" />

  function testPlatform(re) {
    var _window$navigator$use;
    return typeof window !== 'undefined' && window.navigator != null ? re.test(((_window$navigator$use = window.navigator['userAgentData']) === null || _window$navigator$use === undefined ? undefined : _window$navigator$use.platform) || window.navigator.platform) : false;
  }
  function isIPhone() {
    return testPlatform(/^iPhone/i);
  }
  function isMac() {
    return testPlatform(/^Mac/i);
  }
  function isIPad() {
    return testPlatform(/^iPad/i) ||
    // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    isMac() && navigator.maxTouchPoints > 1;
  }
  function isIOS() {
    return isIPhone() || isIPad();
  }
  function isAppleDevice() {
    return isMac() || isIOS();
  }

  var formatGroupLabel = function formatGroupLabel(group) {
    return group.label;
  };
  var getOptionLabel$1 = function getOptionLabel(option) {
    return option.label;
  };
  var getOptionValue$1 = function getOptionValue(option) {
    return option.value;
  };
  var isOptionDisabled = function isOptionDisabled(option) {
    return !!option.isDisabled;
  };

  var defaultStyles = {
    clearIndicator: clearIndicatorCSS,
    container: containerCSS,
    control: css$1,
    dropdownIndicator: dropdownIndicatorCSS,
    group: groupCSS,
    groupHeading: groupHeadingCSS,
    indicatorsContainer: indicatorsContainerCSS,
    indicatorSeparator: indicatorSeparatorCSS,
    input: inputCSS,
    loadingIndicator: loadingIndicatorCSS,
    loadingMessage: loadingMessageCSS,
    menu: menuCSS,
    menuList: menuListCSS,
    menuPortal: menuPortalCSS,
    multiValue: multiValueCSS,
    multiValueLabel: multiValueLabelCSS,
    multiValueRemove: multiValueRemoveCSS,
    noOptionsMessage: noOptionsMessageCSS,
    option: optionCSS,
    placeholder: placeholderCSS,
    singleValue: css,
    valueContainer: valueContainerCSS
  };

  var colors = {
    primary: '#2684FF',
    primary75: '#4C9AFF',
    primary50: '#B2D4FF',
    primary25: '#DEEBFF',
    danger: '#DE350B',
    dangerLight: '#FFBDAD',
    neutral0: 'hsl(0, 0%, 100%)',
    neutral5: 'hsl(0, 0%, 95%)',
    neutral10: 'hsl(0, 0%, 90%)',
    neutral20: 'hsl(0, 0%, 80%)',
    neutral30: 'hsl(0, 0%, 70%)',
    neutral40: 'hsl(0, 0%, 60%)',
    neutral50: 'hsl(0, 0%, 50%)',
    neutral60: 'hsl(0, 0%, 40%)',
    neutral70: 'hsl(0, 0%, 30%)',
    neutral80: 'hsl(0, 0%, 20%)',
    neutral90: 'hsl(0, 0%, 10%)'
  };
  var borderRadius = 4;
  // Used to calculate consistent margin/padding on elements
  var baseUnit = 4;
  // The minimum height of the control
  var controlHeight = 38;
  // The amount of space between the control and menu */
  var menuGutter = baseUnit * 2;
  var spacing = {
    baseUnit: baseUnit,
    controlHeight: controlHeight,
    menuGutter: menuGutter
  };
  var defaultTheme = {
    borderRadius: borderRadius,
    colors: colors,
    spacing: spacing
  };

  var defaultProps = {
    'aria-live': 'polite',
    backspaceRemovesValue: true,
    blurInputOnSelect: isTouchCapable(),
    captureMenuScroll: !isTouchCapable(),
    classNames: {},
    closeMenuOnSelect: true,
    closeMenuOnScroll: false,
    components: {},
    controlShouldRenderValue: true,
    escapeClearsValue: false,
    filterOption: createFilter(),
    formatGroupLabel: formatGroupLabel,
    getOptionLabel: getOptionLabel$1,
    getOptionValue: getOptionValue$1,
    isDisabled: false,
    isLoading: false,
    isMulti: false,
    isRtl: false,
    isSearchable: true,
    isOptionDisabled: isOptionDisabled,
    loadingMessage: function loadingMessage() {
      return 'Loading...';
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: false,
    menuPlacement: 'bottom',
    menuPosition: 'absolute',
    menuShouldBlockScroll: false,
    menuShouldScrollIntoView: !isMobileDevice(),
    noOptionsMessage: function noOptionsMessage() {
      return 'No options';
    },
    openMenuOnFocus: false,
    openMenuOnClick: true,
    options: [],
    pageSize: 5,
    placeholder: 'Select...',
    screenReaderStatus: function screenReaderStatus(_ref) {
      var count = _ref.count;
      return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
    },
    styles: {},
    tabIndex: 0,
    tabSelectsValue: true,
    unstyled: false
  };
  function toCategorizedOption(props, option, selectValue, index) {
    var isDisabled = _isOptionDisabled(props, option, selectValue);
    var isSelected = _isOptionSelected(props, option, selectValue);
    var label = getOptionLabel(props, option);
    var value = getOptionValue(props, option);
    return {
      type: 'option',
      data: option,
      isDisabled: isDisabled,
      isSelected: isSelected,
      label: label,
      value: value,
      index: index
    };
  }
  function buildCategorizedOptions(props, selectValue) {
    return props.options.map(function (groupOrOption, groupOrOptionIndex) {
      if ('options' in groupOrOption) {
        var categorizedOptions = groupOrOption.options.map(function (option, optionIndex) {
          return toCategorizedOption(props, option, selectValue, optionIndex);
        }).filter(function (categorizedOption) {
          return isFocusable(props, categorizedOption);
        });
        return categorizedOptions.length > 0 ? {
          type: 'group',
          data: groupOrOption,
          options: categorizedOptions,
          index: groupOrOptionIndex
        } : undefined;
      }
      var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
      return isFocusable(props, categorizedOption) ? categorizedOption : undefined;
    }).filter(notNullish);
  }
  function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
    return categorizedOptions.reduce(function (optionsAccumulator, categorizedOption) {
      if (categorizedOption.type === 'group') {
        optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function (option) {
          return option.data;
        })));
      } else {
        optionsAccumulator.push(categorizedOption.data);
      }
      return optionsAccumulator;
    }, []);
  }
  function buildFocusableOptionsWithIds(categorizedOptions, optionId) {
    return categorizedOptions.reduce(function (optionsAccumulator, categorizedOption) {
      if (categorizedOption.type === 'group') {
        optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function (option) {
          return {
            data: option.data,
            id: "".concat(optionId, "-").concat(categorizedOption.index, "-").concat(option.index)
          };
        })));
      } else {
        optionsAccumulator.push({
          data: categorizedOption.data,
          id: "".concat(optionId, "-").concat(categorizedOption.index)
        });
      }
      return optionsAccumulator;
    }, []);
  }
  function buildFocusableOptions(props, selectValue) {
    return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
  }
  function isFocusable(props, categorizedOption) {
    var _props$inputValue = props.inputValue,
      inputValue = _props$inputValue === undefined ? '' : _props$inputValue;
    var data = categorizedOption.data,
      isSelected = categorizedOption.isSelected,
      label = categorizedOption.label,
      value = categorizedOption.value;
    return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
      label: label,
      value: value,
      data: data
    }, inputValue);
  }
  function getNextFocusedValue(state, nextSelectValue) {
    var focusedValue = state.focusedValue,
      lastSelectValue = state.selectValue;
    var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
    if (lastFocusedIndex > -1) {
      var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
      if (nextFocusedIndex > -1) {
        // the focused value is still in the selectValue, return it
        return focusedValue;
      } else if (lastFocusedIndex < nextSelectValue.length) {
        // the focusedValue is not present in the next selectValue array by
        // reference, so return the new value at the same index
        return nextSelectValue[lastFocusedIndex];
      }
    }
    return null;
  }
  function getNextFocusedOption(state, options) {
    var lastFocusedOption = state.focusedOption;
    return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
  }
  var getFocusedOptionId = function getFocusedOptionId(focusableOptionsWithIds, focusedOption) {
    var _focusableOptionsWith;
    var focusedOptionId = (_focusableOptionsWith = focusableOptionsWithIds.find(function (option) {
      return option.data === focusedOption;
    })) === null || _focusableOptionsWith === undefined ? undefined : _focusableOptionsWith.id;
    return focusedOptionId || null;
  };
  var getOptionLabel = function getOptionLabel(props, data) {
    return props.getOptionLabel(data);
  };
  var getOptionValue = function getOptionValue(props, data) {
    return props.getOptionValue(data);
  };
  function _isOptionDisabled(props, option, selectValue) {
    return typeof props.isOptionDisabled === 'function' ? props.isOptionDisabled(option, selectValue) : false;
  }
  function _isOptionSelected(props, option, selectValue) {
    if (selectValue.indexOf(option) > -1) return true;
    if (typeof props.isOptionSelected === 'function') {
      return props.isOptionSelected(option, selectValue);
    }
    var candidate = getOptionValue(props, option);
    return selectValue.some(function (i) {
      return getOptionValue(props, i) === candidate;
    });
  }
  function _filterOption(props, option, inputValue) {
    return props.filterOption ? props.filterOption(option, inputValue) : true;
  }
  var shouldHideSelectedOptions = function shouldHideSelectedOptions(props) {
    var hideSelectedOptions = props.hideSelectedOptions,
      isMulti = props.isMulti;
    if (hideSelectedOptions === undefined) return isMulti;
    return hideSelectedOptions;
  };
  var instanceId = 1;
  var Select = /*#__PURE__*/function (_Component) {
    _inherits(Select, _Component);
    var _super = _createSuper(Select);
    // Misc. Instance Properties
    // ------------------------------

    // TODO

    // Refs
    // ------------------------------

    // Lifecycle
    // ------------------------------

    function Select(_props) {
      var _this;
      _classCallCheck(this, Select);
      _this = _super.call(this, _props);
      _this.state = {
        ariaSelection: null,
        focusedOption: null,
        focusedOptionId: null,
        focusableOptionsWithIds: [],
        focusedValue: null,
        inputIsHidden: false,
        isFocused: false,
        selectValue: [],
        clearFocusValueOnUpdate: false,
        prevWasFocused: false,
        inputIsHiddenAfterUpdate: undefined,
        prevProps: undefined,
        instancePrefix: ''
      };
      _this.blockOptionHover = false;
      _this.isComposing = false;
      _this.commonProps = undefined;
      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
      _this.openAfterFocus = false;
      _this.scrollToFocusedOptionOnUpdate = false;
      _this.userIsDragging = undefined;
      _this.isAppleDevice = isAppleDevice();
      _this.controlRef = null;
      _this.getControlRef = function (ref) {
        _this.controlRef = ref;
      };
      _this.focusedOptionRef = null;
      _this.getFocusedOptionRef = function (ref) {
        _this.focusedOptionRef = ref;
      };
      _this.menuListRef = null;
      _this.getMenuListRef = function (ref) {
        _this.menuListRef = ref;
      };
      _this.inputRef = null;
      _this.getInputRef = function (ref) {
        _this.inputRef = ref;
      };
      _this.focus = _this.focusInput;
      _this.blur = _this.blurInput;
      _this.onChange = function (newValue, actionMeta) {
        var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
        actionMeta.name = name;
        _this.ariaOnChange(newValue, actionMeta);
        onChange(newValue, actionMeta);
      };
      _this.setValue = function (newValue, action, option) {
        var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti,
          inputValue = _this$props2.inputValue;
        _this.onInputChange('', {
          action: 'set-value',
          prevInputValue: inputValue
        });
        if (closeMenuOnSelect) {
          _this.setState({
            inputIsHiddenAfterUpdate: !isMulti
          });
          _this.onMenuClose();
        }
        // when the select value should change, we should reset focusedValue
        _this.setState({
          clearFocusValueOnUpdate: true
        });
        _this.onChange(newValue, {
          action: action,
          option: option
        });
      };
      _this.selectOption = function (newValue) {
        var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti,
          name = _this$props3.name;
        var selectValue = _this.state.selectValue;
        var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);
        var isDisabled = _this.isOptionDisabled(newValue, selectValue);
        if (deselected) {
          var candidate = _this.getOptionValue(newValue);
          _this.setValue(multiValueAsValue(selectValue.filter(function (i) {
            return _this.getOptionValue(i) !== candidate;
          })), 'deselect-option', newValue);
        } else if (!isDisabled) {
          // Select option if option is not disabled
          if (isMulti) {
            _this.setValue(multiValueAsValue([].concat(_toConsumableArray(selectValue), [newValue])), 'select-option', newValue);
          } else {
            _this.setValue(singleValueAsValue(newValue), 'select-option');
          }
        } else {
          _this.ariaOnChange(singleValueAsValue(newValue), {
            action: 'select-option',
            option: newValue,
            name: name
          });
          return;
        }
        if (blurInputOnSelect) {
          _this.blurInput();
        }
      };
      _this.removeValue = function (removedValue) {
        var isMulti = _this.props.isMulti;
        var selectValue = _this.state.selectValue;
        var candidate = _this.getOptionValue(removedValue);
        var newValueArray = selectValue.filter(function (i) {
          return _this.getOptionValue(i) !== candidate;
        });
        var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
        _this.onChange(newValue, {
          action: 'remove-value',
          removedValue: removedValue
        });
        _this.focusInput();
      };
      _this.clearValue = function () {
        var selectValue = _this.state.selectValue;
        _this.onChange(valueTernary(_this.props.isMulti, [], null), {
          action: 'clear',
          removedValues: selectValue
        });
      };
      _this.popValue = function () {
        var isMulti = _this.props.isMulti;
        var selectValue = _this.state.selectValue;
        var lastSelectedValue = selectValue[selectValue.length - 1];
        var newValueArray = selectValue.slice(0, selectValue.length - 1);
        var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
        if (lastSelectedValue) {
          _this.onChange(newValue, {
            action: 'pop-value',
            removedValue: lastSelectedValue
          });
        }
      };
      _this.getFocusedOptionId = function (focusedOption) {
        return getFocusedOptionId(_this.state.focusableOptionsWithIds, focusedOption);
      };
      _this.getFocusableOptionsWithIds = function () {
        return buildFocusableOptionsWithIds(buildCategorizedOptions(_this.props, _this.state.selectValue), _this.getElementId('option'));
      };
      _this.getValue = function () {
        return _this.state.selectValue;
      };
      _this.cx = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return classNames.apply(undefined, [_this.props.classNamePrefix].concat(args));
      };
      _this.getOptionLabel = function (data) {
        return getOptionLabel(_this.props, data);
      };
      _this.getOptionValue = function (data) {
        return getOptionValue(_this.props, data);
      };
      _this.getStyles = function (key, props) {
        var unstyled = _this.props.unstyled;
        var base = defaultStyles[key](props, unstyled);
        base.boxSizing = 'border-box';
        var custom = _this.props.styles[key];
        return custom ? custom(base, props) : base;
      };
      _this.getClassNames = function (key, props) {
        var _this$props$className, _this$props$className2;
        return (_this$props$className = (_this$props$className2 = _this.props.classNames)[key]) === null || _this$props$className === undefined ? undefined : _this$props$className.call(_this$props$className2, props);
      };
      _this.getElementId = function (element) {
        return "".concat(_this.state.instancePrefix, "-").concat(element);
      };
      _this.getComponents = function () {
        return defaultComponents(_this.props);
      };
      _this.buildCategorizedOptions = function () {
        return buildCategorizedOptions(_this.props, _this.state.selectValue);
      };
      _this.getCategorizedOptions = function () {
        return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
      };
      _this.buildFocusableOptions = function () {
        return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
      };
      _this.getFocusableOptions = function () {
        return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
      };
      _this.ariaOnChange = function (value, actionMeta) {
        _this.setState({
          ariaSelection: _objectSpread2({
            value: value
          }, actionMeta)
        });
      };
      _this.onMenuMouseDown = function (event) {
        if (event.button !== 0) {
          return;
        }
        event.stopPropagation();
        event.preventDefault();
        _this.focusInput();
      };
      _this.onMenuMouseMove = function (event) {
        _this.blockOptionHover = false;
      };
      _this.onControlMouseDown = function (event) {
        // Event captured by dropdown indicator
        if (event.defaultPrevented) {
          return;
        }
        var openMenuOnClick = _this.props.openMenuOnClick;
        if (!_this.state.isFocused) {
          if (openMenuOnClick) {
            _this.openAfterFocus = true;
          }
          _this.focusInput();
        } else if (!_this.props.menuIsOpen) {
          if (openMenuOnClick) {
            _this.openMenu('first');
          }
        } else {
          if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
            _this.onMenuClose();
          }
        }
        if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          event.preventDefault();
        }
      };
      _this.onDropdownIndicatorMouseDown = function (event) {
        // ignore mouse events that weren't triggered by the primary button
        if (event && event.type === 'mousedown' && event.button !== 0) {
          return;
        }
        if (_this.props.isDisabled) return;
        var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;
        _this.focusInput();
        if (menuIsOpen) {
          _this.setState({
            inputIsHiddenAfterUpdate: !isMulti
          });
          _this.onMenuClose();
        } else {
          _this.openMenu('first');
        }
        event.preventDefault();
      };
      _this.onClearIndicatorMouseDown = function (event) {
        // ignore mouse events that weren't triggered by the primary button
        if (event && event.type === 'mousedown' && event.button !== 0) {
          return;
        }
        _this.clearValue();
        event.preventDefault();
        _this.openAfterFocus = false;
        if (event.type === 'touchend') {
          _this.focusInput();
        } else {
          setTimeout(function () {
            return _this.focusInput();
          });
        }
      };
      _this.onScroll = function (event) {
        if (typeof _this.props.closeMenuOnScroll === 'boolean') {
          if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
            _this.props.onMenuClose();
          }
        } else if (typeof _this.props.closeMenuOnScroll === 'function') {
          if (_this.props.closeMenuOnScroll(event)) {
            _this.props.onMenuClose();
          }
        }
      };
      _this.onCompositionStart = function () {
        _this.isComposing = true;
      };
      _this.onCompositionEnd = function () {
        _this.isComposing = false;
      };
      _this.onTouchStart = function (_ref2) {
        var touches = _ref2.touches;
        var touch = touches && touches.item(0);
        if (!touch) {
          return;
        }
        _this.initialTouchX = touch.clientX;
        _this.initialTouchY = touch.clientY;
        _this.userIsDragging = false;
      };
      _this.onTouchMove = function (_ref3) {
        var touches = _ref3.touches;
        var touch = touches && touches.item(0);
        if (!touch) {
          return;
        }
        var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
        var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
        var moveThreshold = 5;
        _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
      };
      _this.onTouchEnd = function (event) {
        if (_this.userIsDragging) return;

        // close the menu if the user taps outside
        // we're checking on event.target here instead of event.currentTarget, because we want to assert information
        // on events on child elements, not the document (which we've attached this handler to).
        if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
          _this.blurInput();
        }

        // reset move vars
        _this.initialTouchX = 0;
        _this.initialTouchY = 0;
      };
      _this.onControlTouchEnd = function (event) {
        if (_this.userIsDragging) return;
        _this.onControlMouseDown(event);
      };
      _this.onClearIndicatorTouchEnd = function (event) {
        if (_this.userIsDragging) return;
        _this.onClearIndicatorMouseDown(event);
      };
      _this.onDropdownIndicatorTouchEnd = function (event) {
        if (_this.userIsDragging) return;
        _this.onDropdownIndicatorMouseDown(event);
      };
      _this.handleInputChange = function (event) {
        var prevInputValue = _this.props.inputValue;
        var inputValue = event.currentTarget.value;
        _this.setState({
          inputIsHiddenAfterUpdate: false
        });
        _this.onInputChange(inputValue, {
          action: 'input-change',
          prevInputValue: prevInputValue
        });
        if (!_this.props.menuIsOpen) {
          _this.onMenuOpen();
        }
      };
      _this.onInputFocus = function (event) {
        if (_this.props.onFocus) {
          _this.props.onFocus(event);
        }
        _this.setState({
          inputIsHiddenAfterUpdate: false,
          isFocused: true
        });
        if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
          _this.openMenu('first');
        }
        _this.openAfterFocus = false;
      };
      _this.onInputBlur = function (event) {
        var prevInputValue = _this.props.inputValue;
        if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
          _this.inputRef.focus();
          return;
        }
        if (_this.props.onBlur) {
          _this.props.onBlur(event);
        }
        _this.onInputChange('', {
          action: 'input-blur',
          prevInputValue: prevInputValue
        });
        _this.onMenuClose();
        _this.setState({
          focusedValue: null,
          isFocused: false
        });
      };
      _this.onOptionHover = function (focusedOption) {
        if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
          return;
        }
        var options = _this.getFocusableOptions();
        var focusedOptionIndex = options.indexOf(focusedOption);
        _this.setState({
          focusedOption: focusedOption,
          focusedOptionId: focusedOptionIndex > -1 ? _this.getFocusedOptionId(focusedOption) : null
        });
      };
      _this.shouldHideSelectedOptions = function () {
        return shouldHideSelectedOptions(_this.props);
      };
      _this.onValueInputFocus = function (e) {
        e.preventDefault();
        e.stopPropagation();
        _this.focus();
      };
      _this.onKeyDown = function (event) {
        var _this$props5 = _this.props,
          isMulti = _this$props5.isMulti,
          backspaceRemovesValue = _this$props5.backspaceRemovesValue,
          escapeClearsValue = _this$props5.escapeClearsValue,
          inputValue = _this$props5.inputValue,
          isClearable = _this$props5.isClearable,
          isDisabled = _this$props5.isDisabled,
          menuIsOpen = _this$props5.menuIsOpen,
          onKeyDown = _this$props5.onKeyDown,
          tabSelectsValue = _this$props5.tabSelectsValue,
          openMenuOnFocus = _this$props5.openMenuOnFocus;
        var _this$state = _this.state,
          focusedOption = _this$state.focusedOption,
          focusedValue = _this$state.focusedValue,
          selectValue = _this$state.selectValue;
        if (isDisabled) return;
        if (typeof onKeyDown === 'function') {
          onKeyDown(event);
          if (event.defaultPrevented) {
            return;
          }
        }

        // Block option hover events when the user has just pressed a key
        _this.blockOptionHover = true;
        switch (event.key) {
          case 'ArrowLeft':
            if (!isMulti || inputValue) return;
            _this.focusValue('previous');
            break;
          case 'ArrowRight':
            if (!isMulti || inputValue) return;
            _this.focusValue('next');
            break;
          case 'Delete':
          case 'Backspace':
            if (inputValue) return;
            if (focusedValue) {
              _this.removeValue(focusedValue);
            } else {
              if (!backspaceRemovesValue) return;
              if (isMulti) {
                _this.popValue();
              } else if (isClearable) {
                _this.clearValue();
              }
            }
            break;
          case 'Tab':
            if (_this.isComposing) return;
            if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption ||
            // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
              return;
            }
            _this.selectOption(focusedOption);
            break;
          case 'Enter':
            if (event.keyCode === 229) {
              // ignore the keydown event from an Input Method Editor(IME)
              // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
              break;
            }
            if (menuIsOpen) {
              if (!focusedOption) return;
              if (_this.isComposing) return;
              _this.selectOption(focusedOption);
              break;
            }
            return;
          case 'Escape':
            if (menuIsOpen) {
              _this.setState({
                inputIsHiddenAfterUpdate: false
              });
              _this.onInputChange('', {
                action: 'menu-close',
                prevInputValue: inputValue
              });
              _this.onMenuClose();
            } else if (isClearable && escapeClearsValue) {
              _this.clearValue();
            }
            break;
          case ' ':
            // space
            if (inputValue) {
              return;
            }
            if (!menuIsOpen) {
              _this.openMenu('first');
              break;
            }
            if (!focusedOption) return;
            _this.selectOption(focusedOption);
            break;
          case 'ArrowUp':
            if (menuIsOpen) {
              _this.focusOption('up');
            } else {
              _this.openMenu('last');
            }
            break;
          case 'ArrowDown':
            if (menuIsOpen) {
              _this.focusOption('down');
            } else {
              _this.openMenu('first');
            }
            break;
          case 'PageUp':
            if (!menuIsOpen) return;
            _this.focusOption('pageup');
            break;
          case 'PageDown':
            if (!menuIsOpen) return;
            _this.focusOption('pagedown');
            break;
          case 'Home':
            if (!menuIsOpen) return;
            _this.focusOption('first');
            break;
          case 'End':
            if (!menuIsOpen) return;
            _this.focusOption('last');
            break;
          default:
            return;
        }
        event.preventDefault();
      };
      _this.state.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);
      _this.state.selectValue = cleanValue(_props.value);
      // Set focusedOption if menuIsOpen is set on init (e.g. defaultMenuIsOpen)
      if (_props.menuIsOpen && _this.state.selectValue.length) {
        var focusableOptionsWithIds = _this.getFocusableOptionsWithIds();
        var focusableOptions = _this.buildFocusableOptions();
        var optionIndex = focusableOptions.indexOf(_this.state.selectValue[0]);
        _this.state.focusableOptionsWithIds = focusableOptionsWithIds;
        _this.state.focusedOption = focusableOptions[optionIndex];
        _this.state.focusedOptionId = getFocusedOptionId(focusableOptionsWithIds, focusableOptions[optionIndex]);
      }
      return _this;
    }
    _createClass(Select, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.startListeningComposition();
        this.startListeningToTouch();
        if (this.props.closeMenuOnScroll && document && document.addEventListener) {
          // Listen to all scroll events, and filter them out inside of 'onScroll'
          document.addEventListener('scroll', this.onScroll, true);
        }
        if (this.props.autoFocus) {
          this.focusInput();
        }

        // Scroll focusedOption into view if menuIsOpen is set on mount (e.g. defaultMenuIsOpen)
        if (this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef) {
          scrollIntoView(this.menuListRef, this.focusedOptionRef);
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this$props6 = this.props,
          isDisabled = _this$props6.isDisabled,
          menuIsOpen = _this$props6.menuIsOpen;
        var isFocused = this.state.isFocused;
        if (
        // ensure focus is restored correctly when the control becomes enabled
        isFocused && !isDisabled && prevProps.isDisabled ||
        // ensure focus is on the Input when the menu opens
        isFocused && menuIsOpen && !prevProps.menuIsOpen) {
          this.focusInput();
        }
        if (isFocused && isDisabled && !prevProps.isDisabled) {
          // ensure select state gets blurred in case Select is programmatically disabled while focused
          // eslint-disable-next-line react/no-did-update-set-state
          this.setState({
            isFocused: false
          }, this.onMenuClose);
        } else if (!isFocused && !isDisabled && prevProps.isDisabled && this.inputRef === document.activeElement) {
          // ensure select state gets focused in case Select is programatically re-enabled while focused (Firefox)
          // eslint-disable-next-line react/no-did-update-set-state
          this.setState({
            isFocused: true
          });
        }

        // scroll the focused option into view if necessary
        if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
          scrollIntoView(this.menuListRef, this.focusedOptionRef);
          this.scrollToFocusedOptionOnUpdate = false;
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.stopListeningComposition();
        this.stopListeningToTouch();
        document.removeEventListener('scroll', this.onScroll, true);
      }

      // ==============================
      // Consumer Handlers
      // ==============================
    }, {
      key: "onMenuOpen",
      value: function onMenuOpen() {
        this.props.onMenuOpen();
      }
    }, {
      key: "onMenuClose",
      value: function onMenuClose() {
        this.onInputChange('', {
          action: 'menu-close',
          prevInputValue: this.props.inputValue
        });
        this.props.onMenuClose();
      }
    }, {
      key: "onInputChange",
      value: function onInputChange(newValue, actionMeta) {
        this.props.onInputChange(newValue, actionMeta);
      }

      // ==============================
      // Methods
      // ==============================
    }, {
      key: "focusInput",
      value: function focusInput() {
        if (!this.inputRef) return;
        this.inputRef.focus();
      }
    }, {
      key: "blurInput",
      value: function blurInput() {
        if (!this.inputRef) return;
        this.inputRef.blur();
      }

      // aliased for consumers
    }, {
      key: "openMenu",
      value: function openMenu(focusOption) {
        var _this2 = this;
        var _this$state2 = this.state,
          selectValue = _this$state2.selectValue,
          isFocused = _this$state2.isFocused;
        var focusableOptions = this.buildFocusableOptions();
        var openAtIndex = focusOption === 'first' ? 0 : focusableOptions.length - 1;
        if (!this.props.isMulti) {
          var selectedIndex = focusableOptions.indexOf(selectValue[0]);
          if (selectedIndex > -1) {
            openAtIndex = selectedIndex;
          }
        }

        // only scroll if the menu isn't already open
        this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
        this.setState({
          inputIsHiddenAfterUpdate: false,
          focusedValue: null,
          focusedOption: focusableOptions[openAtIndex],
          focusedOptionId: this.getFocusedOptionId(focusableOptions[openAtIndex])
        }, function () {
          return _this2.onMenuOpen();
        });
      }
    }, {
      key: "focusValue",
      value: function focusValue(direction) {
        var _this$state3 = this.state,
          selectValue = _this$state3.selectValue,
          focusedValue = _this$state3.focusedValue;

        // Only multiselects support value focusing
        if (!this.props.isMulti) return;
        this.setState({
          focusedOption: null
        });
        var focusedIndex = selectValue.indexOf(focusedValue);
        if (!focusedValue) {
          focusedIndex = -1;
        }
        var lastIndex = selectValue.length - 1;
        var nextFocus = -1;
        if (!selectValue.length) return;
        switch (direction) {
          case 'previous':
            if (focusedIndex === 0) {
              // don't cycle from the start to the end
              nextFocus = 0;
            } else if (focusedIndex === -1) {
              // if nothing is focused, focus the last value first
              nextFocus = lastIndex;
            } else {
              nextFocus = focusedIndex - 1;
            }
            break;
          case 'next':
            if (focusedIndex > -1 && focusedIndex < lastIndex) {
              nextFocus = focusedIndex + 1;
            }
            break;
        }
        this.setState({
          inputIsHidden: nextFocus !== -1,
          focusedValue: selectValue[nextFocus]
        });
      }
    }, {
      key: "focusOption",
      value: function focusOption() {
        var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
        var pageSize = this.props.pageSize;
        var focusedOption = this.state.focusedOption;
        var options = this.getFocusableOptions();
        if (!options.length) return;
        var nextFocus = 0; // handles 'first'
        var focusedIndex = options.indexOf(focusedOption);
        if (!focusedOption) {
          focusedIndex = -1;
        }
        if (direction === 'up') {
          nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
        } else if (direction === 'down') {
          nextFocus = (focusedIndex + 1) % options.length;
        } else if (direction === 'pageup') {
          nextFocus = focusedIndex - pageSize;
          if (nextFocus < 0) nextFocus = 0;
        } else if (direction === 'pagedown') {
          nextFocus = focusedIndex + pageSize;
          if (nextFocus > options.length - 1) nextFocus = options.length - 1;
        } else if (direction === 'last') {
          nextFocus = options.length - 1;
        }
        this.scrollToFocusedOptionOnUpdate = true;
        this.setState({
          focusedOption: options[nextFocus],
          focusedValue: null,
          focusedOptionId: this.getFocusedOptionId(options[nextFocus])
        });
      }
    }, {
      key: "getTheme",
      value:
      // ==============================
      // Getters
      // ==============================

      function getTheme() {
        // Use the default theme if there are no customisations.
        if (!this.props.theme) {
          return defaultTheme;
        }
        // If the theme prop is a function, assume the function
        // knows how to merge the passed-in default theme with
        // its own modifications.
        if (typeof this.props.theme === 'function') {
          return this.props.theme(defaultTheme);
        }
        // Otherwise, if a plain theme object was passed in,
        // overlay it with the default theme.
        return _objectSpread2(_objectSpread2({}, defaultTheme), this.props.theme);
      }
    }, {
      key: "getCommonProps",
      value: function getCommonProps() {
        var clearValue = this.clearValue,
          cx = this.cx,
          getStyles = this.getStyles,
          getClassNames = this.getClassNames,
          getValue = this.getValue,
          selectOption = this.selectOption,
          setValue = this.setValue,
          props = this.props;
        var isMulti = props.isMulti,
          isRtl = props.isRtl,
          options = props.options;
        var hasValue = this.hasValue();
        return {
          clearValue: clearValue,
          cx: cx,
          getStyles: getStyles,
          getClassNames: getClassNames,
          getValue: getValue,
          hasValue: hasValue,
          isMulti: isMulti,
          isRtl: isRtl,
          options: options,
          selectOption: selectOption,
          selectProps: props,
          setValue: setValue,
          theme: this.getTheme()
        };
      }
    }, {
      key: "hasValue",
      value: function hasValue() {
        var selectValue = this.state.selectValue;
        return selectValue.length > 0;
      }
    }, {
      key: "hasOptions",
      value: function hasOptions() {
        return !!this.getFocusableOptions().length;
      }
    }, {
      key: "isClearable",
      value: function isClearable() {
        var _this$props7 = this.props,
          isClearable = _this$props7.isClearable,
          isMulti = _this$props7.isMulti;

        // single select, by default, IS NOT clearable
        // multi select, by default, IS clearable
        if (isClearable === undefined) return isMulti;
        return isClearable;
      }
    }, {
      key: "isOptionDisabled",
      value: function isOptionDisabled(option, selectValue) {
        return _isOptionDisabled(this.props, option, selectValue);
      }
    }, {
      key: "isOptionSelected",
      value: function isOptionSelected(option, selectValue) {
        return _isOptionSelected(this.props, option, selectValue);
      }
    }, {
      key: "filterOption",
      value: function filterOption(option, inputValue) {
        return _filterOption(this.props, option, inputValue);
      }
    }, {
      key: "formatOptionLabel",
      value: function formatOptionLabel(data, context) {
        if (typeof this.props.formatOptionLabel === 'function') {
          var _inputValue = this.props.inputValue;
          var _selectValue = this.state.selectValue;
          return this.props.formatOptionLabel(data, {
            context: context,
            inputValue: _inputValue,
            selectValue: _selectValue
          });
        } else {
          return this.getOptionLabel(data);
        }
      }
    }, {
      key: "formatGroupLabel",
      value: function formatGroupLabel(data) {
        return this.props.formatGroupLabel(data);
      }

      // ==============================
      // Mouse Handlers
      // ==============================
    }, {
      key: "startListeningComposition",
      value:
      // ==============================
      // Composition Handlers
      // ==============================

      function startListeningComposition() {
        if (document && document.addEventListener) {
          document.addEventListener('compositionstart', this.onCompositionStart, false);
          document.addEventListener('compositionend', this.onCompositionEnd, false);
        }
      }
    }, {
      key: "stopListeningComposition",
      value: function stopListeningComposition() {
        if (document && document.removeEventListener) {
          document.removeEventListener('compositionstart', this.onCompositionStart);
          document.removeEventListener('compositionend', this.onCompositionEnd);
        }
      }
    }, {
      key: "startListeningToTouch",
      value:
      // ==============================
      // Touch Handlers
      // ==============================

      function startListeningToTouch() {
        if (document && document.addEventListener) {
          document.addEventListener('touchstart', this.onTouchStart, false);
          document.addEventListener('touchmove', this.onTouchMove, false);
          document.addEventListener('touchend', this.onTouchEnd, false);
        }
      }
    }, {
      key: "stopListeningToTouch",
      value: function stopListeningToTouch() {
        if (document && document.removeEventListener) {
          document.removeEventListener('touchstart', this.onTouchStart);
          document.removeEventListener('touchmove', this.onTouchMove);
          document.removeEventListener('touchend', this.onTouchEnd);
        }
      }
    }, {
      key: "renderInput",
      value:
      // ==============================
      // Renderers
      // ==============================
      function renderInput() {
        var _this$props8 = this.props,
          isDisabled = _this$props8.isDisabled,
          isSearchable = _this$props8.isSearchable,
          inputId = _this$props8.inputId,
          inputValue = _this$props8.inputValue,
          tabIndex = _this$props8.tabIndex,
          form = _this$props8.form,
          menuIsOpen = _this$props8.menuIsOpen,
          required = _this$props8.required;
        var _this$getComponents = this.getComponents(),
          Input = _this$getComponents.Input;
        var _this$state4 = this.state,
          inputIsHidden = _this$state4.inputIsHidden,
          ariaSelection = _this$state4.ariaSelection;
        var commonProps = this.commonProps;
        var id = inputId || this.getElementId('input');

        // aria attributes makes the JSX "noisy", separated for clarity
        var ariaAttributes = _objectSpread2(_objectSpread2(_objectSpread2({
          'aria-autocomplete': 'list',
          'aria-expanded': menuIsOpen,
          'aria-haspopup': true,
          'aria-errormessage': this.props['aria-errormessage'],
          'aria-invalid': this.props['aria-invalid'],
          'aria-label': this.props['aria-label'],
          'aria-labelledby': this.props['aria-labelledby'],
          'aria-required': required,
          role: 'combobox',
          'aria-activedescendant': this.isAppleDevice ? undefined : this.state.focusedOptionId || ''
        }, menuIsOpen && {
          'aria-controls': this.getElementId('listbox')
        }), !isSearchable && {
          'aria-readonly': true
        }), this.hasValue() ? (ariaSelection === null || ariaSelection === undefined ? undefined : ariaSelection.action) === 'initial-input-focus' && {
          'aria-describedby': this.getElementId('live-region')
        } : {
          'aria-describedby': this.getElementId('placeholder')
        });
        if (!isSearchable) {
          // use a dummy input to maintain focus/blur functionality
          return /*#__PURE__*/React__namespace.createElement(DummyInput, _extends({
            id: id,
            innerRef: this.getInputRef,
            onBlur: this.onInputBlur,
            onChange: noop,
            onFocus: this.onInputFocus,
            disabled: isDisabled,
            tabIndex: tabIndex,
            inputMode: "none",
            form: form,
            value: ""
          }, ariaAttributes));
        }
        return /*#__PURE__*/React__namespace.createElement(Input, _extends({}, commonProps, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: id,
          innerRef: this.getInputRef,
          isDisabled: isDisabled,
          isHidden: inputIsHidden,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: tabIndex,
          form: form,
          type: "text",
          value: inputValue
        }, ariaAttributes));
      }
    }, {
      key: "renderPlaceholderOrValue",
      value: function renderPlaceholderOrValue() {
        var _this3 = this;
        var _this$getComponents2 = this.getComponents(),
          MultiValue = _this$getComponents2.MultiValue,
          MultiValueContainer = _this$getComponents2.MultiValueContainer,
          MultiValueLabel = _this$getComponents2.MultiValueLabel,
          MultiValueRemove = _this$getComponents2.MultiValueRemove,
          SingleValue = _this$getComponents2.SingleValue,
          Placeholder = _this$getComponents2.Placeholder;
        var commonProps = this.commonProps;
        var _this$props9 = this.props,
          controlShouldRenderValue = _this$props9.controlShouldRenderValue,
          isDisabled = _this$props9.isDisabled,
          isMulti = _this$props9.isMulti,
          inputValue = _this$props9.inputValue,
          placeholder = _this$props9.placeholder;
        var _this$state5 = this.state,
          selectValue = _this$state5.selectValue,
          focusedValue = _this$state5.focusedValue,
          isFocused = _this$state5.isFocused;
        if (!this.hasValue() || !controlShouldRenderValue) {
          return inputValue ? null : /*#__PURE__*/React__namespace.createElement(Placeholder, _extends({}, commonProps, {
            key: "placeholder",
            isDisabled: isDisabled,
            isFocused: isFocused,
            innerProps: {
              id: this.getElementId('placeholder')
            }
          }), placeholder);
        }
        if (isMulti) {
          return selectValue.map(function (opt, index) {
            var isOptionFocused = opt === focusedValue;
            var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
            return /*#__PURE__*/React__namespace.createElement(MultiValue, _extends({}, commonProps, {
              components: {
                Container: MultiValueContainer,
                Label: MultiValueLabel,
                Remove: MultiValueRemove
              },
              isFocused: isOptionFocused,
              isDisabled: isDisabled,
              key: key,
              index: index,
              removeProps: {
                onClick: function onClick() {
                  return _this3.removeValue(opt);
                },
                onTouchEnd: function onTouchEnd() {
                  return _this3.removeValue(opt);
                },
                onMouseDown: function onMouseDown(e) {
                  e.preventDefault();
                }
              },
              data: opt
            }), _this3.formatOptionLabel(opt, 'value'));
          });
        }
        if (inputValue) {
          return null;
        }
        var singleValue = selectValue[0];
        return /*#__PURE__*/React__namespace.createElement(SingleValue, _extends({}, commonProps, {
          data: singleValue,
          isDisabled: isDisabled
        }), this.formatOptionLabel(singleValue, 'value'));
      }
    }, {
      key: "renderClearIndicator",
      value: function renderClearIndicator() {
        var _this$getComponents3 = this.getComponents(),
          ClearIndicator = _this$getComponents3.ClearIndicator;
        var commonProps = this.commonProps;
        var _this$props10 = this.props,
          isDisabled = _this$props10.isDisabled,
          isLoading = _this$props10.isLoading;
        var isFocused = this.state.isFocused;
        if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
          return null;
        }
        var innerProps = {
          onMouseDown: this.onClearIndicatorMouseDown,
          onTouchEnd: this.onClearIndicatorTouchEnd,
          'aria-hidden': 'true'
        };
        return /*#__PURE__*/React__namespace.createElement(ClearIndicator, _extends({}, commonProps, {
          innerProps: innerProps,
          isFocused: isFocused
        }));
      }
    }, {
      key: "renderLoadingIndicator",
      value: function renderLoadingIndicator() {
        var _this$getComponents4 = this.getComponents(),
          LoadingIndicator = _this$getComponents4.LoadingIndicator;
        var commonProps = this.commonProps;
        var _this$props11 = this.props,
          isDisabled = _this$props11.isDisabled,
          isLoading = _this$props11.isLoading;
        var isFocused = this.state.isFocused;
        if (!LoadingIndicator || !isLoading) return null;
        var innerProps = {
          'aria-hidden': 'true'
        };
        return /*#__PURE__*/React__namespace.createElement(LoadingIndicator, _extends({}, commonProps, {
          innerProps: innerProps,
          isDisabled: isDisabled,
          isFocused: isFocused
        }));
      }
    }, {
      key: "renderIndicatorSeparator",
      value: function renderIndicatorSeparator() {
        var _this$getComponents5 = this.getComponents(),
          DropdownIndicator = _this$getComponents5.DropdownIndicator,
          IndicatorSeparator = _this$getComponents5.IndicatorSeparator;

        // separator doesn't make sense without the dropdown indicator
        if (!DropdownIndicator || !IndicatorSeparator) return null;
        var commonProps = this.commonProps;
        var isDisabled = this.props.isDisabled;
        var isFocused = this.state.isFocused;
        return /*#__PURE__*/React__namespace.createElement(IndicatorSeparator, _extends({}, commonProps, {
          isDisabled: isDisabled,
          isFocused: isFocused
        }));
      }
    }, {
      key: "renderDropdownIndicator",
      value: function renderDropdownIndicator() {
        var _this$getComponents6 = this.getComponents(),
          DropdownIndicator = _this$getComponents6.DropdownIndicator;
        if (!DropdownIndicator) return null;
        var commonProps = this.commonProps;
        var isDisabled = this.props.isDisabled;
        var isFocused = this.state.isFocused;
        var innerProps = {
          onMouseDown: this.onDropdownIndicatorMouseDown,
          onTouchEnd: this.onDropdownIndicatorTouchEnd,
          'aria-hidden': 'true'
        };
        return /*#__PURE__*/React__namespace.createElement(DropdownIndicator, _extends({}, commonProps, {
          innerProps: innerProps,
          isDisabled: isDisabled,
          isFocused: isFocused
        }));
      }
    }, {
      key: "renderMenu",
      value: function renderMenu() {
        var _this4 = this;
        var _this$getComponents7 = this.getComponents(),
          Group = _this$getComponents7.Group,
          GroupHeading = _this$getComponents7.GroupHeading,
          Menu = _this$getComponents7.Menu,
          MenuList = _this$getComponents7.MenuList,
          MenuPortal = _this$getComponents7.MenuPortal,
          LoadingMessage = _this$getComponents7.LoadingMessage,
          NoOptionsMessage = _this$getComponents7.NoOptionsMessage,
          Option = _this$getComponents7.Option;
        var commonProps = this.commonProps;
        var focusedOption = this.state.focusedOption;
        var _this$props12 = this.props,
          captureMenuScroll = _this$props12.captureMenuScroll,
          inputValue = _this$props12.inputValue,
          isLoading = _this$props12.isLoading,
          loadingMessage = _this$props12.loadingMessage,
          minMenuHeight = _this$props12.minMenuHeight,
          maxMenuHeight = _this$props12.maxMenuHeight,
          menuIsOpen = _this$props12.menuIsOpen,
          menuPlacement = _this$props12.menuPlacement,
          menuPosition = _this$props12.menuPosition,
          menuPortalTarget = _this$props12.menuPortalTarget,
          menuShouldBlockScroll = _this$props12.menuShouldBlockScroll,
          menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView,
          noOptionsMessage = _this$props12.noOptionsMessage,
          onMenuScrollToTop = _this$props12.onMenuScrollToTop,
          onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
        if (!menuIsOpen) return null;

        // TODO: Internal Option Type here
        var render = function render(props, id) {
          var type = props.type,
            data = props.data,
            isDisabled = props.isDisabled,
            isSelected = props.isSelected,
            label = props.label,
            value = props.value;
          var isFocused = focusedOption === data;
          var onHover = isDisabled ? undefined : function () {
            return _this4.onOptionHover(data);
          };
          var onSelect = isDisabled ? undefined : function () {
            return _this4.selectOption(data);
          };
          var optionId = "".concat(_this4.getElementId('option'), "-").concat(id);
          var innerProps = {
            id: optionId,
            onClick: onSelect,
            onMouseMove: onHover,
            onMouseOver: onHover,
            tabIndex: -1,
            role: 'option',
            'aria-selected': _this4.isAppleDevice ? undefined : isSelected // is not supported on Apple devices
          };

          return /*#__PURE__*/React__namespace.createElement(Option, _extends({}, commonProps, {
            innerProps: innerProps,
            data: data,
            isDisabled: isDisabled,
            isSelected: isSelected,
            key: optionId,
            label: label,
            type: type,
            value: value,
            isFocused: isFocused,
            innerRef: isFocused ? _this4.getFocusedOptionRef : undefined
          }), _this4.formatOptionLabel(props.data, 'menu'));
        };
        var menuUI;
        if (this.hasOptions()) {
          menuUI = this.getCategorizedOptions().map(function (item) {
            if (item.type === 'group') {
              var _data = item.data,
                options = item.options,
                groupIndex = item.index;
              var groupId = "".concat(_this4.getElementId('group'), "-").concat(groupIndex);
              var headingId = "".concat(groupId, "-heading");
              return /*#__PURE__*/React__namespace.createElement(Group, _extends({}, commonProps, {
                key: groupId,
                data: _data,
                options: options,
                Heading: GroupHeading,
                headingProps: {
                  id: headingId,
                  data: item.data
                },
                label: _this4.formatGroupLabel(item.data)
              }), item.options.map(function (option) {
                return render(option, "".concat(groupIndex, "-").concat(option.index));
              }));
            } else if (item.type === 'option') {
              return render(item, "".concat(item.index));
            }
          });
        } else if (isLoading) {
          var message = loadingMessage({
            inputValue: inputValue
          });
          if (message === null) return null;
          menuUI = /*#__PURE__*/React__namespace.createElement(LoadingMessage, commonProps, message);
        } else {
          var _message = noOptionsMessage({
            inputValue: inputValue
          });
          if (_message === null) return null;
          menuUI = /*#__PURE__*/React__namespace.createElement(NoOptionsMessage, commonProps, _message);
        }
        var menuPlacementProps = {
          minMenuHeight: minMenuHeight,
          maxMenuHeight: maxMenuHeight,
          menuPlacement: menuPlacement,
          menuPosition: menuPosition,
          menuShouldScrollIntoView: menuShouldScrollIntoView
        };
        var menuElement = /*#__PURE__*/React__namespace.createElement(MenuPlacer, _extends({}, commonProps, menuPlacementProps), function (_ref4) {
          var ref = _ref4.ref,
            _ref4$placerProps = _ref4.placerProps,
            placement = _ref4$placerProps.placement,
            maxHeight = _ref4$placerProps.maxHeight;
          return /*#__PURE__*/React__namespace.createElement(Menu, _extends({}, commonProps, menuPlacementProps, {
            innerRef: ref,
            innerProps: {
              onMouseDown: _this4.onMenuMouseDown,
              onMouseMove: _this4.onMenuMouseMove
            },
            isLoading: isLoading,
            placement: placement
          }), /*#__PURE__*/React__namespace.createElement(ScrollManager, {
            captureEnabled: captureMenuScroll,
            onTopArrive: onMenuScrollToTop,
            onBottomArrive: onMenuScrollToBottom,
            lockEnabled: menuShouldBlockScroll
          }, function (scrollTargetRef) {
            return /*#__PURE__*/React__namespace.createElement(MenuList, _extends({}, commonProps, {
              innerRef: function innerRef(instance) {
                _this4.getMenuListRef(instance);
                scrollTargetRef(instance);
              },
              innerProps: {
                role: 'listbox',
                'aria-multiselectable': commonProps.isMulti,
                id: _this4.getElementId('listbox')
              },
              isLoading: isLoading,
              maxHeight: maxHeight,
              focusedOption: focusedOption
            }), menuUI);
          }));
        });

        // positioning behaviour is almost identical for portalled and fixed,
        // so we use the same component. the actual portalling logic is forked
        // within the component based on `menuPosition`
        return menuPortalTarget || menuPosition === 'fixed' ? /*#__PURE__*/React__namespace.createElement(MenuPortal, _extends({}, commonProps, {
          appendTo: menuPortalTarget,
          controlElement: this.controlRef,
          menuPlacement: menuPlacement,
          menuPosition: menuPosition
        }), menuElement) : menuElement;
      }
    }, {
      key: "renderFormField",
      value: function renderFormField() {
        var _this5 = this;
        var _this$props13 = this.props,
          delimiter = _this$props13.delimiter,
          isDisabled = _this$props13.isDisabled,
          isMulti = _this$props13.isMulti,
          name = _this$props13.name,
          required = _this$props13.required;
        var selectValue = this.state.selectValue;
        if (required && !this.hasValue() && !isDisabled) {
          return /*#__PURE__*/React__namespace.createElement(RequiredInput$1, {
            name: name,
            onFocus: this.onValueInputFocus
          });
        }
        if (!name || isDisabled) return;
        if (isMulti) {
          if (delimiter) {
            var value = selectValue.map(function (opt) {
              return _this5.getOptionValue(opt);
            }).join(delimiter);
            return /*#__PURE__*/React__namespace.createElement("input", {
              name: name,
              type: "hidden",
              value: value
            });
          } else {
            var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
              return /*#__PURE__*/React__namespace.createElement("input", {
                key: "i-".concat(i),
                name: name,
                type: "hidden",
                value: _this5.getOptionValue(opt)
              });
            }) : /*#__PURE__*/React__namespace.createElement("input", {
              name: name,
              type: "hidden",
              value: ""
            });
            return /*#__PURE__*/React__namespace.createElement("div", null, input);
          }
        } else {
          var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';
          return /*#__PURE__*/React__namespace.createElement("input", {
            name: name,
            type: "hidden",
            value: _value
          });
        }
      }
    }, {
      key: "renderLiveRegion",
      value: function renderLiveRegion() {
        var commonProps = this.commonProps;
        var _this$state6 = this.state,
          ariaSelection = _this$state6.ariaSelection,
          focusedOption = _this$state6.focusedOption,
          focusedValue = _this$state6.focusedValue,
          isFocused = _this$state6.isFocused,
          selectValue = _this$state6.selectValue;
        var focusableOptions = this.getFocusableOptions();
        return /*#__PURE__*/React__namespace.createElement(LiveRegion$1, _extends({}, commonProps, {
          id: this.getElementId('live-region'),
          ariaSelection: ariaSelection,
          focusedOption: focusedOption,
          focusedValue: focusedValue,
          isFocused: isFocused,
          selectValue: selectValue,
          focusableOptions: focusableOptions,
          isAppleDevice: this.isAppleDevice
        }));
      }
    }, {
      key: "render",
      value: function render() {
        var _this$getComponents8 = this.getComponents(),
          Control = _this$getComponents8.Control,
          IndicatorsContainer = _this$getComponents8.IndicatorsContainer,
          SelectContainer = _this$getComponents8.SelectContainer,
          ValueContainer = _this$getComponents8.ValueContainer;
        var _this$props14 = this.props,
          className = _this$props14.className,
          id = _this$props14.id,
          isDisabled = _this$props14.isDisabled,
          menuIsOpen = _this$props14.menuIsOpen;
        var isFocused = this.state.isFocused;
        var commonProps = this.commonProps = this.getCommonProps();
        return /*#__PURE__*/React__namespace.createElement(SelectContainer, _extends({}, commonProps, {
          className: className,
          innerProps: {
            id: id,
            onKeyDown: this.onKeyDown
          },
          isDisabled: isDisabled,
          isFocused: isFocused
        }), this.renderLiveRegion(), /*#__PURE__*/React__namespace.createElement(Control, _extends({}, commonProps, {
          innerRef: this.getControlRef,
          innerProps: {
            onMouseDown: this.onControlMouseDown,
            onTouchEnd: this.onControlTouchEnd
          },
          isDisabled: isDisabled,
          isFocused: isFocused,
          menuIsOpen: menuIsOpen
        }), /*#__PURE__*/React__namespace.createElement(ValueContainer, _extends({}, commonProps, {
          isDisabled: isDisabled
        }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/React__namespace.createElement(IndicatorsContainer, _extends({}, commonProps, {
          isDisabled: isDisabled
        }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        var prevProps = state.prevProps,
          clearFocusValueOnUpdate = state.clearFocusValueOnUpdate,
          inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate,
          ariaSelection = state.ariaSelection,
          isFocused = state.isFocused,
          prevWasFocused = state.prevWasFocused,
          instancePrefix = state.instancePrefix;
        var options = props.options,
          value = props.value,
          menuIsOpen = props.menuIsOpen,
          inputValue = props.inputValue,
          isMulti = props.isMulti;
        var selectValue = cleanValue(value);
        var newMenuOptionsState = {};
        if (prevProps && (value !== prevProps.value || options !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
          var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
          var focusableOptionsWithIds = menuIsOpen ? buildFocusableOptionsWithIds(buildCategorizedOptions(props, selectValue), "".concat(instancePrefix, "-option")) : [];
          var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
          var focusedOption = getNextFocusedOption(state, focusableOptions);
          var focusedOptionId = getFocusedOptionId(focusableOptionsWithIds, focusedOption);
          newMenuOptionsState = {
            selectValue: selectValue,
            focusedOption: focusedOption,
            focusedOptionId: focusedOptionId,
            focusableOptionsWithIds: focusableOptionsWithIds,
            focusedValue: focusedValue,
            clearFocusValueOnUpdate: false
          };
        }
        // some updates should toggle the state of the input visibility
        var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
          inputIsHidden: inputIsHiddenAfterUpdate,
          inputIsHiddenAfterUpdate: undefined
        } : {};
        var newAriaSelection = ariaSelection;
        var hasKeptFocus = isFocused && prevWasFocused;
        if (isFocused && !hasKeptFocus) {
          // If `value` or `defaultValue` props are not empty then announce them
          // when the Select is initially focused
          newAriaSelection = {
            value: valueTernary(isMulti, selectValue, selectValue[0] || null),
            options: selectValue,
            action: 'initial-input-focus'
          };
          hasKeptFocus = !prevWasFocused;
        }

        // If the 'initial-input-focus' action has been set already
        // then reset the ariaSelection to null
        if ((ariaSelection === null || ariaSelection === undefined ? undefined : ariaSelection.action) === 'initial-input-focus') {
          newAriaSelection = null;
        }
        return _objectSpread2(_objectSpread2(_objectSpread2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
          prevProps: props,
          ariaSelection: newAriaSelection,
          prevWasFocused: hasKeptFocus
        });
      }
    }]);
    return Select;
  }(React.Component);
  Select.defaultProps = defaultProps;

  var StateManagedSelect = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var baseSelectProps = useStateManager(props);
    return /*#__PURE__*/React__namespace.createElement(Select, _extends({
      ref: ref
    }, baseSelectProps));
  });
  var StateManagedSelect$1 = StateManagedSelect;

  const api = new adminjs.ApiClient();
  const FilteredModules = ({
    property,
    onChange,
    record
  }) => {
    const [options, setOptions] = React.useState([]);
    const [selected, setSelected] = React.useState([]);
    React.useEffect(() => {
      const fetchModules = async () => {
        const params = new URLSearchParams({
          perPage: '100'
        });
        const res = await api.resourceAction({
          resourceId: 'module',
          actionName: 'list',
          query: params.toString()
        });
        const records = res.data.records || [];
        const formattedOptions = records.map(mod => ({
          value: mod.id,
          label: mod.params.title || mod.id
        }));
        setOptions(formattedOptions);

        // ✅ Only set selected if it's still empty (first load)
        if (selected.length === 0) {
          const existingModuleIds = record?.params?.[property.name] || [];
          const preSelected = formattedOptions.filter(opt => existingModuleIds.includes(opt.value));
          setSelected(preSelected);
        }
      };
      fetchModules();
    }, []);
    const handleChange = selectedOptions => {
      const selectedValues = selectedOptions.map(opt => opt.value);
      setSelected(selectedOptions);
      onChange(property.name, selectedValues);
    };
    return /*#__PURE__*/React__namespace.default.createElement("div", null, /*#__PURE__*/React__namespace.default.createElement("label", {
      style: {
        display: 'block',
        marginBottom: 5
      }
    }, property.label || 'Modules'), /*#__PURE__*/React__namespace.default.createElement(StateManagedSelect$1, {
      isMulti: true,
      options: options,
      value: selected,
      onChange: handleChange,
      placeholder: "Search & select modules..."
    }));
  };

  AdminJS.UserComponents = {};
  AdminJS.UserComponents.UploadImage = UploadImage;
  AdminJS.UserComponents.UploadVideo = UploadVideo;
  AdminJS.UserComponents.FilteredModules = FilteredModules;

})(React, ReactDOM, AdminJS);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvY29tcG9uZW50cy9VcGxvYWRJbWFnZS50c3giLCIuLi9zcmMvY29tcG9uZW50cy9VcGxvYWRWaWRlby50c3giLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJpbWl0aXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJvcGVydHlLZXkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3QvdXNlU3RhdGVNYW5hZ2VyLTdlMWU4NDg5LmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc2hlZXQvZGlzdC9lbW90aW9uLXNoZWV0LmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL0VudW0uanMiLCIuLi9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9VdGlsaXR5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3N0eWxpcy9zcmMvVG9rZW5pemVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3N0eWxpcy9zcmMvUGFyc2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3N0eWxpcy9zcmMvU2VyaWFsaXplci5qcyIsIi4uL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL01pZGRsZXdhcmUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L2Vtb3Rpb24tbWVtb2l6ZS5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vY2FjaGUvZGlzdC9lbW90aW9uLWNhY2hlLmJyb3dzZXIuZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3Mvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3V0aWxzL2Rpc3QvZW1vdGlvbi11dGlscy5icm93c2VyLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9oYXNoL2Rpc3QvZW1vdGlvbi1oYXNoLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91bml0bGVzcy9kaXN0L2Vtb3Rpb24tdW5pdGxlc3MuZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3NlcmlhbGl6ZS9kaXN0L2Vtb3Rpb24tc2VyaWFsaXplLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrcy9kaXN0L2Vtb3Rpb24tdXNlLWluc2VydGlvbi1lZmZlY3Qtd2l0aC1mYWxsYmFja3MuYnJvd3Nlci5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vcmVhY3QvZGlzdC9lbW90aW9uLWVsZW1lbnQtZjBkZTk2OGUuYnJvd3Nlci5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vcmVhY3QvZGlzdC9lbW90aW9uLXJlYWN0LmJyb3dzZXIuZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvdXRpbHMvZGlzdC9mbG9hdGluZy11aS51dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvQGZsb2F0aW5nLXVpL3V0aWxzL2Rpc3QvZmxvYXRpbmctdWkudXRpbHMuZG9tLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvZG9tL2Rpc3QvZmxvYXRpbmctdWkuZG9tLm1qcyIsIi4uL25vZGVfbW9kdWxlcy91c2UtaXNvbW9ycGhpYy1sYXlvdXQtZWZmZWN0L2Rpc3QvdXNlLWlzb21vcnBoaWMtbGF5b3V0LWVmZmVjdC5icm93c2VyLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC9pbmRleC02NDFlZTViOC5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvbWVtb2l6ZS1vbmUvZGlzdC9tZW1vaXplLW9uZS5janMuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3QvU2VsZWN0LWFhYjAyN2YzLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC9yZWFjdC1zZWxlY3QuZXNtLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvRmlsdGVyZWRNb2R1bGVzLnRzeCIsImVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbmpzJztcclxuXHJcblxyXG5pbnRlcmZhY2UgQ3VzdG9tTmV3Q29tcG9uZW50UHJvcHMgZXh0ZW5kcyBCYXNlUHJvcGVydHlQcm9wcyB7XHJcbiAgY3VzdG9tRXJyb3JNZXNzYWdlPzogc3RyaW5nO1xyXG59XHJcbmNvbnN0IFVwbG9hZEltYWdlOiBSZWFjdC5GQzxDdXN0b21OZXdDb21wb25lbnRQcm9wcz4gPSAoeyBvbkNoYW5nZSwgcHJvcGVydHksIHJlY29yZCxjdXN0b21FcnJvck1lc3NhZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IFtwcmV2aWV3LCBzZXRQcmV2aWV3XSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4ocmVjb3JkPy5wYXJhbXM/Lltwcm9wZXJ0eS5uYW1lXSB8fCAnJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXM/LlswXTtcclxuICAgIGlmIChmaWxlKSB7XHJcbiAgICAgIHNldFByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSk7IC8vIFVwZGF0ZSBwcmV2aWV3XHJcbiAgICAgIG9uQ2hhbmdlKHByb3BlcnR5Lm5hbWUsIGZpbGUpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCEpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpbGVJbnB1dENsaWNrID0gKCk9PntcclxuICAgIGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKVxyXG4gIH1cclxuICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnNvbGUubG9nKHtwcm9wZXJ0eSxyZWNvcmR9KVxyXG4gICAgY29uc29sZS5sb2cocmVjb3JkLmVycm9ycz8uaW1hZ2U/Lm1lc3NhZ2UpXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+XHJcbiAgICAgICAgKiB7cHJvcGVydHkubmFtZX1cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8c2VjdGlvbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLHBhZGRpbmc6IFwiMnJlbSA0cmVtXCIsYm9yZGVyUmFkaXVzOiBcIjAuMzc1cmVtXCIscG9zaXRpb246IFwicmVsYXRpdmVcIix9fT5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVGaWxlSW5wdXRDbGlja30gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZDRkFGMlwiLCBib3JkZXJSYWRpdXM6IFwiMC41cmVtXCIsYm9yZGVyV2lkdGg6IFwiMnB4XCIsYm9yZGVyU3R5bGU6IFwiZGFzaGVkXCIsYm9yZGVyQ29sb3I6IFwicmdiYSg1MSwgNTEsIDY1LCAwLjc1KVwiLHBhZGRpbmc6IFwiMzAuNXB4XCJ9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsY3Vyc29yOiBcInBvaW50ZXJcIix9fT5cclxuICAgICAgICAgICAgICB7cHJldmlldyA/IDxpbWcgc3JjPXtwcmV2aWV3fSBhbHQ9XCJQcmV2aWV3XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCcsIG1heFdpZHRoOiAnMTAwcHgnIH19IG9uQ2xpY2s9e2hhbmRsZUZpbGVJbnB1dENsaWNrfSAgLz4gOiAoPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheSA6ICdmbGV4JywgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLCBhbGlnbkl0ZW1zIDogJ2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICA8cD5DbGljayB0byB1cGxvYWQ8L3A+XHJcbiAgICAgICAgICAgICAgPHA+TWF4IG5vIG9mIEltYWdlIGlzIDE8L3A+XHJcbiAgICAgICAgICAgICAgPHA+LlBuZywgLkpwZyBpbWFnZXMgb25seSo8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+KSB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJpbWFnZVwiIHJlZj17aW5wdXRSZWZ9IHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19IG5hbWU9XCJhdHRhY2htZW50XCIgYWNjZXB0PVwiaW1hZ2UvKlwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxoMSBzdHlsZT17e2NvbG9yIDogJ3JlZCcsIGZvbnRTaXplIDogJzE0cHgnLCBtYXJnaW5Cb3R0b20gOiAnMTBweCd9fT57cmVjb3JkLmVycm9ycz8uaW1hZ2U/Lm1lc3NhZ2V9PC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRJbWFnZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnO1xyXG5cclxuXHJcbmludGVyZmFjZSBDdXN0b21OZXdDb21wb25lbnRQcm9wcyBleHRlbmRzIEJhc2VQcm9wZXJ0eVByb3BzIHtcclxuICBjdXN0b21FcnJvck1lc3NhZ2U/OiBzdHJpbmc7XHJcbn1cclxuY29uc3QgVXBsb2FkVmlkZW86IFJlYWN0LkZDPEN1c3RvbU5ld0NvbXBvbmVudFByb3BzPiA9ICh7IG9uQ2hhbmdlLCBwcm9wZXJ0eSwgcmVjb3JkLGN1c3RvbUVycm9yTWVzc2FnZSB9KSA9PiB7XHJcbiAgY29uc3QgW3ByZXZpZXcsIHNldFByZXZpZXddID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPihyZWNvcmQ/LnBhcmFtcz8uW3Byb3BlcnR5Lm5hbWVdIHx8ICcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRmlsZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGxldCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzPy5bMF07XHJcbiAgICBpZiAoZmlsZSkge1xyXG4gICAgICBzZXRQcmV2aWV3KCgpPT4oVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSkpOyAvLyBVcGRhdGUgcHJldmlld1xyXG4gICAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCBmaWxlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VMaW5rID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgbGV0IGFsdFVybCA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgaWYoYWx0VXJsKXtcclxuICAgICAgICBzZXRQcmV2aWV3KCgpPT5hbHRVcmwpOyAvLyBVcGRhdGUgcHJldmlld1xyXG4gICAgICAgIG9uQ2hhbmdlKHByb3BlcnR5Lm5hbWUsIGFsdFVybCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyh7cHJldmlld30pXHJcbiAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCEpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpbGVJbnB1dENsaWNrID0gKCk9PntcclxuICAgIGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKVxyXG4gIH1cclxuICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnNvbGUubG9nKHtwcm9wZXJ0eSxyZWNvcmR9KVxyXG4gICAgY29uc29sZS5sb2cocmVjb3JkLmVycm9ycz8ubGVzc29udmlkZW8/Lm1lc3NhZ2UpXHJcbiAgfSlcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKHByZXZpZXc/LnN0YXJ0c1dpdGgoXCJibG9iOlwiKSkge1xyXG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwocHJldmlldyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSwgW3ByZXZpZXddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+XHJcbiAgICAgICAgKiB7cHJvcGVydHkubmFtZX1cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8c2VjdGlvbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLHBhZGRpbmc6IFwiMnJlbSA0cmVtXCIsYm9yZGVyUmFkaXVzOiBcIjAuMzc1cmVtXCIscG9zaXRpb246IFwicmVsYXRpdmVcIix9fT5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVGaWxlSW5wdXRDbGlja30gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZDRkFGMlwiLCBib3JkZXJSYWRpdXM6IFwiMC41cmVtXCIsYm9yZGVyV2lkdGg6IFwiMnB4XCIsYm9yZGVyU3R5bGU6IFwiZGFzaGVkXCIsYm9yZGVyQ29sb3I6IFwicmdiYSg1MSwgNTEsIDY1LCAwLjc1KVwiLHBhZGRpbmc6IFwiMzAuNXB4XCJ9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsY3Vyc29yOiBcInBvaW50ZXJcIix9fT5cclxuICAgICAgICAgICAgICB7cHJldmlldyA/IDx2aWRlbyBrZXk9e3ByZXZpZXd9IG9uQ2xpY2s9e2hhbmRsZUZpbGVJbnB1dENsaWNrfSBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMHB4JywgbWF4V2lkdGg6ICc0MDBweCcgfX0gY29udHJvbHMgd2lkdGg9XCI1MDBcIj5cclxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtwcmV2aWV3fSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cclxuICAgICAgICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyB0YWcuXHJcbiAgICAgICAgICAgICAgICA8L3ZpZGVvPiA6ICg8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5IDogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsIGFsaWduSXRlbXMgOiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgIDxwPkNsaWNrIHRvIHVwbG9hZDwvcD5cclxuICAgICAgICAgICAgICA8cD5NYXggbm8gb2YgdmlkZW8gaXMgMTwvcD5cclxuICAgICAgICAgICAgICA8cD4uTXA0IFZpZGVvcyBvbmx5KjwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwidmlkZW9VcmxcIiByZWY9e2lucHV0UmVmfSBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fSBuYW1lPVwiYXR0YWNobWVudFwiIGFjY2VwdD1cInZpZGVvLypcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRmlsZX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5Ub3AgOiAnMTBweCd9fT5vcjwvcD5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2aWRlb1VybFwiIHN0eWxlPXt7bWFyZ2luIDogJzEwcHggMHB4JywgZGlzcGxheSA6ICdmbGV4JywgZmxleERpcmVjdGlvbiA6IFwiY29sdW1uXCIsIGdhcCA6ICcxMHB4J319PlxyXG4gICAgICAgICAgICAgICAgVmlkZW8gVXJsXHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInZpZGVvVXJsXCIgIG5hbWU9XCJ2aWRlb1VybFwiIGFjY2VwdD1cInZpZGVvLypcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTGlua30gc3R5bGU9e3twYWRkaW5nIDogJzVweCAxMHB4Jyxib3JkZXJSYWRpdXMgOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYigxODcsIDE5NSwgMjAzKScsY29sb3I6ICdyZ2IoMTIsIDMwLCA0MSknLCBmb250U2l6ZSA6ICcxNHB4J319Lz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGgxIHN0eWxlPXt7Y29sb3IgOiAncmVkJywgZm9udFNpemUgOiAnMTRweCcsIG1hcmdpbkJvdHRvbSA6ICcxMHB4J319PntyZWNvcmQuZXJyb3JzPy5sZXNzb25WaWRlbz8ubWVzc2FnZX08L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZFZpZGVvO1xyXG4iLCJmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufVxuZXhwb3J0IHsgX3R5cGVvZiBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5mdW5jdGlvbiB0b1ByaW1pdGl2ZSh0LCByKSB7XG4gIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpO1xufVxuZXhwb3J0IHsgdG9QcmltaXRpdmUgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IHRvUHJpbWl0aXZlIGZyb20gXCIuL3RvUHJpbWl0aXZlLmpzXCI7XG5mdW5jdGlvbiB0b1Byb3BlcnR5S2V5KHQpIHtcbiAgdmFyIGkgPSB0b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjtcbn1cbmV4cG9ydCB7IHRvUHJvcGVydHlLZXkgYXMgZGVmYXVsdCB9OyIsImltcG9ydCB0b1Byb3BlcnR5S2V5IGZyb20gXCIuL3RvUHJvcGVydHlLZXkuanNcIjtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0KSB7XG4gIHJldHVybiAociA9IHRvUHJvcGVydHlLZXkocikpIGluIGUgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwge1xuICAgIHZhbHVlOiB0LFxuICAgIGVudW1lcmFibGU6ICEwLFxuICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgd3JpdGFibGU6ICEwXG4gIH0pIDogZVtyXSA9IHQsIGU7XG59XG5leHBvcnQgeyBfZGVmaW5lUHJvcGVydHkgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBkZWZpbmVQcm9wZXJ0eSBmcm9tIFwiLi9kZWZpbmVQcm9wZXJ0eS5qc1wiO1xuZnVuY3Rpb24gb3duS2V5cyhlLCByKSB7XG4gIHZhciB0ID0gT2JqZWN0LmtleXMoZSk7XG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO1xuICAgIHIgJiYgKG8gPSBvLmZpbHRlcihmdW5jdGlvbiAocikge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgcikuZW51bWVyYWJsZTtcbiAgICB9KSksIHQucHVzaC5hcHBseSh0LCBvKTtcbiAgfVxuICByZXR1cm4gdDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKGUpIHtcbiAgZm9yICh2YXIgciA9IDE7IHIgPCBhcmd1bWVudHMubGVuZ3RoOyByKyspIHtcbiAgICB2YXIgdCA9IG51bGwgIT0gYXJndW1lbnRzW3JdID8gYXJndW1lbnRzW3JdIDoge307XG4gICAgciAlIDIgPyBvd25LZXlzKE9iamVjdCh0KSwgITApLmZvckVhY2goZnVuY3Rpb24gKHIpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KGUsIHIsIHRbcl0pO1xuICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgcikpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlO1xufVxuZXhwb3J0IHsgX29iamVjdFNwcmVhZDIgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHIpKSByZXR1cm4gcjtcbn1cbmV4cG9ydCB7IF9hcnJheVdpdGhIb2xlcyBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KHIsIGwpIHtcbiAgdmFyIHQgPSBudWxsID09IHIgPyBudWxsIDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIHJbU3ltYm9sLml0ZXJhdG9yXSB8fCByW1wiQEBpdGVyYXRvclwiXTtcbiAgaWYgKG51bGwgIT0gdCkge1xuICAgIHZhciBlLFxuICAgICAgbixcbiAgICAgIGksXG4gICAgICB1LFxuICAgICAgYSA9IFtdLFxuICAgICAgZiA9ICEwLFxuICAgICAgbyA9ICExO1xuICAgIHRyeSB7XG4gICAgICBpZiAoaSA9ICh0ID0gdC5jYWxsKHIpKS5uZXh0LCAwID09PSBsKSB7XG4gICAgICAgIGlmIChPYmplY3QodCkgIT09IHQpIHJldHVybjtcbiAgICAgICAgZiA9ICExO1xuICAgICAgfSBlbHNlIGZvciAoOyAhKGYgPSAoZSA9IGkuY2FsbCh0KSkuZG9uZSkgJiYgKGEucHVzaChlLnZhbHVlKSwgYS5sZW5ndGggIT09IGwpOyBmID0gITApO1xuICAgIH0gY2F0Y2ggKHIpIHtcbiAgICAgIG8gPSAhMCwgbiA9IHI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghZiAmJiBudWxsICE9IHRbXCJyZXR1cm5cIl0gJiYgKHUgPSB0W1wicmV0dXJuXCJdKCksIE9iamVjdCh1KSAhPT0gdSkpIHJldHVybjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBuO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfVxufVxuZXhwb3J0IHsgX2l0ZXJhYmxlVG9BcnJheUxpbWl0IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShyLCBhKSB7XG4gIChudWxsID09IGEgfHwgYSA+IHIubGVuZ3RoKSAmJiAoYSA9IHIubGVuZ3RoKTtcbiAgZm9yICh2YXIgZSA9IDAsIG4gPSBBcnJheShhKTsgZSA8IGE7IGUrKykgbltlXSA9IHJbZV07XG4gIHJldHVybiBuO1xufVxuZXhwb3J0IHsgX2FycmF5TGlrZVRvQXJyYXkgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShyLCBhKSB7XG4gIGlmIChyKSB7XG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KHIsIGEpO1xuICAgIHZhciB0ID0ge30udG9TdHJpbmcuY2FsbChyKS5zbGljZSg4LCAtMSk7XG4gICAgcmV0dXJuIFwiT2JqZWN0XCIgPT09IHQgJiYgci5jb25zdHJ1Y3RvciAmJiAodCA9IHIuY29uc3RydWN0b3IubmFtZSksIFwiTWFwXCIgPT09IHQgfHwgXCJTZXRcIiA9PT0gdCA/IEFycmF5LmZyb20ocikgOiBcIkFyZ3VtZW50c1wiID09PSB0IHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KHQpID8gYXJyYXlMaWtlVG9BcnJheShyLCBhKSA6IHZvaWQgMDtcbiAgfVxufVxuZXhwb3J0IHsgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuZXhwb3J0IHsgX25vbkl0ZXJhYmxlUmVzdCBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5TGltaXQuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIjtcbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KHIsIGUpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKHIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KHIsIGUpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KHIsIGUpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuZXhwb3J0IHsgX3NsaWNlZFRvQXJyYXkgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHIsIGUpIHtcbiAgaWYgKG51bGwgPT0gcikgcmV0dXJuIHt9O1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBuIGluIHIpIGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsIG4pKSB7XG4gICAgaWYgKC0xICE9PSBlLmluZGV4T2YobikpIGNvbnRpbnVlO1xuICAgIHRbbl0gPSByW25dO1xuICB9XG4gIHJldHVybiB0O1xufVxuZXhwb3J0IHsgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIjtcbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhlLCB0KSB7XG4gIGlmIChudWxsID09IGUpIHJldHVybiB7fTtcbiAgdmFyIG8sXG4gICAgcixcbiAgICBpID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShlLCB0KTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgbiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7XG4gICAgZm9yIChyID0gMDsgciA8IG4ubGVuZ3RoOyByKyspIG8gPSBuW3JdLCAtMSA9PT0gdC5pbmRleE9mKG8pICYmIHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoZSwgbykgJiYgKGlbb10gPSBlW29dKTtcbiAgfVxuICByZXR1cm4gaTtcbn1cbmV4cG9ydCB7IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMic7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheSc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxudmFyIF9leGNsdWRlZCA9IFtcImRlZmF1bHRJbnB1dFZhbHVlXCIsIFwiZGVmYXVsdE1lbnVJc09wZW5cIiwgXCJkZWZhdWx0VmFsdWVcIiwgXCJpbnB1dFZhbHVlXCIsIFwibWVudUlzT3BlblwiLCBcIm9uQ2hhbmdlXCIsIFwib25JbnB1dENoYW5nZVwiLCBcIm9uTWVudUNsb3NlXCIsIFwib25NZW51T3BlblwiLCBcInZhbHVlXCJdO1xuZnVuY3Rpb24gdXNlU3RhdGVNYW5hZ2VyKF9yZWYpIHtcbiAgdmFyIF9yZWYkZGVmYXVsdElucHV0VmFsdSA9IF9yZWYuZGVmYXVsdElucHV0VmFsdWUsXG4gICAgZGVmYXVsdElucHV0VmFsdWUgPSBfcmVmJGRlZmF1bHRJbnB1dFZhbHUgPT09IHZvaWQgMCA/ICcnIDogX3JlZiRkZWZhdWx0SW5wdXRWYWx1LFxuICAgIF9yZWYkZGVmYXVsdE1lbnVJc09wZSA9IF9yZWYuZGVmYXVsdE1lbnVJc09wZW4sXG4gICAgZGVmYXVsdE1lbnVJc09wZW4gPSBfcmVmJGRlZmF1bHRNZW51SXNPcGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRkZWZhdWx0TWVudUlzT3BlLFxuICAgIF9yZWYkZGVmYXVsdFZhbHVlID0gX3JlZi5kZWZhdWx0VmFsdWUsXG4gICAgZGVmYXVsdFZhbHVlID0gX3JlZiRkZWZhdWx0VmFsdWUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJGRlZmF1bHRWYWx1ZSxcbiAgICBwcm9wc0lucHV0VmFsdWUgPSBfcmVmLmlucHV0VmFsdWUsXG4gICAgcHJvcHNNZW51SXNPcGVuID0gX3JlZi5tZW51SXNPcGVuLFxuICAgIHByb3BzT25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLFxuICAgIHByb3BzT25JbnB1dENoYW5nZSA9IF9yZWYub25JbnB1dENoYW5nZSxcbiAgICBwcm9wc09uTWVudUNsb3NlID0gX3JlZi5vbk1lbnVDbG9zZSxcbiAgICBwcm9wc09uTWVudU9wZW4gPSBfcmVmLm9uTWVudU9wZW4sXG4gICAgcHJvcHNWYWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgcmVzdFNlbGVjdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIF9leGNsdWRlZCk7XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShwcm9wc0lucHV0VmFsdWUgIT09IHVuZGVmaW5lZCA/IHByb3BzSW5wdXRWYWx1ZSA6IGRlZmF1bHRJbnB1dFZhbHVlKSxcbiAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICBzdGF0ZUlucHV0VmFsdWUgPSBfdXNlU3RhdGUyWzBdLFxuICAgIHNldFN0YXRlSW5wdXRWYWx1ZSA9IF91c2VTdGF0ZTJbMV07XG4gIHZhciBfdXNlU3RhdGUzID0gdXNlU3RhdGUocHJvcHNNZW51SXNPcGVuICE9PSB1bmRlZmluZWQgPyBwcm9wc01lbnVJc09wZW4gOiBkZWZhdWx0TWVudUlzT3BlbiksXG4gICAgX3VzZVN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTMsIDIpLFxuICAgIHN0YXRlTWVudUlzT3BlbiA9IF91c2VTdGF0ZTRbMF0sXG4gICAgc2V0U3RhdGVNZW51SXNPcGVuID0gX3VzZVN0YXRlNFsxXTtcbiAgdmFyIF91c2VTdGF0ZTUgPSB1c2VTdGF0ZShwcm9wc1ZhbHVlICE9PSB1bmRlZmluZWQgPyBwcm9wc1ZhbHVlIDogZGVmYXVsdFZhbHVlKSxcbiAgICBfdXNlU3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNSwgMiksXG4gICAgc3RhdGVWYWx1ZSA9IF91c2VTdGF0ZTZbMF0sXG4gICAgc2V0U3RhdGVWYWx1ZSA9IF91c2VTdGF0ZTZbMV07XG4gIHZhciBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgIGlmICh0eXBlb2YgcHJvcHNPbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcHNPbkNoYW5nZSh2YWx1ZSwgYWN0aW9uTWV0YSk7XG4gICAgfVxuICAgIHNldFN0YXRlVmFsdWUodmFsdWUpO1xuICB9LCBbcHJvcHNPbkNoYW5nZV0pO1xuICB2YXIgb25JbnB1dENoYW5nZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgIHZhciBuZXdWYWx1ZTtcbiAgICBpZiAodHlwZW9mIHByb3BzT25JbnB1dENoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbmV3VmFsdWUgPSBwcm9wc09uSW5wdXRDaGFuZ2UodmFsdWUsIGFjdGlvbk1ldGEpO1xuICAgIH1cbiAgICBzZXRTdGF0ZUlucHV0VmFsdWUobmV3VmFsdWUgIT09IHVuZGVmaW5lZCA/IG5ld1ZhbHVlIDogdmFsdWUpO1xuICB9LCBbcHJvcHNPbklucHV0Q2hhbmdlXSk7XG4gIHZhciBvbk1lbnVPcGVuID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgcHJvcHNPbk1lbnVPcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wc09uTWVudU9wZW4oKTtcbiAgICB9XG4gICAgc2V0U3RhdGVNZW51SXNPcGVuKHRydWUpO1xuICB9LCBbcHJvcHNPbk1lbnVPcGVuXSk7XG4gIHZhciBvbk1lbnVDbG9zZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIHByb3BzT25NZW51Q2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BzT25NZW51Q2xvc2UoKTtcbiAgICB9XG4gICAgc2V0U3RhdGVNZW51SXNPcGVuKGZhbHNlKTtcbiAgfSwgW3Byb3BzT25NZW51Q2xvc2VdKTtcbiAgdmFyIGlucHV0VmFsdWUgPSBwcm9wc0lucHV0VmFsdWUgIT09IHVuZGVmaW5lZCA/IHByb3BzSW5wdXRWYWx1ZSA6IHN0YXRlSW5wdXRWYWx1ZTtcbiAgdmFyIG1lbnVJc09wZW4gPSBwcm9wc01lbnVJc09wZW4gIT09IHVuZGVmaW5lZCA/IHByb3BzTWVudUlzT3BlbiA6IHN0YXRlTWVudUlzT3BlbjtcbiAgdmFyIHZhbHVlID0gcHJvcHNWYWx1ZSAhPT0gdW5kZWZpbmVkID8gcHJvcHNWYWx1ZSA6IHN0YXRlVmFsdWU7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHJlc3RTZWxlY3RQcm9wcyksIHt9LCB7XG4gICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICBtZW51SXNPcGVuOiBtZW51SXNPcGVuLFxuICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcbiAgICBvbklucHV0Q2hhbmdlOiBvbklucHV0Q2hhbmdlLFxuICAgIG9uTWVudUNsb3NlOiBvbk1lbnVDbG9zZSxcbiAgICBvbk1lbnVPcGVuOiBvbk1lbnVPcGVuLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9KTtcbn1cblxuZXhwb3J0IHsgdXNlU3RhdGVNYW5hZ2VyIGFzIHUgfTtcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICByZXR1cm4gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAobikge1xuICAgIGZvciAodmFyIGUgPSAxOyBlIDwgYXJndW1lbnRzLmxlbmd0aDsgZSsrKSB7XG4gICAgICB2YXIgdCA9IGFyZ3VtZW50c1tlXTtcbiAgICAgIGZvciAodmFyIHIgaW4gdCkgKHt9KS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIHIpICYmIChuW3JdID0gdFtyXSk7XG4gICAgfVxuICAgIHJldHVybiBuO1xuICB9LCBfZXh0ZW5kcy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuZXhwb3J0IHsgX2V4dGVuZHMgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhhLCBuKSB7XG4gIGlmICghKGEgaW5zdGFuY2VvZiBuKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbn1cbmV4cG9ydCB7IF9jbGFzc0NhbGxDaGVjayBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXMoZSwgcikge1xuICBmb3IgKHZhciB0ID0gMDsgdCA8IHIubGVuZ3RoOyB0KyspIHtcbiAgICB2YXIgbyA9IHJbdF07XG4gICAgby5lbnVtZXJhYmxlID0gby5lbnVtZXJhYmxlIHx8ICExLCBvLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gbyAmJiAoby53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHRvUHJvcGVydHlLZXkoby5rZXkpLCBvKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKGUsIHIsIHQpIHtcbiAgcmV0dXJuIHIgJiYgX2RlZmluZVByb3BlcnRpZXMoZS5wcm90b3R5cGUsIHIpLCB0ICYmIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHQpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiAhMVxuICB9KSwgZTtcbn1cbmV4cG9ydCB7IF9jcmVhdGVDbGFzcyBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKHQsIGUpIHtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiAodCwgZSkge1xuICAgIHJldHVybiB0Ll9fcHJvdG9fXyA9IGUsIHQ7XG4gIH0sIF9zZXRQcm90b3R5cGVPZih0LCBlKTtcbn1cbmV4cG9ydCB7IF9zZXRQcm90b3R5cGVPZiBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5mdW5jdGlvbiBfaW5oZXJpdHModCwgZSkge1xuICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBlICYmIG51bGwgIT09IGUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGUgJiYgZS5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHQsXG4gICAgICB3cml0YWJsZTogITAsXG4gICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgfVxuICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogITFcbiAgfSksIGUgJiYgc2V0UHJvdG90eXBlT2YodCwgZSk7XG59XG5leHBvcnQgeyBfaW5oZXJpdHMgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZih0KSB7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpO1xuICB9LCBfZ2V0UHJvdG90eXBlT2YodCk7XG59XG5leHBvcnQgeyBfZ2V0UHJvdG90eXBlT2YgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIHRyeSB7XG4gICAgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICB9IGNhdGNoICh0KSB7fVxuICByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICAgIHJldHVybiAhIXQ7XG4gIH0pKCk7XG59XG5leHBvcnQgeyBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKGUpIHtcbiAgaWYgKHZvaWQgMCA9PT0gZSkgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICByZXR1cm4gZTtcbn1cbmV4cG9ydCB7IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IGFzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIjtcbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIGUpIHtcbiAgaWYgKGUgJiYgKFwib2JqZWN0XCIgPT0gX3R5cGVvZihlKSB8fCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUpKSByZXR1cm4gZTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHQpO1xufVxuZXhwb3J0IHsgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gYXMgZGVmYXVsdCB9OyIsImltcG9ydCBnZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiO1xuaW1wb3J0IGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCBmcm9tIFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QuanNcIjtcbmltcG9ydCBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCIuL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcIjtcbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcih0KSB7XG4gIHZhciByID0gaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGUsXG4gICAgICBvID0gZ2V0UHJvdG90eXBlT2YodCk7XG4gICAgaWYgKHIpIHtcbiAgICAgIHZhciBzID0gZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7XG4gICAgICBlID0gUmVmbGVjdC5jb25zdHJ1Y3QobywgYXJndW1lbnRzLCBzKTtcbiAgICB9IGVsc2UgZSA9IG8uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBlKTtcbiAgfTtcbn1cbmV4cG9ydCB7IF9jcmVhdGVTdXBlciBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKHIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KHIpO1xufVxuZXhwb3J0IHsgX2FycmF5V2l0aG91dEhvbGVzIGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KHIpIHtcbiAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBudWxsICE9IHJbU3ltYm9sLml0ZXJhdG9yXSB8fCBudWxsICE9IHJbXCJAQGl0ZXJhdG9yXCJdKSByZXR1cm4gQXJyYXkuZnJvbShyKTtcbn1cbmV4cG9ydCB7IF9pdGVyYWJsZVRvQXJyYXkgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5leHBvcnQgeyBfbm9uSXRlcmFibGVTcHJlYWQgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkocikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMocikgfHwgaXRlcmFibGVUb0FycmF5KHIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KHIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5leHBvcnQgeyBfdG9Db25zdW1hYmxlQXJyYXkgYXMgZGVmYXVsdCB9OyIsInZhciBpc0RldmVsb3BtZW50ID0gZmFsc2U7XG5cbi8qXG5cbkJhc2VkIG9mZiBnbGFtb3IncyBTdHlsZVNoZWV0LCB0aGFua3MgU3VuaWwg4p2k77iPXG5cbmhpZ2ggcGVyZm9ybWFuY2UgU3R5bGVTaGVldCBmb3IgY3NzLWluLWpzIHN5c3RlbXNcblxuLSB1c2VzIG11bHRpcGxlIHN0eWxlIHRhZ3MgYmVoaW5kIHRoZSBzY2VuZXMgZm9yIG1pbGxpb25zIG9mIHJ1bGVzXG4tIHVzZXMgYGluc2VydFJ1bGVgIGZvciBhcHBlbmRpbmcgaW4gcHJvZHVjdGlvbiBmb3IgKm11Y2gqIGZhc3RlciBwZXJmb3JtYW5jZVxuXG4vLyB1c2FnZVxuXG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSAnQGVtb3Rpb24vc2hlZXQnXG5cbmxldCBzdHlsZVNoZWV0ID0gbmV3IFN0eWxlU2hlZXQoeyBrZXk6ICcnLCBjb250YWluZXI6IGRvY3VtZW50LmhlYWQgfSlcblxuc3R5bGVTaGVldC5pbnNlcnQoJyNib3ggeyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IH0nKVxuLSBhcHBlbmRzIGEgY3NzIHJ1bGUgaW50byB0aGUgc3R5bGVzaGVldFxuXG5zdHlsZVNoZWV0LmZsdXNoKClcbi0gZW1wdGllcyB0aGUgc3R5bGVzaGVldCBvZiBhbGwgaXRzIGNvbnRlbnRzXG5cbiovXG5cbmZ1bmN0aW9uIHNoZWV0Rm9yVGFnKHRhZykge1xuICBpZiAodGFnLnNoZWV0KSB7XG4gICAgcmV0dXJuIHRhZy5zaGVldDtcbiAgfSAvLyB0aGlzIHdlaXJkbmVzcyBicm91Z2h0IHRvIHlvdSBieSBmaXJlZm94XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZG9jdW1lbnQuc3R5bGVTaGVldHNbaV0ub3duZXJOb2RlID09PSB0YWcpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcbiAgICB9XG4gIH0gLy8gdGhpcyBmdW5jdGlvbiBzaG91bGQgYWx3YXlzIHJldHVybiB3aXRoIGEgdmFsdWVcbiAgLy8gVFMgY2FuJ3QgdW5kZXJzdGFuZCBpdCB0aG91Z2ggc28gd2UgbWFrZSBpdCBzdG9wIGNvbXBsYWluaW5nIGhlcmVcblxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLWVtb3Rpb24nLCBvcHRpb25zLmtleSk7XG5cbiAgaWYgKG9wdGlvbnMubm9uY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHRhZy5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgb3B0aW9ucy5ub25jZSk7XG4gIH1cblxuICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcbiAgdGFnLnNldEF0dHJpYnV0ZSgnZGF0YS1zJywgJycpO1xuICByZXR1cm4gdGFnO1xufVxuXG52YXIgU3R5bGVTaGVldCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8vIFVzaW5nIE5vZGUgaW5zdGVhZCBvZiBIVE1MRWxlbWVudCBzaW5jZSBjb250YWluZXIgbWF5IGJlIGEgU2hhZG93Um9vdFxuICBmdW5jdGlvbiBTdHlsZVNoZWV0KG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5faW5zZXJ0VGFnID0gZnVuY3Rpb24gKHRhZykge1xuICAgICAgdmFyIGJlZm9yZTtcblxuICAgICAgaWYgKF90aGlzLnRhZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmIChfdGhpcy5pbnNlcnRpb25Qb2ludCkge1xuICAgICAgICAgIGJlZm9yZSA9IF90aGlzLmluc2VydGlvblBvaW50Lm5leHRTaWJsaW5nO1xuICAgICAgICB9IGVsc2UgaWYgKF90aGlzLnByZXBlbmQpIHtcbiAgICAgICAgICBiZWZvcmUgPSBfdGhpcy5jb250YWluZXIuZmlyc3RDaGlsZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBiZWZvcmUgPSBfdGhpcy5iZWZvcmU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJlZm9yZSA9IF90aGlzLnRhZ3NbX3RoaXMudGFncy5sZW5ndGggLSAxXS5uZXh0U2libGluZztcbiAgICAgIH1cblxuICAgICAgX3RoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZSh0YWcsIGJlZm9yZSk7XG5cbiAgICAgIF90aGlzLnRhZ3MucHVzaCh0YWcpO1xuICAgIH07XG5cbiAgICB0aGlzLmlzU3BlZWR5ID0gb3B0aW9ucy5zcGVlZHkgPT09IHVuZGVmaW5lZCA/ICFpc0RldmVsb3BtZW50IDogb3B0aW9ucy5zcGVlZHk7XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jdHIgPSAwO1xuICAgIHRoaXMubm9uY2UgPSBvcHRpb25zLm5vbmNlOyAvLyBrZXkgaXMgdGhlIHZhbHVlIG9mIHRoZSBkYXRhLWVtb3Rpb24gYXR0cmlidXRlLCBpdCdzIHVzZWQgdG8gaWRlbnRpZnkgZGlmZmVyZW50IHNoZWV0c1xuXG4gICAgdGhpcy5rZXkgPSBvcHRpb25zLmtleTtcbiAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyO1xuICAgIHRoaXMucHJlcGVuZCA9IG9wdGlvbnMucHJlcGVuZDtcbiAgICB0aGlzLmluc2VydGlvblBvaW50ID0gb3B0aW9ucy5pbnNlcnRpb25Qb2ludDtcbiAgICB0aGlzLmJlZm9yZSA9IG51bGw7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3R5bGVTaGVldC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmh5ZHJhdGUgPSBmdW5jdGlvbiBoeWRyYXRlKG5vZGVzKSB7XG4gICAgbm9kZXMuZm9yRWFjaCh0aGlzLl9pbnNlcnRUYWcpO1xuICB9O1xuXG4gIF9wcm90by5pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnQocnVsZSkge1xuICAgIC8vIHRoZSBtYXggbGVuZ3RoIGlzIGhvdyBtYW55IHJ1bGVzIHdlIGhhdmUgcGVyIHN0eWxlIHRhZywgaXQncyA2NTAwMCBpbiBzcGVlZHkgbW9kZVxuICAgIC8vIGl0J3MgMSBpbiBkZXYgYmVjYXVzZSB3ZSBpbnNlcnQgc291cmNlIG1hcHMgdGhhdCBtYXAgYSBzaW5nbGUgcnVsZSB0byBhIGxvY2F0aW9uXG4gICAgLy8gYW5kIHlvdSBjYW4gb25seSBoYXZlIG9uZSBzb3VyY2UgbWFwIHBlciBzdHlsZSB0YWdcbiAgICBpZiAodGhpcy5jdHIgJSAodGhpcy5pc1NwZWVkeSA/IDY1MDAwIDogMSkgPT09IDApIHtcbiAgICAgIHRoaXMuX2luc2VydFRhZyhjcmVhdGVTdHlsZUVsZW1lbnQodGhpcykpO1xuICAgIH1cblxuICAgIHZhciB0YWcgPSB0aGlzLnRhZ3NbdGhpcy50YWdzLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKHRoaXMuaXNTcGVlZHkpIHtcbiAgICAgIHZhciBzaGVldCA9IHNoZWV0Rm9yVGFnKHRhZyk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIHVsdHJhZmFzdCB2ZXJzaW9uLCB3b3JrcyBhY3Jvc3MgYnJvd3NlcnNcbiAgICAgICAgLy8gdGhlIGJpZyBkcmF3YmFjayBpcyB0aGF0IHRoZSBjc3Mgd29uJ3QgYmUgZWRpdGFibGUgaW4gZGV2dG9vbHNcbiAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZShydWxlLCBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocnVsZSkpO1xuICAgIH1cblxuICAgIHRoaXMuY3RyKys7XG4gIH07XG5cbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgdGhpcy50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgdmFyIF90YWckcGFyZW50Tm9kZTtcblxuICAgICAgcmV0dXJuIChfdGFnJHBhcmVudE5vZGUgPSB0YWcucGFyZW50Tm9kZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90YWckcGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWcpO1xuICAgIH0pO1xuICAgIHRoaXMudGFncyA9IFtdO1xuICAgIHRoaXMuY3RyID0gMDtcbiAgfTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxuZXhwb3J0IHsgU3R5bGVTaGVldCB9O1xuIiwiZXhwb3J0IHZhciBNUyA9ICctbXMtJ1xuZXhwb3J0IHZhciBNT1ogPSAnLW1vei0nXG5leHBvcnQgdmFyIFdFQktJVCA9ICctd2Via2l0LSdcblxuZXhwb3J0IHZhciBDT01NRU5UID0gJ2NvbW0nXG5leHBvcnQgdmFyIFJVTEVTRVQgPSAncnVsZSdcbmV4cG9ydCB2YXIgREVDTEFSQVRJT04gPSAnZGVjbCdcblxuZXhwb3J0IHZhciBQQUdFID0gJ0BwYWdlJ1xuZXhwb3J0IHZhciBNRURJQSA9ICdAbWVkaWEnXG5leHBvcnQgdmFyIElNUE9SVCA9ICdAaW1wb3J0J1xuZXhwb3J0IHZhciBDSEFSU0VUID0gJ0BjaGFyc2V0J1xuZXhwb3J0IHZhciBWSUVXUE9SVCA9ICdAdmlld3BvcnQnXG5leHBvcnQgdmFyIFNVUFBPUlRTID0gJ0BzdXBwb3J0cydcbmV4cG9ydCB2YXIgRE9DVU1FTlQgPSAnQGRvY3VtZW50J1xuZXhwb3J0IHZhciBOQU1FU1BBQ0UgPSAnQG5hbWVzcGFjZSdcbmV4cG9ydCB2YXIgS0VZRlJBTUVTID0gJ0BrZXlmcmFtZXMnXG5leHBvcnQgdmFyIEZPTlRfRkFDRSA9ICdAZm9udC1mYWNlJ1xuZXhwb3J0IHZhciBDT1VOVEVSX1NUWUxFID0gJ0Bjb3VudGVyLXN0eWxlJ1xuZXhwb3J0IHZhciBGT05UX0ZFQVRVUkVfVkFMVUVTID0gJ0Bmb250LWZlYXR1cmUtdmFsdWVzJ1xuZXhwb3J0IHZhciBMQVlFUiA9ICdAbGF5ZXInXG4iLCIvKipcbiAqIEBwYXJhbSB7bnVtYmVyfVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgdmFyIGFicyA9IE1hdGguYWJzXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCB2YXIgZnJvbSA9IFN0cmluZy5mcm9tQ2hhckNvZGVcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH1cbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IHZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNoICh2YWx1ZSwgbGVuZ3RoKSB7XG5cdHJldHVybiBjaGFyYXQodmFsdWUsIDApIF4gNDUgPyAoKCgoKCgobGVuZ3RoIDw8IDIpIF4gY2hhcmF0KHZhbHVlLCAwKSkgPDwgMikgXiBjaGFyYXQodmFsdWUsIDEpKSA8PCAyKSBeIGNoYXJhdCh2YWx1ZSwgMikpIDw8IDIpIF4gY2hhcmF0KHZhbHVlLCAzKSA6IDBcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyaW0gKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZS50cmltKClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7UmVnRXhwfSBwYXR0ZXJuXG4gKiBAcmV0dXJuIHtzdHJpbmc/fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2ggKHZhbHVlLCBwYXR0ZXJuKSB7XG5cdHJldHVybiAodmFsdWUgPSBwYXR0ZXJuLmV4ZWModmFsdWUpKSA/IHZhbHVlWzBdIDogdmFsdWVcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSBwYXR0ZXJuXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZW1lbnRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UgKHZhbHVlLCBwYXR0ZXJuLCByZXBsYWNlbWVudCkge1xuXHRyZXR1cm4gdmFsdWUucmVwbGFjZShwYXR0ZXJuLCByZXBsYWNlbWVudClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWFyY2hcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZGV4b2YgKHZhbHVlLCBzZWFyY2gpIHtcblx0cmV0dXJuIHZhbHVlLmluZGV4T2Yoc2VhcmNoKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFyYXQgKHZhbHVlLCBpbmRleCkge1xuXHRyZXR1cm4gdmFsdWUuY2hhckNvZGVBdChpbmRleCkgfCAwXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYmVnaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0ciAodmFsdWUsIGJlZ2luLCBlbmQpIHtcblx0cmV0dXJuIHZhbHVlLnNsaWNlKGJlZ2luLCBlbmQpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJsZW4gKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZS5sZW5ndGhcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueVtdfSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2l6ZW9mICh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUubGVuZ3RoXG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge2FueVtdfSBhcnJheVxuICogQHJldHVybiB7YW55fVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kICh2YWx1ZSwgYXJyYXkpIHtcblx0cmV0dXJuIGFycmF5LnB1c2godmFsdWUpLCB2YWx1ZVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nW119IGFycmF5XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZSAoYXJyYXksIGNhbGxiYWNrKSB7XG5cdHJldHVybiBhcnJheS5tYXAoY2FsbGJhY2spLmpvaW4oJycpXG59XG4iLCJpbXBvcnQge2Zyb20sIHRyaW0sIGNoYXJhdCwgc3RybGVuLCBzdWJzdHIsIGFwcGVuZCwgYXNzaWdufSBmcm9tICcuL1V0aWxpdHkuanMnXG5cbmV4cG9ydCB2YXIgbGluZSA9IDFcbmV4cG9ydCB2YXIgY29sdW1uID0gMVxuZXhwb3J0IHZhciBsZW5ndGggPSAwXG5leHBvcnQgdmFyIHBvc2l0aW9uID0gMFxuZXhwb3J0IHZhciBjaGFyYWN0ZXIgPSAwXG5leHBvcnQgdmFyIGNoYXJhY3RlcnMgPSAnJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3QgfCBudWxsfSByb290XG4gKiBAcGFyYW0ge29iamVjdCB8IG51bGx9IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7c3RyaW5nW10gfCBzdHJpbmd9IHByb3BzXG4gKiBAcGFyYW0ge29iamVjdFtdIHwgc3RyaW5nfSBjaGlsZHJlblxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9kZSAodmFsdWUsIHJvb3QsIHBhcmVudCwgdHlwZSwgcHJvcHMsIGNoaWxkcmVuLCBsZW5ndGgpIHtcblx0cmV0dXJuIHt2YWx1ZTogdmFsdWUsIHJvb3Q6IHJvb3QsIHBhcmVudDogcGFyZW50LCB0eXBlOiB0eXBlLCBwcm9wczogcHJvcHMsIGNoaWxkcmVuOiBjaGlsZHJlbiwgbGluZTogbGluZSwgY29sdW1uOiBjb2x1bW4sIGxlbmd0aDogbGVuZ3RoLCByZXR1cm46ICcnfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkgKHJvb3QsIHByb3BzKSB7XG5cdHJldHVybiBhc3NpZ24obm9kZSgnJywgbnVsbCwgbnVsbCwgJycsIG51bGwsIG51bGwsIDApLCByb290LCB7bGVuZ3RoOiAtcm9vdC5sZW5ndGh9LCBwcm9wcylcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFyICgpIHtcblx0cmV0dXJuIGNoYXJhY3RlclxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZXYgKCkge1xuXHRjaGFyYWN0ZXIgPSBwb3NpdGlvbiA+IDAgPyBjaGFyYXQoY2hhcmFjdGVycywgLS1wb3NpdGlvbikgOiAwXG5cblx0aWYgKGNvbHVtbi0tLCBjaGFyYWN0ZXIgPT09IDEwKVxuXHRcdGNvbHVtbiA9IDEsIGxpbmUtLVxuXG5cdHJldHVybiBjaGFyYWN0ZXJcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0ICgpIHtcblx0Y2hhcmFjdGVyID0gcG9zaXRpb24gPCBsZW5ndGggPyBjaGFyYXQoY2hhcmFjdGVycywgcG9zaXRpb24rKykgOiAwXG5cblx0aWYgKGNvbHVtbisrLCBjaGFyYWN0ZXIgPT09IDEwKVxuXHRcdGNvbHVtbiA9IDEsIGxpbmUrK1xuXG5cdHJldHVybiBjaGFyYWN0ZXJcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwZWVrICgpIHtcblx0cmV0dXJuIGNoYXJhdChjaGFyYWN0ZXJzLCBwb3NpdGlvbilcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYXJldCAoKSB7XG5cdHJldHVybiBwb3NpdGlvblxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBiZWdpblxuICogQHBhcmFtIHtudW1iZXJ9IGVuZFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2xpY2UgKGJlZ2luLCBlbmQpIHtcblx0cmV0dXJuIHN1YnN0cihjaGFyYWN0ZXJzLCBiZWdpbiwgZW5kKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbiAodHlwZSkge1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0XHQvLyBcXDAgXFx0IFxcbiBcXHIgXFxzIHdoaXRlc3BhY2UgdG9rZW5cblx0XHRjYXNlIDA6IGNhc2UgOTogY2FzZSAxMDogY2FzZSAxMzogY2FzZSAzMjpcblx0XHRcdHJldHVybiA1XG5cdFx0Ly8gISArICwgLyA+IEAgfiBpc29sYXRlIHRva2VuXG5cdFx0Y2FzZSAzMzogY2FzZSA0MzogY2FzZSA0NDogY2FzZSA0NzogY2FzZSA2MjogY2FzZSA2NDogY2FzZSAxMjY6XG5cdFx0Ly8gOyB7IH0gYnJlYWtwb2ludCB0b2tlblxuXHRcdGNhc2UgNTk6IGNhc2UgMTIzOiBjYXNlIDEyNTpcblx0XHRcdHJldHVybiA0XG5cdFx0Ly8gOiBhY2NvbXBhbmllZCB0b2tlblxuXHRcdGNhc2UgNTg6XG5cdFx0XHRyZXR1cm4gM1xuXHRcdC8vIFwiICcgKCBbIG9wZW5pbmcgZGVsaW1pdCB0b2tlblxuXHRcdGNhc2UgMzQ6IGNhc2UgMzk6IGNhc2UgNDA6IGNhc2UgOTE6XG5cdFx0XHRyZXR1cm4gMlxuXHRcdC8vICkgXSBjbG9zaW5nIGRlbGltaXQgdG9rZW5cblx0XHRjYXNlIDQxOiBjYXNlIDkzOlxuXHRcdFx0cmV0dXJuIDFcblx0fVxuXG5cdHJldHVybiAwXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHthbnlbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFsbG9jICh2YWx1ZSkge1xuXHRyZXR1cm4gbGluZSA9IGNvbHVtbiA9IDEsIGxlbmd0aCA9IHN0cmxlbihjaGFyYWN0ZXJzID0gdmFsdWUpLCBwb3NpdGlvbiA9IDAsIFtdXG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcmV0dXJuIHthbnl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWFsbG9jICh2YWx1ZSkge1xuXHRyZXR1cm4gY2hhcmFjdGVycyA9ICcnLCB2YWx1ZVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxpbWl0ICh0eXBlKSB7XG5cdHJldHVybiB0cmltKHNsaWNlKHBvc2l0aW9uIC0gMSwgZGVsaW1pdGVyKHR5cGUgPT09IDkxID8gdHlwZSArIDIgOiB0eXBlID09PSA0MCA/IHR5cGUgKyAxIDogdHlwZSkpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZSAodmFsdWUpIHtcblx0cmV0dXJuIGRlYWxsb2ModG9rZW5pemVyKGFsbG9jKHZhbHVlKSkpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdoaXRlc3BhY2UgKHR5cGUpIHtcblx0d2hpbGUgKGNoYXJhY3RlciA9IHBlZWsoKSlcblx0XHRpZiAoY2hhcmFjdGVyIDwgMzMpXG5cdFx0XHRuZXh0KClcblx0XHRlbHNlXG5cdFx0XHRicmVha1xuXG5cdHJldHVybiB0b2tlbih0eXBlKSA+IDIgfHwgdG9rZW4oY2hhcmFjdGVyKSA+IDMgPyAnJyA6ICcgJ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nW119IGNoaWxkcmVuXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplciAoY2hpbGRyZW4pIHtcblx0d2hpbGUgKG5leHQoKSlcblx0XHRzd2l0Y2ggKHRva2VuKGNoYXJhY3RlcikpIHtcblx0XHRcdGNhc2UgMDogYXBwZW5kKGlkZW50aWZpZXIocG9zaXRpb24gLSAxKSwgY2hpbGRyZW4pXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIDI6IGFwcGVuZChkZWxpbWl0KGNoYXJhY3RlciksIGNoaWxkcmVuKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDogYXBwZW5kKGZyb20oY2hhcmFjdGVyKSwgY2hpbGRyZW4pXG5cdFx0fVxuXG5cdHJldHVybiBjaGlsZHJlblxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGluZyAoaW5kZXgsIGNvdW50KSB7XG5cdHdoaWxlICgtLWNvdW50ICYmIG5leHQoKSlcblx0XHQvLyBub3QgMC05IEEtRiBhLWZcblx0XHRpZiAoY2hhcmFjdGVyIDwgNDggfHwgY2hhcmFjdGVyID4gMTAyIHx8IChjaGFyYWN0ZXIgPiA1NyAmJiBjaGFyYWN0ZXIgPCA2NSkgfHwgKGNoYXJhY3RlciA+IDcwICYmIGNoYXJhY3RlciA8IDk3KSlcblx0XHRcdGJyZWFrXG5cblx0cmV0dXJuIHNsaWNlKGluZGV4LCBjYXJldCgpICsgKGNvdW50IDwgNiAmJiBwZWVrKCkgPT0gMzIgJiYgbmV4dCgpID09IDMyKSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsaW1pdGVyICh0eXBlKSB7XG5cdHdoaWxlIChuZXh0KCkpXG5cdFx0c3dpdGNoIChjaGFyYWN0ZXIpIHtcblx0XHRcdC8vIF0gKSBcIiAnXG5cdFx0XHRjYXNlIHR5cGU6XG5cdFx0XHRcdHJldHVybiBwb3NpdGlvblxuXHRcdFx0Ly8gXCIgJ1xuXHRcdFx0Y2FzZSAzNDogY2FzZSAzOTpcblx0XHRcdFx0aWYgKHR5cGUgIT09IDM0ICYmIHR5cGUgIT09IDM5KVxuXHRcdFx0XHRcdGRlbGltaXRlcihjaGFyYWN0ZXIpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyAoXG5cdFx0XHRjYXNlIDQwOlxuXHRcdFx0XHRpZiAodHlwZSA9PT0gNDEpXG5cdFx0XHRcdFx0ZGVsaW1pdGVyKHR5cGUpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyBcXFxuXHRcdFx0Y2FzZSA5Mjpcblx0XHRcdFx0bmV4dCgpXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXG5cdHJldHVybiBwb3NpdGlvblxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1lbnRlciAodHlwZSwgaW5kZXgpIHtcblx0d2hpbGUgKG5leHQoKSlcblx0XHQvLyAvL1xuXHRcdGlmICh0eXBlICsgY2hhcmFjdGVyID09PSA0NyArIDEwKVxuXHRcdFx0YnJlYWtcblx0XHQvLyAvKlxuXHRcdGVsc2UgaWYgKHR5cGUgKyBjaGFyYWN0ZXIgPT09IDQyICsgNDIgJiYgcGVlaygpID09PSA0Nylcblx0XHRcdGJyZWFrXG5cblx0cmV0dXJuICcvKicgKyBzbGljZShpbmRleCwgcG9zaXRpb24gLSAxKSArICcqJyArIGZyb20odHlwZSA9PT0gNDcgPyB0eXBlIDogbmV4dCgpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllciAoaW5kZXgpIHtcblx0d2hpbGUgKCF0b2tlbihwZWVrKCkpKVxuXHRcdG5leHQoKVxuXG5cdHJldHVybiBzbGljZShpbmRleCwgcG9zaXRpb24pXG59XG4iLCJpbXBvcnQge0NPTU1FTlQsIFJVTEVTRVQsIERFQ0xBUkFUSU9OfSBmcm9tICcuL0VudW0uanMnXG5pbXBvcnQge2FicywgY2hhcmF0LCB0cmltLCBmcm9tLCBzaXplb2YsIHN0cmxlbiwgc3Vic3RyLCBhcHBlbmQsIHJlcGxhY2UsIGluZGV4b2Z9IGZyb20gJy4vVXRpbGl0eS5qcydcbmltcG9ydCB7bm9kZSwgY2hhciwgcHJldiwgbmV4dCwgcGVlaywgY2FyZXQsIGFsbG9jLCBkZWFsbG9jLCBkZWxpbWl0LCB3aGl0ZXNwYWNlLCBlc2NhcGluZywgaWRlbnRpZmllciwgY29tbWVudGVyfSBmcm9tICcuL1Rva2VuaXplci5qcydcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge29iamVjdFtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZSAodmFsdWUpIHtcblx0cmV0dXJuIGRlYWxsb2MocGFyc2UoJycsIG51bGwsIG51bGwsIG51bGwsIFsnJ10sIHZhbHVlID0gYWxsb2ModmFsdWUpLCAwLCBbMF0sIHZhbHVlKSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdD99IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmdbXX0gcnVsZVxuICogQHBhcmFtIHtzdHJpbmdbXX0gcnVsZXNcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJ1bGVzZXRzXG4gKiBAcGFyYW0ge251bWJlcltdfSBwc2V1ZG9cbiAqIEBwYXJhbSB7bnVtYmVyW119IHBvaW50c1xuICogQHBhcmFtIHtzdHJpbmdbXX0gZGVjbGFyYXRpb25zXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZSAodmFsdWUsIHJvb3QsIHBhcmVudCwgcnVsZSwgcnVsZXMsIHJ1bGVzZXRzLCBwc2V1ZG8sIHBvaW50cywgZGVjbGFyYXRpb25zKSB7XG5cdHZhciBpbmRleCA9IDBcblx0dmFyIG9mZnNldCA9IDBcblx0dmFyIGxlbmd0aCA9IHBzZXVkb1xuXHR2YXIgYXRydWxlID0gMFxuXHR2YXIgcHJvcGVydHkgPSAwXG5cdHZhciBwcmV2aW91cyA9IDBcblx0dmFyIHZhcmlhYmxlID0gMVxuXHR2YXIgc2Nhbm5pbmcgPSAxXG5cdHZhciBhbXBlcnNhbmQgPSAxXG5cdHZhciBjaGFyYWN0ZXIgPSAwXG5cdHZhciB0eXBlID0gJydcblx0dmFyIHByb3BzID0gcnVsZXNcblx0dmFyIGNoaWxkcmVuID0gcnVsZXNldHNcblx0dmFyIHJlZmVyZW5jZSA9IHJ1bGVcblx0dmFyIGNoYXJhY3RlcnMgPSB0eXBlXG5cblx0d2hpbGUgKHNjYW5uaW5nKVxuXHRcdHN3aXRjaCAocHJldmlvdXMgPSBjaGFyYWN0ZXIsIGNoYXJhY3RlciA9IG5leHQoKSkge1xuXHRcdFx0Ly8gKFxuXHRcdFx0Y2FzZSA0MDpcblx0XHRcdFx0aWYgKHByZXZpb3VzICE9IDEwOCAmJiBjaGFyYXQoY2hhcmFjdGVycywgbGVuZ3RoIC0gMSkgPT0gNTgpIHtcblx0XHRcdFx0XHRpZiAoaW5kZXhvZihjaGFyYWN0ZXJzICs9IHJlcGxhY2UoZGVsaW1pdChjaGFyYWN0ZXIpLCAnJicsICcmXFxmJyksICcmXFxmJykgIT0gLTEpXG5cdFx0XHRcdFx0XHRhbXBlcnNhbmQgPSAtMVxuXHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdH1cblx0XHRcdC8vIFwiICcgW1xuXHRcdFx0Y2FzZSAzNDogY2FzZSAzOTogY2FzZSA5MTpcblx0XHRcdFx0Y2hhcmFjdGVycyArPSBkZWxpbWl0KGNoYXJhY3Rlcilcblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIFxcdCBcXG4gXFxyIFxcc1xuXHRcdFx0Y2FzZSA5OiBjYXNlIDEwOiBjYXNlIDEzOiBjYXNlIDMyOlxuXHRcdFx0XHRjaGFyYWN0ZXJzICs9IHdoaXRlc3BhY2UocHJldmlvdXMpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyBcXFxuXHRcdFx0Y2FzZSA5Mjpcblx0XHRcdFx0Y2hhcmFjdGVycyArPSBlc2NhcGluZyhjYXJldCgpIC0gMSwgNylcblx0XHRcdFx0Y29udGludWVcblx0XHRcdC8vIC9cblx0XHRcdGNhc2UgNDc6XG5cdFx0XHRcdHN3aXRjaCAocGVlaygpKSB7XG5cdFx0XHRcdFx0Y2FzZSA0MjogY2FzZSA0Nzpcblx0XHRcdFx0XHRcdGFwcGVuZChjb21tZW50KGNvbW1lbnRlcihuZXh0KCksIGNhcmV0KCkpLCByb290LCBwYXJlbnQpLCBkZWNsYXJhdGlvbnMpXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRjaGFyYWN0ZXJzICs9ICcvJ1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyB7XG5cdFx0XHRjYXNlIDEyMyAqIHZhcmlhYmxlOlxuXHRcdFx0XHRwb2ludHNbaW5kZXgrK10gPSBzdHJsZW4oY2hhcmFjdGVycykgKiBhbXBlcnNhbmRcblx0XHRcdC8vIH0gOyBcXDBcblx0XHRcdGNhc2UgMTI1ICogdmFyaWFibGU6IGNhc2UgNTk6IGNhc2UgMDpcblx0XHRcdFx0c3dpdGNoIChjaGFyYWN0ZXIpIHtcblx0XHRcdFx0XHQvLyBcXDAgfVxuXHRcdFx0XHRcdGNhc2UgMDogY2FzZSAxMjU6IHNjYW5uaW5nID0gMFxuXHRcdFx0XHRcdC8vIDtcblx0XHRcdFx0XHRjYXNlIDU5ICsgb2Zmc2V0OiBpZiAoYW1wZXJzYW5kID09IC0xKSBjaGFyYWN0ZXJzID0gcmVwbGFjZShjaGFyYWN0ZXJzLCAvXFxmL2csICcnKVxuXHRcdFx0XHRcdFx0aWYgKHByb3BlcnR5ID4gMCAmJiAoc3RybGVuKGNoYXJhY3RlcnMpIC0gbGVuZ3RoKSlcblx0XHRcdFx0XHRcdFx0YXBwZW5kKHByb3BlcnR5ID4gMzIgPyBkZWNsYXJhdGlvbihjaGFyYWN0ZXJzICsgJzsnLCBydWxlLCBwYXJlbnQsIGxlbmd0aCAtIDEpIDogZGVjbGFyYXRpb24ocmVwbGFjZShjaGFyYWN0ZXJzLCAnICcsICcnKSArICc7JywgcnVsZSwgcGFyZW50LCBsZW5ndGggLSAyKSwgZGVjbGFyYXRpb25zKVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHQvLyBAIDtcblx0XHRcdFx0XHRjYXNlIDU5OiBjaGFyYWN0ZXJzICs9ICc7J1xuXHRcdFx0XHRcdC8vIHsgcnVsZS9hdC1ydWxlXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGFwcGVuZChyZWZlcmVuY2UgPSBydWxlc2V0KGNoYXJhY3RlcnMsIHJvb3QsIHBhcmVudCwgaW5kZXgsIG9mZnNldCwgcnVsZXMsIHBvaW50cywgdHlwZSwgcHJvcHMgPSBbXSwgY2hpbGRyZW4gPSBbXSwgbGVuZ3RoKSwgcnVsZXNldHMpXG5cblx0XHRcdFx0XHRcdGlmIChjaGFyYWN0ZXIgPT09IDEyMylcblx0XHRcdFx0XHRcdFx0aWYgKG9mZnNldCA9PT0gMClcblx0XHRcdFx0XHRcdFx0XHRwYXJzZShjaGFyYWN0ZXJzLCByb290LCByZWZlcmVuY2UsIHJlZmVyZW5jZSwgcHJvcHMsIHJ1bGVzZXRzLCBsZW5ndGgsIHBvaW50cywgY2hpbGRyZW4pXG5cdFx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKGF0cnVsZSA9PT0gOTkgJiYgY2hhcmF0KGNoYXJhY3RlcnMsIDMpID09PSAxMTAgPyAxMDAgOiBhdHJ1bGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGQgbCBtIHNcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgMTAwOiBjYXNlIDEwODogY2FzZSAxMDk6IGNhc2UgMTE1OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXJzZSh2YWx1ZSwgcmVmZXJlbmNlLCByZWZlcmVuY2UsIHJ1bGUgJiYgYXBwZW5kKHJ1bGVzZXQodmFsdWUsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCAwLCAwLCBydWxlcywgcG9pbnRzLCB0eXBlLCBydWxlcywgcHJvcHMgPSBbXSwgbGVuZ3RoKSwgY2hpbGRyZW4pLCBydWxlcywgY2hpbGRyZW4sIGxlbmd0aCwgcG9pbnRzLCBydWxlID8gcHJvcHMgOiBjaGlsZHJlbilcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhcnNlKGNoYXJhY3RlcnMsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCByZWZlcmVuY2UsIFsnJ10sIGNoaWxkcmVuLCAwLCBwb2ludHMsIGNoaWxkcmVuKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGluZGV4ID0gb2Zmc2V0ID0gcHJvcGVydHkgPSAwLCB2YXJpYWJsZSA9IGFtcGVyc2FuZCA9IDEsIHR5cGUgPSBjaGFyYWN0ZXJzID0gJycsIGxlbmd0aCA9IHBzZXVkb1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8gOlxuXHRcdFx0Y2FzZSA1ODpcblx0XHRcdFx0bGVuZ3RoID0gMSArIHN0cmxlbihjaGFyYWN0ZXJzKSwgcHJvcGVydHkgPSBwcmV2aW91c1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0aWYgKHZhcmlhYmxlIDwgMSlcblx0XHRcdFx0XHRpZiAoY2hhcmFjdGVyID09IDEyMylcblx0XHRcdFx0XHRcdC0tdmFyaWFibGVcblx0XHRcdFx0XHRlbHNlIGlmIChjaGFyYWN0ZXIgPT0gMTI1ICYmIHZhcmlhYmxlKysgPT0gMCAmJiBwcmV2KCkgPT0gMTI1KVxuXHRcdFx0XHRcdFx0Y29udGludWVcblxuXHRcdFx0XHRzd2l0Y2ggKGNoYXJhY3RlcnMgKz0gZnJvbShjaGFyYWN0ZXIpLCBjaGFyYWN0ZXIgKiB2YXJpYWJsZSkge1xuXHRcdFx0XHRcdC8vICZcblx0XHRcdFx0XHRjYXNlIDM4OlxuXHRcdFx0XHRcdFx0YW1wZXJzYW5kID0gb2Zmc2V0ID4gMCA/IDEgOiAoY2hhcmFjdGVycyArPSAnXFxmJywgLTEpXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdC8vICxcblx0XHRcdFx0XHRjYXNlIDQ0OlxuXHRcdFx0XHRcdFx0cG9pbnRzW2luZGV4KytdID0gKHN0cmxlbihjaGFyYWN0ZXJzKSAtIDEpICogYW1wZXJzYW5kLCBhbXBlcnNhbmQgPSAxXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdC8vIEBcblx0XHRcdFx0XHRjYXNlIDY0OlxuXHRcdFx0XHRcdFx0Ly8gLVxuXHRcdFx0XHRcdFx0aWYgKHBlZWsoKSA9PT0gNDUpXG5cdFx0XHRcdFx0XHRcdGNoYXJhY3RlcnMgKz0gZGVsaW1pdChuZXh0KCkpXG5cblx0XHRcdFx0XHRcdGF0cnVsZSA9IHBlZWsoKSwgb2Zmc2V0ID0gbGVuZ3RoID0gc3RybGVuKHR5cGUgPSBjaGFyYWN0ZXJzICs9IGlkZW50aWZpZXIoY2FyZXQoKSkpLCBjaGFyYWN0ZXIrK1xuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHQvLyAtXG5cdFx0XHRcdFx0Y2FzZSA0NTpcblx0XHRcdFx0XHRcdGlmIChwcmV2aW91cyA9PT0gNDUgJiYgc3RybGVuKGNoYXJhY3RlcnMpID09IDIpXG5cdFx0XHRcdFx0XHRcdHZhcmlhYmxlID0gMFxuXHRcdFx0XHR9XG5cdFx0fVxuXG5cdHJldHVybiBydWxlc2V0c1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0P30gcGFyZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJ1bGVzXG4gKiBAcGFyYW0ge251bWJlcltdfSBwb2ludHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmdbXX0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzZXQgKHZhbHVlLCByb290LCBwYXJlbnQsIGluZGV4LCBvZmZzZXQsIHJ1bGVzLCBwb2ludHMsIHR5cGUsIHByb3BzLCBjaGlsZHJlbiwgbGVuZ3RoKSB7XG5cdHZhciBwb3N0ID0gb2Zmc2V0IC0gMVxuXHR2YXIgcnVsZSA9IG9mZnNldCA9PT0gMCA/IHJ1bGVzIDogWycnXVxuXHR2YXIgc2l6ZSA9IHNpemVvZihydWxlKVxuXG5cdGZvciAodmFyIGkgPSAwLCBqID0gMCwgayA9IDA7IGkgPCBpbmRleDsgKytpKVxuXHRcdGZvciAodmFyIHggPSAwLCB5ID0gc3Vic3RyKHZhbHVlLCBwb3N0ICsgMSwgcG9zdCA9IGFicyhqID0gcG9pbnRzW2ldKSksIHogPSB2YWx1ZTsgeCA8IHNpemU7ICsreClcblx0XHRcdGlmICh6ID0gdHJpbShqID4gMCA/IHJ1bGVbeF0gKyAnICcgKyB5IDogcmVwbGFjZSh5LCAvJlxcZi9nLCBydWxlW3hdKSkpXG5cdFx0XHRcdHByb3BzW2srK10gPSB6XG5cblx0cmV0dXJuIG5vZGUodmFsdWUsIHJvb3QsIHBhcmVudCwgb2Zmc2V0ID09PSAwID8gUlVMRVNFVCA6IHR5cGUsIHByb3BzLCBjaGlsZHJlbiwgbGVuZ3RoKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0P30gcGFyZW50XG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21tZW50ICh2YWx1ZSwgcm9vdCwgcGFyZW50KSB7XG5cdHJldHVybiBub2RlKHZhbHVlLCByb290LCBwYXJlbnQsIENPTU1FTlQsIGZyb20oY2hhcigpKSwgc3Vic3RyKHZhbHVlLCAyLCAtMiksIDApXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3Q/fSBwYXJlbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY2xhcmF0aW9uICh2YWx1ZSwgcm9vdCwgcGFyZW50LCBsZW5ndGgpIHtcblx0cmV0dXJuIG5vZGUodmFsdWUsIHJvb3QsIHBhcmVudCwgREVDTEFSQVRJT04sIHN1YnN0cih2YWx1ZSwgMCwgbGVuZ3RoKSwgc3Vic3RyKHZhbHVlLCBsZW5ndGggKyAxLCAtMSksIGxlbmd0aClcbn1cbiIsImltcG9ydCB7SU1QT1JULCBMQVlFUiwgQ09NTUVOVCwgUlVMRVNFVCwgREVDTEFSQVRJT04sIEtFWUZSQU1FU30gZnJvbSAnLi9FbnVtLmpzJ1xuaW1wb3J0IHtzdHJsZW4sIHNpemVvZn0gZnJvbSAnLi9VdGlsaXR5LmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0W119IGNoaWxkcmVuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplIChjaGlsZHJlbiwgY2FsbGJhY2spIHtcblx0dmFyIG91dHB1dCA9ICcnXG5cdHZhciBsZW5ndGggPSBzaXplb2YoY2hpbGRyZW4pXG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcblx0XHRvdXRwdXQgKz0gY2FsbGJhY2soY2hpbGRyZW5baV0sIGksIGNoaWxkcmVuLCBjYWxsYmFjaykgfHwgJydcblxuXHRyZXR1cm4gb3V0cHV0XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtvYmplY3RbXX0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkgKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbiwgY2FsbGJhY2spIHtcblx0c3dpdGNoIChlbGVtZW50LnR5cGUpIHtcblx0XHRjYXNlIExBWUVSOiBpZiAoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGgpIGJyZWFrXG5cdFx0Y2FzZSBJTVBPUlQ6IGNhc2UgREVDTEFSQVRJT046IHJldHVybiBlbGVtZW50LnJldHVybiA9IGVsZW1lbnQucmV0dXJuIHx8IGVsZW1lbnQudmFsdWVcblx0XHRjYXNlIENPTU1FTlQ6IHJldHVybiAnJ1xuXHRcdGNhc2UgS0VZRlJBTUVTOiByZXR1cm4gZWxlbWVudC5yZXR1cm4gPSBlbGVtZW50LnZhbHVlICsgJ3snICsgc2VyaWFsaXplKGVsZW1lbnQuY2hpbGRyZW4sIGNhbGxiYWNrKSArICd9J1xuXHRcdGNhc2UgUlVMRVNFVDogZWxlbWVudC52YWx1ZSA9IGVsZW1lbnQucHJvcHMuam9pbignLCcpXG5cdH1cblxuXHRyZXR1cm4gc3RybGVuKGNoaWxkcmVuID0gc2VyaWFsaXplKGVsZW1lbnQuY2hpbGRyZW4sIGNhbGxiYWNrKSkgPyBlbGVtZW50LnJldHVybiA9IGVsZW1lbnQudmFsdWUgKyAneycgKyBjaGlsZHJlbiArICd9JyA6ICcnXG59XG4iLCJpbXBvcnQge01TLCBNT1osIFdFQktJVCwgUlVMRVNFVCwgS0VZRlJBTUVTLCBERUNMQVJBVElPTn0gZnJvbSAnLi9FbnVtLmpzJ1xuaW1wb3J0IHttYXRjaCwgY2hhcmF0LCBzdWJzdHIsIHN0cmxlbiwgc2l6ZW9mLCByZXBsYWNlLCBjb21iaW5lfSBmcm9tICcuL1V0aWxpdHkuanMnXG5pbXBvcnQge2NvcHksIHRva2VuaXplfSBmcm9tICcuL1Rva2VuaXplci5qcydcbmltcG9ydCB7c2VyaWFsaXplfSBmcm9tICcuL1NlcmlhbGl6ZXIuanMnXG5pbXBvcnQge3ByZWZpeH0gZnJvbSAnLi9QcmVmaXhlci5qcydcblxuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uW119IGNvbGxlY3Rpb25cbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZSAoY29sbGVjdGlvbikge1xuXHR2YXIgbGVuZ3RoID0gc2l6ZW9mKGNvbGxlY3Rpb24pXG5cblx0cmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG5cdFx0dmFyIG91dHB1dCA9ICcnXG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuXHRcdFx0b3V0cHV0ICs9IGNvbGxlY3Rpb25baV0oZWxlbWVudCwgaW5kZXgsIGNoaWxkcmVuLCBjYWxsYmFjaykgfHwgJydcblxuXHRcdHJldHVybiBvdXRwdXRcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzaGVldCAoY2FsbGJhY2spIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0aWYgKCFlbGVtZW50LnJvb3QpXG5cdFx0XHRpZiAoZWxlbWVudCA9IGVsZW1lbnQucmV0dXJuKVxuXHRcdFx0XHRjYWxsYmFjayhlbGVtZW50KVxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtvYmplY3RbXX0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhlciAoZWxlbWVudCwgaW5kZXgsIGNoaWxkcmVuLCBjYWxsYmFjaykge1xuXHRpZiAoZWxlbWVudC5sZW5ndGggPiAtMSlcblx0XHRpZiAoIWVsZW1lbnQucmV0dXJuKVxuXHRcdFx0c3dpdGNoIChlbGVtZW50LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBERUNMQVJBVElPTjogZWxlbWVudC5yZXR1cm4gPSBwcmVmaXgoZWxlbWVudC52YWx1ZSwgZWxlbWVudC5sZW5ndGgsIGNoaWxkcmVuKVxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRjYXNlIEtFWUZSQU1FUzpcblx0XHRcdFx0XHRyZXR1cm4gc2VyaWFsaXplKFtjb3B5KGVsZW1lbnQsIHt2YWx1ZTogcmVwbGFjZShlbGVtZW50LnZhbHVlLCAnQCcsICdAJyArIFdFQktJVCl9KV0sIGNhbGxiYWNrKVxuXHRcdFx0XHRjYXNlIFJVTEVTRVQ6XG5cdFx0XHRcdFx0aWYgKGVsZW1lbnQubGVuZ3RoKVxuXHRcdFx0XHRcdFx0cmV0dXJuIGNvbWJpbmUoZWxlbWVudC5wcm9wcywgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAobWF0Y2godmFsdWUsIC8oOjpwbGFjXFx3K3w6cmVhZC1cXHcrKS8pKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gOnJlYWQtKG9ubHl8d3JpdGUpXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnOnJlYWQtb25seSc6IGNhc2UgJzpyZWFkLXdyaXRlJzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZXJpYWxpemUoW2NvcHkoZWxlbWVudCwge3Byb3BzOiBbcmVwbGFjZSh2YWx1ZSwgLzoocmVhZC1cXHcrKS8sICc6JyArIE1PWiArICckMScpXX0pXSwgY2FsbGJhY2spXG5cdFx0XHRcdFx0XHRcdFx0Ly8gOnBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnOjpwbGFjZWhvbGRlcic6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VyaWFsaXplKFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29weShlbGVtZW50LCB7cHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCAnOicgKyBXRUJLSVQgKyAnaW5wdXQtJDEnKV19KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29weShlbGVtZW50LCB7cHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCAnOicgKyBNT1ogKyAnJDEnKV19KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29weShlbGVtZW50LCB7cHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCBNUyArICdpbnB1dC0kMScpXX0pXG5cdFx0XHRcdFx0XHRcdFx0XHRdLCBjYWxsYmFjaylcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHJldHVybiAnJ1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gZWxlbWVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge29iamVjdFtdfSBjaGlsZHJlblxuICovXG5leHBvcnQgZnVuY3Rpb24gbmFtZXNwYWNlIChlbGVtZW50KSB7XG5cdHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG5cdFx0Y2FzZSBSVUxFU0VUOlxuXHRcdFx0ZWxlbWVudC5wcm9wcyA9IGVsZW1lbnQucHJvcHMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gY29tYmluZSh0b2tlbml6ZSh2YWx1ZSksIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGNoaWxkcmVuKSB7XG5cdFx0XHRcdFx0c3dpdGNoIChjaGFyYXQodmFsdWUsIDApKSB7XG5cdFx0XHRcdFx0XHQvLyBcXGZcblx0XHRcdFx0XHRcdGNhc2UgMTI6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzdWJzdHIodmFsdWUsIDEsIHN0cmxlbih2YWx1ZSkpXG5cdFx0XHRcdFx0XHQvLyBcXDAgKCArID4gflxuXHRcdFx0XHRcdFx0Y2FzZSAwOiBjYXNlIDQwOiBjYXNlIDQzOiBjYXNlIDYyOiBjYXNlIDEyNjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0XHRcdFx0XHQvLyA6XG5cdFx0XHRcdFx0XHRjYXNlIDU4OlxuXHRcdFx0XHRcdFx0XHRpZiAoY2hpbGRyZW5bKytpbmRleF0gPT09ICdnbG9iYWwnKVxuXHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuW2luZGV4XSA9ICcnLCBjaGlsZHJlblsrK2luZGV4XSA9ICdcXGYnICsgc3Vic3RyKGNoaWxkcmVuW2luZGV4XSwgaW5kZXggPSAxLCAtMSlcblx0XHRcdFx0XHRcdC8vIFxcc1xuXHRcdFx0XHRcdFx0Y2FzZSAzMjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGluZGV4ID09PSAxID8gJycgOiB2YWx1ZVxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0c3dpdGNoIChpbmRleCkge1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgMDogZWxlbWVudCA9IHZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2l6ZW9mKGNoaWxkcmVuKSA+IDEgPyAnJyA6IHZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBpbmRleCA9IHNpemVvZihjaGlsZHJlbikgLSAxOiBjYXNlIDI6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gaW5kZXggPT09IDIgPyB2YWx1ZSArIGVsZW1lbnQgKyBlbGVtZW50IDogdmFsdWUgKyBlbGVtZW50XG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0fVxufVxuIiwiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgeyBtZW1vaXplIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdAZW1vdGlvbi9zaGVldCc7XG5pbXBvcnQgeyBkZWFsbG9jLCBhbGxvYywgbmV4dCwgdG9rZW4sIGZyb20sIHBlZWssIGRlbGltaXQsIHNsaWNlLCBwb3NpdGlvbiwgUlVMRVNFVCwgY29tYmluZSwgbWF0Y2gsIHNlcmlhbGl6ZSwgY29weSwgcmVwbGFjZSwgV0VCS0lULCBNT1osIE1TLCBLRVlGUkFNRVMsIERFQ0xBUkFUSU9OLCBoYXNoLCBjaGFyYXQsIHN0cmxlbiwgaW5kZXhvZiwgc3RyaW5naWZ5LCBydWxlc2hlZXQsIG1pZGRsZXdhcmUsIGNvbXBpbGUgfSBmcm9tICdzdHlsaXMnO1xuaW1wb3J0ICdAZW1vdGlvbi93ZWFrLW1lbW9pemUnO1xuaW1wb3J0ICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIGlkZW50aWZpZXJXaXRoUG9pbnRUcmFja2luZyA9IGZ1bmN0aW9uIGlkZW50aWZpZXJXaXRoUG9pbnRUcmFja2luZyhiZWdpbiwgcG9pbnRzLCBpbmRleCkge1xuICB2YXIgcHJldmlvdXMgPSAwO1xuICB2YXIgY2hhcmFjdGVyID0gMDtcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHByZXZpb3VzID0gY2hhcmFjdGVyO1xuICAgIGNoYXJhY3RlciA9IHBlZWsoKTsgLy8gJlxcZlxuXG4gICAgaWYgKHByZXZpb3VzID09PSAzOCAmJiBjaGFyYWN0ZXIgPT09IDEyKSB7XG4gICAgICBwb2ludHNbaW5kZXhdID0gMTtcbiAgICB9XG5cbiAgICBpZiAodG9rZW4oY2hhcmFjdGVyKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbmV4dCgpO1xuICB9XG5cbiAgcmV0dXJuIHNsaWNlKGJlZ2luLCBwb3NpdGlvbik7XG59O1xuXG52YXIgdG9SdWxlcyA9IGZ1bmN0aW9uIHRvUnVsZXMocGFyc2VkLCBwb2ludHMpIHtcbiAgLy8gcHJldGVuZCB3ZSd2ZSBzdGFydGVkIHdpdGggYSBjb21tYVxuICB2YXIgaW5kZXggPSAtMTtcbiAgdmFyIGNoYXJhY3RlciA9IDQ0O1xuXG4gIGRvIHtcbiAgICBzd2l0Y2ggKHRva2VuKGNoYXJhY3RlcikpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgLy8gJlxcZlxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSAzOCAmJiBwZWVrKCkgPT09IDEyKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBub3QgMTAwJSBjb3JyZWN0LCB3ZSBkb24ndCBhY2NvdW50IGZvciBsaXRlcmFsIHNlcXVlbmNlcyBoZXJlIC0gbGlrZSBmb3IgZXhhbXBsZSBxdW90ZWQgc3RyaW5nc1xuICAgICAgICAgIC8vIHN0eWxpcyBpbnNlcnRzIFxcZiBhZnRlciAmIHRvIGtub3cgd2hlbiAmIHdoZXJlIGl0IHNob3VsZCByZXBsYWNlIHRoaXMgc2VxdWVuY2Ugd2l0aCB0aGUgY29udGV4dCBzZWxlY3RvclxuICAgICAgICAgIC8vIGFuZCB3aGVuIGl0IHNob3VsZCBqdXN0IGNvbmNhdGVuYXRlIHRoZSBvdXRlciBhbmQgaW5uZXIgc2VsZWN0b3JzXG4gICAgICAgICAgLy8gaXQncyB2ZXJ5IHVubGlrZWx5IGZvciB0aGlzIHNlcXVlbmNlIHRvIGFjdHVhbGx5IGFwcGVhciBpbiBhIGRpZmZlcmVudCBjb250ZXh0LCBzbyB3ZSBqdXN0IGxldmVyYWdlIHRoaXMgZmFjdCBoZXJlXG4gICAgICAgICAgcG9pbnRzW2luZGV4XSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJzZWRbaW5kZXhdICs9IGlkZW50aWZpZXJXaXRoUG9pbnRUcmFja2luZyhwb3NpdGlvbiAtIDEsIHBvaW50cywgaW5kZXgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICBwYXJzZWRbaW5kZXhdICs9IGRlbGltaXQoY2hhcmFjdGVyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNDpcbiAgICAgICAgLy8gY29tbWFcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gNDQpIHtcbiAgICAgICAgICAvLyBjb2xvblxuICAgICAgICAgIHBhcnNlZFsrK2luZGV4XSA9IHBlZWsoKSA9PT0gNTggPyAnJlxcZicgOiAnJztcbiAgICAgICAgICBwb2ludHNbaW5kZXhdID0gcGFyc2VkW2luZGV4XS5sZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgLy8gZmFsbHRocm91Z2hcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcGFyc2VkW2luZGV4XSArPSBmcm9tKGNoYXJhY3Rlcik7XG4gICAgfVxuICB9IHdoaWxlIChjaGFyYWN0ZXIgPSBuZXh0KCkpO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG52YXIgZ2V0UnVsZXMgPSBmdW5jdGlvbiBnZXRSdWxlcyh2YWx1ZSwgcG9pbnRzKSB7XG4gIHJldHVybiBkZWFsbG9jKHRvUnVsZXMoYWxsb2ModmFsdWUpLCBwb2ludHMpKTtcbn07IC8vIFdlYWtTZXQgd291bGQgYmUgbW9yZSBhcHByb3ByaWF0ZSwgYnV0IG9ubHkgV2Vha01hcCBpcyBzdXBwb3J0ZWQgaW4gSUUxMVxuXG5cbnZhciBmaXhlZEVsZW1lbnRzID0gLyogI19fUFVSRV9fICovbmV3IFdlYWtNYXAoKTtcbnZhciBjb21wYXQgPSBmdW5jdGlvbiBjb21wYXQoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC50eXBlICE9PSAncnVsZScgfHwgIWVsZW1lbnQucGFyZW50IHx8IC8vIHBvc2l0aXZlIC5sZW5ndGggaW5kaWNhdGVzIHRoYXQgdGhpcyBydWxlIGNvbnRhaW5zIHBzZXVkb1xuICAvLyBuZWdhdGl2ZSAubGVuZ3RoIGluZGljYXRlcyB0aGF0IHRoaXMgcnVsZSBoYXMgYmVlbiBhbHJlYWR5IHByZWZpeGVkXG4gIGVsZW1lbnQubGVuZ3RoIDwgMSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB2YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG4gIHZhciBwYXJlbnQgPSBlbGVtZW50LnBhcmVudDtcbiAgdmFyIGlzSW1wbGljaXRSdWxlID0gZWxlbWVudC5jb2x1bW4gPT09IHBhcmVudC5jb2x1bW4gJiYgZWxlbWVudC5saW5lID09PSBwYXJlbnQubGluZTtcblxuICB3aGlsZSAocGFyZW50LnR5cGUgIT09ICdydWxlJykge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgaWYgKCFwYXJlbnQpIHJldHVybjtcbiAgfSAvLyBzaG9ydC1jaXJjdWl0IGZvciB0aGUgc2ltcGxlc3QgY2FzZVxuXG5cbiAgaWYgKGVsZW1lbnQucHJvcHMubGVuZ3RoID09PSAxICYmIHZhbHVlLmNoYXJDb2RlQXQoMCkgIT09IDU4XG4gIC8qIGNvbG9uICovXG4gICYmICFmaXhlZEVsZW1lbnRzLmdldChwYXJlbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIGlmIHRoaXMgaXMgYW4gaW1wbGljaXRseSBpbnNlcnRlZCBydWxlICh0aGUgb25lIGVhZ2VybHkgaW5zZXJ0ZWQgYXQgdGhlIGVhY2ggbmV3IG5lc3RlZCBsZXZlbClcbiAgLy8gdGhlbiB0aGUgcHJvcHMgaGFzIGFscmVhZHkgYmVlbiBtYW5pcHVsYXRlZCBiZWZvcmVoYW5kIGFzIHRoZXkgdGhhdCBhcnJheSBpcyBzaGFyZWQgYmV0d2VlbiBpdCBhbmQgaXRzIFwicnVsZSBwYXJlbnRcIlxuXG5cbiAgaWYgKGlzSW1wbGljaXRSdWxlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZml4ZWRFbGVtZW50cy5zZXQoZWxlbWVudCwgdHJ1ZSk7XG4gIHZhciBwb2ludHMgPSBbXTtcbiAgdmFyIHJ1bGVzID0gZ2V0UnVsZXModmFsdWUsIHBvaW50cyk7XG4gIHZhciBwYXJlbnRSdWxlcyA9IHBhcmVudC5wcm9wcztcblxuICBmb3IgKHZhciBpID0gMCwgayA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFyZW50UnVsZXMubGVuZ3RoOyBqKyssIGsrKykge1xuICAgICAgZWxlbWVudC5wcm9wc1trXSA9IHBvaW50c1tpXSA/IHJ1bGVzW2ldLnJlcGxhY2UoLyZcXGYvZywgcGFyZW50UnVsZXNbal0pIDogcGFyZW50UnVsZXNbal0gKyBcIiBcIiArIHJ1bGVzW2ldO1xuICAgIH1cbiAgfVxufTtcbnZhciByZW1vdmVMYWJlbCA9IGZ1bmN0aW9uIHJlbW92ZUxhYmVsKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2RlY2wnKSB7XG4gICAgdmFyIHZhbHVlID0gZWxlbWVudC52YWx1ZTtcblxuICAgIGlmICggLy8gY2hhcmNvZGUgZm9yIGxcbiAgICB2YWx1ZS5jaGFyQ29kZUF0KDApID09PSAxMDggJiYgLy8gY2hhcmNvZGUgZm9yIGJcbiAgICB2YWx1ZS5jaGFyQ29kZUF0KDIpID09PSA5OCkge1xuICAgICAgLy8gdGhpcyBpZ25vcmVzIGxhYmVsXG4gICAgICBlbGVtZW50W1wicmV0dXJuXCJdID0gJyc7XG4gICAgICBlbGVtZW50LnZhbHVlID0gJyc7XG4gICAgfVxuICB9XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1mYWxsdGhyb3VnaCAqL1xuXG5mdW5jdGlvbiBwcmVmaXgodmFsdWUsIGxlbmd0aCkge1xuICBzd2l0Y2ggKGhhc2godmFsdWUsIGxlbmd0aCkpIHtcbiAgICAvLyBjb2xvci1hZGp1c3RcbiAgICBjYXNlIDUxMDM6XG4gICAgICByZXR1cm4gV0VCS0lUICsgJ3ByaW50LScgKyB2YWx1ZSArIHZhbHVlO1xuICAgIC8vIGFuaW1hdGlvbiwgYW5pbWF0aW9uLShkZWxheXxkaXJlY3Rpb258ZHVyYXRpb258ZmlsbC1tb2RlfGl0ZXJhdGlvbi1jb3VudHxuYW1lfHBsYXktc3RhdGV8dGltaW5nLWZ1bmN0aW9uKVxuXG4gICAgY2FzZSA1NzM3OlxuICAgIGNhc2UgNDIwMTpcbiAgICBjYXNlIDMxNzc6XG4gICAgY2FzZSAzNDMzOlxuICAgIGNhc2UgMTY0MTpcbiAgICBjYXNlIDQ0NTc6XG4gICAgY2FzZSAyOTIxOiAvLyB0ZXh0LWRlY29yYXRpb24sIGZpbHRlciwgY2xpcC1wYXRoLCBiYWNrZmFjZS12aXNpYmlsaXR5LCBjb2x1bW4sIGJveC1kZWNvcmF0aW9uLWJyZWFrXG5cbiAgICBjYXNlIDU1NzI6XG4gICAgY2FzZSA2MzU2OlxuICAgIGNhc2UgNTg0NDpcbiAgICBjYXNlIDMxOTE6XG4gICAgY2FzZSA2NjQ1OlxuICAgIGNhc2UgMzAwNTogLy8gbWFzaywgbWFzay1pbWFnZSwgbWFzay0obW9kZXxjbGlwfHNpemUpLCBtYXNrLShyZXBlYXR8b3JpZ2luKSwgbWFzay1wb3NpdGlvbiwgbWFzay1jb21wb3NpdGUsXG5cbiAgICBjYXNlIDYzOTE6XG4gICAgY2FzZSA1ODc5OlxuICAgIGNhc2UgNTYyMzpcbiAgICBjYXNlIDYxMzU6XG4gICAgY2FzZSA0NTk5OlxuICAgIGNhc2UgNDg1NTogLy8gYmFja2dyb3VuZC1jbGlwLCBjb2x1bW5zLCBjb2x1bW4tKGNvdW50fGZpbGx8Z2FwfHJ1bGV8cnVsZS1jb2xvcnxydWxlLXN0eWxlfHJ1bGUtd2lkdGh8c3Bhbnx3aWR0aClcblxuICAgIGNhc2UgNDIxNTpcbiAgICBjYXNlIDYzODk6XG4gICAgY2FzZSA1MTA5OlxuICAgIGNhc2UgNTM2NTpcbiAgICBjYXNlIDU2MjE6XG4gICAgY2FzZSAzODI5OlxuICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgdmFsdWU7XG4gICAgLy8gYXBwZWFyYW5jZSwgdXNlci1zZWxlY3QsIHRyYW5zZm9ybSwgaHlwaGVucywgdGV4dC1zaXplLWFkanVzdFxuXG4gICAgY2FzZSA1MzQ5OlxuICAgIGNhc2UgNDI0NjpcbiAgICBjYXNlIDQ4MTA6XG4gICAgY2FzZSA2OTY4OlxuICAgIGNhc2UgMjc1NjpcbiAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1PWiArIHZhbHVlICsgTVMgKyB2YWx1ZSArIHZhbHVlO1xuICAgIC8vIGZsZXgsIGZsZXgtZGlyZWN0aW9uXG5cbiAgICBjYXNlIDY4Mjg6XG4gICAgY2FzZSA0MjY4OlxuICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyB2YWx1ZSArIHZhbHVlO1xuICAgIC8vIG9yZGVyXG5cbiAgICBjYXNlIDYxNjU6XG4gICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArICdmbGV4LScgKyB2YWx1ZSArIHZhbHVlO1xuICAgIC8vIGFsaWduLWl0ZW1zXG5cbiAgICBjYXNlIDUxODc6XG4gICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyByZXBsYWNlKHZhbHVlLCAvKFxcdyspLisoOlteXSspLywgV0VCS0lUICsgJ2JveC0kMSQyJyArIE1TICsgJ2ZsZXgtJDEkMicpICsgdmFsdWU7XG4gICAgLy8gYWxpZ24tc2VsZlxuXG4gICAgY2FzZSA1NDQzOlxuICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyAnZmxleC1pdGVtLScgKyByZXBsYWNlKHZhbHVlLCAvZmxleC18LXNlbGYvLCAnJykgKyB2YWx1ZTtcbiAgICAvLyBhbGlnbi1jb250ZW50XG5cbiAgICBjYXNlIDQ2NzU6XG4gICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArICdmbGV4LWxpbmUtcGFjaycgKyByZXBsYWNlKHZhbHVlLCAvYWxpZ24tY29udGVudHxmbGV4LXwtc2VsZi8sICcnKSArIHZhbHVlO1xuICAgIC8vIGZsZXgtc2hyaW5rXG5cbiAgICBjYXNlIDU1NDg6XG4gICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsICdzaHJpbmsnLCAnbmVnYXRpdmUnKSArIHZhbHVlO1xuICAgIC8vIGZsZXgtYmFzaXNcblxuICAgIGNhc2UgNTI5MjpcbiAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgJ2Jhc2lzJywgJ3ByZWZlcnJlZC1zaXplJykgKyB2YWx1ZTtcbiAgICAvLyBmbGV4LWdyb3dcblxuICAgIGNhc2UgNjA2MDpcbiAgICAgIHJldHVybiBXRUJLSVQgKyAnYm94LScgKyByZXBsYWNlKHZhbHVlLCAnLWdyb3cnLCAnJykgKyBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgJ2dyb3cnLCAncG9zaXRpdmUnKSArIHZhbHVlO1xuICAgIC8vIHRyYW5zaXRpb25cblxuICAgIGNhc2UgNDU1NDpcbiAgICAgIHJldHVybiBXRUJLSVQgKyByZXBsYWNlKHZhbHVlLCAvKFteLV0pKHRyYW5zZm9ybSkvZywgJyQxJyArIFdFQktJVCArICckMicpICsgdmFsdWU7XG4gICAgLy8gY3Vyc29yXG5cbiAgICBjYXNlIDYxODc6XG4gICAgICByZXR1cm4gcmVwbGFjZShyZXBsYWNlKHJlcGxhY2UodmFsdWUsIC8oem9vbS18Z3JhYikvLCBXRUJLSVQgKyAnJDEnKSwgLyhpbWFnZS1zZXQpLywgV0VCS0lUICsgJyQxJyksIHZhbHVlLCAnJykgKyB2YWx1ZTtcbiAgICAvLyBiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kLWltYWdlXG5cbiAgICBjYXNlIDU0OTU6XG4gICAgY2FzZSAzOTU5OlxuICAgICAgcmV0dXJuIHJlcGxhY2UodmFsdWUsIC8oaW1hZ2Utc2V0XFwoW15dKikvLCBXRUJLSVQgKyAnJDEnICsgJyRgJDEnKTtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnRcblxuICAgIGNhc2UgNDk2ODpcbiAgICAgIHJldHVybiByZXBsYWNlKHJlcGxhY2UodmFsdWUsIC8oLis6KShmbGV4LSk/KC4qKS8sIFdFQktJVCArICdib3gtcGFjazokMycgKyBNUyArICdmbGV4LXBhY2s6JDMnKSwgL3MuKy1iW147XSsvLCAnanVzdGlmeScpICsgV0VCS0lUICsgdmFsdWUgKyB2YWx1ZTtcbiAgICAvLyAobWFyZ2lufHBhZGRpbmcpLWlubGluZS0oc3RhcnR8ZW5kKVxuXG4gICAgY2FzZSA0MDk1OlxuICAgIGNhc2UgMzU4MzpcbiAgICBjYXNlIDQwNjg6XG4gICAgY2FzZSAyNTMyOlxuICAgICAgcmV0dXJuIHJlcGxhY2UodmFsdWUsIC8oLispLWlubGluZSguKykvLCBXRUJLSVQgKyAnJDEkMicpICsgdmFsdWU7XG4gICAgLy8gKG1pbnxtYXgpPyh3aWR0aHxoZWlnaHR8aW5saW5lLXNpemV8YmxvY2stc2l6ZSlcblxuICAgIGNhc2UgODExNjpcbiAgICBjYXNlIDcwNTk6XG4gICAgY2FzZSA1NzUzOlxuICAgIGNhc2UgNTUzNTpcbiAgICBjYXNlIDU0NDU6XG4gICAgY2FzZSA1NzAxOlxuICAgIGNhc2UgNDkzMzpcbiAgICBjYXNlIDQ2Nzc6XG4gICAgY2FzZSA1NTMzOlxuICAgIGNhc2UgNTc4OTpcbiAgICBjYXNlIDUwMjE6XG4gICAgY2FzZSA0NzY1OlxuICAgICAgLy8gc3RyZXRjaCwgbWF4LWNvbnRlbnQsIG1pbi1jb250ZW50LCBmaWxsLWF2YWlsYWJsZVxuICAgICAgaWYgKHN0cmxlbih2YWx1ZSkgLSAxIC0gbGVuZ3RoID4gNikgc3dpdGNoIChjaGFyYXQodmFsdWUsIGxlbmd0aCArIDEpKSB7XG4gICAgICAgIC8vIChtKWF4LWNvbnRlbnQsIChtKWluLWNvbnRlbnRcbiAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgLy8gLVxuICAgICAgICAgIGlmIChjaGFyYXQodmFsdWUsIGxlbmd0aCArIDQpICE9PSA0NSkgYnJlYWs7XG4gICAgICAgIC8vIChmKWlsbC1hdmFpbGFibGUsIChmKWl0LWNvbnRlbnRcblxuICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICByZXR1cm4gcmVwbGFjZSh2YWx1ZSwgLyguKzopKC4rKS0oW15dKykvLCAnJDEnICsgV0VCS0lUICsgJyQyLSQzJyArICckMScgKyBNT1ogKyAoY2hhcmF0KHZhbHVlLCBsZW5ndGggKyAzKSA9PSAxMDggPyAnJDMnIDogJyQyLSQzJykpICsgdmFsdWU7XG4gICAgICAgIC8vIChzKXRyZXRjaFxuXG4gICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgIHJldHVybiB+aW5kZXhvZih2YWx1ZSwgJ3N0cmV0Y2gnKSA/IHByZWZpeChyZXBsYWNlKHZhbHVlLCAnc3RyZXRjaCcsICdmaWxsLWF2YWlsYWJsZScpLCBsZW5ndGgpICsgdmFsdWUgOiB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIC8vIHBvc2l0aW9uOiBzdGlja3lcblxuICAgIGNhc2UgNDk0OTpcbiAgICAgIC8vIChzKXRpY2t5P1xuICAgICAgaWYgKGNoYXJhdCh2YWx1ZSwgbGVuZ3RoICsgMSkgIT09IDExNSkgYnJlYWs7XG4gICAgLy8gZGlzcGxheTogKGZsZXh8aW5saW5lLWZsZXgpXG5cbiAgICBjYXNlIDY0NDQ6XG4gICAgICBzd2l0Y2ggKGNoYXJhdCh2YWx1ZSwgc3RybGVuKHZhbHVlKSAtIDMgLSAofmluZGV4b2YodmFsdWUsICchaW1wb3J0YW50JykgJiYgMTApKSkge1xuICAgICAgICAvLyBzdGljKGspeVxuICAgICAgICBjYXNlIDEwNzpcbiAgICAgICAgICByZXR1cm4gcmVwbGFjZSh2YWx1ZSwgJzonLCAnOicgKyBXRUJLSVQpICsgdmFsdWU7XG4gICAgICAgIC8vIChpbmxpbmUtKT9mbChlKXhcblxuICAgICAgICBjYXNlIDEwMTpcbiAgICAgICAgICByZXR1cm4gcmVwbGFjZSh2YWx1ZSwgLyguKzopKFteOyFdKykoO3whLispPy8sICckMScgKyBXRUJLSVQgKyAoY2hhcmF0KHZhbHVlLCAxNCkgPT09IDQ1ID8gJ2lubGluZS0nIDogJycpICsgJ2JveCQzJyArICckMScgKyBXRUJLSVQgKyAnJDIkMycgKyAnJDEnICsgTVMgKyAnJDJib3gkMycpICsgdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIC8vIHdyaXRpbmctbW9kZVxuXG4gICAgY2FzZSA1OTM2OlxuICAgICAgc3dpdGNoIChjaGFyYXQodmFsdWUsIGxlbmd0aCArIDExKSkge1xuICAgICAgICAvLyB2ZXJ0aWNhbC1sKHIpXG4gICAgICAgIGNhc2UgMTE0OlxuICAgICAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgL1tzdmhdXFx3Ky1bdGJscl17Mn0vLCAndGInKSArIHZhbHVlO1xuICAgICAgICAvLyB2ZXJ0aWNhbC1yKGwpXG5cbiAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyByZXBsYWNlKHZhbHVlLCAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sICd0Yi1ybCcpICsgdmFsdWU7XG4gICAgICAgIC8vIGhvcml6b250YWwoLSl0YlxuXG4gICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyByZXBsYWNlKHZhbHVlLCAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sICdscicpICsgdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgdmFsdWUgKyB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxudmFyIHByZWZpeGVyID0gZnVuY3Rpb24gcHJlZml4ZXIoZWxlbWVudCwgaW5kZXgsIGNoaWxkcmVuLCBjYWxsYmFjaykge1xuICBpZiAoZWxlbWVudC5sZW5ndGggPiAtMSkgaWYgKCFlbGVtZW50W1wicmV0dXJuXCJdKSBzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuICAgIGNhc2UgREVDTEFSQVRJT046XG4gICAgICBlbGVtZW50W1wicmV0dXJuXCJdID0gcHJlZml4KGVsZW1lbnQudmFsdWUsIGVsZW1lbnQubGVuZ3RoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBLRVlGUkFNRVM6XG4gICAgICByZXR1cm4gc2VyaWFsaXplKFtjb3B5KGVsZW1lbnQsIHtcbiAgICAgICAgdmFsdWU6IHJlcGxhY2UoZWxlbWVudC52YWx1ZSwgJ0AnLCAnQCcgKyBXRUJLSVQpXG4gICAgICB9KV0sIGNhbGxiYWNrKTtcblxuICAgIGNhc2UgUlVMRVNFVDpcbiAgICAgIGlmIChlbGVtZW50Lmxlbmd0aCkgcmV0dXJuIGNvbWJpbmUoZWxlbWVudC5wcm9wcywgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHN3aXRjaCAobWF0Y2godmFsdWUsIC8oOjpwbGFjXFx3K3w6cmVhZC1cXHcrKS8pKSB7XG4gICAgICAgICAgLy8gOnJlYWQtKG9ubHl8d3JpdGUpXG4gICAgICAgICAgY2FzZSAnOnJlYWQtb25seSc6XG4gICAgICAgICAgY2FzZSAnOnJlYWQtd3JpdGUnOlxuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZShbY29weShlbGVtZW50LCB7XG4gICAgICAgICAgICAgIHByb3BzOiBbcmVwbGFjZSh2YWx1ZSwgLzoocmVhZC1cXHcrKS8sICc6JyArIE1PWiArICckMScpXVxuICAgICAgICAgICAgfSldLCBjYWxsYmFjayk7XG4gICAgICAgICAgLy8gOnBsYWNlaG9sZGVyXG5cbiAgICAgICAgICBjYXNlICc6OnBsYWNlaG9sZGVyJzpcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemUoW2NvcHkoZWxlbWVudCwge1xuICAgICAgICAgICAgICBwcm9wczogW3JlcGxhY2UodmFsdWUsIC86KHBsYWNcXHcrKS8sICc6JyArIFdFQktJVCArICdpbnB1dC0kMScpXVxuICAgICAgICAgICAgfSksIGNvcHkoZWxlbWVudCwge1xuICAgICAgICAgICAgICBwcm9wczogW3JlcGxhY2UodmFsdWUsIC86KHBsYWNcXHcrKS8sICc6JyArIE1PWiArICckMScpXVxuICAgICAgICAgICAgfSksIGNvcHkoZWxlbWVudCwge1xuICAgICAgICAgICAgICBwcm9wczogW3JlcGxhY2UodmFsdWUsIC86KHBsYWNcXHcrKS8sIE1TICsgJ2lucHV0LSQxJyldXG4gICAgICAgICAgICB9KV0sIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgZGVmYXVsdFN0eWxpc1BsdWdpbnMgPSBbcHJlZml4ZXJdO1xuXG52YXIgY3JlYXRlQ2FjaGUgPSBmdW5jdGlvbiBjcmVhdGVDYWNoZShvcHRpb25zKSB7XG4gIHZhciBrZXkgPSBvcHRpb25zLmtleTtcblxuICBpZiAoa2V5ID09PSAnY3NzJykge1xuICAgIHZhciBzc3JTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVbZGF0YS1lbW90aW9uXTpub3QoW2RhdGEtc10pXCIpOyAvLyBnZXQgU1NSZWQgc3R5bGVzIG91dCBvZiB0aGUgd2F5IG9mIFJlYWN0J3MgaHlkcmF0aW9uXG4gICAgLy8gZG9jdW1lbnQuaGVhZCBpcyBhIHNhZmUgcGxhY2UgdG8gbW92ZSB0aGVtIHRvKHRob3VnaCBub3RlIGRvY3VtZW50LmhlYWQgaXMgbm90IG5lY2Vzc2FyaWx5IHRoZSBsYXN0IHBsYWNlIHRoZXkgd2lsbCBiZSlcbiAgICAvLyBub3RlIHRoaXMgdmVyeSB2ZXJ5IGludGVudGlvbmFsbHkgdGFyZ2V0cyBhbGwgc3R5bGUgZWxlbWVudHMgcmVnYXJkbGVzcyBvZiB0aGUga2V5IHRvIGVuc3VyZVxuICAgIC8vIHRoYXQgY3JlYXRpbmcgYSBjYWNoZSB3b3JrcyBpbnNpZGUgb2YgcmVuZGVyIG9mIGEgUmVhY3QgY29tcG9uZW50XG5cbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHNzclN0eWxlcywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIC8vIHdlIHdhbnQgdG8gb25seSBtb3ZlIGVsZW1lbnRzIHdoaWNoIGhhdmUgYSBzcGFjZSBpbiB0aGUgZGF0YS1lbW90aW9uIGF0dHJpYnV0ZSB2YWx1ZVxuICAgICAgLy8gYmVjYXVzZSB0aGF0IGluZGljYXRlcyB0aGF0IGl0IGlzIGFuIEVtb3Rpb24gMTEgc2VydmVyLXNpZGUgcmVuZGVyZWQgc3R5bGUgZWxlbWVudHNcbiAgICAgIC8vIHdoaWxlIHdlIHdpbGwgYWxyZWFkeSBpZ25vcmUgRW1vdGlvbiAxMSBjbGllbnQtc2lkZSBpbnNlcnRlZCBzdHlsZXMgYmVjYXVzZSBvZiB0aGUgOm5vdChbZGF0YS1zXSkgcGFydCBpbiB0aGUgc2VsZWN0b3JcbiAgICAgIC8vIEVtb3Rpb24gMTAgY2xpZW50LXNpZGUgaW5zZXJ0ZWQgc3R5bGVzIGRpZCBub3QgaGF2ZSBkYXRhLXMgKGJ1dCBpbXBvcnRhbnRseSBkaWQgbm90IGhhdmUgYSBzcGFjZSBpbiB0aGVpciBkYXRhLWVtb3Rpb24gYXR0cmlidXRlcylcbiAgICAgIC8vIHNvIGNoZWNraW5nIGZvciB0aGUgc3BhY2UgZW5zdXJlcyB0aGF0IGxvYWRpbmcgRW1vdGlvbiAxMSBhZnRlciBFbW90aW9uIDEwIGhhcyBpbnNlcnRlZCBzb21lIHN0eWxlc1xuICAgICAgLy8gd2lsbCBub3QgcmVzdWx0IGluIHRoZSBFbW90aW9uIDEwIHN0eWxlcyBiZWluZyBkZXN0cm95ZWRcbiAgICAgIHZhciBkYXRhRW1vdGlvbkF0dHJpYnV0ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWVtb3Rpb24nKTtcblxuICAgICAgaWYgKGRhdGFFbW90aW9uQXR0cmlidXRlLmluZGV4T2YoJyAnKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcycsICcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBzdHlsaXNQbHVnaW5zID0gb3B0aW9ucy5zdHlsaXNQbHVnaW5zIHx8IGRlZmF1bHRTdHlsaXNQbHVnaW5zO1xuXG4gIHZhciBpbnNlcnRlZCA9IHt9O1xuICB2YXIgY29udGFpbmVyO1xuICB2YXIgbm9kZXNUb0h5ZHJhdGUgPSBbXTtcblxuICB7XG4gICAgY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXIgfHwgZG9jdW1lbnQuaGVhZDtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKCAvLyB0aGlzIG1lYW5zIHdlIHdpbGwgaWdub3JlIGVsZW1lbnRzIHdoaWNoIGRvbid0IGhhdmUgYSBzcGFjZSBpbiB0aGVtIHdoaWNoXG4gICAgLy8gbWVhbnMgdGhhdCB0aGUgc3R5bGUgZWxlbWVudHMgd2UncmUgbG9va2luZyBhdCBhcmUgb25seSBFbW90aW9uIDExIHNlcnZlci1yZW5kZXJlZCBzdHlsZSBlbGVtZW50c1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtkYXRhLWVtb3Rpb25ePVxcXCJcIiArIGtleSArIFwiIFxcXCJdXCIpLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIGF0dHJpYiA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1lbW90aW9uXCIpLnNwbGl0KCcgJyk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXR0cmliLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGluc2VydGVkW2F0dHJpYltpXV0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBub2Rlc1RvSHlkcmF0ZS5wdXNoKG5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIF9pbnNlcnQ7XG5cbiAgdmFyIG9tbmlwcmVzZW50UGx1Z2lucyA9IFtjb21wYXQsIHJlbW92ZUxhYmVsXTtcblxuICB7XG4gICAgdmFyIGN1cnJlbnRTaGVldDtcbiAgICB2YXIgZmluYWxpemluZ1BsdWdpbnMgPSBbc3RyaW5naWZ5LCBydWxlc2hlZXQoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgIGN1cnJlbnRTaGVldC5pbnNlcnQocnVsZSk7XG4gICAgfSldO1xuICAgIHZhciBzZXJpYWxpemVyID0gbWlkZGxld2FyZShvbW5pcHJlc2VudFBsdWdpbnMuY29uY2F0KHN0eWxpc1BsdWdpbnMsIGZpbmFsaXppbmdQbHVnaW5zKSk7XG5cbiAgICB2YXIgc3R5bGlzID0gZnVuY3Rpb24gc3R5bGlzKHN0eWxlcykge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZShjb21waWxlKHN0eWxlcyksIHNlcmlhbGl6ZXIpO1xuICAgIH07XG5cbiAgICBfaW5zZXJ0ID0gZnVuY3Rpb24gaW5zZXJ0KHNlbGVjdG9yLCBzZXJpYWxpemVkLCBzaGVldCwgc2hvdWxkQ2FjaGUpIHtcbiAgICAgIGN1cnJlbnRTaGVldCA9IHNoZWV0O1xuXG4gICAgICBzdHlsaXMoc2VsZWN0b3IgPyBzZWxlY3RvciArIFwie1wiICsgc2VyaWFsaXplZC5zdHlsZXMgKyBcIn1cIiA6IHNlcmlhbGl6ZWQuc3R5bGVzKTtcblxuICAgICAgaWYgKHNob3VsZENhY2hlKSB7XG4gICAgICAgIGNhY2hlLmluc2VydGVkW3NlcmlhbGl6ZWQubmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSB7XG4gICAga2V5OiBrZXksXG4gICAgc2hlZXQ6IG5ldyBTdHlsZVNoZWV0KHtcbiAgICAgIGtleToga2V5LFxuICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICBub25jZTogb3B0aW9ucy5ub25jZSxcbiAgICAgIHNwZWVkeTogb3B0aW9ucy5zcGVlZHksXG4gICAgICBwcmVwZW5kOiBvcHRpb25zLnByZXBlbmQsXG4gICAgICBpbnNlcnRpb25Qb2ludDogb3B0aW9ucy5pbnNlcnRpb25Qb2ludFxuICAgIH0pLFxuICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxuICAgIGluc2VydGVkOiBpbnNlcnRlZCxcbiAgICByZWdpc3RlcmVkOiB7fSxcbiAgICBpbnNlcnQ6IF9pbnNlcnRcbiAgfTtcbiAgY2FjaGUuc2hlZXQuaHlkcmF0ZShub2Rlc1RvSHlkcmF0ZSk7XG4gIHJldHVybiBjYWNoZTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUNhY2hlIGFzIGRlZmF1bHQgfTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge307XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5Gb3J3YXJkUmVmXSA9IEZPUldBUkRfUkVGX1NUQVRJQ1M7XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5NZW1vXSA9IE1FTU9fU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgLy8gUmVhY3QgdjE2LjExIGFuZCBiZWxvd1xuICBpZiAocmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH0gLy8gUmVhY3QgdjE2LjEyIGFuZCBhYm92ZVxuXG5cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbJyQkdHlwZW9mJ11dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIHZhciBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsInZhciBpc0Jyb3dzZXIgPSB0cnVlO1xuXG5mdW5jdGlvbiBnZXRSZWdpc3RlcmVkU3R5bGVzKHJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIGNsYXNzTmFtZXMpIHtcbiAgdmFyIHJhd0NsYXNzTmFtZSA9ICcnO1xuICBjbGFzc05hbWVzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgaWYgKHJlZ2lzdGVyZWRbY2xhc3NOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZWdpc3RlcmVkU3R5bGVzLnB1c2gocmVnaXN0ZXJlZFtjbGFzc05hbWVdICsgXCI7XCIpO1xuICAgIH0gZWxzZSBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICByYXdDbGFzc05hbWUgKz0gY2xhc3NOYW1lICsgXCIgXCI7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJhd0NsYXNzTmFtZTtcbn1cbnZhciByZWdpc3RlclN0eWxlcyA9IGZ1bmN0aW9uIHJlZ2lzdGVyU3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBpc1N0cmluZ1RhZykge1xuICB2YXIgY2xhc3NOYW1lID0gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG5cbiAgaWYgKCAvLyB3ZSBvbmx5IG5lZWQgdG8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIHJlZ2lzdGVyZWQgY2FjaGUgaWYgdGhlXG4gIC8vIGNsYXNzIG5hbWUgY291bGQgYmUgdXNlZCBmdXJ0aGVyIGRvd25cbiAgLy8gdGhlIHRyZWUgYnV0IGlmIGl0J3MgYSBzdHJpbmcgdGFnLCB3ZSBrbm93IGl0IHdvbid0XG4gIC8vIHNvIHdlIGRvbid0IGhhdmUgdG8gYWRkIGl0IHRvIHJlZ2lzdGVyZWQgY2FjaGUuXG4gIC8vIHRoaXMgaW1wcm92ZXMgbWVtb3J5IHVzYWdlIHNpbmNlIHdlIGNhbiBhdm9pZCBzdG9yaW5nIHRoZSB3aG9sZSBzdHlsZSBzdHJpbmdcbiAgKGlzU3RyaW5nVGFnID09PSBmYWxzZSB8fCAvLyB3ZSBuZWVkIHRvIGFsd2F5cyBzdG9yZSBpdCBpZiB3ZSdyZSBpbiBjb21wYXQgbW9kZSBhbmRcbiAgLy8gaW4gbm9kZSBzaW5jZSBlbW90aW9uLXNlcnZlciByZWxpZXMgb24gd2hldGhlciBhIHN0eWxlIGlzIGluXG4gIC8vIHRoZSByZWdpc3RlcmVkIGNhY2hlIHRvIGtub3cgd2hldGhlciBhIHN0eWxlIGlzIGdsb2JhbCBvciBub3RcbiAgLy8gYWxzbywgbm90ZSB0aGF0IHRoaXMgY2hlY2sgd2lsbCBiZSBkZWFkIGNvZGUgZWxpbWluYXRlZCBpbiB0aGUgYnJvd3NlclxuICBpc0Jyb3dzZXIgPT09IGZhbHNlICkgJiYgY2FjaGUucmVnaXN0ZXJlZFtjbGFzc05hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWNoZS5yZWdpc3RlcmVkW2NsYXNzTmFtZV0gPSBzZXJpYWxpemVkLnN0eWxlcztcbiAgfVxufTtcbnZhciBpbnNlcnRTdHlsZXMgPSBmdW5jdGlvbiBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKSB7XG4gIHJlZ2lzdGVyU3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBpc1N0cmluZ1RhZyk7XG4gIHZhciBjbGFzc05hbWUgPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcblxuICBpZiAoY2FjaGUuaW5zZXJ0ZWRbc2VyaWFsaXplZC5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBzZXJpYWxpemVkO1xuXG4gICAgZG8ge1xuICAgICAgY2FjaGUuaW5zZXJ0KHNlcmlhbGl6ZWQgPT09IGN1cnJlbnQgPyBcIi5cIiArIGNsYXNzTmFtZSA6ICcnLCBjdXJyZW50LCBjYWNoZS5zaGVldCwgdHJ1ZSk7XG5cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfSB3aGlsZSAoY3VycmVudCAhPT0gdW5kZWZpbmVkKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgZ2V0UmVnaXN0ZXJlZFN0eWxlcywgaW5zZXJ0U3R5bGVzLCByZWdpc3RlclN0eWxlcyB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9nYXJ5Y291cnQvbXVybXVyaGFzaC1qc1xuLy8gUG9ydGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FhcHBsZWJ5L3NtaGFzaGVyL2Jsb2IvNjFhMDUzMGYyODI3N2YyZTg1MGJmYzM5NjAwY2U2MWQwMmI1MThkZS9zcmMvTXVybXVySGFzaDIuY3BwI0wzNy1MODZcbmZ1bmN0aW9uIG11cm11cjIoc3RyKSB7XG4gIC8vICdtJyBhbmQgJ3InIGFyZSBtaXhpbmcgY29uc3RhbnRzIGdlbmVyYXRlZCBvZmZsaW5lLlxuICAvLyBUaGV5J3JlIG5vdCByZWFsbHkgJ21hZ2ljJywgdGhleSBqdXN0IGhhcHBlbiB0byB3b3JrIHdlbGwuXG4gIC8vIGNvbnN0IG0gPSAweDViZDFlOTk1O1xuICAvLyBjb25zdCByID0gMjQ7XG4gIC8vIEluaXRpYWxpemUgdGhlIGhhc2hcbiAgdmFyIGggPSAwOyAvLyBNaXggNCBieXRlcyBhdCBhIHRpbWUgaW50byB0aGUgaGFzaFxuXG4gIHZhciBrLFxuICAgICAgaSA9IDAsXG4gICAgICBsZW4gPSBzdHIubGVuZ3RoO1xuXG4gIGZvciAoOyBsZW4gPj0gNDsgKytpLCBsZW4gLT0gNCkge1xuICAgIGsgPSBzdHIuY2hhckNvZGVBdChpKSAmIDB4ZmYgfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDggfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDE2IHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAyNDtcbiAgICBrID1cbiAgICAvKiBNYXRoLmltdWwoaywgbSk6ICovXG4gICAgKGsgJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoayA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgICBrIF49XG4gICAgLyogayA+Pj4gcjogKi9cbiAgICBrID4+PiAyNDtcbiAgICBoID1cbiAgICAvKiBNYXRoLmltdWwoaywgbSk6ICovXG4gICAgKGsgJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoayA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KSBeXG4gICAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAgIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIH0gLy8gSGFuZGxlIHRoZSBsYXN0IGZldyBieXRlcyBvZiB0aGUgaW5wdXQgYXJyYXlcblxuXG4gIHN3aXRjaCAobGVuKSB7XG4gICAgY2FzZSAzOlxuICAgICAgaCBePSAoc3RyLmNoYXJDb2RlQXQoaSArIDIpICYgMHhmZikgPDwgMTY7XG5cbiAgICBjYXNlIDI6XG4gICAgICBoIF49IChzdHIuY2hhckNvZGVBdChpICsgMSkgJiAweGZmKSA8PCA4O1xuXG4gICAgY2FzZSAxOlxuICAgICAgaCBePSBzdHIuY2hhckNvZGVBdChpKSAmIDB4ZmY7XG4gICAgICBoID1cbiAgICAgIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgICAgIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIH0gLy8gRG8gYSBmZXcgZmluYWwgbWl4ZXMgb2YgdGhlIGhhc2ggdG8gZW5zdXJlIHRoZSBsYXN0IGZld1xuICAvLyBieXRlcyBhcmUgd2VsbC1pbmNvcnBvcmF0ZWQuXG5cblxuICBoIF49IGggPj4+IDEzO1xuICBoID1cbiAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICByZXR1cm4gKChoIF4gaCA+Pj4gMTUpID4+PiAwKS50b1N0cmluZygzNik7XG59XG5cbmV4cG9ydCB7IG11cm11cjIgYXMgZGVmYXVsdCB9O1xuIiwidmFyIHVuaXRsZXNzS2V5cyA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIGFzcGVjdFJhdGlvOiAxLFxuICBib3JkZXJJbWFnZU91dHNldDogMSxcbiAgYm9yZGVySW1hZ2VTbGljZTogMSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogMSxcbiAgYm94RmxleDogMSxcbiAgYm94RmxleEdyb3VwOiAxLFxuICBib3hPcmRpbmFsR3JvdXA6IDEsXG4gIGNvbHVtbkNvdW50OiAxLFxuICBjb2x1bW5zOiAxLFxuICBmbGV4OiAxLFxuICBmbGV4R3JvdzogMSxcbiAgZmxleFBvc2l0aXZlOiAxLFxuICBmbGV4U2hyaW5rOiAxLFxuICBmbGV4TmVnYXRpdmU6IDEsXG4gIGZsZXhPcmRlcjogMSxcbiAgZ3JpZFJvdzogMSxcbiAgZ3JpZFJvd0VuZDogMSxcbiAgZ3JpZFJvd1NwYW46IDEsXG4gIGdyaWRSb3dTdGFydDogMSxcbiAgZ3JpZENvbHVtbjogMSxcbiAgZ3JpZENvbHVtbkVuZDogMSxcbiAgZ3JpZENvbHVtblNwYW46IDEsXG4gIGdyaWRDb2x1bW5TdGFydDogMSxcbiAgbXNHcmlkUm93OiAxLFxuICBtc0dyaWRSb3dTcGFuOiAxLFxuICBtc0dyaWRDb2x1bW46IDEsXG4gIG1zR3JpZENvbHVtblNwYW46IDEsXG4gIGZvbnRXZWlnaHQ6IDEsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIG9yZGVyOiAxLFxuICBvcnBoYW5zOiAxLFxuICBzY2FsZTogMSxcbiAgdGFiU2l6ZTogMSxcbiAgd2lkb3dzOiAxLFxuICB6SW5kZXg6IDEsXG4gIHpvb206IDEsXG4gIFdlYmtpdExpbmVDbGFtcDogMSxcbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogMSxcbiAgZmxvb2RPcGFjaXR5OiAxLFxuICBzdG9wT3BhY2l0eTogMSxcbiAgc3Ryb2tlRGFzaGFycmF5OiAxLFxuICBzdHJva2VEYXNob2Zmc2V0OiAxLFxuICBzdHJva2VNaXRlcmxpbWl0OiAxLFxuICBzdHJva2VPcGFjaXR5OiAxLFxuICBzdHJva2VXaWR0aDogMVxufTtcblxuZXhwb3J0IHsgdW5pdGxlc3NLZXlzIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBoYXNoU3RyaW5nIGZyb20gJ0BlbW90aW9uL2hhc2gnO1xuaW1wb3J0IHVuaXRsZXNzIGZyb20gJ0BlbW90aW9uL3VuaXRsZXNzJztcbmltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgaXNEZXZlbG9wbWVudCA9IGZhbHNlO1xuXG52YXIgaHlwaGVuYXRlUmVnZXggPSAvW0EtWl18Xm1zL2c7XG52YXIgYW5pbWF0aW9uUmVnZXggPSAvX0VNT18oW15fXSs/KV8oW15dKj8pX0VNT18vZztcblxudmFyIGlzQ3VzdG9tUHJvcGVydHkgPSBmdW5jdGlvbiBpc0N1c3RvbVByb3BlcnR5KHByb3BlcnR5KSB7XG4gIHJldHVybiBwcm9wZXJ0eS5jaGFyQ29kZUF0KDEpID09PSA0NTtcbn07XG5cbnZhciBpc1Byb2Nlc3NhYmxlVmFsdWUgPSBmdW5jdGlvbiBpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbic7XG59O1xuXG52YXIgcHJvY2Vzc1N0eWxlTmFtZSA9IC8qICNfX1BVUkVfXyAqL21lbW9pemUoZnVuY3Rpb24gKHN0eWxlTmFtZSkge1xuICByZXR1cm4gaXNDdXN0b21Qcm9wZXJ0eShzdHlsZU5hbWUpID8gc3R5bGVOYW1lIDogc3R5bGVOYW1lLnJlcGxhY2UoaHlwaGVuYXRlUmVnZXgsICctJCYnKS50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbnZhciBwcm9jZXNzU3R5bGVWYWx1ZSA9IGZ1bmN0aW9uIHByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWUpIHtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdhbmltYXRpb24nOlxuICAgIGNhc2UgJ2FuaW1hdGlvbk5hbWUnOlxuICAgICAge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKGFuaW1hdGlvblJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gsIHAxLCBwMikge1xuICAgICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgICBuYW1lOiBwMSxcbiAgICAgICAgICAgICAgc3R5bGVzOiBwMixcbiAgICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHAxO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuICBpZiAodW5pdGxlc3Nba2V5XSAhPT0gMSAmJiAhaXNDdXN0b21Qcm9wZXJ0eShrZXkpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdmFsdWUgKyAncHgnO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxudmFyIG5vQ29tcG9uZW50U2VsZWN0b3JNZXNzYWdlID0gJ0NvbXBvbmVudCBzZWxlY3RvcnMgY2FuIG9ubHkgYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoICcgKyAnQGVtb3Rpb24vYmFiZWwtcGx1Z2luLCB0aGUgc3djIEVtb3Rpb24gcGx1Z2luLCBvciBhbm90aGVyIEVtb3Rpb24tYXdhcmUgJyArICdjb21waWxlciB0cmFuc2Zvcm0uJztcblxuZnVuY3Rpb24gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgaW50ZXJwb2xhdGlvbikge1xuICBpZiAoaW50ZXJwb2xhdGlvbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIGNvbXBvbmVudFNlbGVjdG9yID0gaW50ZXJwb2xhdGlvbjtcblxuICBpZiAoY29tcG9uZW50U2VsZWN0b3IuX19lbW90aW9uX3N0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICByZXR1cm4gY29tcG9uZW50U2VsZWN0b3I7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGVvZiBpbnRlcnBvbGF0aW9uKSB7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICB7XG4gICAgICAgIHZhciBrZXlmcmFtZXMgPSBpbnRlcnBvbGF0aW9uO1xuXG4gICAgICAgIGlmIChrZXlmcmFtZXMuYW5pbSA9PT0gMSkge1xuICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgIG5hbWU6IGtleWZyYW1lcy5uYW1lLFxuICAgICAgICAgICAgc3R5bGVzOiBrZXlmcmFtZXMuc3R5bGVzLFxuICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4ga2V5ZnJhbWVzLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VyaWFsaXplZFN0eWxlcyA9IGludGVycG9sYXRpb247XG5cbiAgICAgICAgaWYgKHNlcmlhbGl6ZWRTdHlsZXMuc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IHNlcmlhbGl6ZWRTdHlsZXMubmV4dDtcblxuICAgICAgICAgIGlmIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vdCB0aGUgbW9zdCBlZmZpY2llbnQgdGhpbmcgZXZlciBidXQgdGhpcyBpcyBhIHByZXR0eSByYXJlIGNhc2VcbiAgICAgICAgICAgIC8vIGFuZCB0aGVyZSB3aWxsIGJlIHZlcnkgZmV3IGl0ZXJhdGlvbnMgb2YgdGhpcyBnZW5lcmFsbHlcbiAgICAgICAgICAgIHdoaWxlIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IG5leHQubmFtZSxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IG5leHQuc3R5bGVzLFxuICAgICAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzdHlsZXMgPSBzZXJpYWxpemVkU3R5bGVzLnN0eWxlcyArIFwiO1wiO1xuICAgICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3JlYXRlU3RyaW5nRnJvbU9iamVjdChtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgaW50ZXJwb2xhdGlvbik7XG4gICAgICB9XG5cbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICB7XG4gICAgICAgIGlmIChtZXJnZWRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIHByZXZpb3VzQ3Vyc29yID0gY3Vyc29yO1xuICAgICAgICAgIHZhciByZXN1bHQgPSBpbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzKTtcbiAgICAgICAgICBjdXJzb3IgPSBwcmV2aW91c0N1cnNvcjtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgcmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICB9IC8vIGZpbmFsaXplIHN0cmluZyB2YWx1ZXMgKHJlZ3VsYXIgc3RyaW5ncyBhbmQgZnVuY3Rpb25zIGludGVycG9sYXRlZCBpbnRvIGNzcyBjYWxscylcblxuXG4gIHZhciBhc1N0cmluZyA9IGludGVycG9sYXRpb247XG5cbiAgaWYgKHJlZ2lzdGVyZWQgPT0gbnVsbCkge1xuICAgIHJldHVybiBhc1N0cmluZztcbiAgfVxuXG4gIHZhciBjYWNoZWQgPSByZWdpc3RlcmVkW2FzU3RyaW5nXTtcbiAgcmV0dXJuIGNhY2hlZCAhPT0gdW5kZWZpbmVkID8gY2FjaGVkIDogYXNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0cmluZ0Zyb21PYmplY3QobWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIG9iaikge1xuICB2YXIgc3RyaW5nID0gJyc7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdHJpbmcgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgb2JqW2ldKSArIFwiO1wiO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICB2YXIgdmFsdWUgPSBvYmpba2V5XTtcblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFyIGFzU3RyaW5nID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHJlZ2lzdGVyZWQgIT0gbnVsbCAmJiByZWdpc3RlcmVkW2FzU3RyaW5nXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3RyaW5nICs9IGtleSArIFwie1wiICsgcmVnaXN0ZXJlZFthc1N0cmluZ10gKyBcIn1cIjtcbiAgICAgICAgfSBlbHNlIGlmIChpc1Byb2Nlc3NhYmxlVmFsdWUoYXNTdHJpbmcpKSB7XG4gICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoa2V5KSArIFwiOlwiICsgcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCBhc1N0cmluZykgKyBcIjtcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUicgJiYgaXNEZXZlbG9wbWVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihub0NvbXBvbmVudFNlbGVjdG9yTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlWzBdID09PSAnc3RyaW5nJyAmJiAocmVnaXN0ZXJlZCA9PSBudWxsIHx8IHJlZ2lzdGVyZWRbdmFsdWVbMF1dID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHZhbHVlLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgaWYgKGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZVtfaV0pKSB7XG4gICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKGtleSkgKyBcIjpcIiArIHByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWVbX2ldKSArIFwiO1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaW50ZXJwb2xhdGVkID0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgdmFsdWUpO1xuXG4gICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgICAgICAgICBjYXNlICdhbmltYXRpb25OYW1lJzpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKGtleSkgKyBcIjpcIiArIGludGVycG9sYXRlZCArIFwiO1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHtcblxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBrZXkgKyBcIntcIiArIGludGVycG9sYXRlZCArIFwifVwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxudmFyIGxhYmVsUGF0dGVybiA9IC9sYWJlbDpcXHMqKFteXFxzO3tdKylcXHMqKDt8JCkvZzsgLy8gdGhpcyBpcyB0aGUgY3Vyc29yIGZvciBrZXlmcmFtZXNcbi8vIGtleWZyYW1lcyBhcmUgc3RvcmVkIG9uIHRoZSBTZXJpYWxpemVkU3R5bGVzIG9iamVjdCBhcyBhIGxpbmtlZCBsaXN0XG5cbnZhciBjdXJzb3I7XG5mdW5jdGlvbiBzZXJpYWxpemVTdHlsZXMoYXJncywgcmVnaXN0ZXJlZCwgbWVyZ2VkUHJvcHMpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0JyAmJiBhcmdzWzBdICE9PSBudWxsICYmIGFyZ3NbMF0uc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYXJnc1swXTtcbiAgfVxuXG4gIHZhciBzdHJpbmdNb2RlID0gdHJ1ZTtcbiAgdmFyIHN0eWxlcyA9ICcnO1xuICBjdXJzb3IgPSB1bmRlZmluZWQ7XG4gIHZhciBzdHJpbmdzID0gYXJnc1swXTtcblxuICBpZiAoc3RyaW5ncyA9PSBudWxsIHx8IHN0cmluZ3MucmF3ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdHJpbmdNb2RlID0gZmFsc2U7XG4gICAgc3R5bGVzICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHN0cmluZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBhc1RlbXBsYXRlU3RyaW5nc0FyciA9IHN0cmluZ3M7XG5cbiAgICBzdHlsZXMgKz0gYXNUZW1wbGF0ZVN0cmluZ3NBcnJbMF07XG4gIH0gLy8gd2Ugc3RhcnQgYXQgMSBzaW5jZSB3ZSd2ZSBhbHJlYWR5IGhhbmRsZWQgdGhlIGZpcnN0IGFyZ1xuXG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3R5bGVzICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGFyZ3NbaV0pO1xuXG4gICAgaWYgKHN0cmluZ01vZGUpIHtcbiAgICAgIHZhciB0ZW1wbGF0ZVN0cmluZ3NBcnIgPSBzdHJpbmdzO1xuXG4gICAgICBzdHlsZXMgKz0gdGVtcGxhdGVTdHJpbmdzQXJyW2ldO1xuICAgIH1cbiAgfSAvLyB1c2luZyBhIGdsb2JhbCByZWdleCB3aXRoIC5leGVjIGlzIHN0YXRlZnVsIHNvIGxhc3RJbmRleCBoYXMgdG8gYmUgcmVzZXQgZWFjaCB0aW1lXG5cblxuICBsYWJlbFBhdHRlcm4ubGFzdEluZGV4ID0gMDtcbiAgdmFyIGlkZW50aWZpZXJOYW1lID0gJyc7XG4gIHZhciBtYXRjaDsgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YjgwOWMyY2YyOTQ5ODAwYTBmNjFmYjVcblxuICB3aGlsZSAoKG1hdGNoID0gbGFiZWxQYXR0ZXJuLmV4ZWMoc3R5bGVzKSkgIT09IG51bGwpIHtcbiAgICBpZGVudGlmaWVyTmFtZSArPSAnLScgKyBtYXRjaFsxXTtcbiAgfVxuXG4gIHZhciBuYW1lID0gaGFzaFN0cmluZyhzdHlsZXMpICsgaWRlbnRpZmllck5hbWU7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHN0eWxlczogc3R5bGVzLFxuICAgIG5leHQ6IGN1cnNvclxuICB9O1xufVxuXG5leHBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudmFyIHN5bmNGYWxsYmFjayA9IGZ1bmN0aW9uIHN5bmNGYWxsYmFjayhjcmVhdGUpIHtcbiAgcmV0dXJuIGNyZWF0ZSgpO1xufTtcblxudmFyIHVzZUluc2VydGlvbkVmZmVjdCA9IFJlYWN0Wyd1c2VJbnNlcnRpb24nICsgJ0VmZmVjdCddID8gUmVhY3RbJ3VzZUluc2VydGlvbicgKyAnRWZmZWN0J10gOiBmYWxzZTtcbnZhciB1c2VJbnNlcnRpb25FZmZlY3RBbHdheXNXaXRoU3luY0ZhbGxiYWNrID0gdXNlSW5zZXJ0aW9uRWZmZWN0IHx8IHN5bmNGYWxsYmFjaztcbnZhciB1c2VJbnNlcnRpb25FZmZlY3RXaXRoTGF5b3V0RmFsbGJhY2sgPSB1c2VJbnNlcnRpb25FZmZlY3QgfHwgUmVhY3QudXNlTGF5b3V0RWZmZWN0O1xuXG5leHBvcnQgeyB1c2VJbnNlcnRpb25FZmZlY3RBbHdheXNXaXRoU3luY0ZhbGxiYWNrLCB1c2VJbnNlcnRpb25FZmZlY3RXaXRoTGF5b3V0RmFsbGJhY2sgfTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQsIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHdlYWtNZW1vaXplIGZyb20gJ0BlbW90aW9uL3dlYWstbWVtb2l6ZSc7XG5pbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MgZnJvbSAnLi4vX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IGdldFJlZ2lzdGVyZWRTdHlsZXMsIHJlZ2lzdGVyU3R5bGVzLCBpbnNlcnRTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuaW1wb3J0IHsgdXNlSW5zZXJ0aW9uRWZmZWN0QWx3YXlzV2l0aFN5bmNGYWxsYmFjayB9IGZyb20gJ0BlbW90aW9uL3VzZS1pbnNlcnRpb24tZWZmZWN0LXdpdGgtZmFsbGJhY2tzJztcblxudmFyIGlzRGV2ZWxvcG1lbnQgPSBmYWxzZTtcblxudmFyIEVtb3Rpb25DYWNoZUNvbnRleHQgPSAvKiAjX19QVVJFX18gKi9SZWFjdC5jcmVhdGVDb250ZXh0KCAvLyB3ZSdyZSBkb2luZyB0aGlzIHRvIGF2b2lkIHByZWNvbnN0cnVjdCdzIGRlYWQgY29kZSBlbGltaW5hdGlvbiBpbiB0aGlzIG9uZSBjYXNlXG4vLyBiZWNhdXNlIHRoaXMgbW9kdWxlIGlzIHByaW1hcmlseSBpbnRlbmRlZCBmb3IgdGhlIGJyb3dzZXIgYW5kIG5vZGVcbi8vIGJ1dCBpdCdzIGFsc28gcmVxdWlyZWQgaW4gcmVhY3QgbmF0aXZlIGFuZCBzaW1pbGFyIGVudmlyb25tZW50cyBzb21ldGltZXNcbi8vIGFuZCB3ZSBjb3VsZCBoYXZlIGEgc3BlY2lhbCBidWlsZCBqdXN0IGZvciB0aGF0XG4vLyBidXQgdGhpcyBpcyBtdWNoIGVhc2llciBhbmQgdGhlIG5hdGl2ZSBwYWNrYWdlc1xuLy8gbWlnaHQgdXNlIGEgZGlmZmVyZW50IHRoZW1lIGNvbnRleHQgaW4gdGhlIGZ1dHVyZSBhbnl3YXlcbnR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgPyAvKiAjX19QVVJFX18gKi9jcmVhdGVDYWNoZSh7XG4gIGtleTogJ2Nzcydcbn0pIDogbnVsbCk7XG5cbnZhciBDYWNoZVByb3ZpZGVyID0gRW1vdGlvbkNhY2hlQ29udGV4dC5Qcm92aWRlcjtcbnZhciBfX3Vuc2FmZV91c2VFbW90aW9uQ2FjaGUgPSBmdW5jdGlvbiB1c2VFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KEVtb3Rpb25DYWNoZUNvbnRleHQpO1xufTtcblxudmFyIHdpdGhFbW90aW9uQ2FjaGUgPSBmdW5jdGlvbiB3aXRoRW1vdGlvbkNhY2hlKGZ1bmMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gICAgLy8gdGhlIGNhY2hlIHdpbGwgbmV2ZXIgYmUgbnVsbCBpbiB0aGUgYnJvd3NlclxuICAgIHZhciBjYWNoZSA9IHVzZUNvbnRleHQoRW1vdGlvbkNhY2hlQ29udGV4dCk7XG4gICAgcmV0dXJuIGZ1bmMocHJvcHMsIGNhY2hlLCByZWYpO1xuICB9KTtcbn07XG5cbnZhciBUaGVtZUNvbnRleHQgPSAvKiAjX19QVVJFX18gKi9SZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcblxudmFyIHVzZVRoZW1lID0gZnVuY3Rpb24gdXNlVGhlbWUoKSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG59O1xuXG52YXIgZ2V0VGhlbWUgPSBmdW5jdGlvbiBnZXRUaGVtZShvdXRlclRoZW1lLCB0aGVtZSkge1xuICBpZiAodHlwZW9mIHRoZW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIG1lcmdlZFRoZW1lID0gdGhlbWUob3V0ZXJUaGVtZSk7XG5cbiAgICByZXR1cm4gbWVyZ2VkVGhlbWU7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIG91dGVyVGhlbWUsIHRoZW1lKTtcbn07XG5cbnZhciBjcmVhdGVDYWNoZVdpdGhUaGVtZSA9IC8qICNfX1BVUkVfXyAqL3dlYWtNZW1vaXplKGZ1bmN0aW9uIChvdXRlclRoZW1lKSB7XG4gIHJldHVybiB3ZWFrTWVtb2l6ZShmdW5jdGlvbiAodGhlbWUpIHtcbiAgICByZXR1cm4gZ2V0VGhlbWUob3V0ZXJUaGVtZSwgdGhlbWUpO1xuICB9KTtcbn0pO1xudmFyIFRoZW1lUHJvdmlkZXIgPSBmdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHByb3BzKSB7XG4gIHZhciB0aGVtZSA9IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuICBpZiAocHJvcHMudGhlbWUgIT09IHRoZW1lKSB7XG4gICAgdGhlbWUgPSBjcmVhdGVDYWNoZVdpdGhUaGVtZSh0aGVtZSkocHJvcHMudGhlbWUpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRoZW1lQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB0aGVtZVxuICB9LCBwcm9wcy5jaGlsZHJlbik7XG59O1xuZnVuY3Rpb24gd2l0aFRoZW1lKENvbXBvbmVudCkge1xuICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgdmFyIFdpdGhUaGVtZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIHJlbmRlcihwcm9wcywgcmVmKSB7XG4gICAgdmFyIHRoZW1lID0gUmVhY3QudXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgIHRoZW1lOiB0aGVtZSxcbiAgICAgIHJlZjogcmVmXG4gICAgfSwgcHJvcHMpKTtcbiAgfSk7XG4gIFdpdGhUaGVtZS5kaXNwbGF5TmFtZSA9IFwiV2l0aFRoZW1lKFwiICsgY29tcG9uZW50TmFtZSArIFwiKVwiO1xuICByZXR1cm4gaG9pc3ROb25SZWFjdFN0YXRpY3MoV2l0aFRoZW1lLCBDb21wb25lbnQpO1xufVxuXG52YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cbnZhciB0eXBlUHJvcE5hbWUgPSAnX19FTU9USU9OX1RZUEVfUExFQVNFX0RPX05PVF9VU0VfXyc7XG52YXIgY3JlYXRlRW1vdGlvblByb3BzID0gZnVuY3Rpb24gY3JlYXRlRW1vdGlvblByb3BzKHR5cGUsIHByb3BzKSB7XG5cbiAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgZm9yICh2YXIgX2tleSBpbiBwcm9wcykge1xuICAgIGlmIChoYXNPd24uY2FsbChwcm9wcywgX2tleSkpIHtcbiAgICAgIG5ld1Byb3BzW19rZXldID0gcHJvcHNbX2tleV07XG4gICAgfVxuICB9XG5cbiAgbmV3UHJvcHNbdHlwZVByb3BOYW1lXSA9IHR5cGU7IC8vIFJ1bnRpbWUgbGFiZWxpbmcgaXMgYW4gb3B0LWluIGZlYXR1cmUgYmVjYXVzZTpcblxuICByZXR1cm4gbmV3UHJvcHM7XG59O1xuXG52YXIgSW5zZXJ0aW9uID0gZnVuY3Rpb24gSW5zZXJ0aW9uKF9yZWYpIHtcbiAgdmFyIGNhY2hlID0gX3JlZi5jYWNoZSxcbiAgICAgIHNlcmlhbGl6ZWQgPSBfcmVmLnNlcmlhbGl6ZWQsXG4gICAgICBpc1N0cmluZ1RhZyA9IF9yZWYuaXNTdHJpbmdUYWc7XG4gIHJlZ2lzdGVyU3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBpc1N0cmluZ1RhZyk7XG4gIHVzZUluc2VydGlvbkVmZmVjdEFsd2F5c1dpdGhTeW5jRmFsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG52YXIgRW1vdGlvbiA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSwgcmVmKSB7XG4gIHZhciBjc3NQcm9wID0gcHJvcHMuY3NzOyAvLyBzbyB0aGF0IHVzaW5nIGBjc3NgIGZyb20gYGVtb3Rpb25gIGFuZCBwYXNzaW5nIHRoZSByZXN1bHQgdG8gdGhlIGNzcyBwcm9wIHdvcmtzXG4gIC8vIG5vdCBwYXNzaW5nIHRoZSByZWdpc3RlcmVkIGNhY2hlIHRvIHNlcmlhbGl6ZVN0eWxlcyBiZWNhdXNlIGl0IHdvdWxkXG4gIC8vIG1ha2UgY2VydGFpbiBiYWJlbCBvcHRpbWlzYXRpb25zIG5vdCBwb3NzaWJsZVxuXG4gIGlmICh0eXBlb2YgY3NzUHJvcCA9PT0gJ3N0cmluZycgJiYgY2FjaGUucmVnaXN0ZXJlZFtjc3NQcm9wXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY3NzUHJvcCA9IGNhY2hlLnJlZ2lzdGVyZWRbY3NzUHJvcF07XG4gIH1cblxuICB2YXIgV3JhcHBlZENvbXBvbmVudCA9IHByb3BzW3R5cGVQcm9wTmFtZV07XG4gIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW2Nzc1Byb3BdO1xuICB2YXIgY2xhc3NOYW1lID0gJyc7XG5cbiAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY2xhc3NOYW1lID0gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhjYWNoZS5yZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBwcm9wcy5jbGFzc05hbWUpO1xuICB9IGVsc2UgaWYgKHByb3BzLmNsYXNzTmFtZSAhPSBudWxsKSB7XG4gICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lICsgXCIgXCI7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhyZWdpc3RlcmVkU3R5bGVzLCB1bmRlZmluZWQsIFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KSk7XG5cbiAgY2xhc3NOYW1lICs9IGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICBmb3IgKHZhciBfa2V5MiBpbiBwcm9wcykge1xuICAgIGlmIChoYXNPd24uY2FsbChwcm9wcywgX2tleTIpICYmIF9rZXkyICE9PSAnY3NzJyAmJiBfa2V5MiAhPT0gdHlwZVByb3BOYW1lICYmICghaXNEZXZlbG9wbWVudCApKSB7XG4gICAgICBuZXdQcm9wc1tfa2V5Ml0gPSBwcm9wc1tfa2V5Ml07XG4gICAgfVxuICB9XG5cbiAgbmV3UHJvcHMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuXG4gIGlmIChyZWYpIHtcbiAgICBuZXdQcm9wcy5yZWYgPSByZWY7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEluc2VydGlvbiwge1xuICAgIGNhY2hlOiBjYWNoZSxcbiAgICBzZXJpYWxpemVkOiBzZXJpYWxpemVkLFxuICAgIGlzU3RyaW5nVGFnOiB0eXBlb2YgV3JhcHBlZENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIG5ld1Byb3BzKSk7XG59KTtcblxudmFyIEVtb3Rpb24kMSA9IEVtb3Rpb247XG5cbmV4cG9ydCB7IENhY2hlUHJvdmlkZXIgYXMgQywgRW1vdGlvbiQxIGFzIEUsIFRoZW1lQ29udGV4dCBhcyBULCBfX3Vuc2FmZV91c2VFbW90aW9uQ2FjaGUgYXMgXywgVGhlbWVQcm92aWRlciBhcyBhLCB3aXRoVGhlbWUgYXMgYiwgY3JlYXRlRW1vdGlvblByb3BzIGFzIGMsIGhhc093biBhcyBoLCBpc0RldmVsb3BtZW50IGFzIGksIHVzZVRoZW1lIGFzIHUsIHdpdGhFbW90aW9uQ2FjaGUgYXMgdyB9O1xuIiwiaW1wb3J0IHsgaCBhcyBoYXNPd24sIEUgYXMgRW1vdGlvbiwgYyBhcyBjcmVhdGVFbW90aW9uUHJvcHMsIHcgYXMgd2l0aEVtb3Rpb25DYWNoZSwgVCBhcyBUaGVtZUNvbnRleHQsIGkgYXMgaXNEZXZlbG9wbWVudCB9IGZyb20gJy4vZW1vdGlvbi1lbGVtZW50LWYwZGU5NjhlLmJyb3dzZXIuZXNtLmpzJztcbmV4cG9ydCB7IEMgYXMgQ2FjaGVQcm92aWRlciwgVCBhcyBUaGVtZUNvbnRleHQsIGEgYXMgVGhlbWVQcm92aWRlciwgXyBhcyBfX3Vuc2FmZV91c2VFbW90aW9uQ2FjaGUsIHUgYXMgdXNlVGhlbWUsIHcgYXMgd2l0aEVtb3Rpb25DYWNoZSwgYiBhcyB3aXRoVGhlbWUgfSBmcm9tICcuL2Vtb3Rpb24tZWxlbWVudC1mMGRlOTY4ZS5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpbnNlcnRTdHlsZXMsIHJlZ2lzdGVyU3R5bGVzLCBnZXRSZWdpc3RlcmVkU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vdXRpbHMnO1xuaW1wb3J0IHsgdXNlSW5zZXJ0aW9uRWZmZWN0V2l0aExheW91dEZhbGxiYWNrLCB1c2VJbnNlcnRpb25FZmZlY3RBbHdheXNXaXRoU3luY0ZhbGxiYWNrIH0gZnJvbSAnQGVtb3Rpb24vdXNlLWluc2VydGlvbi1lZmZlY3Qtd2l0aC1mYWxsYmFja3MnO1xuaW1wb3J0IHsgc2VyaWFsaXplU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vc2VyaWFsaXplJztcbmltcG9ydCAnQGVtb3Rpb24vY2FjaGUnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0ICdAZW1vdGlvbi93ZWFrLW1lbW9pemUnO1xuaW1wb3J0ICcuLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0ICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5cbnZhciBqc3ggPSBmdW5jdGlvbiBqc3godHlwZSwgcHJvcHMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICBpZiAocHJvcHMgPT0gbnVsbCB8fCAhaGFzT3duLmNhbGwocHJvcHMsICdjc3MnKSkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH1cblxuICB2YXIgYXJnc0xlbmd0aCA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgY3JlYXRlRWxlbWVudEFyZ0FycmF5ID0gbmV3IEFycmF5KGFyZ3NMZW5ndGgpO1xuICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMF0gPSBFbW90aW9uO1xuICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMV0gPSBjcmVhdGVFbW90aW9uUHJvcHModHlwZSwgcHJvcHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSB7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5W2ldID0gYXJnc1tpXTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSk7XG59O1xuXG4oZnVuY3Rpb24gKF9qc3gpIHtcbiAgdmFyIEpTWDtcblxuICAoZnVuY3Rpb24gKF9KU1gpIHt9KShKU1ggfHwgKEpTWCA9IF9qc3guSlNYIHx8IChfanN4LkpTWCA9IHt9KSkpO1xufSkoanN4IHx8IChqc3ggPSB7fSkpO1xuXG4vLyBpbml0aWFsIHJlbmRlciBmcm9tIGJyb3dzZXIsIGluc2VydEJlZm9yZSBjb250ZXh0LnNoZWV0LnRhZ3NbMF0gb3IgaWYgYSBzdHlsZSBoYXNuJ3QgYmVlbiBpbnNlcnRlZCB0aGVyZSB5ZXQsIGFwcGVuZENoaWxkXG4vLyBpbml0aWFsIGNsaWVudC1zaWRlIHJlbmRlciBmcm9tIFNTUiwgdXNlIHBsYWNlIG9mIGh5ZHJhdGluZyB0YWdcblxudmFyIEdsb2JhbCA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSkge1xuXG4gIHZhciBzdHlsZXMgPSBwcm9wcy5zdHlsZXM7XG4gIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKFtzdHlsZXNdLCB1bmRlZmluZWQsIFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KSk7XG4gIC8vIGJ1dCBpdCBpcyBiYXNlZCBvbiBhIGNvbnN0YW50IHRoYXQgd2lsbCBuZXZlciBjaGFuZ2UgYXQgcnVudGltZVxuICAvLyBpdCdzIGVmZmVjdGl2ZWx5IGxpa2UgaGF2aW5nIHR3byBpbXBsZW1lbnRhdGlvbnMgYW5kIHN3aXRjaGluZyB0aGVtIG91dFxuICAvLyBzbyBpdCdzIG5vdCBhY3R1YWxseSBicmVha2luZyBhbnl0aGluZ1xuXG5cbiAgdmFyIHNoZWV0UmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIHVzZUluc2VydGlvbkVmZmVjdFdpdGhMYXlvdXRGYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGtleSA9IGNhY2hlLmtleSArIFwiLWdsb2JhbFwiOyAvLyB1c2UgY2FzZSBvZiBodHRwczovL2dpdGh1Yi5jb20vZW1vdGlvbi1qcy9lbW90aW9uL2lzc3Vlcy8yNjc1XG5cbiAgICB2YXIgc2hlZXQgPSBuZXcgY2FjaGUuc2hlZXQuY29uc3RydWN0b3Ioe1xuICAgICAga2V5OiBrZXksXG4gICAgICBub25jZTogY2FjaGUuc2hlZXQubm9uY2UsXG4gICAgICBjb250YWluZXI6IGNhY2hlLnNoZWV0LmNvbnRhaW5lcixcbiAgICAgIHNwZWVkeTogY2FjaGUuc2hlZXQuaXNTcGVlZHlcbiAgICB9KTtcbiAgICB2YXIgcmVoeWRyYXRpbmcgPSBmYWxzZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVtkYXRhLWVtb3Rpb249XFxcIlwiICsga2V5ICsgXCIgXCIgKyBzZXJpYWxpemVkLm5hbWUgKyBcIlxcXCJdXCIpO1xuXG4gICAgaWYgKGNhY2hlLnNoZWV0LnRhZ3MubGVuZ3RoKSB7XG4gICAgICBzaGVldC5iZWZvcmUgPSBjYWNoZS5zaGVldC50YWdzWzBdO1xuICAgIH1cblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICByZWh5ZHJhdGluZyA9IHRydWU7IC8vIGNsZWFyIHRoZSBoYXNoIHNvIHRoaXMgbm9kZSB3b24ndCBiZSByZWNvZ25pemFibGUgYXMgcmVoeWRyYXRhYmxlIGJ5IG90aGVyIDxHbG9iYWwvPnNcblxuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZW1vdGlvbicsIGtleSk7XG4gICAgICBzaGVldC5oeWRyYXRlKFtub2RlXSk7XG4gICAgfVxuXG4gICAgc2hlZXRSZWYuY3VycmVudCA9IFtzaGVldCwgcmVoeWRyYXRpbmddO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBzaGVldC5mbHVzaCgpO1xuICAgIH07XG4gIH0sIFtjYWNoZV0pO1xuICB1c2VJbnNlcnRpb25FZmZlY3RXaXRoTGF5b3V0RmFsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBzaGVldFJlZkN1cnJlbnQgPSBzaGVldFJlZi5jdXJyZW50O1xuICAgIHZhciBzaGVldCA9IHNoZWV0UmVmQ3VycmVudFswXSxcbiAgICAgICAgcmVoeWRyYXRpbmcgPSBzaGVldFJlZkN1cnJlbnRbMV07XG5cbiAgICBpZiAocmVoeWRyYXRpbmcpIHtcbiAgICAgIHNoZWV0UmVmQ3VycmVudFsxXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzZXJpYWxpemVkLm5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gaW5zZXJ0IGtleWZyYW1lc1xuICAgICAgaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLm5leHQsIHRydWUpO1xuICAgIH1cblxuICAgIGlmIChzaGVldC50YWdzLmxlbmd0aCkge1xuICAgICAgLy8gaWYgdGhpcyBkb2Vzbid0IGV4aXN0IHRoZW4gaXQgd2lsbCBiZSBudWxsIHNvIHRoZSBzdHlsZSBlbGVtZW50IHdpbGwgYmUgYXBwZW5kZWRcbiAgICAgIHZhciBlbGVtZW50ID0gc2hlZXQudGFnc1tzaGVldC50YWdzLmxlbmd0aCAtIDFdLm5leHRFbGVtZW50U2libGluZztcbiAgICAgIHNoZWV0LmJlZm9yZSA9IGVsZW1lbnQ7XG4gICAgICBzaGVldC5mbHVzaCgpO1xuICAgIH1cblxuICAgIGNhY2hlLmluc2VydChcIlwiLCBzZXJpYWxpemVkLCBzaGVldCwgZmFsc2UpO1xuICB9LCBbY2FjaGUsIHNlcmlhbGl6ZWQubmFtZV0pO1xuICByZXR1cm4gbnVsbDtcbn0pO1xuXG5mdW5jdGlvbiBjc3MoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gc2VyaWFsaXplU3R5bGVzKGFyZ3MpO1xufVxuXG5mdW5jdGlvbiBrZXlmcmFtZXMoKSB7XG4gIHZhciBpbnNlcnRhYmxlID0gY3NzLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgdmFyIG5hbWUgPSBcImFuaW1hdGlvbi1cIiArIGluc2VydGFibGUubmFtZTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHN0eWxlczogXCJAa2V5ZnJhbWVzIFwiICsgbmFtZSArIFwie1wiICsgaW5zZXJ0YWJsZS5zdHlsZXMgKyBcIn1cIixcbiAgICBhbmltOiAxLFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBcIl9FTU9fXCIgKyB0aGlzLm5hbWUgKyBcIl9cIiArIHRoaXMuc3R5bGVzICsgXCJfRU1PX1wiO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIGNsYXNzbmFtZXMgPSBmdW5jdGlvbiBjbGFzc25hbWVzKGFyZ3MpIHtcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBjbHMgPSAnJztcblxuICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGFyZyA9IGFyZ3NbaV07XG4gICAgaWYgKGFyZyA9PSBudWxsKSBjb250aW51ZTtcbiAgICB2YXIgdG9BZGQgPSB2b2lkIDA7XG5cbiAgICBzd2l0Y2ggKHR5cGVvZiBhcmcpIHtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgICAgIHRvQWRkID0gY2xhc3NuYW1lcyhhcmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRvQWRkID0gJyc7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gYXJnKSB7XG4gICAgICAgICAgICAgIGlmIChhcmdba10gJiYgaykge1xuICAgICAgICAgICAgICAgIHRvQWRkICYmICh0b0FkZCArPSAnICcpO1xuICAgICAgICAgICAgICAgIHRvQWRkICs9IGs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB7XG4gICAgICAgICAgdG9BZGQgPSBhcmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9BZGQpIHtcbiAgICAgIGNscyAmJiAoY2xzICs9ICcgJyk7XG4gICAgICBjbHMgKz0gdG9BZGQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNscztcbn07XG5cbmZ1bmN0aW9uIG1lcmdlKHJlZ2lzdGVyZWQsIGNzcywgY2xhc3NOYW1lKSB7XG4gIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW107XG4gIHZhciByYXdDbGFzc05hbWUgPSBnZXRSZWdpc3RlcmVkU3R5bGVzKHJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIGNsYXNzTmFtZSk7XG5cbiAgaWYgKHJlZ2lzdGVyZWRTdHlsZXMubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICByZXR1cm4gcmF3Q2xhc3NOYW1lICsgY3NzKHJlZ2lzdGVyZWRTdHlsZXMpO1xufVxuXG52YXIgSW5zZXJ0aW9uID0gZnVuY3Rpb24gSW5zZXJ0aW9uKF9yZWYpIHtcbiAgdmFyIGNhY2hlID0gX3JlZi5jYWNoZSxcbiAgICAgIHNlcmlhbGl6ZWRBcnIgPSBfcmVmLnNlcmlhbGl6ZWRBcnI7XG4gIHVzZUluc2VydGlvbkVmZmVjdEFsd2F5c1dpdGhTeW5jRmFsbGJhY2soZnVuY3Rpb24gKCkge1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXJpYWxpemVkQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWRBcnJbaV0sIGZhbHNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBudWxsO1xufTtcblxudmFyIENsYXNzTmFtZXMgPSAvKiAjX19QVVJFX18gKi93aXRoRW1vdGlvbkNhY2hlKGZ1bmN0aW9uIChwcm9wcywgY2FjaGUpIHtcbiAgdmFyIGhhc1JlbmRlcmVkID0gZmFsc2U7XG4gIHZhciBzZXJpYWxpemVkQXJyID0gW107XG5cbiAgdmFyIGNzcyA9IGZ1bmN0aW9uIGNzcygpIHtcbiAgICBpZiAoaGFzUmVuZGVyZWQgJiYgaXNEZXZlbG9wbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjc3MgY2FuIG9ubHkgYmUgdXNlZCBkdXJpbmcgcmVuZGVyJyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKGFyZ3MsIGNhY2hlLnJlZ2lzdGVyZWQpO1xuICAgIHNlcmlhbGl6ZWRBcnIucHVzaChzZXJpYWxpemVkKTsgLy8gcmVnaXN0cmF0aW9uIGhhcyB0byBoYXBwZW4gaGVyZSBhcyB0aGUgcmVzdWx0IG9mIHRoaXMgbWlnaHQgZ2V0IGNvbnN1bWVkIGJ5IGBjeGBcblxuICAgIHJlZ2lzdGVyU3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBmYWxzZSk7XG4gICAgcmV0dXJuIGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuICB9O1xuXG4gIHZhciBjeCA9IGZ1bmN0aW9uIGN4KCkge1xuICAgIGlmIChoYXNSZW5kZXJlZCAmJiBpc0RldmVsb3BtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2N4IGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIHJlbmRlcicpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZShjYWNoZS5yZWdpc3RlcmVkLCBjc3MsIGNsYXNzbmFtZXMoYXJncykpO1xuICB9O1xuXG4gIHZhciBjb250ZW50ID0ge1xuICAgIGNzczogY3NzLFxuICAgIGN4OiBjeCxcbiAgICB0aGVtZTogUmVhY3QudXNlQ29udGV4dChUaGVtZUNvbnRleHQpXG4gIH07XG4gIHZhciBlbGUgPSBwcm9wcy5jaGlsZHJlbihjb250ZW50KTtcbiAgaGFzUmVuZGVyZWQgPSB0cnVlO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEluc2VydGlvbiwge1xuICAgIGNhY2hlOiBjYWNoZSxcbiAgICBzZXJpYWxpemVkQXJyOiBzZXJpYWxpemVkQXJyXG4gIH0pLCBlbGUpO1xufSk7XG5cbmV4cG9ydCB7IENsYXNzTmFtZXMsIEdsb2JhbCwganN4IGFzIGNyZWF0ZUVsZW1lbnQsIGNzcywganN4LCBrZXlmcmFtZXMgfTtcbiIsImZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoZSwgdCkge1xuICByZXR1cm4gdCB8fCAodCA9IGUuc2xpY2UoMCkpLCBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsIHtcbiAgICByYXc6IHtcbiAgICAgIHZhbHVlOiBPYmplY3QuZnJlZXplKHQpXG4gICAgfVxuICB9KSk7XG59XG5leHBvcnQgeyBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIGFzIGRlZmF1bHQgfTsiLCIvKipcbiAqIEN1c3RvbSBwb3NpdGlvbmluZyByZWZlcmVuY2UgZWxlbWVudC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy92aXJ0dWFsLWVsZW1lbnRzXG4gKi9cblxuY29uc3Qgc2lkZXMgPSBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddO1xuY29uc3QgYWxpZ25tZW50cyA9IFsnc3RhcnQnLCAnZW5kJ107XG5jb25zdCBwbGFjZW1lbnRzID0gLyojX19QVVJFX18qL3NpZGVzLnJlZHVjZSgoYWNjLCBzaWRlKSA9PiBhY2MuY29uY2F0KHNpZGUsIHNpZGUgKyBcIi1cIiArIGFsaWdubWVudHNbMF0sIHNpZGUgKyBcIi1cIiArIGFsaWdubWVudHNbMV0pLCBbXSk7XG5jb25zdCBtaW4gPSBNYXRoLm1pbjtcbmNvbnN0IG1heCA9IE1hdGgubWF4O1xuY29uc3Qgcm91bmQgPSBNYXRoLnJvdW5kO1xuY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yO1xuY29uc3QgY3JlYXRlQ29vcmRzID0gdiA9PiAoe1xuICB4OiB2LFxuICB5OiB2XG59KTtcbmNvbnN0IG9wcG9zaXRlU2lkZU1hcCA9IHtcbiAgbGVmdDogJ3JpZ2h0JyxcbiAgcmlnaHQ6ICdsZWZ0JyxcbiAgYm90dG9tOiAndG9wJyxcbiAgdG9wOiAnYm90dG9tJ1xufTtcbmNvbnN0IG9wcG9zaXRlQWxpZ25tZW50TWFwID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmZ1bmN0aW9uIGNsYW1wKHN0YXJ0LCB2YWx1ZSwgZW5kKSB7XG4gIHJldHVybiBtYXgoc3RhcnQsIG1pbih2YWx1ZSwgZW5kKSk7XG59XG5mdW5jdGlvbiBldmFsdWF0ZSh2YWx1ZSwgcGFyYW0pIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlKHBhcmFtKSA6IHZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0U2lkZShwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xufVxuZnVuY3Rpb24gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG59XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZUF4aXMoYXhpcykge1xuICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xufVxuZnVuY3Rpb24gZ2V0QXhpc0xlbmd0aChheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG59XG5mdW5jdGlvbiBnZXRTaWRlQXhpcyhwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluY2x1ZGVzKGdldFNpZGUocGxhY2VtZW50KSkgPyAneScgOiAneCc7XG59XG5mdW5jdGlvbiBnZXRBbGlnbm1lbnRBeGlzKHBsYWNlbWVudCkge1xuICByZXR1cm4gZ2V0T3Bwb3NpdGVBeGlzKGdldFNpZGVBeGlzKHBsYWNlbWVudCkpO1xufVxuZnVuY3Rpb24gZ2V0QWxpZ25tZW50U2lkZXMocGxhY2VtZW50LCByZWN0cywgcnRsKSB7XG4gIGlmIChydGwgPT09IHZvaWQgMCkge1xuICAgIHJ0bCA9IGZhbHNlO1xuICB9XG4gIGNvbnN0IGFsaWdubWVudCA9IGdldEFsaWdubWVudChwbGFjZW1lbnQpO1xuICBjb25zdCBhbGlnbm1lbnRBeGlzID0gZ2V0QWxpZ25tZW50QXhpcyhwbGFjZW1lbnQpO1xuICBjb25zdCBsZW5ndGggPSBnZXRBeGlzTGVuZ3RoKGFsaWdubWVudEF4aXMpO1xuICBsZXQgbWFpbkFsaWdubWVudFNpZGUgPSBhbGlnbm1lbnRBeGlzID09PSAneCcgPyBhbGlnbm1lbnQgPT09IChydGwgPyAnZW5kJyA6ICdzdGFydCcpID8gJ3JpZ2h0JyA6ICdsZWZ0JyA6IGFsaWdubWVudCA9PT0gJ3N0YXJ0JyA/ICdib3R0b20nIDogJ3RvcCc7XG4gIGlmIChyZWN0cy5yZWZlcmVuY2VbbGVuZ3RoXSA+IHJlY3RzLmZsb2F0aW5nW2xlbmd0aF0pIHtcbiAgICBtYWluQWxpZ25tZW50U2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5BbGlnbm1lbnRTaWRlKTtcbiAgfVxuICByZXR1cm4gW21haW5BbGlnbm1lbnRTaWRlLCBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluQWxpZ25tZW50U2lkZSldO1xufVxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICBjb25zdCBvcHBvc2l0ZVBsYWNlbWVudCA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHJldHVybiBbZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQocGxhY2VtZW50KSwgb3Bwb3NpdGVQbGFjZW1lbnQsIGdldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50KG9wcG9zaXRlUGxhY2VtZW50KV07XG59XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9zdGFydHxlbmQvZywgYWxpZ25tZW50ID0+IG9wcG9zaXRlQWxpZ25tZW50TWFwW2FsaWdubWVudF0pO1xufVxuZnVuY3Rpb24gZ2V0U2lkZUxpc3Qoc2lkZSwgaXNTdGFydCwgcnRsKSB7XG4gIGNvbnN0IGxyID0gWydsZWZ0JywgJ3JpZ2h0J107XG4gIGNvbnN0IHJsID0gWydyaWdodCcsICdsZWZ0J107XG4gIGNvbnN0IHRiID0gWyd0b3AnLCAnYm90dG9tJ107XG4gIGNvbnN0IGJ0ID0gWydib3R0b20nLCAndG9wJ107XG4gIHN3aXRjaCAoc2lkZSkge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICAgIGlmIChydGwpIHJldHVybiBpc1N0YXJ0ID8gcmwgOiBscjtcbiAgICAgIHJldHVybiBpc1N0YXJ0ID8gbHIgOiBybDtcbiAgICBjYXNlICdsZWZ0JzpcbiAgICBjYXNlICdyaWdodCc6XG4gICAgICByZXR1cm4gaXNTdGFydCA/IHRiIDogYnQ7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBbXTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVBeGlzUGxhY2VtZW50cyhwbGFjZW1lbnQsIGZsaXBBbGlnbm1lbnQsIGRpcmVjdGlvbiwgcnRsKSB7XG4gIGNvbnN0IGFsaWdubWVudCA9IGdldEFsaWdubWVudChwbGFjZW1lbnQpO1xuICBsZXQgbGlzdCA9IGdldFNpZGVMaXN0KGdldFNpZGUocGxhY2VtZW50KSwgZGlyZWN0aW9uID09PSAnc3RhcnQnLCBydGwpO1xuICBpZiAoYWxpZ25tZW50KSB7XG4gICAgbGlzdCA9IGxpc3QubWFwKHNpZGUgPT4gc2lkZSArIFwiLVwiICsgYWxpZ25tZW50KTtcbiAgICBpZiAoZmxpcEFsaWdubWVudCkge1xuICAgICAgbGlzdCA9IGxpc3QuY29uY2F0KGxpc3QubWFwKGdldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50KSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBsaXN0O1xufVxuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIHNpZGUgPT4gb3Bwb3NpdGVTaWRlTWFwW3NpZGVdKTtcbn1cbmZ1bmN0aW9uIGV4cGFuZFBhZGRpbmdPYmplY3QocGFkZGluZykge1xuICByZXR1cm4ge1xuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICAuLi5wYWRkaW5nXG4gIH07XG59XG5mdW5jdGlvbiBnZXRQYWRkaW5nT2JqZWN0KHBhZGRpbmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IGV4cGFuZFBhZGRpbmdPYmplY3QocGFkZGluZykgOiB7XG4gICAgdG9wOiBwYWRkaW5nLFxuICAgIHJpZ2h0OiBwYWRkaW5nLFxuICAgIGJvdHRvbTogcGFkZGluZyxcbiAgICBsZWZ0OiBwYWRkaW5nXG4gIH07XG59XG5mdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgY29uc3Qge1xuICAgIHgsXG4gICAgeSxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHRcbiAgfSA9IHJlY3Q7XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHRvcDogeSxcbiAgICBsZWZ0OiB4LFxuICAgIHJpZ2h0OiB4ICsgd2lkdGgsXG4gICAgYm90dG9tOiB5ICsgaGVpZ2h0LFxuICAgIHgsXG4gICAgeVxuICB9O1xufVxuXG5leHBvcnQgeyBhbGlnbm1lbnRzLCBjbGFtcCwgY3JlYXRlQ29vcmRzLCBldmFsdWF0ZSwgZXhwYW5kUGFkZGluZ09iamVjdCwgZmxvb3IsIGdldEFsaWdubWVudCwgZ2V0QWxpZ25tZW50QXhpcywgZ2V0QWxpZ25tZW50U2lkZXMsIGdldEF4aXNMZW5ndGgsIGdldEV4cGFuZGVkUGxhY2VtZW50cywgZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQsIGdldE9wcG9zaXRlQXhpcywgZ2V0T3Bwb3NpdGVBeGlzUGxhY2VtZW50cywgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQsIGdldFBhZGRpbmdPYmplY3QsIGdldFNpZGUsIGdldFNpZGVBeGlzLCBtYXgsIG1pbiwgcGxhY2VtZW50cywgcmVjdFRvQ2xpZW50UmVjdCwgcm91bmQsIHNpZGVzIH07XG4iLCJmdW5jdGlvbiBoYXNXaW5kb3coKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbn1cbmZ1bmN0aW9uIGdldE5vZGVOYW1lKG5vZGUpIHtcbiAgaWYgKGlzTm9kZShub2RlKSkge1xuICAgIHJldHVybiAobm9kZS5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuICAvLyBNb2NrZWQgbm9kZXMgaW4gdGVzdGluZyBlbnZpcm9ubWVudHMgbWF5IG5vdCBiZSBpbnN0YW5jZXMgb2YgTm9kZS4gQnlcbiAgLy8gcmV0dXJuaW5nIGAjZG9jdW1lbnRgIGFuIGluZmluaXRlIGxvb3Agd29uJ3Qgb2NjdXIuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mbG9hdGluZy11aS9mbG9hdGluZy11aS9pc3N1ZXMvMjMxN1xuICByZXR1cm4gJyNkb2N1bWVudCc7XG59XG5mdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICB2YXIgX25vZGUkb3duZXJEb2N1bWVudDtcbiAgcmV0dXJuIChub2RlID09IG51bGwgfHwgKF9ub2RlJG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfbm9kZSRvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KSB8fCB3aW5kb3c7XG59XG5mdW5jdGlvbiBnZXREb2N1bWVudEVsZW1lbnQobm9kZSkge1xuICB2YXIgX3JlZjtcbiAgcmV0dXJuIChfcmVmID0gKGlzTm9kZShub2RlKSA/IG5vZGUub3duZXJEb2N1bWVudCA6IG5vZGUuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9yZWYuZG9jdW1lbnRFbGVtZW50O1xufVxuZnVuY3Rpb24gaXNOb2RlKHZhbHVlKSB7XG4gIGlmICghaGFzV2luZG93KCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgTm9kZSB8fCB2YWx1ZSBpbnN0YW5jZW9mIGdldFdpbmRvdyh2YWx1ZSkuTm9kZTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudCh2YWx1ZSkge1xuICBpZiAoIWhhc1dpbmRvdygpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgdmFsdWUgaW5zdGFuY2VvZiBnZXRXaW5kb3codmFsdWUpLkVsZW1lbnQ7XG59XG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KHZhbHVlKSB7XG4gIGlmICghaGFzV2luZG93KCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgdmFsdWUgaW5zdGFuY2VvZiBnZXRXaW5kb3codmFsdWUpLkhUTUxFbGVtZW50O1xufVxuZnVuY3Rpb24gaXNTaGFkb3dSb290KHZhbHVlKSB7XG4gIGlmICghaGFzV2luZG93KCkgfHwgdHlwZW9mIFNoYWRvd1Jvb3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgfHwgdmFsdWUgaW5zdGFuY2VvZiBnZXRXaW5kb3codmFsdWUpLlNoYWRvd1Jvb3Q7XG59XG5mdW5jdGlvbiBpc092ZXJmbG93RWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IHtcbiAgICBvdmVyZmxvdyxcbiAgICBvdmVyZmxvd1gsXG4gICAgb3ZlcmZsb3dZLFxuICAgIGRpc3BsYXlcbiAgfSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW58Y2xpcC8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCkgJiYgIVsnaW5saW5lJywgJ2NvbnRlbnRzJ10uaW5jbHVkZXMoZGlzcGxheSk7XG59XG5mdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5jbHVkZXMoZ2V0Tm9kZU5hbWUoZWxlbWVudCkpO1xufVxuZnVuY3Rpb24gaXNUb3BMYXllcihlbGVtZW50KSB7XG4gIHJldHVybiBbJzpwb3BvdmVyLW9wZW4nLCAnOm1vZGFsJ10uc29tZShzZWxlY3RvciA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gaXNDb250YWluaW5nQmxvY2soZWxlbWVudE9yQ3NzKSB7XG4gIGNvbnN0IHdlYmtpdCA9IGlzV2ViS2l0KCk7XG4gIGNvbnN0IGNzcyA9IGlzRWxlbWVudChlbGVtZW50T3JDc3MpID8gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50T3JDc3MpIDogZWxlbWVudE9yQ3NzO1xuXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Db250YWluaW5nX2Jsb2NrI2lkZW50aWZ5aW5nX3RoZV9jb250YWluaW5nX2Jsb2NrXG4gIC8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdHJhbnNmb3Jtcy0yLyNpbmRpdmlkdWFsLXRyYW5zZm9ybXNcbiAgcmV0dXJuIFsndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZScsICdzY2FsZScsICdyb3RhdGUnLCAncGVyc3BlY3RpdmUnXS5zb21lKHZhbHVlID0+IGNzc1t2YWx1ZV0gPyBjc3NbdmFsdWVdICE9PSAnbm9uZScgOiBmYWxzZSkgfHwgKGNzcy5jb250YWluZXJUeXBlID8gY3NzLmNvbnRhaW5lclR5cGUgIT09ICdub3JtYWwnIDogZmFsc2UpIHx8ICF3ZWJraXQgJiYgKGNzcy5iYWNrZHJvcEZpbHRlciA/IGNzcy5iYWNrZHJvcEZpbHRlciAhPT0gJ25vbmUnIDogZmFsc2UpIHx8ICF3ZWJraXQgJiYgKGNzcy5maWx0ZXIgPyBjc3MuZmlsdGVyICE9PSAnbm9uZScgOiBmYWxzZSkgfHwgWyd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlJywgJ3NjYWxlJywgJ3JvdGF0ZScsICdwZXJzcGVjdGl2ZScsICdmaWx0ZXInXS5zb21lKHZhbHVlID0+IChjc3Mud2lsbENoYW5nZSB8fCAnJykuaW5jbHVkZXModmFsdWUpKSB8fCBbJ3BhaW50JywgJ2xheW91dCcsICdzdHJpY3QnLCAnY29udGVudCddLnNvbWUodmFsdWUgPT4gKGNzcy5jb250YWluIHx8ICcnKS5pbmNsdWRlcyh2YWx1ZSkpO1xufVxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgbGV0IGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgd2hpbGUgKGlzSFRNTEVsZW1lbnQoY3VycmVudE5vZGUpICYmICFpc0xhc3RUcmF2ZXJzYWJsZU5vZGUoY3VycmVudE5vZGUpKSB7XG4gICAgaWYgKGlzQ29udGFpbmluZ0Jsb2NrKGN1cnJlbnROb2RlKSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH0gZWxzZSBpZiAoaXNUb3BMYXllcihjdXJyZW50Tm9kZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoY3VycmVudE5vZGUpO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gaXNXZWJLaXQoKSB7XG4gIGlmICh0eXBlb2YgQ1NTID09PSAndW5kZWZpbmVkJyB8fCAhQ1NTLnN1cHBvcnRzKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBDU1Muc3VwcG9ydHMoJy13ZWJraXQtYmFja2Ryb3AtZmlsdGVyJywgJ25vbmUnKTtcbn1cbmZ1bmN0aW9uIGlzTGFzdFRyYXZlcnNhYmxlTm9kZShub2RlKSB7XG4gIHJldHVybiBbJ2h0bWwnLCAnYm9keScsICcjZG9jdW1lbnQnXS5pbmNsdWRlcyhnZXROb2RlTmFtZShub2RlKSk7XG59XG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufVxuZnVuY3Rpb24gZ2V0Tm9kZVNjcm9sbChlbGVtZW50KSB7XG4gIGlmIChpc0VsZW1lbnQoZWxlbWVudCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnNjcm9sbFgsXG4gICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFlcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldFBhcmVudE5vZGUobm9kZSkge1xuICBpZiAoZ2V0Tm9kZU5hbWUobm9kZSkgPT09ICdodG1sJykge1xuICAgIHJldHVybiBub2RlO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9XG4gIC8vIFN0ZXAgaW50byB0aGUgc2hhZG93IERPTSBvZiB0aGUgcGFyZW50IG9mIGEgc2xvdHRlZCBub2RlLlxuICBub2RlLmFzc2lnbmVkU2xvdCB8fFxuICAvLyBET00gRWxlbWVudCBkZXRlY3RlZC5cbiAgbm9kZS5wYXJlbnROb2RlIHx8XG4gIC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWQuXG4gIGlzU2hhZG93Um9vdChub2RlKSAmJiBub2RlLmhvc3QgfHxcbiAgLy8gRmFsbGJhY2suXG4gIGdldERvY3VtZW50RWxlbWVudChub2RlKTtcbiAgcmV0dXJuIGlzU2hhZG93Um9vdChyZXN1bHQpID8gcmVzdWx0Lmhvc3QgOiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXROZWFyZXN0T3ZlcmZsb3dBbmNlc3Rvcihub2RlKSB7XG4gIGNvbnN0IHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKG5vZGUpO1xuICBpZiAoaXNMYXN0VHJhdmVyc2FibGVOb2RlKHBhcmVudE5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudCA/IG5vZGUub3duZXJEb2N1bWVudC5ib2R5IDogbm9kZS5ib2R5O1xuICB9XG4gIGlmIChpc0hUTUxFbGVtZW50KHBhcmVudE5vZGUpICYmIGlzT3ZlcmZsb3dFbGVtZW50KHBhcmVudE5vZGUpKSB7XG4gICAgcmV0dXJuIHBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIGdldE5lYXJlc3RPdmVyZmxvd0FuY2VzdG9yKHBhcmVudE5vZGUpO1xufVxuZnVuY3Rpb24gZ2V0T3ZlcmZsb3dBbmNlc3RvcnMobm9kZSwgbGlzdCwgdHJhdmVyc2VJZnJhbWVzKSB7XG4gIHZhciBfbm9kZSRvd25lckRvY3VtZW50MjtcbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuICBpZiAodHJhdmVyc2VJZnJhbWVzID09PSB2b2lkIDApIHtcbiAgICB0cmF2ZXJzZUlmcmFtZXMgPSB0cnVlO1xuICB9XG4gIGNvbnN0IHNjcm9sbGFibGVBbmNlc3RvciA9IGdldE5lYXJlc3RPdmVyZmxvd0FuY2VzdG9yKG5vZGUpO1xuICBjb25zdCBpc0JvZHkgPSBzY3JvbGxhYmxlQW5jZXN0b3IgPT09ICgoX25vZGUkb3duZXJEb2N1bWVudDIgPSBub2RlLm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfbm9kZSRvd25lckRvY3VtZW50Mi5ib2R5KTtcbiAgY29uc3Qgd2luID0gZ2V0V2luZG93KHNjcm9sbGFibGVBbmNlc3Rvcik7XG4gIGlmIChpc0JvZHkpIHtcbiAgICBjb25zdCBmcmFtZUVsZW1lbnQgPSBnZXRGcmFtZUVsZW1lbnQod2luKTtcbiAgICByZXR1cm4gbGlzdC5jb25jYXQod2luLCB3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzT3ZlcmZsb3dFbGVtZW50KHNjcm9sbGFibGVBbmNlc3RvcikgPyBzY3JvbGxhYmxlQW5jZXN0b3IgOiBbXSwgZnJhbWVFbGVtZW50ICYmIHRyYXZlcnNlSWZyYW1lcyA/IGdldE92ZXJmbG93QW5jZXN0b3JzKGZyYW1lRWxlbWVudCkgOiBbXSk7XG4gIH1cbiAgcmV0dXJuIGxpc3QuY29uY2F0KHNjcm9sbGFibGVBbmNlc3RvciwgZ2V0T3ZlcmZsb3dBbmNlc3RvcnMoc2Nyb2xsYWJsZUFuY2VzdG9yLCBbXSwgdHJhdmVyc2VJZnJhbWVzKSk7XG59XG5mdW5jdGlvbiBnZXRGcmFtZUVsZW1lbnQod2luKSB7XG4gIHJldHVybiB3aW4ucGFyZW50ICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZih3aW4ucGFyZW50KSA/IHdpbi5mcmFtZUVsZW1lbnQgOiBudWxsO1xufVxuXG5leHBvcnQgeyBnZXRDb21wdXRlZFN0eWxlLCBnZXRDb250YWluaW5nQmxvY2ssIGdldERvY3VtZW50RWxlbWVudCwgZ2V0RnJhbWVFbGVtZW50LCBnZXROZWFyZXN0T3ZlcmZsb3dBbmNlc3RvciwgZ2V0Tm9kZU5hbWUsIGdldE5vZGVTY3JvbGwsIGdldE92ZXJmbG93QW5jZXN0b3JzLCBnZXRQYXJlbnROb2RlLCBnZXRXaW5kb3csIGlzQ29udGFpbmluZ0Jsb2NrLCBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQsIGlzTGFzdFRyYXZlcnNhYmxlTm9kZSwgaXNOb2RlLCBpc092ZXJmbG93RWxlbWVudCwgaXNTaGFkb3dSb290LCBpc1RhYmxlRWxlbWVudCwgaXNUb3BMYXllciwgaXNXZWJLaXQgfTtcbiIsImltcG9ydCB7IHJlY3RUb0NsaWVudFJlY3QsIGRldGVjdE92ZXJmbG93IGFzIGRldGVjdE92ZXJmbG93JDEsIG9mZnNldCBhcyBvZmZzZXQkMSwgYXV0b1BsYWNlbWVudCBhcyBhdXRvUGxhY2VtZW50JDEsIHNoaWZ0IGFzIHNoaWZ0JDEsIGZsaXAgYXMgZmxpcCQxLCBzaXplIGFzIHNpemUkMSwgaGlkZSBhcyBoaWRlJDEsIGFycm93IGFzIGFycm93JDEsIGlubGluZSBhcyBpbmxpbmUkMSwgbGltaXRTaGlmdCBhcyBsaW1pdFNoaWZ0JDEsIGNvbXB1dGVQb3NpdGlvbiBhcyBjb21wdXRlUG9zaXRpb24kMSB9IGZyb20gJ0BmbG9hdGluZy11aS9jb3JlJztcbmltcG9ydCB7IHJvdW5kLCBjcmVhdGVDb29yZHMsIG1heCwgbWluLCBmbG9vciB9IGZyb20gJ0BmbG9hdGluZy11aS91dGlscyc7XG5pbXBvcnQgeyBnZXRDb21wdXRlZFN0eWxlLCBpc0hUTUxFbGVtZW50LCBpc0VsZW1lbnQsIGdldFdpbmRvdywgaXNXZWJLaXQsIGdldEZyYW1lRWxlbWVudCwgZ2V0Tm9kZVNjcm9sbCwgZ2V0RG9jdW1lbnRFbGVtZW50LCBpc1RvcExheWVyLCBnZXROb2RlTmFtZSwgaXNPdmVyZmxvd0VsZW1lbnQsIGdldE92ZXJmbG93QW5jZXN0b3JzLCBnZXRQYXJlbnROb2RlLCBpc0xhc3RUcmF2ZXJzYWJsZU5vZGUsIGlzQ29udGFpbmluZ0Jsb2NrLCBpc1RhYmxlRWxlbWVudCwgZ2V0Q29udGFpbmluZ0Jsb2NrIH0gZnJvbSAnQGZsb2F0aW5nLXVpL3V0aWxzL2RvbSc7XG5leHBvcnQgeyBnZXRPdmVyZmxvd0FuY2VzdG9ycyB9IGZyb20gJ0BmbG9hdGluZy11aS91dGlscy9kb20nO1xuXG5mdW5jdGlvbiBnZXRDc3NEaW1lbnNpb25zKGVsZW1lbnQpIHtcbiAgY29uc3QgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgLy8gSW4gdGVzdGluZyBlbnZpcm9ubWVudHMsIHRoZSBgd2lkdGhgIGFuZCBgaGVpZ2h0YCBwcm9wZXJ0aWVzIGFyZSBlbXB0eVxuICAvLyBzdHJpbmdzIGZvciBTVkcgZWxlbWVudHMsIHJldHVybmluZyBOYU4uIEZhbGxiYWNrIHRvIGAwYCBpbiB0aGlzIGNhc2UuXG4gIGxldCB3aWR0aCA9IHBhcnNlRmxvYXQoY3NzLndpZHRoKSB8fCAwO1xuICBsZXQgaGVpZ2h0ID0gcGFyc2VGbG9hdChjc3MuaGVpZ2h0KSB8fCAwO1xuICBjb25zdCBoYXNPZmZzZXQgPSBpc0hUTUxFbGVtZW50KGVsZW1lbnQpO1xuICBjb25zdCBvZmZzZXRXaWR0aCA9IGhhc09mZnNldCA/IGVsZW1lbnQub2Zmc2V0V2lkdGggOiB3aWR0aDtcbiAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gaGFzT2Zmc2V0ID8gZWxlbWVudC5vZmZzZXRIZWlnaHQgOiBoZWlnaHQ7XG4gIGNvbnN0IHNob3VsZEZhbGxiYWNrID0gcm91bmQod2lkdGgpICE9PSBvZmZzZXRXaWR0aCB8fCByb3VuZChoZWlnaHQpICE9PSBvZmZzZXRIZWlnaHQ7XG4gIGlmIChzaG91bGRGYWxsYmFjaykge1xuICAgIHdpZHRoID0gb2Zmc2V0V2lkdGg7XG4gICAgaGVpZ2h0ID0gb2Zmc2V0SGVpZ2h0O1xuICB9XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgICQ6IHNob3VsZEZhbGxiYWNrXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVud3JhcEVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gIWlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgOiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZXRTY2FsZShlbGVtZW50KSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSB1bndyYXBFbGVtZW50KGVsZW1lbnQpO1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZG9tRWxlbWVudCkpIHtcbiAgICByZXR1cm4gY3JlYXRlQ29vcmRzKDEpO1xuICB9XG4gIGNvbnN0IHJlY3QgPSBkb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgICRcbiAgfSA9IGdldENzc0RpbWVuc2lvbnMoZG9tRWxlbWVudCk7XG4gIGxldCB4ID0gKCQgPyByb3VuZChyZWN0LndpZHRoKSA6IHJlY3Qud2lkdGgpIC8gd2lkdGg7XG4gIGxldCB5ID0gKCQgPyByb3VuZChyZWN0LmhlaWdodCkgOiByZWN0LmhlaWdodCkgLyBoZWlnaHQ7XG5cbiAgLy8gMCwgTmFOLCBvciBJbmZpbml0eSBzaG91bGQgYWx3YXlzIGZhbGxiYWNrIHRvIDEuXG5cbiAgaWYgKCF4IHx8ICFOdW1iZXIuaXNGaW5pdGUoeCkpIHtcbiAgICB4ID0gMTtcbiAgfVxuICBpZiAoIXkgfHwgIU51bWJlci5pc0Zpbml0ZSh5KSkge1xuICAgIHkgPSAxO1xuICB9XG4gIHJldHVybiB7XG4gICAgeCxcbiAgICB5XG4gIH07XG59XG5cbmNvbnN0IG5vT2Zmc2V0cyA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb29yZHMoMCk7XG5mdW5jdGlvbiBnZXRWaXN1YWxPZmZzZXRzKGVsZW1lbnQpIHtcbiAgY29uc3Qgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICBpZiAoIWlzV2ViS2l0KCkgfHwgIXdpbi52aXN1YWxWaWV3cG9ydCkge1xuICAgIHJldHVybiBub09mZnNldHM7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4OiB3aW4udmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdCxcbiAgICB5OiB3aW4udmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wXG4gIH07XG59XG5mdW5jdGlvbiBzaG91bGRBZGRWaXN1YWxPZmZzZXRzKGVsZW1lbnQsIGlzRml4ZWQsIGZsb2F0aW5nT2Zmc2V0UGFyZW50KSB7XG4gIGlmIChpc0ZpeGVkID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkID0gZmFsc2U7XG4gIH1cbiAgaWYgKCFmbG9hdGluZ09mZnNldFBhcmVudCB8fCBpc0ZpeGVkICYmIGZsb2F0aW5nT2Zmc2V0UGFyZW50ICE9PSBnZXRXaW5kb3coZWxlbWVudCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGlzRml4ZWQ7XG59XG5cbmZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBpbmNsdWRlU2NhbGUsIGlzRml4ZWRTdHJhdGVneSwgb2Zmc2V0UGFyZW50KSB7XG4gIGlmIChpbmNsdWRlU2NhbGUgPT09IHZvaWQgMCkge1xuICAgIGluY2x1ZGVTY2FsZSA9IGZhbHNlO1xuICB9XG4gIGlmIChpc0ZpeGVkU3RyYXRlZ3kgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWRTdHJhdGVneSA9IGZhbHNlO1xuICB9XG4gIGNvbnN0IGNsaWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBkb21FbGVtZW50ID0gdW53cmFwRWxlbWVudChlbGVtZW50KTtcbiAgbGV0IHNjYWxlID0gY3JlYXRlQ29vcmRzKDEpO1xuICBpZiAoaW5jbHVkZVNjYWxlKSB7XG4gICAgaWYgKG9mZnNldFBhcmVudCkge1xuICAgICAgaWYgKGlzRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICAgIHNjYWxlID0gZ2V0U2NhbGUob2Zmc2V0UGFyZW50KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2NhbGUgPSBnZXRTY2FsZShlbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgY29uc3QgdmlzdWFsT2Zmc2V0cyA9IHNob3VsZEFkZFZpc3VhbE9mZnNldHMoZG9tRWxlbWVudCwgaXNGaXhlZFN0cmF0ZWd5LCBvZmZzZXRQYXJlbnQpID8gZ2V0VmlzdWFsT2Zmc2V0cyhkb21FbGVtZW50KSA6IGNyZWF0ZUNvb3JkcygwKTtcbiAgbGV0IHggPSAoY2xpZW50UmVjdC5sZWZ0ICsgdmlzdWFsT2Zmc2V0cy54KSAvIHNjYWxlLng7XG4gIGxldCB5ID0gKGNsaWVudFJlY3QudG9wICsgdmlzdWFsT2Zmc2V0cy55KSAvIHNjYWxlLnk7XG4gIGxldCB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGggLyBzY2FsZS54O1xuICBsZXQgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQgLyBzY2FsZS55O1xuICBpZiAoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IHdpbiA9IGdldFdpbmRvdyhkb21FbGVtZW50KTtcbiAgICBjb25zdCBvZmZzZXRXaW4gPSBvZmZzZXRQYXJlbnQgJiYgaXNFbGVtZW50KG9mZnNldFBhcmVudCkgPyBnZXRXaW5kb3cob2Zmc2V0UGFyZW50KSA6IG9mZnNldFBhcmVudDtcbiAgICBsZXQgY3VycmVudFdpbiA9IHdpbjtcbiAgICBsZXQgY3VycmVudElGcmFtZSA9IGdldEZyYW1lRWxlbWVudChjdXJyZW50V2luKTtcbiAgICB3aGlsZSAoY3VycmVudElGcmFtZSAmJiBvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0V2luICE9PSBjdXJyZW50V2luKSB7XG4gICAgICBjb25zdCBpZnJhbWVTY2FsZSA9IGdldFNjYWxlKGN1cnJlbnRJRnJhbWUpO1xuICAgICAgY29uc3QgaWZyYW1lUmVjdCA9IGN1cnJlbnRJRnJhbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnRJRnJhbWUpO1xuICAgICAgY29uc3QgbGVmdCA9IGlmcmFtZVJlY3QubGVmdCArIChjdXJyZW50SUZyYW1lLmNsaWVudExlZnQgKyBwYXJzZUZsb2F0KGNzcy5wYWRkaW5nTGVmdCkpICogaWZyYW1lU2NhbGUueDtcbiAgICAgIGNvbnN0IHRvcCA9IGlmcmFtZVJlY3QudG9wICsgKGN1cnJlbnRJRnJhbWUuY2xpZW50VG9wICsgcGFyc2VGbG9hdChjc3MucGFkZGluZ1RvcCkpICogaWZyYW1lU2NhbGUueTtcbiAgICAgIHggKj0gaWZyYW1lU2NhbGUueDtcbiAgICAgIHkgKj0gaWZyYW1lU2NhbGUueTtcbiAgICAgIHdpZHRoICo9IGlmcmFtZVNjYWxlLng7XG4gICAgICBoZWlnaHQgKj0gaWZyYW1lU2NhbGUueTtcbiAgICAgIHggKz0gbGVmdDtcbiAgICAgIHkgKz0gdG9wO1xuICAgICAgY3VycmVudFdpbiA9IGdldFdpbmRvdyhjdXJyZW50SUZyYW1lKTtcbiAgICAgIGN1cnJlbnRJRnJhbWUgPSBnZXRGcmFtZUVsZW1lbnQoY3VycmVudFdpbik7XG4gICAgfVxuICB9XG4gIHJldHVybiByZWN0VG9DbGllbnRSZWN0KHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgeCxcbiAgICB5XG4gIH0pO1xufVxuXG4vLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4vLyBpbmNvcnJlY3QgZm9yIFJUTC5cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCwgcmVjdCkge1xuICBjb25zdCBsZWZ0U2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChlbGVtZW50KS5zY3JvbGxMZWZ0O1xuICBpZiAoIXJlY3QpIHtcbiAgICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGxlZnRTY3JvbGw7XG4gIH1cbiAgcmV0dXJuIHJlY3QubGVmdCArIGxlZnRTY3JvbGw7XG59XG5cbmZ1bmN0aW9uIGdldEhUTUxPZmZzZXQoZG9jdW1lbnRFbGVtZW50LCBzY3JvbGwsIGlnbm9yZVNjcm9sbGJhclgpIHtcbiAgaWYgKGlnbm9yZVNjcm9sbGJhclggPT09IHZvaWQgMCkge1xuICAgIGlnbm9yZVNjcm9sbGJhclggPSBmYWxzZTtcbiAgfVxuICBjb25zdCBodG1sUmVjdCA9IGRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgeCA9IGh0bWxSZWN0LmxlZnQgKyBzY3JvbGwuc2Nyb2xsTGVmdCAtIChpZ25vcmVTY3JvbGxiYXJYID8gMCA6XG4gIC8vIFJUTCA8Ym9keT4gc2Nyb2xsYmFyLlxuICBnZXRXaW5kb3dTY3JvbGxCYXJYKGRvY3VtZW50RWxlbWVudCwgaHRtbFJlY3QpKTtcbiAgY29uc3QgeSA9IGh0bWxSZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3A7XG4gIHJldHVybiB7XG4gICAgeCxcbiAgICB5XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRPZmZzZXRQYXJlbnRSZWxhdGl2ZVJlY3RUb1ZpZXdwb3J0UmVsYXRpdmVSZWN0KF9yZWYpIHtcbiAgbGV0IHtcbiAgICBlbGVtZW50cyxcbiAgICByZWN0LFxuICAgIG9mZnNldFBhcmVudCxcbiAgICBzdHJhdGVneVxuICB9ID0gX3JlZjtcbiAgY29uc3QgaXNGaXhlZCA9IHN0cmF0ZWd5ID09PSAnZml4ZWQnO1xuICBjb25zdCBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgY29uc3QgdG9wTGF5ZXIgPSBlbGVtZW50cyA/IGlzVG9wTGF5ZXIoZWxlbWVudHMuZmxvYXRpbmcpIDogZmFsc2U7XG4gIGlmIChvZmZzZXRQYXJlbnQgPT09IGRvY3VtZW50RWxlbWVudCB8fCB0b3BMYXllciAmJiBpc0ZpeGVkKSB7XG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cbiAgbGV0IHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICBsZXQgc2NhbGUgPSBjcmVhdGVDb29yZHMoMSk7XG4gIGNvbnN0IG9mZnNldHMgPSBjcmVhdGVDb29yZHMoMCk7XG4gIGNvbnN0IGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCBpc092ZXJmbG93RWxlbWVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgIGNvbnN0IG9mZnNldFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50KTtcbiAgICAgIHNjYWxlID0gZ2V0U2NhbGUob2Zmc2V0UGFyZW50KTtcbiAgICAgIG9mZnNldHMueCA9IG9mZnNldFJlY3QueCArIG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ID0gb2Zmc2V0UmVjdC55ICsgb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICB9XG4gIH1cbiAgY29uc3QgaHRtbE9mZnNldCA9IGRvY3VtZW50RWxlbWVudCAmJiAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQgPyBnZXRIVE1MT2Zmc2V0KGRvY3VtZW50RWxlbWVudCwgc2Nyb2xsLCB0cnVlKSA6IGNyZWF0ZUNvb3JkcygwKTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogcmVjdC53aWR0aCAqIHNjYWxlLngsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCAqIHNjYWxlLnksXG4gICAgeDogcmVjdC54ICogc2NhbGUueCAtIHNjcm9sbC5zY3JvbGxMZWZ0ICogc2NhbGUueCArIG9mZnNldHMueCArIGh0bWxPZmZzZXQueCxcbiAgICB5OiByZWN0LnkgKiBzY2FsZS55IC0gc2Nyb2xsLnNjcm9sbFRvcCAqIHNjYWxlLnkgKyBvZmZzZXRzLnkgKyBodG1sT2Zmc2V0LnlcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdHMoZWxlbWVudCkge1xuICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmdldENsaWVudFJlY3RzKCkpO1xufVxuXG4vLyBHZXRzIHRoZSBlbnRpcmUgc2l6ZSBvZiB0aGUgc2Nyb2xsYWJsZSBkb2N1bWVudCBhcmVhLCBldmVuIGV4dGVuZGluZyBvdXRzaWRlXG4vLyBvZiB0aGUgYDxodG1sPmAgYW5kIGA8Ym9keT5gIHJlY3QgYm91bmRzIGlmIGhvcml6b250YWxseSBzY3JvbGxhYmxlLlxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRSZWN0KGVsZW1lbnQpIHtcbiAgY29uc3QgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgY29uc3Qgc2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChlbGVtZW50KTtcbiAgY29uc3QgYm9keSA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5ib2R5O1xuICBjb25zdCB3aWR0aCA9IG1heChodG1sLnNjcm9sbFdpZHRoLCBodG1sLmNsaWVudFdpZHRoLCBib2R5LnNjcm9sbFdpZHRoLCBib2R5LmNsaWVudFdpZHRoKTtcbiAgY29uc3QgaGVpZ2h0ID0gbWF4KGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLmNsaWVudEhlaWdodCwgYm9keS5zY3JvbGxIZWlnaHQsIGJvZHkuY2xpZW50SGVpZ2h0KTtcbiAgbGV0IHggPSAtc2Nyb2xsLnNjcm9sbExlZnQgKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpO1xuICBjb25zdCB5ID0gLXNjcm9sbC5zY3JvbGxUb3A7XG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKGJvZHkpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5LmNsaWVudFdpZHRoKSAtIHdpZHRoO1xuICB9XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHgsXG4gICAgeVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpIHtcbiAgY29uc3Qgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICBjb25zdCBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICBjb25zdCB2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydDtcbiAgbGV0IHdpZHRoID0gaHRtbC5jbGllbnRXaWR0aDtcbiAgbGV0IGhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICBsZXQgeCA9IDA7XG4gIGxldCB5ID0gMDtcbiAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgd2lkdGggPSB2aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7XG4gICAgY29uc3QgdmlzdWFsVmlld3BvcnRCYXNlZCA9IGlzV2ViS2l0KCk7XG4gICAgaWYgKCF2aXN1YWxWaWV3cG9ydEJhc2VkIHx8IHZpc3VhbFZpZXdwb3J0QmFzZWQgJiYgc3RyYXRlZ3kgPT09ICdmaXhlZCcpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgeCxcbiAgICB5XG4gIH07XG59XG5cbi8vIFJldHVybnMgdGhlIGlubmVyIGNsaWVudCByZWN0LCBzdWJ0cmFjdGluZyBzY3JvbGxiYXJzIGlmIHByZXNlbnQuXG5mdW5jdGlvbiBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xuICBjb25zdCBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIHRydWUsIHN0cmF0ZWd5ID09PSAnZml4ZWQnKTtcbiAgY29uc3QgdG9wID0gY2xpZW50UmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgY29uc3QgbGVmdCA9IGNsaWVudFJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgY29uc3Qgc2NhbGUgPSBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0U2NhbGUoZWxlbWVudCkgOiBjcmVhdGVDb29yZHMoMSk7XG4gIGNvbnN0IHdpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjYWxlLng7XG4gIGNvbnN0IGhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NhbGUueTtcbiAgY29uc3QgeCA9IGxlZnQgKiBzY2FsZS54O1xuICBjb25zdCB5ID0gdG9wICogc2NhbGUueTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgeCxcbiAgICB5XG4gIH07XG59XG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0RnJvbUNsaXBwaW5nQW5jZXN0b3IoZWxlbWVudCwgY2xpcHBpbmdBbmNlc3Rvciwgc3RyYXRlZ3kpIHtcbiAgbGV0IHJlY3Q7XG4gIGlmIChjbGlwcGluZ0FuY2VzdG9yID09PSAndmlld3BvcnQnKSB7XG4gICAgcmVjdCA9IGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSk7XG4gIH0gZWxzZSBpZiAoY2xpcHBpbmdBbmNlc3RvciA9PT0gJ2RvY3VtZW50Jykge1xuICAgIHJlY3QgPSBnZXREb2N1bWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKTtcbiAgfSBlbHNlIGlmIChpc0VsZW1lbnQoY2xpcHBpbmdBbmNlc3RvcikpIHtcbiAgICByZWN0ID0gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdBbmNlc3Rvciwgc3RyYXRlZ3kpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHZpc3VhbE9mZnNldHMgPSBnZXRWaXN1YWxPZmZzZXRzKGVsZW1lbnQpO1xuICAgIHJlY3QgPSB7XG4gICAgICB4OiBjbGlwcGluZ0FuY2VzdG9yLnggLSB2aXN1YWxPZmZzZXRzLngsXG4gICAgICB5OiBjbGlwcGluZ0FuY2VzdG9yLnkgLSB2aXN1YWxPZmZzZXRzLnksXG4gICAgICB3aWR0aDogY2xpcHBpbmdBbmNlc3Rvci53aWR0aCxcbiAgICAgIGhlaWdodDogY2xpcHBpbmdBbmNlc3Rvci5oZWlnaHRcbiAgICB9O1xuICB9XG4gIHJldHVybiByZWN0VG9DbGllbnRSZWN0KHJlY3QpO1xufVxuZnVuY3Rpb24gaGFzRml4ZWRQb3NpdGlvbkFuY2VzdG9yKGVsZW1lbnQsIHN0b3BOb2RlKSB7XG4gIGNvbnN0IHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuICBpZiAocGFyZW50Tm9kZSA9PT0gc3RvcE5vZGUgfHwgIWlzRWxlbWVudChwYXJlbnROb2RlKSB8fCBpc0xhc3RUcmF2ZXJzYWJsZU5vZGUocGFyZW50Tm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUocGFyZW50Tm9kZSkucG9zaXRpb24gPT09ICdmaXhlZCcgfHwgaGFzRml4ZWRQb3NpdGlvbkFuY2VzdG9yKHBhcmVudE5vZGUsIHN0b3BOb2RlKTtcbn1cblxuLy8gQSBcImNsaXBwaW5nIGFuY2VzdG9yXCIgaXMgYW4gYG92ZXJmbG93YCBlbGVtZW50IHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4vLyBjbGlwcGluZyAob3IgaGlkaW5nKSBjaGlsZCBlbGVtZW50cy4gVGhpcyByZXR1cm5zIGFsbCBjbGlwcGluZyBhbmNlc3RvcnNcbi8vIG9mIHRoZSBnaXZlbiBlbGVtZW50IHVwIHRoZSB0cmVlLlxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdFbGVtZW50QW5jZXN0b3JzKGVsZW1lbnQsIGNhY2hlKSB7XG4gIGNvbnN0IGNhY2hlZFJlc3VsdCA9IGNhY2hlLmdldChlbGVtZW50KTtcbiAgaWYgKGNhY2hlZFJlc3VsdCkge1xuICAgIHJldHVybiBjYWNoZWRSZXN1bHQ7XG4gIH1cbiAgbGV0IHJlc3VsdCA9IGdldE92ZXJmbG93QW5jZXN0b3JzKGVsZW1lbnQsIFtdLCBmYWxzZSkuZmlsdGVyKGVsID0+IGlzRWxlbWVudChlbCkgJiYgZ2V0Tm9kZU5hbWUoZWwpICE9PSAnYm9keScpO1xuICBsZXQgY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgPSBudWxsO1xuICBjb25zdCBlbGVtZW50SXNGaXhlZCA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCc7XG4gIGxldCBjdXJyZW50Tm9kZSA9IGVsZW1lbnRJc0ZpeGVkID8gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcbiAgd2hpbGUgKGlzRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgIWlzTGFzdFRyYXZlcnNhYmxlTm9kZShjdXJyZW50Tm9kZSkpIHtcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSk7XG4gICAgY29uc3QgY3VycmVudE5vZGVJc0NvbnRhaW5pbmcgPSBpc0NvbnRhaW5pbmdCbG9jayhjdXJyZW50Tm9kZSk7XG4gICAgaWYgKCFjdXJyZW50Tm9kZUlzQ29udGFpbmluZyAmJiBjb21wdXRlZFN0eWxlLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICBjdXJyZW50Q29udGFpbmluZ0Jsb2NrQ29tcHV0ZWRTdHlsZSA9IG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHNob3VsZERyb3BDdXJyZW50Tm9kZSA9IGVsZW1lbnRJc0ZpeGVkID8gIWN1cnJlbnROb2RlSXNDb250YWluaW5nICYmICFjdXJyZW50Q29udGFpbmluZ0Jsb2NrQ29tcHV0ZWRTdHlsZSA6ICFjdXJyZW50Tm9kZUlzQ29udGFpbmluZyAmJiBjb21wdXRlZFN0eWxlLnBvc2l0aW9uID09PSAnc3RhdGljJyAmJiAhIWN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlICYmIFsnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmNsdWRlcyhjdXJyZW50Q29udGFpbmluZ0Jsb2NrQ29tcHV0ZWRTdHlsZS5wb3NpdGlvbikgfHwgaXNPdmVyZmxvd0VsZW1lbnQoY3VycmVudE5vZGUpICYmICFjdXJyZW50Tm9kZUlzQ29udGFpbmluZyAmJiBoYXNGaXhlZFBvc2l0aW9uQW5jZXN0b3IoZWxlbWVudCwgY3VycmVudE5vZGUpO1xuICAgIGlmIChzaG91bGREcm9wQ3VycmVudE5vZGUpIHtcbiAgICAgIC8vIERyb3Agbm9uLWNvbnRhaW5pbmcgYmxvY2tzLlxuICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihhbmNlc3RvciA9PiBhbmNlc3RvciAhPT0gY3VycmVudE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZWNvcmQgbGFzdCBjb250YWluaW5nIGJsb2NrIGZvciBuZXh0IGl0ZXJhdGlvbi5cbiAgICAgIGN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlID0gY29tcHV0ZWRTdHlsZTtcbiAgICB9XG4gICAgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGN1cnJlbnROb2RlKTtcbiAgfVxuICBjYWNoZS5zZXQoZWxlbWVudCwgcmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gR2V0cyB0aGUgbWF4aW11bSBhcmVhIHRoYXQgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiBkdWUgdG8gYW55IG51bWJlciBvZlxuLy8gY2xpcHBpbmcgYW5jZXN0b3JzLlxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KF9yZWYpIHtcbiAgbGV0IHtcbiAgICBlbGVtZW50LFxuICAgIGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeSxcbiAgICBzdHJhdGVneVxuICB9ID0gX3JlZjtcbiAgY29uc3QgZWxlbWVudENsaXBwaW5nQW5jZXN0b3JzID0gYm91bmRhcnkgPT09ICdjbGlwcGluZ0FuY2VzdG9ycycgPyBpc1RvcExheWVyKGVsZW1lbnQpID8gW10gOiBnZXRDbGlwcGluZ0VsZW1lbnRBbmNlc3RvcnMoZWxlbWVudCwgdGhpcy5fYykgOiBbXS5jb25jYXQoYm91bmRhcnkpO1xuICBjb25zdCBjbGlwcGluZ0FuY2VzdG9ycyA9IFsuLi5lbGVtZW50Q2xpcHBpbmdBbmNlc3RvcnMsIHJvb3RCb3VuZGFyeV07XG4gIGNvbnN0IGZpcnN0Q2xpcHBpbmdBbmNlc3RvciA9IGNsaXBwaW5nQW5jZXN0b3JzWzBdO1xuICBjb25zdCBjbGlwcGluZ1JlY3QgPSBjbGlwcGluZ0FuY2VzdG9ycy5yZWR1Y2UoKGFjY1JlY3QsIGNsaXBwaW5nQW5jZXN0b3IpID0+IHtcbiAgICBjb25zdCByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21DbGlwcGluZ0FuY2VzdG9yKGVsZW1lbnQsIGNsaXBwaW5nQW5jZXN0b3IsIHN0cmF0ZWd5KTtcbiAgICBhY2NSZWN0LnRvcCA9IG1heChyZWN0LnRvcCwgYWNjUmVjdC50b3ApO1xuICAgIGFjY1JlY3QucmlnaHQgPSBtaW4ocmVjdC5yaWdodCwgYWNjUmVjdC5yaWdodCk7XG4gICAgYWNjUmVjdC5ib3R0b20gPSBtaW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcbiAgICBhY2NSZWN0LmxlZnQgPSBtYXgocmVjdC5sZWZ0LCBhY2NSZWN0LmxlZnQpO1xuICAgIHJldHVybiBhY2NSZWN0O1xuICB9LCBnZXRDbGllbnRSZWN0RnJvbUNsaXBwaW5nQW5jZXN0b3IoZWxlbWVudCwgZmlyc3RDbGlwcGluZ0FuY2VzdG9yLCBzdHJhdGVneSkpO1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiBjbGlwcGluZ1JlY3QucmlnaHQgLSBjbGlwcGluZ1JlY3QubGVmdCxcbiAgICBoZWlnaHQ6IGNsaXBwaW5nUmVjdC5ib3R0b20gLSBjbGlwcGluZ1JlY3QudG9wLFxuICAgIHg6IGNsaXBwaW5nUmVjdC5sZWZ0LFxuICAgIHk6IGNsaXBwaW5nUmVjdC50b3BcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RGltZW5zaW9ucyhlbGVtZW50KSB7XG4gIGNvbnN0IHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHRcbiAgfSA9IGdldENzc0RpbWVuc2lvbnMoZWxlbWVudCk7XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFJlY3RSZWxhdGl2ZVRvT2Zmc2V0UGFyZW50KGVsZW1lbnQsIG9mZnNldFBhcmVudCwgc3RyYXRlZ3kpIHtcbiAgY29uc3QgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIGNvbnN0IGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICBjb25zdCBpc0ZpeGVkID0gc3RyYXRlZ3kgPT09ICdmaXhlZCc7XG4gIGNvbnN0IHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgdHJ1ZSwgaXNGaXhlZCwgb2Zmc2V0UGFyZW50KTtcbiAgbGV0IHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICBjb25zdCBvZmZzZXRzID0gY3JlYXRlQ29vcmRzKDApO1xuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCBpc092ZXJmbG93RWxlbWVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCkge1xuICAgICAgY29uc3Qgb2Zmc2V0UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQsIHRydWUsIGlzRml4ZWQsIG9mZnNldFBhcmVudCk7XG4gICAgICBvZmZzZXRzLnggPSBvZmZzZXRSZWN0LnggKyBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSA9IG9mZnNldFJlY3QueSArIG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIC8vIElmIHRoZSA8Ym9keT4gc2Nyb2xsYmFyIGFwcGVhcnMgb24gdGhlIGxlZnQgKGUuZy4gUlRMIHN5c3RlbXMpLiBVc2VcbiAgICAgIC8vIEZpcmVmb3ggd2l0aCBsYXlvdXQuc2Nyb2xsYmFyLnNpZGUgPSAzIGluIGFib3V0OmNvbmZpZyB0byB0ZXN0IHRoaXMuXG4gICAgICBvZmZzZXRzLnggPSBnZXRXaW5kb3dTY3JvbGxCYXJYKGRvY3VtZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGh0bWxPZmZzZXQgPSBkb2N1bWVudEVsZW1lbnQgJiYgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkID8gZ2V0SFRNTE9mZnNldChkb2N1bWVudEVsZW1lbnQsIHNjcm9sbCkgOiBjcmVhdGVDb29yZHMoMCk7XG4gIGNvbnN0IHggPSByZWN0LmxlZnQgKyBzY3JvbGwuc2Nyb2xsTGVmdCAtIG9mZnNldHMueCAtIGh0bWxPZmZzZXQueDtcbiAgY29uc3QgeSA9IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSAtIGh0bWxPZmZzZXQueTtcbiAgcmV0dXJuIHtcbiAgICB4LFxuICAgIHksXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICB9O1xufVxuXG5mdW5jdGlvbiBpc1N0YXRpY1Bvc2l0aW9uZWQoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYyc7XG59XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCwgcG9seWZpbGwpIHtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAocG9seWZpbGwpIHtcbiAgICByZXR1cm4gcG9seWZpbGwoZWxlbWVudCk7XG4gIH1cbiAgbGV0IHJhd09mZnNldFBhcmVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuXG4gIC8vIEZpcmVmb3ggcmV0dXJucyB0aGUgPGh0bWw+IGVsZW1lbnQgYXMgdGhlIG9mZnNldFBhcmVudCBpZiBpdCdzIG5vbi1zdGF0aWMsXG4gIC8vIHdoaWxlIENocm9tZSBhbmQgU2FmYXJpIHJldHVybiB0aGUgPGJvZHk+IGVsZW1lbnQuIFRoZSA8Ym9keT4gZWxlbWVudCBtdXN0XG4gIC8vIGJlIHVzZWQgdG8gcGVyZm9ybSB0aGUgY29ycmVjdCBjYWxjdWxhdGlvbnMgZXZlbiBpZiB0aGUgPGh0bWw+IGVsZW1lbnQgaXNcbiAgLy8gbm9uLXN0YXRpYy5cbiAgaWYgKGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSA9PT0gcmF3T2Zmc2V0UGFyZW50KSB7XG4gICAgcmF3T2Zmc2V0UGFyZW50ID0gcmF3T2Zmc2V0UGFyZW50Lm93bmVyRG9jdW1lbnQuYm9keTtcbiAgfVxuICByZXR1cm4gcmF3T2Zmc2V0UGFyZW50O1xufVxuXG4vLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4vLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQsIHBvbHlmaWxsKSB7XG4gIGNvbnN0IHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgaWYgKGlzVG9wTGF5ZXIoZWxlbWVudCkpIHtcbiAgICByZXR1cm4gd2luO1xuICB9XG4gIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIGxldCBzdmdPZmZzZXRQYXJlbnQgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuICAgIHdoaWxlIChzdmdPZmZzZXRQYXJlbnQgJiYgIWlzTGFzdFRyYXZlcnNhYmxlTm9kZShzdmdPZmZzZXRQYXJlbnQpKSB7XG4gICAgICBpZiAoaXNFbGVtZW50KHN2Z09mZnNldFBhcmVudCkgJiYgIWlzU3RhdGljUG9zaXRpb25lZChzdmdPZmZzZXRQYXJlbnQpKSB7XG4gICAgICAgIHJldHVybiBzdmdPZmZzZXRQYXJlbnQ7XG4gICAgICB9XG4gICAgICBzdmdPZmZzZXRQYXJlbnQgPSBnZXRQYXJlbnROb2RlKHN2Z09mZnNldFBhcmVudCk7XG4gICAgfVxuICAgIHJldHVybiB3aW47XG4gIH1cbiAgbGV0IG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCwgcG9seWZpbGwpO1xuICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgaXNTdGF0aWNQb3NpdGlvbmVkKG9mZnNldFBhcmVudCkpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCwgcG9seWZpbGwpO1xuICB9XG4gIGlmIChvZmZzZXRQYXJlbnQgJiYgaXNMYXN0VHJhdmVyc2FibGVOb2RlKG9mZnNldFBhcmVudCkgJiYgaXNTdGF0aWNQb3NpdGlvbmVkKG9mZnNldFBhcmVudCkgJiYgIWlzQ29udGFpbmluZ0Jsb2NrKG9mZnNldFBhcmVudCkpIHtcbiAgICByZXR1cm4gd2luO1xuICB9XG4gIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbjtcbn1cblxuY29uc3QgZ2V0RWxlbWVudFJlY3RzID0gYXN5bmMgZnVuY3Rpb24gKGRhdGEpIHtcbiAgY29uc3QgZ2V0T2Zmc2V0UGFyZW50Rm4gPSB0aGlzLmdldE9mZnNldFBhcmVudCB8fCBnZXRPZmZzZXRQYXJlbnQ7XG4gIGNvbnN0IGdldERpbWVuc2lvbnNGbiA9IHRoaXMuZ2V0RGltZW5zaW9ucztcbiAgY29uc3QgZmxvYXRpbmdEaW1lbnNpb25zID0gYXdhaXQgZ2V0RGltZW5zaW9uc0ZuKGRhdGEuZmxvYXRpbmcpO1xuICByZXR1cm4ge1xuICAgIHJlZmVyZW5jZTogZ2V0UmVjdFJlbGF0aXZlVG9PZmZzZXRQYXJlbnQoZGF0YS5yZWZlcmVuY2UsIGF3YWl0IGdldE9mZnNldFBhcmVudEZuKGRhdGEuZmxvYXRpbmcpLCBkYXRhLnN0cmF0ZWd5KSxcbiAgICBmbG9hdGluZzoge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICB3aWR0aDogZmxvYXRpbmdEaW1lbnNpb25zLndpZHRoLFxuICAgICAgaGVpZ2h0OiBmbG9hdGluZ0RpbWVuc2lvbnMuaGVpZ2h0XG4gICAgfVxuICB9O1xufTtcblxuZnVuY3Rpb24gaXNSVEwoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXJlY3Rpb24gPT09ICdydGwnO1xufVxuXG5jb25zdCBwbGF0Zm9ybSA9IHtcbiAgY29udmVydE9mZnNldFBhcmVudFJlbGF0aXZlUmVjdFRvVmlld3BvcnRSZWxhdGl2ZVJlY3QsXG4gIGdldERvY3VtZW50RWxlbWVudCxcbiAgZ2V0Q2xpcHBpbmdSZWN0LFxuICBnZXRPZmZzZXRQYXJlbnQsXG4gIGdldEVsZW1lbnRSZWN0cyxcbiAgZ2V0Q2xpZW50UmVjdHMsXG4gIGdldERpbWVuc2lvbnMsXG4gIGdldFNjYWxlLFxuICBpc0VsZW1lbnQsXG4gIGlzUlRMXG59O1xuXG5mdW5jdGlvbiByZWN0c0FyZUVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEueCA9PT0gYi54ICYmIGEueSA9PT0gYi55ICYmIGEud2lkdGggPT09IGIud2lkdGggJiYgYS5oZWlnaHQgPT09IGIuaGVpZ2h0O1xufVxuXG4vLyBodHRwczovL3NhbXRob3IuYXUvMjAyMS9vYnNlcnZpbmctZG9tL1xuZnVuY3Rpb24gb2JzZXJ2ZU1vdmUoZWxlbWVudCwgb25Nb3ZlKSB7XG4gIGxldCBpbyA9IG51bGw7XG4gIGxldCB0aW1lb3V0SWQ7XG4gIGNvbnN0IHJvb3QgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgdmFyIF9pbztcbiAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAoX2lvID0gaW8pID09IG51bGwgfHwgX2lvLmRpc2Nvbm5lY3QoKTtcbiAgICBpbyA9IG51bGw7XG4gIH1cbiAgZnVuY3Rpb24gcmVmcmVzaChza2lwLCB0aHJlc2hvbGQpIHtcbiAgICBpZiAoc2tpcCA9PT0gdm9pZCAwKSB7XG4gICAgICBza2lwID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aHJlc2hvbGQgPT09IHZvaWQgMCkge1xuICAgICAgdGhyZXNob2xkID0gMTtcbiAgICB9XG4gICAgY2xlYW51cCgpO1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0Rm9yUm9vdE1hcmdpbiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qge1xuICAgICAgbGVmdCxcbiAgICAgIHRvcCxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0XG4gICAgfSA9IGVsZW1lbnRSZWN0Rm9yUm9vdE1hcmdpbjtcbiAgICBpZiAoIXNraXApIHtcbiAgICAgIG9uTW92ZSgpO1xuICAgIH1cbiAgICBpZiAoIXdpZHRoIHx8ICFoZWlnaHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5zZXRUb3AgPSBmbG9vcih0b3ApO1xuICAgIGNvbnN0IGluc2V0UmlnaHQgPSBmbG9vcihyb290LmNsaWVudFdpZHRoIC0gKGxlZnQgKyB3aWR0aCkpO1xuICAgIGNvbnN0IGluc2V0Qm90dG9tID0gZmxvb3Iocm9vdC5jbGllbnRIZWlnaHQgLSAodG9wICsgaGVpZ2h0KSk7XG4gICAgY29uc3QgaW5zZXRMZWZ0ID0gZmxvb3IobGVmdCk7XG4gICAgY29uc3Qgcm9vdE1hcmdpbiA9IC1pbnNldFRvcCArIFwicHggXCIgKyAtaW5zZXRSaWdodCArIFwicHggXCIgKyAtaW5zZXRCb3R0b20gKyBcInB4IFwiICsgLWluc2V0TGVmdCArIFwicHhcIjtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgcm9vdE1hcmdpbixcbiAgICAgIHRocmVzaG9sZDogbWF4KDAsIG1pbigxLCB0aHJlc2hvbGQpKSB8fCAxXG4gICAgfTtcbiAgICBsZXQgaXNGaXJzdFVwZGF0ZSA9IHRydWU7XG4gICAgZnVuY3Rpb24gaGFuZGxlT2JzZXJ2ZShlbnRyaWVzKSB7XG4gICAgICBjb25zdCByYXRpbyA9IGVudHJpZXNbMF0uaW50ZXJzZWN0aW9uUmF0aW87XG4gICAgICBpZiAocmF0aW8gIT09IHRocmVzaG9sZCkge1xuICAgICAgICBpZiAoIWlzRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgICByZXR1cm4gcmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmF0aW8pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgcmVmZXJlbmNlIGlzIGNsaXBwZWQsIHRoZSByYXRpbyBpcyAwLiBUaHJvdHRsZSB0aGUgcmVmcmVzaFxuICAgICAgICAgIC8vIHRvIHByZXZlbnQgYW4gaW5maW5pdGUgbG9vcCBvZiB1cGRhdGVzLlxuICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVmcmVzaChmYWxzZSwgMWUtNyk7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVmcmVzaChmYWxzZSwgcmF0aW8pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocmF0aW8gPT09IDEgJiYgIXJlY3RzQXJlRXF1YWwoZWxlbWVudFJlY3RGb3JSb290TWFyZ2luLCBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSkge1xuICAgICAgICAvLyBJdCdzIHBvc3NpYmxlIHRoYXQgZXZlbiB0aG91Z2ggdGhlIHJhdGlvIGlzIHJlcG9ydGVkIGFzIDEsIHRoZVxuICAgICAgICAvLyBlbGVtZW50IGlzIG5vdCBhY3R1YWxseSBmdWxseSB3aXRoaW4gdGhlIEludGVyc2VjdGlvbk9ic2VydmVyJ3Mgcm9vdFxuICAgICAgICAvLyBhcmVhIGFueW1vcmUuIFRoaXMgY2FuIGhhcHBlbiB1bmRlciBwZXJmb3JtYW5jZSBjb25zdHJhaW50cy4gVGhpcyBtYXlcbiAgICAgICAgLy8gYmUgYSBidWcgaW4gdGhlIGJyb3dzZXIncyBJbnRlcnNlY3Rpb25PYnNlcnZlciBpbXBsZW1lbnRhdGlvbi4gVG9cbiAgICAgICAgLy8gd29yayBhcm91bmQgdGhpcywgd2UgY29tcGFyZSB0aGUgZWxlbWVudCdzIGJvdW5kaW5nIHJlY3Qgbm93IHdpdGhcbiAgICAgICAgLy8gd2hhdCBpdCB3YXMgYXQgdGhlIHRpbWUgd2UgY3JlYXRlZCB0aGUgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIuIElmIHRoZXlcbiAgICAgICAgLy8gYXJlIG5vdCBlcXVhbCB0aGVuIHRoZSBlbGVtZW50IG1vdmVkLCBzbyB3ZSByZWZyZXNoLlxuICAgICAgICByZWZyZXNoKCk7XG4gICAgICB9XG4gICAgICBpc0ZpcnN0VXBkYXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gT2xkZXIgYnJvd3NlcnMgZG9uJ3Qgc3VwcG9ydCBhIGBkb2N1bWVudGAgYXMgdGhlIHJvb3QgYW5kIHdpbGwgdGhyb3cgYW5cbiAgICAvLyBlcnJvci5cbiAgICB0cnkge1xuICAgICAgaW8gPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGFuZGxlT2JzZXJ2ZSwge1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAvLyBIYW5kbGUgPGlmcmFtZT5zXG4gICAgICAgIHJvb3Q6IHJvb3Qub3duZXJEb2N1bWVudFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaW8gPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGFuZGxlT2JzZXJ2ZSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGlvLm9ic2VydmUoZWxlbWVudCk7XG4gIH1cbiAgcmVmcmVzaCh0cnVlKTtcbiAgcmV0dXJuIGNsZWFudXA7XG59XG5cbi8qKlxuICogQXV0b21hdGljYWxseSB1cGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCB3aGVuIG5lY2Vzc2FyeS5cbiAqIFNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aGVuIHRoZSBmbG9hdGluZyBlbGVtZW50IGlzIG1vdW50ZWQgb24gdGhlIERPTSBvclxuICogdmlzaWJsZSBvbiB0aGUgc2NyZWVuLlxuICogQHJldHVybnMgY2xlYW51cCBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBpbnZva2VkIHdoZW4gdGhlIGZsb2F0aW5nIGVsZW1lbnQgaXNcbiAqIHJlbW92ZWQgZnJvbSB0aGUgRE9NIG9yIGhpZGRlbiBmcm9tIHRoZSBzY3JlZW4uXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvYXV0b1VwZGF0ZVxuICovXG5mdW5jdGlvbiBhdXRvVXBkYXRlKHJlZmVyZW5jZSwgZmxvYXRpbmcsIHVwZGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGNvbnN0IHtcbiAgICBhbmNlc3RvclNjcm9sbCA9IHRydWUsXG4gICAgYW5jZXN0b3JSZXNpemUgPSB0cnVlLFxuICAgIGVsZW1lbnRSZXNpemUgPSB0eXBlb2YgUmVzaXplT2JzZXJ2ZXIgPT09ICdmdW5jdGlvbicsXG4gICAgbGF5b3V0U2hpZnQgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPT09ICdmdW5jdGlvbicsXG4gICAgYW5pbWF0aW9uRnJhbWUgPSBmYWxzZVxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgcmVmZXJlbmNlRWwgPSB1bndyYXBFbGVtZW50KHJlZmVyZW5jZSk7XG4gIGNvbnN0IGFuY2VzdG9ycyA9IGFuY2VzdG9yU2Nyb2xsIHx8IGFuY2VzdG9yUmVzaXplID8gWy4uLihyZWZlcmVuY2VFbCA/IGdldE92ZXJmbG93QW5jZXN0b3JzKHJlZmVyZW5jZUVsKSA6IFtdKSwgLi4uZ2V0T3ZlcmZsb3dBbmNlc3RvcnMoZmxvYXRpbmcpXSA6IFtdO1xuICBhbmNlc3RvcnMuZm9yRWFjaChhbmNlc3RvciA9PiB7XG4gICAgYW5jZXN0b3JTY3JvbGwgJiYgYW5jZXN0b3IuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG4gICAgYW5jZXN0b3JSZXNpemUgJiYgYW5jZXN0b3IuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlKTtcbiAgfSk7XG4gIGNvbnN0IGNsZWFudXBJbyA9IHJlZmVyZW5jZUVsICYmIGxheW91dFNoaWZ0ID8gb2JzZXJ2ZU1vdmUocmVmZXJlbmNlRWwsIHVwZGF0ZSkgOiBudWxsO1xuICBsZXQgcmVvYnNlcnZlRnJhbWUgPSAtMTtcbiAgbGV0IHJlc2l6ZU9ic2VydmVyID0gbnVsbDtcbiAgaWYgKGVsZW1lbnRSZXNpemUpIHtcbiAgICByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihfcmVmID0+IHtcbiAgICAgIGxldCBbZmlyc3RFbnRyeV0gPSBfcmVmO1xuICAgICAgaWYgKGZpcnN0RW50cnkgJiYgZmlyc3RFbnRyeS50YXJnZXQgPT09IHJlZmVyZW5jZUVsICYmIHJlc2l6ZU9ic2VydmVyKSB7XG4gICAgICAgIC8vIFByZXZlbnQgdXBkYXRlIGxvb3BzIHdoZW4gdXNpbmcgdGhlIGBzaXplYCBtaWRkbGV3YXJlLlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmxvYXRpbmctdWkvZmxvYXRpbmctdWkvaXNzdWVzLzE3NDBcbiAgICAgICAgcmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKGZsb2F0aW5nKTtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVvYnNlcnZlRnJhbWUpO1xuICAgICAgICByZW9ic2VydmVGcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgdmFyIF9yZXNpemVPYnNlcnZlcjtcbiAgICAgICAgICAoX3Jlc2l6ZU9ic2VydmVyID0gcmVzaXplT2JzZXJ2ZXIpID09IG51bGwgfHwgX3Jlc2l6ZU9ic2VydmVyLm9ic2VydmUoZmxvYXRpbmcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuICAgIGlmIChyZWZlcmVuY2VFbCAmJiAhYW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUocmVmZXJlbmNlRWwpO1xuICAgIH1cbiAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGZsb2F0aW5nKTtcbiAgfVxuICBsZXQgZnJhbWVJZDtcbiAgbGV0IHByZXZSZWZSZWN0ID0gYW5pbWF0aW9uRnJhbWUgPyBnZXRCb3VuZGluZ0NsaWVudFJlY3QocmVmZXJlbmNlKSA6IG51bGw7XG4gIGlmIChhbmltYXRpb25GcmFtZSkge1xuICAgIGZyYW1lTG9vcCgpO1xuICB9XG4gIGZ1bmN0aW9uIGZyYW1lTG9vcCgpIHtcbiAgICBjb25zdCBuZXh0UmVmUmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChyZWZlcmVuY2UpO1xuICAgIGlmIChwcmV2UmVmUmVjdCAmJiAhcmVjdHNBcmVFcXVhbChwcmV2UmVmUmVjdCwgbmV4dFJlZlJlY3QpKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9XG4gICAgcHJldlJlZlJlY3QgPSBuZXh0UmVmUmVjdDtcbiAgICBmcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lTG9vcCk7XG4gIH1cbiAgdXBkYXRlKCk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgdmFyIF9yZXNpemVPYnNlcnZlcjI7XG4gICAgYW5jZXN0b3JzLmZvckVhY2goYW5jZXN0b3IgPT4ge1xuICAgICAgYW5jZXN0b3JTY3JvbGwgJiYgYW5jZXN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlKTtcbiAgICAgIGFuY2VzdG9yUmVzaXplICYmIGFuY2VzdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZSk7XG4gICAgfSk7XG4gICAgY2xlYW51cElvID09IG51bGwgfHwgY2xlYW51cElvKCk7XG4gICAgKF9yZXNpemVPYnNlcnZlcjIgPSByZXNpemVPYnNlcnZlcikgPT0gbnVsbCB8fCBfcmVzaXplT2JzZXJ2ZXIyLmRpc2Nvbm5lY3QoKTtcbiAgICByZXNpemVPYnNlcnZlciA9IG51bGw7XG4gICAgaWYgKGFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZUlkKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgd2l0aCBhbiBvYmplY3Qgb2Ygb3ZlcmZsb3cgc2lkZSBvZmZzZXRzIHRoYXQgZGV0ZXJtaW5lIGhvdyBtdWNoIHRoZVxuICogZWxlbWVudCBpcyBvdmVyZmxvd2luZyBhIGdpdmVuIGNsaXBwaW5nIGJvdW5kYXJ5IG9uIGVhY2ggc2lkZS5cbiAqIC0gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgYm91bmRhcnkgYnkgdGhhdCBudW1iZXIgb2YgcGl4ZWxzXG4gKiAtIG5lZ2F0aXZlID0gaG93IG1hbnkgcGl4ZWxzIGxlZnQgYmVmb3JlIGl0IHdpbGwgb3ZlcmZsb3dcbiAqIC0gMCA9IGxpZXMgZmx1c2ggd2l0aCB0aGUgYm91bmRhcnlcbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9kZXRlY3RPdmVyZmxvd1xuICovXG5jb25zdCBkZXRlY3RPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93JDE7XG5cbi8qKlxuICogTW9kaWZpZXMgdGhlIHBsYWNlbWVudCBieSB0cmFuc2xhdGluZyB0aGUgZmxvYXRpbmcgZWxlbWVudCBhbG9uZyB0aGVcbiAqIHNwZWNpZmllZCBheGVzLlxuICogQSBudW1iZXIgKHNob3J0aGFuZCBmb3IgYG1haW5BeGlzYCBvciBkaXN0YW5jZSksIG9yIGFuIGF4ZXMgY29uZmlndXJhdGlvblxuICogb2JqZWN0IG1heSBiZSBwYXNzZWQuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3Mvb2Zmc2V0XG4gKi9cbmNvbnN0IG9mZnNldCA9IG9mZnNldCQxO1xuXG4vKipcbiAqIE9wdGltaXplcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBieSBjaG9vc2luZyB0aGUgcGxhY2VtZW50XG4gKiB0aGF0IGhhcyB0aGUgbW9zdCBzcGFjZSBhdmFpbGFibGUgYXV0b21hdGljYWxseSwgd2l0aG91dCBuZWVkaW5nIHRvIHNwZWNpZnkgYVxuICogcHJlZmVycmVkIHBsYWNlbWVudC4gQWx0ZXJuYXRpdmUgdG8gYGZsaXBgLlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2F1dG9QbGFjZW1lbnRcbiAqL1xuY29uc3QgYXV0b1BsYWNlbWVudCA9IGF1dG9QbGFjZW1lbnQkMTtcblxuLyoqXG4gKiBPcHRpbWl6ZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGZsb2F0aW5nIGVsZW1lbnQgYnkgc2hpZnRpbmcgaXQgaW4gb3JkZXIgdG9cbiAqIGtlZXAgaXQgaW4gdmlldyB3aGVuIGl0IHdpbGwgb3ZlcmZsb3cgdGhlIGNsaXBwaW5nIGJvdW5kYXJ5LlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL3NoaWZ0XG4gKi9cbmNvbnN0IHNoaWZ0ID0gc2hpZnQkMTtcblxuLyoqXG4gKiBPcHRpbWl6ZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGZsb2F0aW5nIGVsZW1lbnQgYnkgZmxpcHBpbmcgdGhlIGBwbGFjZW1lbnRgXG4gKiBpbiBvcmRlciB0byBrZWVwIGl0IGluIHZpZXcgd2hlbiB0aGUgcHJlZmVycmVkIHBsYWNlbWVudChzKSB3aWxsIG92ZXJmbG93IHRoZVxuICogY2xpcHBpbmcgYm91bmRhcnkuIEFsdGVybmF0aXZlIHRvIGBhdXRvUGxhY2VtZW50YC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9mbGlwXG4gKi9cbmNvbnN0IGZsaXAgPSBmbGlwJDE7XG5cbi8qKlxuICogUHJvdmlkZXMgZGF0YSB0aGF0IGFsbG93cyB5b3UgdG8gY2hhbmdlIHRoZSBzaXplIG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IOKAlFxuICogZm9yIGluc3RhbmNlLCBwcmV2ZW50IGl0IGZyb20gb3ZlcmZsb3dpbmcgdGhlIGNsaXBwaW5nIGJvdW5kYXJ5IG9yIG1hdGNoIHRoZVxuICogd2lkdGggb2YgdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL3NpemVcbiAqL1xuY29uc3Qgc2l6ZSA9IHNpemUkMTtcblxuLyoqXG4gKiBQcm92aWRlcyBkYXRhIHRvIGhpZGUgdGhlIGZsb2F0aW5nIGVsZW1lbnQgaW4gYXBwbGljYWJsZSBzaXR1YXRpb25zLCBzdWNoIGFzXG4gKiB3aGVuIGl0IGlzIG5vdCBpbiB0aGUgc2FtZSBjbGlwcGluZyBjb250ZXh0IGFzIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9oaWRlXG4gKi9cbmNvbnN0IGhpZGUgPSBoaWRlJDE7XG5cbi8qKlxuICogUHJvdmlkZXMgZGF0YSB0byBwb3NpdGlvbiBhbiBpbm5lciBlbGVtZW50IG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IHNvIHRoYXQgaXRcbiAqIGFwcGVhcnMgY2VudGVyZWQgdG8gdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2Fycm93XG4gKi9cbmNvbnN0IGFycm93ID0gYXJyb3ckMTtcblxuLyoqXG4gKiBQcm92aWRlcyBpbXByb3ZlZCBwb3NpdGlvbmluZyBmb3IgaW5saW5lIHJlZmVyZW5jZSBlbGVtZW50cyB0aGF0IGNhbiBzcGFuXG4gKiBvdmVyIG11bHRpcGxlIGxpbmVzLCBzdWNoIGFzIGh5cGVybGlua3Mgb3IgcmFuZ2Ugc2VsZWN0aW9ucy5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9pbmxpbmVcbiAqL1xuY29uc3QgaW5saW5lID0gaW5saW5lJDE7XG5cbi8qKlxuICogQnVpbHQtaW4gYGxpbWl0ZXJgIHRoYXQgd2lsbCBzdG9wIGBzaGlmdCgpYCBhdCBhIGNlcnRhaW4gcG9pbnQuXG4gKi9cbmNvbnN0IGxpbWl0U2hpZnQgPSBsaW1pdFNoaWZ0JDE7XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGB4YCBhbmQgYHlgIGNvb3JkaW5hdGVzIHRoYXQgd2lsbCBwbGFjZSB0aGUgZmxvYXRpbmcgZWxlbWVudFxuICogbmV4dCB0byBhIGdpdmVuIHJlZmVyZW5jZSBlbGVtZW50LlxuICovXG5jb25zdCBjb21wdXRlUG9zaXRpb24gPSAocmVmZXJlbmNlLCBmbG9hdGluZywgb3B0aW9ucykgPT4ge1xuICAvLyBUaGlzIGNhY2hlcyB0aGUgZXhwZW5zaXZlIGBnZXRDbGlwcGluZ0VsZW1lbnRBbmNlc3RvcnNgIGZ1bmN0aW9uIHNvIHRoYXRcbiAgLy8gbXVsdGlwbGUgbGlmZWN5Y2xlIHJlc2V0cyByZS11c2UgdGhlIHNhbWUgcmVzdWx0LiBJdCBvbmx5IGxpdmVzIGZvciBhXG4gIC8vIHNpbmdsZSBjYWxsLiBJZiBvdGhlciBmdW5jdGlvbnMgYmVjb21lIGV4cGVuc2l2ZSwgd2UgY2FuIGFkZCB0aGVtIGFzIHdlbGwuXG4gIGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xuICBjb25zdCBtZXJnZWRPcHRpb25zID0ge1xuICAgIHBsYXRmb3JtLFxuICAgIC4uLm9wdGlvbnNcbiAgfTtcbiAgY29uc3QgcGxhdGZvcm1XaXRoQ2FjaGUgPSB7XG4gICAgLi4ubWVyZ2VkT3B0aW9ucy5wbGF0Zm9ybSxcbiAgICBfYzogY2FjaGVcbiAgfTtcbiAgcmV0dXJuIGNvbXB1dGVQb3NpdGlvbiQxKHJlZmVyZW5jZSwgZmxvYXRpbmcsIHtcbiAgICAuLi5tZXJnZWRPcHRpb25zLFxuICAgIHBsYXRmb3JtOiBwbGF0Zm9ybVdpdGhDYWNoZVxuICB9KTtcbn07XG5cbmV4cG9ydCB7IGFycm93LCBhdXRvUGxhY2VtZW50LCBhdXRvVXBkYXRlLCBjb21wdXRlUG9zaXRpb24sIGRldGVjdE92ZXJmbG93LCBmbGlwLCBoaWRlLCBpbmxpbmUsIGxpbWl0U2hpZnQsIG9mZnNldCwgcGxhdGZvcm0sIHNoaWZ0LCBzaXplIH07XG4iLCJpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBpbmRleCA9IHVzZUxheW91dEVmZmVjdCA7XG5cbmV4cG9ydCB7IGluZGV4IGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDInO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMsIGNzcyBhcyBjc3MkMiB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5JztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF90eXBlb2YgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mJztcbmltcG9ydCBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZUNhbGxiYWNrLCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGF1dG9VcGRhdGUgfSBmcm9tICdAZmxvYXRpbmctdWkvZG9tJztcbmltcG9ydCB1c2VMYXlvdXRFZmZlY3QgZnJvbSAndXNlLWlzb21vcnBoaWMtbGF5b3V0LWVmZmVjdCc7XG5cbnZhciBfZXhjbHVkZWQkNCA9IFtcImNsYXNzTmFtZVwiLCBcImNsZWFyVmFsdWVcIiwgXCJjeFwiLCBcImdldFN0eWxlc1wiLCBcImdldENsYXNzTmFtZXNcIiwgXCJnZXRWYWx1ZVwiLCBcImhhc1ZhbHVlXCIsIFwiaXNNdWx0aVwiLCBcImlzUnRsXCIsIFwib3B0aW9uc1wiLCBcInNlbGVjdE9wdGlvblwiLCBcInNlbGVjdFByb3BzXCIsIFwic2V0VmFsdWVcIiwgXCJ0aGVtZVwiXTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTk8gT1Bcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDbGFzcyBOYW1lIFByZWZpeGVyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGNvbXBvbmVudCBzdGF0ZSBmb3Igc3R5bGluZyB3aXRoIGNsYXNzIG5hbWVzLlxuXG4gRXhwZWN0cyBhbiBhcnJheSBvZiBzdHJpbmdzIE9SIGEgc3RyaW5nL29iamVjdCBwYWlyOlxuIC0gY2xhc3NOYW1lKFsnY29tcCcsICdjb21wLWFyZycsICdjb21wLWFyZy0yJ10pXG4gICBAcmV0dXJucyAncmVhY3Qtc2VsZWN0X19jb21wIHJlYWN0LXNlbGVjdF9fY29tcC1hcmcgcmVhY3Qtc2VsZWN0X19jb21wLWFyZy0yJ1xuIC0gY2xhc3NOYW1lKCdjb21wJywgeyBzb21lOiB0cnVlLCBzdGF0ZTogZmFsc2UgfSlcbiAgIEByZXR1cm5zICdyZWFjdC1zZWxlY3RfX2NvbXAgcmVhY3Qtc2VsZWN0X19jb21wLS1zb21lJ1xuKi9cbmZ1bmN0aW9uIGFwcGx5UHJlZml4VG9OYW1lKHByZWZpeCwgbmFtZSkge1xuICBpZiAoIW5hbWUpIHtcbiAgICByZXR1cm4gcHJlZml4O1xuICB9IGVsc2UgaWYgKG5hbWVbMF0gPT09ICctJykge1xuICAgIHJldHVybiBwcmVmaXggKyBuYW1lO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwcmVmaXggKyAnX18nICsgbmFtZTtcbiAgfVxufVxuZnVuY3Rpb24gY2xhc3NOYW1lcyhwcmVmaXgsIHN0YXRlKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBjbGFzc05hbWVMaXN0ID0gbmV3IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBjbGFzc05hbWVMaXN0W19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuICB2YXIgYXJyID0gW10uY29uY2F0KGNsYXNzTmFtZUxpc3QpO1xuICBpZiAoc3RhdGUgJiYgcHJlZml4KSB7XG4gICAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzdGF0ZVtrZXldKSB7XG4gICAgICAgIGFyci5wdXNoKFwiXCIuY29uY2F0KGFwcGx5UHJlZml4VG9OYW1lKHByZWZpeCwga2V5KSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpO1xuICB9KS5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gU3RyaW5nKGkpLnRyaW0oKTtcbiAgfSkuam9pbignICcpO1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDbGVhbiBWYWx1ZVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBjbGVhblZhbHVlID0gZnVuY3Rpb24gY2xlYW5WYWx1ZSh2YWx1ZSkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZS5maWx0ZXIoQm9vbGVhbik7XG4gIGlmIChfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHJldHVybiBbdmFsdWVdO1xuICByZXR1cm4gW107XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENsZWFuIENvbW1vbiBQcm9wc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBjbGVhbkNvbW1vblByb3BzID0gZnVuY3Rpb24gY2xlYW5Db21tb25Qcm9wcyhwcm9wcykge1xuICAvL2NsYXNzTmFtZVxuICBwcm9wcy5jbGFzc05hbWU7XG4gICAgcHJvcHMuY2xlYXJWYWx1ZTtcbiAgICBwcm9wcy5jeDtcbiAgICBwcm9wcy5nZXRTdHlsZXM7XG4gICAgcHJvcHMuZ2V0Q2xhc3NOYW1lcztcbiAgICBwcm9wcy5nZXRWYWx1ZTtcbiAgICBwcm9wcy5oYXNWYWx1ZTtcbiAgICBwcm9wcy5pc011bHRpO1xuICAgIHByb3BzLmlzUnRsO1xuICAgIHByb3BzLm9wdGlvbnM7XG4gICAgcHJvcHMuc2VsZWN0T3B0aW9uO1xuICAgIHByb3BzLnNlbGVjdFByb3BzO1xuICAgIHByb3BzLnNldFZhbHVlO1xuICAgIHByb3BzLnRoZW1lO1xuICAgIHZhciBpbm5lclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBfZXhjbHVkZWQkNCk7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBpbm5lclByb3BzKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gR2V0IFN0eWxlIFByb3BzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGdldFN0eWxlUHJvcHMgPSBmdW5jdGlvbiBnZXRTdHlsZVByb3BzKHByb3BzLCBuYW1lLCBjbGFzc05hbWVzU3RhdGUpIHtcbiAgdmFyIGN4ID0gcHJvcHMuY3gsXG4gICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgIGdldENsYXNzTmFtZXMgPSBwcm9wcy5nZXRDbGFzc05hbWVzLFxuICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcbiAgcmV0dXJuIHtcbiAgICBjc3M6IGdldFN0eWxlcyhuYW1lLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeChjbGFzc05hbWVzU3RhdGUgIT09IG51bGwgJiYgY2xhc3NOYW1lc1N0YXRlICE9PSB2b2lkIDAgPyBjbGFzc05hbWVzU3RhdGUgOiB7fSwgZ2V0Q2xhc3NOYW1lcyhuYW1lLCBwcm9wcyksIGNsYXNzTmFtZSlcbiAgfTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSGFuZGxlIElucHV0IENoYW5nZVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGlucHV0VmFsdWUsIGFjdGlvbk1ldGEsIG9uSW5wdXRDaGFuZ2UpIHtcbiAgaWYgKG9uSW5wdXRDaGFuZ2UpIHtcbiAgICB2YXIgX25ld1ZhbHVlID0gb25JbnB1dENoYW5nZShpbnB1dFZhbHVlLCBhY3Rpb25NZXRhKTtcbiAgICBpZiAodHlwZW9mIF9uZXdWYWx1ZSA9PT0gJ3N0cmluZycpIHJldHVybiBfbmV3VmFsdWU7XG4gIH1cbiAgcmV0dXJuIGlucHV0VmFsdWU7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2Nyb2xsIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBpc0RvY3VtZW50RWxlbWVudChlbCkge1xuICByZXR1cm4gW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keSwgd2luZG93XS5pbmRleE9mKGVsKSA+IC0xO1xufVxuXG4vLyBOb3JtYWxpemVkIFNjcm9sbCBUb3Bcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBub3JtYWxpemVkSGVpZ2h0KGVsKSB7XG4gIGlmIChpc0RvY3VtZW50RWxlbWVudChlbCkpIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0O1xuICB9XG4gIHJldHVybiBlbC5jbGllbnRIZWlnaHQ7XG59XG5cbi8vIE5vcm1hbGl6ZWQgc2Nyb2xsVG8gJiBzY3JvbGxUb3Bcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxUb3AoZWwpIHtcbiAgaWYgKGlzRG9jdW1lbnRFbGVtZW50KGVsKSkge1xuICAgIHJldHVybiB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIH1cbiAgcmV0dXJuIGVsLnNjcm9sbFRvcDtcbn1cbmZ1bmN0aW9uIHNjcm9sbFRvKGVsLCB0b3ApIHtcbiAgLy8gd2l0aCBhIHNjcm9sbCBkaXN0YW5jZSwgd2UgcGVyZm9ybSBzY3JvbGwgb24gdGhlIGVsZW1lbnRcbiAgaWYgKGlzRG9jdW1lbnRFbGVtZW50KGVsKSkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCB0b3ApO1xuICAgIHJldHVybjtcbiAgfVxuICBlbC5zY3JvbGxUb3AgPSB0b3A7XG59XG5cbi8vIEdldCBTY3JvbGwgUGFyZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgdmFyIGV4Y2x1ZGVTdGF0aWNQYXJlbnQgPSBzdHlsZS5wb3NpdGlvbiA9PT0gJ2Fic29sdXRlJztcbiAgdmFyIG92ZXJmbG93UnggPSAvKGF1dG98c2Nyb2xsKS87XG4gIGlmIChzdHlsZS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgZm9yICh2YXIgcGFyZW50ID0gZWxlbWVudDsgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7KSB7XG4gICAgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHBhcmVudCk7XG4gICAgaWYgKGV4Y2x1ZGVTdGF0aWNQYXJlbnQgJiYgc3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKG92ZXJmbG93UngudGVzdChzdHlsZS5vdmVyZmxvdyArIHN0eWxlLm92ZXJmbG93WSArIHN0eWxlLm92ZXJmbG93WCkpIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG59XG5cbi8vIEFuaW1hdGVkIFNjcm9sbCBUb1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICBAcGFyYW0gdDogdGltZSAoZWxhcHNlZClcbiAgQHBhcmFtIGI6IGluaXRpYWwgdmFsdWVcbiAgQHBhcmFtIGM6IGFtb3VudCBvZiBjaGFuZ2VcbiAgQHBhcmFtIGQ6IGR1cmF0aW9uXG4qL1xuZnVuY3Rpb24gZWFzZU91dEN1YmljKHQsIGIsIGMsIGQpIHtcbiAgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKyAxKSArIGI7XG59XG5mdW5jdGlvbiBhbmltYXRlZFNjcm9sbFRvKGVsZW1lbnQsIHRvKSB7XG4gIHZhciBkdXJhdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMjAwO1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IG5vb3A7XG4gIHZhciBzdGFydCA9IGdldFNjcm9sbFRvcChlbGVtZW50KTtcbiAgdmFyIGNoYW5nZSA9IHRvIC0gc3RhcnQ7XG4gIHZhciBpbmNyZW1lbnQgPSAxMDtcbiAgdmFyIGN1cnJlbnRUaW1lID0gMDtcbiAgZnVuY3Rpb24gYW5pbWF0ZVNjcm9sbCgpIHtcbiAgICBjdXJyZW50VGltZSArPSBpbmNyZW1lbnQ7XG4gICAgdmFyIHZhbCA9IGVhc2VPdXRDdWJpYyhjdXJyZW50VGltZSwgc3RhcnQsIGNoYW5nZSwgZHVyYXRpb24pO1xuICAgIHNjcm9sbFRvKGVsZW1lbnQsIHZhbCk7XG4gICAgaWYgKGN1cnJlbnRUaW1lIDwgZHVyYXRpb24pIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZVNjcm9sbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICBhbmltYXRlU2Nyb2xsKCk7XG59XG5cbi8vIFNjcm9sbCBJbnRvIFZpZXdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBzY3JvbGxJbnRvVmlldyhtZW51RWwsIGZvY3VzZWRFbCkge1xuICB2YXIgbWVudVJlY3QgPSBtZW51RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBmb2N1c2VkUmVjdCA9IGZvY3VzZWRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIG92ZXJTY3JvbGwgPSBmb2N1c2VkRWwub2Zmc2V0SGVpZ2h0IC8gMztcbiAgaWYgKGZvY3VzZWRSZWN0LmJvdHRvbSArIG92ZXJTY3JvbGwgPiBtZW51UmVjdC5ib3R0b20pIHtcbiAgICBzY3JvbGxUbyhtZW51RWwsIE1hdGgubWluKGZvY3VzZWRFbC5vZmZzZXRUb3AgKyBmb2N1c2VkRWwuY2xpZW50SGVpZ2h0IC0gbWVudUVsLm9mZnNldEhlaWdodCArIG92ZXJTY3JvbGwsIG1lbnVFbC5zY3JvbGxIZWlnaHQpKTtcbiAgfSBlbHNlIGlmIChmb2N1c2VkUmVjdC50b3AgLSBvdmVyU2Nyb2xsIDwgbWVudVJlY3QudG9wKSB7XG4gICAgc2Nyb2xsVG8obWVudUVsLCBNYXRoLm1heChmb2N1c2VkRWwub2Zmc2V0VG9wIC0gb3ZlclNjcm9sbCwgMCkpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gR2V0IGJvdW5kaW5nIGNsaWVudCBvYmplY3Rcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBjYW5ub3QgZ2V0IGtleXMgdXNpbmcgYXJyYXkgbm90YXRpb24gd2l0aCBET01SZWN0XG5mdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudE9iaihlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICBib3R0b206IHJlY3QuYm90dG9tLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHJpZ2h0OiByZWN0LnJpZ2h0LFxuICAgIHRvcDogcmVjdC50b3AsXG4gICAgd2lkdGg6IHJlY3Qud2lkdGhcbiAgfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUb3VjaCBDYXBhYmlsaXR5IERldGVjdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gaXNUb3VjaENhcGFibGUoKSB7XG4gIHRyeSB7XG4gICAgZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ1RvdWNoRXZlbnQnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1vYmlsZSBEZXZpY2UgRGV0ZWN0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBpc01vYmlsZURldmljZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUGFzc2l2ZSBFdmVudCBEZXRlY3RvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yYWZncmFwaC9kZXRlY3QtaXQvYmxvYi9tYWluL3NyYy9pbmRleC50cyNMMTktTDM2XG52YXIgcGFzc2l2ZU9wdGlvbkFjY2Vzc2VkID0gZmFsc2U7XG52YXIgb3B0aW9ucyA9IHtcbiAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgcmV0dXJuIHBhc3NpdmVPcHRpb25BY2Nlc3NlZCA9IHRydWU7XG4gIH1cbn07XG4vLyBjaGVjayBmb3IgU1NSXG52YXIgdyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge307XG5pZiAody5hZGRFdmVudExpc3RlbmVyICYmIHcucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICB3LmFkZEV2ZW50TGlzdGVuZXIoJ3AnLCBub29wLCBvcHRpb25zKTtcbiAgdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwJywgbm9vcCwgZmFsc2UpO1xufVxudmFyIHN1cHBvcnRzUGFzc2l2ZUV2ZW50cyA9IHBhc3NpdmVPcHRpb25BY2Nlc3NlZDtcbmZ1bmN0aW9uIG5vdE51bGxpc2goaXRlbSkge1xuICByZXR1cm4gaXRlbSAhPSBudWxsO1xufVxuZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJnKTtcbn1cbmZ1bmN0aW9uIHZhbHVlVGVybmFyeShpc011bHRpLCBtdWx0aVZhbHVlLCBzaW5nbGVWYWx1ZSkge1xuICByZXR1cm4gaXNNdWx0aSA/IG11bHRpVmFsdWUgOiBzaW5nbGVWYWx1ZTtcbn1cbmZ1bmN0aW9uIHNpbmdsZVZhbHVlQXNWYWx1ZShzaW5nbGVWYWx1ZSkge1xuICByZXR1cm4gc2luZ2xlVmFsdWU7XG59XG5mdW5jdGlvbiBtdWx0aVZhbHVlQXNWYWx1ZShtdWx0aVZhbHVlKSB7XG4gIHJldHVybiBtdWx0aVZhbHVlO1xufVxudmFyIHJlbW92ZVByb3BzID0gZnVuY3Rpb24gcmVtb3ZlUHJvcHMocHJvcHNPYmopIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBwcm9wZXJ0aWVzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBwcm9wZXJ0aWVzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG4gIHZhciBwcm9wc01hcCA9IE9iamVjdC5lbnRyaWVzKHByb3BzT2JqKS5maWx0ZXIoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAxKSxcbiAgICAgIGtleSA9IF9yZWYyWzBdO1xuICAgIHJldHVybiAhcHJvcGVydGllcy5pbmNsdWRlcyhrZXkpO1xuICB9KTtcbiAgcmV0dXJuIHByb3BzTWFwLnJlZHVjZShmdW5jdGlvbiAobmV3UHJvcHMsIF9yZWYzKSB7XG4gICAgdmFyIF9yZWY0ID0gX3NsaWNlZFRvQXJyYXkoX3JlZjMsIDIpLFxuICAgICAga2V5ID0gX3JlZjRbMF0sXG4gICAgICB2YWwgPSBfcmVmNFsxXTtcbiAgICBuZXdQcm9wc1trZXldID0gdmFsO1xuICAgIHJldHVybiBuZXdQcm9wcztcbiAgfSwge30pO1xufTtcblxudmFyIF9leGNsdWRlZCQzID0gW1wiY2hpbGRyZW5cIiwgXCJpbm5lclByb3BzXCJdLFxuICBfZXhjbHVkZWQyJDEgPSBbXCJjaGlsZHJlblwiLCBcImlubmVyUHJvcHNcIl07XG5mdW5jdGlvbiBnZXRNZW51UGxhY2VtZW50KF9yZWYpIHtcbiAgdmFyIHByZWZlcnJlZE1heEhlaWdodCA9IF9yZWYubWF4SGVpZ2h0LFxuICAgIG1lbnVFbCA9IF9yZWYubWVudUVsLFxuICAgIG1pbkhlaWdodCA9IF9yZWYubWluSGVpZ2h0LFxuICAgIHByZWZlcnJlZFBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50LFxuICAgIHNob3VsZFNjcm9sbCA9IF9yZWYuc2hvdWxkU2Nyb2xsLFxuICAgIGlzRml4ZWRQb3NpdGlvbiA9IF9yZWYuaXNGaXhlZFBvc2l0aW9uLFxuICAgIGNvbnRyb2xIZWlnaHQgPSBfcmVmLmNvbnRyb2xIZWlnaHQ7XG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQobWVudUVsKTtcbiAgdmFyIGRlZmF1bHRTdGF0ZSA9IHtcbiAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgIG1heEhlaWdodDogcHJlZmVycmVkTWF4SGVpZ2h0XG4gIH07XG5cbiAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmcsIHJldHVybiBkZWZhdWx0IHN0YXRlXG4gIGlmICghbWVudUVsIHx8ICFtZW51RWwub2Zmc2V0UGFyZW50KSByZXR1cm4gZGVmYXVsdFN0YXRlO1xuXG4gIC8vIHdlIGNhbid0IHRydXN0IGBzY3JvbGxQYXJlbnQuc2Nyb2xsSGVpZ2h0YCAtLT4gaXQgbWF5IGluY3JlYXNlIHdoZW5cbiAgLy8gdGhlIG1lbnUgaXMgcmVuZGVyZWRcbiAgdmFyIF9zY3JvbGxQYXJlbnQkZ2V0Qm91biA9IHNjcm9sbFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICBzY3JvbGxIZWlnaHQgPSBfc2Nyb2xsUGFyZW50JGdldEJvdW4uaGVpZ2h0O1xuICB2YXIgX21lbnVFbCRnZXRCb3VuZGluZ0NsID0gbWVudUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIG1lbnVCb3R0b20gPSBfbWVudUVsJGdldEJvdW5kaW5nQ2wuYm90dG9tLFxuICAgIG1lbnVIZWlnaHQgPSBfbWVudUVsJGdldEJvdW5kaW5nQ2wuaGVpZ2h0LFxuICAgIG1lbnVUb3AgPSBfbWVudUVsJGdldEJvdW5kaW5nQ2wudG9wO1xuICB2YXIgX21lbnVFbCRvZmZzZXRQYXJlbnQkID0gbWVudUVsLm9mZnNldFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICBjb250YWluZXJUb3AgPSBfbWVudUVsJG9mZnNldFBhcmVudCQudG9wO1xuICB2YXIgdmlld0hlaWdodCA9IGlzRml4ZWRQb3NpdGlvbiA/IHdpbmRvdy5pbm5lckhlaWdodCA6IG5vcm1hbGl6ZWRIZWlnaHQoc2Nyb2xsUGFyZW50KTtcbiAgdmFyIHNjcm9sbFRvcCA9IGdldFNjcm9sbFRvcChzY3JvbGxQYXJlbnQpO1xuICB2YXIgbWFyZ2luQm90dG9tID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShtZW51RWwpLm1hcmdpbkJvdHRvbSwgMTApO1xuICB2YXIgbWFyZ2luVG9wID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShtZW51RWwpLm1hcmdpblRvcCwgMTApO1xuICB2YXIgdmlld1NwYWNlQWJvdmUgPSBjb250YWluZXJUb3AgLSBtYXJnaW5Ub3A7XG4gIHZhciB2aWV3U3BhY2VCZWxvdyA9IHZpZXdIZWlnaHQgLSBtZW51VG9wO1xuICB2YXIgc2Nyb2xsU3BhY2VBYm92ZSA9IHZpZXdTcGFjZUFib3ZlICsgc2Nyb2xsVG9wO1xuICB2YXIgc2Nyb2xsU3BhY2VCZWxvdyA9IHNjcm9sbEhlaWdodCAtIHNjcm9sbFRvcCAtIG1lbnVUb3A7XG4gIHZhciBzY3JvbGxEb3duID0gbWVudUJvdHRvbSAtIHZpZXdIZWlnaHQgKyBzY3JvbGxUb3AgKyBtYXJnaW5Cb3R0b207XG4gIHZhciBzY3JvbGxVcCA9IHNjcm9sbFRvcCArIG1lbnVUb3AgLSBtYXJnaW5Ub3A7XG4gIHZhciBzY3JvbGxEdXJhdGlvbiA9IDE2MDtcbiAgc3dpdGNoIChwcmVmZXJyZWRQbGFjZW1lbnQpIHtcbiAgICBjYXNlICdhdXRvJzpcbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgLy8gMTogdGhlIG1lbnUgd2lsbCBmaXQsIGRvIG5vdGhpbmdcbiAgICAgIGlmICh2aWV3U3BhY2VCZWxvdyA+PSBtZW51SGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IHByZWZlcnJlZE1heEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyAyOiB0aGUgbWVudSB3aWxsIGZpdCwgaWYgc2Nyb2xsZWRcbiAgICAgIGlmIChzY3JvbGxTcGFjZUJlbG93ID49IG1lbnVIZWlnaHQgJiYgIWlzRml4ZWRQb3NpdGlvbikge1xuICAgICAgICBpZiAoc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgICAgYW5pbWF0ZWRTY3JvbGxUbyhzY3JvbGxQYXJlbnQsIHNjcm9sbERvd24sIHNjcm9sbER1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBwcmVmZXJyZWRNYXhIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gMzogdGhlIG1lbnUgd2lsbCBmaXQsIGlmIGNvbnN0cmFpbmVkXG4gICAgICBpZiAoIWlzRml4ZWRQb3NpdGlvbiAmJiBzY3JvbGxTcGFjZUJlbG93ID49IG1pbkhlaWdodCB8fCBpc0ZpeGVkUG9zaXRpb24gJiYgdmlld1NwYWNlQmVsb3cgPj0gbWluSGVpZ2h0KSB7XG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICBhbmltYXRlZFNjcm9sbFRvKHNjcm9sbFBhcmVudCwgc2Nyb2xsRG93biwgc2Nyb2xsRHVyYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gd2Ugd2FudCB0byBwcm92aWRlIGFzIG11Y2ggb2YgdGhlIG1lbnUgYXMgcG9zc2libGUgdG8gdGhlIHVzZXIsXG4gICAgICAgIC8vIHNvIGdpdmUgdGhlbSB3aGF0ZXZlciBpcyBhdmFpbGFibGUgYmVsb3cgcmF0aGVyIHRoYW4gdGhlIG1pbkhlaWdodC5cbiAgICAgICAgdmFyIGNvbnN0cmFpbmVkSGVpZ2h0ID0gaXNGaXhlZFBvc2l0aW9uID8gdmlld1NwYWNlQmVsb3cgLSBtYXJnaW5Cb3R0b20gOiBzY3JvbGxTcGFjZUJlbG93IC0gbWFyZ2luQm90dG9tO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBjb25zdHJhaW5lZEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyA0LiBGb3JrZWQgYmV2aW91ciB3aGVuIHRoZXJlIGlzbid0IGVub3VnaCBzcGFjZSBiZWxvd1xuXG4gICAgICAvLyBBVVRPOiBmbGlwIHRoZSBtZW51LCByZW5kZXIgYWJvdmVcbiAgICAgIGlmIChwcmVmZXJyZWRQbGFjZW1lbnQgPT09ICdhdXRvJyB8fCBpc0ZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgLy8gbWF5IG5lZWQgdG8gYmUgY29uc3RyYWluZWQgYWZ0ZXIgZmxpcHBpbmdcbiAgICAgICAgdmFyIF9jb25zdHJhaW5lZEhlaWdodCA9IHByZWZlcnJlZE1heEhlaWdodDtcbiAgICAgICAgdmFyIHNwYWNlQWJvdmUgPSBpc0ZpeGVkUG9zaXRpb24gPyB2aWV3U3BhY2VBYm92ZSA6IHNjcm9sbFNwYWNlQWJvdmU7XG4gICAgICAgIGlmIChzcGFjZUFib3ZlID49IG1pbkhlaWdodCkge1xuICAgICAgICAgIF9jb25zdHJhaW5lZEhlaWdodCA9IE1hdGgubWluKHNwYWNlQWJvdmUgLSBtYXJnaW5Cb3R0b20gLSBjb250cm9sSGVpZ2h0LCBwcmVmZXJyZWRNYXhIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IF9jb25zdHJhaW5lZEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyBCT1RUT006IGFsbG93IGJyb3dzZXIgdG8gaW5jcmVhc2Ugc2Nyb2xsYWJsZSBhcmVhIGFuZCBpbW1lZGlhdGVseSBzZXQgc2Nyb2xsXG4gICAgICBpZiAocHJlZmVycmVkUGxhY2VtZW50ID09PSAnYm90dG9tJykge1xuICAgICAgICBpZiAoc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgICAgc2Nyb2xsVG8oc2Nyb2xsUGFyZW50LCBzY3JvbGxEb3duKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBwcmVmZXJyZWRNYXhIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgICAvLyAxOiB0aGUgbWVudSB3aWxsIGZpdCwgZG8gbm90aGluZ1xuICAgICAgaWYgKHZpZXdTcGFjZUFib3ZlID49IG1lbnVIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgIG1heEhlaWdodDogcHJlZmVycmVkTWF4SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIDI6IHRoZSBtZW51IHdpbGwgZml0LCBpZiBzY3JvbGxlZFxuICAgICAgaWYgKHNjcm9sbFNwYWNlQWJvdmUgPj0gbWVudUhlaWdodCAmJiAhaXNGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICBhbmltYXRlZFNjcm9sbFRvKHNjcm9sbFBhcmVudCwgc2Nyb2xsVXAsIHNjcm9sbER1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBwcmVmZXJyZWRNYXhIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gMzogdGhlIG1lbnUgd2lsbCBmaXQsIGlmIGNvbnN0cmFpbmVkXG4gICAgICBpZiAoIWlzRml4ZWRQb3NpdGlvbiAmJiBzY3JvbGxTcGFjZUFib3ZlID49IG1pbkhlaWdodCB8fCBpc0ZpeGVkUG9zaXRpb24gJiYgdmlld1NwYWNlQWJvdmUgPj0gbWluSGVpZ2h0KSB7XG4gICAgICAgIHZhciBfY29uc3RyYWluZWRIZWlnaHQyID0gcHJlZmVycmVkTWF4SGVpZ2h0O1xuXG4gICAgICAgIC8vIHdlIHdhbnQgdG8gcHJvdmlkZSBhcyBtdWNoIG9mIHRoZSBtZW51IGFzIHBvc3NpYmxlIHRvIHRoZSB1c2VyLFxuICAgICAgICAvLyBzbyBnaXZlIHRoZW0gd2hhdGV2ZXIgaXMgYXZhaWxhYmxlIGJlbG93IHJhdGhlciB0aGFuIHRoZSBtaW5IZWlnaHQuXG4gICAgICAgIGlmICghaXNGaXhlZFBvc2l0aW9uICYmIHNjcm9sbFNwYWNlQWJvdmUgPj0gbWluSGVpZ2h0IHx8IGlzRml4ZWRQb3NpdGlvbiAmJiB2aWV3U3BhY2VBYm92ZSA+PSBtaW5IZWlnaHQpIHtcbiAgICAgICAgICBfY29uc3RyYWluZWRIZWlnaHQyID0gaXNGaXhlZFBvc2l0aW9uID8gdmlld1NwYWNlQWJvdmUgLSBtYXJnaW5Ub3AgOiBzY3JvbGxTcGFjZUFib3ZlIC0gbWFyZ2luVG9wO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICBhbmltYXRlZFNjcm9sbFRvKHNjcm9sbFBhcmVudCwgc2Nyb2xsVXAsIHNjcm9sbER1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBfY29uc3RyYWluZWRIZWlnaHQyXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIDQuIG5vdCBlbm91Z2ggc3BhY2UsIHRoZSBicm93c2VyIFdJTEwgTk9UIGluY3JlYXNlIHNjcm9sbGFibGUgYXJlYSB3aGVuXG4gICAgICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQgZWxlbWVudCByZW5kZXJlZCBhYm92ZSB0aGUgdmlld3BvcnQgKG9ubHkgYmVsb3cpLlxuICAgICAgLy8gRmxpcCB0aGUgbWVudSwgcmVuZGVyIGJlbG93XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICBtYXhIZWlnaHQ6IHByZWZlcnJlZE1heEhlaWdodFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwbGFjZW1lbnQgcHJvdmlkZWQgXFxcIlwiLmNvbmNhdChwcmVmZXJyZWRQbGFjZW1lbnQsIFwiXFxcIi5cIikpO1xuICB9XG4gIHJldHVybiBkZWZhdWx0U3RhdGU7XG59XG5cbi8vIE1lbnUgQ29tcG9uZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gYWxpZ25Ub0NvbnRyb2wocGxhY2VtZW50KSB7XG4gIHZhciBwbGFjZW1lbnRUb0NTU1Byb3AgPSB7XG4gICAgYm90dG9tOiAndG9wJyxcbiAgICB0b3A6ICdib3R0b20nXG4gIH07XG4gIHJldHVybiBwbGFjZW1lbnQgPyBwbGFjZW1lbnRUb0NTU1Byb3BbcGxhY2VtZW50XSA6ICdib3R0b20nO1xufVxudmFyIGNvZXJjZVBsYWNlbWVudCA9IGZ1bmN0aW9uIGNvZXJjZVBsYWNlbWVudChwKSB7XG4gIHJldHVybiBwID09PSAnYXV0bycgPyAnYm90dG9tJyA6IHA7XG59O1xudmFyIG1lbnVDU1MgPSBmdW5jdGlvbiBtZW51Q1NTKF9yZWYyLCB1bnN0eWxlZCkge1xuICB2YXIgX29iamVjdFNwcmVhZDI7XG4gIHZhciBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgX3JlZjIkdGhlbWUgPSBfcmVmMi50aGVtZSxcbiAgICBib3JkZXJSYWRpdXMgPSBfcmVmMiR0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgc3BhY2luZyA9IF9yZWYyJHRoZW1lLnNwYWNpbmcsXG4gICAgY29sb3JzID0gX3JlZjIkdGhlbWUuY29sb3JzO1xuICByZXR1cm4gX29iamVjdFNwcmVhZCgoX29iamVjdFNwcmVhZDIgPSB7XG4gICAgbGFiZWw6ICdtZW51J1xuICB9LCBfZGVmaW5lUHJvcGVydHkoX29iamVjdFNwcmVhZDIsIGFsaWduVG9Db250cm9sKHBsYWNlbWVudCksICcxMDAlJyksIF9kZWZpbmVQcm9wZXJ0eShfb2JqZWN0U3ByZWFkMiwgXCJwb3NpdGlvblwiLCAnYWJzb2x1dGUnKSwgX2RlZmluZVByb3BlcnR5KF9vYmplY3RTcHJlYWQyLCBcIndpZHRoXCIsICcxMDAlJyksIF9kZWZpbmVQcm9wZXJ0eShfb2JqZWN0U3ByZWFkMiwgXCJ6SW5kZXhcIiwgMSksIF9vYmplY3RTcHJlYWQyKSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5uZXV0cmFsMCxcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICBib3hTaGFkb3c6ICcwIDAgMCAxcHggaHNsYSgwLCAwJSwgMCUsIDAuMSksIDAgNHB4IDExcHggaHNsYSgwLCAwJSwgMCUsIDAuMSknLFxuICAgIG1hcmdpbkJvdHRvbTogc3BhY2luZy5tZW51R3V0dGVyLFxuICAgIG1hcmdpblRvcDogc3BhY2luZy5tZW51R3V0dGVyXG4gIH0pO1xufTtcbnZhciBQb3J0YWxQbGFjZW1lbnRDb250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQobnVsbCk7XG5cbi8vIE5PVEU6IGludGVybmFsIG9ubHlcbnZhciBNZW51UGxhY2VyID0gZnVuY3Rpb24gTWVudVBsYWNlcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICBtaW5NZW51SGVpZ2h0ID0gcHJvcHMubWluTWVudUhlaWdodCxcbiAgICBtYXhNZW51SGVpZ2h0ID0gcHJvcHMubWF4TWVudUhlaWdodCxcbiAgICBtZW51UGxhY2VtZW50ID0gcHJvcHMubWVudVBsYWNlbWVudCxcbiAgICBtZW51UG9zaXRpb24gPSBwcm9wcy5tZW51UG9zaXRpb24sXG4gICAgbWVudVNob3VsZFNjcm9sbEludG9WaWV3ID0gcHJvcHMubWVudVNob3VsZFNjcm9sbEludG9WaWV3LFxuICAgIHRoZW1lID0gcHJvcHMudGhlbWU7XG4gIHZhciBfcmVmMyA9IHVzZUNvbnRleHQoUG9ydGFsUGxhY2VtZW50Q29udGV4dCkgfHwge30sXG4gICAgc2V0UG9ydGFsUGxhY2VtZW50ID0gX3JlZjMuc2V0UG9ydGFsUGxhY2VtZW50O1xuICB2YXIgcmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUobWF4TWVudUhlaWdodCksXG4gICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgbWF4SGVpZ2h0ID0gX3VzZVN0YXRlMlswXSxcbiAgICBzZXRNYXhIZWlnaHQgPSBfdXNlU3RhdGUyWzFdO1xuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKG51bGwpLFxuICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICBwbGFjZW1lbnQgPSBfdXNlU3RhdGU0WzBdLFxuICAgIHNldFBsYWNlbWVudCA9IF91c2VTdGF0ZTRbMV07XG4gIHZhciBjb250cm9sSGVpZ2h0ID0gdGhlbWUuc3BhY2luZy5jb250cm9sSGVpZ2h0O1xuICB1c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZW51RWwgPSByZWYuY3VycmVudDtcbiAgICBpZiAoIW1lbnVFbCkgcmV0dXJuO1xuXG4gICAgLy8gRE8gTk9UIHNjcm9sbCBpZiBwb3NpdGlvbiBpcyBmaXhlZFxuICAgIHZhciBpc0ZpeGVkUG9zaXRpb24gPSBtZW51UG9zaXRpb24gPT09ICdmaXhlZCc7XG4gICAgdmFyIHNob3VsZFNjcm9sbCA9IG1lbnVTaG91bGRTY3JvbGxJbnRvVmlldyAmJiAhaXNGaXhlZFBvc2l0aW9uO1xuICAgIHZhciBzdGF0ZSA9IGdldE1lbnVQbGFjZW1lbnQoe1xuICAgICAgbWF4SGVpZ2h0OiBtYXhNZW51SGVpZ2h0LFxuICAgICAgbWVudUVsOiBtZW51RWwsXG4gICAgICBtaW5IZWlnaHQ6IG1pbk1lbnVIZWlnaHQsXG4gICAgICBwbGFjZW1lbnQ6IG1lbnVQbGFjZW1lbnQsXG4gICAgICBzaG91bGRTY3JvbGw6IHNob3VsZFNjcm9sbCxcbiAgICAgIGlzRml4ZWRQb3NpdGlvbjogaXNGaXhlZFBvc2l0aW9uLFxuICAgICAgY29udHJvbEhlaWdodDogY29udHJvbEhlaWdodFxuICAgIH0pO1xuICAgIHNldE1heEhlaWdodChzdGF0ZS5tYXhIZWlnaHQpO1xuICAgIHNldFBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICAgIHNldFBvcnRhbFBsYWNlbWVudCA9PT0gbnVsbCB8fCBzZXRQb3J0YWxQbGFjZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNldFBvcnRhbFBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB9LCBbbWF4TWVudUhlaWdodCwgbWVudVBsYWNlbWVudCwgbWVudVBvc2l0aW9uLCBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcsIG1pbk1lbnVIZWlnaHQsIHNldFBvcnRhbFBsYWNlbWVudCwgY29udHJvbEhlaWdodF0pO1xuICByZXR1cm4gY2hpbGRyZW4oe1xuICAgIHJlZjogcmVmLFxuICAgIHBsYWNlclByb3BzOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50IHx8IGNvZXJjZVBsYWNlbWVudChtZW51UGxhY2VtZW50KSxcbiAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0XG4gICAgfSlcbiAgfSk7XG59O1xudmFyIE1lbnUgPSBmdW5jdGlvbiBNZW51KHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe30sIGdldFN0eWxlUHJvcHMocHJvcHMsICdtZW51Jywge1xuICAgIG1lbnU6IHRydWVcbiAgfSksIHtcbiAgICByZWY6IGlubmVyUmVmXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xudmFyIE1lbnUkMSA9IE1lbnU7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVudSBMaXN0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIG1lbnVMaXN0Q1NTID0gZnVuY3Rpb24gbWVudUxpc3RDU1MoX3JlZjQsIHVuc3R5bGVkKSB7XG4gIHZhciBtYXhIZWlnaHQgPSBfcmVmNC5tYXhIZWlnaHQsXG4gICAgYmFzZVVuaXQgPSBfcmVmNC50aGVtZS5zcGFjaW5nLmJhc2VVbml0O1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHQsXG4gICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgLy8gcmVxdWlyZWQgZm9yIG9mZnNldFtIZWlnaHQsIFRvcF0gPiBrZXlib2FyZCBzY3JvbGxcbiAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogJ3RvdWNoJ1xuICB9LCB1bnN0eWxlZCA/IHt9IDoge1xuICAgIHBhZGRpbmdCb3R0b206IGJhc2VVbml0LFxuICAgIHBhZGRpbmdUb3A6IGJhc2VVbml0XG4gIH0pO1xufTtcbnZhciBNZW51TGlzdCA9IGZ1bmN0aW9uIE1lbnVMaXN0KHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzLFxuICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgaXNNdWx0aSA9IHByb3BzLmlzTXVsdGk7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe30sIGdldFN0eWxlUHJvcHMocHJvcHMsICdtZW51TGlzdCcsIHtcbiAgICAnbWVudS1saXN0JzogdHJ1ZSxcbiAgICAnbWVudS1saXN0LS1pcy1tdWx0aSc6IGlzTXVsdGlcbiAgfSksIHtcbiAgICByZWY6IGlubmVyUmVmXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lbnUgTm90aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBub3RpY2VDU1MgPSBmdW5jdGlvbiBub3RpY2VDU1MoX3JlZjUsIHVuc3R5bGVkKSB7XG4gIHZhciBfcmVmNSR0aGVtZSA9IF9yZWY1LnRoZW1lLFxuICAgIGJhc2VVbml0ID0gX3JlZjUkdGhlbWUuc3BhY2luZy5iYXNlVW5pdCxcbiAgICBjb2xvcnMgPSBfcmVmNSR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gIH0sIHVuc3R5bGVkID8ge30gOiB7XG4gICAgY29sb3I6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgcGFkZGluZzogXCJcIi5jb25jYXQoYmFzZVVuaXQgKiAyLCBcInB4IFwiKS5jb25jYXQoYmFzZVVuaXQgKiAzLCBcInB4XCIpXG4gIH0pO1xufTtcbnZhciBub09wdGlvbnNNZXNzYWdlQ1NTID0gbm90aWNlQ1NTO1xudmFyIGxvYWRpbmdNZXNzYWdlQ1NTID0gbm90aWNlQ1NTO1xudmFyIE5vT3B0aW9uc01lc3NhZ2UgPSBmdW5jdGlvbiBOb09wdGlvbnNNZXNzYWdlKF9yZWY2KSB7XG4gIHZhciBfcmVmNiRjaGlsZHJlbiA9IF9yZWY2LmNoaWxkcmVuLFxuICAgIGNoaWxkcmVuID0gX3JlZjYkY2hpbGRyZW4gPT09IHZvaWQgMCA/ICdObyBvcHRpb25zJyA6IF9yZWY2JGNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHMgPSBfcmVmNi5pbm5lclByb3BzLFxuICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmNiwgX2V4Y2x1ZGVkJDMpO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcmVzdFByb3BzKSwge30sIHtcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgaW5uZXJQcm9wczogaW5uZXJQcm9wc1xuICB9KSwgJ25vT3B0aW9uc01lc3NhZ2UnLCB7XG4gICAgJ21lbnUtbm90aWNlJzogdHJ1ZSxcbiAgICAnbWVudS1ub3RpY2UtLW5vLW9wdGlvbnMnOiB0cnVlXG4gIH0pLCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcbnZhciBMb2FkaW5nTWVzc2FnZSA9IGZ1bmN0aW9uIExvYWRpbmdNZXNzYWdlKF9yZWY3KSB7XG4gIHZhciBfcmVmNyRjaGlsZHJlbiA9IF9yZWY3LmNoaWxkcmVuLFxuICAgIGNoaWxkcmVuID0gX3JlZjckY2hpbGRyZW4gPT09IHZvaWQgMCA/ICdMb2FkaW5nLi4uJyA6IF9yZWY3JGNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHMgPSBfcmVmNy5pbm5lclByb3BzLFxuICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmNywgX2V4Y2x1ZGVkMiQxKTtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHJlc3RQcm9wcyksIHt9LCB7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHNcbiAgfSksICdsb2FkaW5nTWVzc2FnZScsIHtcbiAgICAnbWVudS1ub3RpY2UnOiB0cnVlLFxuICAgICdtZW51LW5vdGljZS0tbG9hZGluZyc6IHRydWVcbiAgfSksIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lbnUgUG9ydGFsXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIG1lbnVQb3J0YWxDU1MgPSBmdW5jdGlvbiBtZW51UG9ydGFsQ1NTKF9yZWY4KSB7XG4gIHZhciByZWN0ID0gX3JlZjgucmVjdCxcbiAgICBvZmZzZXQgPSBfcmVmOC5vZmZzZXQsXG4gICAgcG9zaXRpb24gPSBfcmVmOC5wb3NpdGlvbjtcbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgIHRvcDogb2Zmc2V0LFxuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIHpJbmRleDogMVxuICB9O1xufTtcbnZhciBNZW51UG9ydGFsID0gZnVuY3Rpb24gTWVudVBvcnRhbChwcm9wcykge1xuICB2YXIgYXBwZW5kVG8gPSBwcm9wcy5hcHBlbmRUbyxcbiAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGNvbnRyb2xFbGVtZW50ID0gcHJvcHMuY29udHJvbEVsZW1lbnQsXG4gICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgbWVudVBsYWNlbWVudCA9IHByb3BzLm1lbnVQbGFjZW1lbnQsXG4gICAgbWVudVBvc2l0aW9uID0gcHJvcHMubWVudVBvc2l0aW9uO1xuICB2YXIgbWVudVBvcnRhbFJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGNsZWFudXBSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBfdXNlU3RhdGU1ID0gdXNlU3RhdGUoY29lcmNlUGxhY2VtZW50KG1lbnVQbGFjZW1lbnQpKSxcbiAgICBfdXNlU3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNSwgMiksXG4gICAgcGxhY2VtZW50ID0gX3VzZVN0YXRlNlswXSxcbiAgICBzZXRQb3J0YWxQbGFjZW1lbnQgPSBfdXNlU3RhdGU2WzFdO1xuICB2YXIgcG9ydGFsUGxhY2VtZW50Q29udGV4dCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZXRQb3J0YWxQbGFjZW1lbnQ6IHNldFBvcnRhbFBsYWNlbWVudFxuICAgIH07XG4gIH0sIFtdKTtcbiAgdmFyIF91c2VTdGF0ZTcgPSB1c2VTdGF0ZShudWxsKSxcbiAgICBfdXNlU3RhdGU4ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNywgMiksXG4gICAgY29tcHV0ZWRQb3NpdGlvbiA9IF91c2VTdGF0ZThbMF0sXG4gICAgc2V0Q29tcHV0ZWRQb3NpdGlvbiA9IF91c2VTdGF0ZThbMV07XG4gIHZhciB1cGRhdGVDb21wdXRlZFBvc2l0aW9uID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICghY29udHJvbEVsZW1lbnQpIHJldHVybjtcbiAgICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50T2JqKGNvbnRyb2xFbGVtZW50KTtcbiAgICB2YXIgc2Nyb2xsRGlzdGFuY2UgPSBtZW51UG9zaXRpb24gPT09ICdmaXhlZCcgPyAwIDogd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIHZhciBvZmZzZXQgPSByZWN0W3BsYWNlbWVudF0gKyBzY3JvbGxEaXN0YW5jZTtcbiAgICBpZiAob2Zmc2V0ICE9PSAoY29tcHV0ZWRQb3NpdGlvbiA9PT0gbnVsbCB8fCBjb21wdXRlZFBvc2l0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wdXRlZFBvc2l0aW9uLm9mZnNldCkgfHwgcmVjdC5sZWZ0ICE9PSAoY29tcHV0ZWRQb3NpdGlvbiA9PT0gbnVsbCB8fCBjb21wdXRlZFBvc2l0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wdXRlZFBvc2l0aW9uLnJlY3QubGVmdCkgfHwgcmVjdC53aWR0aCAhPT0gKGNvbXB1dGVkUG9zaXRpb24gPT09IG51bGwgfHwgY29tcHV0ZWRQb3NpdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29tcHV0ZWRQb3NpdGlvbi5yZWN0LndpZHRoKSkge1xuICAgICAgc2V0Q29tcHV0ZWRQb3NpdGlvbih7XG4gICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICByZWN0OiByZWN0XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtjb250cm9sRWxlbWVudCwgbWVudVBvc2l0aW9uLCBwbGFjZW1lbnQsIGNvbXB1dGVkUG9zaXRpb24gPT09IG51bGwgfHwgY29tcHV0ZWRQb3NpdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29tcHV0ZWRQb3NpdGlvbi5vZmZzZXQsIGNvbXB1dGVkUG9zaXRpb24gPT09IG51bGwgfHwgY29tcHV0ZWRQb3NpdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29tcHV0ZWRQb3NpdGlvbi5yZWN0LmxlZnQsIGNvbXB1dGVkUG9zaXRpb24gPT09IG51bGwgfHwgY29tcHV0ZWRQb3NpdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29tcHV0ZWRQb3NpdGlvbi5yZWN0LndpZHRoXSk7XG4gIHVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdXBkYXRlQ29tcHV0ZWRQb3NpdGlvbigpO1xuICB9LCBbdXBkYXRlQ29tcHV0ZWRQb3NpdGlvbl0pO1xuICB2YXIgcnVuQXV0b1VwZGF0ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIGNsZWFudXBSZWYuY3VycmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2xlYW51cFJlZi5jdXJyZW50KCk7XG4gICAgICBjbGVhbnVwUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoY29udHJvbEVsZW1lbnQgJiYgbWVudVBvcnRhbFJlZi5jdXJyZW50KSB7XG4gICAgICBjbGVhbnVwUmVmLmN1cnJlbnQgPSBhdXRvVXBkYXRlKGNvbnRyb2xFbGVtZW50LCBtZW51UG9ydGFsUmVmLmN1cnJlbnQsIHVwZGF0ZUNvbXB1dGVkUG9zaXRpb24sIHtcbiAgICAgICAgZWxlbWVudFJlc2l6ZTogJ1Jlc2l6ZU9ic2VydmVyJyBpbiB3aW5kb3dcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2NvbnRyb2xFbGVtZW50LCB1cGRhdGVDb21wdXRlZFBvc2l0aW9uXSk7XG4gIHVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcnVuQXV0b1VwZGF0ZSgpO1xuICB9LCBbcnVuQXV0b1VwZGF0ZV0pO1xuICB2YXIgc2V0TWVudVBvcnRhbEVsZW1lbnQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobWVudVBvcnRhbEVsZW1lbnQpIHtcbiAgICBtZW51UG9ydGFsUmVmLmN1cnJlbnQgPSBtZW51UG9ydGFsRWxlbWVudDtcbiAgICBydW5BdXRvVXBkYXRlKCk7XG4gIH0sIFtydW5BdXRvVXBkYXRlXSk7XG5cbiAgLy8gYmFpbCBlYXJseSBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmVuJ3QgcHJlc2VudFxuICBpZiAoIWFwcGVuZFRvICYmIG1lbnVQb3NpdGlvbiAhPT0gJ2ZpeGVkJyB8fCAhY29tcHV0ZWRQb3NpdGlvbikgcmV0dXJuIG51bGw7XG5cbiAgLy8gc2FtZSB3cmFwcGVyIGVsZW1lbnQgd2hldGhlciBmaXhlZCBvciBwb3J0YWxsZWRcbiAgdmFyIG1lbnVXcmFwcGVyID0ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICByZWY6IHNldE1lbnVQb3J0YWxFbGVtZW50XG4gIH0sIGdldFN0eWxlUHJvcHMoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBwcm9wcyksIHt9LCB7XG4gICAgb2Zmc2V0OiBjb21wdXRlZFBvc2l0aW9uLm9mZnNldCxcbiAgICBwb3NpdGlvbjogbWVudVBvc2l0aW9uLFxuICAgIHJlY3Q6IGNvbXB1dGVkUG9zaXRpb24ucmVjdFxuICB9KSwgJ21lbnVQb3J0YWwnLCB7XG4gICAgJ21lbnUtcG9ydGFsJzogdHJ1ZVxuICB9KSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbiAgcmV0dXJuIGpzeChQb3J0YWxQbGFjZW1lbnRDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHBvcnRhbFBsYWNlbWVudENvbnRleHRcbiAgfSwgYXBwZW5kVG8gPyAvKiNfX1BVUkVfXyovY3JlYXRlUG9ydGFsKG1lbnVXcmFwcGVyLCBhcHBlbmRUbykgOiBtZW51V3JhcHBlcik7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJvb3QgQ29udGFpbmVyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGNvbnRhaW5lckNTUyA9IGZ1bmN0aW9uIGNvbnRhaW5lckNTUyhfcmVmKSB7XG4gIHZhciBpc0Rpc2FibGVkID0gX3JlZi5pc0Rpc2FibGVkLFxuICAgIGlzUnRsID0gX3JlZi5pc1J0bDtcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ2NvbnRhaW5lcicsXG4gICAgZGlyZWN0aW9uOiBpc1J0bCA/ICdydGwnIDogdW5kZWZpbmVkLFxuICAgIHBvaW50ZXJFdmVudHM6IGlzRGlzYWJsZWQgPyAnbm9uZScgOiB1bmRlZmluZWQsXG4gICAgLy8gY2FuY2VsIG1vdXNlIGV2ZW50cyB3aGVuIGRpc2FibGVkXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfTtcbn07XG52YXIgU2VsZWN0Q29udGFpbmVyID0gZnVuY3Rpb24gU2VsZWN0Q29udGFpbmVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzLFxuICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgIGlzUnRsID0gcHJvcHMuaXNSdGw7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe30sIGdldFN0eWxlUHJvcHMocHJvcHMsICdjb250YWluZXInLCB7XG4gICAgJy0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkLFxuICAgICctLWlzLXJ0bCc6IGlzUnRsXG4gIH0pLCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWYWx1ZSBDb250YWluZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgdmFsdWVDb250YWluZXJDU1MgPSBmdW5jdGlvbiB2YWx1ZUNvbnRhaW5lckNTUyhfcmVmMiwgdW5zdHlsZWQpIHtcbiAgdmFyIHNwYWNpbmcgPSBfcmVmMi50aGVtZS5zcGFjaW5nLFxuICAgIGlzTXVsdGkgPSBfcmVmMi5pc011bHRpLFxuICAgIGhhc1ZhbHVlID0gX3JlZjIuaGFzVmFsdWUsXG4gICAgY29udHJvbFNob3VsZFJlbmRlclZhbHVlID0gX3JlZjIuc2VsZWN0UHJvcHMuY29udHJvbFNob3VsZFJlbmRlclZhbHVlO1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZGlzcGxheTogaXNNdWx0aSAmJiBoYXNWYWx1ZSAmJiBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUgPyAnZmxleCcgOiAnZ3JpZCcsXG4gICAgZmxleDogMSxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LCB1bnN0eWxlZCA/IHt9IDoge1xuICAgIHBhZGRpbmc6IFwiXCIuY29uY2F0KHNwYWNpbmcuYmFzZVVuaXQgLyAyLCBcInB4IFwiKS5jb25jYXQoc3BhY2luZy5iYXNlVW5pdCAqIDIsIFwicHhcIilcbiAgfSk7XG59O1xudmFyIFZhbHVlQ29udGFpbmVyID0gZnVuY3Rpb24gVmFsdWVDb250YWluZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgaXNNdWx0aSA9IHByb3BzLmlzTXVsdGksXG4gICAgaGFzVmFsdWUgPSBwcm9wcy5oYXNWYWx1ZTtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ3ZhbHVlQ29udGFpbmVyJywge1xuICAgICd2YWx1ZS1jb250YWluZXInOiB0cnVlLFxuICAgICd2YWx1ZS1jb250YWluZXItLWlzLW11bHRpJzogaXNNdWx0aSxcbiAgICAndmFsdWUtY29udGFpbmVyLS1oYXMtdmFsdWUnOiBoYXNWYWx1ZVxuICB9KSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSW5kaWNhdG9yIENvbnRhaW5lclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBpbmRpY2F0b3JzQ29udGFpbmVyQ1NTID0gZnVuY3Rpb24gaW5kaWNhdG9yc0NvbnRhaW5lckNTUygpIHtcbiAgcmV0dXJuIHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFNocmluazogMFxuICB9O1xufTtcbnZhciBJbmRpY2F0b3JzQ29udGFpbmVyID0gZnVuY3Rpb24gSW5kaWNhdG9yc0NvbnRhaW5lcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2luZGljYXRvcnNDb250YWluZXInLCB7XG4gICAgaW5kaWNhdG9yczogdHJ1ZVxuICB9KSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG5cbnZhciBfdGVtcGxhdGVPYmplY3Q7XG52YXIgX2V4Y2x1ZGVkJDIgPSBbXCJzaXplXCJdLFxuICBfZXhjbHVkZWQyID0gW1wiaW5uZXJQcm9wc1wiLCBcImlzUnRsXCIsIFwic2l6ZVwiXTtcbmZ1bmN0aW9uIF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fKCkgeyByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7IH1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZhciBfcmVmMiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgbmFtZTogXCI4bW1rY2dcIixcbiAgc3R5bGVzOiBcImRpc3BsYXk6aW5saW5lLWJsb2NrO2ZpbGw6Y3VycmVudENvbG9yO2xpbmUtaGVpZ2h0OjE7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MFwiXG59IDoge1xuICBuYW1lOiBcInRqNWJkZS1TdmdcIixcbiAgc3R5bGVzOiBcImRpc3BsYXk6aW5saW5lLWJsb2NrO2ZpbGw6Y3VycmVudENvbG9yO2xpbmUtaGVpZ2h0OjE7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MDtsYWJlbDpTdmc7XCIsXG4gIG1hcDogXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWx1WkdsallYUnZjbk11ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFYbENTU0lzSW1acGJHVWlPaUpwYm1ScFkyRjBiM0p6TG5SemVDSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxS2lCQWFuTjRJR3B6ZUNBcUwxeHVhVzF3YjNKMElIc2dTbE5ZTENCU1pXRmpkRTV2WkdVZ2ZTQm1jbTl0SUNkeVpXRmpkQ2M3WEc1cGJYQnZjblFnZXlCcWMzZ3NJR3RsZVdaeVlXMWxjeUI5SUdaeWIyMGdKMEJsYlc5MGFXOXVMM0psWVdOMEp6dGNibHh1YVcxd2IzSjBJSHRjYmlBZ1EyOXRiVzl1VUhKdmNITkJibVJEYkdGemMwNWhiV1VzWEc0Z0lFTlRVMDlpYW1WamRGZHBkR2hNWVdKbGJDeGNiaUFnUjNKdmRYQkNZWE5sTEZ4dWZTQm1jbTl0SUNjdUxpOTBlWEJsY3ljN1hHNXBiWEJ2Y25RZ2V5Qm5aWFJUZEhsc1pWQnliM0J6SUgwZ1puSnZiU0FuTGk0dmRYUnBiSE1uTzF4dVhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JpOHZJRVJ5YjNCa2IzZHVJQ1lnUTJ4bFlYSWdTV052Ym5OY2JpOHZJRDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4dVhHNWpiMjV6ZENCVGRtY2dQU0FvZTF4dUlDQnphWHBsTEZ4dUlDQXVMaTV3Y205d2MxeHVmVG9nU2xOWUxrbHVkSEpwYm5OcFkwVnNaVzFsYm5Seld5ZHpkbWNuWFNBbUlIc2djMmw2WlRvZ2JuVnRZbVZ5SUgwcElEMCtJQ2hjYmlBZ1BITjJaMXh1SUNBZ0lHaGxhV2RvZEQxN2MybDZaWDFjYmlBZ0lDQjNhV1IwYUQxN2MybDZaWDFjYmlBZ0lDQjJhV1YzUW05NFBWd2lNQ0F3SURJd0lESXdYQ0pjYmlBZ0lDQmhjbWxoTFdocFpHUmxiajFjSW5SeWRXVmNJbHh1SUNBZ0lHWnZZM1Z6WVdKc1pUMWNJbVpoYkhObFhDSmNiaUFnSUNCamMzTTllM3RjYmlBZ0lDQWdJR1JwYzNCc1lYazZJQ2RwYm14cGJtVXRZbXh2WTJzbkxGeHVJQ0FnSUNBZ1ptbHNiRG9nSjJOMWNuSmxiblJEYjJ4dmNpY3NYRzRnSUNBZ0lDQnNhVzVsU0dWcFoyaDBPaUF4TEZ4dUlDQWdJQ0FnYzNSeWIydGxPaUFuWTNWeWNtVnVkRU52Ykc5eUp5eGNiaUFnSUNBZ0lITjBjbTlyWlZkcFpIUm9PaUF3TEZ4dUlDQWdJSDE5WEc0Z0lDQWdleTR1TG5CeWIzQnpmVnh1SUNBdlBseHVLVHRjYmx4dVpYaHdiM0owSUhSNWNHVWdRM0p2YzNOSlkyOXVVSEp2Y0hNZ1BTQktVMWd1U1c1MGNtbHVjMmxqUld4bGJXVnVkSE5iSjNOMlp5ZGRJQ1lnZXlCemFYcGxQem9nYm5WdFltVnlJSDA3WEc1bGVIQnZjblFnWTI5dWMzUWdRM0p2YzNOSlkyOXVJRDBnS0hCeWIzQnpPaUJEY205emMwbGpiMjVRY205d2N5a2dQVDRnS0Z4dUlDQThVM1puSUhOcGVtVTllekl3ZlNCN0xpNHVjSEp2Y0hOOVBseHVJQ0FnSUR4d1lYUm9JR1E5WENKTk1UUXVNelE0SURFMExqZzBPV010TUM0ME5qa2dNQzQwTmprdE1TNHlNamtnTUM0ME5qa3RNUzQyT1RjZ01Hd3RNaTQyTlRFdE15NHdNekF0TWk0Mk5URWdNeTR3TWpsakxUQXVORFk1SURBdU5EWTVMVEV1TWpJNUlEQXVORFk1TFRFdU5qazNJREF0TUM0ME5qa3RNQzQwTmprdE1DNDBOamt0TVM0eU1qa2dNQzB4TGpZNU4yd3lMamMxT0MwekxqRTFMVEl1TnpVNUxUTXVNVFV5WXkwd0xqUTJPUzB3TGpRMk9TMHdMalEyT1MweExqSXlPQ0F3TFRFdU5qazNjekV1TWpJNExUQXVORFk1SURFdU5qazNJREJzTWk0Mk5USWdNeTR3TXpFZ01pNDJOVEV0TXk0d016RmpNQzQwTmprdE1DNDBOamtnTVM0eU1qZ3RNQzQwTmprZ01TNDJPVGNnTUhNd0xqUTJPU0F4TGpJeU9TQXdJREV1TmprM2JDMHlMamMxT0NBekxqRTFNaUF5TGpjMU9DQXpMakUxWXpBdU5EWTVJREF1TkRZNUlEQXVORFk1SURFdU1qSTVJREFnTVM0Mk9UaDZYQ0lnTHo1Y2JpQWdQQzlUZG1jK1hHNHBPMXh1Wlhod2IzSjBJSFI1Y0dVZ1JHOTNia05vWlhaeWIyNVFjbTl3Y3lBOUlFcFRXQzVKYm5SeWFXNXphV05GYkdWdFpXNTBjMXNuYzNabkoxMGdKaUI3SUhOcGVtVS9PaUJ1ZFcxaVpYSWdmVHRjYm1WNGNHOXlkQ0JqYjI1emRDQkViM2R1UTJobGRuSnZiaUE5SUNod2NtOXdjem9nUkc5M2JrTm9aWFp5YjI1UWNtOXdjeWtnUFQ0Z0tGeHVJQ0E4VTNabklITnBlbVU5ZXpJd2ZTQjdMaTR1Y0hKdmNITjlQbHh1SUNBZ0lEeHdZWFJvSUdROVhDSk5OQzQxTVRZZ055NDFORGhqTUM0ME16WXRNQzQwTkRZZ01TNHdORE10TUM0ME9ERWdNUzQxTnpZZ01Hd3pMamt3T0NBekxqYzBOeUF6TGprd09DMHpMamMwTjJNd0xqVXpNeTB3TGpRNE1TQXhMakUwTVMwd0xqUTBOaUF4TGpVM05DQXdJREF1TkRNMklEQXVORFExSURBdU5EQTRJREV1TVRrM0lEQWdNUzQyTVRVdE1DNDBNRFlnTUM0ME1UZ3ROQzQyT1RVZ05DNDFNREl0TkM0Mk9UVWdOQzQxTURJdE1DNHlNVGNnTUM0eU1qTXRNQzQxTURJZ01DNHpNelV0TUM0M09EY2dNQzR6TXpWekxUQXVOVGN0TUM0eE1USXRNQzQzT0RrdE1DNHpNelZqTUNBd0xUUXVNamczTFRRdU1EZzBMVFF1TmprMUxUUXVOVEF5Y3kwd0xqUXpOaTB4TGpFM0lEQXRNUzQyTVRWNlhDSWdMejVjYmlBZ1BDOVRkbWMrWEc0cE8xeHVYRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNiaTh2SUVSeWIzQmtiM2R1SUNZZ1EyeGxZWElnUW5WMGRHOXVjMXh1THk4Z1BUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnUkhKdmNHUnZkMjVKYm1ScFkyRjBiM0pRY205d2N6eGNiaUFnVDNCMGFXOXVJRDBnZFc1cmJtOTNiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRnUFNCaWIyOXNaV0Z1TEZ4dUlDQkhjbTkxY0NCbGVIUmxibVJ6SUVkeWIzVndRbUZ6WlR4UGNIUnBiMjQrSUQwZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo1Y2JqNGdaWGgwWlc1a2N5QkRiMjF0YjI1UWNtOXdjMEZ1WkVOc1lYTnpUbUZ0WlR4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQaUI3WEc0Z0lDOHFLaUJVYUdVZ1kyaHBiR1J5Wlc0Z2RHOGdZbVVnY21WdVpHVnlaV1FnYVc1emFXUmxJSFJvWlNCcGJtUnBZMkYwYjNJdUlDb3ZYRzRnSUdOb2FXeGtjbVZ1UHpvZ1VtVmhZM1JPYjJSbE8xeHVJQ0F2S2lvZ1VISnZjSE1nZEdoaGRDQjNhV3hzSUdKbElIQmhjM05sWkNCdmJpQjBieUIwYUdVZ1kyaHBiR1J5Wlc0dUlDb3ZYRzRnSUdsdWJtVnlVSEp2Y0hNNklFcFRXQzVKYm5SeWFXNXphV05GYkdWdFpXNTBjMXNuWkdsMkoxMDdYRzRnSUM4cUtpQlVhR1VnWm05amRYTmxaQ0J6ZEdGMFpTQnZaaUIwYUdVZ2MyVnNaV04wTGlBcUwxeHVJQ0JwYzBadlkzVnpaV1E2SUdKdmIyeGxZVzQ3WEc0Z0lHbHpSR2x6WVdKc1pXUTZJR0p2YjJ4bFlXNDdYRzU5WEc1Y2JtTnZibk4wSUdKaGMyVkRVMU1nUFNBOFhHNGdJRTl3ZEdsdmJpeGNiaUFnU1hOTmRXeDBhU0JsZUhSbGJtUnpJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNWNiajRvWEc0Z0lIdGNiaUFnSUNCcGMwWnZZM1Z6WldRc1hHNGdJQ0FnZEdobGJXVTZJSHRjYmlBZ0lDQWdJSE53WVdOcGJtYzZJSHNnWW1GelpWVnVhWFFnZlN4Y2JpQWdJQ0FnSUdOdmJHOXljeXhjYmlBZ0lDQjlMRnh1SUNCOU9seHVJQ0FnSUh3Z1JISnZjR1J2ZDI1SmJtUnBZMkYwYjNKUWNtOXdjenhQY0hScGIyNHNJRWx6VFhWc2RHa3NJRWR5YjNWd1BseHVJQ0FnSUh3Z1EyeGxZWEpKYm1ScFkyRjBiM0pRY205d2N6eFBjSFJwYjI0c0lFbHpUWFZzZEdrc0lFZHliM1Z3UGl4Y2JpQWdkVzV6ZEhsc1pXUTZJR0p2YjJ4bFlXNWNiaWs2SUVOVFUwOWlhbVZqZEZkcGRHaE1ZV0psYkNBOVBpQW9lMXh1SUNCc1lXSmxiRG9nSjJsdVpHbGpZWFJ2Y2tOdmJuUmhhVzVsY2ljc1hHNGdJR1JwYzNCc1lYazZJQ2RtYkdWNEp5eGNiaUFnZEhKaGJuTnBkR2x2YmpvZ0oyTnZiRzl5SURFMU1HMXpKeXhjYmlBZ0xpNHVLSFZ1YzNSNWJHVmtYRzRnSUNBZ1B5QjdmVnh1SUNBZ0lEb2dlMXh1SUNBZ0lDQWdJQ0JqYjJ4dmNqb2dhWE5HYjJOMWMyVmtJRDhnWTI5c2IzSnpMbTVsZFhSeVlXdzJNQ0E2SUdOdmJHOXljeTV1WlhWMGNtRnNNakFzWEc0Z0lDQWdJQ0FnSUhCaFpHUnBibWM2SUdKaGMyVlZibWwwSUNvZ01peGNiaUFnSUNBZ0lDQWdKenBvYjNabGNpYzZJSHRjYmlBZ0lDQWdJQ0FnSUNCamIyeHZjam9nYVhOR2IyTjFjMlZrSUQ4Z1kyOXNiM0p6TG01bGRYUnlZV3c0TUNBNklHTnZiRzl5Y3k1dVpYVjBjbUZzTkRBc1hHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQjlLU3hjYm4wcE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1pISnZjR1J2ZDI1SmJtUnBZMkYwYjNKRFUxTWdQU0JpWVhObFExTlRPMXh1Wlhod2IzSjBJR052Ym5OMElFUnliM0JrYjNkdVNXNWthV05oZEc5eUlEMGdQRnh1SUNCUGNIUnBiMjRzWEc0Z0lFbHpUWFZzZEdrZ1pYaDBaVzVrY3lCaWIyOXNaV0Z1TEZ4dUlDQkhjbTkxY0NCbGVIUmxibVJ6SUVkeWIzVndRbUZ6WlR4UGNIUnBiMjQrWEc0K0tGeHVJQ0J3Y205d2N6b2dSSEp2Y0dSdmQyNUpibVJwWTJGMGIzSlFjbTl3Y3p4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQbHh1S1NBOVBpQjdYRzRnSUdOdmJuTjBJSHNnWTJocGJHUnlaVzRzSUdsdWJtVnlVSEp2Y0hNZ2ZTQTlJSEJ5YjNCek8xeHVJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lEeGthWFpjYmlBZ0lDQWdJSHN1TGk1blpYUlRkSGxzWlZCeWIzQnpLSEJ5YjNCekxDQW5aSEp2Y0dSdmQyNUpibVJwWTJGMGIzSW5MQ0I3WEc0Z0lDQWdJQ0FnSUdsdVpHbGpZWFJ2Y2pvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnSjJSeWIzQmtiM2R1TFdsdVpHbGpZWFJ2Y2ljNklIUnlkV1VzWEc0Z0lDQWdJQ0I5S1gxY2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lENWNiaUFnSUNBZ0lIdGphR2xzWkhKbGJpQjhmQ0E4Ukc5M2JrTm9aWFp5YjI0Z0x6NTlYRzRnSUNBZ1BDOWthWFkrWEc0Z0lDazdYRzU5TzF4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFTnNaV0Z5U1c1a2FXTmhkRzl5VUhKdmNITThYRzRnSUU5d2RHbHZiaUE5SUhWdWEyNXZkMjRzWEc0Z0lFbHpUWFZzZEdrZ1pYaDBaVzVrY3lCaWIyOXNaV0Z1SUQwZ1ltOXZiR1ZoYml4Y2JpQWdSM0p2ZFhBZ1pYaDBaVzVrY3lCSGNtOTFjRUpoYzJVOFQzQjBhVzl1UGlBOUlFZHliM1Z3UW1GelpUeFBjSFJwYjI0K1hHNCtJR1Y0ZEdWdVpITWdRMjl0Ylc5dVVISnZjSE5CYm1SRGJHRnpjMDVoYldVOFQzQjBhVzl1TENCSmMwMTFiSFJwTENCSGNtOTFjRDRnZTF4dUlDQXZLaW9nVkdobElHTm9hV3hrY21WdUlIUnZJR0psSUhKbGJtUmxjbVZrSUdsdWMybGtaU0IwYUdVZ2FXNWthV05oZEc5eUxpQXFMMXh1SUNCamFHbHNaSEpsYmo4NklGSmxZV04wVG05a1pUdGNiaUFnTHlvcUlGQnliM0J6SUhSb1lYUWdkMmxzYkNCaVpTQndZWE56WldRZ2IyNGdkRzhnZEdobElHTm9hV3hrY21WdUxpQXFMMXh1SUNCcGJtNWxjbEJ5YjNCek9pQktVMWd1U1c1MGNtbHVjMmxqUld4bGJXVnVkSE5iSjJScGRpZGRPMXh1SUNBdktpb2dWR2hsSUdadlkzVnpaV1FnYzNSaGRHVWdiMllnZEdobElITmxiR1ZqZEM0Z0tpOWNiaUFnYVhOR2IyTjFjMlZrT2lCaWIyOXNaV0Z1TzF4dWZWeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyeGxZWEpKYm1ScFkyRjBiM0pEVTFNZ1BTQmlZWE5sUTFOVE8xeHVaWGh3YjNKMElHTnZibk4wSUVOc1pXRnlTVzVrYVdOaGRHOXlJRDBnUEZ4dUlDQlBjSFJwYjI0c1hHNGdJRWx6VFhWc2RHa2daWGgwWlc1a2N5QmliMjlzWldGdUxGeHVJQ0JIY205MWNDQmxlSFJsYm1SeklFZHliM1Z3UW1GelpUeFBjSFJwYjI0K1hHNCtLRnh1SUNCd2NtOXdjem9nUTJ4bFlYSkpibVJwWTJGMGIzSlFjbTl3Y3p4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQbHh1S1NBOVBpQjdYRzRnSUdOdmJuTjBJSHNnWTJocGJHUnlaVzRzSUdsdWJtVnlVSEp2Y0hNZ2ZTQTlJSEJ5YjNCek8xeHVJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lEeGthWFpjYmlBZ0lDQWdJSHN1TGk1blpYUlRkSGxzWlZCeWIzQnpLSEJ5YjNCekxDQW5ZMnhsWVhKSmJtUnBZMkYwYjNJbkxDQjdYRzRnSUNBZ0lDQWdJR2x1WkdsallYUnZjam9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdKMk5zWldGeUxXbHVaR2xqWVhSdmNpYzZJSFJ5ZFdVc1hHNGdJQ0FnSUNCOUtYMWNiaUFnSUNBZ0lIc3VMaTVwYm01bGNsQnliM0J6ZlZ4dUlDQWdJRDVjYmlBZ0lDQWdJSHRqYUdsc1pISmxiaUI4ZkNBOFEzSnZjM05KWTI5dUlDOCtmVnh1SUNBZ0lEd3ZaR2wyUGx4dUlDQXBPMXh1ZlR0Y2JseHVMeThnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNHZMeUJUWlhCaGNtRjBiM0pjYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUVsdVpHbGpZWFJ2Y2xObGNHRnlZWFJ2Y2xCeWIzQnpQRnh1SUNCUGNIUnBiMjRnUFNCMWJtdHViM2R1TEZ4dUlDQkpjMDExYkhScElHVjRkR1Z1WkhNZ1ltOXZiR1ZoYmlBOUlHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo0Z1BTQkhjbTkxY0VKaGMyVThUM0IwYVc5dVBseHVQaUJsZUhSbGJtUnpJRU52YlcxdmJsQnliM0J6UVc1a1EyeGhjM05PWVcxbFBFOXdkR2x2Yml3Z1NYTk5kV3gwYVN3Z1IzSnZkWEErSUh0Y2JpQWdhWE5FYVhOaFlteGxaRG9nWW05dmJHVmhianRjYmlBZ2FYTkdiMk4xYzJWa09pQmliMjlzWldGdU8xeHVJQ0JwYm01bGNsQnliM0J6UHpvZ1NsTllMa2x1ZEhKcGJuTnBZMFZzWlcxbGJuUnpXeWR6Y0dGdUoxMDdYRzU5WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYm1ScFkyRjBiM0pUWlhCaGNtRjBiM0pEVTFNZ1BTQThYRzRnSUU5d2RHbHZiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajVjYmo0b1hHNGdJSHRjYmlBZ0lDQnBjMFJwYzJGaWJHVmtMRnh1SUNBZ0lIUm9aVzFsT2lCN1hHNGdJQ0FnSUNCemNHRmphVzVuT2lCN0lHSmhjMlZWYm1sMElIMHNYRzRnSUNBZ0lDQmpiMnh2Y25Nc1hHNGdJQ0FnZlN4Y2JpQWdmVG9nU1c1a2FXTmhkRzl5VTJWd1lYSmhkRzl5VUhKdmNITThUM0IwYVc5dUxDQkpjMDExYkhScExDQkhjbTkxY0Q0c1hHNGdJSFZ1YzNSNWJHVmtPaUJpYjI5c1pXRnVYRzRwT2lCRFUxTlBZbXBsWTNSWGFYUm9UR0ZpWld3Z1BUNGdLSHRjYmlBZ2JHRmlaV3c2SUNkcGJtUnBZMkYwYjNKVFpYQmhjbUYwYjNJbkxGeHVJQ0JoYkdsbmJsTmxiR1k2SUNkemRISmxkR05vSnl4Y2JpQWdkMmxrZEdnNklERXNYRzRnSUM0dUxpaDFibk4wZVd4bFpGeHVJQ0FnSUQ4Z2UzMWNiaUFnSUNBNklIdGNiaUFnSUNBZ0lDQWdZbUZqYTJkeWIzVnVaRU52Ykc5eU9pQnBjMFJwYzJGaWJHVmtJRDhnWTI5c2IzSnpMbTVsZFhSeVlXd3hNQ0E2SUdOdmJHOXljeTV1WlhWMGNtRnNNakFzWEc0Z0lDQWdJQ0FnSUcxaGNtZHBia0p2ZEhSdmJUb2dZbUZ6WlZWdWFYUWdLaUF5TEZ4dUlDQWdJQ0FnSUNCdFlYSm5hVzVVYjNBNklHSmhjMlZWYm1sMElDb2dNaXhjYmlBZ0lDQWdJSDBwTEZ4dWZTazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQkpibVJwWTJGMGIzSlRaWEJoY21GMGIzSWdQU0E4WEc0Z0lFOXdkR2x2Yml4Y2JpQWdTWE5OZFd4MGFTQmxlSFJsYm1SeklHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo1Y2JqNG9YRzRnSUhCeWIzQnpPaUJKYm1ScFkyRjBiM0pUWlhCaGNtRjBiM0pRY205d2N6eFBjSFJwYjI0c0lFbHpUWFZzZEdrc0lFZHliM1Z3UGx4dUtTQTlQaUI3WEc0Z0lHTnZibk4wSUhzZ2FXNXVaWEpRY205d2N5QjlJRDBnY0hKdmNITTdYRzRnSUhKbGRIVnliaUFvWEc0Z0lDQWdQSE53WVc1Y2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lDQWdleTR1TG1kbGRGTjBlV3hsVUhKdmNITW9jSEp2Y0hNc0lDZHBibVJwWTJGMGIzSlRaWEJoY21GMGIzSW5MQ0I3WEc0Z0lDQWdJQ0FnSUNkcGJtUnBZMkYwYjNJdGMyVndZWEpoZEc5eUp6b2dkSEoxWlN4Y2JpQWdJQ0FnSUgwcGZWeHVJQ0FnSUM4K1hHNGdJQ2s3WEc1OU8xeHVYRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNiaTh2SUV4dllXUnBibWRjYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1WEc1amIyNXpkQ0JzYjJGa2FXNW5SRzkwUVc1cGJXRjBhVzl1Y3lBOUlHdGxlV1p5WVcxbGMyQmNiaUFnTUNVc0lEZ3dKU3dnTVRBd0pTQjdJRzl3WVdOcGRIazZJREE3SUgxY2JpQWdOREFsSUhzZ2IzQmhZMmwwZVRvZ01Uc2dmVnh1WUR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUd4dllXUnBibWRKYm1ScFkyRjBiM0pEVTFNZ1BTQThYRzRnSUU5d2RHbHZiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajVjYmo0b1hHNGdJSHRjYmlBZ0lDQnBjMFp2WTNWelpXUXNYRzRnSUNBZ2MybDZaU3hjYmlBZ0lDQjBhR1Z0WlRvZ2UxeHVJQ0FnSUNBZ1kyOXNiM0p6TEZ4dUlDQWdJQ0FnYzNCaFkybHVaem9nZXlCaVlYTmxWVzVwZENCOUxGeHVJQ0FnSUgwc1hHNGdJSDA2SUV4dllXUnBibWRKYm1ScFkyRjBiM0pRY205d2N6eFBjSFJwYjI0c0lFbHpUWFZzZEdrc0lFZHliM1Z3UGl4Y2JpQWdkVzV6ZEhsc1pXUTZJR0p2YjJ4bFlXNWNiaWs2SUVOVFUwOWlhbVZqZEZkcGRHaE1ZV0psYkNBOVBpQW9lMXh1SUNCc1lXSmxiRG9nSjJ4dllXUnBibWRKYm1ScFkyRjBiM0luTEZ4dUlDQmthWE53YkdGNU9pQW5abXhsZUNjc1hHNGdJSFJ5WVc1emFYUnBiMjQ2SUNkamIyeHZjaUF4TlRCdGN5Y3NYRzRnSUdGc2FXZHVVMlZzWmpvZ0oyTmxiblJsY2ljc1hHNGdJR1p2Ym5SVGFYcGxPaUJ6YVhwbExGeHVJQ0JzYVc1bFNHVnBaMmgwT2lBeExGeHVJQ0J0WVhKbmFXNVNhV2RvZERvZ2MybDZaU3hjYmlBZ2RHVjRkRUZzYVdkdU9pQW5ZMlZ1ZEdWeUp5eGNiaUFnZG1WeWRHbGpZV3hCYkdsbmJqb2dKMjFwWkdSc1pTY3NYRzRnSUM0dUxpaDFibk4wZVd4bFpGeHVJQ0FnSUQ4Z2UzMWNiaUFnSUNBNklIdGNiaUFnSUNBZ0lDQWdZMjlzYjNJNklHbHpSbTlqZFhObFpDQS9JR052Ykc5eWN5NXVaWFYwY21Gc05qQWdPaUJqYjJ4dmNuTXVibVYxZEhKaGJESXdMRnh1SUNBZ0lDQWdJQ0J3WVdSa2FXNW5PaUJpWVhObFZXNXBkQ0FxSURJc1hHNGdJQ0FnSUNCOUtTeGNibjBwTzF4dVhHNXBiblJsY21aaFkyVWdURzloWkdsdVowUnZkRkJ5YjNCeklIdGNiaUFnWkdWc1lYazZJRzUxYldKbGNqdGNiaUFnYjJabWMyVjBPaUJpYjI5c1pXRnVPMXh1ZlZ4dVkyOXVjM1FnVEc5aFpHbHVaMFJ2ZENBOUlDaDdJR1JsYkdGNUxDQnZabVp6WlhRZ2ZUb2dURzloWkdsdVowUnZkRkJ5YjNCektTQTlQaUFvWEc0Z0lEeHpjR0Z1WEc0Z0lDQWdZM056UFh0N1hHNGdJQ0FnSUNCaGJtbHRZWFJwYjI0NklHQWtlMnh2WVdScGJtZEViM1JCYm1sdFlYUnBiMjV6ZlNBeGN5QmxZWE5sTFdsdUxXOTFkQ0FrZTJSbGJHRjVmVzF6SUdsdVptbHVhWFJsTzJBc1hHNGdJQ0FnSUNCaVlXTnJaM0p2ZFc1a1EyOXNiM0k2SUNkamRYSnlaVzUwUTI5c2IzSW5MRnh1SUNBZ0lDQWdZbTl5WkdWeVVtRmthWFZ6T2lBbk1XVnRKeXhjYmlBZ0lDQWdJR1JwYzNCc1lYazZJQ2RwYm14cGJtVXRZbXh2WTJzbkxGeHVJQ0FnSUNBZ2JXRnlaMmx1VEdWbWREb2diMlptYzJWMElEOGdKekZsYlNjZ09pQjFibVJsWm1sdVpXUXNYRzRnSUNBZ0lDQm9aV2xuYUhRNklDY3haVzBuTEZ4dUlDQWdJQ0FnZG1WeWRHbGpZV3hCYkdsbmJqb2dKM1J2Y0Njc1hHNGdJQ0FnSUNCM2FXUjBhRG9nSnpGbGJTY3NYRzRnSUNBZ2ZYMWNiaUFnTHo1Y2JpazdYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnVEc5aFpHbHVaMGx1WkdsallYUnZjbEJ5YjNCelBGeHVJQ0JQY0hScGIyNGdQU0IxYm10dWIzZHVMRnh1SUNCSmMwMTFiSFJwSUdWNGRHVnVaSE1nWW05dmJHVmhiaUE5SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajRnUFNCSGNtOTFjRUpoYzJVOFQzQjBhVzl1UGx4dVBpQmxlSFJsYm1SeklFTnZiVzF2YmxCeWIzQnpRVzVrUTJ4aGMzTk9ZVzFsUEU5d2RHbHZiaXdnU1hOTmRXeDBhU3dnUjNKdmRYQStJSHRjYmlBZ0x5b3FJRkJ5YjNCeklIUm9ZWFFnZDJsc2JDQmlaU0J3WVhOelpXUWdiMjRnZEc4Z2RHaGxJR05vYVd4a2NtVnVMaUFxTDF4dUlDQnBibTVsY2xCeWIzQnpPaUJLVTFndVNXNTBjbWx1YzJsalJXeGxiV1Z1ZEhOYkoyUnBkaWRkTzF4dUlDQXZLaW9nVkdobElHWnZZM1Z6WldRZ2MzUmhkR1VnYjJZZ2RHaGxJSE5sYkdWamRDNGdLaTljYmlBZ2FYTkdiMk4xYzJWa09pQmliMjlzWldGdU8xeHVJQ0JwYzBScGMyRmliR1ZrT2lCaWIyOXNaV0Z1TzF4dUlDQXZLaW9nVTJWMElITnBlbVVnYjJZZ2RHaGxJR052Ym5SaGFXNWxjaTRnS2k5Y2JpQWdjMmw2WlRvZ2JuVnRZbVZ5TzF4dWZWeHVaWGh3YjNKMElHTnZibk4wSUV4dllXUnBibWRKYm1ScFkyRjBiM0lnUFNBOFhHNGdJRTl3ZEdsdmJpeGNiaUFnU1hOTmRXeDBhU0JsZUhSbGJtUnpJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNWNiajRvZTF4dUlDQnBibTVsY2xCeWIzQnpMRnh1SUNCcGMxSjBiQ3hjYmlBZ2MybDZaU0E5SURRc1hHNGdJQzR1TG5KbGMzUlFjbTl3YzF4dWZUb2dURzloWkdsdVowbHVaR2xqWVhSdmNsQnliM0J6UEU5d2RHbHZiaXdnU1hOTmRXeDBhU3dnUjNKdmRYQStLU0E5UGlCN1hHNGdJSEpsZEhWeWJpQW9YRzRnSUNBZ1BHUnBkbHh1SUNBZ0lDQWdleTR1TG1kbGRGTjBlV3hsVUhKdmNITW9YRzRnSUNBZ0lDQWdJSHNnTGk0dWNtVnpkRkJ5YjNCekxDQnBibTVsY2xCeWIzQnpMQ0JwYzFKMGJDd2djMmw2WlNCOUxGeHVJQ0FnSUNBZ0lDQW5iRzloWkdsdVowbHVaR2xqWVhSdmNpY3NYRzRnSUNBZ0lDQWdJSHRjYmlBZ0lDQWdJQ0FnSUNCcGJtUnBZMkYwYjNJNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUNBZ0oyeHZZV1JwYm1jdGFXNWthV05oZEc5eUp6b2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0tYMWNiaUFnSUNBZ0lIc3VMaTVwYm01bGNsQnliM0J6ZlZ4dUlDQWdJRDVjYmlBZ0lDQWdJRHhNYjJGa2FXNW5SRzkwSUdSbGJHRjVQWHN3ZlNCdlptWnpaWFE5ZTJselVuUnNmU0F2UGx4dUlDQWdJQ0FnUEV4dllXUnBibWRFYjNRZ1pHVnNZWGs5ZXpFMk1IMGdiMlptYzJWMElDOCtYRzRnSUNBZ0lDQThURzloWkdsdVowUnZkQ0JrWld4aGVUMTdNekl3ZlNCdlptWnpaWFE5ZXlGcGMxSjBiSDBnTHo1Y2JpQWdJQ0E4TDJScGRqNWNiaUFnS1R0Y2JuMDdYRzRpWFgwPSAqL1wiLFxuICB0b1N0cmluZzogX0VNT1RJT05fU1RSSU5HSUZJRURfQ1NTX0VSUk9SX19cbn07XG52YXIgU3ZnID0gZnVuY3Rpb24gU3ZnKF9yZWYpIHtcbiAgdmFyIHNpemUgPSBfcmVmLnNpemUsXG4gICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgX2V4Y2x1ZGVkJDIpO1xuICByZXR1cm4ganN4KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICBoZWlnaHQ6IHNpemUsXG4gICAgd2lkdGg6IHNpemUsXG4gICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgIGZvY3VzYWJsZTogXCJmYWxzZVwiLFxuICAgIGNzczogX3JlZjJcbiAgfSwgcHJvcHMpKTtcbn07XG52YXIgQ3Jvc3NJY29uID0gZnVuY3Rpb24gQ3Jvc3NJY29uKHByb3BzKSB7XG4gIHJldHVybiBqc3goU3ZnLCBfZXh0ZW5kcyh7XG4gICAgc2l6ZTogMjBcbiAgfSwgcHJvcHMpLCBqc3goXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xNC4zNDggMTQuODQ5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwbC0yLjY1MS0zLjAzMC0yLjY1MSAzLjAyOWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMC0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOSAwLTEuNjk3bDIuNzU4LTMuMTUtMi43NTktMy4xNTJjLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI4IDAtMS42OTdzMS4yMjgtMC40NjkgMS42OTcgMGwyLjY1MiAzLjAzMSAyLjY1MS0zLjAzMWMwLjQ2OS0wLjQ2OSAxLjIyOC0wLjQ2OSAxLjY5NyAwczAuNDY5IDEuMjI5IDAgMS42OTdsLTIuNzU4IDMuMTUyIDIuNzU4IDMuMTVjMC40NjkgMC40NjkgMC40NjkgMS4yMjkgMCAxLjY5OHpcIlxuICB9KSk7XG59O1xudmFyIERvd25DaGV2cm9uID0gZnVuY3Rpb24gRG93bkNoZXZyb24ocHJvcHMpIHtcbiAgcmV0dXJuIGpzeChTdmcsIF9leHRlbmRzKHtcbiAgICBzaXplOiAyMFxuICB9LCBwcm9wcyksIGpzeChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiXG4gIH0pKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBCdXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGJhc2VDU1MgPSBmdW5jdGlvbiBiYXNlQ1NTKF9yZWYzLCB1bnN0eWxlZCkge1xuICB2YXIgaXNGb2N1c2VkID0gX3JlZjMuaXNGb2N1c2VkLFxuICAgIF9yZWYzJHRoZW1lID0gX3JlZjMudGhlbWUsXG4gICAgYmFzZVVuaXQgPSBfcmVmMyR0aGVtZS5zcGFjaW5nLmJhc2VVbml0LFxuICAgIGNvbG9ycyA9IF9yZWYzJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIGxhYmVsOiAnaW5kaWNhdG9yQ29udGFpbmVyJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJ1xuICB9LCB1bnN0eWxlZCA/IHt9IDoge1xuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDgwIDogY29sb3JzLm5ldXRyYWw0MFxuICAgIH1cbiAgfSk7XG59O1xudmFyIGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbnZhciBEcm9wZG93bkluZGljYXRvciA9IGZ1bmN0aW9uIERyb3Bkb3duSW5kaWNhdG9yKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlXG4gIH0pLCBpbm5lclByb3BzKSwgY2hpbGRyZW4gfHwganN4KERvd25DaGV2cm9uLCBudWxsKSk7XG59O1xudmFyIGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbnZhciBDbGVhckluZGljYXRvciA9IGZ1bmN0aW9uIENsZWFySW5kaWNhdG9yKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlXG4gIH0pLCBpbm5lclByb3BzKSwgY2hpbGRyZW4gfHwganN4KENyb3NzSWNvbiwgbnVsbCkpO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gZnVuY3Rpb24gaW5kaWNhdG9yU2VwYXJhdG9yQ1NTKF9yZWY0LCB1bnN0eWxlZCkge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWY0LmlzRGlzYWJsZWQsXG4gICAgX3JlZjQkdGhlbWUgPSBfcmVmNC50aGVtZSxcbiAgICBiYXNlVW5pdCA9IF9yZWY0JHRoZW1lLnNwYWNpbmcuYmFzZVVuaXQsXG4gICAgY29sb3JzID0gX3JlZjQkdGhlbWUuY29sb3JzO1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICAgIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICAgIHdpZHRoOiAxXG4gIH0sIHVuc3R5bGVkID8ge30gOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDJcbiAgfSk7XG59O1xudmFyIEluZGljYXRvclNlcGFyYXRvciA9IGZ1bmN0aW9uIEluZGljYXRvclNlcGFyYXRvcihwcm9wcykge1xuICB2YXIgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJzcGFuXCIsIF9leHRlbmRzKHt9LCBpbm5lclByb3BzLCBnZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yU2VwYXJhdG9yJywge1xuICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZVxuICB9KSkpO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGxvYWRpbmdEb3RBbmltYXRpb25zID0ga2V5ZnJhbWVzKF90ZW1wbGF0ZU9iamVjdCB8fCAoX3RlbXBsYXRlT2JqZWN0ID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XFxuICA0MCUgeyBvcGFjaXR5OiAxOyB9XFxuXCJdKSkpO1xudmFyIGxvYWRpbmdJbmRpY2F0b3JDU1MgPSBmdW5jdGlvbiBsb2FkaW5nSW5kaWNhdG9yQ1NTKF9yZWY1LCB1bnN0eWxlZCkge1xuICB2YXIgaXNGb2N1c2VkID0gX3JlZjUuaXNGb2N1c2VkLFxuICAgIHNpemUgPSBfcmVmNS5zaXplLFxuICAgIF9yZWY1JHRoZW1lID0gX3JlZjUudGhlbWUsXG4gICAgY29sb3JzID0gX3JlZjUkdGhlbWUuY29sb3JzLFxuICAgIGJhc2VVbml0ID0gX3JlZjUkdGhlbWUuc3BhY2luZy5iYXNlVW5pdDtcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIGxhYmVsOiAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICBmb250U2l6ZTogc2l6ZSxcbiAgICBsaW5lSGVpZ2h0OiAxLFxuICAgIG1hcmdpblJpZ2h0OiBzaXplLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcbiAgfSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgcGFkZGluZzogYmFzZVVuaXQgKiAyXG4gIH0pO1xufTtcbnZhciBMb2FkaW5nRG90ID0gZnVuY3Rpb24gTG9hZGluZ0RvdChfcmVmNikge1xuICB2YXIgZGVsYXkgPSBfcmVmNi5kZWxheSxcbiAgICBvZmZzZXQgPSBfcmVmNi5vZmZzZXQ7XG4gIHJldHVybiBqc3goXCJzcGFuXCIsIHtcbiAgICBjc3M6IC8qI19fUFVSRV9fKi9jc3MkMih7XG4gICAgICBhbmltYXRpb246IFwiXCIuY29uY2F0KGxvYWRpbmdEb3RBbmltYXRpb25zLCBcIiAxcyBlYXNlLWluLW91dCBcIikuY29uY2F0KGRlbGF5LCBcIm1zIGluZmluaXRlO1wiKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgPyAnMWVtJyA6IHVuZGVmaW5lZCxcbiAgICAgIGhlaWdodDogJzFlbScsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICAgIHdpZHRoOiAnMWVtJ1xuICAgIH0sIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiBcIjtsYWJlbDpMb2FkaW5nRG90O1wiLCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcIlwiIDogXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWx1WkdsallYUnZjbk11ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFXMVJTU0lzSW1acGJHVWlPaUpwYm1ScFkyRjBiM0p6TG5SemVDSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxS2lCQWFuTjRJR3B6ZUNBcUwxeHVhVzF3YjNKMElIc2dTbE5ZTENCU1pXRmpkRTV2WkdVZ2ZTQm1jbTl0SUNkeVpXRmpkQ2M3WEc1cGJYQnZjblFnZXlCcWMzZ3NJR3RsZVdaeVlXMWxjeUI5SUdaeWIyMGdKMEJsYlc5MGFXOXVMM0psWVdOMEp6dGNibHh1YVcxd2IzSjBJSHRjYmlBZ1EyOXRiVzl1VUhKdmNITkJibVJEYkdGemMwNWhiV1VzWEc0Z0lFTlRVMDlpYW1WamRGZHBkR2hNWVdKbGJDeGNiaUFnUjNKdmRYQkNZWE5sTEZ4dWZTQm1jbTl0SUNjdUxpOTBlWEJsY3ljN1hHNXBiWEJ2Y25RZ2V5Qm5aWFJUZEhsc1pWQnliM0J6SUgwZ1puSnZiU0FuTGk0dmRYUnBiSE1uTzF4dVhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JpOHZJRVJ5YjNCa2IzZHVJQ1lnUTJ4bFlYSWdTV052Ym5OY2JpOHZJRDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4dVhHNWpiMjV6ZENCVGRtY2dQU0FvZTF4dUlDQnphWHBsTEZ4dUlDQXVMaTV3Y205d2MxeHVmVG9nU2xOWUxrbHVkSEpwYm5OcFkwVnNaVzFsYm5Seld5ZHpkbWNuWFNBbUlIc2djMmw2WlRvZ2JuVnRZbVZ5SUgwcElEMCtJQ2hjYmlBZ1BITjJaMXh1SUNBZ0lHaGxhV2RvZEQxN2MybDZaWDFjYmlBZ0lDQjNhV1IwYUQxN2MybDZaWDFjYmlBZ0lDQjJhV1YzUW05NFBWd2lNQ0F3SURJd0lESXdYQ0pjYmlBZ0lDQmhjbWxoTFdocFpHUmxiajFjSW5SeWRXVmNJbHh1SUNBZ0lHWnZZM1Z6WVdKc1pUMWNJbVpoYkhObFhDSmNiaUFnSUNCamMzTTllM3RjYmlBZ0lDQWdJR1JwYzNCc1lYazZJQ2RwYm14cGJtVXRZbXh2WTJzbkxGeHVJQ0FnSUNBZ1ptbHNiRG9nSjJOMWNuSmxiblJEYjJ4dmNpY3NYRzRnSUNBZ0lDQnNhVzVsU0dWcFoyaDBPaUF4TEZ4dUlDQWdJQ0FnYzNSeWIydGxPaUFuWTNWeWNtVnVkRU52Ykc5eUp5eGNiaUFnSUNBZ0lITjBjbTlyWlZkcFpIUm9PaUF3TEZ4dUlDQWdJSDE5WEc0Z0lDQWdleTR1TG5CeWIzQnpmVnh1SUNBdlBseHVLVHRjYmx4dVpYaHdiM0owSUhSNWNHVWdRM0p2YzNOSlkyOXVVSEp2Y0hNZ1BTQktVMWd1U1c1MGNtbHVjMmxqUld4bGJXVnVkSE5iSjNOMlp5ZGRJQ1lnZXlCemFYcGxQem9nYm5WdFltVnlJSDA3WEc1bGVIQnZjblFnWTI5dWMzUWdRM0p2YzNOSlkyOXVJRDBnS0hCeWIzQnpPaUJEY205emMwbGpiMjVRY205d2N5a2dQVDRnS0Z4dUlDQThVM1puSUhOcGVtVTllekl3ZlNCN0xpNHVjSEp2Y0hOOVBseHVJQ0FnSUR4d1lYUm9JR1E5WENKTk1UUXVNelE0SURFMExqZzBPV010TUM0ME5qa2dNQzQwTmprdE1TNHlNamtnTUM0ME5qa3RNUzQyT1RjZ01Hd3RNaTQyTlRFdE15NHdNekF0TWk0Mk5URWdNeTR3TWpsakxUQXVORFk1SURBdU5EWTVMVEV1TWpJNUlEQXVORFk1TFRFdU5qazNJREF0TUM0ME5qa3RNQzQwTmprdE1DNDBOamt0TVM0eU1qa2dNQzB4TGpZNU4yd3lMamMxT0MwekxqRTFMVEl1TnpVNUxUTXVNVFV5WXkwd0xqUTJPUzB3TGpRMk9TMHdMalEyT1MweExqSXlPQ0F3TFRFdU5qazNjekV1TWpJNExUQXVORFk1SURFdU5qazNJREJzTWk0Mk5USWdNeTR3TXpFZ01pNDJOVEV0TXk0d016RmpNQzQwTmprdE1DNDBOamtnTVM0eU1qZ3RNQzQwTmprZ01TNDJPVGNnTUhNd0xqUTJPU0F4TGpJeU9TQXdJREV1TmprM2JDMHlMamMxT0NBekxqRTFNaUF5TGpjMU9DQXpMakUxWXpBdU5EWTVJREF1TkRZNUlEQXVORFk1SURFdU1qSTVJREFnTVM0Mk9UaDZYQ0lnTHo1Y2JpQWdQQzlUZG1jK1hHNHBPMXh1Wlhod2IzSjBJSFI1Y0dVZ1JHOTNia05vWlhaeWIyNVFjbTl3Y3lBOUlFcFRXQzVKYm5SeWFXNXphV05GYkdWdFpXNTBjMXNuYzNabkoxMGdKaUI3SUhOcGVtVS9PaUJ1ZFcxaVpYSWdmVHRjYm1WNGNHOXlkQ0JqYjI1emRDQkViM2R1UTJobGRuSnZiaUE5SUNod2NtOXdjem9nUkc5M2JrTm9aWFp5YjI1UWNtOXdjeWtnUFQ0Z0tGeHVJQ0E4VTNabklITnBlbVU5ZXpJd2ZTQjdMaTR1Y0hKdmNITjlQbHh1SUNBZ0lEeHdZWFJvSUdROVhDSk5OQzQxTVRZZ055NDFORGhqTUM0ME16WXRNQzQwTkRZZ01TNHdORE10TUM0ME9ERWdNUzQxTnpZZ01Hd3pMamt3T0NBekxqYzBOeUF6TGprd09DMHpMamMwTjJNd0xqVXpNeTB3TGpRNE1TQXhMakUwTVMwd0xqUTBOaUF4TGpVM05DQXdJREF1TkRNMklEQXVORFExSURBdU5EQTRJREV1TVRrM0lEQWdNUzQyTVRVdE1DNDBNRFlnTUM0ME1UZ3ROQzQyT1RVZ05DNDFNREl0TkM0Mk9UVWdOQzQxTURJdE1DNHlNVGNnTUM0eU1qTXRNQzQxTURJZ01DNHpNelV0TUM0M09EY2dNQzR6TXpWekxUQXVOVGN0TUM0eE1USXRNQzQzT0RrdE1DNHpNelZqTUNBd0xUUXVNamczTFRRdU1EZzBMVFF1TmprMUxUUXVOVEF5Y3kwd0xqUXpOaTB4TGpFM0lEQXRNUzQyTVRWNlhDSWdMejVjYmlBZ1BDOVRkbWMrWEc0cE8xeHVYRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNiaTh2SUVSeWIzQmtiM2R1SUNZZ1EyeGxZWElnUW5WMGRHOXVjMXh1THk4Z1BUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnUkhKdmNHUnZkMjVKYm1ScFkyRjBiM0pRY205d2N6eGNiaUFnVDNCMGFXOXVJRDBnZFc1cmJtOTNiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRnUFNCaWIyOXNaV0Z1TEZ4dUlDQkhjbTkxY0NCbGVIUmxibVJ6SUVkeWIzVndRbUZ6WlR4UGNIUnBiMjQrSUQwZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo1Y2JqNGdaWGgwWlc1a2N5QkRiMjF0YjI1UWNtOXdjMEZ1WkVOc1lYTnpUbUZ0WlR4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQaUI3WEc0Z0lDOHFLaUJVYUdVZ1kyaHBiR1J5Wlc0Z2RHOGdZbVVnY21WdVpHVnlaV1FnYVc1emFXUmxJSFJvWlNCcGJtUnBZMkYwYjNJdUlDb3ZYRzRnSUdOb2FXeGtjbVZ1UHpvZ1VtVmhZM1JPYjJSbE8xeHVJQ0F2S2lvZ1VISnZjSE1nZEdoaGRDQjNhV3hzSUdKbElIQmhjM05sWkNCdmJpQjBieUIwYUdVZ1kyaHBiR1J5Wlc0dUlDb3ZYRzRnSUdsdWJtVnlVSEp2Y0hNNklFcFRXQzVKYm5SeWFXNXphV05GYkdWdFpXNTBjMXNuWkdsMkoxMDdYRzRnSUM4cUtpQlVhR1VnWm05amRYTmxaQ0J6ZEdGMFpTQnZaaUIwYUdVZ2MyVnNaV04wTGlBcUwxeHVJQ0JwYzBadlkzVnpaV1E2SUdKdmIyeGxZVzQ3WEc0Z0lHbHpSR2x6WVdKc1pXUTZJR0p2YjJ4bFlXNDdYRzU5WEc1Y2JtTnZibk4wSUdKaGMyVkRVMU1nUFNBOFhHNGdJRTl3ZEdsdmJpeGNiaUFnU1hOTmRXeDBhU0JsZUhSbGJtUnpJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNWNiajRvWEc0Z0lIdGNiaUFnSUNCcGMwWnZZM1Z6WldRc1hHNGdJQ0FnZEdobGJXVTZJSHRjYmlBZ0lDQWdJSE53WVdOcGJtYzZJSHNnWW1GelpWVnVhWFFnZlN4Y2JpQWdJQ0FnSUdOdmJHOXljeXhjYmlBZ0lDQjlMRnh1SUNCOU9seHVJQ0FnSUh3Z1JISnZjR1J2ZDI1SmJtUnBZMkYwYjNKUWNtOXdjenhQY0hScGIyNHNJRWx6VFhWc2RHa3NJRWR5YjNWd1BseHVJQ0FnSUh3Z1EyeGxZWEpKYm1ScFkyRjBiM0pRY205d2N6eFBjSFJwYjI0c0lFbHpUWFZzZEdrc0lFZHliM1Z3UGl4Y2JpQWdkVzV6ZEhsc1pXUTZJR0p2YjJ4bFlXNWNiaWs2SUVOVFUwOWlhbVZqZEZkcGRHaE1ZV0psYkNBOVBpQW9lMXh1SUNCc1lXSmxiRG9nSjJsdVpHbGpZWFJ2Y2tOdmJuUmhhVzVsY2ljc1hHNGdJR1JwYzNCc1lYazZJQ2RtYkdWNEp5eGNiaUFnZEhKaGJuTnBkR2x2YmpvZ0oyTnZiRzl5SURFMU1HMXpKeXhjYmlBZ0xpNHVLSFZ1YzNSNWJHVmtYRzRnSUNBZ1B5QjdmVnh1SUNBZ0lEb2dlMXh1SUNBZ0lDQWdJQ0JqYjJ4dmNqb2dhWE5HYjJOMWMyVmtJRDhnWTI5c2IzSnpMbTVsZFhSeVlXdzJNQ0E2SUdOdmJHOXljeTV1WlhWMGNtRnNNakFzWEc0Z0lDQWdJQ0FnSUhCaFpHUnBibWM2SUdKaGMyVlZibWwwSUNvZ01peGNiaUFnSUNBZ0lDQWdKenBvYjNabGNpYzZJSHRjYmlBZ0lDQWdJQ0FnSUNCamIyeHZjam9nYVhOR2IyTjFjMlZrSUQ4Z1kyOXNiM0p6TG01bGRYUnlZV3c0TUNBNklHTnZiRzl5Y3k1dVpYVjBjbUZzTkRBc1hHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQjlLU3hjYm4wcE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1pISnZjR1J2ZDI1SmJtUnBZMkYwYjNKRFUxTWdQU0JpWVhObFExTlRPMXh1Wlhod2IzSjBJR052Ym5OMElFUnliM0JrYjNkdVNXNWthV05oZEc5eUlEMGdQRnh1SUNCUGNIUnBiMjRzWEc0Z0lFbHpUWFZzZEdrZ1pYaDBaVzVrY3lCaWIyOXNaV0Z1TEZ4dUlDQkhjbTkxY0NCbGVIUmxibVJ6SUVkeWIzVndRbUZ6WlR4UGNIUnBiMjQrWEc0K0tGeHVJQ0J3Y205d2N6b2dSSEp2Y0dSdmQyNUpibVJwWTJGMGIzSlFjbTl3Y3p4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQbHh1S1NBOVBpQjdYRzRnSUdOdmJuTjBJSHNnWTJocGJHUnlaVzRzSUdsdWJtVnlVSEp2Y0hNZ2ZTQTlJSEJ5YjNCek8xeHVJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lEeGthWFpjYmlBZ0lDQWdJSHN1TGk1blpYUlRkSGxzWlZCeWIzQnpLSEJ5YjNCekxDQW5aSEp2Y0dSdmQyNUpibVJwWTJGMGIzSW5MQ0I3WEc0Z0lDQWdJQ0FnSUdsdVpHbGpZWFJ2Y2pvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnSjJSeWIzQmtiM2R1TFdsdVpHbGpZWFJ2Y2ljNklIUnlkV1VzWEc0Z0lDQWdJQ0I5S1gxY2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lENWNiaUFnSUNBZ0lIdGphR2xzWkhKbGJpQjhmQ0E4Ukc5M2JrTm9aWFp5YjI0Z0x6NTlYRzRnSUNBZ1BDOWthWFkrWEc0Z0lDazdYRzU5TzF4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFTnNaV0Z5U1c1a2FXTmhkRzl5VUhKdmNITThYRzRnSUU5d2RHbHZiaUE5SUhWdWEyNXZkMjRzWEc0Z0lFbHpUWFZzZEdrZ1pYaDBaVzVrY3lCaWIyOXNaV0Z1SUQwZ1ltOXZiR1ZoYml4Y2JpQWdSM0p2ZFhBZ1pYaDBaVzVrY3lCSGNtOTFjRUpoYzJVOFQzQjBhVzl1UGlBOUlFZHliM1Z3UW1GelpUeFBjSFJwYjI0K1hHNCtJR1Y0ZEdWdVpITWdRMjl0Ylc5dVVISnZjSE5CYm1SRGJHRnpjMDVoYldVOFQzQjBhVzl1TENCSmMwMTFiSFJwTENCSGNtOTFjRDRnZTF4dUlDQXZLaW9nVkdobElHTm9hV3hrY21WdUlIUnZJR0psSUhKbGJtUmxjbVZrSUdsdWMybGtaU0IwYUdVZ2FXNWthV05oZEc5eUxpQXFMMXh1SUNCamFHbHNaSEpsYmo4NklGSmxZV04wVG05a1pUdGNiaUFnTHlvcUlGQnliM0J6SUhSb1lYUWdkMmxzYkNCaVpTQndZWE56WldRZ2IyNGdkRzhnZEdobElHTm9hV3hrY21WdUxpQXFMMXh1SUNCcGJtNWxjbEJ5YjNCek9pQktVMWd1U1c1MGNtbHVjMmxqUld4bGJXVnVkSE5iSjJScGRpZGRPMXh1SUNBdktpb2dWR2hsSUdadlkzVnpaV1FnYzNSaGRHVWdiMllnZEdobElITmxiR1ZqZEM0Z0tpOWNiaUFnYVhOR2IyTjFjMlZrT2lCaWIyOXNaV0Z1TzF4dWZWeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyeGxZWEpKYm1ScFkyRjBiM0pEVTFNZ1BTQmlZWE5sUTFOVE8xeHVaWGh3YjNKMElHTnZibk4wSUVOc1pXRnlTVzVrYVdOaGRHOXlJRDBnUEZ4dUlDQlBjSFJwYjI0c1hHNGdJRWx6VFhWc2RHa2daWGgwWlc1a2N5QmliMjlzWldGdUxGeHVJQ0JIY205MWNDQmxlSFJsYm1SeklFZHliM1Z3UW1GelpUeFBjSFJwYjI0K1hHNCtLRnh1SUNCd2NtOXdjem9nUTJ4bFlYSkpibVJwWTJGMGIzSlFjbTl3Y3p4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQbHh1S1NBOVBpQjdYRzRnSUdOdmJuTjBJSHNnWTJocGJHUnlaVzRzSUdsdWJtVnlVSEp2Y0hNZ2ZTQTlJSEJ5YjNCek8xeHVJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lEeGthWFpjYmlBZ0lDQWdJSHN1TGk1blpYUlRkSGxzWlZCeWIzQnpLSEJ5YjNCekxDQW5ZMnhsWVhKSmJtUnBZMkYwYjNJbkxDQjdYRzRnSUNBZ0lDQWdJR2x1WkdsallYUnZjam9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdKMk5zWldGeUxXbHVaR2xqWVhSdmNpYzZJSFJ5ZFdVc1hHNGdJQ0FnSUNCOUtYMWNiaUFnSUNBZ0lIc3VMaTVwYm01bGNsQnliM0J6ZlZ4dUlDQWdJRDVjYmlBZ0lDQWdJSHRqYUdsc1pISmxiaUI4ZkNBOFEzSnZjM05KWTI5dUlDOCtmVnh1SUNBZ0lEd3ZaR2wyUGx4dUlDQXBPMXh1ZlR0Y2JseHVMeThnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNHZMeUJUWlhCaGNtRjBiM0pjYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUVsdVpHbGpZWFJ2Y2xObGNHRnlZWFJ2Y2xCeWIzQnpQRnh1SUNCUGNIUnBiMjRnUFNCMWJtdHViM2R1TEZ4dUlDQkpjMDExYkhScElHVjRkR1Z1WkhNZ1ltOXZiR1ZoYmlBOUlHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo0Z1BTQkhjbTkxY0VKaGMyVThUM0IwYVc5dVBseHVQaUJsZUhSbGJtUnpJRU52YlcxdmJsQnliM0J6UVc1a1EyeGhjM05PWVcxbFBFOXdkR2x2Yml3Z1NYTk5kV3gwYVN3Z1IzSnZkWEErSUh0Y2JpQWdhWE5FYVhOaFlteGxaRG9nWW05dmJHVmhianRjYmlBZ2FYTkdiMk4xYzJWa09pQmliMjlzWldGdU8xeHVJQ0JwYm01bGNsQnliM0J6UHpvZ1NsTllMa2x1ZEhKcGJuTnBZMFZzWlcxbGJuUnpXeWR6Y0dGdUoxMDdYRzU5WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYm1ScFkyRjBiM0pUWlhCaGNtRjBiM0pEVTFNZ1BTQThYRzRnSUU5d2RHbHZiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajVjYmo0b1hHNGdJSHRjYmlBZ0lDQnBjMFJwYzJGaWJHVmtMRnh1SUNBZ0lIUm9aVzFsT2lCN1hHNGdJQ0FnSUNCemNHRmphVzVuT2lCN0lHSmhjMlZWYm1sMElIMHNYRzRnSUNBZ0lDQmpiMnh2Y25Nc1hHNGdJQ0FnZlN4Y2JpQWdmVG9nU1c1a2FXTmhkRzl5VTJWd1lYSmhkRzl5VUhKdmNITThUM0IwYVc5dUxDQkpjMDExYkhScExDQkhjbTkxY0Q0c1hHNGdJSFZ1YzNSNWJHVmtPaUJpYjI5c1pXRnVYRzRwT2lCRFUxTlBZbXBsWTNSWGFYUm9UR0ZpWld3Z1BUNGdLSHRjYmlBZ2JHRmlaV3c2SUNkcGJtUnBZMkYwYjNKVFpYQmhjbUYwYjNJbkxGeHVJQ0JoYkdsbmJsTmxiR1k2SUNkemRISmxkR05vSnl4Y2JpQWdkMmxrZEdnNklERXNYRzRnSUM0dUxpaDFibk4wZVd4bFpGeHVJQ0FnSUQ4Z2UzMWNiaUFnSUNBNklIdGNiaUFnSUNBZ0lDQWdZbUZqYTJkeWIzVnVaRU52Ykc5eU9pQnBjMFJwYzJGaWJHVmtJRDhnWTI5c2IzSnpMbTVsZFhSeVlXd3hNQ0E2SUdOdmJHOXljeTV1WlhWMGNtRnNNakFzWEc0Z0lDQWdJQ0FnSUcxaGNtZHBia0p2ZEhSdmJUb2dZbUZ6WlZWdWFYUWdLaUF5TEZ4dUlDQWdJQ0FnSUNCdFlYSm5hVzVVYjNBNklHSmhjMlZWYm1sMElDb2dNaXhjYmlBZ0lDQWdJSDBwTEZ4dWZTazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQkpibVJwWTJGMGIzSlRaWEJoY21GMGIzSWdQU0E4WEc0Z0lFOXdkR2x2Yml4Y2JpQWdTWE5OZFd4MGFTQmxlSFJsYm1SeklHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo1Y2JqNG9YRzRnSUhCeWIzQnpPaUJKYm1ScFkyRjBiM0pUWlhCaGNtRjBiM0pRY205d2N6eFBjSFJwYjI0c0lFbHpUWFZzZEdrc0lFZHliM1Z3UGx4dUtTQTlQaUI3WEc0Z0lHTnZibk4wSUhzZ2FXNXVaWEpRY205d2N5QjlJRDBnY0hKdmNITTdYRzRnSUhKbGRIVnliaUFvWEc0Z0lDQWdQSE53WVc1Y2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lDQWdleTR1TG1kbGRGTjBlV3hsVUhKdmNITW9jSEp2Y0hNc0lDZHBibVJwWTJGMGIzSlRaWEJoY21GMGIzSW5MQ0I3WEc0Z0lDQWdJQ0FnSUNkcGJtUnBZMkYwYjNJdGMyVndZWEpoZEc5eUp6b2dkSEoxWlN4Y2JpQWdJQ0FnSUgwcGZWeHVJQ0FnSUM4K1hHNGdJQ2s3WEc1OU8xeHVYRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNiaTh2SUV4dllXUnBibWRjYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1WEc1amIyNXpkQ0JzYjJGa2FXNW5SRzkwUVc1cGJXRjBhVzl1Y3lBOUlHdGxlV1p5WVcxbGMyQmNiaUFnTUNVc0lEZ3dKU3dnTVRBd0pTQjdJRzl3WVdOcGRIazZJREE3SUgxY2JpQWdOREFsSUhzZ2IzQmhZMmwwZVRvZ01Uc2dmVnh1WUR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUd4dllXUnBibWRKYm1ScFkyRjBiM0pEVTFNZ1BTQThYRzRnSUU5d2RHbHZiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajVjYmo0b1hHNGdJSHRjYmlBZ0lDQnBjMFp2WTNWelpXUXNYRzRnSUNBZ2MybDZaU3hjYmlBZ0lDQjBhR1Z0WlRvZ2UxeHVJQ0FnSUNBZ1kyOXNiM0p6TEZ4dUlDQWdJQ0FnYzNCaFkybHVaem9nZXlCaVlYTmxWVzVwZENCOUxGeHVJQ0FnSUgwc1hHNGdJSDA2SUV4dllXUnBibWRKYm1ScFkyRjBiM0pRY205d2N6eFBjSFJwYjI0c0lFbHpUWFZzZEdrc0lFZHliM1Z3UGl4Y2JpQWdkVzV6ZEhsc1pXUTZJR0p2YjJ4bFlXNWNiaWs2SUVOVFUwOWlhbVZqZEZkcGRHaE1ZV0psYkNBOVBpQW9lMXh1SUNCc1lXSmxiRG9nSjJ4dllXUnBibWRKYm1ScFkyRjBiM0luTEZ4dUlDQmthWE53YkdGNU9pQW5abXhsZUNjc1hHNGdJSFJ5WVc1emFYUnBiMjQ2SUNkamIyeHZjaUF4TlRCdGN5Y3NYRzRnSUdGc2FXZHVVMlZzWmpvZ0oyTmxiblJsY2ljc1hHNGdJR1p2Ym5SVGFYcGxPaUJ6YVhwbExGeHVJQ0JzYVc1bFNHVnBaMmgwT2lBeExGeHVJQ0J0WVhKbmFXNVNhV2RvZERvZ2MybDZaU3hjYmlBZ2RHVjRkRUZzYVdkdU9pQW5ZMlZ1ZEdWeUp5eGNiaUFnZG1WeWRHbGpZV3hCYkdsbmJqb2dKMjFwWkdSc1pTY3NYRzRnSUM0dUxpaDFibk4wZVd4bFpGeHVJQ0FnSUQ4Z2UzMWNiaUFnSUNBNklIdGNiaUFnSUNBZ0lDQWdZMjlzYjNJNklHbHpSbTlqZFhObFpDQS9JR052Ykc5eWN5NXVaWFYwY21Gc05qQWdPaUJqYjJ4dmNuTXVibVYxZEhKaGJESXdMRnh1SUNBZ0lDQWdJQ0J3WVdSa2FXNW5PaUJpWVhObFZXNXBkQ0FxSURJc1hHNGdJQ0FnSUNCOUtTeGNibjBwTzF4dVhHNXBiblJsY21aaFkyVWdURzloWkdsdVowUnZkRkJ5YjNCeklIdGNiaUFnWkdWc1lYazZJRzUxYldKbGNqdGNiaUFnYjJabWMyVjBPaUJpYjI5c1pXRnVPMXh1ZlZ4dVkyOXVjM1FnVEc5aFpHbHVaMFJ2ZENBOUlDaDdJR1JsYkdGNUxDQnZabVp6WlhRZ2ZUb2dURzloWkdsdVowUnZkRkJ5YjNCektTQTlQaUFvWEc0Z0lEeHpjR0Z1WEc0Z0lDQWdZM056UFh0N1hHNGdJQ0FnSUNCaGJtbHRZWFJwYjI0NklHQWtlMnh2WVdScGJtZEViM1JCYm1sdFlYUnBiMjV6ZlNBeGN5QmxZWE5sTFdsdUxXOTFkQ0FrZTJSbGJHRjVmVzF6SUdsdVptbHVhWFJsTzJBc1hHNGdJQ0FnSUNCaVlXTnJaM0p2ZFc1a1EyOXNiM0k2SUNkamRYSnlaVzUwUTI5c2IzSW5MRnh1SUNBZ0lDQWdZbTl5WkdWeVVtRmthWFZ6T2lBbk1XVnRKeXhjYmlBZ0lDQWdJR1JwYzNCc1lYazZJQ2RwYm14cGJtVXRZbXh2WTJzbkxGeHVJQ0FnSUNBZ2JXRnlaMmx1VEdWbWREb2diMlptYzJWMElEOGdKekZsYlNjZ09pQjFibVJsWm1sdVpXUXNYRzRnSUNBZ0lDQm9aV2xuYUhRNklDY3haVzBuTEZ4dUlDQWdJQ0FnZG1WeWRHbGpZV3hCYkdsbmJqb2dKM1J2Y0Njc1hHNGdJQ0FnSUNCM2FXUjBhRG9nSnpGbGJTY3NYRzRnSUNBZ2ZYMWNiaUFnTHo1Y2JpazdYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnVEc5aFpHbHVaMGx1WkdsallYUnZjbEJ5YjNCelBGeHVJQ0JQY0hScGIyNGdQU0IxYm10dWIzZHVMRnh1SUNCSmMwMTFiSFJwSUdWNGRHVnVaSE1nWW05dmJHVmhiaUE5SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajRnUFNCSGNtOTFjRUpoYzJVOFQzQjBhVzl1UGx4dVBpQmxlSFJsYm1SeklFTnZiVzF2YmxCeWIzQnpRVzVrUTJ4aGMzTk9ZVzFsUEU5d2RHbHZiaXdnU1hOTmRXeDBhU3dnUjNKdmRYQStJSHRjYmlBZ0x5b3FJRkJ5YjNCeklIUm9ZWFFnZDJsc2JDQmlaU0J3WVhOelpXUWdiMjRnZEc4Z2RHaGxJR05vYVd4a2NtVnVMaUFxTDF4dUlDQnBibTVsY2xCeWIzQnpPaUJLVTFndVNXNTBjbWx1YzJsalJXeGxiV1Z1ZEhOYkoyUnBkaWRkTzF4dUlDQXZLaW9nVkdobElHWnZZM1Z6WldRZ2MzUmhkR1VnYjJZZ2RHaGxJSE5sYkdWamRDNGdLaTljYmlBZ2FYTkdiMk4xYzJWa09pQmliMjlzWldGdU8xeHVJQ0JwYzBScGMyRmliR1ZrT2lCaWIyOXNaV0Z1TzF4dUlDQXZLaW9nVTJWMElITnBlbVVnYjJZZ2RHaGxJR052Ym5SaGFXNWxjaTRnS2k5Y2JpQWdjMmw2WlRvZ2JuVnRZbVZ5TzF4dWZWeHVaWGh3YjNKMElHTnZibk4wSUV4dllXUnBibWRKYm1ScFkyRjBiM0lnUFNBOFhHNGdJRTl3ZEdsdmJpeGNiaUFnU1hOTmRXeDBhU0JsZUhSbGJtUnpJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNWNiajRvZTF4dUlDQnBibTVsY2xCeWIzQnpMRnh1SUNCcGMxSjBiQ3hjYmlBZ2MybDZaU0E5SURRc1hHNGdJQzR1TG5KbGMzUlFjbTl3YzF4dWZUb2dURzloWkdsdVowbHVaR2xqWVhSdmNsQnliM0J6UEU5d2RHbHZiaXdnU1hOTmRXeDBhU3dnUjNKdmRYQStLU0E5UGlCN1hHNGdJSEpsZEhWeWJpQW9YRzRnSUNBZ1BHUnBkbHh1SUNBZ0lDQWdleTR1TG1kbGRGTjBlV3hsVUhKdmNITW9YRzRnSUNBZ0lDQWdJSHNnTGk0dWNtVnpkRkJ5YjNCekxDQnBibTVsY2xCeWIzQnpMQ0JwYzFKMGJDd2djMmw2WlNCOUxGeHVJQ0FnSUNBZ0lDQW5iRzloWkdsdVowbHVaR2xqWVhSdmNpY3NYRzRnSUNBZ0lDQWdJSHRjYmlBZ0lDQWdJQ0FnSUNCcGJtUnBZMkYwYjNJNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUNBZ0oyeHZZV1JwYm1jdGFXNWthV05oZEc5eUp6b2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0tYMWNiaUFnSUNBZ0lIc3VMaTVwYm01bGNsQnliM0J6ZlZ4dUlDQWdJRDVjYmlBZ0lDQWdJRHhNYjJGa2FXNW5SRzkwSUdSbGJHRjVQWHN3ZlNCdlptWnpaWFE5ZTJselVuUnNmU0F2UGx4dUlDQWdJQ0FnUEV4dllXUnBibWRFYjNRZ1pHVnNZWGs5ZXpFMk1IMGdiMlptYzJWMElDOCtYRzRnSUNBZ0lDQThURzloWkdsdVowUnZkQ0JrWld4aGVUMTdNekl3ZlNCdlptWnpaWFE5ZXlGcGMxSjBiSDBnTHo1Y2JpQWdJQ0E4TDJScGRqNWNiaUFnS1R0Y2JuMDdYRzRpWFgwPSAqL1wiKVxuICB9KTtcbn07XG52YXIgTG9hZGluZ0luZGljYXRvciA9IGZ1bmN0aW9uIExvYWRpbmdJbmRpY2F0b3IoX3JlZjcpIHtcbiAgdmFyIGlubmVyUHJvcHMgPSBfcmVmNy5pbm5lclByb3BzLFxuICAgIGlzUnRsID0gX3JlZjcuaXNSdGwsXG4gICAgX3JlZjckc2l6ZSA9IF9yZWY3LnNpemUsXG4gICAgc2l6ZSA9IF9yZWY3JHNpemUgPT09IHZvaWQgMCA/IDQgOiBfcmVmNyRzaXplLFxuICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmNywgX2V4Y2x1ZGVkMik7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe30sIGdldFN0eWxlUHJvcHMoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCByZXN0UHJvcHMpLCB7fSwge1xuICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHMsXG4gICAgaXNSdGw6IGlzUnRsLFxuICAgIHNpemU6IHNpemVcbiAgfSksICdsb2FkaW5nSW5kaWNhdG9yJywge1xuICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAnbG9hZGluZy1pbmRpY2F0b3InOiB0cnVlXG4gIH0pLCBpbm5lclByb3BzKSwganN4KExvYWRpbmdEb3QsIHtcbiAgICBkZWxheTogMCxcbiAgICBvZmZzZXQ6IGlzUnRsXG4gIH0pLCBqc3goTG9hZGluZ0RvdCwge1xuICAgIGRlbGF5OiAxNjAsXG4gICAgb2Zmc2V0OiB0cnVlXG4gIH0pLCBqc3goTG9hZGluZ0RvdCwge1xuICAgIGRlbGF5OiAzMjAsXG4gICAgb2Zmc2V0OiAhaXNSdGxcbiAgfSkpO1xufTtcblxudmFyIGNzcyQxID0gZnVuY3Rpb24gY3NzKF9yZWYsIHVuc3R5bGVkKSB7XG4gIHZhciBpc0Rpc2FibGVkID0gX3JlZi5pc0Rpc2FibGVkLFxuICAgIGlzRm9jdXNlZCA9IF9yZWYuaXNGb2N1c2VkLFxuICAgIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzLFxuICAgIGJvcmRlclJhZGl1cyA9IF9yZWYkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmc7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICBsYWJlbDogJ2NvbnRyb2wnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgbWluSGVpZ2h0OiBzcGFjaW5nLmNvbnRyb2xIZWlnaHQsXG4gICAgb3V0bGluZTogJzAgIWltcG9ydGFudCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAxMDBtcydcbiAgfSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDUgOiBjb2xvcnMubmV1dHJhbDAsXG4gICAgYm9yZGVyQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogaXNGb2N1c2VkID8gY29sb3JzLnByaW1hcnkgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgIGJvcmRlcldpZHRoOiAxLFxuICAgIGJveFNoYWRvdzogaXNGb2N1c2VkID8gXCIwIDAgMCAxcHggXCIuY29uY2F0KGNvbG9ycy5wcmltYXJ5KSA6IHVuZGVmaW5lZCxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMucHJpbWFyeSA6IGNvbG9ycy5uZXV0cmFsMzBcbiAgICB9XG4gIH0pO1xufTtcbnZhciBDb250cm9sID0gZnVuY3Rpb24gQ29udHJvbChwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICBpc0ZvY3VzZWQgPSBwcm9wcy5pc0ZvY3VzZWQsXG4gICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICBtZW51SXNPcGVuID0gcHJvcHMubWVudUlzT3BlbjtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBpbm5lclJlZlxuICB9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAnY29udHJvbCcsIHtcbiAgICBjb250cm9sOiB0cnVlLFxuICAgICdjb250cm9sLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWQsXG4gICAgJ2NvbnRyb2wtLWlzLWZvY3VzZWQnOiBpc0ZvY3VzZWQsXG4gICAgJ2NvbnRyb2wtLW1lbnUtaXMtb3Blbic6IG1lbnVJc09wZW5cbiAgfSksIGlubmVyUHJvcHMsIHtcbiAgICBcImFyaWEtZGlzYWJsZWRcIjogaXNEaXNhYmxlZCB8fCB1bmRlZmluZWRcbiAgfSksIGNoaWxkcmVuKTtcbn07XG52YXIgQ29udHJvbCQxID0gQ29udHJvbDtcblxudmFyIF9leGNsdWRlZCQxID0gW1wiZGF0YVwiXTtcbnZhciBncm91cENTUyA9IGZ1bmN0aW9uIGdyb3VwQ1NTKF9yZWYsIHVuc3R5bGVkKSB7XG4gIHZhciBzcGFjaW5nID0gX3JlZi50aGVtZS5zcGFjaW5nO1xuICByZXR1cm4gdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBwYWRkaW5nQm90dG9tOiBzcGFjaW5nLmJhc2VVbml0ICogMixcbiAgICBwYWRkaW5nVG9wOiBzcGFjaW5nLmJhc2VVbml0ICogMlxuICB9O1xufTtcbnZhciBHcm91cCA9IGZ1bmN0aW9uIEdyb3VwKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgIGdldENsYXNzTmFtZXMgPSBwcm9wcy5nZXRDbGFzc05hbWVzLFxuICAgIEhlYWRpbmcgPSBwcm9wcy5IZWFkaW5nLFxuICAgIGhlYWRpbmdQcm9wcyA9IHByb3BzLmhlYWRpbmdQcm9wcyxcbiAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICBsYWJlbCA9IHByb3BzLmxhYmVsLFxuICAgIHRoZW1lID0gcHJvcHMudGhlbWUsXG4gICAgc2VsZWN0UHJvcHMgPSBwcm9wcy5zZWxlY3RQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2dyb3VwJywge1xuICAgIGdyb3VwOiB0cnVlXG4gIH0pLCBpbm5lclByb3BzKSwganN4KEhlYWRpbmcsIF9leHRlbmRzKHt9LCBoZWFkaW5nUHJvcHMsIHtcbiAgICBzZWxlY3RQcm9wczogc2VsZWN0UHJvcHMsXG4gICAgdGhlbWU6IHRoZW1lLFxuICAgIGdldFN0eWxlczogZ2V0U3R5bGVzLFxuICAgIGdldENsYXNzTmFtZXM6IGdldENsYXNzTmFtZXMsXG4gICAgY3g6IGN4XG4gIH0pLCBsYWJlbCksIGpzeChcImRpdlwiLCBudWxsLCBjaGlsZHJlbikpO1xufTtcbnZhciBncm91cEhlYWRpbmdDU1MgPSBmdW5jdGlvbiBncm91cEhlYWRpbmdDU1MoX3JlZjIsIHVuc3R5bGVkKSB7XG4gIHZhciBfcmVmMiR0aGVtZSA9IF9yZWYyLnRoZW1lLFxuICAgIGNvbG9ycyA9IF9yZWYyJHRoZW1lLmNvbG9ycyxcbiAgICBzcGFjaW5nID0gX3JlZjIkdGhlbWUuc3BhY2luZztcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIGxhYmVsOiAnZ3JvdXAnLFxuICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgIGRpc3BsYXk6ICdibG9jaydcbiAgfSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBjb2xvcjogY29sb3JzLm5ldXRyYWw0MCxcbiAgICBmb250U2l6ZTogJzc1JScsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIG1hcmdpbkJvdHRvbTogJzAuMjVlbScsXG4gICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcuYmFzZVVuaXQgKiAzLFxuICAgIHBhZGRpbmdSaWdodDogc3BhY2luZy5iYXNlVW5pdCAqIDMsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcbiAgfSk7XG59O1xudmFyIEdyb3VwSGVhZGluZyA9IGZ1bmN0aW9uIEdyb3VwSGVhZGluZyhwcm9wcykge1xuICB2YXIgX2NsZWFuQ29tbW9uUHJvcHMgPSBjbGVhbkNvbW1vblByb3BzKHByb3BzKTtcbiAgICBfY2xlYW5Db21tb25Qcm9wcy5kYXRhO1xuICAgIHZhciBpbm5lclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9jbGVhbkNvbW1vblByb3BzLCBfZXhjbHVkZWQkMSk7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe30sIGdldFN0eWxlUHJvcHMocHJvcHMsICdncm91cEhlYWRpbmcnLCB7XG4gICAgJ2dyb3VwLWhlYWRpbmcnOiB0cnVlXG4gIH0pLCBpbm5lclByb3BzKSk7XG59O1xudmFyIEdyb3VwJDEgPSBHcm91cDtcblxudmFyIF9leGNsdWRlZCA9IFtcImlubmVyUmVmXCIsIFwiaXNEaXNhYmxlZFwiLCBcImlzSGlkZGVuXCIsIFwiaW5wdXRDbGFzc05hbWVcIl07XG52YXIgaW5wdXRDU1MgPSBmdW5jdGlvbiBpbnB1dENTUyhfcmVmLCB1bnN0eWxlZCkge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZyxcbiAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7XG4gICAgdmlzaWJpbGl0eTogaXNEaXNhYmxlZCA/ICdoaWRkZW4nIDogJ3Zpc2libGUnLFxuICAgIC8vIGZvcmNlIGNzcyB0byByZWNvbXB1dGUgd2hlbiB2YWx1ZSBjaGFuZ2UgZHVlIHRvIEBlbW90aW9uIGJ1Zy5cbiAgICAvLyBXZSBjYW4gcmVtb3ZlIGl0IHdoZW5ldmVyIHRoZSBidWcgaXMgZml4ZWQuXG4gICAgdHJhbnNmb3JtOiB2YWx1ZSA/ICd0cmFuc2xhdGVaKDApJyA6ICcnXG4gIH0sIGNvbnRhaW5lclN0eWxlKSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBtYXJnaW46IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIHBhZGRpbmdCb3R0b206IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIHBhZGRpbmdUb3A6IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIGNvbG9yOiBjb2xvcnMubmV1dHJhbDgwXG4gIH0pO1xufTtcbnZhciBzcGFjaW5nU3R5bGUgPSB7XG4gIGdyaWRBcmVhOiAnMSAvIDInLFxuICBmb250OiAnaW5oZXJpdCcsXG4gIG1pbldpZHRoOiAnMnB4JyxcbiAgYm9yZGVyOiAwLFxuICBtYXJnaW46IDAsXG4gIG91dGxpbmU6IDAsXG4gIHBhZGRpbmc6IDBcbn07XG52YXIgY29udGFpbmVyU3R5bGUgPSB7XG4gIGZsZXg6ICcxIDEgYXV0bycsXG4gIGRpc3BsYXk6ICdpbmxpbmUtZ3JpZCcsXG4gIGdyaWRBcmVhOiAnMSAvIDEgLyAyIC8gMycsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcwIG1pbi1jb250ZW50JyxcbiAgJyY6YWZ0ZXInOiBfb2JqZWN0U3ByZWFkKHtcbiAgICBjb250ZW50OiAnYXR0cihkYXRhLXZhbHVlKSBcIiBcIicsXG4gICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgd2hpdGVTcGFjZTogJ3ByZSdcbiAgfSwgc3BhY2luZ1N0eWxlKVxufTtcbnZhciBpbnB1dFN0eWxlID0gZnVuY3Rpb24gaW5wdXRTdHlsZShpc0hpZGRlbikge1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgbGFiZWw6ICdpbnB1dCcsXG4gICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICBiYWNrZ3JvdW5kOiAwLFxuICAgIG9wYWNpdHk6IGlzSGlkZGVuID8gMCA6IDEsXG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9LCBzcGFjaW5nU3R5bGUpO1xufTtcbnZhciBJbnB1dCA9IGZ1bmN0aW9uIElucHV0KHByb3BzKSB7XG4gIHZhciBjeCA9IHByb3BzLmN4LFxuICAgIHZhbHVlID0gcHJvcHMudmFsdWU7XG4gIHZhciBfY2xlYW5Db21tb25Qcm9wcyA9IGNsZWFuQ29tbW9uUHJvcHMocHJvcHMpLFxuICAgIGlubmVyUmVmID0gX2NsZWFuQ29tbW9uUHJvcHMuaW5uZXJSZWYsXG4gICAgaXNEaXNhYmxlZCA9IF9jbGVhbkNvbW1vblByb3BzLmlzRGlzYWJsZWQsXG4gICAgaXNIaWRkZW4gPSBfY2xlYW5Db21tb25Qcm9wcy5pc0hpZGRlbixcbiAgICBpbnB1dENsYXNzTmFtZSA9IF9jbGVhbkNvbW1vblByb3BzLmlucHV0Q2xhc3NOYW1lLFxuICAgIGlubmVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX2NsZWFuQ29tbW9uUHJvcHMsIF9leGNsdWRlZCk7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe30sIGdldFN0eWxlUHJvcHMocHJvcHMsICdpbnB1dCcsIHtcbiAgICAnaW5wdXQtY29udGFpbmVyJzogdHJ1ZVxuICB9KSwge1xuICAgIFwiZGF0YS12YWx1ZVwiOiB2YWx1ZSB8fCAnJ1xuICB9KSwganN4KFwiaW5wdXRcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgaW5wdXQ6IHRydWVcbiAgICB9LCBpbnB1dENsYXNzTmFtZSksXG4gICAgcmVmOiBpbm5lclJlZixcbiAgICBzdHlsZTogaW5wdXRTdHlsZShpc0hpZGRlbiksXG4gICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgfSwgaW5uZXJQcm9wcykpKTtcbn07XG52YXIgSW5wdXQkMSA9IElucHV0O1xuXG52YXIgbXVsdGlWYWx1ZUNTUyA9IGZ1bmN0aW9uIG11bHRpVmFsdWVDU1MoX3JlZiwgdW5zdHlsZWQpIHtcbiAgdmFyIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgYm9yZGVyUmFkaXVzID0gX3JlZiR0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICBsYWJlbDogJ211bHRpVmFsdWUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBtaW5XaWR0aDogMFxuICB9LCB1bnN0eWxlZCA/IHt9IDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLm5ldXRyYWwxMCxcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyAvIDIsXG4gICAgbWFyZ2luOiBzcGFjaW5nLmJhc2VVbml0IC8gMlxuICB9KTtcbn07XG52YXIgbXVsdGlWYWx1ZUxhYmVsQ1NTID0gZnVuY3Rpb24gbXVsdGlWYWx1ZUxhYmVsQ1NTKF9yZWYyLCB1bnN0eWxlZCkge1xuICB2YXIgX3JlZjIkdGhlbWUgPSBfcmVmMi50aGVtZSxcbiAgICBib3JkZXJSYWRpdXMgPSBfcmVmMiR0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgY29sb3JzID0gX3JlZjIkdGhlbWUuY29sb3JzLFxuICAgIGNyb3BXaXRoRWxsaXBzaXMgPSBfcmVmMi5jcm9wV2l0aEVsbGlwc2lzO1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzogY3JvcFdpdGhFbGxpcHNpcyB8fCBjcm9wV2l0aEVsbGlwc2lzID09PSB1bmRlZmluZWQgPyAnZWxsaXBzaXMnIDogdW5kZWZpbmVkLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gIH0sIHVuc3R5bGVkID8ge30gOiB7XG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMgLyAyLFxuICAgIGNvbG9yOiBjb2xvcnMubmV1dHJhbDgwLFxuICAgIGZvbnRTaXplOiAnODUlJyxcbiAgICBwYWRkaW5nOiAzLFxuICAgIHBhZGRpbmdMZWZ0OiA2XG4gIH0pO1xufTtcbnZhciBtdWx0aVZhbHVlUmVtb3ZlQ1NTID0gZnVuY3Rpb24gbXVsdGlWYWx1ZVJlbW92ZUNTUyhfcmVmMywgdW5zdHlsZWQpIHtcbiAgdmFyIF9yZWYzJHRoZW1lID0gX3JlZjMudGhlbWUsXG4gICAgc3BhY2luZyA9IF9yZWYzJHRoZW1lLnNwYWNpbmcsXG4gICAgYm9yZGVyUmFkaXVzID0gX3JlZjMkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgIGNvbG9ycyA9IF9yZWYzJHRoZW1lLmNvbG9ycyxcbiAgICBpc0ZvY3VzZWQgPSBfcmVmMy5pc0ZvY3VzZWQ7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyAvIDIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMuZGFuZ2VyTGlnaHQgOiB1bmRlZmluZWQsXG4gICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcuYmFzZVVuaXQsXG4gICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nLmJhc2VVbml0LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5kYW5nZXJMaWdodCxcbiAgICAgIGNvbG9yOiBjb2xvcnMuZGFuZ2VyXG4gICAgfVxuICB9KTtcbn07XG52YXIgTXVsdGlWYWx1ZUdlbmVyaWMgPSBmdW5jdGlvbiBNdWx0aVZhbHVlR2VuZXJpYyhfcmVmNCkge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmNC5jaGlsZHJlbixcbiAgICBpbm5lclByb3BzID0gX3JlZjQuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBpbm5lclByb3BzLCBjaGlsZHJlbik7XG59O1xudmFyIE11bHRpVmFsdWVDb250YWluZXIgPSBNdWx0aVZhbHVlR2VuZXJpYztcbnZhciBNdWx0aVZhbHVlTGFiZWwgPSBNdWx0aVZhbHVlR2VuZXJpYztcbmZ1bmN0aW9uIE11bHRpVmFsdWVSZW1vdmUoX3JlZjUpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZjUuY2hpbGRyZW4sXG4gICAgaW5uZXJQcm9wcyA9IF9yZWY1LmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIHJvbGU6IFwiYnV0dG9uXCJcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuIHx8IGpzeChDcm9zc0ljb24sIHtcbiAgICBzaXplOiAxNFxuICB9KSk7XG59XG52YXIgTXVsdGlWYWx1ZSA9IGZ1bmN0aW9uIE11bHRpVmFsdWUocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgY29tcG9uZW50cyA9IHByb3BzLmNvbXBvbmVudHMsXG4gICAgZGF0YSA9IHByb3BzLmRhdGEsXG4gICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgcmVtb3ZlUHJvcHMgPSBwcm9wcy5yZW1vdmVQcm9wcyxcbiAgICBzZWxlY3RQcm9wcyA9IHByb3BzLnNlbGVjdFByb3BzO1xuICB2YXIgQ29udGFpbmVyID0gY29tcG9uZW50cy5Db250YWluZXIsXG4gICAgTGFiZWwgPSBjb21wb25lbnRzLkxhYmVsLFxuICAgIFJlbW92ZSA9IGNvbXBvbmVudHMuUmVtb3ZlO1xuICByZXR1cm4ganN4KENvbnRhaW5lciwge1xuICAgIGRhdGE6IGRhdGEsXG4gICAgaW5uZXJQcm9wczogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAnbXVsdGlWYWx1ZScsIHtcbiAgICAgICdtdWx0aS12YWx1ZSc6IHRydWUsXG4gICAgICAnbXVsdGktdmFsdWUtLWlzLWRpc2FibGVkJzogaXNEaXNhYmxlZFxuICAgIH0pKSwgaW5uZXJQcm9wcyksXG4gICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzXG4gIH0sIGpzeChMYWJlbCwge1xuICAgIGRhdGE6IGRhdGEsXG4gICAgaW5uZXJQcm9wczogX29iamVjdFNwcmVhZCh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ211bHRpVmFsdWVMYWJlbCcsIHtcbiAgICAgICdtdWx0aS12YWx1ZV9fbGFiZWwnOiB0cnVlXG4gICAgfSkpLFxuICAgIHNlbGVjdFByb3BzOiBzZWxlY3RQcm9wc1xuICB9LCBjaGlsZHJlbiksIGpzeChSZW1vdmUsIHtcbiAgICBkYXRhOiBkYXRhLFxuICAgIGlubmVyUHJvcHM6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ211bHRpVmFsdWVSZW1vdmUnLCB7XG4gICAgICAnbXVsdGktdmFsdWVfX3JlbW92ZSc6IHRydWVcbiAgICB9KSksIHt9LCB7XG4gICAgICAnYXJpYS1sYWJlbCc6IFwiUmVtb3ZlIFwiLmNvbmNhdChjaGlsZHJlbiB8fCAnb3B0aW9uJylcbiAgICB9LCByZW1vdmVQcm9wcyksXG4gICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzXG4gIH0pKTtcbn07XG52YXIgTXVsdGlWYWx1ZSQxID0gTXVsdGlWYWx1ZTtcblxudmFyIG9wdGlvbkNTUyA9IGZ1bmN0aW9uIG9wdGlvbkNTUyhfcmVmLCB1bnN0eWxlZCkge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICBpc0ZvY3VzZWQgPSBfcmVmLmlzRm9jdXNlZCxcbiAgICBpc1NlbGVjdGVkID0gX3JlZi5pc1NlbGVjdGVkLFxuICAgIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICBsYWJlbDogJ29wdGlvbicsXG4gICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKSdcbiAgfSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzU2VsZWN0ZWQgPyBjb2xvcnMucHJpbWFyeSA6IGlzRm9jdXNlZCA/IGNvbG9ycy5wcmltYXJ5MjUgOiAndHJhbnNwYXJlbnQnLFxuICAgIGNvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwyMCA6IGlzU2VsZWN0ZWQgPyBjb2xvcnMubmV1dHJhbDAgOiAnaW5oZXJpdCcsXG4gICAgcGFkZGluZzogXCJcIi5jb25jYXQoc3BhY2luZy5iYXNlVW5pdCAqIDIsIFwicHggXCIpLmNvbmNhdChzcGFjaW5nLmJhc2VVbml0ICogMywgXCJweFwiKSxcbiAgICAvLyBwcm92aWRlIHNvbWUgYWZmb3JkYW5jZSBvbiB0b3VjaCBkZXZpY2VzXG4gICAgJzphY3RpdmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICFpc0Rpc2FibGVkID8gaXNTZWxlY3RlZCA/IGNvbG9ycy5wcmltYXJ5IDogY29sb3JzLnByaW1hcnk1MCA6IHVuZGVmaW5lZFxuICAgIH1cbiAgfSk7XG59O1xudmFyIE9wdGlvbiA9IGZ1bmN0aW9uIE9wdGlvbihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICBpc0ZvY3VzZWQgPSBwcm9wcy5pc0ZvY3VzZWQsXG4gICAgaXNTZWxlY3RlZCA9IHByb3BzLmlzU2VsZWN0ZWQsXG4gICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ29wdGlvbicsIHtcbiAgICBvcHRpb246IHRydWUsXG4gICAgJ29wdGlvbi0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkLFxuICAgICdvcHRpb24tLWlzLWZvY3VzZWQnOiBpc0ZvY3VzZWQsXG4gICAgJ29wdGlvbi0taXMtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkXG4gIH0pLCB7XG4gICAgcmVmOiBpbm5lclJlZixcbiAgICBcImFyaWEtZGlzYWJsZWRcIjogaXNEaXNhYmxlZFxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcbnZhciBPcHRpb24kMSA9IE9wdGlvbjtcblxudmFyIHBsYWNlaG9sZGVyQ1NTID0gZnVuY3Rpb24gcGxhY2Vob2xkZXJDU1MoX3JlZiwgdW5zdHlsZWQpIHtcbiAgdmFyIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICBsYWJlbDogJ3BsYWNlaG9sZGVyJyxcbiAgICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnXG4gIH0sIHVuc3R5bGVkID8ge30gOiB7XG4gICAgY29sb3I6IGNvbG9ycy5uZXV0cmFsNTAsXG4gICAgbWFyZ2luTGVmdDogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgbWFyZ2luUmlnaHQ6IHNwYWNpbmcuYmFzZVVuaXQgLyAyXG4gIH0pO1xufTtcbnZhciBQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIFBsYWNlaG9sZGVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAncGxhY2Vob2xkZXInLCB7XG4gICAgcGxhY2Vob2xkZXI6IHRydWVcbiAgfSksIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xudmFyIFBsYWNlaG9sZGVyJDEgPSBQbGFjZWhvbGRlcjtcblxudmFyIGNzcyA9IGZ1bmN0aW9uIGNzcyhfcmVmLCB1bnN0eWxlZCkge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nLFxuICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgbGFiZWw6ICdzaW5nbGVWYWx1ZScsXG4gICAgZ3JpZEFyZWE6ICcxIC8gMSAvIDIgLyAzJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgfSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsNDAgOiBjb2xvcnMubmV1dHJhbDgwLFxuICAgIG1hcmdpbkxlZnQ6IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIG1hcmdpblJpZ2h0OiBzcGFjaW5nLmJhc2VVbml0IC8gMlxuICB9KTtcbn07XG52YXIgU2luZ2xlVmFsdWUgPSBmdW5jdGlvbiBTaW5nbGVWYWx1ZShwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ3NpbmdsZVZhbHVlJywge1xuICAgICdzaW5nbGUtdmFsdWUnOiB0cnVlLFxuICAgICdzaW5nbGUtdmFsdWUtLWlzLWRpc2FibGVkJzogaXNEaXNhYmxlZFxuICB9KSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG52YXIgU2luZ2xlVmFsdWUkMSA9IFNpbmdsZVZhbHVlO1xuXG52YXIgY29tcG9uZW50cyA9IHtcbiAgQ2xlYXJJbmRpY2F0b3I6IENsZWFySW5kaWNhdG9yLFxuICBDb250cm9sOiBDb250cm9sJDEsXG4gIERyb3Bkb3duSW5kaWNhdG9yOiBEcm9wZG93bkluZGljYXRvcixcbiAgRG93bkNoZXZyb246IERvd25DaGV2cm9uLFxuICBDcm9zc0ljb246IENyb3NzSWNvbixcbiAgR3JvdXA6IEdyb3VwJDEsXG4gIEdyb3VwSGVhZGluZzogR3JvdXBIZWFkaW5nLFxuICBJbmRpY2F0b3JzQ29udGFpbmVyOiBJbmRpY2F0b3JzQ29udGFpbmVyLFxuICBJbmRpY2F0b3JTZXBhcmF0b3I6IEluZGljYXRvclNlcGFyYXRvcixcbiAgSW5wdXQ6IElucHV0JDEsXG4gIExvYWRpbmdJbmRpY2F0b3I6IExvYWRpbmdJbmRpY2F0b3IsXG4gIE1lbnU6IE1lbnUkMSxcbiAgTWVudUxpc3Q6IE1lbnVMaXN0LFxuICBNZW51UG9ydGFsOiBNZW51UG9ydGFsLFxuICBMb2FkaW5nTWVzc2FnZTogTG9hZGluZ01lc3NhZ2UsXG4gIE5vT3B0aW9uc01lc3NhZ2U6IE5vT3B0aW9uc01lc3NhZ2UsXG4gIE11bHRpVmFsdWU6IE11bHRpVmFsdWUkMSxcbiAgTXVsdGlWYWx1ZUNvbnRhaW5lcjogTXVsdGlWYWx1ZUNvbnRhaW5lcixcbiAgTXVsdGlWYWx1ZUxhYmVsOiBNdWx0aVZhbHVlTGFiZWwsXG4gIE11bHRpVmFsdWVSZW1vdmU6IE11bHRpVmFsdWVSZW1vdmUsXG4gIE9wdGlvbjogT3B0aW9uJDEsXG4gIFBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlciQxLFxuICBTZWxlY3RDb250YWluZXI6IFNlbGVjdENvbnRhaW5lcixcbiAgU2luZ2xlVmFsdWU6IFNpbmdsZVZhbHVlJDEsXG4gIFZhbHVlQ29udGFpbmVyOiBWYWx1ZUNvbnRhaW5lclxufTtcbnZhciBkZWZhdWx0Q29tcG9uZW50cyA9IGZ1bmN0aW9uIGRlZmF1bHRDb21wb25lbnRzKHByb3BzKSB7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGNvbXBvbmVudHMpLCBwcm9wcy5jb21wb25lbnRzKTtcbn07XG5cbmV4cG9ydCB7IGlzTW9iaWxlRGV2aWNlIGFzIEEsIG11bHRpVmFsdWVBc1ZhbHVlIGFzIEIsIHNpbmdsZVZhbHVlQXNWYWx1ZSBhcyBDLCB2YWx1ZVRlcm5hcnkgYXMgRCwgY2xhc3NOYW1lcyBhcyBFLCBkZWZhdWx0Q29tcG9uZW50cyBhcyBGLCBpc0RvY3VtZW50RWxlbWVudCBhcyBHLCBjbGVhblZhbHVlIGFzIEgsIHNjcm9sbEludG9WaWV3IGFzIEksIG5vb3AgYXMgSiwgbm90TnVsbGlzaCBhcyBLLCBoYW5kbGVJbnB1dENoYW5nZSBhcyBMLCBNZW51UGxhY2VyIGFzIE0sIGNsZWFySW5kaWNhdG9yQ1NTIGFzIGEsIGNvbnRhaW5lckNTUyBhcyBiLCBjb21wb25lbnRzIGFzIGMsIGNzcyQxIGFzIGQsIGRyb3Bkb3duSW5kaWNhdG9yQ1NTIGFzIGUsIGdyb3VwSGVhZGluZ0NTUyBhcyBmLCBncm91cENTUyBhcyBnLCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgYXMgaCwgaW5kaWNhdG9yc0NvbnRhaW5lckNTUyBhcyBpLCBpbnB1dENTUyBhcyBqLCBsb2FkaW5nTWVzc2FnZUNTUyBhcyBrLCBsb2FkaW5nSW5kaWNhdG9yQ1NTIGFzIGwsIG1lbnVDU1MgYXMgbSwgbWVudUxpc3RDU1MgYXMgbiwgbWVudVBvcnRhbENTUyBhcyBvLCBtdWx0aVZhbHVlQ1NTIGFzIHAsIG11bHRpVmFsdWVMYWJlbENTUyBhcyBxLCByZW1vdmVQcm9wcyBhcyByLCBzdXBwb3J0c1Bhc3NpdmVFdmVudHMgYXMgcywgbXVsdGlWYWx1ZVJlbW92ZUNTUyBhcyB0LCBub09wdGlvbnNNZXNzYWdlQ1NTIGFzIHUsIG9wdGlvbkNTUyBhcyB2LCBwbGFjZWhvbGRlckNTUyBhcyB3LCBjc3MgYXMgeCwgdmFsdWVDb250YWluZXJDU1MgYXMgeSwgaXNUb3VjaENhcGFibGUgYXMgeiB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2FmZUlzTmFOID0gTnVtYmVyLmlzTmFOIHx8XG4gICAgZnVuY3Rpb24gcG9ueWZpbGwodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IHZhbHVlO1xuICAgIH07XG5mdW5jdGlvbiBpc0VxdWFsKGZpcnN0LCBzZWNvbmQpIHtcbiAgICBpZiAoZmlyc3QgPT09IHNlY29uZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHNhZmVJc05hTihmaXJzdCkgJiYgc2FmZUlzTmFOKHNlY29uZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGFyZUlucHV0c0VxdWFsKG5ld0lucHV0cywgbGFzdElucHV0cykge1xuICAgIGlmIChuZXdJbnB1dHMubGVuZ3RoICE9PSBsYXN0SW5wdXRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3SW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghaXNFcXVhbChuZXdJbnB1dHNbaV0sIGxhc3RJbnB1dHNbaV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG1lbW9pemVPbmUocmVzdWx0Rm4sIGlzRXF1YWwpIHtcbiAgICBpZiAoaXNFcXVhbCA9PT0gdm9pZCAwKSB7IGlzRXF1YWwgPSBhcmVJbnB1dHNFcXVhbDsgfVxuICAgIHZhciBjYWNoZSA9IG51bGw7XG4gICAgZnVuY3Rpb24gbWVtb2l6ZWQoKSB7XG4gICAgICAgIHZhciBuZXdBcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBuZXdBcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhY2hlICYmIGNhY2hlLmxhc3RUaGlzID09PSB0aGlzICYmIGlzRXF1YWwobmV3QXJncywgY2FjaGUubGFzdEFyZ3MpKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGUubGFzdFJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGFzdFJlc3VsdCA9IHJlc3VsdEZuLmFwcGx5KHRoaXMsIG5ld0FyZ3MpO1xuICAgICAgICBjYWNoZSA9IHtcbiAgICAgICAgICAgIGxhc3RSZXN1bHQ6IGxhc3RSZXN1bHQsXG4gICAgICAgICAgICBsYXN0QXJnczogbmV3QXJncyxcbiAgICAgICAgICAgIGxhc3RUaGlzOiB0aGlzLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgICB9XG4gICAgbWVtb2l6ZWQuY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgY2FjaGUgPSBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemVPbmU7XG4iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzJztcbmltcG9ydCBfY3JlYXRlU3VwZXIgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXInO1xuaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNZW1vLCBGcmFnbWVudCwgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByIGFzIHJlbW92ZVByb3BzLCBzIGFzIHN1cHBvcnRzUGFzc2l2ZUV2ZW50cywgYSBhcyBjbGVhckluZGljYXRvckNTUywgYiBhcyBjb250YWluZXJDU1MsIGQgYXMgY3NzJDEsIGUgYXMgZHJvcGRvd25JbmRpY2F0b3JDU1MsIGcgYXMgZ3JvdXBDU1MsIGYgYXMgZ3JvdXBIZWFkaW5nQ1NTLCBpIGFzIGluZGljYXRvcnNDb250YWluZXJDU1MsIGggYXMgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTLCBqIGFzIGlucHV0Q1NTLCBsIGFzIGxvYWRpbmdJbmRpY2F0b3JDU1MsIGsgYXMgbG9hZGluZ01lc3NhZ2VDU1MsIG0gYXMgbWVudUNTUywgbiBhcyBtZW51TGlzdENTUywgbyBhcyBtZW51UG9ydGFsQ1NTLCBwIGFzIG11bHRpVmFsdWVDU1MsIHEgYXMgbXVsdGlWYWx1ZUxhYmVsQ1NTLCB0IGFzIG11bHRpVmFsdWVSZW1vdmVDU1MsIHUgYXMgbm9PcHRpb25zTWVzc2FnZUNTUywgdiBhcyBvcHRpb25DU1MsIHcgYXMgcGxhY2Vob2xkZXJDU1MsIHggYXMgY3NzJDIsIHkgYXMgdmFsdWVDb250YWluZXJDU1MsIHogYXMgaXNUb3VjaENhcGFibGUsIEEgYXMgaXNNb2JpbGVEZXZpY2UsIEIgYXMgbXVsdGlWYWx1ZUFzVmFsdWUsIEMgYXMgc2luZ2xlVmFsdWVBc1ZhbHVlLCBEIGFzIHZhbHVlVGVybmFyeSwgRSBhcyBjbGFzc05hbWVzLCBGIGFzIGRlZmF1bHRDb21wb25lbnRzLCBHIGFzIGlzRG9jdW1lbnRFbGVtZW50LCBIIGFzIGNsZWFuVmFsdWUsIEkgYXMgc2Nyb2xsSW50b1ZpZXcsIEogYXMgbm9vcCwgTSBhcyBNZW51UGxhY2VyLCBLIGFzIG5vdE51bGxpc2ggfSBmcm9tICcuL2luZGV4LTY0MWVlNWI4LmVzbS5qcyc7XG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBtZW1vaXplT25lIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuXG5mdW5jdGlvbiBfRU1PVElPTl9TVFJJTkdJRklFRF9DU1NfRVJST1JfXyQyKCkgeyByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7IH1cblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG52YXIgX3JlZiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgbmFtZTogXCI3cGcwY2otYTExeVRleHRcIixcbiAgc3R5bGVzOiBcImxhYmVsOmExMXlUZXh0O3otaW5kZXg6OTk5OTtib3JkZXI6MDtjbGlwOnJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtoZWlnaHQ6MXB4O3dpZHRoOjFweDtwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3doaXRlLXNwYWNlOm5vd3JhcFwiXG59IDoge1xuICBuYW1lOiBcIjFmNDNhdnotYTExeVRleHQtQTExeVRleHRcIixcbiAgc3R5bGVzOiBcImxhYmVsOmExMXlUZXh0O3otaW5kZXg6OTk5OTtib3JkZXI6MDtjbGlwOnJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtoZWlnaHQ6MXB4O3dpZHRoOjFweDtwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3doaXRlLXNwYWNlOm5vd3JhcDtsYWJlbDpBMTF5VGV4dDtcIixcbiAgbWFwOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrRXhNWGxVWlhoMExuUnplQ0pkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZQU1NJc0ltWnBiR1VpT2lKQk1URjVWR1Y0ZEM1MGMzZ2lMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lvZ1FHcHplQ0JxYzNnZ0tpOWNibWx0Y0c5eWRDQjdJRXBUV0NCOUlHWnliMjBnSjNKbFlXTjBKenRjYm1sdGNHOXlkQ0I3SUdwemVDQjlJR1p5YjIwZ0owQmxiVzkwYVc5dUwzSmxZV04wSnp0Y2JseHVMeThnUVhOemFYTjBhWFpsSUhSbGVIUWdkRzhnWkdWelkzSnBZbVVnZG1semRXRnNJR1ZzWlcxbGJuUnpMaUJJYVdSa1pXNGdabTl5SUhOcFoyaDBaV1FnZFhObGNuTXVYRzVqYjI1emRDQkJNVEY1VkdWNGRDQTlJQ2h3Y205d2N6b2dTbE5ZTGtsdWRISnBibk5wWTBWc1pXMWxiblJ6V3lkemNHRnVKMTBwSUQwK0lDaGNiaUFnUEhOd1lXNWNiaUFnSUNCamMzTTllM3RjYmlBZ0lDQWdJR3hoWW1Wc09pQW5ZVEV4ZVZSbGVIUW5MRnh1SUNBZ0lDQWdla2x1WkdWNE9pQTVPVGs1TEZ4dUlDQWdJQ0FnWW05eVpHVnlPaUF3TEZ4dUlDQWdJQ0FnWTJ4cGNEb2dKM0psWTNRb01YQjRMQ0F4Y0hnc0lERndlQ3dnTVhCNEtTY3NYRzRnSUNBZ0lDQm9aV2xuYUhRNklERXNYRzRnSUNBZ0lDQjNhV1IwYURvZ01TeGNiaUFnSUNBZ0lIQnZjMmwwYVc5dU9pQW5ZV0p6YjJ4MWRHVW5MRnh1SUNBZ0lDQWdiM1psY21ac2IzYzZJQ2RvYVdSa1pXNG5MRnh1SUNBZ0lDQWdjR0ZrWkdsdVp6b2dNQ3hjYmlBZ0lDQWdJSGRvYVhSbFUzQmhZMlU2SUNkdWIzZHlZWEFuTEZ4dUlDQWdJSDE5WEc0Z0lDQWdleTR1TG5CeWIzQnpmVnh1SUNBdlBseHVLVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnUVRFeGVWUmxlSFE3WEc0aVhYMD0gKi9cIixcbiAgdG9TdHJpbmc6IF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fJDJcbn07XG52YXIgQTExeVRleHQgPSBmdW5jdGlvbiBBMTF5VGV4dChwcm9wcykge1xuICByZXR1cm4ganN4KFwic3BhblwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBfcmVmXG4gIH0sIHByb3BzKSk7XG59O1xudmFyIEExMXlUZXh0JDEgPSBBMTF5VGV4dDtcblxudmFyIGRlZmF1bHRBcmlhTGl2ZU1lc3NhZ2VzID0ge1xuICBndWlkYW5jZTogZnVuY3Rpb24gZ3VpZGFuY2UocHJvcHMpIHtcbiAgICB2YXIgaXNTZWFyY2hhYmxlID0gcHJvcHMuaXNTZWFyY2hhYmxlLFxuICAgICAgaXNNdWx0aSA9IHByb3BzLmlzTXVsdGksXG4gICAgICB0YWJTZWxlY3RzVmFsdWUgPSBwcm9wcy50YWJTZWxlY3RzVmFsdWUsXG4gICAgICBjb250ZXh0ID0gcHJvcHMuY29udGV4dCxcbiAgICAgIGlzSW5pdGlhbEZvY3VzID0gcHJvcHMuaXNJbml0aWFsRm9jdXM7XG4gICAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgcmV0dXJuIFwiVXNlIFVwIGFuZCBEb3duIHRvIGNob29zZSBvcHRpb25zLCBwcmVzcyBFbnRlciB0byBzZWxlY3QgdGhlIGN1cnJlbnRseSBmb2N1c2VkIG9wdGlvbiwgcHJlc3MgRXNjYXBlIHRvIGV4aXQgdGhlIG1lbnVcIi5jb25jYXQodGFiU2VsZWN0c1ZhbHVlID8gJywgcHJlc3MgVGFiIHRvIHNlbGVjdCB0aGUgb3B0aW9uIGFuZCBleGl0IHRoZSBtZW51JyA6ICcnLCBcIi5cIik7XG4gICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgIHJldHVybiBpc0luaXRpYWxGb2N1cyA/IFwiXCIuY29uY2F0KHByb3BzWydhcmlhLWxhYmVsJ10gfHwgJ1NlbGVjdCcsIFwiIGlzIGZvY3VzZWQgXCIpLmNvbmNhdChpc1NlYXJjaGFibGUgPyAnLHR5cGUgdG8gcmVmaW5lIGxpc3QnIDogJycsIFwiLCBwcmVzcyBEb3duIHRvIG9wZW4gdGhlIG1lbnUsIFwiKS5jb25jYXQoaXNNdWx0aSA/ICcgcHJlc3MgbGVmdCB0byBmb2N1cyBzZWxlY3RlZCB2YWx1ZXMnIDogJycpIDogJyc7XG4gICAgICBjYXNlICd2YWx1ZSc6XG4gICAgICAgIHJldHVybiAnVXNlIGxlZnQgYW5kIHJpZ2h0IHRvIHRvZ2dsZSBiZXR3ZWVuIGZvY3VzZWQgdmFsdWVzLCBwcmVzcyBCYWNrc3BhY2UgdG8gcmVtb3ZlIHRoZSBjdXJyZW50bHkgZm9jdXNlZCB2YWx1ZSc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9LFxuICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UocHJvcHMpIHtcbiAgICB2YXIgYWN0aW9uID0gcHJvcHMuYWN0aW9uLFxuICAgICAgX3Byb3BzJGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICBsYWJlbCA9IF9wcm9wcyRsYWJlbCA9PT0gdm9pZCAwID8gJycgOiBfcHJvcHMkbGFiZWwsXG4gICAgICBsYWJlbHMgPSBwcm9wcy5sYWJlbHMsXG4gICAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZDtcbiAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgY2FzZSAnZGVzZWxlY3Qtb3B0aW9uJzpcbiAgICAgIGNhc2UgJ3BvcC12YWx1ZSc6XG4gICAgICBjYXNlICdyZW1vdmUtdmFsdWUnOlxuICAgICAgICByZXR1cm4gXCJvcHRpb24gXCIuY29uY2F0KGxhYmVsLCBcIiwgZGVzZWxlY3RlZC5cIik7XG4gICAgICBjYXNlICdjbGVhcic6XG4gICAgICAgIHJldHVybiAnQWxsIHNlbGVjdGVkIG9wdGlvbnMgaGF2ZSBiZWVuIGNsZWFyZWQuJztcbiAgICAgIGNhc2UgJ2luaXRpYWwtaW5wdXQtZm9jdXMnOlxuICAgICAgICByZXR1cm4gXCJvcHRpb25cIi5jb25jYXQobGFiZWxzLmxlbmd0aCA+IDEgPyAncycgOiAnJywgXCIgXCIpLmNvbmNhdChsYWJlbHMuam9pbignLCcpLCBcIiwgc2VsZWN0ZWQuXCIpO1xuICAgICAgY2FzZSAnc2VsZWN0LW9wdGlvbic6XG4gICAgICAgIHJldHVybiBpc0Rpc2FibGVkID8gXCJvcHRpb24gXCIuY29uY2F0KGxhYmVsLCBcIiBpcyBkaXNhYmxlZC4gU2VsZWN0IGFub3RoZXIgb3B0aW9uLlwiKSA6IFwib3B0aW9uIFwiLmNvbmNhdChsYWJlbCwgXCIsIHNlbGVjdGVkLlwiKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH0sXG4gIG9uRm9jdXM6IGZ1bmN0aW9uIG9uRm9jdXMocHJvcHMpIHtcbiAgICB2YXIgY29udGV4dCA9IHByb3BzLmNvbnRleHQsXG4gICAgICBmb2N1c2VkID0gcHJvcHMuZm9jdXNlZCxcbiAgICAgIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zLFxuICAgICAgX3Byb3BzJGxhYmVsMiA9IHByb3BzLmxhYmVsLFxuICAgICAgbGFiZWwgPSBfcHJvcHMkbGFiZWwyID09PSB2b2lkIDAgPyAnJyA6IF9wcm9wcyRsYWJlbDIsXG4gICAgICBzZWxlY3RWYWx1ZSA9IHByb3BzLnNlbGVjdFZhbHVlLFxuICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICBpc1NlbGVjdGVkID0gcHJvcHMuaXNTZWxlY3RlZCxcbiAgICAgIGlzQXBwbGVEZXZpY2UgPSBwcm9wcy5pc0FwcGxlRGV2aWNlO1xuICAgIHZhciBnZXRBcnJheUluZGV4ID0gZnVuY3Rpb24gZ2V0QXJyYXlJbmRleChhcnIsIGl0ZW0pIHtcbiAgICAgIHJldHVybiBhcnIgJiYgYXJyLmxlbmd0aCA/IFwiXCIuY29uY2F0KGFyci5pbmRleE9mKGl0ZW0pICsgMSwgXCIgb2YgXCIpLmNvbmNhdChhcnIubGVuZ3RoKSA6ICcnO1xuICAgIH07XG4gICAgaWYgKGNvbnRleHQgPT09ICd2YWx1ZScgJiYgc2VsZWN0VmFsdWUpIHtcbiAgICAgIHJldHVybiBcInZhbHVlIFwiLmNvbmNhdChsYWJlbCwgXCIgZm9jdXNlZCwgXCIpLmNvbmNhdChnZXRBcnJheUluZGV4KHNlbGVjdFZhbHVlLCBmb2N1c2VkKSwgXCIuXCIpO1xuICAgIH1cbiAgICBpZiAoY29udGV4dCA9PT0gJ21lbnUnICYmIGlzQXBwbGVEZXZpY2UpIHtcbiAgICAgIHZhciBkaXNhYmxlZCA9IGlzRGlzYWJsZWQgPyAnIGRpc2FibGVkJyA6ICcnO1xuICAgICAgdmFyIHN0YXR1cyA9IFwiXCIuY29uY2F0KGlzU2VsZWN0ZWQgPyAnIHNlbGVjdGVkJyA6ICcnKS5jb25jYXQoZGlzYWJsZWQpO1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGxhYmVsKS5jb25jYXQoc3RhdHVzLCBcIiwgXCIpLmNvbmNhdChnZXRBcnJheUluZGV4KG9wdGlvbnMsIGZvY3VzZWQpLCBcIi5cIik7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSxcbiAgb25GaWx0ZXI6IGZ1bmN0aW9uIG9uRmlsdGVyKHByb3BzKSB7XG4gICAgdmFyIGlucHV0VmFsdWUgPSBwcm9wcy5pbnB1dFZhbHVlLFxuICAgICAgcmVzdWx0c01lc3NhZ2UgPSBwcm9wcy5yZXN1bHRzTWVzc2FnZTtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQocmVzdWx0c01lc3NhZ2UpLmNvbmNhdChpbnB1dFZhbHVlID8gJyBmb3Igc2VhcmNoIHRlcm0gJyArIGlucHV0VmFsdWUgOiAnJywgXCIuXCIpO1xuICB9XG59O1xuXG52YXIgTGl2ZVJlZ2lvbiA9IGZ1bmN0aW9uIExpdmVSZWdpb24ocHJvcHMpIHtcbiAgdmFyIGFyaWFTZWxlY3Rpb24gPSBwcm9wcy5hcmlhU2VsZWN0aW9uLFxuICAgIGZvY3VzZWRPcHRpb24gPSBwcm9wcy5mb2N1c2VkT3B0aW9uLFxuICAgIGZvY3VzZWRWYWx1ZSA9IHByb3BzLmZvY3VzZWRWYWx1ZSxcbiAgICBmb2N1c2FibGVPcHRpb25zID0gcHJvcHMuZm9jdXNhYmxlT3B0aW9ucyxcbiAgICBpc0ZvY3VzZWQgPSBwcm9wcy5pc0ZvY3VzZWQsXG4gICAgc2VsZWN0VmFsdWUgPSBwcm9wcy5zZWxlY3RWYWx1ZSxcbiAgICBzZWxlY3RQcm9wcyA9IHByb3BzLnNlbGVjdFByb3BzLFxuICAgIGlkID0gcHJvcHMuaWQsXG4gICAgaXNBcHBsZURldmljZSA9IHByb3BzLmlzQXBwbGVEZXZpY2U7XG4gIHZhciBhcmlhTGl2ZU1lc3NhZ2VzID0gc2VsZWN0UHJvcHMuYXJpYUxpdmVNZXNzYWdlcyxcbiAgICBnZXRPcHRpb25MYWJlbCA9IHNlbGVjdFByb3BzLmdldE9wdGlvbkxhYmVsLFxuICAgIGlucHV0VmFsdWUgPSBzZWxlY3RQcm9wcy5pbnB1dFZhbHVlLFxuICAgIGlzTXVsdGkgPSBzZWxlY3RQcm9wcy5pc011bHRpLFxuICAgIGlzT3B0aW9uRGlzYWJsZWQgPSBzZWxlY3RQcm9wcy5pc09wdGlvbkRpc2FibGVkLFxuICAgIGlzU2VhcmNoYWJsZSA9IHNlbGVjdFByb3BzLmlzU2VhcmNoYWJsZSxcbiAgICBtZW51SXNPcGVuID0gc2VsZWN0UHJvcHMubWVudUlzT3BlbixcbiAgICBvcHRpb25zID0gc2VsZWN0UHJvcHMub3B0aW9ucyxcbiAgICBzY3JlZW5SZWFkZXJTdGF0dXMgPSBzZWxlY3RQcm9wcy5zY3JlZW5SZWFkZXJTdGF0dXMsXG4gICAgdGFiU2VsZWN0c1ZhbHVlID0gc2VsZWN0UHJvcHMudGFiU2VsZWN0c1ZhbHVlLFxuICAgIGlzTG9hZGluZyA9IHNlbGVjdFByb3BzLmlzTG9hZGluZztcbiAgdmFyIGFyaWFMYWJlbCA9IHNlbGVjdFByb3BzWydhcmlhLWxhYmVsJ107XG4gIHZhciBhcmlhTGl2ZSA9IHNlbGVjdFByb3BzWydhcmlhLWxpdmUnXTtcblxuICAvLyBVcGRhdGUgYXJpYSBsaXZlIG1lc3NhZ2UgY29uZmlndXJhdGlvbiB3aGVuIHByb3AgY2hhbmdlc1xuICB2YXIgbWVzc2FnZXMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBkZWZhdWx0QXJpYUxpdmVNZXNzYWdlcyksIGFyaWFMaXZlTWVzc2FnZXMgfHwge30pO1xuICB9LCBbYXJpYUxpdmVNZXNzYWdlc10pO1xuXG4gIC8vIFVwZGF0ZSBhcmlhIGxpdmUgc2VsZWN0ZWQgb3B0aW9uIHdoZW4gcHJvcCBjaGFuZ2VzXG4gIHZhciBhcmlhU2VsZWN0ZWQgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICcnO1xuICAgIGlmIChhcmlhU2VsZWN0aW9uICYmIG1lc3NhZ2VzLm9uQ2hhbmdlKSB7XG4gICAgICB2YXIgb3B0aW9uID0gYXJpYVNlbGVjdGlvbi5vcHRpb24sXG4gICAgICAgIHNlbGVjdGVkT3B0aW9ucyA9IGFyaWFTZWxlY3Rpb24ub3B0aW9ucyxcbiAgICAgICAgcmVtb3ZlZFZhbHVlID0gYXJpYVNlbGVjdGlvbi5yZW1vdmVkVmFsdWUsXG4gICAgICAgIHJlbW92ZWRWYWx1ZXMgPSBhcmlhU2VsZWN0aW9uLnJlbW92ZWRWYWx1ZXMsXG4gICAgICAgIHZhbHVlID0gYXJpYVNlbGVjdGlvbi52YWx1ZTtcbiAgICAgIC8vIHNlbGVjdC1vcHRpb24gd2hlbiAhaXNNdWx0aSBkb2VzIG5vdCByZXR1cm4gb3B0aW9uIHNvIHdlIGFzc3VtZSBzZWxlY3RlZCBvcHRpb24gaXMgdmFsdWVcbiAgICAgIHZhciBhc09wdGlvbiA9IGZ1bmN0aW9uIGFzT3B0aW9uKHZhbCkge1xuICAgICAgICByZXR1cm4gIUFycmF5LmlzQXJyYXkodmFsKSA/IHZhbCA6IG51bGw7XG4gICAgICB9O1xuXG4gICAgICAvLyBJZiB0aGVyZSBpcyBqdXN0IG9uZSBpdGVtIGZyb20gdGhlIGFjdGlvbiB0aGVuIGdldCBpdHMgbGFiZWxcbiAgICAgIHZhciBzZWxlY3RlZCA9IHJlbW92ZWRWYWx1ZSB8fCBvcHRpb24gfHwgYXNPcHRpb24odmFsdWUpO1xuICAgICAgdmFyIGxhYmVsID0gc2VsZWN0ZWQgPyBnZXRPcHRpb25MYWJlbChzZWxlY3RlZCkgOiAnJztcblxuICAgICAgLy8gSWYgdGhlcmUgYXJlIG11bHRpcGxlIGl0ZW1zIGZyb20gdGhlIGFjdGlvbiB0aGVuIHJldHVybiBhbiBhcnJheSBvZiBsYWJlbHNcbiAgICAgIHZhciBtdWx0aVNlbGVjdGVkID0gc2VsZWN0ZWRPcHRpb25zIHx8IHJlbW92ZWRWYWx1ZXMgfHwgdW5kZWZpbmVkO1xuICAgICAgdmFyIGxhYmVscyA9IG11bHRpU2VsZWN0ZWQgPyBtdWx0aVNlbGVjdGVkLm1hcChnZXRPcHRpb25MYWJlbCkgOiBbXTtcbiAgICAgIHZhciBvbkNoYW5nZVByb3BzID0gX29iamVjdFNwcmVhZCh7XG4gICAgICAgIC8vIG11bHRpU2VsZWN0ZWQgaXRlbXMgYXJlIHVzdWFsbHkgaXRlbXMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBzZWxlY3RlZFxuICAgICAgICAvLyBvciBzZXQgYnkgdGhlIHVzZXIgYXMgYSBkZWZhdWx0IHZhbHVlIHNvIHdlIGFzc3VtZSB0aGV5IGFyZSBub3QgZGlzYWJsZWRcbiAgICAgICAgaXNEaXNhYmxlZDogc2VsZWN0ZWQgJiYgaXNPcHRpb25EaXNhYmxlZChzZWxlY3RlZCwgc2VsZWN0VmFsdWUpLFxuICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgIGxhYmVsczogbGFiZWxzXG4gICAgICB9LCBhcmlhU2VsZWN0aW9uKTtcbiAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlcy5vbkNoYW5nZShvbkNoYW5nZVByb3BzKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sIFthcmlhU2VsZWN0aW9uLCBtZXNzYWdlcywgaXNPcHRpb25EaXNhYmxlZCwgc2VsZWN0VmFsdWUsIGdldE9wdGlvbkxhYmVsXSk7XG4gIHZhciBhcmlhRm9jdXNlZCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBmb2N1c01zZyA9ICcnO1xuICAgIHZhciBmb2N1c2VkID0gZm9jdXNlZE9wdGlvbiB8fCBmb2N1c2VkVmFsdWU7XG4gICAgdmFyIGlzU2VsZWN0ZWQgPSAhIShmb2N1c2VkT3B0aW9uICYmIHNlbGVjdFZhbHVlICYmIHNlbGVjdFZhbHVlLmluY2x1ZGVzKGZvY3VzZWRPcHRpb24pKTtcbiAgICBpZiAoZm9jdXNlZCAmJiBtZXNzYWdlcy5vbkZvY3VzKSB7XG4gICAgICB2YXIgb25Gb2N1c1Byb3BzID0ge1xuICAgICAgICBmb2N1c2VkOiBmb2N1c2VkLFxuICAgICAgICBsYWJlbDogZ2V0T3B0aW9uTGFiZWwoZm9jdXNlZCksXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzT3B0aW9uRGlzYWJsZWQoZm9jdXNlZCwgc2VsZWN0VmFsdWUpLFxuICAgICAgICBpc1NlbGVjdGVkOiBpc1NlbGVjdGVkLFxuICAgICAgICBvcHRpb25zOiBmb2N1c2FibGVPcHRpb25zLFxuICAgICAgICBjb250ZXh0OiBmb2N1c2VkID09PSBmb2N1c2VkT3B0aW9uID8gJ21lbnUnIDogJ3ZhbHVlJyxcbiAgICAgICAgc2VsZWN0VmFsdWU6IHNlbGVjdFZhbHVlLFxuICAgICAgICBpc0FwcGxlRGV2aWNlOiBpc0FwcGxlRGV2aWNlXG4gICAgICB9O1xuICAgICAgZm9jdXNNc2cgPSBtZXNzYWdlcy5vbkZvY3VzKG9uRm9jdXNQcm9wcyk7XG4gICAgfVxuICAgIHJldHVybiBmb2N1c01zZztcbiAgfSwgW2ZvY3VzZWRPcHRpb24sIGZvY3VzZWRWYWx1ZSwgZ2V0T3B0aW9uTGFiZWwsIGlzT3B0aW9uRGlzYWJsZWQsIG1lc3NhZ2VzLCBmb2N1c2FibGVPcHRpb25zLCBzZWxlY3RWYWx1ZSwgaXNBcHBsZURldmljZV0pO1xuICB2YXIgYXJpYVJlc3VsdHMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0c01zZyA9ICcnO1xuICAgIGlmIChtZW51SXNPcGVuICYmIG9wdGlvbnMubGVuZ3RoICYmICFpc0xvYWRpbmcgJiYgbWVzc2FnZXMub25GaWx0ZXIpIHtcbiAgICAgIHZhciByZXN1bHRzTWVzc2FnZSA9IHNjcmVlblJlYWRlclN0YXR1cyh7XG4gICAgICAgIGNvdW50OiBmb2N1c2FibGVPcHRpb25zLmxlbmd0aFxuICAgICAgfSk7XG4gICAgICByZXN1bHRzTXNnID0gbWVzc2FnZXMub25GaWx0ZXIoe1xuICAgICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlLFxuICAgICAgICByZXN1bHRzTWVzc2FnZTogcmVzdWx0c01lc3NhZ2VcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0c01zZztcbiAgfSwgW2ZvY3VzYWJsZU9wdGlvbnMsIGlucHV0VmFsdWUsIG1lbnVJc09wZW4sIG1lc3NhZ2VzLCBvcHRpb25zLCBzY3JlZW5SZWFkZXJTdGF0dXMsIGlzTG9hZGluZ10pO1xuICB2YXIgaXNJbml0aWFsRm9jdXMgPSAoYXJpYVNlbGVjdGlvbiA9PT0gbnVsbCB8fCBhcmlhU2VsZWN0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcmlhU2VsZWN0aW9uLmFjdGlvbikgPT09ICdpbml0aWFsLWlucHV0LWZvY3VzJztcbiAgdmFyIGFyaWFHdWlkYW5jZSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBndWlkYW5jZU1zZyA9ICcnO1xuICAgIGlmIChtZXNzYWdlcy5ndWlkYW5jZSkge1xuICAgICAgdmFyIGNvbnRleHQgPSBmb2N1c2VkVmFsdWUgPyAndmFsdWUnIDogbWVudUlzT3BlbiA/ICdtZW51JyA6ICdpbnB1dCc7XG4gICAgICBndWlkYW5jZU1zZyA9IG1lc3NhZ2VzLmd1aWRhbmNlKHtcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiBhcmlhTGFiZWwsXG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGZvY3VzZWRPcHRpb24gJiYgaXNPcHRpb25EaXNhYmxlZChmb2N1c2VkT3B0aW9uLCBzZWxlY3RWYWx1ZSksXG4gICAgICAgIGlzTXVsdGk6IGlzTXVsdGksXG4gICAgICAgIGlzU2VhcmNoYWJsZTogaXNTZWFyY2hhYmxlLFxuICAgICAgICB0YWJTZWxlY3RzVmFsdWU6IHRhYlNlbGVjdHNWYWx1ZSxcbiAgICAgICAgaXNJbml0aWFsRm9jdXM6IGlzSW5pdGlhbEZvY3VzXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGd1aWRhbmNlTXNnO1xuICB9LCBbYXJpYUxhYmVsLCBmb2N1c2VkT3B0aW9uLCBmb2N1c2VkVmFsdWUsIGlzTXVsdGksIGlzT3B0aW9uRGlzYWJsZWQsIGlzU2VhcmNoYWJsZSwgbWVudUlzT3BlbiwgbWVzc2FnZXMsIHNlbGVjdFZhbHVlLCB0YWJTZWxlY3RzVmFsdWUsIGlzSW5pdGlhbEZvY3VzXSk7XG4gIHZhciBTY3JlZW5SZWFkZXJUZXh0ID0ganN4KEZyYWdtZW50LCBudWxsLCBqc3goXCJzcGFuXCIsIHtcbiAgICBpZDogXCJhcmlhLXNlbGVjdGlvblwiXG4gIH0sIGFyaWFTZWxlY3RlZCksIGpzeChcInNwYW5cIiwge1xuICAgIGlkOiBcImFyaWEtZm9jdXNlZFwiXG4gIH0sIGFyaWFGb2N1c2VkKSwganN4KFwic3BhblwiLCB7XG4gICAgaWQ6IFwiYXJpYS1yZXN1bHRzXCJcbiAgfSwgYXJpYVJlc3VsdHMpLCBqc3goXCJzcGFuXCIsIHtcbiAgICBpZDogXCJhcmlhLWd1aWRhbmNlXCJcbiAgfSwgYXJpYUd1aWRhbmNlKSk7XG4gIHJldHVybiBqc3goRnJhZ21lbnQsIG51bGwsIGpzeChBMTF5VGV4dCQxLCB7XG4gICAgaWQ6IGlkXG4gIH0sIGlzSW5pdGlhbEZvY3VzICYmIFNjcmVlblJlYWRlclRleHQpLCBqc3goQTExeVRleHQkMSwge1xuICAgIFwiYXJpYS1saXZlXCI6IGFyaWFMaXZlLFxuICAgIFwiYXJpYS1hdG9taWNcIjogXCJmYWxzZVwiLFxuICAgIFwiYXJpYS1yZWxldmFudFwiOiBcImFkZGl0aW9ucyB0ZXh0XCIsXG4gICAgcm9sZTogXCJsb2dcIlxuICB9LCBpc0ZvY3VzZWQgJiYgIWlzSW5pdGlhbEZvY3VzICYmIFNjcmVlblJlYWRlclRleHQpKTtcbn07XG52YXIgTGl2ZVJlZ2lvbiQxID0gTGl2ZVJlZ2lvbjtcblxudmFyIGRpYWNyaXRpY3MgPSBbe1xuICBiYXNlOiAnQScsXG4gIGxldHRlcnM6IFwiQVxcdTI0QjZcXHVGRjIxXFx4QzBcXHhDMVxceEMyXFx1MUVBNlxcdTFFQTRcXHUxRUFBXFx1MUVBOFxceEMzXFx1MDEwMFxcdTAxMDJcXHUxRUIwXFx1MUVBRVxcdTFFQjRcXHUxRUIyXFx1MDIyNlxcdTAxRTBcXHhDNFxcdTAxREVcXHUxRUEyXFx4QzVcXHUwMUZBXFx1MDFDRFxcdTAyMDBcXHUwMjAyXFx1MUVBMFxcdTFFQUNcXHUxRUI2XFx1MUUwMFxcdTAxMDRcXHUwMjNBXFx1MkM2RlwiXG59LCB7XG4gIGJhc2U6ICdBQScsXG4gIGxldHRlcnM6IFwiXFx1QTczMlwiXG59LCB7XG4gIGJhc2U6ICdBRScsXG4gIGxldHRlcnM6IFwiXFx4QzZcXHUwMUZDXFx1MDFFMlwiXG59LCB7XG4gIGJhc2U6ICdBTycsXG4gIGxldHRlcnM6IFwiXFx1QTczNFwiXG59LCB7XG4gIGJhc2U6ICdBVScsXG4gIGxldHRlcnM6IFwiXFx1QTczNlwiXG59LCB7XG4gIGJhc2U6ICdBVicsXG4gIGxldHRlcnM6IFwiXFx1QTczOFxcdUE3M0FcIlxufSwge1xuICBiYXNlOiAnQVknLFxuICBsZXR0ZXJzOiBcIlxcdUE3M0NcIlxufSwge1xuICBiYXNlOiAnQicsXG4gIGxldHRlcnM6IFwiQlxcdTI0QjdcXHVGRjIyXFx1MUUwMlxcdTFFMDRcXHUxRTA2XFx1MDI0M1xcdTAxODJcXHUwMTgxXCJcbn0sIHtcbiAgYmFzZTogJ0MnLFxuICBsZXR0ZXJzOiBcIkNcXHUyNEI4XFx1RkYyM1xcdTAxMDZcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHhDN1xcdTFFMDhcXHUwMTg3XFx1MDIzQlxcdUE3M0VcIlxufSwge1xuICBiYXNlOiAnRCcsXG4gIGxldHRlcnM6IFwiRFxcdTI0QjlcXHVGRjI0XFx1MUUwQVxcdTAxMEVcXHUxRTBDXFx1MUUxMFxcdTFFMTJcXHUxRTBFXFx1MDExMFxcdTAxOEJcXHUwMThBXFx1MDE4OVxcdUE3NzlcIlxufSwge1xuICBiYXNlOiAnRFonLFxuICBsZXR0ZXJzOiBcIlxcdTAxRjFcXHUwMUM0XCJcbn0sIHtcbiAgYmFzZTogJ0R6JyxcbiAgbGV0dGVyczogXCJcXHUwMUYyXFx1MDFDNVwiXG59LCB7XG4gIGJhc2U6ICdFJyxcbiAgbGV0dGVyczogXCJFXFx1MjRCQVxcdUZGMjVcXHhDOFxceEM5XFx4Q0FcXHUxRUMwXFx1MUVCRVxcdTFFQzRcXHUxRUMyXFx1MUVCQ1xcdTAxMTJcXHUxRTE0XFx1MUUxNlxcdTAxMTRcXHUwMTE2XFx4Q0JcXHUxRUJBXFx1MDExQVxcdTAyMDRcXHUwMjA2XFx1MUVCOFxcdTFFQzZcXHUwMjI4XFx1MUUxQ1xcdTAxMThcXHUxRTE4XFx1MUUxQVxcdTAxOTBcXHUwMThFXCJcbn0sIHtcbiAgYmFzZTogJ0YnLFxuICBsZXR0ZXJzOiBcIkZcXHUyNEJCXFx1RkYyNlxcdTFFMUVcXHUwMTkxXFx1QTc3QlwiXG59LCB7XG4gIGJhc2U6ICdHJyxcbiAgbGV0dGVyczogXCJHXFx1MjRCQ1xcdUZGMjdcXHUwMUY0XFx1MDExQ1xcdTFFMjBcXHUwMTFFXFx1MDEyMFxcdTAxRTZcXHUwMTIyXFx1MDFFNFxcdTAxOTNcXHVBN0EwXFx1QTc3RFxcdUE3N0VcIlxufSwge1xuICBiYXNlOiAnSCcsXG4gIGxldHRlcnM6IFwiSFxcdTI0QkRcXHVGRjI4XFx1MDEyNFxcdTFFMjJcXHUxRTI2XFx1MDIxRVxcdTFFMjRcXHUxRTI4XFx1MUUyQVxcdTAxMjZcXHUyQzY3XFx1MkM3NVxcdUE3OERcIlxufSwge1xuICBiYXNlOiAnSScsXG4gIGxldHRlcnM6IFwiSVxcdTI0QkVcXHVGRjI5XFx4Q0NcXHhDRFxceENFXFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEzMFxceENGXFx1MUUyRVxcdTFFQzhcXHUwMUNGXFx1MDIwOFxcdTAyMEFcXHUxRUNBXFx1MDEyRVxcdTFFMkNcXHUwMTk3XCJcbn0sIHtcbiAgYmFzZTogJ0onLFxuICBsZXR0ZXJzOiBcIkpcXHUyNEJGXFx1RkYyQVxcdTAxMzRcXHUwMjQ4XCJcbn0sIHtcbiAgYmFzZTogJ0snLFxuICBsZXR0ZXJzOiBcIktcXHUyNEMwXFx1RkYyQlxcdTFFMzBcXHUwMUU4XFx1MUUzMlxcdTAxMzZcXHUxRTM0XFx1MDE5OFxcdTJDNjlcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBN0EyXCJcbn0sIHtcbiAgYmFzZTogJ0wnLFxuICBsZXR0ZXJzOiBcIkxcXHUyNEMxXFx1RkYyQ1xcdTAxM0ZcXHUwMTM5XFx1MDEzRFxcdTFFMzZcXHUxRTM4XFx1MDEzQlxcdTFFM0NcXHUxRTNBXFx1MDE0MVxcdTAyM0RcXHUyQzYyXFx1MkM2MFxcdUE3NDhcXHVBNzQ2XFx1QTc4MFwiXG59LCB7XG4gIGJhc2U6ICdMSicsXG4gIGxldHRlcnM6IFwiXFx1MDFDN1wiXG59LCB7XG4gIGJhc2U6ICdMaicsXG4gIGxldHRlcnM6IFwiXFx1MDFDOFwiXG59LCB7XG4gIGJhc2U6ICdNJyxcbiAgbGV0dGVyczogXCJNXFx1MjRDMlxcdUZGMkRcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUyQzZFXFx1MDE5Q1wiXG59LCB7XG4gIGJhc2U6ICdOJyxcbiAgbGV0dGVyczogXCJOXFx1MjRDM1xcdUZGMkVcXHUwMUY4XFx1MDE0M1xceEQxXFx1MUU0NFxcdTAxNDdcXHUxRTQ2XFx1MDE0NVxcdTFFNEFcXHUxRTQ4XFx1MDIyMFxcdTAxOURcXHVBNzkwXFx1QTdBNFwiXG59LCB7XG4gIGJhc2U6ICdOSicsXG4gIGxldHRlcnM6IFwiXFx1MDFDQVwiXG59LCB7XG4gIGJhc2U6ICdOaicsXG4gIGxldHRlcnM6IFwiXFx1MDFDQlwiXG59LCB7XG4gIGJhc2U6ICdPJyxcbiAgbGV0dGVyczogXCJPXFx1MjRDNFxcdUZGMkZcXHhEMlxceEQzXFx4RDRcXHUxRUQyXFx1MUVEMFxcdTFFRDZcXHUxRUQ0XFx4RDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHhENlxcdTAyMkFcXHUxRUNFXFx1MDE1MFxcdTAxRDFcXHUwMjBDXFx1MDIwRVxcdTAxQTBcXHUxRURDXFx1MUVEQVxcdTFFRTBcXHUxRURFXFx1MUVFMlxcdTFFQ0NcXHUxRUQ4XFx1MDFFQVxcdTAxRUNcXHhEOFxcdTAxRkVcXHUwMTg2XFx1MDE5RlxcdUE3NEFcXHVBNzRDXCJcbn0sIHtcbiAgYmFzZTogJ09JJyxcbiAgbGV0dGVyczogXCJcXHUwMUEyXCJcbn0sIHtcbiAgYmFzZTogJ09PJyxcbiAgbGV0dGVyczogXCJcXHVBNzRFXCJcbn0sIHtcbiAgYmFzZTogJ09VJyxcbiAgbGV0dGVyczogXCJcXHUwMjIyXCJcbn0sIHtcbiAgYmFzZTogJ1AnLFxuICBsZXR0ZXJzOiBcIlBcXHUyNEM1XFx1RkYzMFxcdTFFNTRcXHUxRTU2XFx1MDFBNFxcdTJDNjNcXHVBNzUwXFx1QTc1MlxcdUE3NTRcIlxufSwge1xuICBiYXNlOiAnUScsXG4gIGxldHRlcnM6IFwiUVxcdTI0QzZcXHVGRjMxXFx1QTc1NlxcdUE3NThcXHUwMjRBXCJcbn0sIHtcbiAgYmFzZTogJ1InLFxuICBsZXR0ZXJzOiBcIlJcXHUyNEM3XFx1RkYzMlxcdTAxNTRcXHUxRTU4XFx1MDE1OFxcdTAyMTBcXHUwMjEyXFx1MUU1QVxcdTFFNUNcXHUwMTU2XFx1MUU1RVxcdTAyNENcXHUyQzY0XFx1QTc1QVxcdUE3QTZcXHVBNzgyXCJcbn0sIHtcbiAgYmFzZTogJ1MnLFxuICBsZXR0ZXJzOiBcIlNcXHUyNEM4XFx1RkYzM1xcdTFFOUVcXHUwMTVBXFx1MUU2NFxcdTAxNUNcXHUxRTYwXFx1MDE2MFxcdTFFNjZcXHUxRTYyXFx1MUU2OFxcdTAyMThcXHUwMTVFXFx1MkM3RVxcdUE3QThcXHVBNzg0XCJcbn0sIHtcbiAgYmFzZTogJ1QnLFxuICBsZXR0ZXJzOiBcIlRcXHUyNEM5XFx1RkYzNFxcdTFFNkFcXHUwMTY0XFx1MUU2Q1xcdTAyMUFcXHUwMTYyXFx1MUU3MFxcdTFFNkVcXHUwMTY2XFx1MDFBQ1xcdTAxQUVcXHUwMjNFXFx1QTc4NlwiXG59LCB7XG4gIGJhc2U6ICdUWicsXG4gIGxldHRlcnM6IFwiXFx1QTcyOFwiXG59LCB7XG4gIGJhc2U6ICdVJyxcbiAgbGV0dGVyczogXCJVXFx1MjRDQVxcdUZGMzVcXHhEOVxceERBXFx4REJcXHUwMTY4XFx1MUU3OFxcdTAxNkFcXHUxRTdBXFx1MDE2Q1xceERDXFx1MDFEQlxcdTAxRDdcXHUwMUQ1XFx1MDFEOVxcdTFFRTZcXHUwMTZFXFx1MDE3MFxcdTAxRDNcXHUwMjE0XFx1MDIxNlxcdTAxQUZcXHUxRUVBXFx1MUVFOFxcdTFFRUVcXHUxRUVDXFx1MUVGMFxcdTFFRTRcXHUxRTcyXFx1MDE3MlxcdTFFNzZcXHUxRTc0XFx1MDI0NFwiXG59LCB7XG4gIGJhc2U6ICdWJyxcbiAgbGV0dGVyczogXCJWXFx1MjRDQlxcdUZGMzZcXHUxRTdDXFx1MUU3RVxcdTAxQjJcXHVBNzVFXFx1MDI0NVwiXG59LCB7XG4gIGJhc2U6ICdWWScsXG4gIGxldHRlcnM6IFwiXFx1QTc2MFwiXG59LCB7XG4gIGJhc2U6ICdXJyxcbiAgbGV0dGVyczogXCJXXFx1MjRDQ1xcdUZGMzdcXHUxRTgwXFx1MUU4MlxcdTAxNzRcXHUxRTg2XFx1MUU4NFxcdTFFODhcXHUyQzcyXCJcbn0sIHtcbiAgYmFzZTogJ1gnLFxuICBsZXR0ZXJzOiBcIlhcXHUyNENEXFx1RkYzOFxcdTFFOEFcXHUxRThDXCJcbn0sIHtcbiAgYmFzZTogJ1knLFxuICBsZXR0ZXJzOiBcIllcXHUyNENFXFx1RkYzOVxcdTFFRjJcXHhERFxcdTAxNzZcXHUxRUY4XFx1MDIzMlxcdTFFOEVcXHUwMTc4XFx1MUVGNlxcdTFFRjRcXHUwMUIzXFx1MDI0RVxcdTFFRkVcIlxufSwge1xuICBiYXNlOiAnWicsXG4gIGxldHRlcnM6IFwiWlxcdTI0Q0ZcXHVGRjNBXFx1MDE3OVxcdTFFOTBcXHUwMTdCXFx1MDE3RFxcdTFFOTJcXHUxRTk0XFx1MDFCNVxcdTAyMjRcXHUyQzdGXFx1MkM2QlxcdUE3NjJcIlxufSwge1xuICBiYXNlOiAnYScsXG4gIGxldHRlcnM6IFwiYVxcdTI0RDBcXHVGRjQxXFx1MUU5QVxceEUwXFx4RTFcXHhFMlxcdTFFQTdcXHUxRUE1XFx1MUVBQlxcdTFFQTlcXHhFM1xcdTAxMDFcXHUwMTAzXFx1MUVCMVxcdTFFQUZcXHUxRUI1XFx1MUVCM1xcdTAyMjdcXHUwMUUxXFx4RTRcXHUwMURGXFx1MUVBM1xceEU1XFx1MDFGQlxcdTAxQ0VcXHUwMjAxXFx1MDIwM1xcdTFFQTFcXHUxRUFEXFx1MUVCN1xcdTFFMDFcXHUwMTA1XFx1MkM2NVxcdTAyNTBcIlxufSwge1xuICBiYXNlOiAnYWEnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzNcIlxufSwge1xuICBiYXNlOiAnYWUnLFxuICBsZXR0ZXJzOiBcIlxceEU2XFx1MDFGRFxcdTAxRTNcIlxufSwge1xuICBiYXNlOiAnYW8nLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzVcIlxufSwge1xuICBiYXNlOiAnYXUnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzdcIlxufSwge1xuICBiYXNlOiAnYXYnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzlcXHVBNzNCXCJcbn0sIHtcbiAgYmFzZTogJ2F5JyxcbiAgbGV0dGVyczogXCJcXHVBNzNEXCJcbn0sIHtcbiAgYmFzZTogJ2InLFxuICBsZXR0ZXJzOiBcImJcXHUyNEQxXFx1RkY0MlxcdTFFMDNcXHUxRTA1XFx1MUUwN1xcdTAxODBcXHUwMTgzXFx1MDI1M1wiXG59LCB7XG4gIGJhc2U6ICdjJyxcbiAgbGV0dGVyczogXCJjXFx1MjREMlxcdUZGNDNcXHUwMTA3XFx1MDEwOVxcdTAxMEJcXHUwMTBEXFx4RTdcXHUxRTA5XFx1MDE4OFxcdTAyM0NcXHVBNzNGXFx1MjE4NFwiXG59LCB7XG4gIGJhc2U6ICdkJyxcbiAgbGV0dGVyczogXCJkXFx1MjREM1xcdUZGNDRcXHUxRTBCXFx1MDEwRlxcdTFFMERcXHUxRTExXFx1MUUxM1xcdTFFMEZcXHUwMTExXFx1MDE4Q1xcdTAyNTZcXHUwMjU3XFx1QTc3QVwiXG59LCB7XG4gIGJhc2U6ICdkeicsXG4gIGxldHRlcnM6IFwiXFx1MDFGM1xcdTAxQzZcIlxufSwge1xuICBiYXNlOiAnZScsXG4gIGxldHRlcnM6IFwiZVxcdTI0RDRcXHVGRjQ1XFx4RThcXHhFOVxceEVBXFx1MUVDMVxcdTFFQkZcXHUxRUM1XFx1MUVDM1xcdTFFQkRcXHUwMTEzXFx1MUUxNVxcdTFFMTdcXHUwMTE1XFx1MDExN1xceEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDI1QlxcdTAxRERcIlxufSwge1xuICBiYXNlOiAnZicsXG4gIGxldHRlcnM6IFwiZlxcdTI0RDVcXHVGRjQ2XFx1MUUxRlxcdTAxOTJcXHVBNzdDXCJcbn0sIHtcbiAgYmFzZTogJ2cnLFxuICBsZXR0ZXJzOiBcImdcXHUyNEQ2XFx1RkY0N1xcdTAxRjVcXHUwMTFEXFx1MUUyMVxcdTAxMUZcXHUwMTIxXFx1MDFFN1xcdTAxMjNcXHUwMUU1XFx1MDI2MFxcdUE3QTFcXHUxRDc5XFx1QTc3RlwiXG59LCB7XG4gIGJhc2U6ICdoJyxcbiAgbGV0dGVyczogXCJoXFx1MjREN1xcdUZGNDhcXHUwMTI1XFx1MUUyM1xcdTFFMjdcXHUwMjFGXFx1MUUyNVxcdTFFMjlcXHUxRTJCXFx1MUU5NlxcdTAxMjdcXHUyQzY4XFx1MkM3NlxcdTAyNjVcIlxufSwge1xuICBiYXNlOiAnaHYnLFxuICBsZXR0ZXJzOiBcIlxcdTAxOTVcIlxufSwge1xuICBiYXNlOiAnaScsXG4gIGxldHRlcnM6IFwiaVxcdTI0RDhcXHVGRjQ5XFx4RUNcXHhFRFxceEVFXFx1MDEyOVxcdTAxMkJcXHUwMTJEXFx4RUZcXHUxRTJGXFx1MUVDOVxcdTAxRDBcXHUwMjA5XFx1MDIwQlxcdTFFQ0JcXHUwMTJGXFx1MUUyRFxcdTAyNjhcXHUwMTMxXCJcbn0sIHtcbiAgYmFzZTogJ2onLFxuICBsZXR0ZXJzOiBcImpcXHUyNEQ5XFx1RkY0QVxcdTAxMzVcXHUwMUYwXFx1MDI0OVwiXG59LCB7XG4gIGJhc2U6ICdrJyxcbiAgbGV0dGVyczogXCJrXFx1MjREQVxcdUZGNEJcXHUxRTMxXFx1MDFFOVxcdTFFMzNcXHUwMTM3XFx1MUUzNVxcdTAxOTlcXHUyQzZBXFx1QTc0MVxcdUE3NDNcXHVBNzQ1XFx1QTdBM1wiXG59LCB7XG4gIGJhc2U6ICdsJyxcbiAgbGV0dGVyczogXCJsXFx1MjREQlxcdUZGNENcXHUwMTQwXFx1MDEzQVxcdTAxM0VcXHUxRTM3XFx1MUUzOVxcdTAxM0NcXHUxRTNEXFx1MUUzQlxcdTAxN0ZcXHUwMTQyXFx1MDE5QVxcdTAyNkJcXHUyQzYxXFx1QTc0OVxcdUE3ODFcXHVBNzQ3XCJcbn0sIHtcbiAgYmFzZTogJ2xqJyxcbiAgbGV0dGVyczogXCJcXHUwMUM5XCJcbn0sIHtcbiAgYmFzZTogJ20nLFxuICBsZXR0ZXJzOiBcIm1cXHUyNERDXFx1RkY0RFxcdTFFM0ZcXHUxRTQxXFx1MUU0M1xcdTAyNzFcXHUwMjZGXCJcbn0sIHtcbiAgYmFzZTogJ24nLFxuICBsZXR0ZXJzOiBcIm5cXHUyNEREXFx1RkY0RVxcdTAxRjlcXHUwMTQ0XFx4RjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNVwiXG59LCB7XG4gIGJhc2U6ICduaicsXG4gIGxldHRlcnM6IFwiXFx1MDFDQ1wiXG59LCB7XG4gIGJhc2U6ICdvJyxcbiAgbGV0dGVyczogXCJvXFx1MjRERVxcdUZGNEZcXHhGMlxceEYzXFx4RjRcXHUxRUQzXFx1MUVEMVxcdTFFRDdcXHUxRUQ1XFx4RjVcXHUxRTREXFx1MDIyRFxcdTFFNEZcXHUwMTREXFx1MUU1MVxcdTFFNTNcXHUwMTRGXFx1MDIyRlxcdTAyMzFcXHhGNlxcdTAyMkJcXHUxRUNGXFx1MDE1MVxcdTAxRDJcXHUwMjBEXFx1MDIwRlxcdTAxQTFcXHUxRUREXFx1MUVEQlxcdTFFRTFcXHUxRURGXFx1MUVFM1xcdTFFQ0RcXHUxRUQ5XFx1MDFFQlxcdTAxRURcXHhGOFxcdTAxRkZcXHUwMjU0XFx1QTc0QlxcdUE3NERcXHUwMjc1XCJcbn0sIHtcbiAgYmFzZTogJ29pJyxcbiAgbGV0dGVyczogXCJcXHUwMUEzXCJcbn0sIHtcbiAgYmFzZTogJ291JyxcbiAgbGV0dGVyczogXCJcXHUwMjIzXCJcbn0sIHtcbiAgYmFzZTogJ29vJyxcbiAgbGV0dGVyczogXCJcXHVBNzRGXCJcbn0sIHtcbiAgYmFzZTogJ3AnLFxuICBsZXR0ZXJzOiBcInBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTVcIlxufSwge1xuICBiYXNlOiAncScsXG4gIGxldHRlcnM6IFwicVxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5XCJcbn0sIHtcbiAgYmFzZTogJ3InLFxuICBsZXR0ZXJzOiBcInJcXHUyNEUxXFx1RkY1MlxcdTAxNTVcXHUxRTU5XFx1MDE1OVxcdTAyMTFcXHUwMjEzXFx1MUU1QlxcdTFFNURcXHUwMTU3XFx1MUU1RlxcdTAyNERcXHUwMjdEXFx1QTc1QlxcdUE3QTdcXHVBNzgzXCJcbn0sIHtcbiAgYmFzZTogJ3MnLFxuICBsZXR0ZXJzOiBcInNcXHUyNEUyXFx1RkY1M1xceERGXFx1MDE1QlxcdTFFNjVcXHUwMTVEXFx1MUU2MVxcdTAxNjFcXHUxRTY3XFx1MUU2M1xcdTFFNjlcXHUwMjE5XFx1MDE1RlxcdTAyM0ZcXHVBN0E5XFx1QTc4NVxcdTFFOUJcIlxufSwge1xuICBiYXNlOiAndCcsXG4gIGxldHRlcnM6IFwidFxcdTI0RTNcXHVGRjU0XFx1MUU2QlxcdTFFOTdcXHUwMTY1XFx1MUU2RFxcdTAyMUJcXHUwMTYzXFx1MUU3MVxcdTFFNkZcXHUwMTY3XFx1MDFBRFxcdTAyODhcXHUyQzY2XFx1QTc4N1wiXG59LCB7XG4gIGJhc2U6ICd0eicsXG4gIGxldHRlcnM6IFwiXFx1QTcyOVwiXG59LCB7XG4gIGJhc2U6ICd1JyxcbiAgbGV0dGVyczogXCJ1XFx1MjRFNFxcdUZGNTVcXHhGOVxceEZBXFx4RkJcXHUwMTY5XFx1MUU3OVxcdTAxNkJcXHUxRTdCXFx1MDE2RFxceEZDXFx1MDFEQ1xcdTAxRDhcXHUwMUQ2XFx1MDFEQVxcdTFFRTdcXHUwMTZGXFx1MDE3MVxcdTAxRDRcXHUwMjE1XFx1MDIxN1xcdTAxQjBcXHUxRUVCXFx1MUVFOVxcdTFFRUZcXHUxRUVEXFx1MUVGMVxcdTFFRTVcXHUxRTczXFx1MDE3M1xcdTFFNzdcXHUxRTc1XFx1MDI4OVwiXG59LCB7XG4gIGJhc2U6ICd2JyxcbiAgbGV0dGVyczogXCJ2XFx1MjRFNVxcdUZGNTZcXHUxRTdEXFx1MUU3RlxcdTAyOEJcXHVBNzVGXFx1MDI4Q1wiXG59LCB7XG4gIGJhc2U6ICd2eScsXG4gIGxldHRlcnM6IFwiXFx1QTc2MVwiXG59LCB7XG4gIGJhc2U6ICd3JyxcbiAgbGV0dGVyczogXCJ3XFx1MjRFNlxcdUZGNTdcXHUxRTgxXFx1MUU4M1xcdTAxNzVcXHUxRTg3XFx1MUU4NVxcdTFFOThcXHUxRTg5XFx1MkM3M1wiXG59LCB7XG4gIGJhc2U6ICd4JyxcbiAgbGV0dGVyczogXCJ4XFx1MjRFN1xcdUZGNThcXHUxRThCXFx1MUU4RFwiXG59LCB7XG4gIGJhc2U6ICd5JyxcbiAgbGV0dGVyczogXCJ5XFx1MjRFOFxcdUZGNTlcXHUxRUYzXFx4RkRcXHUwMTc3XFx1MUVGOVxcdTAyMzNcXHUxRThGXFx4RkZcXHUxRUY3XFx1MUU5OVxcdTFFRjVcXHUwMUI0XFx1MDI0RlxcdTFFRkZcIlxufSwge1xuICBiYXNlOiAneicsXG4gIGxldHRlcnM6IFwielxcdTI0RTlcXHVGRjVBXFx1MDE3QVxcdTFFOTFcXHUwMTdDXFx1MDE3RVxcdTFFOTNcXHUxRTk1XFx1MDFCNlxcdTAyMjVcXHUwMjQwXFx1MkM2Q1xcdUE3NjNcIlxufV07XG52YXIgYW55RGlhY3JpdGljID0gbmV3IFJlZ0V4cCgnWycgKyBkaWFjcml0aWNzLm1hcChmdW5jdGlvbiAoZCkge1xuICByZXR1cm4gZC5sZXR0ZXJzO1xufSkuam9pbignJykgKyAnXScsICdnJyk7XG52YXIgZGlhY3JpdGljVG9CYXNlID0ge307XG5mb3IgKHZhciBpID0gMDsgaSA8IGRpYWNyaXRpY3MubGVuZ3RoOyBpKyspIHtcbiAgdmFyIGRpYWNyaXRpYyA9IGRpYWNyaXRpY3NbaV07XG4gIGZvciAodmFyIGogPSAwOyBqIDwgZGlhY3JpdGljLmxldHRlcnMubGVuZ3RoOyBqKyspIHtcbiAgICBkaWFjcml0aWNUb0Jhc2VbZGlhY3JpdGljLmxldHRlcnNbal1dID0gZGlhY3JpdGljLmJhc2U7XG4gIH1cbn1cbnZhciBzdHJpcERpYWNyaXRpY3MgPSBmdW5jdGlvbiBzdHJpcERpYWNyaXRpY3Moc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShhbnlEaWFjcml0aWMsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBkaWFjcml0aWNUb0Jhc2VbbWF0Y2hdO1xuICB9KTtcbn07XG5cbnZhciBtZW1vaXplZFN0cmlwRGlhY3JpdGljc0ZvcklucHV0ID0gbWVtb2l6ZU9uZShzdHJpcERpYWNyaXRpY3MpO1xudmFyIHRyaW1TdHJpbmcgPSBmdW5jdGlvbiB0cmltU3RyaW5nKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbn07XG52YXIgZGVmYXVsdFN0cmluZ2lmeSA9IGZ1bmN0aW9uIGRlZmF1bHRTdHJpbmdpZnkob3B0aW9uKSB7XG4gIHJldHVybiBcIlwiLmNvbmNhdChvcHRpb24ubGFiZWwsIFwiIFwiKS5jb25jYXQob3B0aW9uLnZhbHVlKTtcbn07XG52YXIgY3JlYXRlRmlsdGVyID0gZnVuY3Rpb24gY3JlYXRlRmlsdGVyKGNvbmZpZykge1xuICByZXR1cm4gZnVuY3Rpb24gKG9wdGlvbiwgcmF3SW5wdXQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICBpZiAob3B0aW9uLmRhdGEuX19pc05ld19fKSByZXR1cm4gdHJ1ZTtcbiAgICB2YXIgX2lnbm9yZUNhc2UkaWdub3JlQWNjID0gX29iamVjdFNwcmVhZCh7XG4gICAgICAgIGlnbm9yZUNhc2U6IHRydWUsXG4gICAgICAgIGlnbm9yZUFjY2VudHM6IHRydWUsXG4gICAgICAgIHN0cmluZ2lmeTogZGVmYXVsdFN0cmluZ2lmeSxcbiAgICAgICAgdHJpbTogdHJ1ZSxcbiAgICAgICAgbWF0Y2hGcm9tOiAnYW55J1xuICAgICAgfSwgY29uZmlnKSxcbiAgICAgIGlnbm9yZUNhc2UgPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2MuaWdub3JlQ2FzZSxcbiAgICAgIGlnbm9yZUFjY2VudHMgPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2MuaWdub3JlQWNjZW50cyxcbiAgICAgIHN0cmluZ2lmeSA9IF9pZ25vcmVDYXNlJGlnbm9yZUFjYy5zdHJpbmdpZnksXG4gICAgICB0cmltID0gX2lnbm9yZUNhc2UkaWdub3JlQWNjLnRyaW0sXG4gICAgICBtYXRjaEZyb20gPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2MubWF0Y2hGcm9tO1xuICAgIHZhciBpbnB1dCA9IHRyaW0gPyB0cmltU3RyaW5nKHJhd0lucHV0KSA6IHJhd0lucHV0O1xuICAgIHZhciBjYW5kaWRhdGUgPSB0cmltID8gdHJpbVN0cmluZyhzdHJpbmdpZnkob3B0aW9uKSkgOiBzdHJpbmdpZnkob3B0aW9uKTtcbiAgICBpZiAoaWdub3JlQ2FzZSkge1xuICAgICAgaW5wdXQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FuZGlkYXRlID0gY2FuZGlkYXRlLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIGlmIChpZ25vcmVBY2NlbnRzKSB7XG4gICAgICBpbnB1dCA9IG1lbW9pemVkU3RyaXBEaWFjcml0aWNzRm9ySW5wdXQoaW5wdXQpO1xuICAgICAgY2FuZGlkYXRlID0gc3RyaXBEaWFjcml0aWNzKGNhbmRpZGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBtYXRjaEZyb20gPT09ICdzdGFydCcgPyBjYW5kaWRhdGUuc3Vic3RyKDAsIGlucHV0Lmxlbmd0aCkgPT09IGlucHV0IDogY2FuZGlkYXRlLmluZGV4T2YoaW5wdXQpID4gLTE7XG4gIH07XG59O1xuXG52YXIgX2V4Y2x1ZGVkID0gW1wiaW5uZXJSZWZcIl07XG5mdW5jdGlvbiBEdW1teUlucHV0KF9yZWYpIHtcbiAgdmFyIGlubmVyUmVmID0gX3JlZi5pbm5lclJlZixcbiAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBfZXhjbHVkZWQpO1xuICAvLyBSZW1vdmUgYW5pbWF0aW9uIHByb3BzIG5vdCBtZWFudCBmb3IgSFRNTCBlbGVtZW50c1xuICB2YXIgZmlsdGVyZWRQcm9wcyA9IHJlbW92ZVByb3BzKHByb3BzLCAnb25FeGl0ZWQnLCAnaW4nLCAnZW50ZXInLCAnZXhpdCcsICdhcHBlYXInKTtcbiAgcmV0dXJuIGpzeChcImlucHV0XCIsIF9leHRlbmRzKHtcbiAgICByZWY6IGlubmVyUmVmXG4gIH0sIGZpbHRlcmVkUHJvcHMsIHtcbiAgICBjc3M6IC8qI19fUFVSRV9fKi9jc3Moe1xuICAgICAgbGFiZWw6ICdkdW1teUlucHV0JyxcbiAgICAgIC8vIGdldCByaWQgb2YgYW55IGRlZmF1bHQgc3R5bGVzXG4gICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgLy8gaW1wb3J0YW50ISB0aGlzIGhpZGVzIHRoZSBmbGFzaGluZyBjdXJzb3JcbiAgICAgIGNhcmV0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgZ3JpZEFyZWE6ICcxIC8gMSAvIDIgLyAzJyxcbiAgICAgIG91dGxpbmU6IDAsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgLy8gaW1wb3J0YW50ISB3aXRob3V0IGB3aWR0aGAgYnJvd3NlcnMgd29uJ3QgYWxsb3cgZm9jdXNcbiAgICAgIHdpZHRoOiAxLFxuICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBkZXNrdG9wXG4gICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gbW9iaWxlIHdoaWxzdCBtYWludGFpbmluZyBcInNjcm9sbCBpbnRvIHZpZXdcIiBiZWhhdmlvdXJcbiAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSguMDEpJ1xuICAgIH0sIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiBcIjtsYWJlbDpEdW1teUlucHV0O1wiLCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcIlwiIDogXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa1IxYlcxNVNXNXdkWFF1ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFYbENUU0lzSW1acGJHVWlPaUpFZFcxdGVVbHVjSFYwTG5SemVDSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxS2lCQWFuTjRJR3B6ZUNBcUwxeHVhVzF3YjNKMElIc2dTbE5ZTENCU1pXWWdmU0JtY205dElDZHlaV0ZqZENjN1hHNXBiWEJ2Y25RZ2V5QnFjM2dnZlNCbWNtOXRJQ2RBWlcxdmRHbHZiaTl5WldGamRDYzdYRzVwYlhCdmNuUWdleUJ5WlcxdmRtVlFjbTl3Y3lCOUlHWnliMjBnSnk0dUwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0Z1JIVnRiWGxKYm5CMWRDaDdYRzRnSUdsdWJtVnlVbVZtTEZ4dUlDQXVMaTV3Y205d2MxeHVmVG9nU2xOWUxrbHVkSEpwYm5OcFkwVnNaVzFsYm5Seld5ZHBibkIxZENkZElDWWdlMXh1SUNCeVpXRmtiMjVzZVNCcGJtNWxjbEpsWmpvZ1VtVm1QRWhVVFV4SmJuQjFkRVZzWlcxbGJuUStPMXh1ZlNrZ2UxeHVJQ0F2THlCU1pXMXZkbVVnWVc1cGJXRjBhVzl1SUhCeWIzQnpJRzV2ZENCdFpXRnVkQ0JtYjNJZ1NGUk5UQ0JsYkdWdFpXNTBjMXh1SUNCamIyNXpkQ0JtYVd4MFpYSmxaRkJ5YjNCeklEMGdjbVZ0YjNabFVISnZjSE1vWEc0Z0lDQWdjSEp2Y0hNc1hHNGdJQ0FnSjI5dVJYaHBkR1ZrSnl4Y2JpQWdJQ0FuYVc0bkxGeHVJQ0FnSUNkbGJuUmxjaWNzWEc0Z0lDQWdKMlY0YVhRbkxGeHVJQ0FnSUNkaGNIQmxZWEluWEc0Z0lDazdYRzVjYmlBZ2NtVjBkWEp1SUNoY2JpQWdJQ0E4YVc1d2RYUmNiaUFnSUNBZ0lISmxaajE3YVc1dVpYSlNaV1o5WEc0Z0lDQWdJQ0I3TGk0dVptbHNkR1Z5WldSUWNtOXdjMzFjYmlBZ0lDQWdJR056Y3oxN2UxeHVJQ0FnSUNBZ0lDQnNZV0psYkRvZ0oyUjFiVzE1U1c1d2RYUW5MRnh1SUNBZ0lDQWdJQ0F2THlCblpYUWdjbWxrSUc5bUlHRnVlU0JrWldaaGRXeDBJSE4wZVd4bGMxeHVJQ0FnSUNBZ0lDQmlZV05yWjNKdmRXNWtPaUF3TEZ4dUlDQWdJQ0FnSUNCaWIzSmtaWEk2SURBc1hHNGdJQ0FnSUNBZ0lDOHZJR2x0Y0c5eWRHRnVkQ0VnZEdocGN5Qm9hV1JsY3lCMGFHVWdabXhoYzJocGJtY2dZM1Z5YzI5eVhHNGdJQ0FnSUNBZ0lHTmhjbVYwUTI5c2IzSTZJQ2QwY21GdWMzQmhjbVZ1ZENjc1hHNGdJQ0FnSUNBZ0lHWnZiblJUYVhwbE9pQW5hVzVvWlhKcGRDY3NYRzRnSUNBZ0lDQWdJR2R5YVdSQmNtVmhPaUFuTVNBdklERWdMeUF5SUM4Z015Y3NYRzRnSUNBZ0lDQWdJRzkxZEd4cGJtVTZJREFzWEc0Z0lDQWdJQ0FnSUhCaFpHUnBibWM2SURBc1hHNGdJQ0FnSUNBZ0lDOHZJR2x0Y0c5eWRHRnVkQ0VnZDJsMGFHOTFkQ0JnZDJsa2RHaGdJR0p5YjNkelpYSnpJSGR2YmlkMElHRnNiRzkzSUdadlkzVnpYRzRnSUNBZ0lDQWdJSGRwWkhSb09pQXhMRnh1WEc0Z0lDQWdJQ0FnSUM4dklISmxiVzkyWlNCamRYSnpiM0lnYjI0Z1pHVnphM1J2Y0Z4dUlDQWdJQ0FnSUNCamIyeHZjam9nSjNSeVlXNXpjR0Z5Wlc1MEp5eGNibHh1SUNBZ0lDQWdJQ0F2THlCeVpXMXZkbVVnWTNWeWMyOXlJRzl1SUcxdlltbHNaU0IzYUdsc2MzUWdiV0ZwYm5SaGFXNXBibWNnWENKelkzSnZiR3dnYVc1MGJ5QjJhV1YzWENJZ1ltVm9ZWFpwYjNWeVhHNGdJQ0FnSUNBZ0lHeGxablE2SUMweE1EQXNYRzRnSUNBZ0lDQWdJRzl3WVdOcGRIazZJREFzWEc0Z0lDQWdJQ0FnSUhCdmMybDBhVzl1T2lBbmNtVnNZWFJwZG1VbkxGeHVJQ0FnSUNBZ0lDQjBjbUZ1YzJadmNtMDZJQ2R6WTJGc1pTZ3VNREVwSnl4Y2JpQWdJQ0FnSUgxOVhHNGdJQ0FnTHo1Y2JpQWdLVHRjYm4xY2JpSmRmUT09ICovXCIpXG4gIH0pKTtcbn1cblxudmFyIGNhbmNlbFNjcm9sbCA9IGZ1bmN0aW9uIGNhbmNlbFNjcm9sbChldmVudCkge1xuICBpZiAoZXZlbnQuY2FuY2VsYWJsZSkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59O1xuZnVuY3Rpb24gdXNlU2Nyb2xsQ2FwdHVyZShfcmVmKSB7XG4gIHZhciBpc0VuYWJsZWQgPSBfcmVmLmlzRW5hYmxlZCxcbiAgICBvbkJvdHRvbUFycml2ZSA9IF9yZWYub25Cb3R0b21BcnJpdmUsXG4gICAgb25Cb3R0b21MZWF2ZSA9IF9yZWYub25Cb3R0b21MZWF2ZSxcbiAgICBvblRvcEFycml2ZSA9IF9yZWYub25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSA9IF9yZWYub25Ub3BMZWF2ZTtcbiAgdmFyIGlzQm90dG9tID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIGlzVG9wID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIHRvdWNoU3RhcnQgPSB1c2VSZWYoMCk7XG4gIHZhciBzY3JvbGxUYXJnZXQgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBoYW5kbGVFdmVudERlbHRhID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50LCBkZWx0YSkge1xuICAgIGlmIChzY3JvbGxUYXJnZXQuY3VycmVudCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIHZhciBfc2Nyb2xsVGFyZ2V0JGN1cnJlbnQgPSBzY3JvbGxUYXJnZXQuY3VycmVudCxcbiAgICAgIHNjcm9sbFRvcCA9IF9zY3JvbGxUYXJnZXQkY3VycmVudC5zY3JvbGxUb3AsXG4gICAgICBzY3JvbGxIZWlnaHQgPSBfc2Nyb2xsVGFyZ2V0JGN1cnJlbnQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgY2xpZW50SGVpZ2h0ID0gX3Njcm9sbFRhcmdldCRjdXJyZW50LmNsaWVudEhlaWdodDtcbiAgICB2YXIgdGFyZ2V0ID0gc2Nyb2xsVGFyZ2V0LmN1cnJlbnQ7XG4gICAgdmFyIGlzRGVsdGFQb3NpdGl2ZSA9IGRlbHRhID4gMDtcbiAgICB2YXIgYXZhaWxhYmxlU2Nyb2xsID0gc2Nyb2xsSGVpZ2h0IC0gY2xpZW50SGVpZ2h0IC0gc2Nyb2xsVG9wO1xuICAgIHZhciBzaG91bGRDYW5jZWxTY3JvbGwgPSBmYWxzZTtcblxuICAgIC8vIHJlc2V0IGJvdHRvbS90b3AgZmxhZ3NcbiAgICBpZiAoYXZhaWxhYmxlU2Nyb2xsID4gZGVsdGEgJiYgaXNCb3R0b20uY3VycmVudCkge1xuICAgICAgaWYgKG9uQm90dG9tTGVhdmUpIG9uQm90dG9tTGVhdmUoZXZlbnQpO1xuICAgICAgaXNCb3R0b20uY3VycmVudCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNEZWx0YVBvc2l0aXZlICYmIGlzVG9wLmN1cnJlbnQpIHtcbiAgICAgIGlmIChvblRvcExlYXZlKSBvblRvcExlYXZlKGV2ZW50KTtcbiAgICAgIGlzVG9wLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBib3R0b20gbGltaXRcbiAgICBpZiAoaXNEZWx0YVBvc2l0aXZlICYmIGRlbHRhID4gYXZhaWxhYmxlU2Nyb2xsKSB7XG4gICAgICBpZiAob25Cb3R0b21BcnJpdmUgJiYgIWlzQm90dG9tLmN1cnJlbnQpIHtcbiAgICAgICAgb25Cb3R0b21BcnJpdmUoZXZlbnQpO1xuICAgICAgfVxuICAgICAgdGFyZ2V0LnNjcm9sbFRvcCA9IHNjcm9sbEhlaWdodDtcbiAgICAgIHNob3VsZENhbmNlbFNjcm9sbCA9IHRydWU7XG4gICAgICBpc0JvdHRvbS5jdXJyZW50ID0gdHJ1ZTtcblxuICAgICAgLy8gdG9wIGxpbWl0XG4gICAgfSBlbHNlIGlmICghaXNEZWx0YVBvc2l0aXZlICYmIC1kZWx0YSA+IHNjcm9sbFRvcCkge1xuICAgICAgaWYgKG9uVG9wQXJyaXZlICYmICFpc1RvcC5jdXJyZW50KSB7XG4gICAgICAgIG9uVG9wQXJyaXZlKGV2ZW50KTtcbiAgICAgIH1cbiAgICAgIHRhcmdldC5zY3JvbGxUb3AgPSAwO1xuICAgICAgc2hvdWxkQ2FuY2VsU2Nyb2xsID0gdHJ1ZTtcbiAgICAgIGlzVG9wLmN1cnJlbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIGNhbmNlbCBzY3JvbGxcbiAgICBpZiAoc2hvdWxkQ2FuY2VsU2Nyb2xsKSB7XG4gICAgICBjYW5jZWxTY3JvbGwoZXZlbnQpO1xuICAgIH1cbiAgfSwgW29uQm90dG9tQXJyaXZlLCBvbkJvdHRvbUxlYXZlLCBvblRvcEFycml2ZSwgb25Ub3BMZWF2ZV0pO1xuICB2YXIgb25XaGVlbCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGhhbmRsZUV2ZW50RGVsdGEoZXZlbnQsIGV2ZW50LmRlbHRhWSk7XG4gIH0sIFtoYW5kbGVFdmVudERlbHRhXSk7XG4gIHZhciBvblRvdWNoU3RhcnQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBzZXQgdG91Y2ggc3RhcnQgc28gd2UgY2FuIGNhbGN1bGF0ZSB0b3VjaG1vdmUgZGVsdGFcbiAgICB0b3VjaFN0YXJ0LmN1cnJlbnQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICB9LCBbXSk7XG4gIHZhciBvblRvdWNoTW92ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBkZWx0YVkgPSB0b3VjaFN0YXJ0LmN1cnJlbnQgLSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgIGhhbmRsZUV2ZW50RGVsdGEoZXZlbnQsIGRlbHRhWSk7XG4gIH0sIFtoYW5kbGVFdmVudERlbHRhXSk7XG4gIHZhciBzdGFydExpc3RlbmluZyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChlbCkge1xuICAgIC8vIGJhaWwgZWFybHkgaWYgbm8gZWxlbWVudCBpcyBhdmFpbGFibGUgdG8gYXR0YWNoIHRvXG4gICAgaWYgKCFlbCkgcmV0dXJuO1xuICAgIHZhciBub3RQYXNzaXZlID0gc3VwcG9ydHNQYXNzaXZlRXZlbnRzID8ge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9IDogZmFsc2U7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBvbldoZWVsLCBub3RQYXNzaXZlKTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBub3RQYXNzaXZlKTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgbm90UGFzc2l2ZSk7XG4gIH0sIFtvblRvdWNoTW92ZSwgb25Ub3VjaFN0YXJ0LCBvbldoZWVsXSk7XG4gIHZhciBzdG9wTGlzdGVuaW5nID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGVsKSB7XG4gICAgLy8gYmFpbCBlYXJseSBpZiBubyBlbGVtZW50IGlzIGF2YWlsYWJsZSB0byBkZXRhY2ggZnJvbVxuICAgIGlmICghZWwpIHJldHVybjtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIG9uV2hlZWwsIGZhbHNlKTtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlKTtcbiAgfSwgW29uVG91Y2hNb3ZlLCBvblRvdWNoU3RhcnQsIG9uV2hlZWxdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWlzRW5hYmxlZCkgcmV0dXJuO1xuICAgIHZhciBlbGVtZW50ID0gc2Nyb2xsVGFyZ2V0LmN1cnJlbnQ7XG4gICAgc3RhcnRMaXN0ZW5pbmcoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0b3BMaXN0ZW5pbmcoZWxlbWVudCk7XG4gICAgfTtcbiAgfSwgW2lzRW5hYmxlZCwgc3RhcnRMaXN0ZW5pbmcsIHN0b3BMaXN0ZW5pbmddKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgc2Nyb2xsVGFyZ2V0LmN1cnJlbnQgPSBlbGVtZW50O1xuICB9O1xufVxuXG52YXIgU1RZTEVfS0VZUyA9IFsnYm94U2l6aW5nJywgJ2hlaWdodCcsICdvdmVyZmxvdycsICdwYWRkaW5nUmlnaHQnLCAncG9zaXRpb24nXTtcbnZhciBMT0NLX1NUWUxFUyA9IHtcbiAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIC8vIGFjY291bnQgZm9yIHBvc3NpYmxlIGRlY2xhcmF0aW9uIGB3aWR0aDogMTAwJTtgIG9uIGJvZHlcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgaGVpZ2h0OiAnMTAwJSdcbn07XG5mdW5jdGlvbiBwcmV2ZW50VG91Y2hNb3ZlKGUpIHtcbiAgaWYgKGUuY2FuY2VsYWJsZSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZnVuY3Rpb24gYWxsb3dUb3VjaE1vdmUoZSkge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xufVxuZnVuY3Rpb24gcHJldmVudEluZXJ0aWFTY3JvbGwoKSB7XG4gIHZhciB0b3AgPSB0aGlzLnNjcm9sbFRvcDtcbiAgdmFyIHRvdGFsU2Nyb2xsID0gdGhpcy5zY3JvbGxIZWlnaHQ7XG4gIHZhciBjdXJyZW50U2Nyb2xsID0gdG9wICsgdGhpcy5vZmZzZXRIZWlnaHQ7XG4gIGlmICh0b3AgPT09IDApIHtcbiAgICB0aGlzLnNjcm9sbFRvcCA9IDE7XG4gIH0gZWxzZSBpZiAoY3VycmVudFNjcm9sbCA9PT0gdG90YWxTY3JvbGwpIHtcbiAgICB0aGlzLnNjcm9sbFRvcCA9IHRvcCAtIDE7XG4gIH1cbn1cblxuLy8gYG9udG91Y2hzdGFydGAgY2hlY2sgd29ya3Mgb24gbW9zdCBicm93c2Vyc1xuLy8gYG1heFRvdWNoUG9pbnRzYCB3b3JrcyBvbiBJRTEwLzExIGFuZCBTdXJmYWNlXG5mdW5jdGlvbiBpc1RvdWNoRGV2aWNlKCkge1xuICByZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cztcbn1cbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xudmFyIGFjdGl2ZVNjcm9sbExvY2tzID0gMDtcbnZhciBsaXN0ZW5lck9wdGlvbnMgPSB7XG4gIGNhcHR1cmU6IGZhbHNlLFxuICBwYXNzaXZlOiBmYWxzZVxufTtcbmZ1bmN0aW9uIHVzZVNjcm9sbExvY2soX3JlZikge1xuICB2YXIgaXNFbmFibGVkID0gX3JlZi5pc0VuYWJsZWQsXG4gICAgX3JlZiRhY2NvdW50Rm9yU2Nyb2xsID0gX3JlZi5hY2NvdW50Rm9yU2Nyb2xsYmFycyxcbiAgICBhY2NvdW50Rm9yU2Nyb2xsYmFycyA9IF9yZWYkYWNjb3VudEZvclNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYkYWNjb3VudEZvclNjcm9sbDtcbiAgdmFyIG9yaWdpbmFsU3R5bGVzID0gdXNlUmVmKHt9KTtcbiAgdmFyIHNjcm9sbFRhcmdldCA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGFkZFNjcm9sbExvY2sgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodG91Y2hTY3JvbGxUYXJnZXQpIHtcbiAgICBpZiAoIWNhblVzZURPTSkgcmV0dXJuO1xuICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5ib2R5O1xuICAgIHZhciB0YXJnZXRTdHlsZSA9IHRhcmdldCAmJiB0YXJnZXQuc3R5bGU7XG4gICAgaWYgKGFjY291bnRGb3JTY3JvbGxiYXJzKSB7XG4gICAgICAvLyBzdG9yZSBhbnkgc3R5bGVzIGFscmVhZHkgYXBwbGllZCB0byB0aGUgYm9keVxuICAgICAgU1RZTEVfS0VZUy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbCA9IHRhcmdldFN0eWxlICYmIHRhcmdldFN0eWxlW2tleV07XG4gICAgICAgIG9yaWdpbmFsU3R5bGVzLmN1cnJlbnRba2V5XSA9IHZhbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IHRoZSBsb2NrIHN0eWxlcyBhbmQgcGFkZGluZyBpZiB0aGlzIGlzIHRoZSBmaXJzdCBzY3JvbGwgbG9ja1xuICAgIGlmIChhY2NvdW50Rm9yU2Nyb2xsYmFycyAmJiBhY3RpdmVTY3JvbGxMb2NrcyA8IDEpIHtcbiAgICAgIHZhciBjdXJyZW50UGFkZGluZyA9IHBhcnNlSW50KG9yaWdpbmFsU3R5bGVzLmN1cnJlbnQucGFkZGluZ1JpZ2h0LCAxMCkgfHwgMDtcbiAgICAgIHZhciBjbGllbnRXaWR0aCA9IGRvY3VtZW50LmJvZHkgPyBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDogMDtcbiAgICAgIHZhciBhZGp1c3RlZFBhZGRpbmcgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGNsaWVudFdpZHRoICsgY3VycmVudFBhZGRpbmcgfHwgMDtcbiAgICAgIE9iamVjdC5rZXlzKExPQ0tfU1RZTEVTKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbCA9IExPQ0tfU1RZTEVTW2tleV07XG4gICAgICAgIGlmICh0YXJnZXRTdHlsZSkge1xuICAgICAgICAgIHRhcmdldFN0eWxlW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHRhcmdldFN0eWxlKSB7XG4gICAgICAgIHRhcmdldFN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCIuY29uY2F0KGFkanVzdGVkUGFkZGluZywgXCJweFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhY2NvdW50IGZvciB0b3VjaCBkZXZpY2VzXG4gICAgaWYgKHRhcmdldCAmJiBpc1RvdWNoRGV2aWNlKCkpIHtcbiAgICAgIC8vIE1vYmlsZSBTYWZhcmkgaWdub3JlcyB7IG92ZXJmbG93OiBoaWRkZW4gfSBkZWNsYXJhdGlvbiBvbiB0aGUgYm9keS5cbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50VG91Y2hNb3ZlLCBsaXN0ZW5lck9wdGlvbnMpO1xuXG4gICAgICAvLyBBbGxvdyBzY3JvbGwgb24gcHJvdmlkZWQgdGFyZ2V0XG4gICAgICBpZiAodG91Y2hTY3JvbGxUYXJnZXQpIHtcbiAgICAgICAgdG91Y2hTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHByZXZlbnRJbmVydGlhU2Nyb2xsLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICB0b3VjaFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBhbGxvd1RvdWNoTW92ZSwgbGlzdGVuZXJPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpbmNyZW1lbnQgYWN0aXZlIHNjcm9sbCBsb2Nrc1xuICAgIGFjdGl2ZVNjcm9sbExvY2tzICs9IDE7XG4gIH0sIFthY2NvdW50Rm9yU2Nyb2xsYmFyc10pO1xuICB2YXIgcmVtb3ZlU2Nyb2xsTG9jayA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh0b3VjaFNjcm9sbFRhcmdldCkge1xuICAgIGlmICghY2FuVXNlRE9NKSByZXR1cm47XG4gICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG4gICAgdmFyIHRhcmdldFN0eWxlID0gdGFyZ2V0ICYmIHRhcmdldC5zdHlsZTtcblxuICAgIC8vIHNhZmVseSBkZWNyZW1lbnQgYWN0aXZlIHNjcm9sbCBsb2Nrc1xuICAgIGFjdGl2ZVNjcm9sbExvY2tzID0gTWF0aC5tYXgoYWN0aXZlU2Nyb2xsTG9ja3MgLSAxLCAwKTtcblxuICAgIC8vIHJlYXBwbHkgb3JpZ2luYWwgYm9keSBzdHlsZXMsIGlmIGFueVxuICAgIGlmIChhY2NvdW50Rm9yU2Nyb2xsYmFycyAmJiBhY3RpdmVTY3JvbGxMb2NrcyA8IDEpIHtcbiAgICAgIFNUWUxFX0tFWVMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWwgPSBvcmlnaW5hbFN0eWxlcy5jdXJyZW50W2tleV07XG4gICAgICAgIGlmICh0YXJnZXRTdHlsZSkge1xuICAgICAgICAgIHRhcmdldFN0eWxlW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSB0b3VjaCBsaXN0ZW5lcnNcbiAgICBpZiAodGFyZ2V0ICYmIGlzVG91Y2hEZXZpY2UoKSkge1xuICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnRUb3VjaE1vdmUsIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICBpZiAodG91Y2hTY3JvbGxUYXJnZXQpIHtcbiAgICAgICAgdG91Y2hTY3JvbGxUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHByZXZlbnRJbmVydGlhU2Nyb2xsLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICB0b3VjaFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBhbGxvd1RvdWNoTW92ZSwgbGlzdGVuZXJPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFthY2NvdW50Rm9yU2Nyb2xsYmFyc10pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghaXNFbmFibGVkKSByZXR1cm47XG4gICAgdmFyIGVsZW1lbnQgPSBzY3JvbGxUYXJnZXQuY3VycmVudDtcbiAgICBhZGRTY3JvbGxMb2NrKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZW1vdmVTY3JvbGxMb2NrKGVsZW1lbnQpO1xuICAgIH07XG4gIH0sIFtpc0VuYWJsZWQsIGFkZFNjcm9sbExvY2ssIHJlbW92ZVNjcm9sbExvY2tdKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgc2Nyb2xsVGFyZ2V0LmN1cnJlbnQgPSBlbGVtZW50O1xuICB9O1xufVxuXG5mdW5jdGlvbiBfRU1PVElPTl9TVFJJTkdJRklFRF9DU1NfRVJST1JfXyQxKCkgeyByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7IH1cbnZhciBibHVyU2VsZWN0SW5wdXQgPSBmdW5jdGlvbiBibHVyU2VsZWN0SW5wdXQoZXZlbnQpIHtcbiAgdmFyIGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gIHJldHVybiBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG59O1xudmFyIF9yZWYyJDEgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIG5hbWU6IFwiMWtmZGIwZVwiLFxuICBzdHlsZXM6IFwicG9zaXRpb246Zml4ZWQ7bGVmdDowO2JvdHRvbTowO3JpZ2h0OjA7dG9wOjBcIlxufSA6IHtcbiAgbmFtZTogXCJicDhjdWEtU2Nyb2xsTWFuYWdlclwiLFxuICBzdHlsZXM6IFwicG9zaXRpb246Zml4ZWQ7bGVmdDowO2JvdHRvbTowO3JpZ2h0OjA7dG9wOjA7bGFiZWw6U2Nyb2xsTWFuYWdlcjtcIixcbiAgbWFwOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklsTmpjbTlzYkUxaGJtRm5aWEl1ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFXOUVWU0lzSW1acGJHVWlPaUpUWTNKdmJHeE5ZVzVoWjJWeUxuUnplQ0lzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUtpQkFhbk40SUdwemVDQXFMMXh1YVcxd2IzSjBJSHNnYW5ONElIMGdabkp2YlNBblFHVnRiM1JwYjI0dmNtVmhZM1FuTzF4dWFXMXdiM0owSUhzZ1JuSmhaMjFsYm5Rc0lGSmxZV04wUld4bGJXVnVkQ3dnVW1WbVEyRnNiR0poWTJzc0lFMXZkWE5sUlhabGJuUWdmU0JtY205dElDZHlaV0ZqZENjN1hHNXBiWEJ2Y25RZ2RYTmxVMk55YjJ4c1EyRndkSFZ5WlNCbWNtOXRJQ2N1TDNWelpWTmpjbTlzYkVOaGNIUjFjbVVuTzF4dWFXMXdiM0owSUhWelpWTmpjbTlzYkV4dlkyc2dabkp2YlNBbkxpOTFjMlZUWTNKdmJHeE1iMk5ySnp0Y2JseHVhVzUwWlhKbVlXTmxJRkJ5YjNCeklIdGNiaUFnY21WaFpHOXViSGtnWTJocGJHUnlaVzQ2SUNoeVpXWTZJRkpsWmtOaGJHeGlZV05yUEVoVVRVeEZiR1Z0Wlc1MFBpa2dQVDRnVW1WaFkzUkZiR1Z0Wlc1ME8xeHVJQ0J5WldGa2IyNXNlU0JzYjJOclJXNWhZbXhsWkRvZ1ltOXZiR1ZoYmp0Y2JpQWdjbVZoWkc5dWJIa2dZMkZ3ZEhWeVpVVnVZV0pzWldRNklHSnZiMnhsWVc0N1hHNGdJSEpsWVdSdmJteDVJRzl1UW05MGRHOXRRWEp5YVhabFB6b2dLR1YyWlc1ME9pQlhhR1ZsYkVWMlpXNTBJSHdnVkc5MVkyaEZkbVZ1ZENrZ1BUNGdkbTlwWkR0Y2JpQWdjbVZoWkc5dWJIa2diMjVDYjNSMGIyMU1aV0YyWlQ4NklDaGxkbVZ1ZERvZ1YyaGxaV3hGZG1WdWRDQjhJRlJ2ZFdOb1JYWmxiblFwSUQwK0lIWnZhV1E3WEc0Z0lISmxZV1J2Ym14NUlHOXVWRzl3UVhKeWFYWmxQem9nS0dWMlpXNTBPaUJYYUdWbGJFVjJaVzUwSUh3Z1ZHOTFZMmhGZG1WdWRDa2dQVDRnZG05cFpEdGNiaUFnY21WaFpHOXViSGtnYjI1VWIzQk1aV0YyWlQ4NklDaGxkbVZ1ZERvZ1YyaGxaV3hGZG1WdWRDQjhJRlJ2ZFdOb1JYWmxiblFwSUQwK0lIWnZhV1E3WEc1OVhHNWNibU52Ym5OMElHSnNkWEpUWld4bFkzUkpibkIxZENBOUlDaGxkbVZ1ZERvZ1RXOTFjMlZGZG1WdWREeElWRTFNUkdsMlJXeGxiV1Z1ZEQ0cElEMCtJSHRjYmlBZ1kyOXVjM1FnWld4bGJXVnVkQ0E5SUdWMlpXNTBMblJoY21kbGRDQmhjeUJJVkUxTVJHbDJSV3hsYldWdWREdGNiaUFnY21WMGRYSnVJQ2hjYmlBZ0lDQmxiR1Z0Wlc1MExtOTNibVZ5Ukc5amRXMWxiblF1WVdOMGFYWmxSV3hsYldWdWRDQW1KbHh1SUNBZ0lDaGxiR1Z0Wlc1MExtOTNibVZ5Ukc5amRXMWxiblF1WVdOMGFYWmxSV3hsYldWdWRDQmhjeUJJVkUxTVJXeGxiV1Z1ZENrdVlteDFjaWdwWEc0Z0lDazdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCVFkzSnZiR3hOWVc1aFoyVnlLSHRjYmlBZ1kyaHBiR1J5Wlc0c1hHNGdJR3h2WTJ0RmJtRmliR1ZrTEZ4dUlDQmpZWEIwZFhKbFJXNWhZbXhsWkNBOUlIUnlkV1VzWEc0Z0lHOXVRbTkwZEc5dFFYSnlhWFpsTEZ4dUlDQnZia0p2ZEhSdmJVeGxZWFpsTEZ4dUlDQnZibFJ2Y0VGeWNtbDJaU3hjYmlBZ2IyNVViM0JNWldGMlpTeGNibjA2SUZCeWIzQnpLU0I3WEc0Z0lHTnZibk4wSUhObGRGTmpjbTlzYkVOaGNIUjFjbVZVWVhKblpYUWdQU0IxYzJWVFkzSnZiR3hEWVhCMGRYSmxLSHRjYmlBZ0lDQnBjMFZ1WVdKc1pXUTZJR05oY0hSMWNtVkZibUZpYkdWa0xGeHVJQ0FnSUc5dVFtOTBkRzl0UVhKeWFYWmxMRnh1SUNBZ0lHOXVRbTkwZEc5dFRHVmhkbVVzWEc0Z0lDQWdiMjVVYjNCQmNuSnBkbVVzWEc0Z0lDQWdiMjVVYjNCTVpXRjJaU3hjYmlBZ2ZTazdYRzRnSUdOdmJuTjBJSE5sZEZOamNtOXNiRXh2WTJ0VVlYSm5aWFFnUFNCMWMyVlRZM0p2Ykd4TWIyTnJLSHNnYVhORmJtRmliR1ZrT2lCc2IyTnJSVzVoWW14bFpDQjlLVHRjYmx4dUlDQmpiMjV6ZENCMFlYSm5aWFJTWldZNklGSmxaa05oYkd4aVlXTnJQRWhVVFV4RmJHVnRaVzUwUGlBOUlDaGxiR1Z0Wlc1MEtTQTlQaUI3WEc0Z0lDQWdjMlYwVTJOeWIyeHNRMkZ3ZEhWeVpWUmhjbWRsZENobGJHVnRaVzUwS1R0Y2JpQWdJQ0J6WlhSVFkzSnZiR3hNYjJOclZHRnlaMlYwS0dWc1pXMWxiblFwTzF4dUlDQjlPMXh1WEc0Z0lISmxkSFZ5YmlBb1hHNGdJQ0FnUEVaeVlXZHRaVzUwUGx4dUlDQWdJQ0FnZTJ4dlkydEZibUZpYkdWa0lDWW1JQ2hjYmlBZ0lDQWdJQ0FnUEdScGRseHVJQ0FnSUNBZ0lDQWdJRzl1UTJ4cFkyczllMkpzZFhKVFpXeGxZM1JKYm5CMWRIMWNiaUFnSUNBZ0lDQWdJQ0JqYzNNOWUzc2djRzl6YVhScGIyNDZJQ2RtYVhobFpDY3NJR3hsWm5RNklEQXNJR0p2ZEhSdmJUb2dNQ3dnY21sbmFIUTZJREFzSUhSdmNEb2dNQ0I5ZlZ4dUlDQWdJQ0FnSUNBdlBseHVJQ0FnSUNBZ0tYMWNiaUFnSUNBZ0lIdGphR2xzWkhKbGJpaDBZWEpuWlhSU1pXWXBmVnh1SUNBZ0lEd3ZSbkpoWjIxbGJuUStYRzRnSUNrN1hHNTlYRzRpWFgwPSAqL1wiLFxuICB0b1N0cmluZzogX0VNT1RJT05fU1RSSU5HSUZJRURfQ1NTX0VSUk9SX18kMVxufTtcbmZ1bmN0aW9uIFNjcm9sbE1hbmFnZXIoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgIGxvY2tFbmFibGVkID0gX3JlZi5sb2NrRW5hYmxlZCxcbiAgICBfcmVmJGNhcHR1cmVFbmFibGVkID0gX3JlZi5jYXB0dXJlRW5hYmxlZCxcbiAgICBjYXB0dXJlRW5hYmxlZCA9IF9yZWYkY2FwdHVyZUVuYWJsZWQgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlID0gX3JlZi5vbkJvdHRvbUFycml2ZSxcbiAgICBvbkJvdHRvbUxlYXZlID0gX3JlZi5vbkJvdHRvbUxlYXZlLFxuICAgIG9uVG9wQXJyaXZlID0gX3JlZi5vblRvcEFycml2ZSxcbiAgICBvblRvcExlYXZlID0gX3JlZi5vblRvcExlYXZlO1xuICB2YXIgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldCA9IHVzZVNjcm9sbENhcHR1cmUoe1xuICAgIGlzRW5hYmxlZDogY2FwdHVyZUVuYWJsZWQsXG4gICAgb25Cb3R0b21BcnJpdmU6IG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmU6IG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmU6IG9uVG9wQXJyaXZlLFxuICAgIG9uVG9wTGVhdmU6IG9uVG9wTGVhdmVcbiAgfSk7XG4gIHZhciBzZXRTY3JvbGxMb2NrVGFyZ2V0ID0gdXNlU2Nyb2xsTG9jayh7XG4gICAgaXNFbmFibGVkOiBsb2NrRW5hYmxlZFxuICB9KTtcbiAgdmFyIHRhcmdldFJlZiA9IGZ1bmN0aW9uIHRhcmdldFJlZihlbGVtZW50KSB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuICByZXR1cm4ganN4KEZyYWdtZW50LCBudWxsLCBsb2NrRW5hYmxlZCAmJiBqc3goXCJkaXZcIiwge1xuICAgIG9uQ2xpY2s6IGJsdXJTZWxlY3RJbnB1dCxcbiAgICBjc3M6IF9yZWYyJDFcbiAgfSksIGNoaWxkcmVuKHRhcmdldFJlZikpO1xufVxuXG5mdW5jdGlvbiBfRU1PVElPTl9TVFJJTkdJRklFRF9DU1NfRVJST1JfXygpIHsgcmV0dXJuIFwiWW91IGhhdmUgdHJpZWQgdG8gc3RyaW5naWZ5IG9iamVjdCByZXR1cm5lZCBmcm9tIGBjc3NgIGZ1bmN0aW9uLiBJdCBpc24ndCBzdXBwb3NlZCB0byBiZSB1c2VkIGRpcmVjdGx5IChlLmcuIGFzIHZhbHVlIG9mIHRoZSBgY2xhc3NOYW1lYCBwcm9wKSwgYnV0IHJhdGhlciBoYW5kZWQgdG8gZW1vdGlvbiBzbyBpdCBjYW4gaGFuZGxlIGl0IChlLmcuIGFzIHZhbHVlIG9mIGBjc3NgIHByb3ApLlwiOyB9XG52YXIgX3JlZjIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIG5hbWU6IFwiMWEwcm80bi1yZXF1aXJlZElucHV0XCIsXG4gIHN0eWxlczogXCJsYWJlbDpyZXF1aXJlZElucHV0O29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3dpZHRoOjEwMCVcIlxufSA6IHtcbiAgbmFtZTogXCI1a2t4YjItcmVxdWlyZWRJbnB1dC1SZXF1aXJlZElucHV0XCIsXG4gIHN0eWxlczogXCJsYWJlbDpyZXF1aXJlZElucHV0O29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3dpZHRoOjEwMCU7bGFiZWw6UmVxdWlyZWRJbnB1dDtcIixcbiAgbWFwOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklsSmxjWFZwY21Wa1NXNXdkWFF1ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFXTkpJaXdpWm1sc1pTSTZJbEpsY1hWcGNtVmtTVzV3ZFhRdWRITjRJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlvcUlFQnFjM2dnYW5ONElDb3ZYRzVwYlhCdmNuUWdleUJHYjJOMWMwVjJaVzUwU0dGdVpHeGxjaXdnUm5WdVkzUnBiMjVEYjIxd2IyNWxiblFnZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdleUJxYzNnZ2ZTQm1jbTl0SUNkQVpXMXZkR2x2Ymk5eVpXRmpkQ2M3WEc1Y2JtTnZibk4wSUZKbGNYVnBjbVZrU1c1d2RYUTZJRVoxYm1OMGFXOXVRMjl0Y0c5dVpXNTBQSHRjYmlBZ2NtVmhaRzl1YkhrZ2JtRnRaVDg2SUhOMGNtbHVaenRjYmlBZ2NtVmhaRzl1YkhrZ2IyNUdiMk4xY3pvZ1JtOWpkWE5GZG1WdWRFaGhibVJzWlhJOFNGUk5URWx1Y0hWMFJXeGxiV1Z1ZEQ0N1hHNTlQaUE5SUNoN0lHNWhiV1VzSUc5dVJtOWpkWE1nZlNrZ1BUNGdLRnh1SUNBOGFXNXdkWFJjYmlBZ0lDQnlaWEYxYVhKbFpGeHVJQ0FnSUc1aGJXVTllMjVoYldWOVhHNGdJQ0FnZEdGaVNXNWtaWGc5ZXkweGZWeHVJQ0FnSUdGeWFXRXRhR2xrWkdWdVBWd2lkSEoxWlZ3aVhHNGdJQ0FnYjI1R2IyTjFjejE3YjI1R2IyTjFjMzFjYmlBZ0lDQmpjM005ZTN0Y2JpQWdJQ0FnSUd4aFltVnNPaUFuY21WeGRXbHlaV1JKYm5CMWRDY3NYRzRnSUNBZ0lDQnZjR0ZqYVhSNU9pQXdMRnh1SUNBZ0lDQWdjRzlwYm5SbGNrVjJaVzUwY3pvZ0oyNXZibVVuTEZ4dUlDQWdJQ0FnY0c5emFYUnBiMjQ2SUNkaFluTnZiSFYwWlNjc1hHNGdJQ0FnSUNCaWIzUjBiMjA2SURBc1hHNGdJQ0FnSUNCc1pXWjBPaUF3TEZ4dUlDQWdJQ0FnY21sbmFIUTZJREFzWEc0Z0lDQWdJQ0IzYVdSMGFEb2dKekV3TUNVbkxGeHVJQ0FnSUgxOVhHNGdJQ0FnTHk4Z1VISmxkbVZ1ZENCZ1UzZHBkR05vYVc1bklHWnliMjBnZFc1amIyNTBjbTlzYkdWa0lIUnZJR052Ym5SeWIyeHNaV1JnSUdWeWNtOXlYRzRnSUNBZ2RtRnNkV1U5WENKY0lseHVJQ0FnSUc5dVEyaGhibWRsUFhzb0tTQTlQaUI3ZlgxY2JpQWdMejVjYmlrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElGSmxjWFZwY21Wa1NXNXdkWFE3WEc0aVhYMD0gKi9cIixcbiAgdG9TdHJpbmc6IF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fXG59O1xudmFyIFJlcXVpcmVkSW5wdXQgPSBmdW5jdGlvbiBSZXF1aXJlZElucHV0KF9yZWYpIHtcbiAgdmFyIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgb25Gb2N1cyA9IF9yZWYub25Gb2N1cztcbiAgcmV0dXJuIGpzeChcImlucHV0XCIsIHtcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBuYW1lOiBuYW1lLFxuICAgIHRhYkluZGV4OiAtMSxcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgIG9uRm9jdXM6IG9uRm9jdXMsXG4gICAgY3NzOiBfcmVmMlxuICAgIC8vIFByZXZlbnQgYFN3aXRjaGluZyBmcm9tIHVuY29udHJvbGxlZCB0byBjb250cm9sbGVkYCBlcnJvclxuICAgICxcbiAgICB2YWx1ZTogXCJcIixcbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoKSB7fVxuICB9KTtcbn07XG52YXIgUmVxdWlyZWRJbnB1dCQxID0gUmVxdWlyZWRJbnB1dDtcblxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ1c2VyLWFnZW50LWRhdGEtdHlwZXNcIiAvPlxuXG5mdW5jdGlvbiB0ZXN0UGxhdGZvcm0ocmUpIHtcbiAgdmFyIF93aW5kb3ckbmF2aWdhdG9yJHVzZTtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IgIT0gbnVsbCA/IHJlLnRlc3QoKChfd2luZG93JG5hdmlnYXRvciR1c2UgPSB3aW5kb3cubmF2aWdhdG9yWyd1c2VyQWdlbnREYXRhJ10pID09PSBudWxsIHx8IF93aW5kb3ckbmF2aWdhdG9yJHVzZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3dpbmRvdyRuYXZpZ2F0b3IkdXNlLnBsYXRmb3JtKSB8fCB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtKSA6IGZhbHNlO1xufVxuZnVuY3Rpb24gaXNJUGhvbmUoKSB7XG4gIHJldHVybiB0ZXN0UGxhdGZvcm0oL15pUGhvbmUvaSk7XG59XG5mdW5jdGlvbiBpc01hYygpIHtcbiAgcmV0dXJuIHRlc3RQbGF0Zm9ybSgvXk1hYy9pKTtcbn1cbmZ1bmN0aW9uIGlzSVBhZCgpIHtcbiAgcmV0dXJuIHRlc3RQbGF0Zm9ybSgvXmlQYWQvaSkgfHxcbiAgLy8gaVBhZE9TIDEzIGxpZXMgYW5kIHNheXMgaXQncyBhIE1hYywgYnV0IHdlIGNhbiBkaXN0aW5ndWlzaCBieSBkZXRlY3RpbmcgdG91Y2ggc3VwcG9ydC5cbiAgaXNNYWMoKSAmJiBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxO1xufVxuZnVuY3Rpb24gaXNJT1MoKSB7XG4gIHJldHVybiBpc0lQaG9uZSgpIHx8IGlzSVBhZCgpO1xufVxuZnVuY3Rpb24gaXNBcHBsZURldmljZSgpIHtcbiAgcmV0dXJuIGlzTWFjKCkgfHwgaXNJT1MoKTtcbn1cblxudmFyIGZvcm1hdEdyb3VwTGFiZWwgPSBmdW5jdGlvbiBmb3JtYXRHcm91cExhYmVsKGdyb3VwKSB7XG4gIHJldHVybiBncm91cC5sYWJlbDtcbn07XG52YXIgZ2V0T3B0aW9uTGFiZWwkMSA9IGZ1bmN0aW9uIGdldE9wdGlvbkxhYmVsKG9wdGlvbikge1xuICByZXR1cm4gb3B0aW9uLmxhYmVsO1xufTtcbnZhciBnZXRPcHRpb25WYWx1ZSQxID0gZnVuY3Rpb24gZ2V0T3B0aW9uVmFsdWUob3B0aW9uKSB7XG4gIHJldHVybiBvcHRpb24udmFsdWU7XG59O1xudmFyIGlzT3B0aW9uRGlzYWJsZWQgPSBmdW5jdGlvbiBpc09wdGlvbkRpc2FibGVkKG9wdGlvbikge1xuICByZXR1cm4gISFvcHRpb24uaXNEaXNhYmxlZDtcbn07XG5cbnZhciBkZWZhdWx0U3R5bGVzID0ge1xuICBjbGVhckluZGljYXRvcjogY2xlYXJJbmRpY2F0b3JDU1MsXG4gIGNvbnRhaW5lcjogY29udGFpbmVyQ1NTLFxuICBjb250cm9sOiBjc3MkMSxcbiAgZHJvcGRvd25JbmRpY2F0b3I6IGRyb3Bkb3duSW5kaWNhdG9yQ1NTLFxuICBncm91cDogZ3JvdXBDU1MsXG4gIGdyb3VwSGVhZGluZzogZ3JvdXBIZWFkaW5nQ1NTLFxuICBpbmRpY2F0b3JzQ29udGFpbmVyOiBpbmRpY2F0b3JzQ29udGFpbmVyQ1NTLFxuICBpbmRpY2F0b3JTZXBhcmF0b3I6IGluZGljYXRvclNlcGFyYXRvckNTUyxcbiAgaW5wdXQ6IGlucHV0Q1NTLFxuICBsb2FkaW5nSW5kaWNhdG9yOiBsb2FkaW5nSW5kaWNhdG9yQ1NTLFxuICBsb2FkaW5nTWVzc2FnZTogbG9hZGluZ01lc3NhZ2VDU1MsXG4gIG1lbnU6IG1lbnVDU1MsXG4gIG1lbnVMaXN0OiBtZW51TGlzdENTUyxcbiAgbWVudVBvcnRhbDogbWVudVBvcnRhbENTUyxcbiAgbXVsdGlWYWx1ZTogbXVsdGlWYWx1ZUNTUyxcbiAgbXVsdGlWYWx1ZUxhYmVsOiBtdWx0aVZhbHVlTGFiZWxDU1MsXG4gIG11bHRpVmFsdWVSZW1vdmU6IG11bHRpVmFsdWVSZW1vdmVDU1MsXG4gIG5vT3B0aW9uc01lc3NhZ2U6IG5vT3B0aW9uc01lc3NhZ2VDU1MsXG4gIG9wdGlvbjogb3B0aW9uQ1NTLFxuICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXJDU1MsXG4gIHNpbmdsZVZhbHVlOiBjc3MkMixcbiAgdmFsdWVDb250YWluZXI6IHZhbHVlQ29udGFpbmVyQ1NTXG59O1xuLy8gTWVyZ2UgVXRpbGl0eVxuLy8gQWxsb3dzIGNvbnN1bWVycyB0byBleHRlbmQgYSBiYXNlIFNlbGVjdCB3aXRoIGFkZGl0aW9uYWwgc3R5bGVzXG5cbmZ1bmN0aW9uIG1lcmdlU3R5bGVzKHNvdXJjZSkge1xuICB2YXIgdGFyZ2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgLy8gaW5pdGlhbGl6ZSB3aXRoIHNvdXJjZSBzdHlsZXNcbiAgdmFyIHN0eWxlcyA9IF9vYmplY3RTcHJlYWQoe30sIHNvdXJjZSk7XG5cbiAgLy8gbWFzc2FnZSBpbiB0YXJnZXQgc3R5bGVzXG4gIE9iamVjdC5rZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5QXNTdHJpbmcpIHtcbiAgICB2YXIga2V5ID0ga2V5QXNTdHJpbmc7XG4gICAgaWYgKHNvdXJjZVtrZXldKSB7XG4gICAgICBzdHlsZXNba2V5XSA9IGZ1bmN0aW9uIChyc0NzcywgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldKHNvdXJjZVtrZXldKHJzQ3NzLCBwcm9wcyksIHByb3BzKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc1trZXldID0gdGFyZ2V0W2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHN0eWxlcztcbn1cblxudmFyIGNvbG9ycyA9IHtcbiAgcHJpbWFyeTogJyMyNjg0RkYnLFxuICBwcmltYXJ5NzU6ICcjNEM5QUZGJyxcbiAgcHJpbWFyeTUwOiAnI0IyRDRGRicsXG4gIHByaW1hcnkyNTogJyNERUVCRkYnLFxuICBkYW5nZXI6ICcjREUzNTBCJyxcbiAgZGFuZ2VyTGlnaHQ6ICcjRkZCREFEJyxcbiAgbmV1dHJhbDA6ICdoc2woMCwgMCUsIDEwMCUpJyxcbiAgbmV1dHJhbDU6ICdoc2woMCwgMCUsIDk1JSknLFxuICBuZXV0cmFsMTA6ICdoc2woMCwgMCUsIDkwJSknLFxuICBuZXV0cmFsMjA6ICdoc2woMCwgMCUsIDgwJSknLFxuICBuZXV0cmFsMzA6ICdoc2woMCwgMCUsIDcwJSknLFxuICBuZXV0cmFsNDA6ICdoc2woMCwgMCUsIDYwJSknLFxuICBuZXV0cmFsNTA6ICdoc2woMCwgMCUsIDUwJSknLFxuICBuZXV0cmFsNjA6ICdoc2woMCwgMCUsIDQwJSknLFxuICBuZXV0cmFsNzA6ICdoc2woMCwgMCUsIDMwJSknLFxuICBuZXV0cmFsODA6ICdoc2woMCwgMCUsIDIwJSknLFxuICBuZXV0cmFsOTA6ICdoc2woMCwgMCUsIDEwJSknXG59O1xudmFyIGJvcmRlclJhZGl1cyA9IDQ7XG4vLyBVc2VkIHRvIGNhbGN1bGF0ZSBjb25zaXN0ZW50IG1hcmdpbi9wYWRkaW5nIG9uIGVsZW1lbnRzXG52YXIgYmFzZVVuaXQgPSA0O1xuLy8gVGhlIG1pbmltdW0gaGVpZ2h0IG9mIHRoZSBjb250cm9sXG52YXIgY29udHJvbEhlaWdodCA9IDM4O1xuLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSBjb250cm9sIGFuZCBtZW51ICovXG52YXIgbWVudUd1dHRlciA9IGJhc2VVbml0ICogMjtcbnZhciBzcGFjaW5nID0ge1xuICBiYXNlVW5pdDogYmFzZVVuaXQsXG4gIGNvbnRyb2xIZWlnaHQ6IGNvbnRyb2xIZWlnaHQsXG4gIG1lbnVHdXR0ZXI6IG1lbnVHdXR0ZXJcbn07XG52YXIgZGVmYXVsdFRoZW1lID0ge1xuICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgY29sb3JzOiBjb2xvcnMsXG4gIHNwYWNpbmc6IHNwYWNpbmdcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gICdhcmlhLWxpdmUnOiAncG9saXRlJyxcbiAgYmFja3NwYWNlUmVtb3Zlc1ZhbHVlOiB0cnVlLFxuICBibHVySW5wdXRPblNlbGVjdDogaXNUb3VjaENhcGFibGUoKSxcbiAgY2FwdHVyZU1lbnVTY3JvbGw6ICFpc1RvdWNoQ2FwYWJsZSgpLFxuICBjbGFzc05hbWVzOiB7fSxcbiAgY2xvc2VNZW51T25TZWxlY3Q6IHRydWUsXG4gIGNsb3NlTWVudU9uU2Nyb2xsOiBmYWxzZSxcbiAgY29tcG9uZW50czoge30sXG4gIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZTogdHJ1ZSxcbiAgZXNjYXBlQ2xlYXJzVmFsdWU6IGZhbHNlLFxuICBmaWx0ZXJPcHRpb246IGNyZWF0ZUZpbHRlcigpLFxuICBmb3JtYXRHcm91cExhYmVsOiBmb3JtYXRHcm91cExhYmVsLFxuICBnZXRPcHRpb25MYWJlbDogZ2V0T3B0aW9uTGFiZWwkMSxcbiAgZ2V0T3B0aW9uVmFsdWU6IGdldE9wdGlvblZhbHVlJDEsXG4gIGlzRGlzYWJsZWQ6IGZhbHNlLFxuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBpc011bHRpOiBmYWxzZSxcbiAgaXNSdGw6IGZhbHNlLFxuICBpc1NlYXJjaGFibGU6IHRydWUsXG4gIGlzT3B0aW9uRGlzYWJsZWQ6IGlzT3B0aW9uRGlzYWJsZWQsXG4gIGxvYWRpbmdNZXNzYWdlOiBmdW5jdGlvbiBsb2FkaW5nTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gJ0xvYWRpbmcuLi4nO1xuICB9LFxuICBtYXhNZW51SGVpZ2h0OiAzMDAsXG4gIG1pbk1lbnVIZWlnaHQ6IDE0MCxcbiAgbWVudUlzT3BlbjogZmFsc2UsXG4gIG1lbnVQbGFjZW1lbnQ6ICdib3R0b20nLFxuICBtZW51UG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIG1lbnVTaG91bGRCbG9ja1Njcm9sbDogZmFsc2UsXG4gIG1lbnVTaG91bGRTY3JvbGxJbnRvVmlldzogIWlzTW9iaWxlRGV2aWNlKCksXG4gIG5vT3B0aW9uc01lc3NhZ2U6IGZ1bmN0aW9uIG5vT3B0aW9uc01lc3NhZ2UoKSB7XG4gICAgcmV0dXJuICdObyBvcHRpb25zJztcbiAgfSxcbiAgb3Blbk1lbnVPbkZvY3VzOiBmYWxzZSxcbiAgb3Blbk1lbnVPbkNsaWNrOiB0cnVlLFxuICBvcHRpb25zOiBbXSxcbiAgcGFnZVNpemU6IDUsXG4gIHBsYWNlaG9sZGVyOiAnU2VsZWN0Li4uJyxcbiAgc2NyZWVuUmVhZGVyU3RhdHVzOiBmdW5jdGlvbiBzY3JlZW5SZWFkZXJTdGF0dXMoX3JlZikge1xuICAgIHZhciBjb3VudCA9IF9yZWYuY291bnQ7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KGNvdW50LCBcIiByZXN1bHRcIikuY29uY2F0KGNvdW50ICE9PSAxID8gJ3MnIDogJycsIFwiIGF2YWlsYWJsZVwiKTtcbiAgfSxcbiAgc3R5bGVzOiB7fSxcbiAgdGFiSW5kZXg6IDAsXG4gIHRhYlNlbGVjdHNWYWx1ZTogdHJ1ZSxcbiAgdW5zdHlsZWQ6IGZhbHNlXG59O1xuZnVuY3Rpb24gdG9DYXRlZ29yaXplZE9wdGlvbihwcm9wcywgb3B0aW9uLCBzZWxlY3RWYWx1ZSwgaW5kZXgpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfaXNPcHRpb25EaXNhYmxlZChwcm9wcywgb3B0aW9uLCBzZWxlY3RWYWx1ZSk7XG4gIHZhciBpc1NlbGVjdGVkID0gX2lzT3B0aW9uU2VsZWN0ZWQocHJvcHMsIG9wdGlvbiwgc2VsZWN0VmFsdWUpO1xuICB2YXIgbGFiZWwgPSBnZXRPcHRpb25MYWJlbChwcm9wcywgb3B0aW9uKTtcbiAgdmFyIHZhbHVlID0gZ2V0T3B0aW9uVmFsdWUocHJvcHMsIG9wdGlvbik7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ29wdGlvbicsXG4gICAgZGF0YTogb3B0aW9uLFxuICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgaXNTZWxlY3RlZDogaXNTZWxlY3RlZCxcbiAgICBsYWJlbDogbGFiZWwsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGluZGV4OiBpbmRleFxuICB9O1xufVxuZnVuY3Rpb24gYnVpbGRDYXRlZ29yaXplZE9wdGlvbnMocHJvcHMsIHNlbGVjdFZhbHVlKSB7XG4gIHJldHVybiBwcm9wcy5vcHRpb25zLm1hcChmdW5jdGlvbiAoZ3JvdXBPck9wdGlvbiwgZ3JvdXBPck9wdGlvbkluZGV4KSB7XG4gICAgaWYgKCdvcHRpb25zJyBpbiBncm91cE9yT3B0aW9uKSB7XG4gICAgICB2YXIgY2F0ZWdvcml6ZWRPcHRpb25zID0gZ3JvdXBPck9wdGlvbi5vcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uLCBvcHRpb25JbmRleCkge1xuICAgICAgICByZXR1cm4gdG9DYXRlZ29yaXplZE9wdGlvbihwcm9wcywgb3B0aW9uLCBzZWxlY3RWYWx1ZSwgb3B0aW9uSW5kZXgpO1xuICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChjYXRlZ29yaXplZE9wdGlvbikge1xuICAgICAgICByZXR1cm4gaXNGb2N1c2FibGUocHJvcHMsIGNhdGVnb3JpemVkT3B0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNhdGVnb3JpemVkT3B0aW9ucy5sZW5ndGggPiAwID8ge1xuICAgICAgICB0eXBlOiAnZ3JvdXAnLFxuICAgICAgICBkYXRhOiBncm91cE9yT3B0aW9uLFxuICAgICAgICBvcHRpb25zOiBjYXRlZ29yaXplZE9wdGlvbnMsXG4gICAgICAgIGluZGV4OiBncm91cE9yT3B0aW9uSW5kZXhcbiAgICAgIH0gOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHZhciBjYXRlZ29yaXplZE9wdGlvbiA9IHRvQ2F0ZWdvcml6ZWRPcHRpb24ocHJvcHMsIGdyb3VwT3JPcHRpb24sIHNlbGVjdFZhbHVlLCBncm91cE9yT3B0aW9uSW5kZXgpO1xuICAgIHJldHVybiBpc0ZvY3VzYWJsZShwcm9wcywgY2F0ZWdvcml6ZWRPcHRpb24pID8gY2F0ZWdvcml6ZWRPcHRpb24gOiB1bmRlZmluZWQ7XG4gIH0pLmZpbHRlcihub3ROdWxsaXNoKTtcbn1cbmZ1bmN0aW9uIGJ1aWxkRm9jdXNhYmxlT3B0aW9uc0Zyb21DYXRlZ29yaXplZE9wdGlvbnMoY2F0ZWdvcml6ZWRPcHRpb25zKSB7XG4gIHJldHVybiBjYXRlZ29yaXplZE9wdGlvbnMucmVkdWNlKGZ1bmN0aW9uIChvcHRpb25zQWNjdW11bGF0b3IsIGNhdGVnb3JpemVkT3B0aW9uKSB7XG4gICAgaWYgKGNhdGVnb3JpemVkT3B0aW9uLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgIG9wdGlvbnNBY2N1bXVsYXRvci5wdXNoLmFwcGx5KG9wdGlvbnNBY2N1bXVsYXRvciwgX3RvQ29uc3VtYWJsZUFycmF5KGNhdGVnb3JpemVkT3B0aW9uLm9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbi5kYXRhO1xuICAgICAgfSkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9uc0FjY3VtdWxhdG9yLnB1c2goY2F0ZWdvcml6ZWRPcHRpb24uZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zQWNjdW11bGF0b3I7XG4gIH0sIFtdKTtcbn1cbmZ1bmN0aW9uIGJ1aWxkRm9jdXNhYmxlT3B0aW9uc1dpdGhJZHMoY2F0ZWdvcml6ZWRPcHRpb25zLCBvcHRpb25JZCkge1xuICByZXR1cm4gY2F0ZWdvcml6ZWRPcHRpb25zLnJlZHVjZShmdW5jdGlvbiAob3B0aW9uc0FjY3VtdWxhdG9yLCBjYXRlZ29yaXplZE9wdGlvbikge1xuICAgIGlmIChjYXRlZ29yaXplZE9wdGlvbi50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICBvcHRpb25zQWNjdW11bGF0b3IucHVzaC5hcHBseShvcHRpb25zQWNjdW11bGF0b3IsIF90b0NvbnN1bWFibGVBcnJheShjYXRlZ29yaXplZE9wdGlvbi5vcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGF0YTogb3B0aW9uLmRhdGEsXG4gICAgICAgICAgaWQ6IFwiXCIuY29uY2F0KG9wdGlvbklkLCBcIi1cIikuY29uY2F0KGNhdGVnb3JpemVkT3B0aW9uLmluZGV4LCBcIi1cIikuY29uY2F0KG9wdGlvbi5pbmRleClcbiAgICAgICAgfTtcbiAgICAgIH0pKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnNBY2N1bXVsYXRvci5wdXNoKHtcbiAgICAgICAgZGF0YTogY2F0ZWdvcml6ZWRPcHRpb24uZGF0YSxcbiAgICAgICAgaWQ6IFwiXCIuY29uY2F0KG9wdGlvbklkLCBcIi1cIikuY29uY2F0KGNhdGVnb3JpemVkT3B0aW9uLmluZGV4KVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zQWNjdW11bGF0b3I7XG4gIH0sIFtdKTtcbn1cbmZ1bmN0aW9uIGJ1aWxkRm9jdXNhYmxlT3B0aW9ucyhwcm9wcywgc2VsZWN0VmFsdWUpIHtcbiAgcmV0dXJuIGJ1aWxkRm9jdXNhYmxlT3B0aW9uc0Zyb21DYXRlZ29yaXplZE9wdGlvbnMoYnVpbGRDYXRlZ29yaXplZE9wdGlvbnMocHJvcHMsIHNlbGVjdFZhbHVlKSk7XG59XG5mdW5jdGlvbiBpc0ZvY3VzYWJsZShwcm9wcywgY2F0ZWdvcml6ZWRPcHRpb24pIHtcbiAgdmFyIF9wcm9wcyRpbnB1dFZhbHVlID0gcHJvcHMuaW5wdXRWYWx1ZSxcbiAgICBpbnB1dFZhbHVlID0gX3Byb3BzJGlucHV0VmFsdWUgPT09IHZvaWQgMCA/ICcnIDogX3Byb3BzJGlucHV0VmFsdWU7XG4gIHZhciBkYXRhID0gY2F0ZWdvcml6ZWRPcHRpb24uZGF0YSxcbiAgICBpc1NlbGVjdGVkID0gY2F0ZWdvcml6ZWRPcHRpb24uaXNTZWxlY3RlZCxcbiAgICBsYWJlbCA9IGNhdGVnb3JpemVkT3B0aW9uLmxhYmVsLFxuICAgIHZhbHVlID0gY2F0ZWdvcml6ZWRPcHRpb24udmFsdWU7XG4gIHJldHVybiAoIXNob3VsZEhpZGVTZWxlY3RlZE9wdGlvbnMocHJvcHMpIHx8ICFpc1NlbGVjdGVkKSAmJiBfZmlsdGVyT3B0aW9uKHByb3BzLCB7XG4gICAgbGFiZWw6IGxhYmVsLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBkYXRhOiBkYXRhXG4gIH0sIGlucHV0VmFsdWUpO1xufVxuZnVuY3Rpb24gZ2V0TmV4dEZvY3VzZWRWYWx1ZShzdGF0ZSwgbmV4dFNlbGVjdFZhbHVlKSB7XG4gIHZhciBmb2N1c2VkVmFsdWUgPSBzdGF0ZS5mb2N1c2VkVmFsdWUsXG4gICAgbGFzdFNlbGVjdFZhbHVlID0gc3RhdGUuc2VsZWN0VmFsdWU7XG4gIHZhciBsYXN0Rm9jdXNlZEluZGV4ID0gbGFzdFNlbGVjdFZhbHVlLmluZGV4T2YoZm9jdXNlZFZhbHVlKTtcbiAgaWYgKGxhc3RGb2N1c2VkSW5kZXggPiAtMSkge1xuICAgIHZhciBuZXh0Rm9jdXNlZEluZGV4ID0gbmV4dFNlbGVjdFZhbHVlLmluZGV4T2YoZm9jdXNlZFZhbHVlKTtcbiAgICBpZiAobmV4dEZvY3VzZWRJbmRleCA+IC0xKSB7XG4gICAgICAvLyB0aGUgZm9jdXNlZCB2YWx1ZSBpcyBzdGlsbCBpbiB0aGUgc2VsZWN0VmFsdWUsIHJldHVybiBpdFxuICAgICAgcmV0dXJuIGZvY3VzZWRWYWx1ZTtcbiAgICB9IGVsc2UgaWYgKGxhc3RGb2N1c2VkSW5kZXggPCBuZXh0U2VsZWN0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAvLyB0aGUgZm9jdXNlZFZhbHVlIGlzIG5vdCBwcmVzZW50IGluIHRoZSBuZXh0IHNlbGVjdFZhbHVlIGFycmF5IGJ5XG4gICAgICAvLyByZWZlcmVuY2UsIHNvIHJldHVybiB0aGUgbmV3IHZhbHVlIGF0IHRoZSBzYW1lIGluZGV4XG4gICAgICByZXR1cm4gbmV4dFNlbGVjdFZhbHVlW2xhc3RGb2N1c2VkSW5kZXhdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIGdldE5leHRGb2N1c2VkT3B0aW9uKHN0YXRlLCBvcHRpb25zKSB7XG4gIHZhciBsYXN0Rm9jdXNlZE9wdGlvbiA9IHN0YXRlLmZvY3VzZWRPcHRpb247XG4gIHJldHVybiBsYXN0Rm9jdXNlZE9wdGlvbiAmJiBvcHRpb25zLmluZGV4T2YobGFzdEZvY3VzZWRPcHRpb24pID4gLTEgPyBsYXN0Rm9jdXNlZE9wdGlvbiA6IG9wdGlvbnNbMF07XG59XG52YXIgZ2V0Rm9jdXNlZE9wdGlvbklkID0gZnVuY3Rpb24gZ2V0Rm9jdXNlZE9wdGlvbklkKGZvY3VzYWJsZU9wdGlvbnNXaXRoSWRzLCBmb2N1c2VkT3B0aW9uKSB7XG4gIHZhciBfZm9jdXNhYmxlT3B0aW9uc1dpdGg7XG4gIHZhciBmb2N1c2VkT3B0aW9uSWQgPSAoX2ZvY3VzYWJsZU9wdGlvbnNXaXRoID0gZm9jdXNhYmxlT3B0aW9uc1dpdGhJZHMuZmluZChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuIG9wdGlvbi5kYXRhID09PSBmb2N1c2VkT3B0aW9uO1xuICB9KSkgPT09IG51bGwgfHwgX2ZvY3VzYWJsZU9wdGlvbnNXaXRoID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZm9jdXNhYmxlT3B0aW9uc1dpdGguaWQ7XG4gIHJldHVybiBmb2N1c2VkT3B0aW9uSWQgfHwgbnVsbDtcbn07XG52YXIgZ2V0T3B0aW9uTGFiZWwgPSBmdW5jdGlvbiBnZXRPcHRpb25MYWJlbChwcm9wcywgZGF0YSkge1xuICByZXR1cm4gcHJvcHMuZ2V0T3B0aW9uTGFiZWwoZGF0YSk7XG59O1xudmFyIGdldE9wdGlvblZhbHVlID0gZnVuY3Rpb24gZ2V0T3B0aW9uVmFsdWUocHJvcHMsIGRhdGEpIHtcbiAgcmV0dXJuIHByb3BzLmdldE9wdGlvblZhbHVlKGRhdGEpO1xufTtcbmZ1bmN0aW9uIF9pc09wdGlvbkRpc2FibGVkKHByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgcHJvcHMuaXNPcHRpb25EaXNhYmxlZCA9PT0gJ2Z1bmN0aW9uJyA/IHByb3BzLmlzT3B0aW9uRGlzYWJsZWQob3B0aW9uLCBzZWxlY3RWYWx1ZSkgOiBmYWxzZTtcbn1cbmZ1bmN0aW9uIF9pc09wdGlvblNlbGVjdGVkKHByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlKSB7XG4gIGlmIChzZWxlY3RWYWx1ZS5pbmRleE9mKG9wdGlvbikgPiAtMSkgcmV0dXJuIHRydWU7XG4gIGlmICh0eXBlb2YgcHJvcHMuaXNPcHRpb25TZWxlY3RlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBwcm9wcy5pc09wdGlvblNlbGVjdGVkKG9wdGlvbiwgc2VsZWN0VmFsdWUpO1xuICB9XG4gIHZhciBjYW5kaWRhdGUgPSBnZXRPcHRpb25WYWx1ZShwcm9wcywgb3B0aW9uKTtcbiAgcmV0dXJuIHNlbGVjdFZhbHVlLnNvbWUoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gZ2V0T3B0aW9uVmFsdWUocHJvcHMsIGkpID09PSBjYW5kaWRhdGU7XG4gIH0pO1xufVxuZnVuY3Rpb24gX2ZpbHRlck9wdGlvbihwcm9wcywgb3B0aW9uLCBpbnB1dFZhbHVlKSB7XG4gIHJldHVybiBwcm9wcy5maWx0ZXJPcHRpb24gPyBwcm9wcy5maWx0ZXJPcHRpb24ob3B0aW9uLCBpbnB1dFZhbHVlKSA6IHRydWU7XG59XG52YXIgc2hvdWxkSGlkZVNlbGVjdGVkT3B0aW9ucyA9IGZ1bmN0aW9uIHNob3VsZEhpZGVTZWxlY3RlZE9wdGlvbnMocHJvcHMpIHtcbiAgdmFyIGhpZGVTZWxlY3RlZE9wdGlvbnMgPSBwcm9wcy5oaWRlU2VsZWN0ZWRPcHRpb25zLFxuICAgIGlzTXVsdGkgPSBwcm9wcy5pc011bHRpO1xuICBpZiAoaGlkZVNlbGVjdGVkT3B0aW9ucyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaXNNdWx0aTtcbiAgcmV0dXJuIGhpZGVTZWxlY3RlZE9wdGlvbnM7XG59O1xudmFyIGluc3RhbmNlSWQgPSAxO1xudmFyIFNlbGVjdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU2VsZWN0LCBfQ29tcG9uZW50KTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTZWxlY3QpO1xuICAvLyBNaXNjLiBJbnN0YW5jZSBQcm9wZXJ0aWVzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFRPRE9cblxuICAvLyBSZWZzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIExpZmVjeWNsZVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBmdW5jdGlvbiBTZWxlY3QoX3Byb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZWxlY3QpO1xuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX3Byb3BzKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFyaWFTZWxlY3Rpb246IG51bGwsXG4gICAgICBmb2N1c2VkT3B0aW9uOiBudWxsLFxuICAgICAgZm9jdXNlZE9wdGlvbklkOiBudWxsLFxuICAgICAgZm9jdXNhYmxlT3B0aW9uc1dpdGhJZHM6IFtdLFxuICAgICAgZm9jdXNlZFZhbHVlOiBudWxsLFxuICAgICAgaW5wdXRJc0hpZGRlbjogZmFsc2UsXG4gICAgICBpc0ZvY3VzZWQ6IGZhbHNlLFxuICAgICAgc2VsZWN0VmFsdWU6IFtdLFxuICAgICAgY2xlYXJGb2N1c1ZhbHVlT25VcGRhdGU6IGZhbHNlLFxuICAgICAgcHJldldhc0ZvY3VzZWQ6IGZhbHNlLFxuICAgICAgaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlOiB1bmRlZmluZWQsXG4gICAgICBwcmV2UHJvcHM6IHVuZGVmaW5lZCxcbiAgICAgIGluc3RhbmNlUHJlZml4OiAnJ1xuICAgIH07XG4gICAgX3RoaXMuYmxvY2tPcHRpb25Ib3ZlciA9IGZhbHNlO1xuICAgIF90aGlzLmlzQ29tcG9zaW5nID0gZmFsc2U7XG4gICAgX3RoaXMuY29tbW9uUHJvcHMgPSB2b2lkIDA7XG4gICAgX3RoaXMuaW5pdGlhbFRvdWNoWCA9IDA7XG4gICAgX3RoaXMuaW5pdGlhbFRvdWNoWSA9IDA7XG4gICAgX3RoaXMub3BlbkFmdGVyRm9jdXMgPSBmYWxzZTtcbiAgICBfdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IGZhbHNlO1xuICAgIF90aGlzLnVzZXJJc0RyYWdnaW5nID0gdm9pZCAwO1xuICAgIF90aGlzLmlzQXBwbGVEZXZpY2UgPSBpc0FwcGxlRGV2aWNlKCk7XG4gICAgX3RoaXMuY29udHJvbFJlZiA9IG51bGw7XG4gICAgX3RoaXMuZ2V0Q29udHJvbFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLmNvbnRyb2xSZWYgPSByZWY7XG4gICAgfTtcbiAgICBfdGhpcy5mb2N1c2VkT3B0aW9uUmVmID0gbnVsbDtcbiAgICBfdGhpcy5nZXRGb2N1c2VkT3B0aW9uUmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMuZm9jdXNlZE9wdGlvblJlZiA9IHJlZjtcbiAgICB9O1xuICAgIF90aGlzLm1lbnVMaXN0UmVmID0gbnVsbDtcbiAgICBfdGhpcy5nZXRNZW51TGlzdFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLm1lbnVMaXN0UmVmID0gcmVmO1xuICAgIH07XG4gICAgX3RoaXMuaW5wdXRSZWYgPSBudWxsO1xuICAgIF90aGlzLmdldElucHV0UmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMuaW5wdXRSZWYgPSByZWY7XG4gICAgfTtcbiAgICBfdGhpcy5mb2N1cyA9IF90aGlzLmZvY3VzSW5wdXQ7XG4gICAgX3RoaXMuYmx1ciA9IF90aGlzLmJsdXJJbnB1dDtcbiAgICBfdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgIG9uQ2hhbmdlID0gX3RoaXMkcHJvcHMub25DaGFuZ2UsXG4gICAgICAgIG5hbWUgPSBfdGhpcyRwcm9wcy5uYW1lO1xuICAgICAgYWN0aW9uTWV0YS5uYW1lID0gbmFtZTtcbiAgICAgIF90aGlzLmFyaWFPbkNoYW5nZShuZXdWYWx1ZSwgYWN0aW9uTWV0YSk7XG4gICAgICBvbkNoYW5nZShuZXdWYWx1ZSwgYWN0aW9uTWV0YSk7XG4gICAgfTtcbiAgICBfdGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgYWN0aW9uLCBvcHRpb24pIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgY2xvc2VNZW51T25TZWxlY3QgPSBfdGhpcyRwcm9wczIuY2xvc2VNZW51T25TZWxlY3QsXG4gICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczIuaXNNdWx0aSxcbiAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzMi5pbnB1dFZhbHVlO1xuICAgICAgX3RoaXMub25JbnB1dENoYW5nZSgnJywge1xuICAgICAgICBhY3Rpb246ICdzZXQtdmFsdWUnLFxuICAgICAgICBwcmV2SW5wdXRWYWx1ZTogaW5wdXRWYWx1ZVxuICAgICAgfSk7XG4gICAgICBpZiAoY2xvc2VNZW51T25TZWxlY3QpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTogIWlzTXVsdGlcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLm9uTWVudUNsb3NlKCk7XG4gICAgICB9XG4gICAgICAvLyB3aGVuIHRoZSBzZWxlY3QgdmFsdWUgc2hvdWxkIGNoYW5nZSwgd2Ugc2hvdWxkIHJlc2V0IGZvY3VzZWRWYWx1ZVxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjbGVhckZvY3VzVmFsdWVPblVwZGF0ZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBfdGhpcy5vbkNoYW5nZShuZXdWYWx1ZSwge1xuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgb3B0aW9uOiBvcHRpb25cbiAgICAgIH0pO1xuICAgIH07XG4gICAgX3RoaXMuc2VsZWN0T3B0aW9uID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgIGJsdXJJbnB1dE9uU2VsZWN0ID0gX3RoaXMkcHJvcHMzLmJsdXJJbnB1dE9uU2VsZWN0LFxuICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHMzLmlzTXVsdGksXG4gICAgICAgIG5hbWUgPSBfdGhpcyRwcm9wczMubmFtZTtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuICAgICAgdmFyIGRlc2VsZWN0ZWQgPSBpc011bHRpICYmIF90aGlzLmlzT3B0aW9uU2VsZWN0ZWQobmV3VmFsdWUsIHNlbGVjdFZhbHVlKTtcbiAgICAgIHZhciBpc0Rpc2FibGVkID0gX3RoaXMuaXNPcHRpb25EaXNhYmxlZChuZXdWYWx1ZSwgc2VsZWN0VmFsdWUpO1xuICAgICAgaWYgKGRlc2VsZWN0ZWQpIHtcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IF90aGlzLmdldE9wdGlvblZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgX3RoaXMuc2V0VmFsdWUobXVsdGlWYWx1ZUFzVmFsdWUoc2VsZWN0VmFsdWUuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmdldE9wdGlvblZhbHVlKGkpICE9PSBjYW5kaWRhdGU7XG4gICAgICAgIH0pKSwgJ2Rlc2VsZWN0LW9wdGlvbicsIG5ld1ZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzRGlzYWJsZWQpIHtcbiAgICAgICAgLy8gU2VsZWN0IG9wdGlvbiBpZiBvcHRpb24gaXMgbm90IGRpc2FibGVkXG4gICAgICAgIGlmIChpc011bHRpKSB7XG4gICAgICAgICAgX3RoaXMuc2V0VmFsdWUobXVsdGlWYWx1ZUFzVmFsdWUoW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShzZWxlY3RWYWx1ZSksIFtuZXdWYWx1ZV0pKSwgJ3NlbGVjdC1vcHRpb24nLCBuZXdWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuc2V0VmFsdWUoc2luZ2xlVmFsdWVBc1ZhbHVlKG5ld1ZhbHVlKSwgJ3NlbGVjdC1vcHRpb24nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuYXJpYU9uQ2hhbmdlKHNpbmdsZVZhbHVlQXNWYWx1ZShuZXdWYWx1ZSksIHtcbiAgICAgICAgICBhY3Rpb246ICdzZWxlY3Qtb3B0aW9uJyxcbiAgICAgICAgICBvcHRpb246IG5ld1ZhbHVlLFxuICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChibHVySW5wdXRPblNlbGVjdCkge1xuICAgICAgICBfdGhpcy5ibHVySW5wdXQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIF90aGlzLnJlbW92ZVZhbHVlID0gZnVuY3Rpb24gKHJlbW92ZWRWYWx1ZSkge1xuICAgICAgdmFyIGlzTXVsdGkgPSBfdGhpcy5wcm9wcy5pc011bHRpO1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gX3RoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgICB2YXIgY2FuZGlkYXRlID0gX3RoaXMuZ2V0T3B0aW9uVmFsdWUocmVtb3ZlZFZhbHVlKTtcbiAgICAgIHZhciBuZXdWYWx1ZUFycmF5ID0gc2VsZWN0VmFsdWUuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5nZXRPcHRpb25WYWx1ZShpKSAhPT0gY2FuZGlkYXRlO1xuICAgICAgfSk7XG4gICAgICB2YXIgbmV3VmFsdWUgPSB2YWx1ZVRlcm5hcnkoaXNNdWx0aSwgbmV3VmFsdWVBcnJheSwgbmV3VmFsdWVBcnJheVswXSB8fCBudWxsKTtcbiAgICAgIF90aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlLCB7XG4gICAgICAgIGFjdGlvbjogJ3JlbW92ZS12YWx1ZScsXG4gICAgICAgIHJlbW92ZWRWYWx1ZTogcmVtb3ZlZFZhbHVlXG4gICAgICB9KTtcbiAgICAgIF90aGlzLmZvY3VzSW5wdXQoKTtcbiAgICB9O1xuICAgIF90aGlzLmNsZWFyVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICAgIF90aGlzLm9uQ2hhbmdlKHZhbHVlVGVybmFyeShfdGhpcy5wcm9wcy5pc011bHRpLCBbXSwgbnVsbCksIHtcbiAgICAgICAgYWN0aW9uOiAnY2xlYXInLFxuICAgICAgICByZW1vdmVkVmFsdWVzOiBzZWxlY3RWYWx1ZVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBfdGhpcy5wb3BWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpc011bHRpID0gX3RoaXMucHJvcHMuaXNNdWx0aTtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuICAgICAgdmFyIGxhc3RTZWxlY3RlZFZhbHVlID0gc2VsZWN0VmFsdWVbc2VsZWN0VmFsdWUubGVuZ3RoIC0gMV07XG4gICAgICB2YXIgbmV3VmFsdWVBcnJheSA9IHNlbGVjdFZhbHVlLnNsaWNlKDAsIHNlbGVjdFZhbHVlLmxlbmd0aCAtIDEpO1xuICAgICAgdmFyIG5ld1ZhbHVlID0gdmFsdWVUZXJuYXJ5KGlzTXVsdGksIG5ld1ZhbHVlQXJyYXksIG5ld1ZhbHVlQXJyYXlbMF0gfHwgbnVsbCk7XG4gICAgICBpZiAobGFzdFNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgX3RoaXMub25DaGFuZ2UobmV3VmFsdWUsIHtcbiAgICAgICAgICBhY3Rpb246ICdwb3AtdmFsdWUnLFxuICAgICAgICAgIHJlbW92ZWRWYWx1ZTogbGFzdFNlbGVjdGVkVmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBfdGhpcy5nZXRGb2N1c2VkT3B0aW9uSWQgPSBmdW5jdGlvbiAoZm9jdXNlZE9wdGlvbikge1xuICAgICAgcmV0dXJuIGdldEZvY3VzZWRPcHRpb25JZChfdGhpcy5zdGF0ZS5mb2N1c2FibGVPcHRpb25zV2l0aElkcywgZm9jdXNlZE9wdGlvbik7XG4gICAgfTtcbiAgICBfdGhpcy5nZXRGb2N1c2FibGVPcHRpb25zV2l0aElkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBidWlsZEZvY3VzYWJsZU9wdGlvbnNXaXRoSWRzKGJ1aWxkQ2F0ZWdvcml6ZWRPcHRpb25zKF90aGlzLnByb3BzLCBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZSksIF90aGlzLmdldEVsZW1lbnRJZCgnb3B0aW9uJykpO1xuICAgIH07XG4gICAgX3RoaXMuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgfTtcbiAgICBfdGhpcy5jeCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsYXNzTmFtZXMuYXBwbHkodm9pZCAwLCBbX3RoaXMucHJvcHMuY2xhc3NOYW1lUHJlZml4XS5jb25jYXQoYXJncykpO1xuICAgIH07XG4gICAgX3RoaXMuZ2V0T3B0aW9uTGFiZWwgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgcmV0dXJuIGdldE9wdGlvbkxhYmVsKF90aGlzLnByb3BzLCBkYXRhKTtcbiAgICB9O1xuICAgIF90aGlzLmdldE9wdGlvblZhbHVlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHJldHVybiBnZXRPcHRpb25WYWx1ZShfdGhpcy5wcm9wcywgZGF0YSk7XG4gICAgfTtcbiAgICBfdGhpcy5nZXRTdHlsZXMgPSBmdW5jdGlvbiAoa2V5LCBwcm9wcykge1xuICAgICAgdmFyIHVuc3R5bGVkID0gX3RoaXMucHJvcHMudW5zdHlsZWQ7XG4gICAgICB2YXIgYmFzZSA9IGRlZmF1bHRTdHlsZXNba2V5XShwcm9wcywgdW5zdHlsZWQpO1xuICAgICAgYmFzZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG4gICAgICB2YXIgY3VzdG9tID0gX3RoaXMucHJvcHMuc3R5bGVzW2tleV07XG4gICAgICByZXR1cm4gY3VzdG9tID8gY3VzdG9tKGJhc2UsIHByb3BzKSA6IGJhc2U7XG4gICAgfTtcbiAgICBfdGhpcy5nZXRDbGFzc05hbWVzID0gZnVuY3Rpb24gKGtleSwgcHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyRjbGFzc05hbWUsIF90aGlzJHByb3BzJGNsYXNzTmFtZTI7XG4gICAgICByZXR1cm4gKF90aGlzJHByb3BzJGNsYXNzTmFtZSA9IChfdGhpcyRwcm9wcyRjbGFzc05hbWUyID0gX3RoaXMucHJvcHMuY2xhc3NOYW1lcylba2V5XSkgPT09IG51bGwgfHwgX3RoaXMkcHJvcHMkY2xhc3NOYW1lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRwcm9wcyRjbGFzc05hbWUuY2FsbChfdGhpcyRwcm9wcyRjbGFzc05hbWUyLCBwcm9wcyk7XG4gICAgfTtcbiAgICBfdGhpcy5nZXRFbGVtZW50SWQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KF90aGlzLnN0YXRlLmluc3RhbmNlUHJlZml4LCBcIi1cIikuY29uY2F0KGVsZW1lbnQpO1xuICAgIH07XG4gICAgX3RoaXMuZ2V0Q29tcG9uZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0Q29tcG9uZW50cyhfdGhpcy5wcm9wcyk7XG4gICAgfTtcbiAgICBfdGhpcy5idWlsZENhdGVnb3JpemVkT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBidWlsZENhdGVnb3JpemVkT3B0aW9ucyhfdGhpcy5wcm9wcywgX3RoaXMuc3RhdGUuc2VsZWN0VmFsdWUpO1xuICAgIH07XG4gICAgX3RoaXMuZ2V0Q2F0ZWdvcml6ZWRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm1lbnVJc09wZW4gPyBfdGhpcy5idWlsZENhdGVnb3JpemVkT3B0aW9ucygpIDogW107XG4gICAgfTtcbiAgICBfdGhpcy5idWlsZEZvY3VzYWJsZU9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYnVpbGRGb2N1c2FibGVPcHRpb25zRnJvbUNhdGVnb3JpemVkT3B0aW9ucyhfdGhpcy5idWlsZENhdGVnb3JpemVkT3B0aW9ucygpKTtcbiAgICB9O1xuICAgIF90aGlzLmdldEZvY3VzYWJsZU9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMubWVudUlzT3BlbiA/IF90aGlzLmJ1aWxkRm9jdXNhYmxlT3B0aW9ucygpIDogW107XG4gICAgfTtcbiAgICBfdGhpcy5hcmlhT25DaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUsIGFjdGlvbk1ldGEpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXJpYVNlbGVjdGlvbjogX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0sIGFjdGlvbk1ldGEpXG4gICAgICB9KTtcbiAgICB9O1xuICAgIF90aGlzLm9uTWVudU1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBfdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgfTtcbiAgICBfdGhpcy5vbk1lbnVNb3VzZU1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLmJsb2NrT3B0aW9uSG92ZXIgPSBmYWxzZTtcbiAgICB9O1xuICAgIF90aGlzLm9uQ29udHJvbE1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gRXZlbnQgY2FwdHVyZWQgYnkgZHJvcGRvd24gaW5kaWNhdG9yXG4gICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgb3Blbk1lbnVPbkNsaWNrID0gX3RoaXMucHJvcHMub3Blbk1lbnVPbkNsaWNrO1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5pc0ZvY3VzZWQpIHtcbiAgICAgICAgaWYgKG9wZW5NZW51T25DbGljaykge1xuICAgICAgICAgIF90aGlzLm9wZW5BZnRlckZvY3VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgICB9IGVsc2UgaWYgKCFfdGhpcy5wcm9wcy5tZW51SXNPcGVuKSB7XG4gICAgICAgIGlmIChvcGVuTWVudU9uQ2xpY2spIHtcbiAgICAgICAgICBfdGhpcy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnICYmIGV2ZW50LnRhcmdldC50YWdOYW1lICE9PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgICAgX3RoaXMub25NZW51Q2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnICYmIGV2ZW50LnRhcmdldC50YWdOYW1lICE9PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBfdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBpZ25vcmUgbW91c2UgZXZlbnRzIHRoYXQgd2VyZW4ndCB0cmlnZ2VyZWQgYnkgdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5pc0Rpc2FibGVkKSByZXR1cm47XG4gICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gX3RoaXMucHJvcHMsXG4gICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczQuaXNNdWx0aSxcbiAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzNC5tZW51SXNPcGVuO1xuICAgICAgX3RoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTogIWlzTXVsdGlcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLm9uTWVudUNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgICBfdGhpcy5vbkNsZWFySW5kaWNhdG9yTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBpZ25vcmUgbW91c2UgZXZlbnRzIHRoYXQgd2VyZW4ndCB0cmlnZ2VyZWQgYnkgdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF90aGlzLmNsZWFyVmFsdWUoKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBfdGhpcy5vcGVuQWZ0ZXJGb2N1cyA9IGZhbHNlO1xuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaGVuZCcpIHtcbiAgICAgICAgX3RoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBfdGhpcy5vblNjcm9sbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5jbG9zZU1lbnVPblNjcm9sbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBpc0RvY3VtZW50RWxlbWVudChldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25NZW51Q2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgX3RoaXMucHJvcHMuY2xvc2VNZW51T25TY3JvbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLmNsb3NlTWVudU9uU2Nyb2xsKGV2ZW50KSkge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uTWVudUNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIF90aGlzLm9uQ29tcG9zaXRpb25TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmlzQ29tcG9zaW5nID0gdHJ1ZTtcbiAgICB9O1xuICAgIF90aGlzLm9uQ29tcG9zaXRpb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5pc0NvbXBvc2luZyA9IGZhbHNlO1xuICAgIH07XG4gICAgX3RoaXMub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgdG91Y2hlcyA9IF9yZWYyLnRvdWNoZXM7XG4gICAgICB2YXIgdG91Y2ggPSB0b3VjaGVzICYmIHRvdWNoZXMuaXRlbSgwKTtcbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgX3RoaXMuaW5pdGlhbFRvdWNoWCA9IHRvdWNoLmNsaWVudFg7XG4gICAgICBfdGhpcy5pbml0aWFsVG91Y2hZID0gdG91Y2guY2xpZW50WTtcbiAgICAgIF90aGlzLnVzZXJJc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfTtcbiAgICBfdGhpcy5vblRvdWNoTW92ZSA9IGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgdmFyIHRvdWNoZXMgPSBfcmVmMy50b3VjaGVzO1xuICAgICAgdmFyIHRvdWNoID0gdG91Y2hlcyAmJiB0b3VjaGVzLml0ZW0oMCk7XG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBkZWx0YVggPSBNYXRoLmFicyh0b3VjaC5jbGllbnRYIC0gX3RoaXMuaW5pdGlhbFRvdWNoWCk7XG4gICAgICB2YXIgZGVsdGFZID0gTWF0aC5hYnModG91Y2guY2xpZW50WSAtIF90aGlzLmluaXRpYWxUb3VjaFkpO1xuICAgICAgdmFyIG1vdmVUaHJlc2hvbGQgPSA1O1xuICAgICAgX3RoaXMudXNlcklzRHJhZ2dpbmcgPSBkZWx0YVggPiBtb3ZlVGhyZXNob2xkIHx8IGRlbHRhWSA+IG1vdmVUaHJlc2hvbGQ7XG4gICAgfTtcbiAgICBfdGhpcy5vblRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMudXNlcklzRHJhZ2dpbmcpIHJldHVybjtcblxuICAgICAgLy8gY2xvc2UgdGhlIG1lbnUgaWYgdGhlIHVzZXIgdGFwcyBvdXRzaWRlXG4gICAgICAvLyB3ZSdyZSBjaGVja2luZyBvbiBldmVudC50YXJnZXQgaGVyZSBpbnN0ZWFkIG9mIGV2ZW50LmN1cnJlbnRUYXJnZXQsIGJlY2F1c2Ugd2Ugd2FudCB0byBhc3NlcnQgaW5mb3JtYXRpb25cbiAgICAgIC8vIG9uIGV2ZW50cyBvbiBjaGlsZCBlbGVtZW50cywgbm90IHRoZSBkb2N1bWVudCAod2hpY2ggd2UndmUgYXR0YWNoZWQgdGhpcyBoYW5kbGVyIHRvKS5cbiAgICAgIGlmIChfdGhpcy5jb250cm9sUmVmICYmICFfdGhpcy5jb250cm9sUmVmLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgX3RoaXMubWVudUxpc3RSZWYgJiYgIV90aGlzLm1lbnVMaXN0UmVmLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgX3RoaXMuYmx1cklucHV0KCk7XG4gICAgICB9XG5cbiAgICAgIC8vIHJlc2V0IG1vdmUgdmFyc1xuICAgICAgX3RoaXMuaW5pdGlhbFRvdWNoWCA9IDA7XG4gICAgICBfdGhpcy5pbml0aWFsVG91Y2hZID0gMDtcbiAgICB9O1xuICAgIF90aGlzLm9uQ29udHJvbFRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMudXNlcklzRHJhZ2dpbmcpIHJldHVybjtcbiAgICAgIF90aGlzLm9uQ29udHJvbE1vdXNlRG93bihldmVudCk7XG4gICAgfTtcbiAgICBfdGhpcy5vbkNsZWFySW5kaWNhdG9yVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy51c2VySXNEcmFnZ2luZykgcmV0dXJuO1xuICAgICAgX3RoaXMub25DbGVhckluZGljYXRvck1vdXNlRG93bihldmVudCk7XG4gICAgfTtcbiAgICBfdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy51c2VySXNEcmFnZ2luZykgcmV0dXJuO1xuICAgICAgX3RoaXMub25Ecm9wZG93bkluZGljYXRvck1vdXNlRG93bihldmVudCk7XG4gICAgfTtcbiAgICBfdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIHByZXZJbnB1dFZhbHVlID0gX3RoaXMucHJvcHMuaW5wdXRWYWx1ZTtcbiAgICAgIHZhciBpbnB1dFZhbHVlID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICBfdGhpcy5vbklucHV0Q2hhbmdlKGlucHV0VmFsdWUsIHtcbiAgICAgICAgYWN0aW9uOiAnaW5wdXQtY2hhbmdlJyxcbiAgICAgICAgcHJldklucHV0VmFsdWU6IHByZXZJbnB1dFZhbHVlXG4gICAgICB9KTtcbiAgICAgIGlmICghX3RoaXMucHJvcHMubWVudUlzT3Blbikge1xuICAgICAgICBfdGhpcy5vbk1lbnVPcGVuKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBfdGhpcy5vbklucHV0Rm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xuICAgICAgfVxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6IGZhbHNlLFxuICAgICAgICBpc0ZvY3VzZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgICAgaWYgKF90aGlzLm9wZW5BZnRlckZvY3VzIHx8IF90aGlzLnByb3BzLm9wZW5NZW51T25Gb2N1cykge1xuICAgICAgICBfdGhpcy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICAgIH1cbiAgICAgIF90aGlzLm9wZW5BZnRlckZvY3VzID0gZmFsc2U7XG4gICAgfTtcbiAgICBfdGhpcy5vbklucHV0Qmx1ciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIHByZXZJbnB1dFZhbHVlID0gX3RoaXMucHJvcHMuaW5wdXRWYWx1ZTtcbiAgICAgIGlmIChfdGhpcy5tZW51TGlzdFJlZiAmJiBfdGhpcy5tZW51TGlzdFJlZi5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICBfdGhpcy5pbnB1dFJlZi5mb2N1cygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQmx1cihldmVudCk7XG4gICAgICB9XG4gICAgICBfdGhpcy5vbklucHV0Q2hhbmdlKCcnLCB7XG4gICAgICAgIGFjdGlvbjogJ2lucHV0LWJsdXInLFxuICAgICAgICBwcmV2SW5wdXRWYWx1ZTogcHJldklucHV0VmFsdWVcbiAgICAgIH0pO1xuICAgICAgX3RoaXMub25NZW51Q2xvc2UoKTtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZFZhbHVlOiBudWxsLFxuICAgICAgICBpc0ZvY3VzZWQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9O1xuICAgIF90aGlzLm9uT3B0aW9uSG92ZXIgPSBmdW5jdGlvbiAoZm9jdXNlZE9wdGlvbikge1xuICAgICAgaWYgKF90aGlzLmJsb2NrT3B0aW9uSG92ZXIgfHwgX3RoaXMuc3RhdGUuZm9jdXNlZE9wdGlvbiA9PT0gZm9jdXNlZE9wdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgb3B0aW9ucyA9IF90aGlzLmdldEZvY3VzYWJsZU9wdGlvbnMoKTtcbiAgICAgIHZhciBmb2N1c2VkT3B0aW9uSW5kZXggPSBvcHRpb25zLmluZGV4T2YoZm9jdXNlZE9wdGlvbik7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb24sXG4gICAgICAgIGZvY3VzZWRPcHRpb25JZDogZm9jdXNlZE9wdGlvbkluZGV4ID4gLTEgPyBfdGhpcy5nZXRGb2N1c2VkT3B0aW9uSWQoZm9jdXNlZE9wdGlvbikgOiBudWxsXG4gICAgICB9KTtcbiAgICB9O1xuICAgIF90aGlzLnNob3VsZEhpZGVTZWxlY3RlZE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc2hvdWxkSGlkZVNlbGVjdGVkT3B0aW9ucyhfdGhpcy5wcm9wcyk7XG4gICAgfTtcbiAgICBfdGhpcy5vblZhbHVlSW5wdXRGb2N1cyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgX3RoaXMuZm9jdXMoKTtcbiAgICB9O1xuICAgIF90aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNSA9IF90aGlzLnByb3BzLFxuICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHM1LmlzTXVsdGksXG4gICAgICAgIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZSA9IF90aGlzJHByb3BzNS5iYWNrc3BhY2VSZW1vdmVzVmFsdWUsXG4gICAgICAgIGVzY2FwZUNsZWFyc1ZhbHVlID0gX3RoaXMkcHJvcHM1LmVzY2FwZUNsZWFyc1ZhbHVlLFxuICAgICAgICBpbnB1dFZhbHVlID0gX3RoaXMkcHJvcHM1LmlucHV0VmFsdWUsXG4gICAgICAgIGlzQ2xlYXJhYmxlID0gX3RoaXMkcHJvcHM1LmlzQ2xlYXJhYmxlLFxuICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHM1LmlzRGlzYWJsZWQsXG4gICAgICAgIG1lbnVJc09wZW4gPSBfdGhpcyRwcm9wczUubWVudUlzT3BlbixcbiAgICAgICAgb25LZXlEb3duID0gX3RoaXMkcHJvcHM1Lm9uS2V5RG93bixcbiAgICAgICAgdGFiU2VsZWN0c1ZhbHVlID0gX3RoaXMkcHJvcHM1LnRhYlNlbGVjdHNWYWx1ZSxcbiAgICAgICAgb3Blbk1lbnVPbkZvY3VzID0gX3RoaXMkcHJvcHM1Lm9wZW5NZW51T25Gb2N1cztcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IF90aGlzLnN0YXRlLFxuICAgICAgICBmb2N1c2VkT3B0aW9uID0gX3RoaXMkc3RhdGUuZm9jdXNlZE9wdGlvbixcbiAgICAgICAgZm9jdXNlZFZhbHVlID0gX3RoaXMkc3RhdGUuZm9jdXNlZFZhbHVlLFxuICAgICAgICBzZWxlY3RWYWx1ZSA9IF90aGlzJHN0YXRlLnNlbGVjdFZhbHVlO1xuICAgICAgaWYgKGlzRGlzYWJsZWQpIHJldHVybjtcbiAgICAgIGlmICh0eXBlb2Ygb25LZXlEb3duID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9uS2V5RG93bihldmVudCk7XG4gICAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEJsb2NrIG9wdGlvbiBob3ZlciBldmVudHMgd2hlbiB0aGUgdXNlciBoYXMganVzdCBwcmVzc2VkIGEga2V5XG4gICAgICBfdGhpcy5ibG9ja09wdGlvbkhvdmVyID0gdHJ1ZTtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgaWYgKCFpc011bHRpIHx8IGlucHV0VmFsdWUpIHJldHVybjtcbiAgICAgICAgICBfdGhpcy5mb2N1c1ZhbHVlKCdwcmV2aW91cycpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICBpZiAoIWlzTXVsdGkgfHwgaW5wdXRWYWx1ZSkgcmV0dXJuO1xuICAgICAgICAgIF90aGlzLmZvY3VzVmFsdWUoJ25leHQnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRGVsZXRlJzpcbiAgICAgICAgY2FzZSAnQmFja3NwYWNlJzpcbiAgICAgICAgICBpZiAoaW5wdXRWYWx1ZSkgcmV0dXJuO1xuICAgICAgICAgIGlmIChmb2N1c2VkVmFsdWUpIHtcbiAgICAgICAgICAgIF90aGlzLnJlbW92ZVZhbHVlKGZvY3VzZWRWYWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghYmFja3NwYWNlUmVtb3Zlc1ZhbHVlKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoaXNNdWx0aSkge1xuICAgICAgICAgICAgICBfdGhpcy5wb3BWYWx1ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0NsZWFyYWJsZSkge1xuICAgICAgICAgICAgICBfdGhpcy5jbGVhclZhbHVlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdUYWInOlxuICAgICAgICAgIGlmIChfdGhpcy5pc0NvbXBvc2luZykgcmV0dXJuO1xuICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSB8fCAhbWVudUlzT3BlbiB8fCAhdGFiU2VsZWN0c1ZhbHVlIHx8ICFmb2N1c2VkT3B0aW9uIHx8XG4gICAgICAgICAgLy8gZG9uJ3QgY2FwdHVyZSB0aGUgZXZlbnQgaWYgdGhlIG1lbnUgb3BlbnMgb24gZm9jdXMgYW5kIHRoZSBmb2N1c2VkXG4gICAgICAgICAgLy8gb3B0aW9uIGlzIGFscmVhZHkgc2VsZWN0ZWQ7IGl0IGJyZWFrcyB0aGUgZmxvdyBvZiBuYXZpZ2F0aW9uXG4gICAgICAgICAgb3Blbk1lbnVPbkZvY3VzICYmIF90aGlzLmlzT3B0aW9uU2VsZWN0ZWQoZm9jdXNlZE9wdGlvbiwgc2VsZWN0VmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIF90aGlzLnNlbGVjdE9wdGlvbihmb2N1c2VkT3B0aW9uKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyMjkpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZSB0aGUga2V5ZG93biBldmVudCBmcm9tIGFuIElucHV0IE1ldGhvZCBFZGl0b3IoSU1FKVxuICAgICAgICAgICAgLy8gcmVmLiBodHRwczovL3d3dy53My5vcmcvVFIvdWlldmVudHMvI2RldGVybWluZS1rZXlkb3duLWtleXVwLWtleUNvZGVcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgICAgaWYgKCFmb2N1c2VkT3B0aW9uKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoX3RoaXMuaXNDb21wb3NpbmcpIHJldHVybjtcbiAgICAgICAgICAgIF90aGlzLnNlbGVjdE9wdGlvbihmb2N1c2VkT3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfdGhpcy5vbklucHV0Q2hhbmdlKCcnLCB7XG4gICAgICAgICAgICAgIGFjdGlvbjogJ21lbnUtY2xvc2UnLFxuICAgICAgICAgICAgICBwcmV2SW5wdXRWYWx1ZTogaW5wdXRWYWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfdGhpcy5vbk1lbnVDbG9zZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDbGVhcmFibGUgJiYgZXNjYXBlQ2xlYXJzVmFsdWUpIHtcbiAgICAgICAgICAgIF90aGlzLmNsZWFyVmFsdWUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgIC8vIHNwYWNlXG4gICAgICAgICAgaWYgKGlucHV0VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSB7XG4gICAgICAgICAgICBfdGhpcy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWZvY3VzZWRPcHRpb24pIHJldHVybjtcbiAgICAgICAgICBfdGhpcy5zZWxlY3RPcHRpb24oZm9jdXNlZE9wdGlvbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgIGlmIChtZW51SXNPcGVuKSB7XG4gICAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbigndXAnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMub3Blbk1lbnUoJ2xhc3QnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgICAgIF90aGlzLmZvY3VzT3B0aW9uKCdkb3duJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLm9wZW5NZW51KCdmaXJzdCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUGFnZVVwJzpcbiAgICAgICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybjtcbiAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbigncGFnZXVwJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1BhZ2VEb3duJzpcbiAgICAgICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybjtcbiAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbigncGFnZWRvd24nKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG4gICAgICAgICAgX3RoaXMuZm9jdXNPcHRpb24oJ2ZpcnN0Jyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0VuZCc6XG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG4gICAgICAgICAgX3RoaXMuZm9jdXNPcHRpb24oJ2xhc3QnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG4gICAgX3RoaXMuc3RhdGUuaW5zdGFuY2VQcmVmaXggPSAncmVhY3Qtc2VsZWN0LScgKyAoX3RoaXMucHJvcHMuaW5zdGFuY2VJZCB8fCArK2luc3RhbmNlSWQpO1xuICAgIF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlID0gY2xlYW5WYWx1ZShfcHJvcHMudmFsdWUpO1xuICAgIC8vIFNldCBmb2N1c2VkT3B0aW9uIGlmIG1lbnVJc09wZW4gaXMgc2V0IG9uIGluaXQgKGUuZy4gZGVmYXVsdE1lbnVJc09wZW4pXG4gICAgaWYgKF9wcm9wcy5tZW51SXNPcGVuICYmIF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlLmxlbmd0aCkge1xuICAgICAgdmFyIGZvY3VzYWJsZU9wdGlvbnNXaXRoSWRzID0gX3RoaXMuZ2V0Rm9jdXNhYmxlT3B0aW9uc1dpdGhJZHMoKTtcbiAgICAgIHZhciBmb2N1c2FibGVPcHRpb25zID0gX3RoaXMuYnVpbGRGb2N1c2FibGVPcHRpb25zKCk7XG4gICAgICB2YXIgb3B0aW9uSW5kZXggPSBmb2N1c2FibGVPcHRpb25zLmluZGV4T2YoX3RoaXMuc3RhdGUuc2VsZWN0VmFsdWVbMF0pO1xuICAgICAgX3RoaXMuc3RhdGUuZm9jdXNhYmxlT3B0aW9uc1dpdGhJZHMgPSBmb2N1c2FibGVPcHRpb25zV2l0aElkcztcbiAgICAgIF90aGlzLnN0YXRlLmZvY3VzZWRPcHRpb24gPSBmb2N1c2FibGVPcHRpb25zW29wdGlvbkluZGV4XTtcbiAgICAgIF90aGlzLnN0YXRlLmZvY3VzZWRPcHRpb25JZCA9IGdldEZvY3VzZWRPcHRpb25JZChmb2N1c2FibGVPcHRpb25zV2l0aElkcywgZm9jdXNhYmxlT3B0aW9uc1tvcHRpb25JbmRleF0pO1xuICAgIH1cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKFNlbGVjdCwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nQ29tcG9zaXRpb24oKTtcbiAgICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmdUb1RvdWNoKCk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU1lbnVPblNjcm9sbCAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIC8vIExpc3RlbiB0byBhbGwgc2Nyb2xsIGV2ZW50cywgYW5kIGZpbHRlciB0aGVtIG91dCBpbnNpZGUgb2YgJ29uU2Nyb2xsJ1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2Nyb2xsIGZvY3VzZWRPcHRpb24gaW50byB2aWV3IGlmIG1lbnVJc09wZW4gaXMgc2V0IG9uIG1vdW50IChlLmcuIGRlZmF1bHRNZW51SXNPcGVuKVxuICAgICAgaWYgKHRoaXMucHJvcHMubWVudUlzT3BlbiAmJiB0aGlzLnN0YXRlLmZvY3VzZWRPcHRpb24gJiYgdGhpcy5tZW51TGlzdFJlZiAmJiB0aGlzLmZvY3VzZWRPcHRpb25SZWYpIHtcbiAgICAgICAgc2Nyb2xsSW50b1ZpZXcodGhpcy5tZW51TGlzdFJlZiwgdGhpcy5mb2N1c2VkT3B0aW9uUmVmKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHM2LmlzRGlzYWJsZWQsXG4gICAgICAgIG1lbnVJc09wZW4gPSBfdGhpcyRwcm9wczYubWVudUlzT3BlbjtcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcbiAgICAgIGlmIChcbiAgICAgIC8vIGVuc3VyZSBmb2N1cyBpcyByZXN0b3JlZCBjb3JyZWN0bHkgd2hlbiB0aGUgY29udHJvbCBiZWNvbWVzIGVuYWJsZWRcbiAgICAgIGlzRm9jdXNlZCAmJiAhaXNEaXNhYmxlZCAmJiBwcmV2UHJvcHMuaXNEaXNhYmxlZCB8fFxuICAgICAgLy8gZW5zdXJlIGZvY3VzIGlzIG9uIHRoZSBJbnB1dCB3aGVuIHRoZSBtZW51IG9wZW5zXG4gICAgICBpc0ZvY3VzZWQgJiYgbWVudUlzT3BlbiAmJiAhcHJldlByb3BzLm1lbnVJc09wZW4pIHtcbiAgICAgICAgdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNGb2N1c2VkICYmIGlzRGlzYWJsZWQgJiYgIXByZXZQcm9wcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzZWxlY3Qgc3RhdGUgZ2V0cyBibHVycmVkIGluIGNhc2UgU2VsZWN0IGlzIHByb2dyYW1tYXRpY2FsbHkgZGlzYWJsZWQgd2hpbGUgZm9jdXNlZFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXNGb2N1c2VkOiBmYWxzZVxuICAgICAgICB9LCB0aGlzLm9uTWVudUNsb3NlKTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzRm9jdXNlZCAmJiAhaXNEaXNhYmxlZCAmJiBwcmV2UHJvcHMuaXNEaXNhYmxlZCAmJiB0aGlzLmlucHV0UmVmID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgIC8vIGVuc3VyZSBzZWxlY3Qgc3RhdGUgZ2V0cyBmb2N1c2VkIGluIGNhc2UgU2VsZWN0IGlzIHByb2dyYW1hdGljYWxseSByZS1lbmFibGVkIHdoaWxlIGZvY3VzZWQgKEZpcmVmb3gpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc0ZvY3VzZWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNjcm9sbCB0aGUgZm9jdXNlZCBvcHRpb24gaW50byB2aWV3IGlmIG5lY2Vzc2FyeVxuICAgICAgaWYgKHRoaXMubWVudUxpc3RSZWYgJiYgdGhpcy5mb2N1c2VkT3B0aW9uUmVmICYmIHRoaXMuc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUpIHtcbiAgICAgICAgc2Nyb2xsSW50b1ZpZXcodGhpcy5tZW51TGlzdFJlZiwgdGhpcy5mb2N1c2VkT3B0aW9uUmVmKTtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuc3RvcExpc3RlbmluZ0NvbXBvc2l0aW9uKCk7XG4gICAgICB0aGlzLnN0b3BMaXN0ZW5pbmdUb1RvdWNoKCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBDb25zdW1lciBIYW5kbGVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICB9LCB7XG4gICAga2V5OiBcIm9uTWVudU9wZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25NZW51T3BlbigpIHtcbiAgICAgIHRoaXMucHJvcHMub25NZW51T3BlbigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbk1lbnVDbG9zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1lbnVDbG9zZSgpIHtcbiAgICAgIHRoaXMub25JbnB1dENoYW5nZSgnJywge1xuICAgICAgICBhY3Rpb246ICdtZW51LWNsb3NlJyxcbiAgICAgICAgcHJldklucHV0VmFsdWU6IHRoaXMucHJvcHMuaW5wdXRWYWx1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLnByb3BzLm9uTWVudUNsb3NlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uSW5wdXRDaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25JbnB1dENoYW5nZShuZXdWYWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKG5ld1ZhbHVlLCBhY3Rpb25NZXRhKTtcbiAgICB9XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBNZXRob2RzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9jdXNJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1c0lucHV0KCkge1xuICAgICAgaWYgKCF0aGlzLmlucHV0UmVmKSByZXR1cm47XG4gICAgICB0aGlzLmlucHV0UmVmLmZvY3VzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJsdXJJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBibHVySW5wdXQoKSB7XG4gICAgICBpZiAoIXRoaXMuaW5wdXRSZWYpIHJldHVybjtcbiAgICAgIHRoaXMuaW5wdXRSZWYuYmx1cigpO1xuICAgIH1cblxuICAgIC8vIGFsaWFzZWQgZm9yIGNvbnN1bWVyc1xuICB9LCB7XG4gICAga2V5OiBcIm9wZW5NZW51XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW5NZW51KGZvY3VzT3B0aW9uKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTIgPSB0aGlzLnN0YXRlLFxuICAgICAgICBzZWxlY3RWYWx1ZSA9IF90aGlzJHN0YXRlMi5zZWxlY3RWYWx1ZSxcbiAgICAgICAgaXNGb2N1c2VkID0gX3RoaXMkc3RhdGUyLmlzRm9jdXNlZDtcbiAgICAgIHZhciBmb2N1c2FibGVPcHRpb25zID0gdGhpcy5idWlsZEZvY3VzYWJsZU9wdGlvbnMoKTtcbiAgICAgIHZhciBvcGVuQXRJbmRleCA9IGZvY3VzT3B0aW9uID09PSAnZmlyc3QnID8gMCA6IGZvY3VzYWJsZU9wdGlvbnMubGVuZ3RoIC0gMTtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5pc011bHRpKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gZm9jdXNhYmxlT3B0aW9ucy5pbmRleE9mKHNlbGVjdFZhbHVlWzBdKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPiAtMSkge1xuICAgICAgICAgIG9wZW5BdEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBvbmx5IHNjcm9sbCBpZiB0aGUgbWVudSBpc24ndCBhbHJlYWR5IG9wZW5cbiAgICAgIHRoaXMuc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUgPSAhKGlzRm9jdXNlZCAmJiB0aGlzLm1lbnVMaXN0UmVmKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6IGZhbHNlLFxuICAgICAgICBmb2N1c2VkVmFsdWU6IG51bGwsXG4gICAgICAgIGZvY3VzZWRPcHRpb246IGZvY3VzYWJsZU9wdGlvbnNbb3BlbkF0SW5kZXhdLFxuICAgICAgICBmb2N1c2VkT3B0aW9uSWQ6IHRoaXMuZ2V0Rm9jdXNlZE9wdGlvbklkKGZvY3VzYWJsZU9wdGlvbnNbb3BlbkF0SW5kZXhdKVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLm9uTWVudU9wZW4oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb2N1c1ZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzVmFsdWUoZGlyZWN0aW9uKSB7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUzID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgc2VsZWN0VmFsdWUgPSBfdGhpcyRzdGF0ZTMuc2VsZWN0VmFsdWUsXG4gICAgICAgIGZvY3VzZWRWYWx1ZSA9IF90aGlzJHN0YXRlMy5mb2N1c2VkVmFsdWU7XG5cbiAgICAgIC8vIE9ubHkgbXVsdGlzZWxlY3RzIHN1cHBvcnQgdmFsdWUgZm9jdXNpbmdcbiAgICAgIGlmICghdGhpcy5wcm9wcy5pc011bHRpKSByZXR1cm47XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZE9wdGlvbjogbnVsbFxuICAgICAgfSk7XG4gICAgICB2YXIgZm9jdXNlZEluZGV4ID0gc2VsZWN0VmFsdWUuaW5kZXhPZihmb2N1c2VkVmFsdWUpO1xuICAgICAgaWYgKCFmb2N1c2VkVmFsdWUpIHtcbiAgICAgICAgZm9jdXNlZEluZGV4ID0gLTE7XG4gICAgICB9XG4gICAgICB2YXIgbGFzdEluZGV4ID0gc2VsZWN0VmFsdWUubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBuZXh0Rm9jdXMgPSAtMTtcbiAgICAgIGlmICghc2VsZWN0VmFsdWUubGVuZ3RoKSByZXR1cm47XG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlICdwcmV2aW91cyc6XG4gICAgICAgICAgaWYgKGZvY3VzZWRJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gZG9uJ3QgY3ljbGUgZnJvbSB0aGUgc3RhcnQgdG8gdGhlIGVuZFxuICAgICAgICAgICAgbmV4dEZvY3VzID0gMDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGZvY3VzZWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIGlmIG5vdGhpbmcgaXMgZm9jdXNlZCwgZm9jdXMgdGhlIGxhc3QgdmFsdWUgZmlyc3RcbiAgICAgICAgICAgIG5leHRGb2N1cyA9IGxhc3RJbmRleDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV4dEZvY3VzID0gZm9jdXNlZEluZGV4IC0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICAgIGlmIChmb2N1c2VkSW5kZXggPiAtMSAmJiBmb2N1c2VkSW5kZXggPCBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgIG5leHRGb2N1cyA9IGZvY3VzZWRJbmRleCArIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlucHV0SXNIaWRkZW46IG5leHRGb2N1cyAhPT0gLTEsXG4gICAgICAgIGZvY3VzZWRWYWx1ZTogc2VsZWN0VmFsdWVbbmV4dEZvY3VzXVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvY3VzT3B0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzT3B0aW9uKCkge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ2ZpcnN0JztcbiAgICAgIHZhciBwYWdlU2l6ZSA9IHRoaXMucHJvcHMucGFnZVNpemU7XG4gICAgICB2YXIgZm9jdXNlZE9wdGlvbiA9IHRoaXMuc3RhdGUuZm9jdXNlZE9wdGlvbjtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5nZXRGb2N1c2FibGVPcHRpb25zKCk7XG4gICAgICBpZiAoIW9wdGlvbnMubGVuZ3RoKSByZXR1cm47XG4gICAgICB2YXIgbmV4dEZvY3VzID0gMDsgLy8gaGFuZGxlcyAnZmlyc3QnXG4gICAgICB2YXIgZm9jdXNlZEluZGV4ID0gb3B0aW9ucy5pbmRleE9mKGZvY3VzZWRPcHRpb24pO1xuICAgICAgaWYgKCFmb2N1c2VkT3B0aW9uKSB7XG4gICAgICAgIGZvY3VzZWRJbmRleCA9IC0xO1xuICAgICAgfVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgICBuZXh0Rm9jdXMgPSBmb2N1c2VkSW5kZXggPiAwID8gZm9jdXNlZEluZGV4IC0gMSA6IG9wdGlvbnMubGVuZ3RoIC0gMTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgbmV4dEZvY3VzID0gKGZvY3VzZWRJbmRleCArIDEpICUgb3B0aW9ucy5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3BhZ2V1cCcpIHtcbiAgICAgICAgbmV4dEZvY3VzID0gZm9jdXNlZEluZGV4IC0gcGFnZVNpemU7XG4gICAgICAgIGlmIChuZXh0Rm9jdXMgPCAwKSBuZXh0Rm9jdXMgPSAwO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdwYWdlZG93bicpIHtcbiAgICAgICAgbmV4dEZvY3VzID0gZm9jdXNlZEluZGV4ICsgcGFnZVNpemU7XG4gICAgICAgIGlmIChuZXh0Rm9jdXMgPiBvcHRpb25zLmxlbmd0aCAtIDEpIG5leHRGb2N1cyA9IG9wdGlvbnMubGVuZ3RoIC0gMTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbGFzdCcpIHtcbiAgICAgICAgbmV4dEZvY3VzID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IHRydWU7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZE9wdGlvbjogb3B0aW9uc1tuZXh0Rm9jdXNdLFxuICAgICAgICBmb2N1c2VkVmFsdWU6IG51bGwsXG4gICAgICAgIGZvY3VzZWRPcHRpb25JZDogdGhpcy5nZXRGb2N1c2VkT3B0aW9uSWQob3B0aW9uc1tuZXh0Rm9jdXNdKVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFRoZW1lXCIsXG4gICAgdmFsdWU6XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gR2V0dGVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgZnVuY3Rpb24gZ2V0VGhlbWUoKSB7XG4gICAgICAvLyBVc2UgdGhlIGRlZmF1bHQgdGhlbWUgaWYgdGhlcmUgYXJlIG5vIGN1c3RvbWlzYXRpb25zLlxuICAgICAgaWYgKCF0aGlzLnByb3BzLnRoZW1lKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VGhlbWU7XG4gICAgICB9XG4gICAgICAvLyBJZiB0aGUgdGhlbWUgcHJvcCBpcyBhIGZ1bmN0aW9uLCBhc3N1bWUgdGhlIGZ1bmN0aW9uXG4gICAgICAvLyBrbm93cyBob3cgdG8gbWVyZ2UgdGhlIHBhc3NlZC1pbiBkZWZhdWx0IHRoZW1lIHdpdGhcbiAgICAgIC8vIGl0cyBvd24gbW9kaWZpY2F0aW9ucy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy50aGVtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy50aGVtZShkZWZhdWx0VGhlbWUpO1xuICAgICAgfVxuICAgICAgLy8gT3RoZXJ3aXNlLCBpZiBhIHBsYWluIHRoZW1lIG9iamVjdCB3YXMgcGFzc2VkIGluLFxuICAgICAgLy8gb3ZlcmxheSBpdCB3aXRoIHRoZSBkZWZhdWx0IHRoZW1lLlxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZGVmYXVsdFRoZW1lKSwgdGhpcy5wcm9wcy50aGVtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldENvbW1vblByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbW1vblByb3BzKCkge1xuICAgICAgdmFyIGNsZWFyVmFsdWUgPSB0aGlzLmNsZWFyVmFsdWUsXG4gICAgICAgIGN4ID0gdGhpcy5jeCxcbiAgICAgICAgZ2V0U3R5bGVzID0gdGhpcy5nZXRTdHlsZXMsXG4gICAgICAgIGdldENsYXNzTmFtZXMgPSB0aGlzLmdldENsYXNzTmFtZXMsXG4gICAgICAgIGdldFZhbHVlID0gdGhpcy5nZXRWYWx1ZSxcbiAgICAgICAgc2VsZWN0T3B0aW9uID0gdGhpcy5zZWxlY3RPcHRpb24sXG4gICAgICAgIHNldFZhbHVlID0gdGhpcy5zZXRWYWx1ZSxcbiAgICAgICAgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGlzTXVsdGkgPSBwcm9wcy5pc011bHRpLFxuICAgICAgICBpc1J0bCA9IHByb3BzLmlzUnRsLFxuICAgICAgICBvcHRpb25zID0gcHJvcHMub3B0aW9ucztcbiAgICAgIHZhciBoYXNWYWx1ZSA9IHRoaXMuaGFzVmFsdWUoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNsZWFyVmFsdWU6IGNsZWFyVmFsdWUsXG4gICAgICAgIGN4OiBjeCxcbiAgICAgICAgZ2V0U3R5bGVzOiBnZXRTdHlsZXMsXG4gICAgICAgIGdldENsYXNzTmFtZXM6IGdldENsYXNzTmFtZXMsXG4gICAgICAgIGdldFZhbHVlOiBnZXRWYWx1ZSxcbiAgICAgICAgaGFzVmFsdWU6IGhhc1ZhbHVlLFxuICAgICAgICBpc011bHRpOiBpc011bHRpLFxuICAgICAgICBpc1J0bDogaXNSdGwsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIHNlbGVjdE9wdGlvbjogc2VsZWN0T3B0aW9uLFxuICAgICAgICBzZWxlY3RQcm9wczogcHJvcHMsXG4gICAgICAgIHNldFZhbHVlOiBzZXRWYWx1ZSxcbiAgICAgICAgdGhlbWU6IHRoaXMuZ2V0VGhlbWUoKVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFzVmFsdWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzVmFsdWUoKSB7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSB0aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuICAgICAgcmV0dXJuIHNlbGVjdFZhbHVlLmxlbmd0aCA+IDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhc09wdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzT3B0aW9ucygpIHtcbiAgICAgIHJldHVybiAhIXRoaXMuZ2V0Rm9jdXNhYmxlT3B0aW9ucygpLmxlbmd0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNDbGVhcmFibGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNDbGVhcmFibGUoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM3ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaXNDbGVhcmFibGUgPSBfdGhpcyRwcm9wczcuaXNDbGVhcmFibGUsXG4gICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczcuaXNNdWx0aTtcblxuICAgICAgLy8gc2luZ2xlIHNlbGVjdCwgYnkgZGVmYXVsdCwgSVMgTk9UIGNsZWFyYWJsZVxuICAgICAgLy8gbXVsdGkgc2VsZWN0LCBieSBkZWZhdWx0LCBJUyBjbGVhcmFibGVcbiAgICAgIGlmIChpc0NsZWFyYWJsZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaXNNdWx0aTtcbiAgICAgIHJldHVybiBpc0NsZWFyYWJsZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNPcHRpb25EaXNhYmxlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc09wdGlvbkRpc2FibGVkKG9wdGlvbiwgc2VsZWN0VmFsdWUpIHtcbiAgICAgIHJldHVybiBfaXNPcHRpb25EaXNhYmxlZCh0aGlzLnByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNPcHRpb25TZWxlY3RlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc09wdGlvblNlbGVjdGVkKG9wdGlvbiwgc2VsZWN0VmFsdWUpIHtcbiAgICAgIHJldHVybiBfaXNPcHRpb25TZWxlY3RlZCh0aGlzLnByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmlsdGVyT3B0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbHRlck9wdGlvbihvcHRpb24sIGlucHV0VmFsdWUpIHtcbiAgICAgIHJldHVybiBfZmlsdGVyT3B0aW9uKHRoaXMucHJvcHMsIG9wdGlvbiwgaW5wdXRWYWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdE9wdGlvbkxhYmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdE9wdGlvbkxhYmVsKGRhdGEsIGNvbnRleHQpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5mb3JtYXRPcHRpb25MYWJlbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgX2lucHV0VmFsdWUgPSB0aGlzLnByb3BzLmlucHV0VmFsdWU7XG4gICAgICAgIHZhciBfc2VsZWN0VmFsdWUgPSB0aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5mb3JtYXRPcHRpb25MYWJlbChkYXRhLCB7XG4gICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICBpbnB1dFZhbHVlOiBfaW5wdXRWYWx1ZSxcbiAgICAgICAgICBzZWxlY3RWYWx1ZTogX3NlbGVjdFZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3B0aW9uTGFiZWwoZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdEdyb3VwTGFiZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0R3JvdXBMYWJlbChkYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5mb3JtYXRHcm91cExhYmVsKGRhdGEpO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIE1vdXNlIEhhbmRsZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRMaXN0ZW5pbmdDb21wb3NpdGlvblwiLFxuICAgIHZhbHVlOlxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIENvbXBvc2l0aW9uIEhhbmRsZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBmdW5jdGlvbiBzdGFydExpc3RlbmluZ0NvbXBvc2l0aW9uKCkge1xuICAgICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25zdGFydCcsIHRoaXMub25Db21wb3NpdGlvblN0YXJ0LCBmYWxzZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgdGhpcy5vbkNvbXBvc2l0aW9uRW5kLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BMaXN0ZW5pbmdDb21wb3NpdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nQ29tcG9zaXRpb24oKSB7XG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0JywgdGhpcy5vbkNvbXBvc2l0aW9uU3RhcnQpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbmVuZCcsIHRoaXMub25Db21wb3NpdGlvbkVuZCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXJ0TGlzdGVuaW5nVG9Ub3VjaFwiLFxuICAgIHZhbHVlOlxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIFRvdWNoIEhhbmRsZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBmdW5jdGlvbiBzdGFydExpc3RlbmluZ1RvVG91Y2goKSB7XG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSwgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdG9wTGlzdGVuaW5nVG9Ub3VjaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nVG9Ub3VjaCgpIHtcbiAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlcklucHV0XCIsXG4gICAgdmFsdWU6XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gUmVuZGVyZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZnVuY3Rpb24gcmVuZGVySW5wdXQoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM4ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzOC5pc0Rpc2FibGVkLFxuICAgICAgICBpc1NlYXJjaGFibGUgPSBfdGhpcyRwcm9wczguaXNTZWFyY2hhYmxlLFxuICAgICAgICBpbnB1dElkID0gX3RoaXMkcHJvcHM4LmlucHV0SWQsXG4gICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRwcm9wczguaW5wdXRWYWx1ZSxcbiAgICAgICAgdGFiSW5kZXggPSBfdGhpcyRwcm9wczgudGFiSW5kZXgsXG4gICAgICAgIGZvcm0gPSBfdGhpcyRwcm9wczguZm9ybSxcbiAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzOC5tZW51SXNPcGVuLFxuICAgICAgICByZXF1aXJlZCA9IF90aGlzJHByb3BzOC5yZXF1aXJlZDtcbiAgICAgIHZhciBfdGhpcyRnZXRDb21wb25lbnRzID0gdGhpcy5nZXRDb21wb25lbnRzKCksXG4gICAgICAgIElucHV0ID0gX3RoaXMkZ2V0Q29tcG9uZW50cy5JbnB1dDtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTQgPSB0aGlzLnN0YXRlLFxuICAgICAgICBpbnB1dElzSGlkZGVuID0gX3RoaXMkc3RhdGU0LmlucHV0SXNIaWRkZW4sXG4gICAgICAgIGFyaWFTZWxlY3Rpb24gPSBfdGhpcyRzdGF0ZTQuYXJpYVNlbGVjdGlvbjtcbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgaWQgPSBpbnB1dElkIHx8IHRoaXMuZ2V0RWxlbWVudElkKCdpbnB1dCcpO1xuXG4gICAgICAvLyBhcmlhIGF0dHJpYnV0ZXMgbWFrZXMgdGhlIEpTWCBcIm5vaXN5XCIsIHNlcGFyYXRlZCBmb3IgY2xhcml0eVxuICAgICAgdmFyIGFyaWFBdHRyaWJ1dGVzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAnYXJpYS1hdXRvY29tcGxldGUnOiAnbGlzdCcsXG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogbWVudUlzT3BlbixcbiAgICAgICAgJ2FyaWEtaGFzcG9wdXAnOiB0cnVlLFxuICAgICAgICAnYXJpYS1lcnJvcm1lc3NhZ2UnOiB0aGlzLnByb3BzWydhcmlhLWVycm9ybWVzc2FnZSddLFxuICAgICAgICAnYXJpYS1pbnZhbGlkJzogdGhpcy5wcm9wc1snYXJpYS1pbnZhbGlkJ10sXG4gICAgICAgICdhcmlhLWxhYmVsJzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbCddLFxuICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbGxlZGJ5J10sXG4gICAgICAgICdhcmlhLXJlcXVpcmVkJzogcmVxdWlyZWQsXG4gICAgICAgIHJvbGU6ICdjb21ib2JveCcsXG4gICAgICAgICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiB0aGlzLmlzQXBwbGVEZXZpY2UgPyB1bmRlZmluZWQgOiB0aGlzLnN0YXRlLmZvY3VzZWRPcHRpb25JZCB8fCAnJ1xuICAgICAgfSwgbWVudUlzT3BlbiAmJiB7XG4gICAgICAgICdhcmlhLWNvbnRyb2xzJzogdGhpcy5nZXRFbGVtZW50SWQoJ2xpc3Rib3gnKVxuICAgICAgfSksICFpc1NlYXJjaGFibGUgJiYge1xuICAgICAgICAnYXJpYS1yZWFkb25seSc6IHRydWVcbiAgICAgIH0pLCB0aGlzLmhhc1ZhbHVlKCkgPyAoYXJpYVNlbGVjdGlvbiA9PT0gbnVsbCB8fCBhcmlhU2VsZWN0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcmlhU2VsZWN0aW9uLmFjdGlvbikgPT09ICdpbml0aWFsLWlucHV0LWZvY3VzJyAmJiB7XG4gICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogdGhpcy5nZXRFbGVtZW50SWQoJ2xpdmUtcmVnaW9uJylcbiAgICAgIH0gOiB7XG4gICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogdGhpcy5nZXRFbGVtZW50SWQoJ3BsYWNlaG9sZGVyJylcbiAgICAgIH0pO1xuICAgICAgaWYgKCFpc1NlYXJjaGFibGUpIHtcbiAgICAgICAgLy8gdXNlIGEgZHVtbXkgaW5wdXQgdG8gbWFpbnRhaW4gZm9jdXMvYmx1ciBmdW5jdGlvbmFsaXR5XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEdW1teUlucHV0LCBfZXh0ZW5kcyh7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGlubmVyUmVmOiB0aGlzLmdldElucHV0UmVmLFxuICAgICAgICAgIG9uQmx1cjogdGhpcy5vbklucHV0Qmx1cixcbiAgICAgICAgICBvbkNoYW5nZTogbm9vcCxcbiAgICAgICAgICBvbkZvY3VzOiB0aGlzLm9uSW5wdXRGb2N1cyxcbiAgICAgICAgICBkaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgICAgICAgaW5wdXRNb2RlOiBcIm5vbmVcIixcbiAgICAgICAgICBmb3JtOiBmb3JtLFxuICAgICAgICAgIHZhbHVlOiBcIlwiXG4gICAgICAgIH0sIGFyaWFBdHRyaWJ1dGVzKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBhdXRvQ2FwaXRhbGl6ZTogXCJub25lXCIsXG4gICAgICAgIGF1dG9Db21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgYXV0b0NvcnJlY3Q6IFwib2ZmXCIsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgaW5uZXJSZWY6IHRoaXMuZ2V0SW5wdXRSZWYsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzSGlkZGVuOiBpbnB1dElzSGlkZGVuLFxuICAgICAgICBvbkJsdXI6IHRoaXMub25JbnB1dEJsdXIsXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLFxuICAgICAgICBvbkZvY3VzOiB0aGlzLm9uSW5wdXRGb2N1cyxcbiAgICAgICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgICAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgICAgIGZvcm06IGZvcm0sXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICB2YWx1ZTogaW5wdXRWYWx1ZVxuICAgICAgfSwgYXJpYUF0dHJpYnV0ZXMpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyUGxhY2Vob2xkZXJPclZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclBsYWNlaG9sZGVyT3JWYWx1ZSgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuICAgICAgdmFyIF90aGlzJGdldENvbXBvbmVudHMyID0gdGhpcy5nZXRDb21wb25lbnRzKCksXG4gICAgICAgIE11bHRpVmFsdWUgPSBfdGhpcyRnZXRDb21wb25lbnRzMi5NdWx0aVZhbHVlLFxuICAgICAgICBNdWx0aVZhbHVlQ29udGFpbmVyID0gX3RoaXMkZ2V0Q29tcG9uZW50czIuTXVsdGlWYWx1ZUNvbnRhaW5lcixcbiAgICAgICAgTXVsdGlWYWx1ZUxhYmVsID0gX3RoaXMkZ2V0Q29tcG9uZW50czIuTXVsdGlWYWx1ZUxhYmVsLFxuICAgICAgICBNdWx0aVZhbHVlUmVtb3ZlID0gX3RoaXMkZ2V0Q29tcG9uZW50czIuTXVsdGlWYWx1ZVJlbW92ZSxcbiAgICAgICAgU2luZ2xlVmFsdWUgPSBfdGhpcyRnZXRDb21wb25lbnRzMi5TaW5nbGVWYWx1ZSxcbiAgICAgICAgUGxhY2Vob2xkZXIgPSBfdGhpcyRnZXRDb21wb25lbnRzMi5QbGFjZWhvbGRlcjtcbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM5ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY29udHJvbFNob3VsZFJlbmRlclZhbHVlID0gX3RoaXMkcHJvcHM5LmNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSxcbiAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzOS5pc0Rpc2FibGVkLFxuICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHM5LmlzTXVsdGksXG4gICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRwcm9wczkuaW5wdXRWYWx1ZSxcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBfdGhpcyRwcm9wczkucGxhY2Vob2xkZXI7XG4gICAgICB2YXIgX3RoaXMkc3RhdGU1ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgc2VsZWN0VmFsdWUgPSBfdGhpcyRzdGF0ZTUuc2VsZWN0VmFsdWUsXG4gICAgICAgIGZvY3VzZWRWYWx1ZSA9IF90aGlzJHN0YXRlNS5mb2N1c2VkVmFsdWUsXG4gICAgICAgIGlzRm9jdXNlZCA9IF90aGlzJHN0YXRlNS5pc0ZvY3VzZWQ7XG4gICAgICBpZiAoIXRoaXMuaGFzVmFsdWUoKSB8fCAhY29udHJvbFNob3VsZFJlbmRlclZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpbnB1dFZhbHVlID8gbnVsbCA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBsYWNlaG9sZGVyLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgICBrZXk6IFwicGxhY2Vob2xkZXJcIixcbiAgICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkLFxuICAgICAgICAgIGlubmVyUHJvcHM6IHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmdldEVsZW1lbnRJZCgncGxhY2Vob2xkZXInKVxuICAgICAgICAgIH1cbiAgICAgICAgfSksIHBsYWNlaG9sZGVyKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc011bHRpKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3RWYWx1ZS5tYXAoZnVuY3Rpb24gKG9wdCwgaW5kZXgpIHtcbiAgICAgICAgICB2YXIgaXNPcHRpb25Gb2N1c2VkID0gb3B0ID09PSBmb2N1c2VkVmFsdWU7XG4gICAgICAgICAgdmFyIGtleSA9IFwiXCIuY29uY2F0KF90aGlzMy5nZXRPcHRpb25MYWJlbChvcHQpLCBcIi1cIikuY29uY2F0KF90aGlzMy5nZXRPcHRpb25WYWx1ZShvcHQpKTtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTXVsdGlWYWx1ZSwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgIENvbnRhaW5lcjogTXVsdGlWYWx1ZUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgTGFiZWw6IE11bHRpVmFsdWVMYWJlbCxcbiAgICAgICAgICAgICAgUmVtb3ZlOiBNdWx0aVZhbHVlUmVtb3ZlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNGb2N1c2VkOiBpc09wdGlvbkZvY3VzZWQsXG4gICAgICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICByZW1vdmVQcm9wczoge1xuICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMucmVtb3ZlVmFsdWUob3B0KTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb25Ub3VjaEVuZDogZnVuY3Rpb24gb25Ub3VjaEVuZCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLnJlbW92ZVZhbHVlKG9wdCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YTogb3B0XG4gICAgICAgICAgfSksIF90aGlzMy5mb3JtYXRPcHRpb25MYWJlbChvcHQsICd2YWx1ZScpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoaW5wdXRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHZhciBzaW5nbGVWYWx1ZSA9IHNlbGVjdFZhbHVlWzBdO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNpbmdsZVZhbHVlLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgZGF0YTogc2luZ2xlVmFsdWUsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgICAgIH0pLCB0aGlzLmZvcm1hdE9wdGlvbkxhYmVsKHNpbmdsZVZhbHVlLCAndmFsdWUnKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckNsZWFySW5kaWNhdG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNsZWFySW5kaWNhdG9yKCkge1xuICAgICAgdmFyIF90aGlzJGdldENvbXBvbmVudHMzID0gdGhpcy5nZXRDb21wb25lbnRzKCksXG4gICAgICAgIENsZWFySW5kaWNhdG9yID0gX3RoaXMkZ2V0Q29tcG9uZW50czMuQ2xlYXJJbmRpY2F0b3I7XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIF90aGlzJHByb3BzMTAgPSB0aGlzLnByb3BzLFxuICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHMxMC5pc0Rpc2FibGVkLFxuICAgICAgICBpc0xvYWRpbmcgPSBfdGhpcyRwcm9wczEwLmlzTG9hZGluZztcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcbiAgICAgIGlmICghdGhpcy5pc0NsZWFyYWJsZSgpIHx8ICFDbGVhckluZGljYXRvciB8fCBpc0Rpc2FibGVkIHx8ICF0aGlzLmhhc1ZhbHVlKCkgfHwgaXNMb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgdmFyIGlubmVyUHJvcHMgPSB7XG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uQ2xlYXJJbmRpY2F0b3JNb3VzZURvd24sXG4gICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMub25DbGVhckluZGljYXRvclRvdWNoRW5kLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgIH07XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2xlYXJJbmRpY2F0b3IsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpbm5lclByb3BzOiBpbm5lclByb3BzLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJMb2FkaW5nSW5kaWNhdG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxvYWRpbmdJbmRpY2F0b3IoKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q29tcG9uZW50czQgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgTG9hZGluZ0luZGljYXRvciA9IF90aGlzJGdldENvbXBvbmVudHM0LkxvYWRpbmdJbmRpY2F0b3I7XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIF90aGlzJHByb3BzMTEgPSB0aGlzLnByb3BzLFxuICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHMxMS5pc0Rpc2FibGVkLFxuICAgICAgICBpc0xvYWRpbmcgPSBfdGhpcyRwcm9wczExLmlzTG9hZGluZztcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcbiAgICAgIGlmICghTG9hZGluZ0luZGljYXRvciB8fCAhaXNMb2FkaW5nKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBpbm5lclByb3BzID0ge1xuICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgIH07XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZ0luZGljYXRvciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHMsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckluZGljYXRvclNlcGFyYXRvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJbmRpY2F0b3JTZXBhcmF0b3IoKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q29tcG9uZW50czUgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgRHJvcGRvd25JbmRpY2F0b3IgPSBfdGhpcyRnZXRDb21wb25lbnRzNS5Ecm9wZG93bkluZGljYXRvcixcbiAgICAgICAgSW5kaWNhdG9yU2VwYXJhdG9yID0gX3RoaXMkZ2V0Q29tcG9uZW50czUuSW5kaWNhdG9yU2VwYXJhdG9yO1xuXG4gICAgICAvLyBzZXBhcmF0b3IgZG9lc24ndCBtYWtlIHNlbnNlIHdpdGhvdXQgdGhlIGRyb3Bkb3duIGluZGljYXRvclxuICAgICAgaWYgKCFEcm9wZG93bkluZGljYXRvciB8fCAhSW5kaWNhdG9yU2VwYXJhdG9yKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgaXNEaXNhYmxlZCA9IHRoaXMucHJvcHMuaXNEaXNhYmxlZDtcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbmRpY2F0b3JTZXBhcmF0b3IsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJEcm9wZG93bkluZGljYXRvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJEcm9wZG93bkluZGljYXRvcigpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDb21wb25lbnRzNiA9IHRoaXMuZ2V0Q29tcG9uZW50cygpLFxuICAgICAgICBEcm9wZG93bkluZGljYXRvciA9IF90aGlzJGdldENvbXBvbmVudHM2LkRyb3Bkb3duSW5kaWNhdG9yO1xuICAgICAgaWYgKCFEcm9wZG93bkluZGljYXRvcikgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIGlzRGlzYWJsZWQgPSB0aGlzLnByb3BzLmlzRGlzYWJsZWQ7XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG4gICAgICB2YXIgaW5uZXJQcm9wcyA9IHtcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25Ecm9wZG93bkluZGljYXRvck1vdXNlRG93bixcbiAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yVG91Y2hFbmQsXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgfTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wZG93bkluZGljYXRvciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHMsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlck1lbnVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuICAgICAgdmFyIF90aGlzJGdldENvbXBvbmVudHM3ID0gdGhpcy5nZXRDb21wb25lbnRzKCksXG4gICAgICAgIEdyb3VwID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuR3JvdXAsXG4gICAgICAgIEdyb3VwSGVhZGluZyA9IF90aGlzJGdldENvbXBvbmVudHM3Lkdyb3VwSGVhZGluZyxcbiAgICAgICAgTWVudSA9IF90aGlzJGdldENvbXBvbmVudHM3Lk1lbnUsXG4gICAgICAgIE1lbnVMaXN0ID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuTWVudUxpc3QsXG4gICAgICAgIE1lbnVQb3J0YWwgPSBfdGhpcyRnZXRDb21wb25lbnRzNy5NZW51UG9ydGFsLFxuICAgICAgICBMb2FkaW5nTWVzc2FnZSA9IF90aGlzJGdldENvbXBvbmVudHM3LkxvYWRpbmdNZXNzYWdlLFxuICAgICAgICBOb09wdGlvbnNNZXNzYWdlID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuTm9PcHRpb25zTWVzc2FnZSxcbiAgICAgICAgT3B0aW9uID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuT3B0aW9uO1xuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICAgIHZhciBmb2N1c2VkT3B0aW9uID0gdGhpcy5zdGF0ZS5mb2N1c2VkT3B0aW9uO1xuICAgICAgdmFyIF90aGlzJHByb3BzMTIgPSB0aGlzLnByb3BzLFxuICAgICAgICBjYXB0dXJlTWVudVNjcm9sbCA9IF90aGlzJHByb3BzMTIuY2FwdHVyZU1lbnVTY3JvbGwsXG4gICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRwcm9wczEyLmlucHV0VmFsdWUsXG4gICAgICAgIGlzTG9hZGluZyA9IF90aGlzJHByb3BzMTIuaXNMb2FkaW5nLFxuICAgICAgICBsb2FkaW5nTWVzc2FnZSA9IF90aGlzJHByb3BzMTIubG9hZGluZ01lc3NhZ2UsXG4gICAgICAgIG1pbk1lbnVIZWlnaHQgPSBfdGhpcyRwcm9wczEyLm1pbk1lbnVIZWlnaHQsXG4gICAgICAgIG1heE1lbnVIZWlnaHQgPSBfdGhpcyRwcm9wczEyLm1heE1lbnVIZWlnaHQsXG4gICAgICAgIG1lbnVJc09wZW4gPSBfdGhpcyRwcm9wczEyLm1lbnVJc09wZW4sXG4gICAgICAgIG1lbnVQbGFjZW1lbnQgPSBfdGhpcyRwcm9wczEyLm1lbnVQbGFjZW1lbnQsXG4gICAgICAgIG1lbnVQb3NpdGlvbiA9IF90aGlzJHByb3BzMTIubWVudVBvc2l0aW9uLFxuICAgICAgICBtZW51UG9ydGFsVGFyZ2V0ID0gX3RoaXMkcHJvcHMxMi5tZW51UG9ydGFsVGFyZ2V0LFxuICAgICAgICBtZW51U2hvdWxkQmxvY2tTY3JvbGwgPSBfdGhpcyRwcm9wczEyLm1lbnVTaG91bGRCbG9ja1Njcm9sbCxcbiAgICAgICAgbWVudVNob3VsZFNjcm9sbEludG9WaWV3ID0gX3RoaXMkcHJvcHMxMi5tZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcsXG4gICAgICAgIG5vT3B0aW9uc01lc3NhZ2UgPSBfdGhpcyRwcm9wczEyLm5vT3B0aW9uc01lc3NhZ2UsXG4gICAgICAgIG9uTWVudVNjcm9sbFRvVG9wID0gX3RoaXMkcHJvcHMxMi5vbk1lbnVTY3JvbGxUb1RvcCxcbiAgICAgICAgb25NZW51U2Nyb2xsVG9Cb3R0b20gPSBfdGhpcyRwcm9wczEyLm9uTWVudVNjcm9sbFRvQm90dG9tO1xuICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm4gbnVsbDtcblxuICAgICAgLy8gVE9ETzogSW50ZXJuYWwgT3B0aW9uIFR5cGUgaGVyZVxuICAgICAgdmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihwcm9wcywgaWQpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgICAgIGRhdGEgPSBwcm9wcy5kYXRhLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlzU2VsZWN0ZWQgPSBwcm9wcy5pc1NlbGVjdGVkLFxuICAgICAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICAgICAgdmFyIGlzRm9jdXNlZCA9IGZvY3VzZWRPcHRpb24gPT09IGRhdGE7XG4gICAgICAgIHZhciBvbkhvdmVyID0gaXNEaXNhYmxlZCA/IHVuZGVmaW5lZCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0Lm9uT3B0aW9uSG92ZXIoZGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvblNlbGVjdCA9IGlzRGlzYWJsZWQgPyB1bmRlZmluZWQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5zZWxlY3RPcHRpb24oZGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvcHRpb25JZCA9IFwiXCIuY29uY2F0KF90aGlzNC5nZXRFbGVtZW50SWQoJ29wdGlvbicpLCBcIi1cIikuY29uY2F0KGlkKTtcbiAgICAgICAgdmFyIGlubmVyUHJvcHMgPSB7XG4gICAgICAgICAgaWQ6IG9wdGlvbklkLFxuICAgICAgICAgIG9uQ2xpY2s6IG9uU2VsZWN0LFxuICAgICAgICAgIG9uTW91c2VNb3ZlOiBvbkhvdmVyLFxuICAgICAgICAgIG9uTW91c2VPdmVyOiBvbkhvdmVyLFxuICAgICAgICAgIHRhYkluZGV4OiAtMSxcbiAgICAgICAgICByb2xlOiAnb3B0aW9uJyxcbiAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IF90aGlzNC5pc0FwcGxlRGV2aWNlID8gdW5kZWZpbmVkIDogaXNTZWxlY3RlZCAvLyBpcyBub3Qgc3VwcG9ydGVkIG9uIEFwcGxlIGRldmljZXNcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgICBpbm5lclByb3BzOiBpbm5lclByb3BzLFxuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgICBpc1NlbGVjdGVkOiBpc1NlbGVjdGVkLFxuICAgICAgICAgIGtleTogb3B0aW9uSWQsXG4gICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkLFxuICAgICAgICAgIGlubmVyUmVmOiBpc0ZvY3VzZWQgPyBfdGhpczQuZ2V0Rm9jdXNlZE9wdGlvblJlZiA6IHVuZGVmaW5lZFxuICAgICAgICB9KSwgX3RoaXM0LmZvcm1hdE9wdGlvbkxhYmVsKHByb3BzLmRhdGEsICdtZW51JykpO1xuICAgICAgfTtcbiAgICAgIHZhciBtZW51VUk7XG4gICAgICBpZiAodGhpcy5oYXNPcHRpb25zKCkpIHtcbiAgICAgICAgbWVudVVJID0gdGhpcy5nZXRDYXRlZ29yaXplZE9wdGlvbnMoKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgICAgICB2YXIgX2RhdGEgPSBpdGVtLmRhdGEsXG4gICAgICAgICAgICAgIG9wdGlvbnMgPSBpdGVtLm9wdGlvbnMsXG4gICAgICAgICAgICAgIGdyb3VwSW5kZXggPSBpdGVtLmluZGV4O1xuICAgICAgICAgICAgdmFyIGdyb3VwSWQgPSBcIlwiLmNvbmNhdChfdGhpczQuZ2V0RWxlbWVudElkKCdncm91cCcpLCBcIi1cIikuY29uY2F0KGdyb3VwSW5kZXgpO1xuICAgICAgICAgICAgdmFyIGhlYWRpbmdJZCA9IFwiXCIuY29uY2F0KGdyb3VwSWQsIFwiLWhlYWRpbmdcIik7XG4gICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoR3JvdXAsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICAgICAgICBrZXk6IGdyb3VwSWQsXG4gICAgICAgICAgICAgIGRhdGE6IF9kYXRhLFxuICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgICAgICBIZWFkaW5nOiBHcm91cEhlYWRpbmcsXG4gICAgICAgICAgICAgIGhlYWRpbmdQcm9wczoge1xuICAgICAgICAgICAgICAgIGlkOiBoZWFkaW5nSWQsXG4gICAgICAgICAgICAgICAgZGF0YTogaXRlbS5kYXRhXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhYmVsOiBfdGhpczQuZm9ybWF0R3JvdXBMYWJlbChpdGVtLmRhdGEpXG4gICAgICAgICAgICB9KSwgaXRlbS5vcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZW5kZXIob3B0aW9uLCBcIlwiLmNvbmNhdChncm91cEluZGV4LCBcIi1cIikuY29uY2F0KG9wdGlvbi5pbmRleCkpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnb3B0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlbmRlcihpdGVtLCBcIlwiLmNvbmNhdChpdGVtLmluZGV4KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gbG9hZGluZ01lc3NhZ2Uoe1xuICAgICAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChtZXNzYWdlID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICAgICAgbWVudVVJID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZ01lc3NhZ2UsIGNvbW1vblByb3BzLCBtZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfbWVzc2FnZSA9IG5vT3B0aW9uc01lc3NhZ2Uoe1xuICAgICAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChfbWVzc2FnZSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIG1lbnVVSSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE5vT3B0aW9uc01lc3NhZ2UsIGNvbW1vblByb3BzLCBfbWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB2YXIgbWVudVBsYWNlbWVudFByb3BzID0ge1xuICAgICAgICBtaW5NZW51SGVpZ2h0OiBtaW5NZW51SGVpZ2h0LFxuICAgICAgICBtYXhNZW51SGVpZ2h0OiBtYXhNZW51SGVpZ2h0LFxuICAgICAgICBtZW51UGxhY2VtZW50OiBtZW51UGxhY2VtZW50LFxuICAgICAgICBtZW51UG9zaXRpb246IG1lbnVQb3NpdGlvbixcbiAgICAgICAgbWVudVNob3VsZFNjcm9sbEludG9WaWV3OiBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXdcbiAgICAgIH07XG4gICAgICB2YXIgbWVudUVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51UGxhY2VyLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIG1lbnVQbGFjZW1lbnRQcm9wcyksIGZ1bmN0aW9uIChfcmVmNCkge1xuICAgICAgICB2YXIgcmVmID0gX3JlZjQucmVmLFxuICAgICAgICAgIF9yZWY0JHBsYWNlclByb3BzID0gX3JlZjQucGxhY2VyUHJvcHMsXG4gICAgICAgICAgcGxhY2VtZW50ID0gX3JlZjQkcGxhY2VyUHJvcHMucGxhY2VtZW50LFxuICAgICAgICAgIG1heEhlaWdodCA9IF9yZWY0JHBsYWNlclByb3BzLm1heEhlaWdodDtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1lbnUsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywgbWVudVBsYWNlbWVudFByb3BzLCB7XG4gICAgICAgICAgaW5uZXJSZWY6IHJlZixcbiAgICAgICAgICBpbm5lclByb3BzOiB7XG4gICAgICAgICAgICBvbk1vdXNlRG93bjogX3RoaXM0Lm9uTWVudU1vdXNlRG93bixcbiAgICAgICAgICAgIG9uTW91c2VNb3ZlOiBfdGhpczQub25NZW51TW91c2VNb3ZlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc0xvYWRpbmc6IGlzTG9hZGluZyxcbiAgICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICAgICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsTWFuYWdlciwge1xuICAgICAgICAgIGNhcHR1cmVFbmFibGVkOiBjYXB0dXJlTWVudVNjcm9sbCxcbiAgICAgICAgICBvblRvcEFycml2ZTogb25NZW51U2Nyb2xsVG9Ub3AsXG4gICAgICAgICAgb25Cb3R0b21BcnJpdmU6IG9uTWVudVNjcm9sbFRvQm90dG9tLFxuICAgICAgICAgIGxvY2tFbmFibGVkOiBtZW51U2hvdWxkQmxvY2tTY3JvbGxcbiAgICAgICAgfSwgZnVuY3Rpb24gKHNjcm9sbFRhcmdldFJlZikge1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51TGlzdCwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAgICBpbm5lclJlZjogZnVuY3Rpb24gaW5uZXJSZWYoaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgX3RoaXM0LmdldE1lbnVMaXN0UmVmKGluc3RhbmNlKTtcbiAgICAgICAgICAgICAgc2Nyb2xsVGFyZ2V0UmVmKGluc3RhbmNlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbm5lclByb3BzOiB7XG4gICAgICAgICAgICAgIHJvbGU6ICdsaXN0Ym94JyxcbiAgICAgICAgICAgICAgJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJzogY29tbW9uUHJvcHMuaXNNdWx0aSxcbiAgICAgICAgICAgICAgaWQ6IF90aGlzNC5nZXRFbGVtZW50SWQoJ2xpc3Rib3gnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzTG9hZGluZzogaXNMb2FkaW5nLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHQsXG4gICAgICAgICAgICBmb2N1c2VkT3B0aW9uOiBmb2N1c2VkT3B0aW9uXG4gICAgICAgICAgfSksIG1lbnVVSSk7XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBwb3NpdGlvbmluZyBiZWhhdmlvdXIgaXMgYWxtb3N0IGlkZW50aWNhbCBmb3IgcG9ydGFsbGVkIGFuZCBmaXhlZCxcbiAgICAgIC8vIHNvIHdlIHVzZSB0aGUgc2FtZSBjb21wb25lbnQuIHRoZSBhY3R1YWwgcG9ydGFsbGluZyBsb2dpYyBpcyBmb3JrZWRcbiAgICAgIC8vIHdpdGhpbiB0aGUgY29tcG9uZW50IGJhc2VkIG9uIGBtZW51UG9zaXRpb25gXG4gICAgICByZXR1cm4gbWVudVBvcnRhbFRhcmdldCB8fCBtZW51UG9zaXRpb24gPT09ICdmaXhlZCcgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51UG9ydGFsLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgYXBwZW5kVG86IG1lbnVQb3J0YWxUYXJnZXQsXG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiB0aGlzLmNvbnRyb2xSZWYsXG4gICAgICAgIG1lbnVQbGFjZW1lbnQ6IG1lbnVQbGFjZW1lbnQsXG4gICAgICAgIG1lbnVQb3NpdGlvbjogbWVudVBvc2l0aW9uXG4gICAgICB9KSwgbWVudUVsZW1lbnQpIDogbWVudUVsZW1lbnQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckZvcm1GaWVsZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJGb3JtRmllbGQoKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcbiAgICAgIHZhciBfdGhpcyRwcm9wczEzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZGVsaW1pdGVyID0gX3RoaXMkcHJvcHMxMy5kZWxpbWl0ZXIsXG4gICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczEzLmlzRGlzYWJsZWQsXG4gICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczEzLmlzTXVsdGksXG4gICAgICAgIG5hbWUgPSBfdGhpcyRwcm9wczEzLm5hbWUsXG4gICAgICAgIHJlcXVpcmVkID0gX3RoaXMkcHJvcHMxMy5yZXF1aXJlZDtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHRoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgICBpZiAocmVxdWlyZWQgJiYgIXRoaXMuaGFzVmFsdWUoKSAmJiAhaXNEaXNhYmxlZCkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVxdWlyZWRJbnB1dCQxLCB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICBvbkZvY3VzOiB0aGlzLm9uVmFsdWVJbnB1dEZvY3VzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKCFuYW1lIHx8IGlzRGlzYWJsZWQpIHJldHVybjtcbiAgICAgIGlmIChpc011bHRpKSB7XG4gICAgICAgIGlmIChkZWxpbWl0ZXIpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBzZWxlY3RWYWx1ZS5tYXAoZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNS5nZXRPcHRpb25WYWx1ZShvcHQpO1xuICAgICAgICAgIH0pLmpvaW4oZGVsaW1pdGVyKTtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdHlwZTogXCJoaWRkZW5cIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBpbnB1dCA9IHNlbGVjdFZhbHVlLmxlbmd0aCA+IDAgPyBzZWxlY3RWYWx1ZS5tYXAoZnVuY3Rpb24gKG9wdCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwiaS1cIi5jb25jYXQoaSksXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIHR5cGU6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdGhpczUuZ2V0T3B0aW9uVmFsdWUob3B0KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB0eXBlOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgdmFsdWU6IFwiXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgaW5wdXQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX3ZhbHVlID0gc2VsZWN0VmFsdWVbMF0gPyB0aGlzLmdldE9wdGlvblZhbHVlKHNlbGVjdFZhbHVlWzBdKSA6ICcnO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiBcImhpZGRlblwiLFxuICAgICAgICAgIHZhbHVlOiBfdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckxpdmVSZWdpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTGl2ZVJlZ2lvbigpIHtcbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgX3RoaXMkc3RhdGU2ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgYXJpYVNlbGVjdGlvbiA9IF90aGlzJHN0YXRlNi5hcmlhU2VsZWN0aW9uLFxuICAgICAgICBmb2N1c2VkT3B0aW9uID0gX3RoaXMkc3RhdGU2LmZvY3VzZWRPcHRpb24sXG4gICAgICAgIGZvY3VzZWRWYWx1ZSA9IF90aGlzJHN0YXRlNi5mb2N1c2VkVmFsdWUsXG4gICAgICAgIGlzRm9jdXNlZCA9IF90aGlzJHN0YXRlNi5pc0ZvY3VzZWQsXG4gICAgICAgIHNlbGVjdFZhbHVlID0gX3RoaXMkc3RhdGU2LnNlbGVjdFZhbHVlO1xuICAgICAgdmFyIGZvY3VzYWJsZU9wdGlvbnMgPSB0aGlzLmdldEZvY3VzYWJsZU9wdGlvbnMoKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMaXZlUmVnaW9uJDEsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpZDogdGhpcy5nZXRFbGVtZW50SWQoJ2xpdmUtcmVnaW9uJyksXG4gICAgICAgIGFyaWFTZWxlY3Rpb246IGFyaWFTZWxlY3Rpb24sXG4gICAgICAgIGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb24sXG4gICAgICAgIGZvY3VzZWRWYWx1ZTogZm9jdXNlZFZhbHVlLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZCxcbiAgICAgICAgc2VsZWN0VmFsdWU6IHNlbGVjdFZhbHVlLFxuICAgICAgICBmb2N1c2FibGVPcHRpb25zOiBmb2N1c2FibGVPcHRpb25zLFxuICAgICAgICBpc0FwcGxlRGV2aWNlOiB0aGlzLmlzQXBwbGVEZXZpY2VcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDb21wb25lbnRzOCA9IHRoaXMuZ2V0Q29tcG9uZW50cygpLFxuICAgICAgICBDb250cm9sID0gX3RoaXMkZ2V0Q29tcG9uZW50czguQ29udHJvbCxcbiAgICAgICAgSW5kaWNhdG9yc0NvbnRhaW5lciA9IF90aGlzJGdldENvbXBvbmVudHM4LkluZGljYXRvcnNDb250YWluZXIsXG4gICAgICAgIFNlbGVjdENvbnRhaW5lciA9IF90aGlzJGdldENvbXBvbmVudHM4LlNlbGVjdENvbnRhaW5lcixcbiAgICAgICAgVmFsdWVDb250YWluZXIgPSBfdGhpcyRnZXRDb21wb25lbnRzOC5WYWx1ZUNvbnRhaW5lcjtcbiAgICAgIHZhciBfdGhpcyRwcm9wczE0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMxNC5jbGFzc05hbWUsXG4gICAgICAgIGlkID0gX3RoaXMkcHJvcHMxNC5pZCxcbiAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzMTQuaXNEaXNhYmxlZCxcbiAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzMTQubWVudUlzT3BlbjtcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHMgPSB0aGlzLmdldENvbW1vblByb3BzKCk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udGFpbmVyLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGlubmVyUHJvcHM6IHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgb25LZXlEb3duOiB0aGlzLm9uS2V5RG93blxuICAgICAgICB9LFxuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgICAgfSksIHRoaXMucmVuZGVyTGl2ZVJlZ2lvbigpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb250cm9sLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgaW5uZXJSZWY6IHRoaXMuZ2V0Q29udHJvbFJlZixcbiAgICAgICAgaW5uZXJQcm9wczoge1xuICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uQ29udHJvbE1vdXNlRG93bixcbiAgICAgICAgICBvblRvdWNoRW5kOiB0aGlzLm9uQ29udHJvbFRvdWNoRW5kXG4gICAgICAgIH0sXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkLFxuICAgICAgICBtZW51SXNPcGVuOiBtZW51SXNPcGVuXG4gICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVmFsdWVDb250YWluZXIsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkXG4gICAgICB9KSwgdGhpcy5yZW5kZXJQbGFjZWhvbGRlck9yVmFsdWUoKSwgdGhpcy5yZW5kZXJJbnB1dCgpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5kaWNhdG9yc0NvbnRhaW5lciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgICAgIH0pLCB0aGlzLnJlbmRlckNsZWFySW5kaWNhdG9yKCksIHRoaXMucmVuZGVyTG9hZGluZ0luZGljYXRvcigpLCB0aGlzLnJlbmRlckluZGljYXRvclNlcGFyYXRvcigpLCB0aGlzLnJlbmRlckRyb3Bkb3duSW5kaWNhdG9yKCkpKSwgdGhpcy5yZW5kZXJNZW51KCksIHRoaXMucmVuZGVyRm9ybUZpZWxkKCkpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgICB2YXIgcHJldlByb3BzID0gc3RhdGUucHJldlByb3BzLFxuICAgICAgICBjbGVhckZvY3VzVmFsdWVPblVwZGF0ZSA9IHN0YXRlLmNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlLFxuICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGUgPSBzdGF0ZS5pbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGUsXG4gICAgICAgIGFyaWFTZWxlY3Rpb24gPSBzdGF0ZS5hcmlhU2VsZWN0aW9uLFxuICAgICAgICBpc0ZvY3VzZWQgPSBzdGF0ZS5pc0ZvY3VzZWQsXG4gICAgICAgIHByZXZXYXNGb2N1c2VkID0gc3RhdGUucHJldldhc0ZvY3VzZWQsXG4gICAgICAgIGluc3RhbmNlUHJlZml4ID0gc3RhdGUuaW5zdGFuY2VQcmVmaXg7XG4gICAgICB2YXIgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMsXG4gICAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgICAgIG1lbnVJc09wZW4gPSBwcm9wcy5tZW51SXNPcGVuLFxuICAgICAgICBpbnB1dFZhbHVlID0gcHJvcHMuaW5wdXRWYWx1ZSxcbiAgICAgICAgaXNNdWx0aSA9IHByb3BzLmlzTXVsdGk7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBjbGVhblZhbHVlKHZhbHVlKTtcbiAgICAgIHZhciBuZXdNZW51T3B0aW9uc1N0YXRlID0ge307XG4gICAgICBpZiAocHJldlByb3BzICYmICh2YWx1ZSAhPT0gcHJldlByb3BzLnZhbHVlIHx8IG9wdGlvbnMgIT09IHByZXZQcm9wcy5vcHRpb25zIHx8IG1lbnVJc09wZW4gIT09IHByZXZQcm9wcy5tZW51SXNPcGVuIHx8IGlucHV0VmFsdWUgIT09IHByZXZQcm9wcy5pbnB1dFZhbHVlKSkge1xuICAgICAgICB2YXIgZm9jdXNhYmxlT3B0aW9ucyA9IG1lbnVJc09wZW4gPyBidWlsZEZvY3VzYWJsZU9wdGlvbnMocHJvcHMsIHNlbGVjdFZhbHVlKSA6IFtdO1xuICAgICAgICB2YXIgZm9jdXNhYmxlT3B0aW9uc1dpdGhJZHMgPSBtZW51SXNPcGVuID8gYnVpbGRGb2N1c2FibGVPcHRpb25zV2l0aElkcyhidWlsZENhdGVnb3JpemVkT3B0aW9ucyhwcm9wcywgc2VsZWN0VmFsdWUpLCBcIlwiLmNvbmNhdChpbnN0YW5jZVByZWZpeCwgXCItb3B0aW9uXCIpKSA6IFtdO1xuICAgICAgICB2YXIgZm9jdXNlZFZhbHVlID0gY2xlYXJGb2N1c1ZhbHVlT25VcGRhdGUgPyBnZXROZXh0Rm9jdXNlZFZhbHVlKHN0YXRlLCBzZWxlY3RWYWx1ZSkgOiBudWxsO1xuICAgICAgICB2YXIgZm9jdXNlZE9wdGlvbiA9IGdldE5leHRGb2N1c2VkT3B0aW9uKHN0YXRlLCBmb2N1c2FibGVPcHRpb25zKTtcbiAgICAgICAgdmFyIGZvY3VzZWRPcHRpb25JZCA9IGdldEZvY3VzZWRPcHRpb25JZChmb2N1c2FibGVPcHRpb25zV2l0aElkcywgZm9jdXNlZE9wdGlvbik7XG4gICAgICAgIG5ld01lbnVPcHRpb25zU3RhdGUgPSB7XG4gICAgICAgICAgc2VsZWN0VmFsdWU6IHNlbGVjdFZhbHVlLFxuICAgICAgICAgIGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb24sXG4gICAgICAgICAgZm9jdXNlZE9wdGlvbklkOiBmb2N1c2VkT3B0aW9uSWQsXG4gICAgICAgICAgZm9jdXNhYmxlT3B0aW9uc1dpdGhJZHM6IGZvY3VzYWJsZU9wdGlvbnNXaXRoSWRzLFxuICAgICAgICAgIGZvY3VzZWRWYWx1ZTogZm9jdXNlZFZhbHVlLFxuICAgICAgICAgIGNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gc29tZSB1cGRhdGVzIHNob3VsZCB0b2dnbGUgdGhlIHN0YXRlIG9mIHRoZSBpbnB1dCB2aXNpYmlsaXR5XG4gICAgICB2YXIgbmV3SW5wdXRJc0hpZGRlblN0YXRlID0gaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlICE9IG51bGwgJiYgcHJvcHMgIT09IHByZXZQcm9wcyA/IHtcbiAgICAgICAgaW5wdXRJc0hpZGRlbjogaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlLFxuICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6IHVuZGVmaW5lZFxuICAgICAgfSA6IHt9O1xuICAgICAgdmFyIG5ld0FyaWFTZWxlY3Rpb24gPSBhcmlhU2VsZWN0aW9uO1xuICAgICAgdmFyIGhhc0tlcHRGb2N1cyA9IGlzRm9jdXNlZCAmJiBwcmV2V2FzRm9jdXNlZDtcbiAgICAgIGlmIChpc0ZvY3VzZWQgJiYgIWhhc0tlcHRGb2N1cykge1xuICAgICAgICAvLyBJZiBgdmFsdWVgIG9yIGBkZWZhdWx0VmFsdWVgIHByb3BzIGFyZSBub3QgZW1wdHkgdGhlbiBhbm5vdW5jZSB0aGVtXG4gICAgICAgIC8vIHdoZW4gdGhlIFNlbGVjdCBpcyBpbml0aWFsbHkgZm9jdXNlZFxuICAgICAgICBuZXdBcmlhU2VsZWN0aW9uID0ge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVRlcm5hcnkoaXNNdWx0aSwgc2VsZWN0VmFsdWUsIHNlbGVjdFZhbHVlWzBdIHx8IG51bGwpLFxuICAgICAgICAgIG9wdGlvbnM6IHNlbGVjdFZhbHVlLFxuICAgICAgICAgIGFjdGlvbjogJ2luaXRpYWwtaW5wdXQtZm9jdXMnXG4gICAgICAgIH07XG4gICAgICAgIGhhc0tlcHRGb2N1cyA9ICFwcmV2V2FzRm9jdXNlZDtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlICdpbml0aWFsLWlucHV0LWZvY3VzJyBhY3Rpb24gaGFzIGJlZW4gc2V0IGFscmVhZHlcbiAgICAgIC8vIHRoZW4gcmVzZXQgdGhlIGFyaWFTZWxlY3Rpb24gdG8gbnVsbFxuICAgICAgaWYgKChhcmlhU2VsZWN0aW9uID09PSBudWxsIHx8IGFyaWFTZWxlY3Rpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFyaWFTZWxlY3Rpb24uYWN0aW9uKSA9PT0gJ2luaXRpYWwtaW5wdXQtZm9jdXMnKSB7XG4gICAgICAgIG5ld0FyaWFTZWxlY3Rpb24gPSBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBuZXdNZW51T3B0aW9uc1N0YXRlKSwgbmV3SW5wdXRJc0hpZGRlblN0YXRlKSwge30sIHtcbiAgICAgICAgcHJldlByb3BzOiBwcm9wcyxcbiAgICAgICAgYXJpYVNlbGVjdGlvbjogbmV3QXJpYVNlbGVjdGlvbixcbiAgICAgICAgcHJldldhc0ZvY3VzZWQ6IGhhc0tlcHRGb2N1c1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTZWxlY3Q7XG59KENvbXBvbmVudCk7XG5TZWxlY3QuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgeyBTZWxlY3QgYXMgUywgZGVmYXVsdFByb3BzIGFzIGEsIGdldE9wdGlvbkxhYmVsJDEgYXMgYiwgY3JlYXRlRmlsdGVyIGFzIGMsIGRlZmF1bHRUaGVtZSBhcyBkLCBnZXRPcHRpb25WYWx1ZSQxIGFzIGcsIG1lcmdlU3R5bGVzIGFzIG0gfTtcbiIsImltcG9ydCB7IHUgYXMgdXNlU3RhdGVNYW5hZ2VyIH0gZnJvbSAnLi91c2VTdGF0ZU1hbmFnZXItN2UxZTg0ODkuZXNtLmpzJztcbmV4cG9ydCB7IHUgYXMgdXNlU3RhdGVNYW5hZ2VyIH0gZnJvbSAnLi91c2VTdGF0ZU1hbmFnZXItN2UxZTg0ODkuZXNtLmpzJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZvcndhcmRSZWYsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTIGFzIFNlbGVjdCB9IGZyb20gJy4vU2VsZWN0LWFhYjAyN2YzLmVzbS5qcyc7XG5leHBvcnQgeyBjIGFzIGNyZWF0ZUZpbHRlciwgZCBhcyBkZWZhdWx0VGhlbWUsIG0gYXMgbWVyZ2VTdHlsZXMgfSBmcm9tICcuL1NlbGVjdC1hYWIwMjdmMy5lc20uanMnO1xuaW1wb3J0IHsgQ2FjaGVQcm92aWRlciB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5leHBvcnQgeyBjIGFzIGNvbXBvbmVudHMgfSBmcm9tICcuL2luZGV4LTY0MWVlNWI4LmVzbS5qcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheSc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZVN1cGVyJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheSc7XG5pbXBvcnQgJ21lbW9pemUtb25lJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0ICdyZWFjdC1kb20nO1xuaW1wb3J0ICdAZmxvYXRpbmctdWkvZG9tJztcbmltcG9ydCAndXNlLWlzb21vcnBoaWMtbGF5b3V0LWVmZmVjdCc7XG5cbnZhciBTdGF0ZU1hbmFnZWRTZWxlY3QgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgYmFzZVNlbGVjdFByb3BzID0gdXNlU3RhdGVNYW5hZ2VyKHByb3BzKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmXG4gIH0sIGJhc2VTZWxlY3RQcm9wcykpO1xufSk7XG52YXIgU3RhdGVNYW5hZ2VkU2VsZWN0JDEgPSBTdGF0ZU1hbmFnZWRTZWxlY3Q7XG5cbnZhciBOb25jZVByb3ZpZGVyID0gKGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBub25jZSA9IF9yZWYubm9uY2UsXG4gICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgIGNhY2hlS2V5ID0gX3JlZi5jYWNoZUtleTtcbiAgdmFyIGVtb3Rpb25DYWNoZSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjcmVhdGVDYWNoZSh7XG4gICAgICBrZXk6IGNhY2hlS2V5LFxuICAgICAgbm9uY2U6IG5vbmNlXG4gICAgfSk7XG4gIH0sIFtjYWNoZUtleSwgbm9uY2VdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENhY2hlUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogZW1vdGlvbkNhY2hlXG4gIH0sIGNoaWxkcmVuKTtcbn0pO1xuXG5leHBvcnQgeyBOb25jZVByb3ZpZGVyLCBTdGF0ZU1hbmFnZWRTZWxlY3QkMSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2VsZWN0LCB7IE11bHRpVmFsdWUgfSBmcm9tICdyZWFjdC1zZWxlY3QnXHJcbmltcG9ydCB7IEFwaUNsaWVudCwgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbmpzJ1xyXG5cclxuY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpXHJcblxyXG5pbnRlcmZhY2UgTW9kdWxlT3B0aW9uIHtcclxuICB2YWx1ZTogc3RyaW5nXHJcbiAgbGFiZWw6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBGaWx0ZXJlZE1vZHVsZXM6IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eVByb3BzPiA9ICh7IHByb3BlcnR5LCBvbkNoYW5nZSwgcmVjb3JkIH0pID0+IHtcclxuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZTxNb2R1bGVPcHRpb25bXT4oW10pXHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZTxNb2R1bGVPcHRpb25bXT4oW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaE1vZHVsZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoeyBwZXJQYWdlOiAnMTAwJyB9KVxyXG5cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLnJlc291cmNlQWN0aW9uKHtcclxuICAgICAgICByZXNvdXJjZUlkOiAnbW9kdWxlJyxcclxuICAgICAgICBhY3Rpb25OYW1lOiAnbGlzdCcsXHJcbiAgICAgICAgcXVlcnk6IHBhcmFtcy50b1N0cmluZygpLFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgY29uc3QgcmVjb3JkcyA9IHJlcy5kYXRhLnJlY29yZHMgfHwgW11cclxuICAgICAgY29uc3QgZm9ybWF0dGVkT3B0aW9ucyA9IHJlY29yZHMubWFwKChtb2Q6IGFueSk6IE1vZHVsZU9wdGlvbiA9PiAoe1xyXG4gICAgICAgIHZhbHVlOiBtb2QuaWQsXHJcbiAgICAgICAgbGFiZWw6IG1vZC5wYXJhbXMudGl0bGUgfHwgbW9kLmlkLFxyXG4gICAgICB9KSlcclxuXHJcbiAgICAgIHNldE9wdGlvbnMoZm9ybWF0dGVkT3B0aW9ucylcclxuXHJcbiAgICAgIC8vIOKchSBPbmx5IHNldCBzZWxlY3RlZCBpZiBpdCdzIHN0aWxsIGVtcHR5IChmaXJzdCBsb2FkKVxyXG4gICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmdNb2R1bGVJZHMgPSAocmVjb3JkPy5wYXJhbXM/Lltwcm9wZXJ0eS5uYW1lXSB8fCBbXSkgYXMgc3RyaW5nW11cclxuICAgICAgICBjb25zdCBwcmVTZWxlY3RlZCA9IGZvcm1hdHRlZE9wdGlvbnMuZmlsdGVyKG9wdCA9PiBleGlzdGluZ01vZHVsZUlkcy5pbmNsdWRlcyhvcHQudmFsdWUpKVxyXG4gICAgICAgIHNldFNlbGVjdGVkKHByZVNlbGVjdGVkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hNb2R1bGVzKClcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHNlbGVjdGVkT3B0aW9uczogTXVsdGlWYWx1ZTxNb2R1bGVPcHRpb24+KSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlcyA9IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0ID0+IG9wdC52YWx1ZSlcclxuICAgIHNldFNlbGVjdGVkKHNlbGVjdGVkT3B0aW9ucyBhcyBNb2R1bGVPcHRpb25bXSlcclxuICAgIG9uQ2hhbmdlKHByb3BlcnR5Lm5hbWUsIHNlbGVjdGVkVmFsdWVzKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBtYXJnaW5Cb3R0b206IDUgfX0+e3Byb3BlcnR5LmxhYmVsIHx8ICdNb2R1bGVzJ308L2xhYmVsPlxyXG4gICAgICA8U2VsZWN0XHJcbiAgICAgICAgaXNNdWx0aVxyXG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggJiBzZWxlY3QgbW9kdWxlcy4uLlwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcmVkTW9kdWxlc1xyXG4iLCJBZG1pbkpTLlVzZXJDb21wb25lbnRzID0ge31cbmltcG9ydCBVcGxvYWRJbWFnZSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9VcGxvYWRJbWFnZSdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVXBsb2FkSW1hZ2UgPSBVcGxvYWRJbWFnZVxuaW1wb3J0IFVwbG9hZFZpZGVvIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1VwbG9hZFZpZGVvJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5VcGxvYWRWaWRlbyA9IFVwbG9hZFZpZGVvXG5pbXBvcnQgRmlsdGVyZWRNb2R1bGVzIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0ZpbHRlcmVkTW9kdWxlcydcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuRmlsdGVyZWRNb2R1bGVzID0gRmlsdGVyZWRNb2R1bGVzIl0sIm5hbWVzIjpbIlVwbG9hZEltYWdlIiwib25DaGFuZ2UiLCJwcm9wZXJ0eSIsInJlY29yZCIsImN1c3RvbUVycm9yTWVzc2FnZSIsInByZXZpZXciLCJzZXRQcmV2aWV3IiwidXNlU3RhdGUiLCJwYXJhbXMiLCJuYW1lIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJpbnB1dFJlZiIsIlJlYWN0IiwidXNlUmVmIiwiaGFuZGxlRmlsZUlucHV0Q2xpY2siLCJjdXJyZW50IiwiY2xpY2siLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JzIiwiaW1hZ2UiLCJtZXNzYWdlIiwiY3JlYXRlRWxlbWVudCIsImh0bWxGb3IiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsIm9uQ2xpY2siLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyQ29sb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJjdXJzb3IiLCJzcmMiLCJhbHQiLCJtYXJnaW5Ub3AiLCJtYXhXaWR0aCIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwidHlwZSIsImlkIiwicmVmIiwiYWNjZXB0IiwiY29sb3IiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsIlVwbG9hZFZpZGVvIiwiaGFuZGxlQ2hhbmdlRmlsZSIsImhhbmRsZUNoYW5nZUxpbmsiLCJhbHRVcmwiLCJ2YWx1ZSIsImxlc3NvbnZpZGVvIiwic3RhcnRzV2l0aCIsInJldm9rZU9iamVjdFVSTCIsImtleSIsImNvbnRyb2xzIiwid2lkdGgiLCJtYXJnaW4iLCJnYXAiLCJib3JkZXIiLCJsZXNzb25WaWRlbyIsImRlZmluZVByb3BlcnR5IiwiYXJyYXlMaWtlVG9BcnJheSIsImFycmF5V2l0aEhvbGVzIiwiaXRlcmFibGVUb0FycmF5TGltaXQiLCJ1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm5vbkl0ZXJhYmxlUmVzdCIsIm9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJfZXhjbHVkZWQiLCJ1c2VDYWxsYmFjayIsIl9vYmplY3RTcHJlYWQiLCJzZXRQcm90b3R5cGVPZiIsImFzc2VydFRoaXNJbml0aWFsaXplZCIsImlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsImdldFByb3RvdHlwZU9mIiwicG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsImFycmF5V2l0aG91dEhvbGVzIiwiaXRlcmFibGVUb0FycmF5Iiwibm9uSXRlcmFibGVTcHJlYWQiLCJyZWFjdElzTW9kdWxlIiwicmVxdWlyZSQkMCIsInVuaXRsZXNzIiwiaGFzaFN0cmluZyIsImZvcndhcmRSZWYiLCJ1c2VDb250ZXh0IiwiRW1vdGlvbiIsImNzcyIsIm1pbiIsIk1hdGgiLCJtYXgiLCJyb3VuZCIsImZsb29yIiwiY3JlYXRlQ29vcmRzIiwidiIsIngiLCJ5IiwicmVjdFRvQ2xpZW50UmVjdCIsInJlY3QiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJoYXNXaW5kb3ciLCJ3aW5kb3ciLCJnZXROb2RlTmFtZSIsIm5vZGUiLCJpc05vZGUiLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwiZ2V0V2luZG93IiwiX25vZGUkb3duZXJEb2N1bWVudCIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsImdldERvY3VtZW50RWxlbWVudCIsIl9yZWYiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsIk5vZGUiLCJpc0VsZW1lbnQiLCJFbGVtZW50IiwiaXNIVE1MRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiaXNTaGFkb3dSb290IiwiU2hhZG93Um9vdCIsImlzT3ZlcmZsb3dFbGVtZW50IiwiZWxlbWVudCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInRlc3QiLCJpbmNsdWRlcyIsImlzV2ViS2l0IiwiQ1NTIiwic3VwcG9ydHMiLCJpc0xhc3RUcmF2ZXJzYWJsZU5vZGUiLCJnZXRQYXJlbnROb2RlIiwicmVzdWx0IiwiYXNzaWduZWRTbG90IiwicGFyZW50Tm9kZSIsImhvc3QiLCJnZXROZWFyZXN0T3ZlcmZsb3dBbmNlc3RvciIsImJvZHkiLCJnZXRPdmVyZmxvd0FuY2VzdG9ycyIsImxpc3QiLCJ0cmF2ZXJzZUlmcmFtZXMiLCJfbm9kZSRvd25lckRvY3VtZW50MiIsInNjcm9sbGFibGVBbmNlc3RvciIsImlzQm9keSIsIndpbiIsImZyYW1lRWxlbWVudCIsImdldEZyYW1lRWxlbWVudCIsImNvbmNhdCIsInZpc3VhbFZpZXdwb3J0IiwicGFyZW50IiwiT2JqZWN0IiwiZ2V0Q3NzRGltZW5zaW9ucyIsInBhcnNlRmxvYXQiLCJoYXNPZmZzZXQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInNob3VsZEZhbGxiYWNrIiwiJCIsInVud3JhcEVsZW1lbnQiLCJjb250ZXh0RWxlbWVudCIsImdldFNjYWxlIiwiZG9tRWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIk51bWJlciIsImlzRmluaXRlIiwibm9PZmZzZXRzIiwiZ2V0VmlzdWFsT2Zmc2V0cyIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJzaG91bGRBZGRWaXN1YWxPZmZzZXRzIiwiaXNGaXhlZCIsImZsb2F0aW5nT2Zmc2V0UGFyZW50IiwiaW5jbHVkZVNjYWxlIiwiaXNGaXhlZFN0cmF0ZWd5Iiwib2Zmc2V0UGFyZW50IiwiY2xpZW50UmVjdCIsInNjYWxlIiwidmlzdWFsT2Zmc2V0cyIsIm9mZnNldFdpbiIsImN1cnJlbnRXaW4iLCJjdXJyZW50SUZyYW1lIiwiaWZyYW1lU2NhbGUiLCJpZnJhbWVSZWN0IiwiY2xpZW50TGVmdCIsInBhZGRpbmdMZWZ0IiwiY2xpZW50VG9wIiwicGFkZGluZ1RvcCIsInJlY3RzQXJlRXF1YWwiLCJhIiwiYiIsIm9ic2VydmVNb3ZlIiwib25Nb3ZlIiwiaW8iLCJ0aW1lb3V0SWQiLCJyb290IiwiY2xlYW51cCIsIl9pbyIsImNsZWFyVGltZW91dCIsImRpc2Nvbm5lY3QiLCJyZWZyZXNoIiwic2tpcCIsInRocmVzaG9sZCIsImVsZW1lbnRSZWN0Rm9yUm9vdE1hcmdpbiIsImluc2V0VG9wIiwiaW5zZXRSaWdodCIsImNsaWVudFdpZHRoIiwiaW5zZXRCb3R0b20iLCJjbGllbnRIZWlnaHQiLCJpbnNldExlZnQiLCJyb290TWFyZ2luIiwib3B0aW9ucyIsImlzRmlyc3RVcGRhdGUiLCJoYW5kbGVPYnNlcnZlIiwiZW50cmllcyIsInJhdGlvIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJzZXRUaW1lb3V0IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlIiwib2JzZXJ2ZSIsImF1dG9VcGRhdGUiLCJyZWZlcmVuY2UiLCJmbG9hdGluZyIsInVwZGF0ZSIsImFuY2VzdG9yU2Nyb2xsIiwiYW5jZXN0b3JSZXNpemUiLCJlbGVtZW50UmVzaXplIiwiUmVzaXplT2JzZXJ2ZXIiLCJsYXlvdXRTaGlmdCIsImFuaW1hdGlvbkZyYW1lIiwicmVmZXJlbmNlRWwiLCJhbmNlc3RvcnMiLCJmb3JFYWNoIiwiYW5jZXN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsImNsZWFudXBJbyIsInJlb2JzZXJ2ZUZyYW1lIiwicmVzaXplT2JzZXJ2ZXIiLCJmaXJzdEVudHJ5IiwidW5vYnNlcnZlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfcmVzaXplT2JzZXJ2ZXIiLCJmcmFtZUlkIiwicHJldlJlZlJlY3QiLCJmcmFtZUxvb3AiLCJuZXh0UmVmUmVjdCIsIl9yZXNpemVPYnNlcnZlcjIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXNlTGF5b3V0RWZmZWN0IiwiX29iamVjdFNwcmVhZDIiLCJjcmVhdGVDb250ZXh0IiwidXNlTWVtbyIsImNyZWF0ZVBvcnRhbCIsIl9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fIiwiX3JlZjIiLCJGcmFnbWVudCIsIm1lbW9pemVPbmUiLCJjc3MkMiIsIkNvbXBvbmVudCIsImFwaSIsIkFwaUNsaWVudCIsIkZpbHRlcmVkTW9kdWxlcyIsInNldE9wdGlvbnMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZmV0Y2hNb2R1bGVzIiwiVVJMU2VhcmNoUGFyYW1zIiwicGVyUGFnZSIsInJlcyIsInJlc291cmNlQWN0aW9uIiwicmVzb3VyY2VJZCIsImFjdGlvbk5hbWUiLCJxdWVyeSIsInRvU3RyaW5nIiwicmVjb3JkcyIsImRhdGEiLCJmb3JtYXR0ZWRPcHRpb25zIiwibWFwIiwibW9kIiwibGFiZWwiLCJ0aXRsZSIsImxlbmd0aCIsImV4aXN0aW5nTW9kdWxlSWRzIiwicHJlU2VsZWN0ZWQiLCJmaWx0ZXIiLCJvcHQiLCJzZWxlY3RlZE9wdGlvbnMiLCJzZWxlY3RlZFZhbHVlcyIsIlNlbGVjdCIsImlzTXVsdGkiLCJwbGFjZWhvbGRlciIsIkFkbWluSlMiLCJVc2VyQ29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUU7RUFDdko7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNPLFNBQVMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7RUFDbkMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUs7RUFDM0Y7O0VBRUE7RUFDQTtFQUNBO0VBQ08sU0FBUyxJQUFJLElBQUk7RUFDeEIsQ0FBQyxPQUFPO0VBQ1I7O0VBRUE7RUFDQTtFQUNBO0VBQ08sU0FBUyxJQUFJLElBQUk7RUFDeEIsQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsUUFBUSxDQUFDLEdBQUc7O0VBRTdELENBQUMsSUFBSSxNQUFNLEVBQUUsRUFBRSxTQUFTLEtBQUssRUFBRTtFQUMvQixFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSTs7RUFFbEIsQ0FBQyxPQUFPO0VBQ1I7O0VBRUE7RUFDQTtFQUNBO0VBQ08sU0FBUyxJQUFJLElBQUk7RUFDeEIsQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQUc7O0VBRWxFLENBQUMsSUFBSSxNQUFNLEVBQUUsRUFBRSxTQUFTLEtBQUssRUFBRTtFQUMvQixFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSTs7RUFFbEIsQ0FBQyxPQUFPO0VBQ1I7O0VBRUE7RUFDQTtFQUNBO0VBQ08s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QUksUUFBUSxJQUFJLEVBQUU7RUFDbEIsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtFQUNyQixNQUFNLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFLFlBQVk7RUFDNUUsTUFBTTtFQUNOLEtBQUs7RUFDTCxNQUFNLFVBQVUsSUFBSTtFQUNwQjtFQUNBLElBQUk7RUFDSjtFQUNBLEdBQUcsS0FBSyxHQUFHLEdBQUcsUUFBUTtFQUN0QixJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRztFQUMzQztFQUNBLEdBQUcsS0FBSyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7RUFDdkMsSUFBSSxRQUFRLFNBQVM7RUFDckI7RUFDQSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsUUFBUSxHQUFHO0VBQ2xDO0VBQ0EsS0FBSyxLQUFLLEVBQUUsR0FBRyxNQUFNLEVBQUUsSUFBSSxTQUFTLElBQUksRUFBRSxFQUFFLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFO0VBQ3RGLE1BQU0sSUFBSSxRQUFRLEdBQUcsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxNQUFNLENBQUM7RUFDdkQsT0FBTyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsR0FBRyxXQUFXLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLFlBQVk7RUFDL0ssTUFBTTtFQUNOO0VBQ0EsS0FBSyxLQUFLLEVBQUUsRUFBRSxVQUFVLElBQUk7RUFDNUI7RUFDQSxLQUFLO0VBQ0wsTUFBTSxNQUFNLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQUUsUUFBUSxHQUFHLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxRQUFROztFQUUzSSxNQUFNLElBQUksU0FBUyxLQUFLLEdBQUc7RUFDM0IsT0FBTyxJQUFJLE1BQU0sS0FBSyxDQUFDO0VBQ3ZCLFFBQVEsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUTtFQUMvRjtFQUNBLFFBQVEsUUFBUSxNQUFNLEtBQUssRUFBRSxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNO0VBQzdFO0VBQ0EsU0FBUyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUc7RUFDL0MsVUFBVSxLQUFLLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxHQUFHLEtBQUssR0FBRyxRQUFRO0VBQzNOLFVBQVU7RUFDVixTQUFTO0VBQ1QsVUFBVSxLQUFLLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUTtFQUNoRztFQUNBOztFQUVBLElBQUksS0FBSyxHQUFHLE1BQU0sR0FBRyxRQUFRLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxTQUFTLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxVQUFVLEdBQUcsRUFBRSxFQUFFLE1BQU0sR0FBRztFQUM5RixJQUFJO0VBQ0o7RUFDQSxHQUFHLEtBQUssRUFBRTtFQUNWLElBQUksTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxHQUFHO0VBQ2hELEdBQUc7RUFDSCxJQUFJLElBQUksUUFBUSxHQUFHLENBQUM7RUFDcEIsS0FBSyxJQUFJLFNBQVMsSUFBSSxHQUFHO0VBQ3pCLE1BQU0sRUFBRTtFQUNSLFVBQVUsSUFBSSxTQUFTLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxHQUFHO0VBQ2xFLE1BQU07O0VBRU4sSUFBSSxRQUFRLFVBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxHQUFHLFFBQVE7RUFDL0Q7RUFDQSxLQUFLLEtBQUssRUFBRTtFQUNaLE1BQU0sU0FBUyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQVUsSUFBSSxJQUFJLEVBQUUsRUFBRTtFQUMxRCxNQUFNO0VBQ047RUFDQSxLQUFLLEtBQUssRUFBRTtFQUNaLE1BQU0sTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFNBQVMsRUFBRSxTQUFTLEdBQUc7RUFDMUUsTUFBTTtFQUNOO0VBQ0EsS0FBSyxLQUFLLEVBQUU7RUFDWjtFQUNBLE1BQU0sSUFBSSxJQUFJLEVBQUUsS0FBSyxFQUFFO0VBQ3ZCLE9BQU8sVUFBVSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7O0VBRW5DLE1BQU0sTUFBTSxHQUFHLElBQUksRUFBRSxFQUFFLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxTQUFTO0VBQ3BHLE1BQU07RUFDTjtFQUNBLEtBQUssS0FBSyxFQUFFO0VBQ1osTUFBTSxJQUFJLFFBQVEsS0FBSyxFQUFFLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDcEQsT0FBTyxRQUFRLEdBQUc7RUFDbEI7RUFDQTs7RUFFQSxDQUFDLE9BQU87RUFDUjs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ08sU0FBUyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtFQUMzRyxDQUFDLElBQUksSUFBSSxHQUFHLE1BQU0sR0FBRztFQUNyQixDQUFDLElBQUksSUFBSSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRTtFQUN0QyxDQUFDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJOztFQUV2QixDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUUsQ0FBQztFQUM3QyxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDO0VBQ2xHLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDeEUsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRzs7RUFFakIsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEtBQUssQ0FBQyxHQUFHLE9BQU8sR0FBRyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNO0VBQ3hGOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNPLFNBQVMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0VBQzlDLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7RUFDaEY7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDTyxTQUFTLFdBQVcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7RUFDMUQsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU07RUFDOUc7O0VDM0xBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDTyxTQUFTLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO0VBQy9DLENBQUMsSUFBSSxNQUFNLEdBQUc7RUFDZCxDQUFDLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFROztFQUU3QixDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ2hDLEVBQUUsTUFBTSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSTs7RUFFNUQsQ0FBQyxPQUFPO0VBQ1I7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDTyxTQUFTLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7RUFDL0QsQ0FBQyxRQUFRLE9BQU8sQ0FBQyxJQUFJO0VBQ3JCLEVBQUUsS0FBSyxLQUFLLEVBQUUsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtFQUMzQyxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUMsS0FBSyxXQUFXLEVBQUUsT0FBTyxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDO0VBQ25GLEVBQUUsS0FBSyxPQUFPLEVBQUUsT0FBTztFQUN2QixFQUFFLEtBQUssU0FBUyxFQUFFLE9BQU8sT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBRztFQUN4RyxFQUFFLEtBQUssT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRztFQUN0RDs7RUFFQSxDQUFDLE9BQU8sTUFBTSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsUUFBUSxHQUFHLEdBQUcsR0FBRztFQUMzSDs7RUM3QkE7RUFDQTtFQUNBO0VBQ0E7RUFDTyxTQUFTLFVBQVUsRUFBRSxVQUFVLEVBQUU7RUFDeEMsQ0FBQyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVTs7RUFFL0IsQ0FBQyxPQUFPLFVBQVUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO0VBQ3RELEVBQUUsSUFBSSxNQUFNLEdBQUc7O0VBRWYsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRTtFQUNqQyxHQUFHLE1BQU0sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUk7O0VBRWxFLEVBQUUsT0FBTztFQUNUO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDTyxTQUFTLFNBQVMsRUFBRSxRQUFRLEVBQUU7RUFDckMsQ0FBQyxPQUFPLFVBQVUsT0FBTyxFQUFFO0VBQzNCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO0VBQ25CLEdBQUcsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU07RUFDL0IsSUFBSSxRQUFRLENBQUMsT0FBTztFQUNwQjtFQUNBOztFQ2pDQSxTQUFTLE9BQU8sQ0FBQyxFQUFFLEVBQUU7RUFDckIsRUFBRSxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztFQUNqQyxFQUFFLE9BQU8sVUFBVSxHQUFHLEVBQUU7RUFDeEIsSUFBSSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7RUFDdEQsSUFBSSxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUM7RUFDckIsR0FBRztFQUNIOztFQ0RBLElBQUksMkJBQTJCLEdBQUcsU0FBUywyQkFBMkIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtFQUM3RixFQUFFLElBQUksUUFBUSxHQUFHLENBQUM7RUFDbEIsRUFBRSxJQUFJLFNBQVMsR0FBRyxDQUFDOztFQUVuQixFQUFFLE9BQU8sSUFBSSxFQUFFO0VBQ2YsSUFBSSxRQUFRLEdBQUcsU0FBUztFQUN4QixJQUFJLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQzs7RUFFdkIsSUFBSSxJQUFJLFFBQVEsS0FBSyxFQUFFLElBQUksU0FBUyxLQUFLLEVBQUUsRUFBRTtFQUM3QyxNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQ3ZCOztFQUVBLElBQUksSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUU7RUFDMUIsTUFBTTtFQUNOOztFQUVBLElBQUksSUFBSSxFQUFFO0VBQ1Y7O0VBRUEsRUFBRSxPQUFPLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO0VBQy9CLENBQUM7O0VBRUQsSUFBSSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTtFQUMvQztFQUNBLEVBQUUsSUFBSSxLQUFLLEdBQUcsRUFBRTtFQUNoQixFQUFFLElBQUksU0FBUyxHQUFHLEVBQUU7O0VBRXBCLEVBQUUsR0FBRztFQUNMLElBQUksUUFBUSxLQUFLLENBQUMsU0FBUyxDQUFDO0VBQzVCLE1BQU0sS0FBSyxDQUFDO0VBQ1o7RUFDQSxRQUFRLElBQUksU0FBUyxLQUFLLEVBQUUsSUFBSSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7RUFDL0M7RUFDQTtFQUNBO0VBQ0E7RUFDQSxVQUFVLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQzNCOztFQUVBLFFBQVEsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLDJCQUEyQixDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQztFQUNqRixRQUFROztFQUVSLE1BQU0sS0FBSyxDQUFDO0VBQ1osUUFBUSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQztFQUMzQyxRQUFROztFQUVSLE1BQU0sS0FBSyxDQUFDO0VBQ1o7RUFDQSxRQUFRLElBQUksU0FBUyxLQUFLLEVBQUUsRUFBRTtFQUM5QjtFQUNBLFVBQVUsTUFBTSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEtBQUssR0FBRyxFQUFFO0VBQ3RELFVBQVUsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNO0VBQzlDLFVBQVU7RUFDVjs7RUFFQTs7RUFFQSxNQUFNO0VBQ04sUUFBUSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztFQUN4QztFQUNBLEdBQUcsUUFBUSxTQUFTLEdBQUcsSUFBSSxFQUFFOztFQUU3QixFQUFFLE9BQU8sTUFBTTtFQUNmLENBQUM7O0VBRUQsSUFBSSxRQUFRLEdBQUcsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtFQUNoRCxFQUFFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7RUFDL0MsQ0FBQyxDQUFDOzs7RUFHRixJQUFJLGFBQWEsa0JBQWtCLElBQUksT0FBTyxFQUFFO0VBQ2hELElBQUksTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLE9BQU8sRUFBRTtFQUN0QyxFQUFFLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtFQUNoRDtFQUNBLEVBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7RUFDdEIsSUFBSTtFQUNKOztFQUVBLEVBQUUsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUs7RUFDM0IsRUFBRSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTTtFQUM3QixFQUFFLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJOztFQUV2RixFQUFFLE9BQU8sTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7RUFDakMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU07RUFDMUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0VBQ2pCLEdBQUc7OztFQUdILEVBQUUsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSztFQUM1RDtFQUNBLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0VBQ2pDLElBQUk7RUFDSixHQUFHO0VBQ0g7OztFQUdBLEVBQUUsSUFBSSxjQUFjLEVBQUU7RUFDdEIsSUFBSTtFQUNKOztFQUVBLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0VBQ2xDLEVBQUUsSUFBSSxNQUFNLEdBQUcsRUFBRTtFQUNqQixFQUFFLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO0VBQ3JDLEVBQUUsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUs7O0VBRWhDLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtFQUNoRCxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO0VBQ3RELE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0VBQy9HO0VBQ0E7RUFDQSxDQUFDO0VBQ0QsSUFBSSxXQUFXLEdBQUcsU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFO0VBQ2hELEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtFQUMvQixJQUFJLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLOztFQUU3QixJQUFJO0VBQ0osSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUc7RUFDL0IsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtFQUNoQztFQUNBLE1BQU0sT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7RUFDNUIsTUFBTSxPQUFPLENBQUMsS0FBSyxHQUFHLEVBQUU7RUFDeEI7RUFDQTtFQUNBLENBQUM7O0VBRUQ7O0VBRUEsU0FBUyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtFQUMvQixFQUFFLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7RUFDN0I7RUFDQSxJQUFJLEtBQUssSUFBSTtFQUNiLE1BQU0sT0FBTyxNQUFNLEdBQUcsUUFBUSxHQUFHLEtBQUssR0FBRyxLQUFLO0VBQzlDOztFQUVBLElBQUksS0FBSyxJQUFJO0VBQ2IsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJO0VBQ2IsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJLENBQUM7O0VBRWQsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJO0VBQ2IsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJLENBQUM7O0VBRWQsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJO0VBQ2IsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJLENBQUM7O0VBRWQsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJO0VBQ2IsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJO0VBQ2IsTUFBTSxPQUFPLE1BQU0sR0FBRyxLQUFLLEdBQUcsS0FBSztFQUNuQzs7RUFFQSxJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJO0VBQ2IsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJO0VBQ2IsTUFBTSxPQUFPLE1BQU0sR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxFQUFFLEdBQUcsS0FBSyxHQUFHLEtBQUs7RUFDOUQ7O0VBRUEsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLE1BQU0sT0FBTyxNQUFNLEdBQUcsS0FBSyxHQUFHLEVBQUUsR0FBRyxLQUFLLEdBQUcsS0FBSztFQUNoRDs7RUFFQSxJQUFJLEtBQUssSUFBSTtFQUNiLE1BQU0sT0FBTyxNQUFNLEdBQUcsS0FBSyxHQUFHLEVBQUUsR0FBRyxPQUFPLEdBQUcsS0FBSyxHQUFHLEtBQUs7RUFDMUQ7O0VBRUEsSUFBSSxLQUFLLElBQUk7RUFDYixNQUFNLE9BQU8sTUFBTSxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sR0FBRyxVQUFVLEdBQUcsRUFBRSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEtBQUs7RUFDOUc7O0VBRUEsSUFBSSxLQUFLLElBQUk7RUFDYixNQUFNLE9BQU8sTUFBTSxHQUFHLEtBQUssR0FBRyxFQUFFLEdBQUcsWUFBWSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUs7RUFDM0Y7O0VBRUEsSUFBSSxLQUFLLElBQUk7RUFDYixNQUFNLE9BQU8sTUFBTSxHQUFHLEtBQUssR0FBRyxFQUFFLEdBQUcsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSwyQkFBMkIsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLO0VBQzdHOztFQUVBLElBQUksS0FBSyxJQUFJO0VBQ2IsTUFBTSxPQUFPLE1BQU0sR0FBRyxLQUFLLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxHQUFHLEtBQUs7RUFDL0U7O0VBRUEsSUFBSSxLQUFLLElBQUk7RUFDYixNQUFNLE9BQU8sTUFBTSxHQUFHLEtBQUssR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxLQUFLO0VBQ3BGOztFQUVBLElBQUksS0FBSyxJQUFJO0VBQ2IsTUFBTSxPQUFPLE1BQU0sR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLEdBQUcsTUFBTSxHQUFHLEtBQUssR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsS0FBSztFQUM3SDs7RUFFQSxJQUFJLEtBQUssSUFBSTtFQUNiLE1BQU0sT0FBTyxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEtBQUs7RUFDeEY7O0VBRUEsSUFBSSxLQUFLLElBQUk7RUFDYixNQUFNLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSztFQUM3SDs7RUFFQSxJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJO0VBQ2IsTUFBTSxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUM7RUFDeEU7O0VBRUEsSUFBSSxLQUFLLElBQUk7RUFDYixNQUFNLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxHQUFHLGFBQWEsR0FBRyxFQUFFLEdBQUcsY0FBYyxDQUFDLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxLQUFLLEdBQUcsS0FBSztFQUN6Sjs7RUFFQSxJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJO0VBQ2IsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLE1BQU0sT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxLQUFLO0VBQ3ZFOztFQUVBLElBQUksS0FBSyxJQUFJO0VBQ2IsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJO0VBQ2IsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJO0VBQ2IsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiLElBQUksS0FBSyxJQUFJO0VBQ2IsSUFBSSxLQUFLLElBQUk7RUFDYixJQUFJLEtBQUssSUFBSTtFQUNiO0VBQ0EsTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxRQUFRLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQztFQUMzRTtFQUNBLFFBQVEsS0FBSyxHQUFHO0VBQ2hCO0VBQ0EsVUFBVSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtFQUNoRDs7RUFFQSxRQUFRLEtBQUssR0FBRztFQUNoQixVQUFVLE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEdBQUcsTUFBTSxHQUFHLE9BQU8sR0FBRyxJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFLO0VBQ3ZKOztFQUVBLFFBQVEsS0FBSyxHQUFHO0VBQ2hCLFVBQVUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsS0FBSyxHQUFHLEtBQUs7RUFDekg7RUFDQSxNQUFNO0VBQ047O0VBRUEsSUFBSSxLQUFLLElBQUk7RUFDYjtFQUNBLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7RUFDN0M7O0VBRUEsSUFBSSxLQUFLLElBQUk7RUFDYixNQUFNLFFBQVEsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztFQUN0RjtFQUNBLFFBQVEsS0FBSyxHQUFHO0VBQ2hCLFVBQVUsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsS0FBSztFQUMxRDs7RUFFQSxRQUFRLEtBQUssR0FBRztFQUNoQixVQUFVLE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxJQUFJLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxPQUFPLEdBQUcsSUFBSSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUMsR0FBRyxLQUFLO0VBQ3hMOztFQUVBLE1BQU07RUFDTjs7RUFFQSxJQUFJLEtBQUssSUFBSTtFQUNiLE1BQU0sUUFBUSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUM7RUFDeEM7RUFDQSxRQUFRLEtBQUssR0FBRztFQUNoQixVQUFVLE9BQU8sTUFBTSxHQUFHLEtBQUssR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxJQUFJLENBQUMsR0FBRyxLQUFLO0VBQ3pGOztFQUVBLFFBQVEsS0FBSyxHQUFHO0VBQ2hCLFVBQVUsT0FBTyxNQUFNLEdBQUcsS0FBSyxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxHQUFHLEtBQUs7RUFDNUY7O0VBRUEsUUFBUSxLQUFLLEVBQUU7RUFDZixVQUFVLE9BQU8sTUFBTSxHQUFHLEtBQUssR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxJQUFJLENBQUMsR0FBRyxLQUFLO0VBQ3pGOztFQUVBLE1BQU0sT0FBTyxNQUFNLEdBQUcsS0FBSyxHQUFHLEVBQUUsR0FBRyxLQUFLLEdBQUcsS0FBSztFQUNoRDs7RUFFQSxFQUFFLE9BQU8sS0FBSztFQUNkOztFQUVBLElBQUksUUFBUSxHQUFHLFNBQVMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtFQUNyRSxFQUFFLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLE9BQU8sQ0FBQyxJQUFJO0VBQ3ZFLElBQUksS0FBSyxXQUFXO0VBQ3BCLE1BQU0sT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7RUFDL0QsTUFBTTs7RUFFTixJQUFJLEtBQUssU0FBUztFQUNsQixNQUFNLE9BQU8sU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtFQUN0QyxRQUFRLEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLE1BQU07RUFDdkQsT0FBTyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUM7O0VBRXBCLElBQUksS0FBSyxPQUFPO0VBQ2hCLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsVUFBVSxLQUFLLEVBQUU7RUFDekUsUUFBUSxRQUFRLEtBQUssQ0FBQyxLQUFLLEVBQUUsdUJBQXVCLENBQUM7RUFDckQ7RUFDQSxVQUFVLEtBQUssWUFBWTtFQUMzQixVQUFVLEtBQUssYUFBYTtFQUM1QixZQUFZLE9BQU8sU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtFQUM1QyxjQUFjLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO0VBQ3JFLGFBQWEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDO0VBQzFCOztFQUVBLFVBQVUsS0FBSyxlQUFlO0VBQzlCLFlBQVksT0FBTyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO0VBQzVDLGNBQWMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsR0FBRyxHQUFHLE1BQU0sR0FBRyxVQUFVLENBQUM7RUFDN0UsYUFBYSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtFQUM5QixjQUFjLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO0VBQ3BFLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7RUFDOUIsY0FBYyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLEdBQUcsVUFBVSxDQUFDO0VBQ25FLGFBQWEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDO0VBQzFCOztFQUVBLFFBQVEsT0FBTyxFQUFFO0VBQ2pCLE9BQU8sQ0FBQztFQUNSO0VBQ0EsQ0FBQzs7RUFFRCxJQUFJLG9CQUFvQixHQUFHLENBQUMsUUFBUSxDQUFDOztFQUVyQyxJQUFJLFdBQVcsR0FBRyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUU7RUFDaEQsRUFBRSxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRzs7RUFFdkIsRUFBRSxJQUFJLEdBQUcsS0FBSyxLQUFLLEVBQUU7RUFDckIsSUFBSSxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsbUNBQW1DLENBQUMsQ0FBQztFQUNuRjtFQUNBO0VBQ0E7O0VBRUEsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsSUFBSSxFQUFFO0VBQzVEO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLE1BQU0sSUFBSSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQzs7RUFFbEUsTUFBTSxJQUFJLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7RUFDcEQsUUFBUTtFQUNSOztFQUVBLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0VBQ3JDLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO0VBQ3JDLEtBQUssQ0FBQztFQUNOOztFQUVBLEVBQUUsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsSUFBSSxvQkFBb0I7O0VBRW5FLEVBQUUsSUFBSSxRQUFRLEdBQUcsRUFBRTtFQUNuQixFQUFFLElBQUksU0FBUztFQUNmLEVBQUUsSUFBSSxjQUFjLEdBQUcsRUFBRTs7RUFFekIsRUFBRTtFQUNGLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLElBQUk7RUFDbEQsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJO0VBQ2hDO0VBQ0EsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsd0JBQXdCLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxFQUFFLFVBQVUsSUFBSSxFQUFFO0VBQ3hGLE1BQU0sSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztFQUUvRCxNQUFNLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0VBQzlDLFFBQVEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUk7RUFDbEM7O0VBRUEsTUFBTSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztFQUMvQixLQUFLLENBQUM7RUFDTjs7RUFFQSxFQUFFLElBQUksT0FBTzs7RUFFYixFQUFFLElBQUksa0JBQWtCLEdBQUcsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDOztFQUVoRCxFQUFFO0VBQ0YsSUFBSSxJQUFJLFlBQVk7RUFDcEIsSUFBSSxJQUFJLGlCQUFpQixHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxVQUFVLElBQUksRUFBRTtFQUNsRSxNQUFNLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0VBQy9CLEtBQUssQ0FBQyxDQUFDO0VBQ1AsSUFBSSxJQUFJLFVBQVUsR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDOztFQUU1RixJQUFJLElBQUksTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLE1BQU0sRUFBRTtFQUN6QyxNQUFNLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxVQUFVLENBQUM7RUFDbkQsS0FBSzs7RUFFTCxJQUFJLE9BQU8sR0FBRyxTQUFTLE1BQU0sQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7RUFDeEUsTUFBTSxZQUFZLEdBQUcsS0FBSzs7RUFFMUIsTUFBTSxNQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQzs7RUFFckYsTUFBTSxJQUFJLFdBQVcsRUFBRTtFQUN2QixRQUFRLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUk7RUFDOUM7RUFDQSxLQUFLO0VBQ0w7O0VBRUEsRUFBRSxJQUFJLEtBQUssR0FBRztFQUNkLElBQUksR0FBRyxFQUFFLEdBQUc7RUFDWixJQUFJLEtBQUssRUFBRSxJQUFJLFVBQVUsQ0FBQztFQUMxQixNQUFNLEdBQUcsRUFBRSxHQUFHO0VBQ2QsTUFBTSxTQUFTLEVBQUUsU0FBUztFQUMxQixNQUFNLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztFQUMxQixNQUFNLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtFQUM1QixNQUFNLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTztFQUM5QixNQUFNLGNBQWMsRUFBRSxPQUFPLENBQUM7RUFDOUIsS0FBSyxDQUFDO0VBQ04sSUFBSSxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7RUFDeEIsSUFBSSxRQUFRLEVBQUUsUUFBUTtFQUN0QixJQUFJLFVBQVUsRUFBRSxFQUFFO0VBQ2xCLElBQUksTUFBTSxFQUFFO0VBQ1osR0FBRztFQUNILEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO0VBQ3JDLEVBQUUsT0FBTyxLQUFLO0VBQ2QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDdGEwQztFQUMzQyxFQUFFLENBQUMsV0FBVzs7RUFHZDtFQUNBO0VBQ0EsSUFBSSxTQUFTLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHO0VBQzFELElBQUksa0JBQWtCLEdBQUcsU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEdBQUcsTUFBTTtFQUN6RSxJQUFJLGlCQUFpQixHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLE1BQU07RUFDdkUsSUFBSSxtQkFBbUIsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLE1BQU07RUFDM0UsSUFBSSxzQkFBc0IsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLE1BQU07RUFDakYsSUFBSSxtQkFBbUIsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLE1BQU07RUFDM0UsSUFBSSxtQkFBbUIsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLE1BQU07RUFDM0UsSUFBSSxrQkFBa0IsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsR0FBRyxNQUFNLENBQUM7RUFDMUU7O0VBRUEsSUFBSSxxQkFBcUIsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLE1BQU07RUFDL0UsSUFBSSwwQkFBMEIsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLE1BQU07RUFDekYsSUFBSSxzQkFBc0IsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLE1BQU07RUFDakYsSUFBSSxtQkFBbUIsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLE1BQU07RUFDM0UsSUFBSSx3QkFBd0IsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLE1BQU07RUFDckYsSUFBSSxlQUFlLEdBQUcsU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsTUFBTTtFQUNuRSxJQUFJLGVBQWUsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxNQUFNO0VBQ25FLElBQUksZ0JBQWdCLEdBQUcsU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsTUFBTTtFQUNyRSxJQUFJLHNCQUFzQixHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsTUFBTTtFQUNqRixJQUFJLG9CQUFvQixHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsTUFBTTtFQUM3RSxJQUFJLGdCQUFnQixHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLE1BQU07O0VBRXJFLFNBQVMsa0JBQWtCLENBQUMsSUFBSSxFQUFFO0VBQ2xDLEVBQUUsT0FBTyxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksT0FBTyxJQUFJLEtBQUssVUFBVTtFQUMvRCxFQUFFLElBQUksS0FBSyxtQkFBbUIsSUFBSSxJQUFJLEtBQUssMEJBQTBCLElBQUksSUFBSSxLQUFLLG1CQUFtQixJQUFJLElBQUksS0FBSyxzQkFBc0IsSUFBSSxJQUFJLEtBQUssbUJBQW1CLElBQUksSUFBSSxLQUFLLHdCQUF3QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksQ0FBQyxRQUFRLEtBQUssZUFBZSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssZUFBZSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssbUJBQW1CLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLHNCQUFzQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssc0JBQXNCLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLGdCQUFnQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssZ0JBQWdCLENBQUM7RUFDcm1COztFQUVBLFNBQVMsTUFBTSxDQUFDLE1BQU0sRUFBRTtFQUN4QixFQUFFLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7RUFDckQsSUFBSSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUTs7RUFFbEMsSUFBSSxRQUFRLFFBQVE7RUFDcEIsTUFBTSxLQUFLLGtCQUFrQjtFQUM3QixRQUFRLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJOztFQUU5QixRQUFRLFFBQVEsSUFBSTtFQUNwQixVQUFVLEtBQUsscUJBQXFCO0VBQ3BDLFVBQVUsS0FBSywwQkFBMEI7RUFDekMsVUFBVSxLQUFLLG1CQUFtQjtFQUNsQyxVQUFVLEtBQUssbUJBQW1CO0VBQ2xDLFVBQVUsS0FBSyxzQkFBc0I7RUFDckMsVUFBVSxLQUFLLG1CQUFtQjtFQUNsQyxZQUFZLE9BQU8sSUFBSTs7RUFFdkIsVUFBVTtFQUNWLFlBQVksSUFBSSxZQUFZLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFROztFQUVwRCxZQUFZLFFBQVEsWUFBWTtFQUNoQyxjQUFjLEtBQUssa0JBQWtCO0VBQ3JDLGNBQWMsS0FBSyxzQkFBc0I7RUFDekMsY0FBYyxLQUFLLGVBQWU7RUFDbEMsY0FBYyxLQUFLLGVBQWU7RUFDbEMsY0FBYyxLQUFLLG1CQUFtQjtFQUN0QyxnQkFBZ0IsT0FBTyxZQUFZOztFQUVuQyxjQUFjO0VBQ2QsZ0JBQWdCLE9BQU8sUUFBUTtFQUMvQjs7RUFFQTs7RUFFQSxNQUFNLEtBQUssaUJBQWlCO0VBQzVCLFFBQVEsT0FBTyxRQUFRO0VBQ3ZCO0VBQ0E7O0VBRUEsRUFBRSxPQUFPLFNBQVM7RUFDbEIsQ0FBQzs7RUFFRCxJQUFJLFNBQVMsR0FBRyxxQkFBcUI7RUFDckMsSUFBSSxjQUFjLEdBQUcsMEJBQTBCO0VBQy9DLElBQUksZUFBZSxHQUFHLGtCQUFrQjtFQUN4QyxJQUFJLGVBQWUsR0FBRyxtQkFBbUI7RUFDekMsSUFBSSxPQUFPLEdBQUcsa0JBQWtCO0VBQ2hDLElBQUksVUFBVSxHQUFHLHNCQUFzQjtFQUN2QyxJQUFJLFFBQVEsR0FBRyxtQkFBbUI7RUFDbEMsSUFBSSxJQUFJLEdBQUcsZUFBZTtFQUMxQixJQUFJLElBQUksR0FBRyxlQUFlO0VBQzFCLElBQUksTUFBTSxHQUFHLGlCQUFpQjtFQUM5QixJQUFJLFFBQVEsR0FBRyxtQkFBbUI7RUFDbEMsSUFBSSxVQUFVLEdBQUcsc0JBQXNCO0VBQ3ZDLElBQUksUUFBUSxHQUFHLG1CQUFtQjtFQUNsQyxJQUFJLG1DQUFtQyxHQUFHLEtBQUssQ0FBQzs7RUFFaEQsU0FBUyxXQUFXLENBQUMsTUFBTSxFQUFFO0VBQzdCLEVBQUU7RUFDRixJQUFJLElBQUksQ0FBQyxtQ0FBbUMsRUFBRTtFQUM5QyxNQUFNLG1DQUFtQyxHQUFHLElBQUksQ0FBQzs7RUFFakQsTUFBTSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsdURBQXVELEdBQUcsNERBQTRELEdBQUcsZ0VBQWdFLENBQUM7RUFDaE47RUFDQTs7RUFFQSxFQUFFLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLHFCQUFxQjtFQUM3RTtFQUNBLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0VBQ2xDLEVBQUUsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssMEJBQTBCO0VBQ3REO0VBQ0EsU0FBUyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUU7RUFDbkMsRUFBRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxrQkFBa0I7RUFDOUM7RUFDQSxTQUFTLGlCQUFpQixDQUFDLE1BQU0sRUFBRTtFQUNuQyxFQUFFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLG1CQUFtQjtFQUMvQztFQUNBLFNBQVMsU0FBUyxDQUFDLE1BQU0sRUFBRTtFQUMzQixFQUFFLE9BQU8sT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxrQkFBa0I7RUFDaEc7RUFDQSxTQUFTLFlBQVksQ0FBQyxNQUFNLEVBQUU7RUFDOUIsRUFBRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxzQkFBc0I7RUFDbEQ7RUFDQSxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUU7RUFDNUIsRUFBRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxtQkFBbUI7RUFDL0M7RUFDQSxTQUFTLE1BQU0sQ0FBQyxNQUFNLEVBQUU7RUFDeEIsRUFBRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxlQUFlO0VBQzNDO0VBQ0EsU0FBUyxNQUFNLENBQUMsTUFBTSxFQUFFO0VBQ3hCLEVBQUUsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssZUFBZTtFQUMzQztFQUNBLFNBQVMsUUFBUSxDQUFDLE1BQU0sRUFBRTtFQUMxQixFQUFFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLGlCQUFpQjtFQUM3QztFQUNBLFNBQVMsVUFBVSxDQUFDLE1BQU0sRUFBRTtFQUM1QixFQUFFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLG1CQUFtQjtFQUMvQztFQUNBLFNBQVMsWUFBWSxDQUFDLE1BQU0sRUFBRTtFQUM5QixFQUFFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLHNCQUFzQjtFQUNsRDtFQUNBLFNBQVMsVUFBVSxDQUFDLE1BQU0sRUFBRTtFQUM1QixFQUFFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLG1CQUFtQjtFQUMvQzs7RUFFQSxtQkFBQSxDQUFBLFNBQWlCLEdBQUcsU0FBUztFQUM3QixtQkFBQSxDQUFBLGNBQXNCLEdBQUcsY0FBYztFQUN2QyxtQkFBQSxDQUFBLGVBQXVCLEdBQUcsZUFBZTtFQUN6QyxtQkFBQSxDQUFBLGVBQXVCLEdBQUcsZUFBZTtFQUN6QyxtQkFBQSxDQUFBLE9BQWUsR0FBRyxPQUFPO0VBQ3pCLG1CQUFBLENBQUEsVUFBa0IsR0FBRyxVQUFVO0VBQy9CLG1CQUFBLENBQUEsUUFBZ0IsR0FBRyxRQUFRO0VBQzNCLG1CQUFBLENBQUEsSUFBWSxHQUFHLElBQUk7RUFDbkIsbUJBQUEsQ0FBQSxJQUFZLEdBQUcsSUFBSTtFQUNuQixtQkFBQSxDQUFBLE1BQWMsR0FBRyxNQUFNO0VBQ3ZCLG1CQUFBLENBQUEsUUFBZ0IsR0FBRyxRQUFRO0VBQzNCLG1CQUFBLENBQUEsVUFBa0IsR0FBRyxVQUFVO0VBQy9CLG1CQUFBLENBQUEsUUFBZ0IsR0FBRyxRQUFRO0VBQzNCLG1CQUFBLENBQUEsV0FBbUIsR0FBRyxXQUFXO0VBQ2pDLG1CQUFBLENBQUEsZ0JBQXdCLEdBQUcsZ0JBQWdCO0VBQzNDLG1CQUFBLENBQUEsaUJBQXlCLEdBQUcsaUJBQWlCO0VBQzdDLG1CQUFBLENBQUEsaUJBQXlCLEdBQUcsaUJBQWlCO0VBQzdDLG1CQUFBLENBQUEsU0FBaUIsR0FBRyxTQUFTO0VBQzdCLG1CQUFBLENBQUEsWUFBb0IsR0FBRyxZQUFZO0VBQ25DLG1CQUFBLENBQUEsVUFBa0IsR0FBRyxVQUFVO0VBQy9CLG1CQUFBLENBQUEsTUFBYyxHQUFHLE1BQU07RUFDdkIsbUJBQUEsQ0FBQSxNQUFjLEdBQUcsTUFBTTtFQUN2QixtQkFBQSxDQUFBLFFBQWdCLEdBQUcsUUFBUTtFQUMzQixtQkFBQSxDQUFBLFVBQWtCLEdBQUcsVUFBVTtFQUMvQixtQkFBQSxDQUFBLFlBQW9CLEdBQUcsWUFBWTtFQUNuQyxtQkFBQSxDQUFBLFVBQWtCLEdBQUcsVUFBVTtFQUMvQixtQkFBQSxDQUFBLGtCQUEwQixHQUFHLGtCQUFrQjtFQUMvQyxtQkFBQSxDQUFBLE1BQWMsR0FBRyxNQUFNO0VBQ3ZCLEdBQUcsR0FBRztFQUNOOztFQ2hMTztFQUNQLEVBQUVDLFNBQUEsQ0FBQSxPQUFjLEdBQUdDLG1CQUF3QztFQUMzRDs7OztFQ0pBLElBQUksT0FBTyxHQUFHQSxjQUFtQjtFQTRCakMsSUFBSSxtQkFBbUIsR0FBRztFQUMxQixFQUFFLFVBQVUsRUFBRSxJQUFJO0VBQ2xCLEVBQUUsTUFBTSxFQUFFLElBQUk7RUFDZCxFQUFFLFlBQVksRUFBRSxJQUFJO0VBQ3BCLEVBQUUsV0FBVyxFQUFFLElBQUk7RUFDbkIsRUFBRSxTQUFTLEVBQUU7RUFDYixDQUFDO0VBQ0QsSUFBSSxZQUFZLEdBQUc7RUFDbkIsRUFBRSxVQUFVLEVBQUUsSUFBSTtFQUNsQixFQUFFLE9BQU8sRUFBRSxJQUFJO0VBQ2YsRUFBRSxZQUFZLEVBQUUsSUFBSTtFQUNwQixFQUFFLFdBQVcsRUFBRSxJQUFJO0VBQ25CLEVBQUUsU0FBUyxFQUFFLElBQUk7RUFDakIsRUFBRSxJQUFJLEVBQUU7RUFDUixDQUFDO0VBQ0QsSUFBSSxZQUFZLEdBQUcsRUFBRTtFQUNyQixZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLG1CQUFtQjtFQUN0RCxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLFlBQVk7O0VDL0N6QyxJQUFJLFNBQVMsR0FBRyxJQUFJOztFQUVwQixTQUFTLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUU7RUFDdkUsRUFBRSxJQUFJLFlBQVksR0FBRyxFQUFFO0VBQ3ZCLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTLEVBQUU7RUFDckQsSUFBSSxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxTQUFTLEVBQUU7RUFDN0MsTUFBTSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztFQUN4RCxLQUFLLE1BQU0sSUFBSSxTQUFTLEVBQUU7RUFDMUIsTUFBTSxZQUFZLElBQUksU0FBUyxHQUFHLEdBQUc7RUFDckM7RUFDQSxHQUFHLENBQUM7RUFDSixFQUFFLE9BQU8sWUFBWTtFQUNyQjtFQUNBLElBQUksY0FBYyxHQUFHLFNBQVMsY0FBYyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFO0VBQzdFLEVBQUUsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUk7O0VBRW5ELEVBQUU7RUFDRjtFQUNBO0VBQ0E7RUFDQTtFQUNBLEVBQUUsQ0FBQyxXQUFXLEtBQUssS0FBSztFQUN4QjtFQUNBO0VBQ0E7RUFDQSxFQUFFLFNBQVMsS0FBSyxLQUFLLE1BQU0sS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxTQUFTLEVBQUU7RUFDdEUsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNO0VBQ25EO0VBQ0EsQ0FBQztFQUNELElBQUksWUFBWSxHQUFHLFNBQVMsWUFBWSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFO0VBQ3pFLEVBQUUsY0FBYyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDO0VBQ2hELEVBQUUsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUk7O0VBRW5ELEVBQUUsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUU7RUFDckQsSUFBSSxJQUFJLE9BQU8sR0FBRyxVQUFVOztFQUU1QixJQUFJLEdBQUc7RUFDUCxNQUFNLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxLQUFLLE9BQU8sR0FBRyxHQUFHLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7O0VBRTdGLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJO0VBQzVCLEtBQUssUUFBUSxPQUFPLEtBQUssU0FBUztFQUNsQztFQUNBLENBQUM7O0VDMUNEO0VBQ0E7RUFDQTtFQUNBLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRTtFQUN0QjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0VBRVosRUFBRSxJQUFJLENBQUM7RUFDUCxNQUFNLENBQUMsR0FBRyxDQUFDO0VBQ1gsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU07O0VBRXRCLEVBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7RUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxFQUFFO0VBQzlJLElBQUksQ0FBQztFQUNMO0VBQ0EsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLElBQUksVUFBVSxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFB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SUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDWixFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtFQUNILEVBQUUsSUFBSSxFQUFFLEdBQUc7RUFDWCxFQUFFLE9BQU8sRUFBRTtFQUNYLENBQUMsQ0FBQztFQUNGLElBQUksWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0VBQ2hFLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTztFQUNsQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQztFQUN2QixJQUFJLGVBQWUsR0FBRyxFQUFFO0VBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0VBQzVDLEVBQUUsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztFQUMvQixFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFF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QUFFLE9BQU87RUFBRWUsTUFBQUEsWUFBWSxFQUFFO0VBQUU7S0FBSXJELEVBQUFBLFFBQVEsQ0FBQ3VTLEtBQUssSUFBSSxTQUFpQixDQUFDLGVBQzFGdlIsd0JBQUEsQ0FBQVcsYUFBQSxDQUFDcVIsb0JBQU0sRUFBQTtNQUNMQyxPQUFPLEVBQUEsSUFBQTtFQUNQakYsSUFBQUEsT0FBTyxFQUFFQSxPQUFRO0VBQ2pCdEssSUFBQUEsS0FBSyxFQUFFNk4sUUFBUztFQUNoQnhSLElBQUFBLFFBQVEsRUFBRVMsWUFBYTtFQUN2QjBTLElBQUFBLFdBQVcsRUFBQztFQUE0QixHQUN6QyxDQUNFLENBQUM7RUFFVixDQUFDOztFQzlEREMsT0FBTyxDQUFDQyxjQUFjLEdBQUcsRUFBRTtFQUUzQkQsT0FBTyxDQUFDQyxjQUFjLENBQUN0VCxXQUFXLEdBQUdBLFdBQVc7RUFFaERxVCxPQUFPLENBQUNDLGNBQWMsQ0FBQzlQLFdBQVcsR0FBR0EsV0FBVztFQUVoRDZQLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDL0IsZUFBZSxHQUFHQSxlQUFlOzs7Ozs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyMywyNCwyNSwyNiwyNywyOCwyOSwzMCwzMSwzMiwzMywzNCwzNSwzNiwzNywzOCwzOSw0MCw0MSw0Miw0Myw0NCw0NSw0Niw0Nyw0OCw0OSw1MCw1MSw1Miw1Myw1NCw1NSw1Niw1N119
