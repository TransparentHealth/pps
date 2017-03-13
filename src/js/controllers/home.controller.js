angular.module('mpn-generator').controller('homeCtrl', function($state, $scope, JSONService) {

  this.clearData = function() {
    JSONService.mpnData = null;

  }

});
