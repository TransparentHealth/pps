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
    this.current = null;
    this.jsonPreview = "";

    this.viewJSON = function() {
      self.current = 'json';
      self.jsonPreview = JSON.stringify(mpnData);
    };

    this.viewSummary = function() {
      self.current = 'summary';
      // The selector for the container where the summary will be viewed. Ex) #idName, .className
      var containerSelector = '.summaryPreview';
      var $summary = $(containerSelector).html('');
      // Summary Title
      var $title = $('<h3>Summary</h3>');
      // HIPAA Info
      var $hipaa = $('<div></div>');
      $hipaa.append('<h3>HIPAA Protection of Data</h3>');
      if (mpnData.hipaa.protected === 'Yes') {
        $hipaa.append('<p>Some of the health data we collect as part of this product also are protected by HIPAA. Read our HIPAA Notice of Privacy Practices for more information. </p>');
        if (mpnData.hipaa.noticeUrl) {
          $hipaa.append('<a href=' + mpnData.hipaa.noticeUrl + ' target="_blank">Click here to see our HIPAA Notice of Privacy Practices</a>');
        }
      } else if (mpnData.hipaa.protected === 'No') {
        $hipaa.append('<p>Please note that the health data we collect as part of this product are not protected by HIPAA and our company’s HIPAA Notice of Privacy Practices does not apply.</p>');
      } else {
        $hipaa.append('<p>The developer of this product is not a HIPAA covered entity.</p>');
      }
      // Data Usage Info
      var $use = $('<div></div>');
      $use.append("<h3>Using Data: How we use your data internally</h3>");
      $use.append('<p>We collect and use your identifiable data:</p>');
      if (mpnData.use.primaryService) {
        $use.append('<p>To provide the primary service of the product</p>');
      }
      if (mpnData.use.marketing) {
        $use.append('<p>To develop marketing materials for our products</p>');
      }
      if (mpnData.use.scientificResearch) {
        $use.append('<p>To conduct scientific research</p>');
      }
      if (mpnData.use.companyOps) {
        $use.append('<p>For company operations (e.g., quality control or fraud detection)</p>');
      }
      if (mpnData.use.development) {
        $use.append('<p>To develop and improve new and current products and services (e.g., analytics)</p>');
      }
      if (mpnData.use.other) {
        $use.append('<p>' + mpnData.use.otherDescription + '</p>');
      }
      // Data Sharing Info
      var $share = $('<div></div>');
      $share.append("<h3>Sharing Data: How we share your data externally with other companies or entities</h3>");
      if (mpnData.share.noneWithId) {
        $share.append('<p>We DO NOT share your identifiable data</p>');
      } else {
        $share.append("<p>We share your identifiable data:</p>");
        if (mpnData.share.primaryServiceWithId) {
          $share.append('<p>To provide the primary service of the product</p>');
        }
        if (mpnData.share.scientificResearchWithId) {
          $share.append('<p>To conduct scientific research</p>');
        }
        if (mpnData.share.companyOpsWithId) {
          $share.append('<p>For company operations (e.g., quality control or fraud detection)</p>');
        }
        if (mpnData.share.developmentWithId) {
          $share.append('<p>To develop and improve new and current products and services (e.g., analytics)</p>');
        }
        if (mpnData.share.otherWithId) {
          $share.append('<p>' + mpnData.share.otherDescriptionWithId + '</p>');
        }
      }
      if (mpnData.share.noneNoId) {
        $share.append('<p>We DO NOT share your data after removing identifiers</p>');
      } else {
        $share.append("<p>We share your data AFTER removing identifiers (note that remaining data may still not be completely anonymous):");
        if (mpnData.share.primaryServiceNoId) {
          $share.append('<p>To provide the primary service of the product</p>');
        }
        if (mpnData.share.scientificResearchNoId) {
          $share.append('<p>To conduct scientific research</p>');
        }
        if (mpnData.share.companyOpsNoId) {
          $share.append('<p>For company operations (e.g., quality control or fraud detection)</p>');
        }
        if (mpnData.share.developmentNoId) {
          $share.append('<p>To develop and improve new and current products and services (e.g., analytics)</p>');
        }
        if (mpnData.share.otherNoId) {
          $share.append('<p>' + mpnData.share.otherDescriptionNoId + '</p>');
        }
      }
      // Data Selling Info
      var $sell = $('<div></div>');
      $sell.append("<h3>Selling Data: Who we sell your data to</h3>");
      $sell.append("<p>We sell your identifiable data to data brokers, marketing, advertising networks, or analytics firms:</p>");
      if (mpnData.sell.dataWithId) {
        $sell.append('<p>' + mpnData.sell.dataWithId + '</p>');
      }
      $sell.append("<p>We sell your data AFTER removing identifiers (note that remaining data may still not be completely anonymous) to data brokers, marketing, advertising networks, or analytics firms:</p>");
      if (mpnData.sell.dataNoId) {
        $sell.append('<p>' + mpnData.sell.dataNoId + '</p>');
      }
      // Data Storing Info
      var $store = $('<div></div>');
      $store.append("<h3>Storing Data: How we store your data</h3>");
      $store.append("<p>Is your data stored on your own device?</p>");
      if (mpnData.store.device) {
        $store.append('<p>' + mpnData.store.device + '</p>');
      }
      $store.append("<p>Is your data stored outside your own device at our company or through a third party?</p>");
      if (mpnData.store.external) {
        $store.append('<p>' + mpnData.store.external + '</p>');
      }
      // Data Encryption Info
      var $encryption = $('<div></div>');
      $encryption.append("<h3>Encryption: How we encrypt your data</h3>");
      $encryption.append("<p>Does our product encrypt your data within your device or app?</p>");
      if (mpnData.encryption.device) {
        $encryption.append('<p>' + mpnData.encryption.device + '</p>');
      }
      $encryption.append("<p>Does our product encrypt your data when stored on our company servers or with an outside cloud computing services provider?</p>");
      if (mpnData.encryption.server) {
        $encryption.append('<p>' + mpnData.encryption.server + '</p>');
      }
      $encryption.append("<p>Does our product encrypt your data while it is transmitted?</p>");
      if (mpnData.encryption.transmit) {
        $encryption.append('<p>' + mpnData.encryption.transmit + '</p>');
      }
      // Privacy Info
      var $privacy = $('<div></div>');
      $privacy.append("<h3>Privacy: How our product accesses your device data</h3>");
      $privacy.append("<p>Will our product request access to other device data or applications, such as your camera, photos, or contacts?</p>");
      if (mpnData.privacy.requestPermissions === 'Yes') {
        $privacy.append('<p>Yes: </p>');
        if (mpnData.privacy.camera) {
          $privacy.append('<p>Camera</p>');
        }
        if (mpnData.privacy.photos) {
          $privacy.append('<p>Photos</p>');
        }
        if (mpnData.privacy.contact) {
          $privacy.append('<p>Contacts</p>');
        }
        if (mpnData.privacy.location) {
          $privacy.append('<p>Location Services</p>');
        }
        if (mpnData.privacy.microphone) {
          $privacy.append('<p>Microphone</p>');
        }
        if (mpnData.privacy.health) {
          $privacy.append('<p>Health monitoring devices</p>');
        }
        if (mpnData.privacy.other) {
          $privacy.append('<p>' + mpnData.privacy.otherDescription + '</p>');
        }
      } else if (mpnData.privacy.requestPermissions === 'No') {
        $privacy.append('<p>No</p>');
      }
      $privacy.append("<p>Does your product share the user's data with social media accounts, like Facebook?</p>");
      if (mpnData.privacy.socialMedia) {
        $privacy.append('<p>' + mpnData.privacy.socialMedia + '</p>');
      }
      // User Options Info
      var $user = $('<div></div>');
      $user.append("<h3>User Options: What you can do with the data our product collects</h3>");
      $user.append("<p>Can you access, edit, share, or delete the data our product has about you?</p>");
      if (mpnData.user.hasOptions === 'Yes') {
        $user.append("<p>Yes. You can...</p>");
        if (mpnData.user.access) {
          $user.append("<p>Access the data</p>");
        }
        if (mpnData.user.edit) {
          $user.append("<p>Edit the data</p>");
        }
        if (mpnData.user.share) {
          $user.append("<p>Share the data</p>");
        }
        if (mpnData.user.delete) {
          $user.append("<p>Delete the data</p>");
        }
      } else if (mpnData.user.hasOptions === 'No') {
        $user.append("<p>No</p>");
      }
      // Deactivation Info
      var $deactivation = $('<div></div>');
      $deactivation.append("<h3>Deactivation: What happens to your data when your account is deactivated</h3>");
      $deactivation.append("<p>When your account is deactivated/terminated (by you or by the company), your data is…</p>");
      if (mpnData.deactivation.action) {
        switch (mpnData.deactivation.action) {
          case "deleteImmediately":
            $deactivation.append("<p>Deleted Immediately</p>");
            break;
          case "deleteAfterXYears":
            $deactivation.append("<p>Deleted After " + mpnData.deactivation.numYears + " years</p>");
            break;
          case "neverDelete":
            $deactivation.append("<p>Permanently retained and used</p>");
            break;
          case "deleteOnRequest":
            $deactivation.append("<p>Retained and used until the user requests deletion</p>");
            break;
        }
      }
      // Policy Info
      var $policy = $('<div></div>');
      $policy.append("<h3>Policy Changes: How we will notify you if our privacy policy changes</h3>");
      if (mpnData.policy.notificationMethod) {
        var $formText = $('<p>').text(mpnData.policy.notificationMethod);
        $policy.append($formText);
      }
      // Breach Info
      var $breach = $('<div></div>');
      $breach.append("<h3>Breach: How we will notify you and protect your data in case of an improper disclosure</h3>");
      if (mpnData.breach.procedure) {
        var $formText = $('<p>').text(mpnData.breach.procedure);
        $breach.append($formText);
      }
      // Contact Info
      var $contact = $('<div></div>');
      $contact.append("<h3>Contact Information</h3>");
      if (mpnData.contact.name) {
        var $formText = $('<p>').text("Name: " + mpnData.contact.name);
        $contact.append($formText);
      }
      if (mpnData.contact.privacyPolicy) {
        var $formText = $('<p>').text("Link to full privacy policy: " + mpnData.contact.privacyPolicy);
        $contact.append($formText);
      }
      if (mpnData.contact.onlineComments) {
        var $formText = $('<p>').text("Link to Online Comment/Contact Form: " + mpnData.contact.onlineComments);
        $contact.append($formText);
      }
      if (mpnData.contact.email) {
        var $formText = $('<p>').text("Email Address: " + mpnData.contact.email);
        $contact.append($formText);
      }
      if (mpnData.contact.phone) {
        var $formText = $('<p>').text("Phone Number: " + mpnData.contact.phone);
        $contact.append($formText);
      }
      if (mpnData.contact.address) {
        var $formText = $('<p>').text("Address: " + mpnData.contact.address);
        $contact.append($formText);
      }
      // Compile all summary sections
      $summary.append($title)
              .append($hipaa)
              .append($use)
              .append($share)
              .append($sell)
              .append($store)
              .append($encryption)
              .append($privacy)
              .append($user)
              .append($deactivation)
              .append($policy)
              .append($breach)
              .append($contact);
    }

    this.viewLock = function() {
      self.current = 'lock';
      var rotateFactor = 5;
      var rectWidth = 104;
      var shiftX = 0;
      var textShiftX = 20;
      var myCanvas = document.getElementById('previewCanvas');
      var ctx = myCanvas.getContext('2d');
      ctx.font = '14px Arial';
      ctx.clearRect(0, 0, 400, 500);
      ctx.strokeRect(40, 250, 320, 230);
      // ctx.strokeRect(40, 300, 20, -rectWidth);
      ctx.save();
      ctx.translate(40, 250);
      ctx.rotate(-1 * Math.PI / 2);
      ctx.fillText("HIPAA", 5 + textShiftX, 15);
      ctx.translate(rectWidth + shiftX, 0);
      ctx.rotate(Math.PI / rotateFactor);
      // ctx.strokeRect(0, 0, rectWidth, 20);
      ctx.fillText("USE", 13 + textShiftX, 15);
      ctx.translate(rectWidth + shiftX, 0);
      ctx.rotate(Math.PI / rotateFactor);
      // ctx.strokeRect(0, 0, rectWidth, 20);
      ctx.fillText("DEACTIVATE", -10 + textShiftX, 15);
      ctx.translate(rectWidth + shiftX, 0);
      ctx.rotate(Math.PI / rotateFactor);
      // ctx.strokeRect(0, 0, rectWidth, 20);
      ctx.fillText("SELL", 13 + textShiftX, 15);
      ctx.translate(rectWidth + shiftX, 0);
      ctx.rotate(Math.PI / rotateFactor);
      // ctx.strokeRect(0, 0, rectWidth, 20);
      ctx.fillText("STORE", 5 + textShiftX, 15);
      ctx.translate(rectWidth + shiftX, 0);
      ctx.rotate(Math.PI / rotateFactor);
      // ctx.strokeRect(0, 0, rectWidth, 20);
      ctx.fillText("ENCRYPT", 0 + textShiftX, 15);
      ctx.restore();
      var rotateFactor2 = 5;
      var rectWidth2 = 85;
      var shiftX2 = 0;
      var textShiftX2 = 5;
      ctx.font = '13px Arial';
      // ctx.strokeRect(70, 250, 20, -rectWidth2);
      ctx.save();
      ctx.translate(70, 250);
      ctx.rotate(-1 * Math.PI / 2);
      ctx.fillText("PRIVACY", 5 + textShiftX2, 15);
      ctx.translate(rectWidth2 + shiftX2, 0);
      ctx.rotate(Math.PI / rotateFactor2);
      // ctx.strokeRect(0, 0, rectWidth2, 20);
      ctx.fillText("USER", 15 + textShiftX2, 15);
      ctx.translate(rectWidth2 + shiftX2, 0);
      ctx.rotate(Math.PI / rotateFactor2);
      // ctx.strokeRect(0, 0, rectWidth2, 20);
      ctx.fillText("SHARE", 10 + textShiftX2, 15);
      ctx.translate(rectWidth2 + shiftX2, 0);
      ctx.rotate(Math.PI / rotateFactor2);
      // ctx.strokeRect(0, 0, rectWidth2, 20);
      ctx.fillText("POLICY", 10 + textShiftX2, 15);
      ctx.translate(rectWidth2 + shiftX2, 0);
      ctx.rotate(Math.PI / rotateFactor2);
      // ctx.strokeRect(0, 0, rectWidth2, 20);
      ctx.fillText("BREACH", 5 + textShiftX2, 15);
      ctx.translate(rectWidth2 + shiftX2, 0);
      ctx.rotate(Math.PI / rotateFactor2);
      // ctx.strokeRect(0, 0, rectWidth2, 20);
      ctx.fillText("CONTACT", 5 + textShiftX2, 15);
      ctx.restore();
      ctx.beginPath();
      ctx.arc(200, 190, 160, Math.PI, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(200, 190, 80, Math.PI, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(40, 190);
      ctx.lineTo(40, 250);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(120, 190);
      ctx.lineTo(120, 250);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(280, 190);
      ctx.lineTo(280, 250);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(360, 190);
      ctx.lineTo(360, 250);
      ctx.stroke();
    }
});
