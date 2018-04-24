import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, image }) => (


<div className="productinfo">
<img className="cart_watch" src={image}/>
  <div className="tp_box">
      <div className="title">{title}<div className="price"> &#36;{price}</div></div>
      </div>
      <div className="inventory"> {inventory ? `${inventory} REMAINING` : null}</div>
      </div>
)





Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
