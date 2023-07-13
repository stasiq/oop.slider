document.addEventListener('DOMContentLoaded', function () {

    class Slider {
        constructor() {
            this.slides = document.querySelectorAll('#slides .slide');;
            this.currentSlide = 0
            this.playing = true;
            this.pauseButton = document.getElementById('pause');
            this.slideInterval = setInterval(this.nextSlide.bind(this), 2000);

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

        nextSlide() {
            this.slides[this.currentSlide].className = 'slide';
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            this.slides[this.currentSlide].className = 'slide showing';
        }

    }

    const slider = new Slider();
    slider.nextSlide.bind(slider)

    slider.pauseButton.onclick = function () {
        if (slider.playing) {
            slider.pauseSlideshow();
        } else {
            slider.playSlideshow();
        }
    };

});



