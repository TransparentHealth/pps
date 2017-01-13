angular.module('mpn-generator').controller('encryptionCtrl', function($state, $scope, JSONService) {
  this.device = JSONService.getData().encryption.device || undefined;
  this.server = JSONService.getData().encryption.server || undefined;
  this.transmit = JSONService.getData().encryption.transmit || undefined;
  this.updateData = function(name, newData) {
    JSONService.updateData(name, newData);
  };
});
