angular.module('starter.services', [])

.factory('Leaderboard', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var leaders = [{
    id: 0,
    name: 'Ben Sparrow',
    karma: 120,
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    karma: 34000,
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    karma: 32000,
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    karma: 27000,
    face: 'img/perry.png'
  }, {
    id: 5,
    name: 'Mike Harrington',
    karma: 10000,
    face: 'img/mike.png'
  }, {
    id: 6,
    name: 'Tom Murphy',
    karma: 9001,
    face: 'img/ben.png'
  }, {
    id: 7,
    name: 'Conor Taylor',
    karma: 10000,
    face: 'img/adam.jpg'
  }, {
    id: 8,
    name: 'Eden Doyle',
    karma: 10000,
    face: 'img/perry.png'
  }, {
    id: 9,
    name: 'David Kelly',
    karma: 10000,
    face: 'img/max.png'
  }, {
    id: 10,
    name: 'Eileen Dover',
    karma: 10000,
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return leaders;
    },
    allHighestKarma: function(){
      // finish implementing
      function sortByKarma(a, b){
        return parseInt(b.karma, 10) - parseInt(a.karma, 10);
      }
      return leaders.sort(sortByKarma);
    },
    remove: function(leader) {
      leaders.splice(leaders.indexOf(leader), 1);
    },
    get: function(leaderId) {
      for (var i = 0; i < leaders.length; i++) {
        if (leaders[i].id === parseInt(leaderId)) {
          return leaders[i];
        }
      }
      return null;
    }
  };
})

.factory('Locations', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var locations = [{
    id: 0,
    name: 'Dublin'
  }, {
    id: 1,
    name: 'Leitrim'
  }, {
    id: 2,
    name: 'Galway'
  }, {
    id: 3,
    name: 'Limerick'
  }];

  return {
    all: function() {
      return locations;
    },
    get: function(locationId) {
      for (var i = 0; i < locations.length; i++) {
        if (locations[i].id === parseInt(locationId)) {
          return locations[i];
        }
      }
      return null;
    }
  };
})

.factory('Bees', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var bees = [{
    id: 0,
    name: 'Honey Bee'
  }, {
    id: 1,
    name: 'Bumble Bee'
  }, {
    id: 2,
    name: 'Solitary Bee'
  }, {
    id: 3,
    name: 'Leaf Cutter'
  }, {
    id: 4,
    name: 'Mason Bee'
  }, {
    id: 5,
    name: 'Sweat Bee'
  }, {
    id: 6,
    name: 'Yellow Faced Bee'
  }];

  return {
    all: function() {
      return bees;
    },
    get: function(beeId) {
      for (var i = 0; i < bees.length; i++) {
        if (bees[i].id === parseInt(beeId)) {
          return bees[i];
        }
      }
      return null;
    }
  };
})

.factory('UnsortedBees', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var bees = [{
    id: 0,
    thumb: 'img/bees/0-thumb.jpg'
  },{
    id: 1,
    thumb: 'img/bees/1-thumb.jpg'
  },{
    id: 2,
    thumb: 'img/bees/2-thumb.jpg'
  },{
    id: 3,
    thumb: 'img/bees/3-thumb.jpg'
  },{
    id: 4,
    thumb: 'img/bees/4-thumb.jpg'
  }
  ];

  return {
    all: function() {
      return bees;
    },
    get: function(beeId) {
      for (var i = 0; i < bees.length; i++) {
        if (bees[i].id === parseInt(beeId)) {
          return bees[i];
        }
      }
      return null;
    }
  };
})

.factory('Contexts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var contexts = [{
    id: 0,
    name: 'On Flower'
  }, {
    id: 1,
    name: 'On Grass'
  }, {
    id: 2,
    name: 'Outside Hive'
  }];

  return {
    all: function() {
      return contexts;
    },
    get: function(contextId) {
      for (var i = 0; i < contexts.length; i++) {
        if (context[i].id === parseInt(contextId)) {
          return contexts[i];
        }
      }
      return null;
    }
  };
})

.factory('Tasks', function(){
  var tasks = [{
    id: 0,
    taskName: "Task1",
    taskDescription: "Description",
    face: 'img/ben.png'

  }, 
  {
    id: 1,
    taskName: "Task2",
    taskDescription: "Description",
    face: 'img/mike.png'
  },
  {
    id: 2, 
    taskName: "Task3",
    taskDescription: "Description",
    face: 'img/mike.png'
  },
  {
    id: 3,
    taskName: "Task4",
    taskDescription: "Description",
    face: 'img/mike.png'
  },
  {
    id: 4,
    taskName: "Task5",
    taskDescription: "Description",
    face: 'img/mike.png'
  },
  {
    id: 5,
    taskName: "Task6",
    taskDescription: "Description",
    face: 'img/mike.png'
  },
  {
    id: 6,
    taskName: "Task7",
    taskDescription: "Description",
    face: 'img/mike.png'
  },
  {
    id: 7,
    taskName: "Task8",
    taskDescription: "Description",
    face: 'img/mike.png'
  }];
  return {
      all: function() {
        return tasks;
      },
      get: function(taskId) {
        for (var i = 0; i < tasks.length; i++) {
          if (tasks[i].id === parseInt(taskId)) {
            return tasks[i];
          }
        }
        return null;
      }
  };
  
})

.factory('Filters', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var filters = [];

  return {
    newFilter: function(){
      return {
        id: filters.length,
        name: "empty"
      };
    },
    getNumFilters: function(){
      return filters.length;
    },
    getAll: function(){
      return filters;
    },
    all: function() {
      var filterString = window.localStorage['filters'];
      if (filterString) {
        return angular.fromJson(filterString);
      }
      return [];
    },
    save: function(filters) {
      window.localStorage['filters'] = angular.toJson(filters);
    }
  }
});
