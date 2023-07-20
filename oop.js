document.addEventListener('DOMContentLoaded', function () {

    class Slider {
        slides = document.querySelectorAll('#slides .slide');
        currentSlide = 0
        playing = true;
        pauseButton = document.getElementById('pause');

        constructor() {
            this.slideInterval = setInterval(this.nextSlide.bind(this), 2000);
            // this.pauseButton.onclick = this.start
        }

        playSlideshow() {
            this.pauseButton.innerHTML = 'Pause';
            this.playing = true;
            this.slideInterval = setInterval(this.nextSlide.bind(this), 2000);
        }

        pauseSlideshow() {
            this.pauseButton.innerHTML = 'Play';
            this.playing = false;
            clearInterval(this.slideInterval);
        }

        nextSlideButton() {
            this.pauseButton.innerHTML = 'Play';
            this.playing = false;
            clearInterval(this.slideInterval);
        }

        nextSlide() {
            this.slides[this.currentSlide].className = 'slide';
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            this.slides[this.currentSlide].className = 'slide showing';
        }

        start() {
            if (this.playing) {
                this.pauseSlideshow();
            } else {
                this.playSlideshow();
            }
        }

    }

    const slider = new Slider();
    slider.pauseButton.addEventListener("click", function () {
        if (slider.playing) {
            slider.pauseSlideshow();
        } else {
            slider.playSlideshow();

        }
    });
    // Тут slider.playing undefined
    // slider.pauseButton.addEventListener("click", slider.start);

});



