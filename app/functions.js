if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      return function(str2) {
        return str + ', ' + str2;
      };
    },

    makeClosures : function(arr, fn) {
      // fn = function (x) { return x * x; };

      var resultArr = [];

      for (var i = 0; i < arr.length; i++) {
        resultArr[i] = function() {

        };
      }

      return resultArr;
    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {
      var sum = 0;

      for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
      }

      return sum;
    },

    callIt : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1, arguments.length);
      return fn.apply(this, args);
    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
