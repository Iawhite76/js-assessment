if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      // Osei's code
      // return {
      //   then: function(callback) {
      //     setTimeout(function(){
      //       callback(value);
      //     }, 0);
      //   }
      // }
    },

    manipulateRemoteData : function(url) {

    }
  };
});
