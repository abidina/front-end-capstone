"use strict";

app.factory("ClusterFactory", function($q, $http, firebaseURL, AuthFactory, APIFactory) {
//ADD A NEW CLUSTER
let addNewCluster = (newCluster) => {
  let user = AuthFactory.getUser();

  return $q(function(resolve, reject) {
    $http.post(`${firebaseURL}clusters.json`,
      JSON.stringify({
        title: newCluster.title,
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


// DELETE EXISTING CLUSTER
let deleteCluster = function(clusterId){
  return $q(function(resolve, reject) {
    $http
      .delete(`${firebaseURL}clusters/${clusterId}.json`)
      .success(function(objectFromFirebase) {
        resolve(objectFromFirebase);
      })
      .error(function(error){
        reject(error);
      });
  });
};


// FIREBASE: RETRIEVES CLUSTER INFO FOR EACH LOGGED-IN USER
  let getUserClusters = () =>  {
    let user = AuthFactory.getUser();
    let userClusters = [];

    return $q(function(resolve, reject){
      $http.get(`${firebaseURL}clusters.json?orderBy="uid"&equalTo="${user.uid}"`)
        .success(function(returnObject){
          var clusterCollection = returnObject;
          console.log(clusterCollection);
          Object.keys(clusterCollection).forEach(function(key){
            clusterCollection[key].id=key;
            userClusters.push(clusterCollection[key]);
          });
            resolve(userClusters);
        })
        .error(function(error){
          reject(error);
        });
    });
  };

// EDIT CLUSTER TITLE
let getSpecificCluster = (clusterId) => {
  return $q(function(resolve, reject) {
    $http.get(`${firebaseURL}clusters/${clusterId}.json`)
      .success(function(clusterObject) {
        resolve(clusterObject);
      })
      .error(function(error) {
        reject(error);
      });
  });
};

let updateClusterTitle = (clusterId, editedCluster) => {
  let user = AuthFactory.getUser();
  return $q(function(resolve, reject) {
    $http.put(`${firebaseURL}clusters/${clusterId}.json`,
      JSON.stringify({
        title: editedCluster.title,
        uid: user.uid
      })
    )
    .success(
      function(objectFromFirebase) {
        resolve(objectFromFirebase);
      });
  });
};

  

  return {getUserClusters:getUserClusters, addNewCluster:addNewCluster, deleteCluster:deleteCluster, getSpecificCluster:getSpecificCluster, updateClusterTitle:updateClusterTitle};
});
