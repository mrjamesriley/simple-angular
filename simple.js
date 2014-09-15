var app = angular.module('SimpleApp', []);

app.controller('SimpleController', function($scope, GithubUsers) {

  $scope.usernameKeypress = function(e) {
    if(e.which == 13) { $scope.loadUser($('#username').val()); }
  }

  $scope.loadUser = function(username) {
    GithubUsers.getUser(username).success(function(data) {
      $scope.profile = data;
    });;
  }

});

app.factory('GithubUsers', function($http) {
  return {
    getUser: function(username) {
      return $http({
        method: 'GET',
        url: 'https://api.github.com/users/' + username,
        cache: true
      })
    }
  }

});
