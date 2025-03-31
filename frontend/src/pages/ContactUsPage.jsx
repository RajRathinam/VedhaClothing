import React from 'react'
import ContactForm from '../components/ContactForm'
import VisitUs from '../components/VisitUs'
import { useEffect } from 'react'

const ContactUsPage = ({contactInfo}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 

  return (
    <main className='mb-5'>
     <ContactForm/> 
     <VisitUs contactInfo={contactInfo}/>
    </main>
  )
}

export default ContactUsPage
