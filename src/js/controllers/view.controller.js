angular.module('mpn-generator').controller('viewCtrl', function($state, $scope, JSONService) {
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

    this.viewAnimated = function() {
      self.current = 'animate';
      // The selector for the container where the summary will be viewed. Ex) #idName, .className
      var containerSelector = '.animatedPreview';
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

      $summary.css({
        'background': 'beige',
        'width': '400px',
        'font-size': '13px'
      });
      $('.animatedPreview h3').css({
        'font-weight': 'bold'
      });
      $('.animatedPreview div').css({
        'margin': '10px'
      });
    }
});
