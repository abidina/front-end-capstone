"use strict";

app.controller("ClusterCtrl", function($scope, $rootScope, $location, firebaseURL, AuthFactory, APIFactory, ImgurFactory, ClusterFactory) {
  
  $scope.userClusters = [];
  $scope.selectedCluster = {};
  $scope.welcome = "Hello Clusters.";

  $scope.newCluster = {
    title:"",
    uid:""
  };

// ADDING
  $scope.addNewCluster = () => {
    console.log("click for cluster");
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
    console.log("clusterId", clusterId); 
    ClusterFactory.deleteCluster(clusterId).then(function(response){
      ClusterFactory.getUserClusters().then(function(clusterCollection){
        $scope.userClusters = clusterCollection;
      });
    });
  };

// EDIT CLUSTER TITLE



});
