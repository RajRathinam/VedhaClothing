import React from 'react'
import OurJourney from '../components/OurJourney'
import OurValues from '../components/OurValues'
import VisitUs from '../components/VisitUs'
import MeetTheTeam from '../components/MeetTheTeam'
import { useEffect } from 'react'

const AboutUsPage = ({contactInfo}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <main className='mb-5'>
      <OurJourney/>
      <OurValues/>
      <VisitUs contactInfo={contactInfo}/>
      <MeetTheTeam/>
    </main>
  )
}

export default AboutUsPage
