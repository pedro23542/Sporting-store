const accordions = (trigerBtn, classOpen, activeTriger) => {
  const triger = document.querySelectorAll(trigerBtn);

  triger.forEach((el) => {
    el.addEventListener('click', () => {
      const acordionBody = el.nextElementSibling;
      acordionBody.classList.toggle(classOpen);

      if (acordionBody.classList.contains(classOpen)) {
        acordionBody.style.maxHeight = acordionBody.scrollHeight + 'px';
        if (activeTriger) {
          el.classList.add(activeTriger);
        }
      } else {
        acordionBody.style.maxHeight = null;
        if (activeTriger) {
          el.classList.remove(activeTriger);
        }
      }
    });
  });

};

const asideMobileAccordion = () => {
  const contentAside = document.querySelectorAll('.aside-exstra');

  let list = document.querySelector('.aside-menu__list');
  list.addEventListener('click', e => {

    if (window.innerWidth <= 920) {
      const self = e.target;
      const content = self.nextElementSibling;
      // console.log(self);

      document.querySelectorAll('.aside-exstra').forEach(el => {
        if (el != content) {
          el.style.maxHeight = null;
          el.classList.remove('aside-menu__link--active');
        }
      });

      if (self.classList.contains('aside-menu__open-link')) {
        content.classList.toggle('aside-menu__link--active');

        if (content.classList.contains('aside-menu__link--active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
          self.closest('.aside-menu__list').style.maxHeight = '4000px';
        } else {
          content.style.maxHeight = null;
        }
      }
    }

  });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 920) {

      contentAside.forEach(el => {
        el.style.maxHeight = 'initial';
        el.classList.remove('aside-menu__link--active');
      });
    } else if (window.innerWidth < 920) {
      contentAside.forEach(el => el.style.maxHeight = '0px')
   
    }

  });
};

export {
  accordions,
  asideMobileAccordion
};