export const EXPORT_ALL_SEO_APIS = () => {
    const fetchHomeSeoApi=async()=>{
        try {
            let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/`)
            if (!data.ok) return null
            let response=await data.json()
            return response
        } catch (error) {
            console.error("fetchHomeSeoApi error:", error)
            return null
        }
    }
    const fetchAboutSeoApi=async()=>{
        try {
            let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/about-us`)
            if (!data.ok) return null
            let response=await data.json()
            return response
        } catch (error) {
            console.error("fetchAboutSeoApi error:", error)
            return null
        }
    }
    const fetchContactUsSeoApi=async()=>{
        try {
            let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/contact-us`)
            if (!data.ok) return null
            let response=await data.json()
            return response
        } catch (error) {
            console.error("fetchContactUsSeoApi error:", error)
            return null
        }
    }
    const fetchDestinationsSeoApi=async()=>{
        try {
            let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/destinations`)
            if (!data.ok) return null
            let response=await data.json()
            return response
        } catch (error) {
            console.error("fetchDestinationsSeoApi error:", error)
            return null
        }
    }
    const fetchPlanATripSeoApi=async()=>{
        try {
            let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/plan-a-trip`)
            if (!data.ok) return null
            let response=await data.json()
            return response
        } catch (error) {
            console.error("fetchPlanATripSeoApi error:", error)
            return null
        }
    }
    const fetchTourPackagesSeoApi=async()=>{
        try {
            let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/tour-packages`)
            if (!data.ok) return null
            let response=await data.json()
            return response
        } catch (error) {
            console.error("fetchTourPackagesSeoApi error:", error)
            return null
        }
    }
    const fetchPrivacyPolicySeoApi=async()=>{
        try {
            let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/privacy-policy`)
            if (!data.ok) return null
            let response=await data.json()
            return response
        } catch (error) {
            console.error("fetchPrivacyPolicySeoApi error:", error)
            return null
        }
    }
    const fetchTermAndConditionsSeoApi=async()=>{
        try {
            let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/terms-conditions`)
            if (!data.ok) return null
            let response=await data.json()
            return response
        } catch (error) {
            console.error("fetchTermAndConditionsSeoApi error:", error)
            return null
        }
    }

    const fetchDestinationsSeo=async()=>{
        try {
            let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/destination`)
            if (!data.ok) return null
            let response=await data.json()
            return response
        } catch (error) {
            console.error("fetchDestinationsSeo error:", error)
            return null
        }
    }

    const fetchDestinationsDynamicSeo=async(slug)=>{
        try {
            let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/destination/${slug}`)
            if (!data.ok) return null
            let response=await data.json()
            return response
        } catch (error) {
            console.error("fetchDestinationsDynamicSeo error:", error)
            return null
        }
    }
    const fetchPackagesDynamicSeo=async(slug)=>{
        try {
            let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/packages/${slug}`)
            if (!data.ok) return null
            let response=await data.json()
            return response
        } catch (error) {
            console.error("fetchPackagesDynamicSeo error:", error)
            return null
        }
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