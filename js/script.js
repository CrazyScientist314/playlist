/* global $ */

// BELOW Update the songs to your favorites songs. There should be at least 4.
var songs = [
    "NightCore - Let Me Die",
    "Nightcore - Welcome to My Life",
    "Nightcore - You Don't Know",
    "Nightcore - Baby Don't Cut",
    "Nightcore - The Doctor Said",
    "Nightcore - Flashlight"
];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var image_urls = [
    "https://i.ytimg.com/vi/ABZ9v4Y--AQ/maxresdefault.jpg",
    "https://i1.sndcdn.com/artworks-000217772495-pzas6i-t500x500.jpg",
    "https://i.ytimg.com/vi/6yS5gZ5cTmY/maxresdefault.jpg",
    "https://i.ytimg.com/vi/anGTy7qHD3o/maxresdefault.jpg",
    "https://i.ytimg.com/vi/JZkJCUYIaH4/maxresdefault.jpg",
    "https://i1.sndcdn.com/artworks-000123408669-xhcyt3-t500x500.jpg"
    ]
var artists = [
    "Nightcore",
    "Nightcore",
    "Nightcore",
    "Nightcore",
    "Nightcore",
    "Nightcore"
    ]
var song_lengths = [
    "3:16",
    "3:12",
    "4:00",
    "3:47",
    "3:00",
    "2:50"
    ]
var links = [
    "https://www.youtube.com/watch?v=ABZ9v4Y--AQ",
    "https://www.youtube.com/watch?v=BsmG4jFkNQc",
    "https://www.youtube.com/watch?v=YQk9Wc20y1c",
    "https://www.youtube.com/watch?v=anGTy7qHD3o",
    "https://www.youtube.com/watch?v=JZkJCUYIaH4",
    "https://www.youtube.com/watch?v=Ei48Z7gUci0"
    ]
    
function displaySongInfo(){
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    image_urls.forEach(function(image_url) {
        $("#images").append("<img src='" + image_url + "'>");
    });
    artists.forEach(function(artist) {
        $("#artists").append("<p>" + artist + "</p>"); 
    });
    song_lengths.forEach(function(song_length) {
        $("#lengths").append("<p>" + song_length + "</p>"); 
    });
    links.forEach(function(link) {
        $("#links").append("<a href='" + link + "'>Listen Here</a>"); 
    });
}
function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}
function addSongInfo(){
    var songName = $("#song").val();
    songs.push(songName);
    // BELOW write the code to add new items to each of the other arrays
    var artistName = $("#artist").val();
    artists.push(artistName);
    var songLength = $("#length").val();
    song_lengths.push(songLength);
    var imageURL = $("#image").val();
    image_urls.push(imageURL);
    var songLink = $("#link").val();
    links.push(songLink);
}

$("#add").click(function(){
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

$("#delete").click(function(){
    songs.pop();
    image_urls.pop();
    artists.pop();
    song_lengths.pop();
    links.pop();
    emptySongInfo();
    displaySongInfo();
});
/*global localStorage*/
localStorage.getItem(songs);
localStorage.getItem(image_urls);
localStorage.getItem(artists);
localStorage.getItem(song_lengths);
localStorage.getItem(links);
displaySongInfo();
