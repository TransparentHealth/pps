angular.module('mpn-generator').controller('shareCtrl', function($state, $scope, JSONService) {
  var self = this;
  this.idCheck = false;
  this.noIdCheck = false;
  this.bothCheck = false;
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
    self.checkStatus();
  };
  this.checkStatus = function() {
    if (self.primaryServiceWithId || self.scientificResearchWithId || self.companyOpsWithId || self.developmentWithId || self.otherWithId || self.noneWithId) {
      self.idCheck = true;
    } else {
      self.idCheck = false;
    }
    if (self.primaryServiceNoId || self.scientificResearchNoId || self. companyOpsNoId || self.developmentNoId || self. otherNoId || self.noneNoId) {
      self.noIdCheck = true;
    } else {
      self.noIdCheck = false;
    }
    if (self.idCheck && self.noIdCheck) {
      self.bothCheck = true;
    } else {
      self.bothCheck =  false;
    }

  }
});
