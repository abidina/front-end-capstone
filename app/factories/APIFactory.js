"use strict";

app.factory("APIFactory", function($q, $http){
  let apiKeys = {};



  
  let imageList = (searchText) => {
    return $q(function(resolve, reject){
      $http({
        method: 'GET',
        url: `/app/apikeys.json`
      }).then(function successCallback(response) { // THIS IS TO MAKE SURE CLIENT ID IS PUSHED UP FIRST SO YOU CAN ACCESS IMGUR API
          apiKeys = response.data.config;
          let authHeader = 'Client-ID '+apiKeys.client_id;
          $http({
          method: 'GET',
          headers: {
            'Authorization': authHeader
          }, // SEARCH API BASED ON USER SEARCH TEXT
          url: `https://api.imgur.com/3/gallery/t/${searchText}`
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
          resolve(response);
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        reject(response);
      });

      }, function errorCallback(response) {
      });
      
    });
  };

  return {imageList:imageList};

});