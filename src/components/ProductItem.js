import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import style from './productitem.css'
import ReactDOM from 'react-dom';


const ProductItem = ({ product, onAddToCartClicked, image }) => (
  
  
  <div className="watchcontainer">
    <div className="watchimage">
      <img src={product.image} />
    </div>
     
     <div className="infocontainer">
        <Product className='productinfo'
          title={product.title}
          price={product.price}
          inventory={product.inventory} 
          image={product.image} 
          addToCart={onAddToCartClicked}
          />
        <button className='productbutton'
          onClick={onAddToCartClicked}
          disabled={product.inventory > 0 ? '' : 'disabled'}>
          {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
        </div>
    </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}


export default ProductItem
