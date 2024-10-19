'use client';

import { EXPORT_ALL_APIS } from "@/utils/api/apis";
import Link from "next/link";
import { useEffect, useState } from "react";

const DestinationsTourDetails = ({ allPackages, slug }) => {
  const api = EXPORT_ALL_APIS();
  const [packages, setPackages] = useState(allPackages);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPackages(allPackages);
  }, [allPackages]);

  return (
    <div className="container tour_packages_outer">
      <div className="tour_packages_inner">
        <div className="tour_packages_wrapper">
          <div className="packages-grid">
            {isLoading ? (
              <div>Loading...</div>
            ) : packages?.length === 0 || packages===null || packages===undefined? (
              <div>No packages found.</div>
            ) : (
              packages.map((packageGroup, groupIndex) => {
                const packagesArray = packageGroup?.acf?.all_packages;
                if (Array.isArray(packagesArray)) {
                  return packagesArray.map((packageItem, index) => (
                    <Link href={`/destinations/${slug}/${packageGroup.slug}`} key={`${groupIndex}-${index}`}>
                      <div className="package">
                        <div className="packages-image">
                          <img src={packageItem.package_image} alt={packageItem.package_title} />
                        </div>
                        <div className="packages-inner-txt">
                          <h3>{packageItem?.package_title}</h3>
                          <p>{packageItem?.package_description}</p>
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

export default DestinationsTourDetails;
