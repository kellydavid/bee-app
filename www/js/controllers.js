angular.module('starter.controllers', [])

.controller('TasksCtrl', function($scope) {})

.controller('SortCtrl', function($scope) {})

.controller('ProfileCtrl', function($scope) {})

.controller('AnalysisCtrl', function($scope, $state) {

  $scope.goToAnalysisSelect = function() {
      $state.go('tab.analysis-select');  
  }
})

.controller('AnalysisSelectCtrl', function($scope) {});
