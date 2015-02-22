'use strict';

angular.module('codecloudFullstackApp')
  .controller('MainCtrl', function ($scope, $http, Auth, AppState, $location) {
    // bind with service to share global app state
    $scope.appState = AppState;
    // setup user snippet
    $scope.userSnippets = {};
    // get current user 
    $scope.getCurrentUser = Auth.getCurrentUser;
    // get current user ID
    $scope.CurrentUserID = $scope.getCurrentUser()._id;
    //console.log("userID: " + $scope.CurrentUserID);
    // determine is a user is logged in
    $scope.isLoggedIn = Auth.isLoggedIn;
    // if user is logged in - retrieve user snippets
    if ($scope.isLoggedIn){
      // if user logged in then request
      $http.get('/api/snippets/'+$scope.CurrentUserID).success(function(userSnippets) {
        // Assign results to userSnippets
        $scope.userSnippets = userSnippets;
        //console.log($scope.userSnippets);
      }).success(function(snippetResponse) {
        // handle errors
      }).error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    }



    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  });
