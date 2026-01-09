/* function scrollLeft() {
  document.querySelector('.product-scroll').scrollBy({ left: -300, behavior: 'smooth' });
}
function scrollRight() {
  document.querySelector('.product-scroll').scrollBy({ left: 300, behavior: 'smooth' });
} */

      const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});