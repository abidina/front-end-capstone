"use strict";

app.controller("ClusterSearchCtrl", function($scope, $rootScope, $location, firebaseURL, AuthFactory, APIFactory) {
  $scope.welcome = "Hello Humans.";
  $scope.getImages = () =>{
      APIFactory.imageList($scope.searchText)
      .then((imageResultsFromDatabase) =>{
        console.log($scope.searchText);
        // $scope.imageResultsFromDatabase.Search.forEach((image) => {
        //   $rootScope.imageResultsFromDatabase.push(image);
        // });
        // $rootScope.imageResultsFromDatabase.forEach((image))
      })
  }
});

// SEARCH IMGUR
// $scope.makeRequesttoDatabase = () => {
//   APIFactory.imageList($scope.searchText)
//     .then((imageResultsFromDatabase) => {
//       $scope.imageResultsFromDatabase.Search.forEach((image) => {
//         $rootScope.imageResultsFromDatabase.push(image);
//       });
//       $rootScope.imageResultsFromDatabase.forEach((image))
//     })
// }