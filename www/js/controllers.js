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
.controller('AnalysisCtrl', function($scope, $state, Filters) {

  $scope.filters = Filters.getAll();

  $scope.goToAnalysisSelect = function() {
      $state.go('tab.analysis-select');  
  }

  $scope.goToAnalysisChoice = function() {
      $state.go('tab.analysis-choice');  
  }
})

.controller('AnalysisSelectCtrl', function($scope, $state, Locations, Bees, Contexts, Filters) {
  $scope.locations = Locations.all();
  $scope.bees = Bees.all();
  $scope.contexts = Contexts.all();
  $scope.filters = Filters.getAll();
  $scope.selectedFilters = {};

  $scope.doneSelectFilters = function() {
      // Add location filter
      var filter = Filters.newFilter();
      filter.name = $scope.selectedFilters.slocation;
      if(filter.name != null) $scope.filters.push(filter);
      // add bee species filter
      filter = Filters.newFilter();
      filter.name = $scope.selectedFilters.bee;
      if(filter.name != null) $scope.filters.push(filter);
      // add context filter
      filter = Filters.newFilter();
      filter.name = $scope.selectedFilters.context;
      if(filter.name != null) $scope.filters.push(filter);

      Filters.save($scope.filters);
      $state.go('tab.analysis');  
  }
})

.controller('AnalysisChoiceCtrl', function($scope, $state) {});
