angular.module('mpn-generator').controller('storeCtrl', function($state, $scope, JSONService) {
  this.device = JSONService.getData().store.device || undefined;
  this.external = JSONService.getData().store.external || undefined;
  this.updateData = function(name, newData) {
    JSONService.updateData(name, newData);
  };
});
