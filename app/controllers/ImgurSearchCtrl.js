"use strict";

app.controller("ImgurSearchCtrl", function($scope, $rootScope, $location, firebaseURL, AuthFactory, APIFactory, ImgurFactory, ClusterFactory) {
  $scope.welcome = "Hello Humans.";
  let imagesFromImgur = [];
  $scope.imgurs = [];
  $scope.clusters = [];


  $(document).ready(function() {
    $('select').material_select();
  });
            

// DISPLAY USER CLUSTERS
  ClusterFactory.getUserClusters()
    .then(function(clusterCollection) {
      $scope.clusters = clusterCollection;
    });



  $scope.getImages = () =>{
    console.log("click");
      APIFactory.imageList($scope.searchText)
      .then((dataFromImgur) =>{
        $scope.imgurs = dataFromImgur.data.data.items;
        console.log('imgurs',  $scope.imgurs);
      });
  };

  $scope.addToCluster = (imgur, clusterId) => {
        console.log("clicked for firebase");
    ImgurFactory.addToCluster(imgur, clusterId)
      .then(() => {
        Materialize.toast("Added to Cluster!", 4000, 'blue-accent-1');
      });
  };
});
