'use client'
import React, { useContext } from 'react'
import TourDetails from './tourdetails'
import TopBanner from '@/app/Components/topBanner'
import { AllPackages } from '@/context/contextProviders'

function TourPackagepage() {
    let { tourPage, allPackages } = useContext(AllPackages)
   
    let result = tourPage?.map((e) => e?.acf)
    return (
        <>
            <TopBanner result={result[0]} />
            <TourDetails allPackages={allPackages} />
        </>
    )
}

export default TourPackagepage