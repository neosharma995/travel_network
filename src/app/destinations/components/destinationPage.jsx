'use client'
import React, { useContext } from 'react'
import DestinationsCard from './destinationsCard'
import TopBanner from '@/app/Components/topBanner'
import { AllPackages } from '@/context/contextProviders'

function DestinationPage() {
    let {destinationsPage,destinations}=useContext(AllPackages)
    let result=destinationsPage?.map((e)=>e?.acf)
  return (
     <>
     <TopBanner result={result[0]}/>
     <DestinationsCard destinations={destinations}/>
     </>
  )
}

export default DestinationPage