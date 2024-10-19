'use client'
import { useContext } from "react"
import HighlightsSection from "./highlight"
import TourismInfoSection from "./tourism"
import { AllPackages } from "@/context/contextProviders"
import TopBanner from "@/app/Components/topBanner"

 

function AboutPage() {
    let{aboutPage={}}=useContext(AllPackages) 
    let result=aboutPage[0]?.acf
  return (
     <>
     <TopBanner result={result}/>
     <TourismInfoSection result={result}/>
     <HighlightsSection result={result}/>

   
     </>
  )
}

export default AboutPage