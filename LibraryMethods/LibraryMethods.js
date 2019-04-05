var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {

  var currentPlaylist = Object.keys(this['playlists']); //is an array

  for (let i = 0 ; i < currentPlaylist.length ; i ++){
    var pid = currentPlaylist[i]
    console.log(pid + ": " + this['playlists'][pid]['name'] + " - " + this['playlists'][pid]['tracks'].length + " tracks");
  }
}
}
library.printPlaylists();

// FUNCTIONS TO IMPLEMENT:

// // prints a list of all playlists, in the form:
// // p01: Coding Music - 2 tracks
// // p02: Other Playlist - 1 tracks

// var printPlaylists = function () {

//   var currentPlaylist = Object.keys(library['playlists']); //is an array

//   for (let i = 0 ; i < currentPlaylist.length ; i ++){
//     var pid = currentPlaylist[i]
//     console.log(pid + ": " + library['playlists'][pid]['name'] + " - " + library['playlists'][pid]['tracks'].length + " tracks");
//   }
// }
// // printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {

  var currentTracks = Object.keys(library["tracks"]);
  console.log(currentTracks);

  for (let i = 0 ; i < currentTracks.length ; i ++){
    var tid = currentTracks[i];

    console.log(tid + " " + library["tracks"][tid]["name"] + " by " + library["tracks"][tid]["artist"] + "(" + library["tracks"][tid]["album"] + ")");
  }
}

// printTracks();



// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var selectedId = library["playlists"][playlistId];

  console.log(playlistId + ": " + selectedId["name"] + " - " + selectedId["tracks"].length + " tracks");

  var trackId = selectedId["tracks"];

  for (let i = 0 ; i < trackId.length ; i ++){
    var currentTrackId = library["tracks"][trackId[i]]
    console.log(trackId[i] + ": " + currentTrackId["name"] + " by " + currentTrackId["artist"] + " (" + currentTrackId["album"] + ")");
  }

}

// printPlaylist('p02');


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var newPid = library["playlists"][playlistId];

  newPid["tracks"].push(trackId)
  console.log("Track name: " + library["tracks"][trackId]["name"] + "(" + trackId + ")" + " has been successfully added to playlist name: " + newPid["name"] + "(" + playlistId + ")");
  // console.log(library["playlists"]);
}

// addTrackToPlaylist("t02", "p01");


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

//console.log(uid());

// adds a track to the library

var addTrack = function (name, artist, album) {
  var newID = uid();
  var newData = {id: newID,
                name: name,
                artist: artist,
                album: album};
  //Object.assign(library['tracks'], newID);
  library["tracks"][newID] = newData;
  console.log(library["tracks"]);

}

// addTrack('random name', 'some artist', 'some album');

// adds a playlist to the library

var addPlaylist = function (name) {
  var newPID = uid();
  var newPData = {id: newPID,
                  name: name}
  library["playlists"][newPID] = newPData;
  console.log(library["playlists"]);
}

// addPlaylist('some random playlist name');


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}