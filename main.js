var playlistId = "PLXp_XpHqmcvZZ7sc_Kf56ZKeXO-ThxC6P";
var videoId = "pJdUJmSqDGE";
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        playerVars: {
            'autoplay': 1,
            'loop': 1,
            'playlist': playlistId
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED && event.target.getVideoData().video_id === videoId) {
        player.loadPlaylist(playlistId);
    }
}
