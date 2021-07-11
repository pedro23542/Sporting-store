import Swiper from 'swiper/bundle';

const sliders = () => {
  const mainSlider = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
  });
};

export default sliders;