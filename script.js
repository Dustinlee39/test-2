html, body {
    height: 100%;
    margin: 0;
    overflow: hidden; /* Prevent scrollbars */
}

#aspect-ratio-container {
    position: fixed; /* Fixed position to cover the viewport */
    top: 0;
    left: 0;
    width: 100vw; /* Full width */
    height: 100vh; /* Full height */
    background: #000; /* Background color or image */
    overflow: hidden;
}

.aspect-ratio-helper {
    position: relative;
    width: 100%;
    padding-top: 45%; /* Aspect ratio of 20:9 (9 / 20 = 0.45) */
    height: 0;
}

.aspect-ratio-helper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0; /* Removes iframe border */
}