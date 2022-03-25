const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

const app = new Vue({

    el: '#app',

    data: {
        slides,
        activeSlideIndex: 0
    },

    methods: {
        showPrevSlide() {
            if (this.activeSlideIndex > 0) {
                this.activeSlideIndex--;
            } else {
                this.activeSlideIndex = this.slides.length - 1;
            }
        },

        showNextSlide() {
            if (this.activeSlideIndex < this.slides.length - 1) {
                this.activeSlideIndex++;
            } else {
                this.activeSlideIndex = 0;
            }
        },

        checkIfActive(item) {
            const index = this.slides.findIndex(
                (slide) => slide.title === item.title
            )

            if (index === this.activeSlideIndex) {
                return 'thumb active';
            }
            return 'thumb';
        }


    }

});