"use strict";

app.controller("ListViewCtrl", function($scope, $rootScope, $routeParams, $location, firebaseURL, AuthFactory, APIFactory, ClusterFactory) {
  // VARIABLES
  $scope.imgursInCluster = [];
  $scope.selectedImgur = {};
  $scope.welcome = "This isn't gonna work.";

  // DISPLAY USER CLUSTER/S
  ClusterFactory.getUserCluster()
    .then(function(imgurCollection) {
      console.log("imgurCollection", imgurCollection);
      $scope.imgursInCluster = imgurCollection;
      console.log("imgursInCluster", $scope.imgursInCluster);
    });


// DELETE image from cluster

  $scope.selectedImgur = $scope.imgursInCluster.filter(function(imgur) {
    return imgur.id === $routeParams.imgurId;
    console.log($routeParams.imgurId);
  })[0];

  
$scope.imgurDelete = (imgurId) => {
  console.log("imgurId", imgurId); //still undefined
  ClusterFactory.deleteImgur(imgurId).then(function(response){
    ClusterFactory.getUserCluster().then(function(imgurCollection){
      $scope.imgursInCluster = imgurCollection;
    });
  });
};

// $scope.imgurDelete = ($index) => {
//   console.log("index", $index);
//   ClusterFactory.deleteImgur($scope.imgursInCluster[$index].id).then(function(response){
//     ClusterFactory.getUserCluster();
//     // .then(function(imgurCollection){
//     //   $scope.imgursInCluster = imgurCollection;
//     // });
//   });
// };

});
