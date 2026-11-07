const swiper = new Swiper('.swiper-container', {
  // Optional parameters
    loop: true,
    slidesPreView: 1,
    spaceBetween: 16,
    breakpoints: {
    768: {
         slidesPerView: 2
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3
    }
  },

  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
});