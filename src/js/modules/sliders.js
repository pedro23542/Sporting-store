import Swiper from 'swiper/bundle';

// mainSlider
const sliders = () => {
  const mainSlider = new Swiper('.main-slider__container', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
  });

  //mainSlider pagination logic
  try {
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
  } catch (e) {}
 
 // brandsSlider 
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

// productOne
  const productOne = new Swiper('.product-one__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
  });

const sliderNavItems = document.querySelectorAll('.product-one__nav-item');
const maxItems = 5;

sliderNavItems.forEach((el, index) => {
  el.setAttribute('data-index', index);

  if (index + 1 > maxItems)  {          //if number of litle images is gratter then max number(maxItems) where index starts from 0;
    document.querySelectorAll(`.product-one__nav-item:nth-child(n+${maxItems + 1})`).forEach(el => {el.style.display = 'none';});
  }

  el.addEventListener('click', (e) => {
    const index = parseInt(e.currentTarget.dataset.index);

    productOne.slideTo(index);
  })
});









};

export default sliders;