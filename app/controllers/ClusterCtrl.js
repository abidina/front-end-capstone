"use strict";

app.controller("ClusterCtrl", function($scope, $rootScope, $location, $routeParams, firebaseURL, AuthFactory, APIFactory, ImgurFactory, ClusterFactory) {
  
    // VARIABLES
  // $scope.selectedImgur = {};
  // $scope.imgursInCluster = [];
  $scope.selectedCluster = {};
  $scope.userClusters = [];
  $scope.selectedCluster = {};
  // $scope.welcome = "Hello Clusters.";

  $scope.editedCluster = {};

  $scope.newCluster = {
    title:"",
    uid:""
  };


// DISPLAY USER CLUSTERS
  ClusterFactory.getUserClusters()
    .then(function(clusterCollection) {
      // console.log("clusterCollection", clusterCollection);
      $scope.userClusters = clusterCollection;
      // console.log("userClusters", $scope.userClusters);
    });

// ADDING
  $scope.addNewCluster = () => {
    // console.log("click");
    ClusterFactory.addNewCluster($scope.newCluster)
      .then(() => {
        Materialize.toast("Added new Cluster!", 4000, 'blue-accent-1');
      });
  };

// DELETING 
  $scope.selectedCluster = $scope.userClusters.filter(function(cluster) { // WHY CAN'T IT FIND THE USER CLUSTERS :(
    return cluster.id === $routeParams.clusterId; 
  })[0];

  
  $scope.clusterDelete = (clusterId) => {
    // console.log("clusterId", clusterId); 
    ClusterFactory.deleteCluster(clusterId).then(function(response){
      ClusterFactory.getUserClusters().then(function(clusterCollection){
        $scope.userClusters = clusterCollection;
      });
    });
  };

// EDIT CLUSTER TITLE
  // ClusterFactory.getSpecificCluster($routeParams.clusterId)
  //   .then(function successCallback(response) {
  //     $scope.editedCluster=response;
  //   });

  // $scope.addEditedCluster = (clusterId) => {
  //   ClusterFactory.updateClusterTitle($routeParams.clusterId, $scope.editedCluster)
  //     .then (function successCallback(response) {
  //       $location.url("/clusters-view");
  //     });
  // };


});
