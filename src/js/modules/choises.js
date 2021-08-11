import Choices from 'choices.js';

const selectInputs = () => {

  try {
    // Goods sorting select
    const catalogGoodsFilter = document.querySelector('.products__view-select');
    const choices = new Choices(catalogGoodsFilter, {
      searchEnabled: false,
      itemSelectText: '',
    });
  } catch (e) {}

  try {
    const viewingGoodsNum = document.querySelector('.pagination-extra__select');
    const choices2 = new Choices(viewingGoodsNum, {
      searchEnabled: false,
      itemSelectText: '',
    });

  } catch (e) {}

};
export default selectInputs;