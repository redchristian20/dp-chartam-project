import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Partners from '../components/Partners/Partners'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'
import '../index.css'

export default function Root() {
  return (
    <>
      <Header/>
      <Hero/>
      <Partners/>
      <Services/>
      <Footer/>
      
    </>
  );
}