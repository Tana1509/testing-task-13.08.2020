jQuery(document).ready(function ($) {

    //Slider

    $('.heading__slaider').owlCarousel({
        loop: true,
        nav: true,
        responsiveClass: true,
        animateIn: 'zoomIn',
        items: 1,
        smartSpeed: 2500,
    });

    // tabs

    let tab = $('.product__item');
    tab.hide().filter(':first').show();

    $('.products__nav a').click(function () {
        tab.hide();
        tab.filter(this.hash).show();
        $('.products__nav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':first').click();

    // hover

    let btn = $(".hover__nav, .product__menue");
    $(btn).hover(function () {
        let navigation = $(".product__menue");
        navigation.toggleClass("active");
    });

    // cart
    let cartBtn = $(".myBag__icon");
    cartBtn.on("click", function () {
        let navigation = $(".myBag__cart");
        navigation.toggleClass("active");

    });
    let arrowBtn = $(".arrowBtn");
    arrowBtn.on("click", function () {
        let nav = $(".myBag__cart");
        nav.removeClass("active");

    });
});
// range__slider

$(".js-range-slider").ionRangeSlider({
    prefix: "Choise is "
});

let slider = document.querySelector(".myRangeSlide");
let val = document.querySelector(".inner");
slider.onchange = () => {
val.innerHTML = slider.value;
}

// let btn = document.querySelector('.myBag__icon')
// let element = document.querySelector('.myBag__cart')

// btn.addEventListener('click', ({ target }) => {
//     element.style.display = 'block'
// })

// document.addEventListener('click', outsideClickListener)

// function outsideClickListener({ target }) {
//     console.log(target)
//     if (!element.contains(target) && target !== btn)
//         element.style.display = 'none'
// }