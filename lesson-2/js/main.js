'use strict';

class ProductsList {
  constructor(container = '.candies_wrp') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
  }

  _fetchProducts() {
    this.goods = [{
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
    ]
  }
  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObj = new ProductItem(product);
      this.allProducts.push(productObj);
      block.insertAdjacentHTML('beforeend', productObj.render())
    }
  }
  getSum() {
    let sum = 0;
    for (let product of this.goods) {
      sum += product.price;
    }
  }


}

class ProductItem {
  constructor(product, img = '../img/candy.jpg') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = product.img;
  }

  render() {
    return `<div class="candy_card">
                <img src="${this.img}" alt="Candy Pic" class="candy_pic">
                <h5 class="candy_title">${this.title}</h5>
                <span class="candy_price">$ ${this.price}</span>
                <button class="btn candy_btn">Add to cart</button>
            </div>`
  }
}

let list = new ProductsList();
list.render();
list.getSum();

class Cart {
  addGoods() {

  }
  deleteGoods() {

  }
  changeGoods() {

  }
}

class ElemCart {

}