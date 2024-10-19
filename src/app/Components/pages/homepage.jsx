'use client'
import React, { useContext } from 'react'
import Slider from '../herosection'
import PopularDestinations from '../populardestination'
import TourPackages from '../tourpackages'
import TabTourPackages from '../tabtourpackages'
import AboutSection from '../aboutus'
import TestimonialsSection from '../testimonial'
import { AllPackages } from '@/context/contextProviders'
const HomePage = () => {

  let { homePage } = useContext(AllPackages)


  return (
    <>
      <Slider result={homePage} />
      <PopularDestinations />
      <TourPackages />
      <TabTourPackages />
      <AboutSection result={homePage} />
      <TestimonialsSection result={homePage} />
    </>
  );
};

export default HomePage;