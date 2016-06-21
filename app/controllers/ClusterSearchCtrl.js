"use strict";

app.controller("ClusterSearchCtrl", function($scope, $rootScope, $location, firebaseURL, AuthFactory, APIFactory, ClusterFactory) {
  $scope.welcome = "Hello Humans.";
  let imagesFromImgur = [];
  $scope.imgurs = [];

  $scope.getImages = () =>{
    console.log("click");
      APIFactory.imageList($scope.searchText)
      .then((dataFromImgur) =>{
        $scope.imgurs = dataFromImgur.data.data.items;
        console.log('imgurs',  $scope.imgurs);
      });
  };

  $scope.addToCluster = (imgur) => {
        console.log("clicked for firebase");
    ClusterFactory.addToCluster(imgur)
      .then(() => {
        Materialize.toast("Added to Cluster!", 4000, 'blue-accent-1');
      });
  };
});
