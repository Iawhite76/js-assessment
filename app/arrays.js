if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        sum = 0
        for(var i = 0; i < arr.length; i ++) {
            sum += arr[i]
        };
        return sum
    },

    remove : function(arr, item) {
        for (var i = 0; i < arr.length; i ++) {
            if(arr[i] === item) {
                 arr.splice(i, 1);
            }
        };
        return arr;
    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {
         arr.push(item);
        return arr;

    },

    truncate : function(arr) {
         arr.splice(-1, 1);
        return arr;
    },

    prepend : function(arr, item) {
         arr.unshift(item);
         return arr;
    },

    curtail : function(arr) {
        arr.splice(0, 1);
         return arr;

    },

    concat : function(arr1, arr2) {
        var joinedArrays = arr1.concat(arr2);
        return joinedArrays;
    },

    insert : function(arr, item, index) {
         arr.splice(index, 0, item);
         return arr;
    },

    count : function(arr, item) {
        counter = 0
        for(var i = 0; i < arr.length; i ++) {
            if(arr[i] === item) {
                counter += 1;
            }
        }
         return counter;
    },

    duplicates : function(arr) {
        var results = [];
        arr = arr.sort();
        for (var i = 0, len = arr.length - 1; i < len; i++) {
          if((results.indexOf(arr[i]) == -1) && (arr.indexOf(arr[i], i + 1) != -1)) {
          results.push(arr[i]);
           }
        }
         return results;
    },

    square : function(arr) {
        sqValues = []
        for (var i = 0, len = arr.length; i < len; i ++) {
          sqValues.push(arr[i] * arr[i]);
         }
        return sqValues;
    },

    findAllOccurrences : function(arr, target) {
        return arr;
    }
  };
});
