
import sliders from './modules/sliders';
import {accordions, asideMobileAccordion}  from './modules/accordions';
import burgerMenu from './modules/burgerMenu';

burgerMenu();
sliders();
accordions('.aside-menu__title', '.aside-menu__list');
accordions('.main-search__type', '.main-search__sublinks');
asideMobileAccordion();



