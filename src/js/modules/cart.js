const cart = () => {
  let cartNum = document.querySelector('.header__cart-quantity');
  const products = document.querySelectorAll('.products__item');
  const cartBody = document.querySelector('.cart__body');
  const removeBtn = document.querySelector('.cart__remove');
  const cartQuantity = document.querySelector('.header__cart-quantity');
  const addToCartBtn = document.querySelectorAll('.products__item-cartbtn');
  const fullPriceBox = document.querySelector('.fullprice__num');
  let fullPrice = 0;

  function removeFromCart(e) {
  	if(e.target.closest('.cart__remove')){
  		let product = e.target.closest('.cart__item');
  		let productPrice = product.querySelector('.cart__price').textContent;
  		fullPriceMinus(productPrice);
  		cartQuantityChange(false);
  		product.remove();
  	}
  };

  function addToCart(e) {
    let product = e.currentTarget.closest('.products__item');

    let productName = product.querySelector('.products__item-title').textContent;
    let productImg = product.querySelector('.products__item-img img').src;
    let productPrice = product.querySelector('.products__curent-price').textContent;

    cartBody.insertAdjacentHTML('afterbegin', generateCartProduct(productImg, productName, productPrice));
    cartQuantityChange();
    fullPricePlus(productPrice);
  };

  function fullPricePlus(price) {
  	fullPrice += parseInt(uglyPrice(price));
  	fullPriceBox.textContent = `${prettyPrice(fullPrice)} ₽`;
  };
  function fullPriceMinus(price) {
  	fullPrice -= parseInt(uglyPrice(price));
  	fullPriceBox.textContent = `${prettyPrice(fullPrice)} ₽`;
  }

  function uglyPrice(str) {
  	return	str.replace(/\s|[^\d]/ig, '');
  };

  function prettyPrice(str) {
  	return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  };

  function generateCartProduct(img, title, price) {
    return `
				<div class="cart__item">
					<div class="cart__img">
						<img src="${img}" alt="product">
					</div>
					<div class="cart__wrapper">
						<div class="cart__title">${title}</div>
						<div class="cart__price">${price} ₽</div>
					</div>
					<button class="cart__remove">
						<img src="images/icons/trash.svg" alt="trash icon">
					</button>
				</div>
		`;
  }

	function cartQuantityChange(bolean = true) {
		let num = cartQuantity.textContent;
		num = parseInt(num);
		cartQuantity.textContent = (bolean) ? ++num : --num ;
	};

addToCartBtn.forEach(el => el.addEventListener('click', addToCart));
cartBody.addEventListener('click', removeFromCart);

};

export default cart;