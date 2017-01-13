angular.module('mpn-generator').controller('policyCtrl', function($state, $scope, JSONService) {
  this.notificationMethod = JSONService.getData().policy.notificationMethod || undefined;
  this.updateData = function(name, newData) {
    JSONService.updateData(name, newData);
  };
});
