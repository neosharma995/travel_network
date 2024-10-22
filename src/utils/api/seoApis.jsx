export const EXPORT_ALL_SEO_APIS = () => {
    const fetchHomeSeoApi=async()=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/`)
        let response=await data.json()
        return response
    }
    const fetchAboutSeoApi=async()=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/about-us`)
        let response=await data.json()
        return response
    }
    const fetchContactUsSeoApi=async()=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/contact-us`)
        let response=await data.json()
        return response
    }
    const fetchDestinationsSeoApi=async()=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/destinations`)
        let response=await data.json()
        return response
    }
    const fetchPlanATripSeoApi=async()=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/plan-a-trip`)
        let response=await data.json()
        return response
    }
    const fetchTourPackagesSeoApi=async()=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/tour-packages`)
        let response=await data.json()
        return response
    }
    const fetchPrivacyPolicySeoApi=async()=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/privacy-policy`)
        let response=await data.json()
        return response
    }
    const fetchTermAndConditionsSeoApi=async()=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/terms-conditions`)
        let response=await data.json()
        return response
    }

    const fetchDestinationsSeo=async()=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/destination`)
        let response=await data.json()
        return response
    }


    ///////////////////////////////////// fetch all destinations ////////////////////////////////////////////////////////


    const fetchDestinationsDynamicSeo=async(slug)=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/destination/${slug}`)
        let response=await data.json()
        return response
    }
    const fetchPackagesDynamicSeo=async(slug)=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/packages/${slug}`)
        let response=await data.json()
        return response
    }

    return{
        fetchHomeSeoApi,
        fetchAboutSeoApi,
        fetchContactUsSeoApi,
        fetchDestinationsSeoApi,
        fetchPlanATripSeoApi,
        fetchTourPackagesSeoApi,
        fetchPrivacyPolicySeoApi,
        fetchTermAndConditionsSeoApi,
        fetchDestinationsSeo,
        fetchDestinationsDynamicSeo,
        fetchPackagesDynamicSeo
    }
}