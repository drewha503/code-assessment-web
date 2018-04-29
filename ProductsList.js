import React from 'react'
import PropTypes from 'prop-types'
import style from './ProductsList.js'

const ProductsList = ({ title, children }) => (
  <div>
    <h3 className="productTitles">{title}</h3>
    <div>{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
