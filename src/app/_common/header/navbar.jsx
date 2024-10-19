"use client";
import BookingForm from '@/app/Components/bookingForm';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import { useRouter } from "next/navigation";

import { usePathname } from "next/navigation";

function Navbar({ result }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  let { header = {} } = result;
  const router = useRouter();



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // Get the current path
  const currentPath = router.pathname;

  // Debugging: Log the current path
  useEffect(() => {
    console.log("Current Path:", currentPath);
  }, [currentPath]);

  const pathname = usePathname();

  // Normalize the pathname to avoid issues with trailing slashes, etc.
  const isActive = (path) => pathname === path || pathname === `${path}/`;

  return (
    <>
      {isOpen && <BookingForm setIsOpen={setIsOpen} />}

      <div className="container navbar_wrapper_outer">
        <div className={`navbar inner ${isScrolled ? "active" : ""}`}>
          <div className="navbar_wrapper">
            <div className="navbar_section_first">
              <Link href="/">
                <img src={header?.siteLogoUrl} alt="logo" />
              </Link>
            </div>
            <div className={`navbar_section_second ${isMenuOpen ? 'active' : ''}`}>
              <ul className="navbar">
                <li>
                  <Link href="/" className={isActive("/") ? "active" : ""}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className={isActive("/about-us") ? "active" : ""}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tour-packages"
                    className={isActive("/tour-packages") ? "active" : ""}
                  >
                    Tour Packages
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinations"
                    className={isActive("/destinations") ? "active" : ""}
                  >
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/plan-your-trip"
                    className={isActive("/plan-your-trip") ? "active" : ""}
                  >
                    Plan Your Trip
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className={isActive("/contact-us") ? "active" : ""}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar_section_third">
              <button onClick={() => setIsOpen(true)}>Book now</button>
            </div>
            <button className="toggle_button" onClick={toggleMenu}>
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
