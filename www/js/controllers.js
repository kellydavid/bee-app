angular.module('starter.controllers', [])

// *** Tasks
.controller('TasksCtrl', function($scope) {})

// **** Sort
.controller('SortCtrl', function($scope) {})

// **** Profile
.controller('ProfileCtrl', function($scope, $state) {

  $scope.goToLeaderboard = function() {
      $state.go('tab.profile-leaderboard');  
  }
})

.controller('ProfileLeaderboardCtrl', function($scope, Leaderboard) {

  $scope.leaders = Leaderboard.allHighestKarma();
})

.controller('ProfileLeaderCtrl', function($scope, $stateParams, Leaderboard) {

  $scope.leader = Leaderboard.get($stateParams.leaderId);
})

// **** Analysis
.controller('AnalysisCtrl', function($scope, $state) {

  $scope.goToAnalysisSelect = function() {
      $state.go('tab.analysis-select');  
  }

  $scope.goToAnalysisChoice = function() {
      $state.go('tab.analysis-choice');  
  }
})

.controller('AnalysisSelectCtrl', function($scope, $state, Locations, Bees, Contexts) {
  $scope.locations = Locations.all();
  $scope.bees = Bees.all();
  $scope.contexts = Contexts.all();

  $scope.doneSelectFilters = function() {
      $state.go('tab.analysis');  
  }
})

.controller('AnalysisChoiceCtrl', function($scope, $state) {});
