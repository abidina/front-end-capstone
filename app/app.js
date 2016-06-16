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
        // .when("/", {
        //     templateUrl: "partials/watchList.html",
        //     controller:  "ListExternalCtrl",
        //     resolve: {isAuth}
        // })
        // .when("/search", {
        //     templateUrl: "partials/list.html",
        //     controller:  "ListExternalCtrl",
        //     resolve: {isAuth}
        // })
        // .when("/results", {
        //     templateUrl: "partials/list.html",
        //     controller:  "ListExternalCtrl",
        //     resolve: {isAuth}
        // })
        // .when("/watchlist",{
        //     templateUrl: "partials/watchlist.html",
        //     controller:  "ListExternalCtrl",
        //     resolve: {isAuth},
        //     reloadOnSearch: false
        // })
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



app.run(($location) => {
  let todoRef = new Firebase("https://capstone-cluster.firebaseio.com/");

  todoRef.onAuth((authData => {
    if (!authData) {
      $location.path("/login");
    }
  }));
});

