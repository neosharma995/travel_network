
import { FaTwitter, FaInstagram, FaFacebookF,  FaPhoneAlt, FaEnvelope, FaYoutube } from 'react-icons/fa';

const iconMap = {
  facebook: <FaFacebookF size={22} />,
  twitter: <FaTwitter size={22} />,
  instagram: <FaInstagram size={22} />,
  youtube: <FaYoutube size={22} />,
};

 

function Header({ result }) {
  let { header = {} } = result

  return (
    <>
      <div className="header_outer container">
        <div className="header_inner">
          <div className="header_wrapper">
            <div className="header_left_section">
              <ul>
                <li><a href={`mailto:${header?.emailAddress}`}>  <FaEnvelope size={30} />{header?.emailAddress}</a></li>
                <li><a href={`tel:${header?.phone_one}`}>        <FaPhoneAlt size={30} />{header?.phone_one}</a></li>
              </ul>
            </div>
            <div className="header_right_section">
              <ul>
                {header?.socialLinks?.map((ele, index) => {
                  return <li key={index}><a href={"/"} target='_blank'>  {iconMap[ele.iconName] || null} </a></li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header