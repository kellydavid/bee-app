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
    karma: 10000,
    face: 'img/mike.png'
  }, {
    id: 7,
    name: 'Conor Taylor',
    karma: 10000,
    face: 'img/mike.png'
  }, {
    id: 8,
    name: 'Eden Doyle',
    karma: 10000,
    face: 'img/mike.png'
  }, {
    id: 9,
    name: 'David Kelly',
    karma: 10000,
    face: 'img/mike.png'
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
});
