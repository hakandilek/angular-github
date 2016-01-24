(function(){
  'use strict';

  // Prepare the module for subsequent registration of controllers and delegates
  angular
      .module('Github', [ ])
      .factory('Github', [
        function() {
          return Github;
        }
      ]);

})();
