const slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
    pauseButton.innerHTML = 'Play';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = 'Pause';
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function() {
    if(playing) {
        pauseSlideshow();
    } else {
        playSlideshow();
    }
};

// ==========================================
class Human {
    constructor() {
        const slides = document.querySelectorAll('#slides .slide');
        this.currentSlide = 0
        this.slideInterval = setInterval(nextSlide,2000);
        this.playing = true;
        this.pauseButton = document.getElementById('pause');

        this.pauseButton.onclick = function() {
            if(this.playing) {
                playSlideshow();
            } else {
                pauseSlideshow();

            }
        };

    }

    playSlideshow() {
        this.pauseButton.innerHTML = 'Pause';
        playing = true;
        slideInterval = setInterval(nextSlide,2000);
    }

    pauseSlideshow() {
        this.pauseButton.innerHTML = 'Play';
        playing = false;
        clearInterval(slideInterval);
    }


}