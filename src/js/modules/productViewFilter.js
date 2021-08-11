const viewFilter = () => {
  try {
    const buttonsBox = document.querySelector('.products__view-buttons'),
      buttons = buttonsBox.querySelectorAll('button'),
      productsBox = document.querySelector('.products__items');

    buttonsBox.addEventListener('click', (e) => {
      const self = e.target;

      buttons.forEach(el => {
        el.classList.remove('products__view-active');
      });

      self.closest('button').classList.add('products__view-active');
      productsBox.classList.toggle('products__items-list-view');
    });
  } catch (e) {}

};
export default viewFilter;