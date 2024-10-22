



 
import { EXPORT_ALL_SEO_APIS } from '@/utils/api/seoApis'
import InnerslugPage from './components/InnerslugPage'
import { LoadscoData } from '@/app/_metadata/metadata'


function page({ params }) {
  let { innerslug } = params
  return (
    <>

      <InnerslugPage slug={innerslug} />
    </>
  )
}
export default page
export async function generateMetadata({ params }) {
 
  let {innerslug}=params
  let slug=innerslug
  let api = EXPORT_ALL_SEO_APIS();
  let data = await api.fetchPackagesDynamicSeo(slug);
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
      twitterDescription: metadata.twitterDescription,
    }
  };
}

 


  


