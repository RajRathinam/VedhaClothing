import React from 'react'
import Owner from '../components/Owner'
import ProductSlider from '../components/ProductSlider'
import FashionStoreIntro from '../components/FashionStoreIntro'
import CustomerExperience from '../components/CustomerExperience'
import ReachUs from '../components/ReachUs'
import ShopOffersBanner from "../components/ShopOffersBanner"
import { useEffect } from 'react'

const HomePage = ({testimonials,categories,contactInfo, fetchContact}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchContact();
  }, []); 
  return (
 <main>
    <Owner/>
    <ProductSlider categories={categories}/>
    <FashionStoreIntro/>
    <CustomerExperience testimonials={testimonials}/>
    <ReachUs contactInfo={contactInfo}/>
{contactInfo.special_offer && <ShopOffersBanner contactInfo={contactInfo}/>}
 </main>
  )
}

export default HomePage
