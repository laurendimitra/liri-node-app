


// var twitter = require("./keys.js");

var Twitter = require('twitter');
var client = new Twitter({
    consumer_key: '6WRRiS5GE8yJ9sXqeAgBvW2fn',
    consumer_secret: 'L0cE5U8wTTohytCAXWOycS2PtkydinYv34axvNCsmiDg1hDUfv',
    access_token_key: '872964302562570240-GHl8oP5TjZF9XBcbfLM0E6VJUO9lvzN',
    access_token_secret: 'zokVT9hzEvybvnmF4luHZcxp0w1jOEpBpJNUOQwnwt2Eg',
  });

client.get('statuses/user_timeline', { screen_name: 'lauren23761924', count: 20 }, function(err, data, response) {
    if (err) {
        console.log(err);
      }
    for(var i = 0; i < data.length; i++) {
        var twitterResults = 
        "@" + data[i].user.screen_name + ": " + 
        data[i].text + "\n" + data[i].created_at 
        console.log(twitterResults);
    }
});

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
 id: "35841e6c4c454b4e88507561ec3de10c",
 secret: "8de808400cb14a2ab61cfb1173d6aa1f"
});


    var songName = process.argv[3];
    if(!songName){
        songName = "I saw the sign";
    }

    spotify.search({ type: "track", query: songName }, function(err, data) {
        if(!err){
            var songInfo = data.tracks.items;
            for (var i = 0; i < 5; i++) {
                if (songInfo[i] != undefined) {
                    var spotifyResults =
                    "Artist: " + songInfo[i].artists[0].name + "\r\n" +
                    "Song: " + songInfo[i].name + "\r\n" +
                    "Album the song is from: " + songInfo[i].album.name + "\r\n" +
                    "Preview Url: " + songInfo[i].preview_url + "\r\n" + 
                    "------------------------------ " + i + " ------------------------------" + "\r\n";
                    console.log(spotifyResults);
                    log(spotifyResults); // calling log function
                }
            }
        }	else {
            console.log("Error :"+ err);
            return;
        }
    });