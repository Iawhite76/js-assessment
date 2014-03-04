if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {

        // Drew's solution
        // var n = num.toString(2);  convert number to binary string (toString(2))
        // var arr = n.split(' ');
        // var newBit = arr.length - bit;
        // var number = arr[newBit];
        // var value = parseInt(number, 10);
        // return value;

        // patrick's solutions
        // binaryNum = this.convertToBinary.split(' ').reverse().join(' ');
        // return Number(binaryNum.slice(bit - 1, bit));
    },

    base10: function(str) {

    },

    convertToBinary: function(num) {

    },

    multiply: function(a, b) {

    }
  };
});

