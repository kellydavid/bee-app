angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: '120000',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: '34000',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: '32000',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: '27000',
    face: 'img/perry.png'
  }, {
    id: 5,
    name: 'Mike Harrington',
    lastText: '10000',
    face: 'img/mike.png'
  }, {
    id: 6,
    name: 'Tom Murphy',
    lastText: '10000',
    face: 'img/mike.png'
  }, {
    id: 7,
    name: 'Conor Taylor',
    lastText: '10000',
    face: 'img/mike.png'
  }, {
    id: 8,
    name: 'Eden Doyle',
    lastText: '10000',
    face: 'img/mike.png'
  }, {
    id: 9,
    name: 'David Kelly',
    lastText: '10000',
    face: 'img/mike.png'
  }, {
    id: 10,
    name: 'Eileen Dover',
    lastText: '10000',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
