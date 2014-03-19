if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
     //  obj.func = fn;
     // return obj.func();
     return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
      return constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var ownProperties = [];
  for (var prop in obj) {
        // hasOwnProperty returns true if the property
        // belongs to the object, not its prototype chain.
        if (obj.hasOwnProperty(prop)) {
          ownProperties.push(prop + ': ' + obj[prop]);
        }
      }
      return ownProperties;
    }
  };
});
