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

const saveCart = () => {
  localStorage.setItem('cartList', document.getElementById('cart__items').innerHTML);
  localStorage.setItem('totalPrice', document.getElementById('price').innerHTML);
};

function totalPrice() {
  const cartItem = document.querySelectorAll('.cart__item');
  let result = 0;
  cartItem.forEach((item) => { result += parseFloat(item.innerHTML.split('$')[1]); });
  document.getElementById('price').innerText = result.toFixed(2);
}

function cartItemClickListener(event) {
  event.target.parentNode.removeChild(event.target);
  totalPrice();
  saveCart();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: R$${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const addToCartButton = createCustomElement('button', 'item__add', 'Add to cart!');
  addToCartButton.addEventListener('click', () => {
    fetch(`https://api.mercadolibre.com/items/${event.target.parentNode.firstChild.innerText}`)
    .then(result => result.json())
    .then((data) => {
      const product = {
        sku: data.id,
        name: data.title,
        salePrice: data.price,
      };
      const cartItem = createCartItemElement(product);
      document.getElementById('cart__items').appendChild(cartItem);
      totalPrice();
      saveCart();
    });
  });
  section.appendChild(addToCartButton);
  return section;
}

const createLoading = () => {
  const loading = document.createElement('h2');
  loading.className = 'loading';
  loading.innerHTML = 'loading...';
  document.body.appendChild(loading);
};

function createProductItemList(QUERY) {
  createLoading();
  fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`)
    .then(result => result.json())
    .then((data) => {
      document.querySelector('.loading').parentNode.removeChild(document.querySelector('.loading'));
      for (let index = 0; index < 16; index += 1) {
        const item = data.results[index]
        const features = {
          sku: item.id,
          name: item.title,
          image: item.thumbnail,
        };
        document
          .getElementById('items')
          .appendChild(createProductItemElement(features));
      };
    });
};

const alerting = () => {
  document.getElementById('searchBar').value = "";
  alert(` Thank you for your interest, but at the moment the site has only one page :)
  If you want to know more about my work you can access my Github or contact me through LinkedIn, the links for them are here on the right side ------>`);
}

window.onload = () => {
  createProductItemList('computador');
  document.getElementById('empty-cart').addEventListener('click', () => {
    document.getElementById('cart__items').innerHTML = '';
    document.getElementById('price').innerHTML = 0;
    saveCart();
  });
  if (localStorage.cartList === undefined) {
    localStorage.cartList = "";
  }
  document.getElementById('cart__items').innerHTML = localStorage.cartList;
  const cartSaved = document.getElementsByClassName('cart__item');
  for (let index = 0; index < cartSaved.length; index += 1) {
    cartSaved[index].addEventListener('click', cartItemClickListener);
  }
  if (localStorage.totalPrice === undefined) {
    localStorage.totalPrice = 0;
  } else {
    document.getElementById('price').innerHTML = localStorage.totalPrice;
  }
  const searchButton = document.getElementById('submitButton');
  searchButton.addEventListener('click', alerting);
  const menuItems = document.getElementsByClassName('menu-item');
  for (let index = 0; index < menuItems.length; index += 1) {
    menuItems[index].addEventListener('click', alerting);
  }
};
