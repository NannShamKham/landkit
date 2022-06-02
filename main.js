import './style.scss'


import * as bootstrap from 'bootstrap';
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";
import counterUp from "counterup2";
import "waypoints/lib/noframework.waypoints";



// Carousel

const carousel = new bootstrap.Carousel('#arouselExampleControls');
const carouselslide = new bootstrap.Carousel('#carouselpara');

document.getElementById("prevCarBtn").addEventListener("click",function (){
    carouselslide.prev();
});
document.getElementById("nextCarBtn").addEventListener("click",function (){
    carouselslide.next();
});


// counter up



const counterAcc = document.querySelectorAll( '.counter' );
counterAcc.forEach(function (el){
    new Waypoint({
        element:el,
        handler: function(direction) {
            counterUp( el, {
                duration: 1000,
                delay: 16,
            } );
        },
        offset: 'bottom-in-view'
    })
})
let price = document.getElementById("price");
document.getElementById("form-check").addEventListener("click",function (){
    if (price.innerText == 29){
        price.innerText = 49;
        counterUp( price, {
            duration: 1000,
            delay: 16,
        } );

    }else {
        price.innerText = 29;
        counterUp( price, {
            duration: 1000,
            delay: 16,
        } );

    }
});






var SlideUp = {
    distance: "90px",
    origin: "bottom",
    duration: 800,
    interval: 500,
    cleanup: true,
    easing: "ease-out",
    delay: 200,
}
var SlideLeft = {
    distance: "90px",
    origin: "left",
    duration: 800,
    interval: 500,
    cleanup: true,
    easing: "ease-out",
    delay: 200,
}
var SlideRight = {
    distance: "90px",
    origin: "right",
    duration: 800,
    interval: 500,
    cleanup: true,
    easing: "ease-out",
    delay: 200,
}

ScrollReveal().reveal('.content',SlideUp);
ScrollReveal().reveal('.contentLeft',SlideLeft);
ScrollReveal().reveal('.contentRight',SlideRight);


var typed2 = new Typed('#typed2', {
    strings: ['designers', 'founders', 'developers'],
    typeSpeed: 40,
    backSpeed: 30,
    // fadeOut: true,
    loop: true
});
