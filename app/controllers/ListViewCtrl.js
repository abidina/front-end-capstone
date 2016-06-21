"use strict";

app.controller("ListViewCtrl", function($scope, $rootScope, $location, firebaseURL, AuthFactory, APIFactory, ClusterFactory) {
  // VARIABLES
  $scope.imgursInCluster = [];

  $scope.welcome = "This isn't gonna work.";

  // DISPLAY USER CLUSTER/S
  // $scope.showCluster = () => {
    ClusterFactory.getUserCluster()
      .then(function(imgurCollection) {
        console.log("imgurCollection", imgurCollection);
        $scope.imgursInCluster = imgurCollection;
        console.log("imgursInCluster", $scope.imgursInCluster);
      });
  // };

});
