'use client'
import { EXPORT_ALL_APIS } from '@/utils/api/apis'
import React, { useEffect, useState } from 'react'
import DestinationsTourDetails from './destinationsPackages'
import TopBar from './topBar'

function DestinationsSlugPage({slug}) {
    let api=EXPORT_ALL_APIS()
    console.log(slug)
    let [allPackages,setAllPackages]=useState([])
    useEffect(()=>{
        let loadAllfilterPackages=async()=>{
            let resp=await api.fetchDestinationsFilterPackages(slug)
            setAllPackages(resp)                   

        }
        loadAllfilterPackages()
    },[])

 

   
    
  return (
     <>
     <TopBar/>
      <DestinationsTourDetails allPackages={allPackages} slug={slug}/>
     </>
  )
}

export default DestinationsSlugPage












