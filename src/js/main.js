import sliders from './modules/sliders';
import {
  accordions,
  asideMobileAccordion
} from './modules/accordions';
import burgerMenu from './modules/burgerMenu';
import mainRangeSlider from './modules/range_slider';
import selectInputs from './modules/choises';
import viewFilter from './modules/productViewFilter';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
  burgerMenu();
  sliders();
  accordions('.aside-menu__title', 'open');
  accordions('.main-search__type', 'main-search__sublinks');
  accordions('.filters__box-title', 'filters--open', 'filters__box-active');
  asideMobileAccordion();
  mainRangeSlider();
  selectInputs();
  viewFilter();
  tabs('.product-tabs.tabs');

});