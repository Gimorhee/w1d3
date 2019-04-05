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
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (var p in library.playlists){
    var name = library.playlists[p].name;
    var number = library.playlists[p].tracks.length;
    console.log(p + ": " + name + " - " + number + " tracks");
  }
}

// printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (t in library.tracks){
    var tName= library.tracks[t].name;
    var tArtist= library.tracks[t].artist;
    var tAlbum= library.tracks[t].album;

    console.log(t + ": " + tName + " by " + tArtist + " (" + tAlbum + ")");
  }
}

// printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var currentId = library.playlists[playlistId];
  var pName = currentId.name;
  var pNumber = currentId.tracks.length;

  console.log(playlistId + ": " + pName + " - " + pNumber + " tracks");

  var pTrack = library.playlists[playlistId].tracks;

  for (let i = 0 ; i < pTrack.length; i ++){
    console.log(pTrack[i] + ": " + library.tracks[pTrack[i]].name + " by " + library.tracks[pTrack[i]].artist + " (" + library.tracks[pTrack[i]].album + ")" );
  }
}

// printPlaylist('p02');

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var track = library.tracks[trackId];
  var playlist = library.playlists[playlistId]
  if (track && playlist){
    var pTrack = library.playlists[playlistId].tracks;
    pTrack.push(trackId);
    console.log(pTrack);
  } else {
    console.log("Please use existing values");
  }
}

// addTrackToPlaylist("t01", "p01");


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var newId = uid();
  var tracks = library.tracks;

  tracks[newId]= {name: name,
                  artist: artist,
                  album: album};
  console.log(tracks)
}

// addTrack("some name", "some artist", "some album");


// adds a playlist to the library

var addPlaylist = function (name) {
  var newId = uid();
  var playlists = library.playlists;

  playlists[newId] = {id: 'unique id',
                      name: name,
                      tracks: []};

  console.log(playlists);
}

// addPlaylist("some randome name");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}