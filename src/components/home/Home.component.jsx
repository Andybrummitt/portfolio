import React from 'react'
import AboutMe from '../aboutme/AboutMe.component'
import LandingPage from '../landingpage/LandingPage.component'
import Portfolio from '../portfolio/Portfolio.component'
import Test from '../test/Test.component'

const Home = () => {
  return (
    <>
        <LandingPage />
        <AboutMe />
        <Portfolio />
    </>
  )
}

export default Home