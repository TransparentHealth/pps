angular.module('mpn-generator').controller('privacyCtrl', function($state, $scope, JSONService) {
  this.requestPermissions = JSONService.getData().privacy.requestPermissions || undefined;
  this.camera = JSONService.getData().privacy.camera || undefined;
  this.photos = JSONService.getData().privacy.photos || undefined;
  this.contact = JSONService.getData().privacy.contact || undefined;
  this.location = JSONService.getData().privacy.location || undefined;
  this.microphone = JSONService.getData().privacy.microphone || undefined;
  this.health = JSONService.getData().privacy.health || undefined;
  this.other = JSONService.getData().privacy.other || undefined;
  this.otherDescription = JSONService.getData().privacy.otherDescription || undefined;
  this.socialMedia = JSONService.getData().privacy.socialMedia || undefined;
  this.updateData = function(name, newData) {
    JSONService.updateData(name, newData);
  };
});
