if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var ownProperties = [];

      for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
          ownProperties.push(property + ": " + obj[property]);
        }
      }

      return ownProperties;
    }
  };
});
