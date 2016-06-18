"use strict";

app.controller("ClusterSearchCtrl", function($scope, $rootScope, $location, firebaseURL, AuthFactory, APIFactory) {
  $scope.welcome = "Hello Humans.";
  let imagesFromDatabase = [];
  $scope.imgurs = [];

  $scope.getImages = () =>{
    console.log("click");
      APIFactory.imageList($scope.searchText)
      .then((dataFromDatabase) =>{
        $scope.imgurs = dataFromDatabase.data.data.items;
        console.log('imgurs',  $scope.imgurs);
        // $scope.imageObjectArray.forEach((image) => {
        //   $rootScope.imagesFromDatabase.push(image);
        // });
        // $rootScope.imagesFromDatabase.forEach((image))
      })
  }
});
