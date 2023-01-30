var search_btn = document.querySelector('#btn');
var search_box = document.querySelector('.search_box');
var user = document.querySelector('.fa-user');
var login_form = document.querySelector('.login_form');
var cross = document.querySelector('.fa-xmark');
var vid_btn = document.querySelectorAll('.vid_btn');
var search_icon = document.querySelector('#btn');


search_btn.addEventListener("click", function () {
    search_box.classList.toggle('active');
    search_icon.classList.toggle('fa-xmark');
});

user.addEventListener("click", function () {
    login_form.classList.toggle('login_active');

});

cross.addEventListener("click", function () {
    login_form.classList.remove('login_active');

});

// video controlar code :

vid_btn.forEach(function (value) {
    value.addEventListener('click', () => {
        document.querySelector('.video_controls .active_btn').classList.remove('active_btn');
        value.classList.add('active_btn');
        let src = value.getAttribute('data-src');
        document.querySelector('#video_slider').src = src;
    });
});

// bar menu hide show:
var bar = document.querySelector('.bar_icon');
var nav_item = document.querySelector('.nav_item');

bar.addEventListener('click', function () {
    nav_item.classList.toggle('show');
});

window.onscroll = () => {
    nav_item.classList.remove('show');
    login_form.classList.remove('login_active');
    search_box.classList.remove('active');
    search_icon.classList.remove('fa-xmark');

}

// window.addEventListener('scroll',function(){
//     nav_item.classList.remove('show');
// })

//  review slider js code

$('.review_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: '15px',
    responsive: [{
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        // {
        //   breakpoint: 480,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        //   }
        // }

    ]
});


//   brand slider js code
$('.brand_slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: '15px',
    responsive: [{
        breakpoint: 577,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
    }, ]
});