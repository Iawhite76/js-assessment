if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        // best solution??
        // return fn(arr[0], arr[1], arr[2]);

        // using apply function
        return fn.apply(this, arr);
    },

    speaker : function(fn, obj) {
        // console.log(fn);
        obj.fn = fn;
        return obj.fn();
    },

    functionFunction : function(str) {

    },

    makeClosures : function(arr, fn) {

    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {

    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
