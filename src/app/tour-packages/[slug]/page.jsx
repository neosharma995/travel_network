 import React from 'react'
import InnerslugPage from './components/tourInnerSlug'
import { EXPORT_ALL_APIS } from '@/utils/api/apis'

function page({params}) {
    let {slug}=params

 

   
  return (
   <>
 <InnerslugPage slug={slug}/>
   </>
  )
}

export default page

 



 