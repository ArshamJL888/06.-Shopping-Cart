import React from 'react'
import './Cartproduct.css'
export default function Cartproduct(props) {

  function removeProduct(event, id) {
    event.preventDefault();
    props.removeFunction(id);
  }

  return (
    <>
      <div className='pro-info'>
        <img className='cart-img' src={props.img} alt="" />
        <p className='cart-text'>{props.title}</p>
      </div>
      <div className='pro-price'>
        <p className='product-price'>${props.price}</p>
      </div>
      <div className='pro-action'>
        <button className='remove-btn' onClick={(event) => removeProduct(event, props.id)}>Remove</button>
      </div>
    </>
  )
}
