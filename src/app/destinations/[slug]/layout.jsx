import { LoadscoData } from "@/app/_metadata/metadata";
import { EXPORT_ALL_APIS } from "@/utils/api/apis";
import { EXPORT_ALL_SEO_APIS } from "@/utils/api/seoApis";

 

export default function Layout({ children }) {
  return (
    <>
      {children}
    </>
  );

  
}


export async function generateMetadata({ params }) {
  let pageApi = EXPORT_ALL_APIS();
  let result = await pageApi.fetchAllDestinations();
  let slugs = result.map((e) => e.slug);

  let currentSlug = Array.isArray(params.slug)
    ? params.slug.join('/')
    : params.slug || slugs[0]; 
  let seoApi = EXPORT_ALL_SEO_APIS();
  let data = await seoApi.fetchDestinationsDynamicSeo(currentSlug);

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



 


 

