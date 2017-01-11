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
          });
        });
})();
;angular.module('mpn-generator').controller('breachCtrl', function($state, $scope) {
    console.log("Breach Controller Test");
});
;angular.module('mpn-generator').controller('contactCtrl', function($state, $scope) {
    console.log("Contact Controller Test");
});
;angular.module('mpn-generator').controller('deactivationCtrl', function($state, $scope) {
  console.log("Deactivation Controller Test");
});
;angular.module('mpn-generator').controller('encryptionCtrl', function($state, $scope) {
  console.log("Encryption Controller Test");
});
;angular.module('mpn-generator').controller('hipaaCtrl', function($state, $scope) {
  console.log("Hipaa Controller Test");
});
;angular.module('mpn-generator').controller('homeCtrl', function($state, $scope) {
  this.createMPN = function() {
    console.log("MPN Created!");
  };
});
;angular.module('mpn-generator').controller('policyCtrl', function($state, $scope) {
  console.log("Policy Controller Test");
});
;angular.module('mpn-generator').controller('privacyCtrl', function($state, $scope) {
  console.log("Privacy Controller Test");
});
;angular.module('mpn-generator').controller('sellCtrl', function($state, $scope) {
  console.log("Sell Controller Test");
});
;angular.module('mpn-generator').controller('shareCtrl', function($state, $scope) {
  console.log("Share Controller Test");
});
;angular.module('mpn-generator').controller('storeCtrl', function($state, $scope) {
  console.log("Store Controller Test");
});
;angular.module('mpn-generator').controller('useCtrl', function($state, $scope) {
  console.log("Use Controller Test");
});
;angular.module('mpn-generator').controller('userCtrl', function($state, $scope) {
  console.log("User Controller Test");
});
