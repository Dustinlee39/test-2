document.addEventListener('DOMContentLoaded', function() {
    function loadAndPlayVideoBackground() {
        fetch('video-background.html')
            .then(response => response.text())
            .then(data => {
                const container = document.getElementById('video-background-container');
                container.innerHTML = data;

                // Select the iframe and add a listener for iframe load
                const iframe = container.querySelector('iframe');
                iframe.onload = function() {
                    // Post message to play video
                    iframe.contentWindow.postMessage(
                        '{"event":"command","func":"playVideo","args":""}',
                        '*'
                    );
                };
            })
            .catch(error => console.error('Error loading video background:', error));
    }

    // Load and play the video background
    loadAndPlayVideoBackground();
});