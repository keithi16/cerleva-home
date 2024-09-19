const menu = document.getElementById("menu");
const openButton = document.getElementById("openMenuButton");
const closeButton = document.getElementById("closeMenuButton");

function toggleMenu() {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        document.addEventListener("click", closeMenuOnClickOutside);
    } else {
        menu.classList.add("hidden");
        document.removeEventListener("click", closeMenuOnClickOutside);
    }
}

function closeMenuOnClickOutside(event) {
    if (!menu.contains(event.target) && !openButton.contains(event.target) && !closeButton.contains(event.target)) {
        menu.classList.add("hidden");
        document.removeEventListener("click", closeMenuOnClickOutside);
    }
}

function dropdown() {
    const dropdownContainer = document.querySelector('.dropdownContainer');
    const dropdownHead = document.querySelector('.dropdownHead');

    dropdownHead.addEventListener("click", () => {
        dropdownContainer.classList.toggle("open");
    });
}

document.addEventListener("DOMContentLoaded", dropdown);

new InfiniteMarquee({
	element: '.marquee-container',
	speed: 16000,
	direction: 'right',
    pauseOnHover: true,
	duplicateCount: 2,
});


const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: false,
    allowTouchMove: false,
    grabCursor: false,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
