import './Product.css'
import React from 'react'

export default function Product(props) {
  function addProduct(event, id) {
    event.preventDefault();
    props.addFunction(id);
  }

  return (
    <div className='product-card'>
      <h5 className='product-title'>{props.title}</h5>
      <img className='product-img' src={props.img} alt="Product Photo" />
      <div className='product-footer'>
        <p className='product-price'>${props.price}</p>
        <button onClick={(event) => addProduct(event, props.id)} className='add-btn'>Add To Cart</button>
      </div>
    </div>
  )
}

