'use client'
import React, { useContext } from 'react'
import ContactForm from './contactForm'
import TopBanner from '@/app/Components/topBanner'
import { AllPackages } from '@/context/contextProviders'

function ContactPage() {
    let {contactPage}=useContext(AllPackages)
    console.log(contactPage)
    let result=contactPage.map((e)=>e?.acf)
  return (
  <>
  <TopBanner result={result[0]}/>
  <ContactForm result={result[0]}/>
  </>
  )
}

export default ContactPage