angular.module('mpn-generator').controller('sellCtrl', function($state, $scope, JSONService) {
  var self = this;
  this.dataIdCheck = false;
  this.dataNoCheck = false;
  this.dataBothCheck = false;
  this.dataWithId = JSONService.getData().sell.dataWithId || undefined;
  this.dataNoId = JSONService.getData().sell.dataNoId || undefined;
  this.updateData = function(name, newData) {
    self.checkStatus();
    JSONService.updateData(name, newData);
  };
  this.checkStatus = function() {
    if (self.dataWithId) {
      self.dataIdCheck = true;
    } else {
      dataIdCheck = false;
    }
    if (self.dataNoId) {
      self.dataNoCheck = true;
    } else {
      self.dataNoCheck = false;
    }
    if (self.dataIdCheck && self.dataNoCheck) {
      self.dataBothCheck = true;
    } else {
      self.dataBothCheck = false;
    }

  };
});
