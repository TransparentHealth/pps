angular.module('mpn-generator').controller('viewCtrl', function($state, $scope, JSONService) {
    var self = this;
    var mpnData = JSONService.getData();
    this.jsonPreview = "";

    this.viewJSON = function() {
      self.jsonPreview = JSON.stringify(mpnData);
      console.log(JSON.stringify(mpnData));
    };
});
