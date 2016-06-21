"use strict";

var app = angular.module("ClusterApp", ["ngRoute"])
  .constant("firebaseURL", "https://capstone-cluster.firebaseio.com/");

  let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
    if (AuthFactory.isAuthenticated()) {
        resolve();
    } else {
        reject();    
    }
});

// ROUTING HERE
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/cluster-list.html",
            controller:  "ListViewCtrl",
            resolve: {isAuth}
        })
        .when("/search", {
            templateUrl: "partials/search.html",
            controller:  "ClusterSearchCtrl",
            resolve: {isAuth}
        })
        .when("/login", {
            templateUrl: "partials/login.html",
            controller:  "LoginCtrl"
        })
        .when("/logout",{
            templateUrl: "partials/login.html",
            controller:  "LoginCtrl"
        })
        .when("/register", {
            templateUrl: "partials/login.html",
            controller:  "LoginCtrl"
        })
        .otherwise("/"); 
});


/*------ trying to get the sidebar collapse to work for mobile, forces jquery use? -------*/
// $(document).ready(function() {
//     $(".button-collapse").sideNav();
// });

app.run(($location) => {
  let todoRef = new Firebase("https://capstone-cluster.firebaseio.com/");

  todoRef.onAuth((authData => {
    if (!authData) {
      $location.path("/login");
    }
  }));

});

