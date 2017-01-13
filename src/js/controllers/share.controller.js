angular.module('mpn-generator').controller('shareCtrl', function($state, $scope, JSONService) {
  this.primaryServiceWithId = JSONService.getData().share.primaryServiceWithId || undefined;
  this.scientificResearchWithId = JSONService.getData().share.scientificResearchWithId || undefined;
  this.companyOpsWithId = JSONService.getData().share.companyOpsWithId || undefined;
  this.developmentWithId = JSONService.getData().share.developmentWithId || undefined;
  this.otherWithId = JSONService.getData().share.otherWithId || undefined;
  this.otherDescriptionWithId = JSONService.getData().share.otherDescriptionWithId || undefined;
  this.noneWithId = JSONService.getData().share.noneWithId || undefined;
  this.primaryServiceNoId = JSONService.getData().share.primaryServiceNoId || undefined;
  this.scientificResearchNoId = JSONService.getData().share.scientificResearchNoId || undefined;
  this.companyOpsNoId = JSONService.getData().share.companyOpsNoId || undefined;
  this.developmentNoId = JSONService.getData().share.developmentNoId || undefined;
  this.otherNoId = JSONService.getData().share.otherNoId || undefined;
  this.otherDescriptionNoId = JSONService.getData().share.otherDescriptionNoId || undefined;
  this.noneNoId = JSONService.getData().share.noneNoId || undefined;
  this.updateData = function(name, newData) {
    JSONService.updateData(name, newData);
  };
});
