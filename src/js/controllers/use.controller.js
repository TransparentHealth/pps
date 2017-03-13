angular.module('mpn-generator').controller('useCtrl', function($state, $scope, JSONService) {
  var self = this;
  this.useChecked = false;
  this.primaryService = JSONService.getData().use.primaryService || undefined;
  this.marketing = JSONService.getData().use.marketing || undefined;
  this.scientificResearch = JSONService.getData().use.scientificResearch || undefined;
  this.companyOps = JSONService.getData().use.companyOps || undefined;
  this.development = JSONService.getData().use.development || undefined;
  this.other = JSONService.getData().use.other || undefined;
  this.otherDescription = JSONService.getData().use.otherDescription || undefined;
  this.updateData = function(name, newData) {
    self.checkStatus();
    JSONService.updateData(name, newData);
  };

  this.checkStatus = function() {
    if (self.primaryService || self.marketing || self.scientificResearch || self.companyOps || self.development || self.other) {
      self.useChecked = true;
    } else {
      self.useChecked = false;
    }
  };
});
