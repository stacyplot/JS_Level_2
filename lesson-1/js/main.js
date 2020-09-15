'use strict';

const products = [{
    id: 1,
    title: 'Foil Solid Milk Pink Balls, 1kg',
    price: 17
  },
  {
    id: 2,
    title: 'Foil Solid Milk Purple Balls, 1kg',
    price: 17
  },
  {
    id: 3,
    title: 'Foil Solid Milk Silver Balls, 1kg',
    price: 17
  },
  {
    id: 4,
    title: 'Foil Solid Milk Black Balls, 1kg',
    price: 17
  },
  {
    id: 5,
    title: 'Candy Cane',
    price: 12
  },
  {
    id: 6,
    title: 'Cotton Candy',
    price: 20
  },
];

const renderProduct = (item, img = 'img/candy.jpg') =>
  `<div class="candy_card">
                <img src="${img}" alt="Candy Pic" class="candy_pic">
                <h5 class="candy_title">${item.title}</h5>
                <span class="candy_price">$ ${item.price}</span>
                <button class="btn candy_btn">Add to cart</button>
            </div>`;

const renderProducts = list => {
  document.querySelector('.candies_wrp').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item, item.img)).join(''));
};

renderProducts(products);