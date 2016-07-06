"use strict";

var app = angular.module("ClusterApp", ["ngRoute", "ngAnimate", "ngTouch", "ui.materialize"])
  .constant("firebaseURL", "https://capstone-cluster.firebaseio.com/");

  let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
    if (AuthFactory.isAuthenticated()) {
        resolve();
    } else {
        reject();    
    }
});

/*------ trying to get the sidebar collapse to work for mobile, forces jquery use? -------*/
$(document).ready(function() {
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
});

// ROUTING HERE
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/cluster-view.html",
            controller:  "ClusterCtrl",
            resolve: {isAuth}
        })        
        .when("/cluster-list", {
            templateUrl: "partials/cluster-view.html",
            controller:  "ClusterCtrl",
            resolve: {isAuth}
        })
        .when("/cluster/:id", {
            templateUrl: "partials/cluster-details.html",
            controller:  "ClusterDetailCtrl",
            resolve: {isAuth}
        })
        // .when("/cluster-list/:id/edit", {
        //     templateUrl: "partials/cluster-edit.html",
        //     controller:  "ClusterCtrl",
        //     resolve: {isAuth}
        // })
        .when("/search", {
            templateUrl: "partials/search.html",
            controller:  "ImgurSearchCtrl",
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



app.run(($location) => {
  let todoRef = new Firebase("https://capstone-cluster.firebaseio.com/");

  todoRef.onAuth((authData => {
    if (!authData) {
      $location.path("/login");
    }
  }));

});

