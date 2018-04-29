import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import style from './cart.css'
import img from './ProductItem.js'


const Cart  = ({ products, total, onCheckoutClicked, image }) => {

 
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        image={product.image}
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
      
    )
  ) : (
    <div className="addtocart">
    <img className="cartimage" alt="cart" src={require('../Img/Shopping cart.png')} />
    <p className="cartcopy">Please add some products<br/>to your cart.</p>
    </div>
  )



  return (
    <div className="cartstyle">
    <div className="exit"><img className="x " alt="cart" src={require('../Img/x.png')} /></div>
    <div className="cartheader"
    >
      <h3 className="">Your Cart</h3>
      </div>
      <div className="linebreak"></div>
      <div>{nodes}</div>
      <div className="totalbox">
      <p className="total">Total:</p>
      <div className="totalprice">&#36;{total}</div>
      </div>
      <button className="checkoutbutton" onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
