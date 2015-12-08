angular.module('starter.controllers', [])

// *** Tasks
.controller('TasksCtrl', function($scope, $state, $ionicPopup, Tasks, Expert) {
  $scope.tasks = Tasks.all();
  $scope.expert = Expert.isExpert();
  
  $scope.data = {
    showDelete: false
  };

  $scope.goToNewTask = function(){
    $state.go('tab.newTask');
  }

  $scope.goToEditTask = function(id){
    $state.go('tab.editTask', {id:id})
  }

  $scope.goToTask = function(id){
    $state.go('tab.task', {id:id});
  }

  $scope.deleteTask = function(task) {

   var confirmDeletePopup = $ionicPopup.confirm({
     title: 'Delete Task',
     template: 'Are you sure you want to delete this task?'
   });
   
   confirmDeletePopup.then(function(res) {
     if(res) {
       $scope.tasks.splice($scope.tasks.indexOf(task), 1);
       Tasks.save($scope.tasks);
       console.log('Task Deleted');
     } else {
       console.log('Task Not Deleted');
     }
   });
  }

})

.controller('TaskCtrl', function($scope, $state, $stateParams, Tasks) {
  $scope.task = Tasks.get($stateParams.id);

  $scope.goToImageSelect = function(){
    $state.go('tab.imageSelect');
  }
})

.controller('TaskImageSelectCtrl', function($scope, $state) {

  $scope.goToImageDescription = function(){
    $state.go('tab.imageDescription')
  }
})

.controller('TaskImageDescriptionCtrl', function($scope, $state, $ionicHistory) {

  $scope.clickedUpload = function(){
    $ionicHistory.goBack(-2);
  }
})

.controller('EditTaskCtrl', function($scope, $state, $stateParams, Tasks) {
  var task = Tasks.get($stateParams.id);
  $scope.task = task;
  $scope.formData = {}
  $scope.formData.task = task;
  $scope.formData.taskName = task.taskName;
  $scope.formData.shortDesc = task.shortDescription;
  $scope.formData.desc = task.taskDescription;
  $scope.formData.deadline = new Date(task.deadline);

  $scope.updateTask = function(id){
    Tasks.update(id, $scope.formData.taskName, $scope.formData.shortDesc, $scope.formData.desc, $scope.formData.deadline);
    $scope.tasks = Tasks.all();
    $state.go('tab.tasks');
  };
  $scope.deleteTask = function(id){
    Tasks.remove(id);
    $scope.tasks = Tasks.all();
    $state.go('tab.tasks');
  };
})

.controller('NewTaskCtrl', function($scope, $state, $stateParams, Tasks) {

  $scope.addTask = function(taskName, shortDesc, desc, deadline){
    Tasks.insert(taskName, shortDesc, desc, deadline);
    $state.go('tab.tasks');
  }
})


// **** Sort
.controller('SortCtrl', function($scope) {})

.controller("sortCtrl", function($scope, $state, UnsortedBees) {
  $scope.bees = UnsortedBees.all();
  $scope.clickGridItem = function($index) {
    $state.go('tab.sort-item', {sortId: $index});
  }
})

.controller('sortItemCtrl', function($scope, $state, $stateParams, UnsortedBees, Tags) {
  $scope.bee = UnsortedBees.get($stateParams.sortId);
  $scope.tags = Tags.all($stateParams.sortId);
  $scope.clickAddButton = function() {
    $state.go('tab.sort-add', {beeId: $stateParams.sortId});
  }
})

.controller('sortAddCtrl', function($scope, $state, $stateParams, UnsortedBees, Categories, Tags) {
  $scope.bee = UnsortedBees.get($stateParams.beeId);
  $scope.categories = Categories.all();
  $scope.numAdded = 0;
  $scope.numAddedText = "";
  $scope.formData = {};
  $scope.tags = Tags.all($stateParams.beeId);
  $scope.clickAddButton = function() {
    var newTag = Tags.newTag();
    newTag.tag = $scope.formData.text;
    newTag.category = $scope.formData.category;
    $scope.tags.push(newTag);
    Tags.save($scope.tags, $stateParams.beeId);
    $scope.formData = {};
    $scope.numAdded += 1;
    if ($scope.numAdded == 1) {
      $scope.numAddedText = "1 category added";
    } else {
      $scope.numAddedText = $scope.numAdded+" categories added";
    }
  }
})

// **** Profile
.controller('ProfileCtrl', function($scope, $state) {

  $scope.goToLeaderboard = function() {
    $state.go('tab.profile-leaderboard');  
  }

  $scope.goToLogin = function(){
    $state.go('login');
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

.controller('AnalysisChoiceCtrl', function($scope, $state) {
  $scope.goToLineGraph = function(){
    $state.go('tab.analysis-vis-lg');
  }
  $scope.goToBarGraph = function(){
    $state.go('tab.analysis-vis-bg');
  }
})


.controller('AnalysisVisLineGraphCtrl', function($scope, $state) {

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
  [65, 59, 80, 81, 56, 55, 40],
  [28, 48, 40, 19, 86, 27, 90]
  ];
})

.controller('AnalysisVisBarGraphCtrl', function($scope, $state) {

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
  [65, 59, 80, 81, 56, 55, 40],
  [28, 48, 40, 19, 86, 27, 90]
  ];
})

// **** Login
.controller('loginCtrl', function($scope, $state, $stateParams, Expert) {
  $scope.goToTasks = function(name){
    if (name == "Eden"){
      Expert.setExpert(true);
    } else {
      Expert.setExpert(false);
    }
    $state.go('tab.tasks');
  }

});

