"use strict";

app.controller("ListViewCtrl", function($scope, $rootScope, $routeParams, $location, firebaseURL, AuthFactory, APIFactory, ImgurFactory) {
  // VARIABLES
  $scope.imgursInCluster = [];
  $scope.selectedImgur = {};
  $scope.welcome = "This isn't gonna work.";

  // DISPLAY USER CLUSTER/S
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
  console.log("imgurId", imgurId); //still undefined
  ImgurFactory.deleteImgur(imgurId).then(function(response){
    ImgurFactory.getUserImgurs().then(function(imgurCollection){
      $scope.imgursInCluster = imgurCollection;
    });
  });
};



});
