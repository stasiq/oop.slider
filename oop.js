document.addEventListener('DOMContentLoaded', function () {

    class Slider {
        slides = document.querySelectorAll('#slides .slide');
        currentSlide = 0
        playing = true;

        constructor() {
            this.slideInterval = setInterval(this.nextSlide.bind(this), 2000);
        }

        nextSlide() {
            this.slides[this.currentSlide].className = 'slide';
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            console.log('next' + this.currentSlide);
            this.slides[this.currentSlide].className = 'slide showing';
        }

        prevSlide() {
            console.log(this.currentSlide);
            if (this.currentSlide < 2) {

                this.currentSlide = 4;
                console.log('меньше' + this.currentSlide);
            }
            this.slides[this.currentSlide].className = 'slide';
            this.currentSlide = (this.currentSlide + 1) % this.slides.length - 2;
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

    class SliperPanel extends Slider {
        pauseButton = document.getElementById('pause');
        nextButton = document.getElementById('next');
        prevButton = document.getElementById('prev');
        constructor() {
            super();
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
            super.nextSlide();
        }

        prevSlideButton() {
            this.pauseButton.innerHTML = 'Play';
            this.playing = false;
            clearInterval(this.slideInterval);
            super.prevSlide();
        }
    }

    const slider = new SliperPanel();
    slider.pauseButton.addEventListener("click", function () {
        if (slider.playing) {
            slider.pauseSlideshow();
        } else {
            slider.playSlideshow();

        }
    });

    slider.nextButton.addEventListener("click", function () {
        slider.nextSlideButton()
    });

    slider.prevButton.addEventListener("click", function () {
        slider.prevSlideButton()
    });
    // Тут slider.playing undefined
    // slider.pauseButton.addEventListener("click", slider.start);

});



