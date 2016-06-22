"use strict";

app.controller("ClusterCtrl", function($scope, $rootScope, $location, firebaseURL, AuthFactory, APIFactory, ImgurFactory, ClusterFactory) {
  $scope.welcome = "Hello Clusters.";

  $scope.newCluster = {
    title:"",
    uid:""
  };

    $scope.addNewCluster = () => {
      console.log("click for cluster");
      ClusterFactory.addNewCluster($scope.newCluster)
        .then(() => {
          Materialize.toast("Added new Cluster!", 4000, 'blue-accent-1');
        });
  };
  });
