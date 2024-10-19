'use client'
import TopBanner from '@/app/Components/topBanner'
import { AllPackages } from '@/context/contextProviders'
import React, { useContext } from 'react'
import TermAndCondition from './termAndCondition'

function TermAndConditionPage() {
    let {termPage}=useContext(AllPackages)
    let result=termPage.map((e)=>e?.acf)
  return (
   <>
   <TopBanner result={result[0]}/>
   <TermAndCondition termPage={termPage}/>
   
   </>
  )
}

export default TermAndConditionPage