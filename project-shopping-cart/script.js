const url = 'https://api.mercadolibre.com/sites/MLB/search?q=';
const itemUrl = 'https://api.mercadolibre.com/items/';
const product = 'computador';
const cartItem = '.cart__items';

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(
    createCustomElement('button', 'item__add', 'Adicionar ao carrinho!')
  );
  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

const updateTotalPrice = async () => {
  const cartListItem = Array.from(document.querySelectorAll('.cart__item'));
  const cartStrings = cartListItem.map(({ innerText }) => innerText); // DESESTRUTURAÇÃO MÁXIMA
  const priceList = cartStrings.map((string) => +string.split('PRICE: $')[1]);
  const totalPrice = priceList.reduce((sum, current) => sum + current, 0);

  const totalPriceText = document.querySelector('.total-price');
  totalPriceText.innerText = totalPrice;
};

const cartItemClickListener = (event) => {
  const cart = event.target.parentElement;
  cart.removeChild(event.target);
  updateTotalPrice().then(() =>
    localStorage.setItem('localCart', cart.innerHTML)
  );
};

const getLocalCart = async () => {
  const cart = document.querySelector(cartItem);
  cart.innerHTML = localStorage.getItem('localCart');
  Array.from(cart.children).forEach((item) => {
    item.addEventListener('click', cartItemClickListener);
  });
  await updateTotalPrice();
};

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const loadingMessage = () => {
  const messageHTML = document.createElement('div');
  messageHTML.className = 'loading';
  messageHTML.innerText = 'loading...';
  document.body.appendChild(messageHTML);
};

const deleteMessage = () => {
  document.body.removeChild(document.querySelector('.loading'));
};

const createProductList = async () => {
  try {
    loadingMessage();
    const res = await fetch(`${url}${product}`);
    if (res.ok) {
      const data = await res.json();
      deleteMessage();
      return data.results.forEach((value) => {
        document
          .querySelector('.items')
          .appendChild(createProductItemElement(value));
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const addToCart = async (item) => {
  try {
    const cart = document.querySelector(cartItem);
    const res = await fetch(`${itemUrl}${item}`);
    const data = await res.json();
    cart.appendChild(createCartItemElement(data));
    localStorage.setItem('localCart', cart.innerHTML);
    await updateTotalPrice();
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener('click', ({ target }) => {
  if (target.classList.contains('item__add')) {
    return addToCart(getSkuFromProductItem(target.parentElement));
  }
});

const emptyCart = async () => {
  const cartToEmpty = document.querySelector(cartItem);
  cartToEmpty.innerHTML = '';
  localStorage.removeItem('localCart');
  await updateTotalPrice();
};

window.onload = () => {
  document.querySelector('.empty-cart').addEventListener('click', emptyCart);
  createProductList();
  getLocalCart();
};
