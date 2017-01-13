angular.module('mpn-generator').controller('userCtrl', function($state, $scope, JSONService) {
  this.hasOptions = JSONService.getData().user.hasOptions || undefined;
  this.access = JSONService.getData().user.access || undefined;
  this.edit = JSONService.getData().user.edit || undefined;
  this.share = JSONService.getData().user.share || undefined;
  this.delete = JSONService.getData().user.delete || undefined;
  this.updateData = function(name, newData) {
    JSONService.updateData(name, newData);
  };
});
