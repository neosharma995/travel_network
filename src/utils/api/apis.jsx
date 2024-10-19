export const EXPORT_ALL_APIS = () => {

    ///////////////////////// fetch all pages

    let fetchHomePage=async()=>{
        let resp=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=home&fields=acf&acf_format=standard`)
        let result=await resp.json()
        return result
    }
    let fetchAboutPage=async()=>{
        let resp=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=about-us&fields=acf&acf_format=standard`)
        let result=await resp.json()
        return result
    }
    let fetchTourPackagesPage=async()=>{
        let resp=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=tour-packages&fields=acf&acf_format=standard`)
        let result=await resp.json()
        return result
    }
    let fetchDestinationsPage=async()=>{
        let resp=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=destinations&fields=acf&acf_format=standard`)
        let result=await resp.json()
        return result
    }
    let fetchContactUsPage=async()=>{
        let resp=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=contact-us&fields=acf&acf_format=standard`)
        let result=await resp.json()
        return result
    }
    let fetchTermAndConditionPage=async()=>{
        let resp=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=terms-conditions&fields=acf&acf_format=standard`)
        let result=await resp.json()
        return result
    }
    let fetchPrivacyPolicyPage=async()=>{
        let resp=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=privacy-policy&fields=acf&acf_format=standard`)
        let result=await resp.json()
        return result
    }
    let fetchPlanATripPage=async()=>{
        let resp=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=plan-a-trip&fields=acf&acf_format=standard`)
        let result=await resp.json()
        return result
    }

    const fetchAllDestinations = async () => {
        let resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/destination?fields=acf&acf_format=standard`)
        let result = await resp.json()
        return result
    }
    const fetchAllPackagecategories = async () => {
        let resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/package_category?fields=acf&acf_format=standard`)
        let result = await resp.json()
        return result
    }
    const fetchAllPackages = async () => {
        let resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/packages?fields=acf&acf_format=standard`)
        let result = await resp.json()
        return result
    }
    const fetchHeaderFooterApi = async () => {
        let resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`)
        let result = await resp.json()
        return result
    }
    const fetchTestimonialsApi = async () => {
        let resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/testimonials?fields=acf&acf_format=standard`)
        let result = await resp.json()
        return result
    }
    const fetchSinglePackagesApi = async (slug) => {
        let resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/packages?slug=${slug}&fields=acf&acf_format=standard`)
        let result = await resp.json()
        return result
    }
    const fetchDestinationsFilterPackages = async (slug) => {
        let resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/destination?slug=${slug}&fields=acf&acf_format=standard`);
        let result = await resp.json();
        let destinationId = result[0]?.id.toString()
        if (!destinationId) {
            console.log('no destination id found')
            return null
        } else {

            let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/packages?destination=${destinationId}&fields=acf&acf_format=standard`);
            let filterResponse = await response.json()
            return filterResponse
        }
    };
    const fetchCategoriesFilterPackages = async (slug) => {
        let resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/package_category?slug=${slug}&fields=acf&acf_format=standard`);
        let result = await resp.json();
        let categoryId = result[0]?.id.toString()
        if (!categoryId) {
            console.log('no category id found')
        } else {
            let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/packages?package_category=${categoryId}&fields=acf&acf_format=standard`);
            let filterResponse = await response.json()
            return filterResponse
        }
    }


    //////////////////////////// submission forms post method ///////////////////////////////////////




    const submitBookingQuery = async (formData) => {
        let resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/contact-form-7/v1/contact-forms/82/feedback`, {
            method: 'POST',
            body: formData
        })
        let result = await resp.json()
        return result
    }

    const submitContactQuery = async (formData) => {
        let resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/contact-form-7/v1/contact-forms/81/feedback`, {
            method: 'POST',
            body: formData
        })
        let result = await resp.json()
        return result
    }
    const submitPlanATripQuery = async (formData) => {
        let resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/contact-form-7/v1/contact-forms/273/feedback`, {
            method: 'POST',
            body: formData
        })
        let result = await resp.json()
        return result
    }
    return {
        fetchHomePage,
        fetchAboutPage,
        fetchTourPackagesPage,
        fetchDestinationsPage,
        fetchContactUsPage,
        fetchTermAndConditionPage,
        fetchPrivacyPolicyPage,
        fetchPlanATripPage,
        fetchAllDestinations,
        fetchAllPackagecategories,
        fetchAllPackages,
        fetchHeaderFooterApi,
        fetchTestimonialsApi,
        fetchSinglePackagesApi,
        fetchDestinationsFilterPackages,
        fetchCategoriesFilterPackages,
        submitBookingQuery,
        submitContactQuery,
        submitPlanATripQuery
    }
}
