import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import style from './app.css'

const App = () => (
  <div className="maincontainer">
    <hr/>
      <div className="itemscontainer">
      <div className="headerbox">
        <h2 className="header">Acme Store</h2>
        {/* <p className="storecopy"><img className="productcartimage" alt="cart" src={require('../Img/shopping_Cart_main.png')} /> You cart is empty.</p> */}
      </div>
      <ProductsContainer /></div>
        <hr/>
    <div className="cartcontainer"><CartContainer /></div>
  </div>
)

export default App
