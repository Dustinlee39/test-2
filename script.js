// Video Player Controls
document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.createElement('video');
    videoPlayer.setAttribute('controls', 'controls');
    videoPlayer.setAttribute('width', '100%');
    videoPlayer.src = 'path-to-your-video.mp4'; // Update with your video source
    document.getElementById('player').appendChild(videoPlayer);

    const controls = {
        play: document.getElementById('play'),
        pause: document.getElementById('pause'),
        stop: document.getElementById('stop'),
        mute: document.getElementById('mute'),
        unmute: document.getElementById('unmute'),
        volumeUp: document.getElementById('volume-up'),
        volumeDown: document.getElementById('volume-down'),
        seekForward: document.getElementById('seek-forward'),
        seekBackward: document.getElementById('seek-backward'),
        speedUp: document.getElementById('speed-up'),
        speedDown: document.getElementById('speed-down'),
    };

    controls.play.addEventListener('click', () => videoPlayer.play());
    controls.pause.addEventListener('click', () => videoPlayer.pause());
    controls.stop.addEventListener('click', () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    });

    controls.mute.addEventListener('click', () => videoPlayer.muted = true);
    controls.unmute.addEventListener('click', () => videoPlayer.muted = false);

    controls.volumeUp.addEventListener('click', () => {
        videoPlayer.volume = Math.min(videoPlayer.volume + 0.1, 1);
    });

    controls.volumeDown.addEventListener('click', () => {
        videoPlayer.volume = Math.max(videoPlayer.volume - 0.1, 0);
    });

    controls.seekForward.addEventListener('click', () => {
        videoPlayer.currentTime += 10;
    });

    controls.seekBackward.addEventListener('click', () => {
        videoPlayer.currentTime -= 10;
    });

    controls.speedUp.addEventListener('click', () => {
        videoPlayer.playbackRate = Math.min(videoPlayer.playbackRate + 0.25, 2);
    });

    controls.speedDown.addEventListener('click', () => {
        videoPlayer.playbackRate = Math.max(videoPlayer.playbackRate - 0.25, 0.5);
    });
});

// Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Handling
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const email = formData.get('email');

        // Simple validation
        if (!email || !validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Thank you for subscribing!');
        this.reset(); // Clear the form
    });
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = 'Top';
scrollToTopButton.className = 'scroll-to-top';
scrollToTopButton.style.display = 'none';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.padding = '10px 20px';
scrollToTopButton.style.backgroundColor = '#333';
scrollToTopButton.style.color = '#fff';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '5px';
scrollToTopButton.style.cursor = 'pointer';
scrollToTopButton.style.zIndex = '1000';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Responsive Navigation Menu
const navToggle = document.createElement('button');
navToggle.textContent = 'Menu';
navToggle.className = 'nav-toggle';
navToggle.style.display = 'none';
navToggle.style.position = 'fixed';
navToggle.style.top = '20px';
navToggle.style.right = '20px';
navToggle.style.padding = '10px 20px';
navToggle.style.backgroundColor = '#333';
navToggle.style.color = '#fff';
navToggle.style.border = 'none';
navToggle.style.borderRadius = '5px';
navToggle.style.cursor = 'pointer';
document.querySelector('header').appendChild(navToggle);

const navMenu = document.querySelector('header nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        navToggle.style.display = 'block';
    } else {
        navToggle.style.display = 'none';
        navMenu.classList.remove('active');
    }
});

// Dynamic Content Loading Example
const loadMoreButton = document.querySelector('#load-more');
const dynamicContent = document.querySelector('#dynamic-content');

if (loadMoreButton) {
    loadMoreButton.addEventListener('click', () => {
        const newContent = document.createElement('div');
        newContent.className = 'content-item';
        newContent.textContent = 'New dynamically loaded content.';
        dynamicContent.appendChild(newContent);
    });
}