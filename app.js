// navbar
const links = document.querySelector(".links");
const toggler = document.querySelector(".nav-toggle");

toggler.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

//slider
var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  spaceBetween: 30,
  centeredSlides: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Reviews
const URL = "https://randomuser.me/api/";
const reviewName = document.querySelector(".name");
const reviewCountry = document.querySelector(".country");
const reviewImage = document.querySelector(".review-img");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const fetchUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const person = data.results[0];
  // destruct
  const { first, last } = person.name;
  const { country } = person.location;
  const { large: image } = person.picture;
  return {
    name: `${first} ${last}`,
    image,
    country,
  };
};

const displayUser = (person) => {
  reviewName.textContent = person.name;
  reviewCountry.textContent = person.country;
  reviewImage.src = person.image;
};
const showUser = async () => {
  const person = await fetchUser();
  displayUser(person);
};
window.addEventListener("DOMContentLoaded", showUser);
nextBtn.addEventListener("click", showUser);
prevBtn.addEventListener("click", showUser);
