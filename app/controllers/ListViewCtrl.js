"use strict";

app.controller("ListViewCtrl", function($scope, $rootScope, $location, firebaseURL, AuthFactory, APIFactory, ClusterFactory) {
  $scope.welcome = "Hello Other Humans.";
  // DISPLAY USER CLUSTER/S

  // $scope.addToCluster = (imgur) => {
  //       console.log("clicked for firebase");
  //   ClusterFactory.addToCluster(imgur)
  //     .then(() => {
  //       Materialize.toast("Added to Cluster!", 4000, 'blue-accent-1');
  //     });
  // };
});
