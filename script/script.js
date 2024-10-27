const navberHeader = document.getElementById('navberHeader');

window.addEventListener('scroll', (e) => {

    if (window.scrollY > 200) {
        navberHeader.style.position = "fixed";
        navberHeader.style.width = "100vw";
        navberHeader.style.top = "0";
        navberHeader.style.background = "black";
    } else {
        navberHeader.style.position = "fixed";
        navberHeader.style.width = "100vw";
        navberHeader.style.top = "0";
        navberHeader.style.background = "transparent";
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