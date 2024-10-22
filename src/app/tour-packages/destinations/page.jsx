import React from 'react'
import TourPackagepage from './components/tourPackagepage'
import { EXPORT_ALL_SEO_APIS } from '@/utils/api/seoApis'
import { LoadscoData } from '@/app/_metadata/metadata'



const Page = () => {

  return (
     <>
     
     <TourPackagepage />
     </>
    
  )
}

export default Page

export async function generateMetadata(){
 
  let api=EXPORT_ALL_SEO_APIS()     
  let data = await api.fetchTourPackagesSeoApi()
  const metadata = await LoadscoData({ data }); 
  return {
      title: metadata.title,
      description: metadata.description,
      openGraph: {
          title: metadata.title,
          description: metadata.description,
          locale: metadata.locale,
          type: metadata.type,
          url: metadata.url,
          siteName: metadata.siteName,
          updatedTime: metadata.updatedTime,
          card: metadata.card,
          twitterTitle: metadata.twitterTitle,
          twitterDescription: metadata.twitterDescription
      }
  };
}
 
 