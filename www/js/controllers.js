angular.module('starter.controllers', [])

.controller('TasksCtrl', function($scope) {})

.controller('SortCtrl', function($scope) {})

.controller('ProfileCtrl', function($scope, $state) {

  $scope.goToLeaderboard = function() {
      $state.go('tab.profile-leaderboard');  
  }
})

.controller('ProfileLeaderboardCtrl', function($scope) {})

.controller('AnalysisCtrl', function($scope, $state) {

  $scope.goToAnalysisSelect = function() {
      $state.go('tab.analysis-select');  
  }

  $scope.goToAnalysisChoice = function() {
      $state.go('tab.analysis-choice');  
  }
})

.controller('AnalysisSelectCtrl', function($scope, $state) {

  $scope.doneSelectFilters = function() {
      $state.go('tab.analysis');  
  }
})

.controller('AnalysisChoiceCtrl', function($scope, $state) {});
