"use strict";

app.controller("ClusterDetailCtrl", function($scope, $rootScope, $routeParams, $location, firebaseURL, AuthFactory, APIFactory, ImgurFactory, ClusterFactory) {
  // VARIABLES
  $scope.imgursInCluster = [];
  $scope.selectedImgur = {};
  $scope.selectedCluster = {};

  ClusterFactory.getSpecificCluster($routeParams.id)
    .then(function(cluster) {
      $scope.selectedCluster = cluster;
    });

  // DISPLAY USER IMGUR/S
  ImgurFactory.getUserImgurs()
    .then(function(imgurCollection) {
      console.log("imgurCollection", imgurCollection);
      $scope.imgursInCluster = imgurCollection;
      console.log("imgursInCluster", $scope.imgursInCluster);
    });


// DELETE image from cluster
  $scope.selectedImgur = $scope.imgursInCluster.filter(function(imgur) {
    return imgur.id === $routeParams.imgurId;
  })[0];

  
$scope.imgurDelete = (imgurId) => {
  console.log("imgurId", imgurId); 
  ImgurFactory.deleteImgur(imgurId).then(function(response){
    ImgurFactory.getUserImgurs().then(function(imgurCollection){
      $scope.imgursInCluster = imgurCollection;
    });
  });
};



});
