'use client';
import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { EXPORT_ALL_APIS } from '@/utils/api/apis';
import Navbar from '../header/navbar';
import GlobalLoader from '../loaders/globalLoader';

function Layout({ children }) {
    let api = EXPORT_ALL_APIS();
    let [result, setResult] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        let loadHeaderAndFooter = async () => {
            setLoading(true);  
            try {
                let resp = await api.fetchHeaderFooterApi();
                setResult(resp.data); 
            } catch (error) {
                console.error('bad request 404');
            } finally {
                setLoading(false);  
            }
        };

        loadHeaderAndFooter();
    }, []);

    if (loading) {
       return <GlobalLoader/>
    }

    return (
        <>
            <Header result={result} />
            <Navbar result={result} />
            {children}
            <Footer result={result} />
        </>
    );
}

export default Layout;
