(function() {
  "use strict";
  angular.module('mpn-generator', ['ui.router', 'LocalStorageModule'])
        .config(function($stateProvider, $urlRouterProvider) {

          $urlRouterProvider.otherwise('/');

          $stateProvider.state('home', {
            url: '/',
            templateUrl: './src/views/home.html',
            controller: 'homeCtrl as home'
          }).state('hipaa', {
            url: '/hipaa',
            templateUrl: './src/views/hipaa.html',
            controller: 'hipaaCtrl as hipaa'
          }).state('use', {
            url: '/use',
            templateUrl: './src/views/use.html',
            controller: 'useCtrl as use'
          }).state('share', {
            url: '/share',
            templateUrl: './src/views/share.html',
            controller: 'shareCtrl as share'
          }).state('sell', {
            url: '/sell',
            templateUrl: './src/views/sell.html',
            controller: 'sellCtrl as sell'
          }).state('store', {
            url: '/store',
            templateUrl: './src/views/store.html',
            controller: 'storeCtrl as store'
          }).state('encryption', {
            url: '/encryption',
            templateUrl: './src/views/encryption.html',
            controller: 'encryptionCtrl as encryption'
          }).state('privacy', {
            url: '/privacy',
            templateUrl: './src/views/privacy.html',
            controller: 'privacyCtrl as privacy'
          }).state('user', {
            url: '/user',
            templateUrl: './src/views/user.html',
            controller: 'userCtrl as user'
          }).state('deactivation', {
            url: '/deactivation',
            templateUrl: './src/views/deactivation.html',
            controller: 'deactivationCtrl as deactivation'
          }).state('policy', {
            url: '/policy',
            templateUrl: './src/views/policy.html',
            controller: 'policyCtrl as policy'
          }).state('breach', {
            url: '/breach',
            templateUrl: './src/views/breach.html',
            controller: 'breachCtrl as breach'
          }).state('contact', {
            url: '/contact',
            templateUrl: './src/views/contact.html',
            controller: 'contactCtrl as contact'
          }).state('view', {
            url: '/view',
            templateUrl: './src/views/view.html',
            controller: 'viewCtrl as view'
          });
        });
})();
;angular.module('mpn-generator').service('JSONService', function() {

  var mpnData = {
    hipaa: {},
    use: {},
    share: {},
    sell: {},
    store: {},
    encryption: {},
    privacy: {},
    user: {},
    deactivation: {},
    policy: {},
    breach: {},
    contact: {}
  }

  function updateData(name, newData) {
    var nameParts = name.split('.');
    var category = nameParts[0];
    var varName = nameParts[1];
    mpnData[category][varName] = newData;
  }

  function getData() {
    return mpnData;
  }

  return {
    updateData: updateData,
    getData: getData
  };
});
;angular.module('mpn-generator').controller('breachCtrl', function($state, $scope, JSONService) {
  this.procedure = JSONService.getData().breach.procedure || undefined;
  this.updateData = function(name, newData) {
    JSONService.updateData(name, newData);
  };
});
;angular.module('mpn-generator').controller('contactCtrl', function($state, $scope, JSONService) {
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
;angular.module('mpn-generator').controller('deactivationCtrl', function($state, $scope, JSONService) {
  this.action = JSONService.getData().deactivation.action || undefined;
  this.numYears = JSONService.getData().deactivation.numYears || undefined;
  this.updateData = function(name, newData) {
    JSONService.updateData(name, newData);
  };
});
;angular.module('mpn-generator').controller('encryptionCtrl', function($state, $scope, JSONService) {
  this.device = JSONService.getData().encryption.device || undefined;
  this.server = JSONService.getData().encryption.server || undefined;
  this.transmit = JSONService.getData().encryption.transmit || undefined;
  this.updateData = function(name, newData) {
    JSONService.updateData(name, newData);
  };
});
;angular.module('mpn-generator').controller('hipaaCtrl', function($state, $scope, JSONService) {
  this.protected = JSONService.getData().hipaa.protected || undefined;
  this.noticeUrl = JSONService.getData().hipaa.noticeUrl || undefined;
  this.updateData = function(name, newData) {
    JSONService.updateData(name, newData);
  };
});
;angular.module('mpn-generator').controller('homeCtrl', function($state, $scope) {

});
;angular.module('mpn-generator').controller('policyCtrl', function($state, $scope, JSONService) {
  this.notificationMethod = JSONService.getData().policy.notificationMethod || undefined;
  this.updateData = function(name, newData) {
    JSONService.updateData(name, newData);
  };
});
;angular.module('mpn-generator').controller('privacyCtrl', function($state, $scope, JSONService) {
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
;angular.module('mpn-generator').controller('sellCtrl', function($state, $scope, JSONService) {
  this.dataWithId = JSONService.getData().sell.dataWithId || undefined;
  this.dataNoId = JSONService.getData().sell.dataNoId || undefined;
  this.updateData = function(name, newData) {
    JSONService.updateData(name, newData);
  };
});
;angular.module('mpn-generator').controller('shareCtrl', function($state, $scope, JSONService) {
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
;angular.module('mpn-generator').controller('storeCtrl', function($state, $scope, JSONService) {
  this.device = JSONService.getData().store.device || undefined;
  this.external = JSONService.getData().store.external || undefined;
  this.updateData = function(name, newData) {
    JSONService.updateData(name, newData);
  };
});
;angular.module('mpn-generator').controller('useCtrl', function($state, $scope, JSONService) {
  this.primaryService = JSONService.getData().use.primaryService || undefined;
  this.marketing = JSONService.getData().use.marketing || undefined;
  this.scientificResearch = JSONService.getData().use.scientificResearch || undefined;
  this.companyOps = JSONService.getData().use.companyOps || undefined;
  this.development = JSONService.getData().use.development || undefined;
  this.other = JSONService.getData().use.other || undefined;
  this.otherDescription = JSONService.getData().use.otherDescription || undefined;
  this.updateData = function(name, newData) {
    JSONService.updateData(name, newData);
  };
});
;angular.module('mpn-generator').controller('userCtrl', function($state, $scope, JSONService) {
  this.hasOptions = JSONService.getData().user.hasOptions || undefined;
  this.access = JSONService.getData().user.access || undefined;
  this.edit = JSONService.getData().user.edit || undefined;
  this.share = JSONService.getData().user.share || undefined;
  this.delete = JSONService.getData().user.delete || undefined;
  this.updateData = function(name, newData) {
    JSONService.updateData(name, newData);
  };
});
;angular.module('mpn-generator').controller('viewCtrl', function($state, $scope, JSONService) {
    var self = this;
    var mpnData = JSONService.getData();
    this.jsonPreview = "";

    this.viewJSON = function() {
      self.jsonPreview = JSON.stringify(mpnData);
      console.log(JSON.stringify(mpnData));
    };
});
