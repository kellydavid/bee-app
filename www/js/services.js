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
});
