import React from 'react'
import PrivacyPolicyPage from './components/privacyPolicyPage'
import { EXPORT_ALL_SEO_APIS } from '@/utils/api/seoApis'
import { LoadscoData } from '../_metadata/metadata'

function page() {
  return (
  <>
  <PrivacyPolicyPage/>
  </>
  )
}

export default page

export async function generateMetadata(){
 
  let api=EXPORT_ALL_SEO_APIS()     
  let data = await api.fetchPrivacyPolicySeoApi()
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