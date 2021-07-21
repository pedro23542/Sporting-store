import Swiper from 'swiper/bundle';

const sliders = () => {
  const mainSlider = new Swiper('.main-slider__container', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
  });

  //mainSlider pagination logic
  const slides = document.querySelectorAll('.main-slider__slide');
  const paginationBody = document.querySelector('.main-slider__pagination');
  
  slides.forEach((elem, index) => {
    paginationBody.insertAdjacentHTML(
      'beforeend', 
      `<div class="main-slider__pagination-item" data-index="${index}">${index + 1}</div>`
      );
  });

  const bulets =  document.querySelectorAll('.main-slider__pagination-item');
  bulets[0].classList.add('main-slider__pagination--active');

  bulets.forEach((elem, index) => {
    elem.style.backgroundImage = `url(images/content/slide${index+1}.jpg)`;
    elem.addEventListener('click', (e) => {

      const self = e.currentTarget;
      bulets.forEach( elem => {
        elem.classList.remove('main-slider__pagination--active');
      });
      self.classList.add('main-slider__pagination--active');
      mainSlider.slideTo(self.getAttribute('data-index'));
  
    });
  });


  const brandsSlider = new Swiper('.brands-labels__container', {
    slidesPerView: 5,
    centeredSlidesBounds: true,
    navigation: {
      nextEl: '.brands-labels__button-prev',
      prevEl: '.brands-labels__button-next',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      600: {
        slidesPerView: 3,
        centeredSlides: false,
      },
      840: {
        slidesPerView: 4,
        centeredSlides: false,
      },
      1000: {
        slidesPerView: 5,
        centeredSlides: false,
      },
    }
  });


};

export default sliders;