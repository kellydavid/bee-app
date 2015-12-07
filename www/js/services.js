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

.factory('Categories', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var categories = ['Species', 'Colour', 'Environment'];

  return {
    all: function() {
      return categories;
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
    title: "Photo-000.jpg",
    thumb: 'img/bees/0-thumb.jpg',
    img: 'img/bees/0.jpg'
  },{
    id: 1,
    title: "Photo-001.jpg",
    thumb: 'img/bees/1-thumb.jpg',
    img: 'img/bees/1.jpg'
  },{
    id: 2,
    title: "Photo-002.jpg",
    thumb: 'img/bees/2-thumb.jpg',
    img: 'img/bees/2.jpg'
  },{
    id: 3,
    title: "Photo-003.jpg",
    thumb: 'img/bees/3-thumb.jpg',
    img: 'img/bees/3.jpg'
  },{
    id: 4,
    title: "Photo-004.jpg",
    thumb: 'img/bees/4-thumb.jpg',
    img: 'img/bees/4.jpg'
  },{
    id: 5,
    title: "Photo-005.jpg",
    thumb: 'img/bees/5-thumb.jpg',
    img: 'img/bees/5.jpg'
  },{
    id: 6,
    title: "Photo-006.jpg",
    thumb: 'img/bees/6-thumb.jpg',
    img: 'img/bees/6.jpg'
  },{
    id: 7,
    title: "Photo-007.jpg",
    thumb: 'img/bees/7-thumb.jpg',
    img: 'img/bees/7.jpg'
  },{
    id: 8,
    title: "Photo-008.jpg",
    thumb: 'img/bees/8-thumb.jpg',
    img: 'img/bees/8.jpg'
  },{
    id: 9,
    title: "Photo-009.jpg",
    thumb: 'img/bees/9-thumb.jpg',
    img: 'img/bees/9.jpg'
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
  var tasksDummy = [{
    id: 0,
    taskName: 'Beehive Research',
    shortDescription: 'Take Pictures of bees near their hive',
    taskDescription: 'We need more pictures of bees near their hive for scientific research about hives and bees and stuff. So take pictures of bees please.',
    face: 'img/ben.png',
    deadline: '19/11/2016'

  }, 
  {
    id: 1,
    taskName: 'Task2',
    shortDescription: 'Take Pictures of bees near a car',
    taskDescription: 'Description',
    face: 'img/mike.png',
    deadline: '19/11/21'
  },
  {
    id: 2, 
    taskName: 'Task3',
    shortDescription: 'Take Pictures of bees near a lamp',
    taskDescription: 'Description',
    face: 'img/mike.png',
    deadline: '19/11/21'
  },
  {
    id: 3,
    taskName: 'Task4',
    shortDescription: 'Take Pictures of bees near some other place',
    taskDescription: 'Description',
    face: 'img/mike.png',
    deadline: '19/11/21'
  },
  {
    id: 4,
    taskName: 'Task5',
    shortDescription: 'Take Pictures of bees near a different car',
    taskDescription: 'Description',
    face: 'img/mike.png',
    deadline: '19/11/21'
  },
  {
    id: 5,
    taskName: 'Task6',
    shortDescription: 'Take Pictures of bees near around Dublin',
    taskDescription: 'Description',
    face: 'img/mike.png',
    deadline: '19/11/21'
  },
  {
    id: 6,
    taskName: 'Task7',
    shortDescription: 'Take Pictures of bees near chocolate',
    taskDescription: 'Description',
    face: 'img/mike.png',
    deadline: '19/11/21'
  },
  {
    id: 7,
    taskName: 'Task8',
    shortDescription: 'Oooooooooooh please take a picture of bees',
    taskDescription: 'Description',
    face: 'img/mike.png',
    deadline: '19/11/21'
  }];
  if (window.localStorage["tasks"] == null){
    window.localStorage["tasks"] = angular.toJson(tasksDummy);
  }
  var tasks = angular.fromJson(window.localStorage["tasks"]);
  return {
      all: function() {
        return angular.fromJson(window.localStorage["tasks"]);
      },
      get: function(taskId) {
        //var tasks = angular.fromJson(window.localStorage["tasks"]);
        
        for (var i = 0; i < tasks.length; i++) {
          if (tasks[i].id === parseInt(taskId)) {
            return tasks[i];
          }
        }
        return null;
      },
      update: function(taskId, taskName, shortDesc, desc, deadline){
        for (var i = 0; i < tasks.length; i++){
          if(tasks[i].id === parseInt(taskId)) {
            console.log("i")
            console.log(taskName);

            tasks[i].taskName = taskName;
            tasks[i]['shortDescription'] = shortDesc;
            tasks[i]['taskDescription'] = desc;
            tasks[i]['deadline'] = deadline;
          }

        }
        window.localStorage["tasks"] = angular.toJson(tasks);
      },
      insert: function(taskName, shortDesc, desc, deadline){
        //tasks = angular.fromJson(window.localStorage["tasks"]);
        var maxId = 0;
        for(var i = 0; i < tasks.length;i++){
          if(tasks[i].id > maxId) maxId = tasks[i].id;
        }

        var taskDetails = {"id": maxId + 1, "taskName": taskName, "shortDescription": shortDesc, "taskDescription": desc, "deadline": deadline};
        tasks.push(taskDetails);
        window.localStorage["tasks"] = angular.toJson(tasks);
      },
      remove: function(taskId){
        for(var i = 0; i < tasks.length; i++){
          if(tasks[i].id === parseInt(taskId)) {
            if(i > -1){
              tasks.splice(i, 1);
            }
          }
        }
        console.log(tasks);
        window.localStorage["tasks"] = angular.toJson(tasks);
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
})

.factory('Tags', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tags = [];

  return {
    newTag: function(){
      return {
        category: "",
        tag: ""
      };
    },
    getAll: function(){
      return tags;
    },
    all: function(idx) {
        var tagString = window.localStorage['tags'+idx];
        if (tagString) {
            return angular.fromJson(tagString);
        }
        return [];
    },
    save: function(tags, idx) {
      window.localStorage['tags'+idx] = angular.toJson(tags);
    }
  }
});
