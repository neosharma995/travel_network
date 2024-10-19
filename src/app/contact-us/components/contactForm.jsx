import ContactUs from "./contactUs";
import { FaMapMarkedAlt, FaMobileAlt} from 'react-icons/fa';

const ContactForm = ({result}) => {

  console.log(`result`)
  console.log(result)
   
  return (
    <div className="container">
      <div className="contact-address-section">

          <div className="address-card">
            <div className="icon-addres-card"> <FaMapMarkedAlt size={30}/> </div>
            <div className="card-txt">
              <h2>Address</h2>
              <a>{result?.address}</a>
             
            </div>
          </div>

            <div className="address-card">
              <div className="icon-addres-card"> <FaMobileAlt size={30}/> </div>
                <div className="card-txt">
                  <h2>Contact</h2>
                    {result?.contact.map((e,index)=>{
                      return <p key={index}> <a href={`tel:+91${e?.phone_number}`}>{e?.phone_number}</a> </p>
                    })}
                   <p>
                    <a href={`mailto:${result?.email_address}`}>
                      {result?.email_address}
                    </a>
                  </p>
                </div>
            </div>

        <div className="happy-client">
            <h2>85+ Expert Happy Clients</h2>
            <img src="/images/happy-client.png"/>
        </div>

      </div>
     
     <ContactUs/>

   

      {/* Map Section */}
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450943!2d144.9537353155043!3d-37.81627974202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778e2dff6c1e0!2sFlinders%20St%20Station!5e0!3m2!1sen!2sau!4v1603260191729!5m2!1sen!2sau"
          width="100%"
          height="425"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
