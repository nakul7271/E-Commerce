import React from 'react'
import ShopHeader from '../components/shop/ShopHeader'
import CartItems from '../components/Cart/CartItems'

const CartPage = () => {
  return (
      <>
          <ShopHeader heading03="Cart" />
          <CartItems/>
      </>
  )
}

export default CartPage
