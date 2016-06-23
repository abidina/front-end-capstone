"use strict";

app.controller("ImgurSearchCtrl", function($scope, $rootScope, $location, firebaseURL, AuthFactory, APIFactory, ImgurFactory) {
  $scope.welcome = "Hello Humans.";
  let imagesFromImgur = [];
  $scope.imgurs = [];


  $(document).ready(function() {
    $('select').material_select();
  });
            
  
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
    ImgurFactory.addToCluster(imgur)
      .then(() => {
        Materialize.toast("Added to Cluster!", 4000, 'blue-accent-1');
      });
  };
});
