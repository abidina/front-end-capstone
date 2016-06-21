"use strict";

app.factory("ClusterFactory", function($q, $http, firebaseURL, AuthFactory, APIFactory){

// ADD IMAGE TO CLUSTER
let addToCluster = (imgur) => {
  let user = AuthFactory.getUser();
  console.log(imgur);

  return $q(function(resolve, reject) {
    $http.post(`${firebaseURL}imgurs.json`,
      JSON.stringify({
        URL:imgur.link,
        uid:user.uid
      }))
    .success(function(response){
      resolve(response);
    })
    .error(function(error){
      reject(error);
    });
  });
};

// DELETE IMAGE FROM CLUSTER


// FIREBASE: RETRIEVES CLUSTER FOR EACH LOGGED-IN USER FROM DATABASE
  let getUserCluster = () =>  {
    let user = AuthFactory.getUser();
    let imgursInCluster = [];

    return $q(function(resolve, reject){
      $http.get(`${firebaseURL}imgurs.json?orderBy="uid"&equalTo="${user.uid}"`)
        .success(function(returnObject){
          var imgurCollection = returnObject;
          console.log(imgurCollection);
          Object.keys(imgurCollection).forEach(function(key){
            imgurCollection[key].id=key;
            imgursInCluster.push(imgurCollection[key]);
          });
            resolve(imgursInCluster);
        })
        .error(function(error){
          reject(error);
        });
    });
  };


  return{getUserCluster:getUserCluster, addToCluster:addToCluster}; 
});