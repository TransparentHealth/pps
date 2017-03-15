angular.module('mpn-generator').controller('hipaaCtrl', function($state, $scope, JSONService) {
  this.protected = JSONService.getData().hipaa.protected || undefined;
  this.noticeUrl = JSONService.getData().hipaa.noticeUrl || undefined;
  this.updateData = function(name, newData) {
    console.log(name);
    JSONService.updateData(name, newData);
  };

});
