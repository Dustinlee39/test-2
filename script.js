// Load the IFrame Player API code asynchronously
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create YouTube player
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: 'YOUR_VIDEO_ID', // Replace 'YOUR_VIDEO_ID' with the actual video ID
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // Set up event listeners for custom controls
    document.getElementById('play-button').addEventListener('click', function() {
        player.playVideo();
    });

    document.getElementById('pause-button').addEventListener('click', function() {
        player.pauseVideo();
    });

    document.getElementById('stop-button').addEventListener('click', function() {
        player.stopVideo();
    });

    document.getElementById('mute-button').addEventListener('click', function() {
        player.mute();
    });

    document.getElementById('unmute-button').addEventListener('click', function() {
        player.unMute();
    });

    document.getElementById('volume-up-button').addEventListener('click', function() {
        var currentVolume = player.getVolume();
        if (currentVolume < 100) {
            player.setVolume(currentVolume + 10);
        }
    });

    document.getElementById('volume-down-button').addEventListener('click', function() {
        var currentVolume = player.getVolume();
        if (currentVolume > 0) {
            player.setVolume(currentVolume - 10);
        }
    });

    document.getElementById('seek-forward-button').addEventListener('click', function() {
        var currentTime = player.getCurrentTime();
        player.seekTo(currentTime + 10, true);
    });

    document.getElementById('seek-backward-button').addEventListener('click', function() {
        var currentTime = player.getCurrentTime();
        player.seekTo(currentTime - 10, true);
    });

    document.getElementById('playback-rate-increase-button').addEventListener('click', function() {
        var currentRate = player.getPlaybackRate();
        player.setPlaybackRate(currentRate + 0.25);
    });

    document.getElementById('playback-rate-decrease-button').addEventListener('click', function() {
        var currentRate = player.getPlaybackRate();
        player.setPlaybackRate(currentRate - 0.25);
    });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});