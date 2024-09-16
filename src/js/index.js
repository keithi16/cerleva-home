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



const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });