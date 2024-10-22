'use client';
import { EXPORT_ALL_APIS } from '@/utils/api/apis';
import React, { createContext, useState, useEffect } from 'react';


 
export const AllPackages = createContext();

 
export function ContextProvider({ children }) {
    const api = EXPORT_ALL_APIS();
    const [destinations, setDestinations] = useState([]);
    const [categories, setCategories] = useState([]);
    const [allPackages, setAllPackages] = useState([]);
    const [homePage, setHomePage] = useState([]);
    const [aboutPage, setAboutPage] = useState([]);
    const [tourPage, setTourPage] = useState([]);
    const [destinationsPage, setdestinationsPage] = useState([]);
    const [contactPage, setContactPage] = useState([]);
    const [termPage, setTermPage] = useState([]);
    const [privacyPage, setPrivacyPage] = useState([]);
    const [planPage, setPlanPage] = useState([]);
    const [testimonials, setTestimonilals] = useState([]);
   

 
    useEffect(() => {
        const loadPackagesData = async () => {
                const [destinationsResp, categoriesResp, packagesResp, homePageResp, aboutPageResp,tourPageResp,destinationPageResp,contactPageResp,termPageResp,privacyPageResp,planPageResp,testiPostResp] = await Promise.all([
                    api.fetchAllDestinations(),
                    api.fetchAllPackagecategories(),
                    api.fetchAllPackages(),
                    api.fetchHomePage(),
                    api.fetchAboutPage(),
                    api.fetchTourPackagesPage(),
                    api.fetchDestinationsPage(),
                    api.fetchContactUsPage(),
                    api.fetchTermAndConditionPage(),
                    api.fetchPrivacyPolicyPage(),
                    api.fetchPlanATripPage(),
                    api.fetchTestimonialsApi()
                   
                ]);
                setDestinations(destinationsResp);
                setCategories(categoriesResp);
                setAllPackages(packagesResp);
                setHomePage(homePageResp);
                setAboutPage(aboutPageResp);
                setTourPage(tourPageResp)
                setdestinationsPage(destinationPageResp)
                setContactPage(contactPageResp)
                setTermPage(termPageResp)
                setPrivacyPage(privacyPageResp)
                setPlanPage(planPageResp)
                setTestimonilals(testiPostResp)
        };
        loadPackagesData();  
    }, []); 

     

    
    return (
        <AllPackages.Provider
            value={{
                destinations,
                categories,
                allPackages,
                homePage,
                aboutPage,
                tourPage,
                destinationsPage,
                contactPage,
                termPage,
                privacyPage,
                planPage,
                testimonials
            }}>
            {children}
        </AllPackages.Provider>
    );
}
