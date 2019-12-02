"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function processDataSet(e) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (e.timeStamp === undefined) {
    e = _objectSpread({}, e, {
      target: {
        dataset: {}
      },
      currentTarget: {
        dataset: {}
      }
    });
  }

  Object.keys(props).forEach(function (prop) {
    if (prop.match(/^data-/)) {
      var originProp = prop;
      prop = prop.replace(/[A-Z]/g, function ($) {
        return $.toLowerCase();
      });
      prop = prop.split('-');
      prop.shift();
      prop = prop.join('');
      e.target.dataset[prop] = props[originProp];
      e.currentTarget.dataset[prop] = props[originProp];
    }
  });
  return e;
}

module.exports = processDataSet;