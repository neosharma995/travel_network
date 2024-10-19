'use client';

import Sidebar from "@/app/_common/sidebar/sidebar";
import { AllPackages } from "@/context/contextProviders";
import { EXPORT_ALL_APIS } from "@/utils/api/apis";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const TourDetails = ({ allPackages }) => {
  console.log(allPackages)
  let destination = allPackages.map((e) => e.destination)
  console.log(destination[0])
  const api = EXPORT_ALL_APIS();
  const { categories = [] } = useContext(AllPackages);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [packages, setPackages] = useState(allPackages);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPackages(allPackages);
  }, [allPackages]);

  const fetchPackages = async (slug) => {
    setIsLoading(true);
    try {
      if (slug === 'all') {
        setPackages(allPackages);   
      } else {
        const resp = await api.fetchCategoriesFilterPackages(slug);
        setPackages(resp);
      }
    } catch (error) {
      console.error("Error fetching packages:", error);
    } finally {
      setIsLoading(false);   
    }
  };

  const handleCategoryChange = (event) => {
    const categorySlug = event.target.value;
    setSelectedCategory(categorySlug);
    fetchPackages(categorySlug);
  };

  return (
    <div className="container tour_packages_outer">
      <div className="tour_packages_inner">
        <div className="tour_packages_wrapper">
          <div className="filter_by_categories">
            <select value={selectedCategory} onChange={handleCategoryChange} className="custom-dropdown">
              <option value="all">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category.slug}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="packages-grid">
            {isLoading ? (
              <div>Loading...</div>
            ) : packages.length === 0 ? (
              <div>No packages found for the selected category.</div>
            ) : (
              packages.map((packageGroup, groupIndex) => {
                const packagesArray = packageGroup?.acf?.all_packages;
                const destination = packageGroup?.destination[0];
                if (Array.isArray(packagesArray)) {
                  return packagesArray.map((packageItem, index) => (
                    <Link href={`/tour-packages/${packageGroup?.slug}`}>
                      <div className="package" key={`${groupIndex}-${index}`}>
                        <div className="packages-image">
                          <img src={packageItem.package_image} alt={packageItem.package_title} />
                        </div>
                        <div className="packages-inner-txt">
                          <h3>{packageItem?.package_title}</h3>
                          <p>
                            {packageItem?.package_description?.length > 80
                            ? `${packageItem.package_description.slice(0, 80)}...`
                            : packageItem.package_description}
                          </p>
                          <div className="days-night">
                            <strong>Days {packageItem.package_days} / Nights {packageItem.packages_nights}</strong>
                            <p><span>From</span> {packageItem.package_price}</p>
                          </div>
                          <button>Book Now</button>
                          
                        </div>
                      </div>
                    </Link>
                  ));
                } else {
                  return null;
                }
              })
            )}
          </div>
          
        </div>
      </div>
     
    </div>
  );
};

export default TourDetails;
