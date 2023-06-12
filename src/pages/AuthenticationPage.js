import React from 'react'
import ShopHeader from '../components/shop/ShopHeader'
import AuthForm from '../components/authForm/AuthForm'

const AuthenticationPage = () => {
  return (
      <>
          <ShopHeader heading03="Login / Register" />
          <AuthForm/>
      </>
  )
}

export default AuthenticationPage
