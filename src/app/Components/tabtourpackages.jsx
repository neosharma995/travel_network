'use client';
import { AllPackages } from '@/context/contextProviders';
import { EXPORT_ALL_APIS } from '@/utils/api/apis';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import BookingForm from './bookingForm';

const TabTourPackages = () => {
  let router=useRouter()
  const api = EXPORT_ALL_APIS();
  const { categories = [] } = useContext(AllPackages);

  const [selectedCategory, setSelectedCategory] = useState(null);  
  const [packages, setPackages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
 

  // Fetch packages based on category slug
  const fetchPackages = async (slug) => {
    try {
      const resp = await api.fetchCategoriesFilterPackages(slug);
      setPackages(resp);
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  // Fetch packages for the first category by default
  useEffect(() => {
    if (categories.length > 0) {
      const defaultCategorySlug = categories[0].slug;
      setSelectedCategory(defaultCategorySlug);
      fetchPackages(defaultCategorySlug);
    }
  }, [categories]);

  
  useEffect(() => {
    if (selectedCategory) {
      fetchPackages(selectedCategory);
    }
  }, [selectedCategory]);

  
 
 
 

  return (
    <>
    {isOpen&&<BookingForm setIsOpen={setIsOpen}/>}
    
    <div className="container tab-tour-packages">
      <h2>Specialized Holiday Travel Tour Packages</h2>
      <p>Vacations to make your experience enjoyable in India!</p>
      <div className='packages-container-box'> 
        <div className="tab-Container">
          {categories.slice(0, 7).map((category, index) => (
            <button
              key={index}
              className={`tab-packages ${selectedCategory === category.slug ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.slug)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="packagesContainer">
          {packages?.map((filterPackage, index) => {
            const result = filterPackage?.acf?.all_packages;
            if (Array.isArray(result)) {
              return result.map((pkg, pkgIndex) => (
                <div key={`${index}-${pkgIndex}`} className="packageCard">
               
                  <Link href={`/destinations/${filterPackage.slug}`}>
                    <img src={pkg.package_image} alt={pkg.package_title} className="packageImage" />
                    <h3 className="packageTitle">{pkg.package_title}</h3>
                    <p className="packageRoute">{pkg.package_root}</p>
                    <p className="packageDuration">{pkg.package_duration}</p>
                    <p className="packagePrice">
                      From: {pkg.package_price} <span className="originalPrice">{pkg.original_price}</span>
                    </p>
                  </Link>
                    <button className="bookButton" onClick={()=>setIsOpen(true)}>Book Now</button>
                </div>
              ));
            } else {
              return null;
            }
          })}
        </div>

        <button className="viewMoreButton" onClick={()=>router.push('/tour-packages')} style={{cursor:'pointer'}}>View More</button>
      </div>
    </div>
    </>
  );
};

export default TabTourPackages;
