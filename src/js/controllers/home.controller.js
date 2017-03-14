angular.module('mpn-generator').controller('homeCtrl', function($state, $scope, JSONService) {

  this.protected = JSONService.getData().hipaa.protected || undefined;
  this.noticeUrl = JSONService.getData().hipaa.noticeUrl || undefined;

  this.updateData = function(name, newData) {
    JSONService.updateData(name, newData);
  };
});
