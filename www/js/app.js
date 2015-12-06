// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'chart.js', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
  if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
    cordova.plugins.Keyboard.disableScroll(true);
  }
  if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    localStorage.clear();
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  // **** Login
  .state('login', {
    url: '/login',
    controller: 'loginCtrl',
    templateUrl: 'templates/loginPage.html'
  })

  .state('signup', {
    url: '/signup',
    controller: 'loginCtrl',
    templateUrl: 'templates/signupPage.html'
  })


  // **** Tasks
  .state('imageDescription', {
    url: '/imageDescription',
    templateUrl: 'templates/imageDescription.html'
  })

  .state('tab.imageDescription', {
    url: '/task/imageDescription',
    views: {
      'tasks': {
        templateUrl: 'templates/imageDescription.html'
      }
    }
  })
  
  .state('imageSelect', {
    url: '/imageSelect',
    templateUrl: 'templates/imageSelect.html'
  })

  .state('tab.imageSelect', {
    url: '/task/imageSelect',
    views: {
      'tasks': {
        templateUrl: 'templates/imageSelect.html'
      }
    }
  })

  .state('tab.tasks', {
    url: '/tasks',
    views: {
      'tasks': {
        templateUrl: 'templates/tasks.html',
        controller: 'TasksCtrl'
      }
    }
  })

  .state('tab.expertTasks', {
    url: '/expertTasks',
    cache: false,
    views: {
      'tasks': {
        templateUrl: 'templates/expertTasks.html',
        controller: 'TasksCtrl'
      }
    }
  })

  .state('tab.editTask', {
    url: '/editTask/:id',
    views: {
      'tasks': {
        templateUrl: 'templates/editTask.html',
        controller: 'EditTaskCtrl'
      }
    }
  })

  .state('tab.newTask', {
    url: '/newTask',
    views: {
      'tasks': {
        templateUrl: 'templates/addTask.html',
        controller: 'NewTaskCtrl'
      }
    }
  })

  .state('tab.task', {
    url: '/task/:id',
    views: {
      'tasks': {
        templateUrl: 'templates/tasks-task.html',
        controller: 'TaskCtrl'
      }
    }
  })

  // **** Sort
  .state('tab.sort', {
    url: '/sort',
    views: {
      'sort': {
        templateUrl: 'templates/sort.html',
        controller: 'SortCtrl'
      }
    }
  })

  .state('tab.sort-item', {
    cache: false,
    url: '/sort-item/:sortId',
    views: {
      'sort': {
        templateUrl: 'templates/sort-item.html',
        controller: 'sortItemCtrl'
      }
    }
  })

  .state('tab.sort-add', {
    url: '/sort-add/:beeId',
    views: {
     'sort': {
       templateUrl:'templates/sort-add.html',
       controller: 'sortAddCtrl'
     }
   }
 })

  // **** Profile
  .state('tab.profile', {
    url: '/profile',
    views: {
      'profile': {
        templateUrl: 'templates/profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })

  .state('tab.profile-leaderboard', {
    url: '/profile-leaderboard',
    views: {
      'profile': {
        templateUrl: 'templates/profile-leaderboard.html',
        controller: 'ProfileLeaderboardCtrl'
      }
    }
  })

  .state('tab.profile-leader', {
    url: '/profile-leader/:leaderId',
    views: {
      'profile': {
        templateUrl: 'templates/profile-leader.html',
        controller: 'ProfileLeaderCtrl'
      }
    }
  })

  // **** Analysis 
  .state('tab.analysis', {
    url: '/analysis',
    views: {
      'analysis': {
        templateUrl: 'templates/analysis.html',
        controller: 'AnalysisCtrl'
      }
    }
  })

  .state('tab.analysis-select', {
    url: '/analysis-select',
    views: {
      'analysis': {
        templateUrl: 'templates/analysis-select.html',
        controller: 'AnalysisSelectCtrl'
      }
    }
  })

  .state('tab.analysis-choice', {
    url: '/analysis-choice',
    views: {
      'analysis': {
        templateUrl: 'templates/analysis-choice.html',
        controller: 'AnalysisChoiceCtrl'
      }
    }
  })

  .state('tab.analysis-vis-lg', {
    url: '/analysis-vis-lg',
    views: {
      'analysis': {
        templateUrl: 'templates/analysis-vis-lg.html',
        controller: 'AnalysisVisLineGraphCtrl'
      }
    }
  })

  .state('tab.analysis-vis-bg', {
    url: '/analysis-vis-bg',
    views: {
      'analysis': {
        templateUrl: 'templates/analysis-vis-bg.html',
        controller: 'AnalysisVisBarGraphCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
