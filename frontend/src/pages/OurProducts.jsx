import React from 'react'
import Poster from '../components/Poster'
import BoxOfImages from "../components/BoxOfImages"
import { useEffect } from 'react'

const OurProducts = ({categories}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
        <Poster/>
      <BoxOfImages categories={categories}/>
    </main>
  )
}

export default OurProducts
