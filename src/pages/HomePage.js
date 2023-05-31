import React from 'react'
import TopSlider from '../components/TopSlider/TopSlider';
import Policies from '../components/policies/Policies';
import FeaturedProducts from '../components/featuredProducts/FeaturedProducts';
import MainImg from '../components/MainImg';
import BestSeller from '../components/bestSeller/BestSellers';
import Images from '../components/Images';
import NewArrivals from '../components/newArrival/NewArrivals';
import BottomSlides from '../components/bottom/BottomSlides';




const HomePage = () => {
  return (
      <>
          <TopSlider />
          <Policies />
          <FeaturedProducts/>
          <MainImg />
          <BestSeller />
          <Images />
          <NewArrivals />
          <BottomSlides/>
      </>
  )
}


export default HomePage;