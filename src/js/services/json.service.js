angular.module('mpn-generator').service('JSONService', function() {

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
