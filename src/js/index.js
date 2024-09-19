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


document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        loop: true,
        simulateTouch: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChange: function () {
                this.pagination.update(); // Usar "this" para acessar a instância corretamente
            },
        },
    });
});
