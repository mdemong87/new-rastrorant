const navberHeader = document.getElementById('navberHeader');

window.addEventListener('scroll', (e) => {

    if (window.scrollY > 60) {
        navberHeader.style.position = "fixed";
        navberHeader.style.width = "100vw";
        navberHeader.style.top = "0";
        navberHeader.style.background = "black";
    } else {
        navberHeader.style.position = "fixed";
        navberHeader.style.width = "100vw";
        navberHeader.style.top = "0";
        navberHeader.style.background = "black";
    }

});


//navbar toggleing
const navbarMenu = document.getElementById('navbarMenu');
const navbars = document.getElementById('navbars');
navbarMenu.addEventListener("click", () => {
    navbars.style.display = "flex";
});

const crossBTn = document.getElementById('crossBTn');
crossBTn.addEventListener('click', () => {
    navbars.style.display = "none";
});

window.addEventListener('resize', (e) => {
    const width = e.target.innerWidth;
    if (width > 1024) {
        navbars.style.display = "flex";
    } else {
        navbars.style.display = "none";
    }
})



// bottom to top scroll logic
const bottomToTopBTNWrp = document.getElementById('bottomToTopBTNWrp');
window.addEventListener('scroll', (e) => {
    const hight = window.scrollY;
    if (hight > 800) {
        bottomToTopBTNWrp.style.display = "block"
    } else {
        bottomToTopBTNWrp.style.display = "none"
    }
})
bottomToTopBTNWrp.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
})




// swiper js javaScript code
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 2000,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    // Responsive breakpoints
    breakpoints: {

        // when window width is >= 640px
        768: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        // when window width is >= 640px
        990: {
            slidesPerView: 3,
            spaceBetween: 20
        }

    }


});


















