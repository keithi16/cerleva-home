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

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });



  
function calcDotsEffect(dots, activeDot, clickedDotIndex) {
    let calcDotsEffectBeingUsed = false;

    if (calcDotsEffectBeingUsed) return;

    calcDotsEffectBeingUsed = true;
    const activeDotIndex = parseInt(activeDot.style.left) / 16;
    const newLeftForActive = clickedDotIndex * 16 + 'px';

    if (clickedDotIndex > activeDotIndex) {
        dots.forEach((otherDot) => {
            const otherDotIndex = parseInt(otherDot.style.left) / 16;
            if (otherDotIndex <= clickedDotIndex && otherDotIndex > activeDotIndex) {
                otherDot.style.left = (otherDotIndex - 1) * 16 + 'px';
            }
        });
    } else {
        dots.forEach((otherDot) => {
            const otherDotIndex = parseInt(otherDot.style.left) / 16;
            if (otherDotIndex >= clickedDotIndex && otherDotIndex < activeDotIndex) {
                otherDot.style.left = (otherDotIndex + 1) * 16 + 'px';
            }
        });
    }

    activeDot.style.left = newLeftForActive;
    calcDotsEffectBeingUsed = false;
}

function createDotsWithEffect() {
    const paginationsWithEffects = document.querySelectorAll('.swiper-pagination-effect');

    paginationsWithEffects.forEach((paginationsWithEffect) => {
        const slider = document.querySelector(paginationsWithEffect.dataset.dotsFor);
        if (slider) {
            const howManySlides = slider.querySelectorAll('.swiper-slide').length;

            if (howManySlides > 0) {
                const dots = [];

                for (let i = 0; i < howManySlides; i++) {
                    const dot = document.createElement('span');
                    dot.className = i === 0 ? 'swiper-pagination-bullet swiper-pagination-bullet-active' : 'swiper-pagination-bullet';
                    dot.style.left = 16 * i + 'px';
                    dots.push(dot);
                    paginationsWithEffect.appendChild(dot);
                }

                dots.forEach((dot) => {
                    dot.addEventListener('click', function () {
                        const clickedDotIndex = parseInt(dot.style.left) / 16;

                        const activeDot = dots.find((otherDot) => {
                            return otherDot.className.includes('swiper-pagination-bullet-active');
                        });

                        calcDotsEffect(dots, activeDot, clickedDotIndex);
                        slider.swiper.slideToLoop(clickedDotIndex);
                    });
                });

                paginationsWithEffect.style.width = 16 * howManySlides + 'px';
            }
        }
    });
}

createDotsWithEffect();