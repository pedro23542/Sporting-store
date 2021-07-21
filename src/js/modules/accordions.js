const accordions = (trigerBtn, content) => {
  const triger = document.querySelector(trigerBtn);
  const body = document.querySelector(content);

  triger.addEventListener('click', () => {
    body.classList.toggle('open');

    if (body.classList.contains('open')) {
      body.style.maxHeight = body.scrollHeight + 'px';
    } else {
      body.style.maxHeight = null;
    }
  });

};

const asideMobileAccordion = () => {

  if (window.innerWidth <= 920) {
    let list = document.querySelector('.aside-menu__list');
    list.addEventListener('click', e => {
      const self = e.target;
      const content = self.nextElementSibling;

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
    });
  }

};

export {
  accordions,
  asideMobileAccordion
};