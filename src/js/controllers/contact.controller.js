angular.module('mpn-generator').controller('contactCtrl', function($state, $scope, JSONService) {
  this.name = JSONService.getData().contact.name || undefined;
  this.privacyPolicy = JSONService.getData().contact.privacyPolicy || undefined;
  this.onlineComments = JSONService.getData().contact.onlineComments || undefined;
  this.email = JSONService.getData().contact.email || undefined;
  this.phone = JSONService.getData().contact.phone || undefined;
  this.address = JSONService.getData().contact.address || undefined;
  this.updateData = function(name, newData) {
    JSONService.updateData(name, newData);
  };
});
