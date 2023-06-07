import React from 'react'
import ShopHeader from '../components/shop/ShopHeader'
import Checkout from '../components/checkout/Checkout'

const CheckoutPage = () => {
  return (
      <>
          <ShopHeader heading03="Checkout" />
          <Checkout />
          <div className='mt-80'>footer</div>
      </>
  )
}

export default CheckoutPage






