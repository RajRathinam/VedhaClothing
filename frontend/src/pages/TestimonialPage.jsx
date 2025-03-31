import React from 'react'
import Testimonials from '../components/Testimonials'
import VisitUs from '../components/VisitUs'
import { useEffect } from 'react'

const TestimonialPage = ({testimonials,contactInfo,fetchTestimonials}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        fetchTestimonials();
      }, []); 
  return (
    <main className='mb-5'>
      <Testimonials testimonials={testimonials}/>
      <VisitUs contactInfo={contactInfo}/>
    </main>
  )
}

export default TestimonialPage
