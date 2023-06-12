import React from 'react'
import ShopHeader from '../components/shop/ShopHeader'
import ContactUs from '../components/contactUs/ContactUs'

const ContactUsPage = () => {
  return (
      <>
          <ShopHeader heading03="Contact Us" />
          <ContactUs />
          <div className='mt-80'> footer</div>
      </>
  )
}

export default ContactUsPage
