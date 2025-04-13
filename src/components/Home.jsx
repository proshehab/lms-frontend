import React from 'react'
import Header from './Header'
import Hero from './Hero'
import FeaturedCategories from './FeaturedCategories'
import FeaturedCourses from './FeaturedCourses'
import Footer from './Footer'

const Home = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <FeaturedCategories/> 
        <FeaturedCourses/>
        <Footer/>
    </>
  )
}

export default Home
