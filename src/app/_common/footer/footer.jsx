'use client'

import footerBg from '../../../../public/images/background.png'
import { EXPORT_ALL_APIS } from "@/utils/api/apis"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer({ result }) {
  let api = EXPORT_ALL_APIS()  // Use the API functions from EXPORT_ALL_APIS
  let [data, setData] = useState([])
  let [justdial, setJustDial] = useState([])


  useEffect(() => {
    let loadAlldestinations = async () => {
      let resp = await api.fetchAllDestinations()
      setData(resp)
    }
    loadAlldestinations()

    let fetchJustDealData = async () => {
      let respData = await api.fetchJustDealUrl()  
      let justdial = respData?.[0]?.acf?.just_dial
      setJustDial(justdial)
    }
    fetchJustDealData(); 

  }, [])

  let { footer = {} } = result
  let links = data?.map((e) => e?.slug)

  return (
    <>

      <section className="footer_section"
        style={{
          backgroundImage: `url(${footerBg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className='footer_outer'>
          <div className="footer_inner_section container">
            <div className='footer-top'>

              <div className="footer_top_section_wrapper">

                <div className="footer_logo">
                  <Link href={'/'}>
                    <img src={footer?.siteLogoUrl} alt='footer_logo' />
                  </Link>
                  <div className="bottom_description">
                    <p>{footer?.textAfterLogo}</p>
                  </div>
                </div>


                <div className="footer_destinatins">
                  <h2 className="footer_heading">Destinations</h2>

                  <div className="footer_links">
                    <ul>
                      <li>
                        {links?.slice(0, 6)?.map((e, index) =>
                          <li key={index}>
                            <Link href={`/destinations/${e}`}>{e}</Link>
                          </li>
                        )}
                      </li>
                    </ul>
                  </div>

                </div>

                <div className="other_links">
                  <h2 className="footer_heading">Other Links</h2>

                  <div className="footer_links">
                    <ul>
                      <li>
                        <Link href={'/privacy-policy'}>Privacy Policy</Link>

                      </li>
                      <li>
                        <Link href={'/terms-and-conditions'}>Terms of Service</Link>
                      </li>
                    </ul>
                  </div>

                </div>

                <div className="contact_us">
                  <h2 className="footer_heading">Contact Us</h2>

                  <div className="contact_details">
                    <ul>
                      <li>
                        <a href={`tel:+${footer?.phone_one}`}>{footer?.phone_one}</a>
                      </li>
                      <li>
                        <a href={`mailto:${footer?.emailAddress}`}>{footer?.emailAddress}</a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="footer_heading">address</h2>
                  <div className="address">
                    <p>{footer?.address}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='copyright_section'>
              <div className='copyright_bar_inner'>
                <p>{footer?.copyrightTextFirst}</p>
              </div>
            </div>
          </div>


        </div>
        <div className="justdial">
          <a
            href={justdial}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/images/JudtDeal.png" 
              alt="Justdial" 
              style={{ width: '100%', height: '100%'}} 
            />
          </a>
        </div>

        <div className="whatsapp">
          <a
            href={`${process.env.NEXT_PUBLIC_WHATSAPP_API_URL}/send/?phone=${footer?.phone_one || 8894485216}&text&type=phone_number&app_absent=0`}
            target="_blank"
            rel="noopener noreferrer"

          >
            <FontAwesomeIcon icon={faWhatsapp} size="lg" style={{ marginRight: '8px' }} />
          </a>
        </div>
      </section>
    </>
  )
}

export default Footer