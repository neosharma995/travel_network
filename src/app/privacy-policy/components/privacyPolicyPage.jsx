'use client'
import TopBanner from '@/app/Components/topBanner'
import { AllPackages } from '@/context/contextProviders'
import React, { useContext } from 'react'
import PrivacyPolicy from './privacyPolicy'

function PrivacyPolicyPage() {
    let {privacyPage}=useContext(AllPackages)
   let result=privacyPage.map((e)=>e?.acf)
    
  return (
    <>
    <TopBanner result={result[0]}/>
    <PrivacyPolicy privacyPage={privacyPage}/>
    
    </>
  )
}

export default PrivacyPolicyPage