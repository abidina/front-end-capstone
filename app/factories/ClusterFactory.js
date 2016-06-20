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
  // let myCluster = () =>  


  return{addToCluster:addToCluster}; //myCluster:myCluster, 
});