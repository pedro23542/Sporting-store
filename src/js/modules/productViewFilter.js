const viewFilter = () => {
  try {
    const buttonsBox = document.querySelector('.products__view-buttons'),
      buttons = buttonsBox.querySelectorAll('button'),
      productsBox = document.querySelector('.products__items'),
      listBtn = document.querySelector('.products__view-list');

    buttonsBox.addEventListener('click', (e) => {
      const btn = e.target.closest('button');

      buttons.forEach(el => {
        el.classList.remove('products__view-active');
      });

      btn.classList.add('products__view-active');

      if(btn.classList.contains('products__view-list')){
         productsBox.classList.add('products__items-list-view');
      } else productsBox.classList.remove('products__items-list-view');

    });

    function hideButtons() {
      if(window.innerWidth <= 720){
        productsBox.classList.add('products__items-list-view');
        buttonsBox.style.display = 'none';
      } else {
        buttonsBox.style.display = 'block';
        buttons.forEach(el =>  el.classList.remove('products__view-active'));
        listBtn.classList.add('products__view-active');
      }
    }

    hideButtons();
    window.addEventListener('resize', hideButtons);
  } catch (e) {}

};
export default viewFilter;