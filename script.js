let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: '3-ybTISe0xk',
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    document.getElementById('play').addEventListener('click', () => player.playVideo());
    document.getElementById('pause').addEventListener('click', () => player.pauseVideo());
    document.getElementById('stop').addEventListener('click', () => player.stopVideo());
    document.getElementById('mute').addEventListener('click', () => player.mute());
    document.getElementById('unmute').addEventListener('click', () => player.unMute());
    document.getElementById('volume-up').addEventListener('click', () => {
        let volume = player.getVolume();
        player.setVolume(volume + 10);
    });
    document.getElementById('volume-down').addEventListener('click', () => {
        let volume = player.getVolume();
        player.setVolume(volume - 10);
    });
    document.getElementById('seek-forward').addEventListener('click', () => {
        let currentTime = player.getCurrentTime();
        player.seekTo(currentTime + 10);
    });
    document.getElementById('seek-backward').addEventListener('click', () => {
        let currentTime = player.getCurrentTime();
        player.seekTo(currentTime - 10);
    });
    document.getElementById('speed-up').addEventListener('click', () => {
        let currentRate = player.getPlaybackRate();
        player.setPlaybackRate(currentRate + 0.25);
    });
    document.getElementById('speed-down').addEventListener('click', () => {
        let currentRate = player.getPlaybackRate();
        player.setPlaybackRate(currentRate - 0.25);
    });
}