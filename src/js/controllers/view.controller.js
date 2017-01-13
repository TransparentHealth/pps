angular.module('mpn-generator').controller('viewCtrl', function($state, $scope, JSONService) {
    var self = this;
    var mpnData = JSONService.getData();
    this.current = null;
    this.jsonPreview = "";

    this.viewJSON = function() {
      self.current = 'json';
      self.jsonPreview = JSON.stringify(mpnData);
      console.log(JSON.stringify(mpnData));
    };

    this.viewSummary = function() {
      self.current = 'summary';
      // The selector for the container where the summary will be viewed. Ex) #idName, .className
      var containerSelector = '.summaryPreview';
      var $summary = $(containerSelector).html('');
      // Summary Title
      var $title = $('<p>Summary</p>');
      // HIPAA Info
      var $hipaa = $('<p>HIPAA Protection of Data</p>');
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
      var $use = $("<p>Using Data: How we use your data internally</p>")
      // Compile all summary sections
      $summary.append($title)
              .append($hipaa)
              .append($use);
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
