var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        playerVars: {
            'autoplay': 1,         // Inicia o vídeo automaticamente
            'loop': 1,             // Reproduz a playlist em looping
            'playlist': 'u9KHrtQEIZ0'  // ID da playlist
        }
    });
}
