import React from 'react'
import ContactPage from './components/contactPage'
import { LoadscoData } from '../_metadata/metadata'
import { EXPORT_ALL_SEO_APIS } from '@/utils/api/seoApis'
 

const Page = () => {
  
  return (
    <div>
       <ContactPage/>
      
    </div>
  )
}

export default Page

export async function generateMetadata(){
 
  let api=EXPORT_ALL_SEO_APIS()     
  let data = await api.fetchContactUsSeoApi() 
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