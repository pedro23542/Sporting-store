const tabs = (tabsBox) => {
  const tabs = document.querySelector(tabsBox),
    tabsButtons = tabs.querySelectorAll('.tabs__btn'),
    tabsContent = tabs.querySelectorAll('.tabs__item'),
    activeClass = 'tabs__btn_active';
  console.log(tabs, tabsButtons, tabsContent);

  tabsButtons[0].classList.add(activeClass);
  tabsContent.forEach(el => el.style.display = 'none');
  tabsContent[0].style.display = 'block';

  tabsButtons.forEach((el, i) => {
    el.setAttribute('data-index', `${i}`);

    el.addEventListener('click', () => {
      tabsContent.forEach(el => el.style.display = 'none');
      tabsButtons.forEach(el => el.classList.remove(activeClass));

      el.classList.add(activeClass);
      tabsContent[el.dataset.index].style.display = 'block';
    });
  });


};
export default tabs;