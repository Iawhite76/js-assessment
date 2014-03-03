if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var patt1=/\d/;
        return patt1.test(str);
        // if (result == true ) {
        //     return true;
        // } else {
        //     return false;
        // }
    },

    containsRepeatingLetter : function(str) {
        var patt = /([a-zA-Z]).*?\1/
        return patt.test(str);
    },

    endsWithVowel : function(str) {
        var patt = /[aeiou]$/i
        return patt.test(str);
    },

    captureThreeNumbers : function(str) {
        var patt = /[1-9]{3}/
        var result = str.match(patt);
        if (result) {
            return result[0];
        } else {
            return false;
        }
    },

    matchesPattern : function(str) {

    },
    isUSD : function(str) {

    }
  };
});
