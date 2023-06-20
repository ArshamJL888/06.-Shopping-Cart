import { useState } from 'react'
import './Shop.css'
import Product from '../Product/Product';
import Cartproduct from '../CartProduct/Cartproduct';
import React from 'react'

export default function Shop() {

  const [products, setProducts] = useState(
    [
      { id: 1, price: 28.99, title: 'Album 1', img: './images/Album 1.jpg' },
      { id: 2, price: 9.99, title: 'Album 2', img: './images/Demons.png' },
      { id: 3, price: 19.49, title: 'Album 3', img: './images/Album 2.png' },
      { id: 4, price: 14.74, title: 'Album 4', img: './images/Album 3.png' },
      { id: 5, price: 55, title: 'Shirt', img: './images/shirt.png' },
      { id: 6, price: 17, title: 'Band Members signture', img: './images/Band Members.png' },
      { id: 7, price: 1599.99, title: '14 Pro Max', img: './images/14promax.jpg' },
      { id: 8, price: 1199.99, title: 'iphone 13', img: './images/iphone 13.jpg' },
      { id: 9, price: 459.99, title: 'iwatch series 8', img: './images/iwatch.jpg' },
      { id: 10, price: 2499.59, title: 'Gaming Laptop', img: './images/laptop.jpg' },
      { id: 11, price: 299.49, title: 'Dior Sauvage', img: './images/sauvage.jpg' },
      { id: 12, price: 8.81, title: 'Cofee Cup', img: './images/Cofee.png' },
    ]
  )
  const [cartProducts, setCartProducts] = useState([])

  function addToCartHandler(id) {
    let productsArray = [...products];
    let cartProductsArray = [...cartProducts];
    let mainProductIndex = productsArray.findIndex((product) => product.id === id);
    cartProductsArray.push(products[mainProductIndex]);
    setCartProducts(cartProductsArray);
  }

  function removeFromCart(id) {
    let cartProductsArray = [...cartProducts];
    let mainProductIndex = cartProductsArray.findIndex((product) => product.id === id);
    cartProductsArray.splice(mainProductIndex, 1)
    setCartProducts(cartProductsArray)
  }

  function clearCartHandler() {
    setCartProducts([])
  }

  return (
    <div className='shop-container'>
      <div className='shop-products'>
        {products.map((product) => (
          <Product addFunction={addToCartHandler} key={product.id} {...product} />
        ))}
      </div>
      <div className='shop-cart'>
        <div className='cart-header product-cart'>
          <p className='info'>Information</p>
          <p className='price'>Price</p>
          <p className='action'>Action</p>
        </div>
        {cartProducts.map((product) => (
          <div className='product-cart' key={product.id} >
            <Cartproduct removeFunction={removeFromCart} {...product} />
          </div>
        ))}
      </div>
      <button className='empty-btn' onClick={clearCartHandler}>Clear Cart</button>
    </div>
  )
}
