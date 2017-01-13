angular.module('mpn-generator').controller('sellCtrl', function($state, $scope, JSONService) {
  this.dataWithId = JSONService.getData().sell.dataWithId || undefined;
  this.dataNoId = JSONService.getData().sell.dataNoId || undefined;
  this.updateData = function(name, newData) {
    JSONService.updateData(name, newData);
  };
});
