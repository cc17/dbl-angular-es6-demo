let module = angular.module('app.services');

function homeRequest($http){
  var xhrRequests = {
      fetchMainList: (options) => {
        return $http({
          method: 'GET',
          options:options,
          url: '/home.json'
        });
      }
  }
  return xhrRequests;
};

homeRequest.$inject = ['$http'];

module.factory('homeRequest',homeRequest);

