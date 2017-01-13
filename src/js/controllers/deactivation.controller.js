angular.module('mpn-generator').controller('deactivationCtrl', function($state, $scope, JSONService) {
  this.action = JSONService.getData().deactivation.action || undefined;
  this.numYears = JSONService.getData().deactivation.numYears || undefined;
  this.updateData = function(name, newData) {
    JSONService.updateData(name, newData);
  };
});
