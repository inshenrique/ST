// Aguarde o carregamento da página
window.onload = function() {
    // Referencie o elemento <div> onde o player será exibido
    var playerDiv = document.getElementById('player');
    
    // Crie um objeto do player do YouTube
    var player = new YT.Player(playerDiv, {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1, // Reproduzir automaticamente os vídeos
            loop: 1, // Reproduzir a playlist em loop
            playlist: 'PLXp_XpHqmcvbrtCxkXyyF88LDwj7forC9', // Substitua pelo ID da playlist desejada
            controls: 0, // Ocultar os controles do player
            fs: 0, // Desabilitar o botão de tela cheia
            modestbranding: 1 // Ocultar a logo do YouTube
        },
        events: {
            onReady: onPlayerReady
        }
    });

    // Função chamada quando o player estiver pronto
    function onPlayerReady(event) {
        // Adicione um evento de clique ao botão
        document.getElementById('botao').addEventListener('click', function() {
            player.loadVideoById('Rciv-Vb299Y'); // Substitua pelo ID do vídeo que deseja reproduzir
        });
    }
};
