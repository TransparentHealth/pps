angular.module('mpn-generator').controller('breachCtrl', function($state, $scope, JSONService) {
  this.procedure = JSONService.getData().breach.procedure || undefined;
  this.updateData = function(name, newData) {
    JSONService.updateData(name, newData);
  };
});
