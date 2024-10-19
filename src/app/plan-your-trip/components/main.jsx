'use client';
import Sidebar from '@/app/_common/sidebar/sidebar';
import TopBanner from '@/app/Components/topBanner';
import { AllPackages } from '@/context/contextProviders';
import { EXPORT_ALL_APIS } from '@/utils/api/apis';
 
import { useContext, useState } from 'react';
import { toast } from 'sonner';

const PlanATrip = () => {

  let { planPage } = useContext(AllPackages)
  let result = planPage?.map((e) => e?.acf)



  let api = EXPORT_ALL_APIS()
  let [loading,setLoading]=useState(false)

  const [formData, setFormData] = useState({
    type_of_travels: '',
    conveyance_of_travel: '',
    date_from: '',
    date_to: '',
    adults: '',
    childs: '',
    yourname: '',
    youremail: '',
    youraddress: '',
    yourcity: '',
    yourstate: '',
    yournumber: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
     ...prevErrors,
      [name]: '',
    }));
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.yourname) newErrors.yourname = 'Name is required';
    if (!formData.youremail) newErrors.youremail = 'Email is required';
    if (!formData.yourcity) newErrors.yourcity = 'City is required';
    if (!formData.yourstate) newErrors.yourstate = 'State is required';
    if (!formData.yournumber) newErrors.yournumber = 'Phone number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {


    if (!validateForm()) {
      return;
    }

    const formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });
    formDataToSubmit.append('_wpcf7_unit_tag', '273');

    setLoading(true)
    const result = await api.submitPlanATripQuery(formDataToSubmit);


    if (result) {
      toast.success(`Dear ${formData.yourname}, your query was successfully submitted`)
      setFormData({
        type_of_travels: '',
        conveyance_of_travel: '',
        date_from: '',
        date_to: '',
        adults: '',
        childs: '',
        yourname: '',
        youremail: '',
        youraddress: '',
        yourcity: '',
        yourstate: '',
        yournumber: '',
      });
      setErrors({});
      setLoading(false)
    }
  };

 

  return (

    <>
      <TopBanner result={result[0]} />

      <div className="container plan_your_trip">
        <h2>Your Plan & Requirement of Travel</h2>
        <p>Vacations to make your experience enjoyable in india!</p>
        <div className="plan_inner">
          <div className="plan_wrapper">

            <div className="form_plan_trip">

              <div className="get_in_touch">
                <h2>Get In Touch</h2>
                <p>Drop us an email and we’ll get back to you within 48hrs…</p>
                <div className='form-field'> 
                  <div className="plan_trip_form">
                    <label>Types Of Travel</label>
                    <select name="type_of_travels" value={formData.type_of_travels} onChange={handleChange}>
                      <option value="">Choose your options</option>
                      <option value="Business">Business</option>
                      <option value="Honeymoon">Honeymoon</option>
                      <option value="Family Tour">Family Tour</option>
                      <option value="Adventure Tour">Adventure Tour</option>
                      <option value="Group Tour">Group Tour</option>
                      <option value="Sightseeing">Sightseeing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="plan_trip_form">
                    <label> Conveyance Of Travel </label>
                      <select name="conveyance_of_travel" value={formData.conveyance_of_travel} onChange={handleChange}>
                        <option value="">Choose your options</option>
                        <option value="By Taxi">By Taxi</option>
                        <option value="By Bus">By Bus</option>
                        <option value="By Volvo Bus">By Volvo Bus</option>
                        <option value="By Train">By Train</option>
                        <option value="By Air">By Air</option>
                      </select>
                  </div>
                </div>
                <div className='form-field'> 
                  <div className="plan_trip_form form-4-column">
                    <label> Date From </label>
                      <input type="date" name="date_from" value={formData.date_from} onChange={handleChange} />
                  </div>

                  <div className="plan_trip_form form-4-column">
                    <label> Date To </label>
                      <input type="date" name="date_to" value={formData.date_to} onChange={handleChange} />
                  </div>

                  <div className="plan_trip_form form-4-column">
                    <label> Adults </label>
                      <input type="number" name="adults" value={formData.adults} onChange={handleChange} />
                  </div>

                  <div className="plan_trip_form form-4-column">
                    <label> Children </label>
                      <input type="number" name="childs" value={formData.childs} onChange={handleChange} />
                  </div>
                </div>
              </div>

              <div className="personalinofs">
                <h2>Your Personal Information</h2>

                <div className='form-field'> 
                  <div className="plan_trip_form">
                    <label> Your Name </label>
                      <input type="text" name="yourname" value={formData.yourname} onChange={handleChange} />
                      {errors.yourname && <span className='error'>{errors.yourname}</span>}
                  </div>
                  <div className="plan_trip_form">
                    <label> Your Email </label>
                      <input type="email" name="youremail" value={formData.youremail} onChange={handleChange} />
                      {errors.youremail && <span className='error'>{errors.youremail}</span>}
                  </div>
                </div>

                <div className='form-field'> 
                  <div className="plan_trip_form">
                    <label> Your Address </label>
                      <textarea name="youraddress" value={formData.youraddress} onChange={handleChange} />
                  </div>
                  <div className="plan_trip_form">
                    <label> City </label>
                      <input type="text" name="yourcity" value={formData.yourcity} onChange={handleChange} />
                      {errors.yourcity && <span className='error'>{errors.yourcity}</span>}
                  </div>
                </div>

                <div className='form-field'> 
                  <div className="plan_trip_form">
                    <label> State </label>
                      <input type="text" name="yourstate" value={formData.yourstate} onChange={handleChange} />
                      {errors.yourstate && <span className='error'>{errors.yourstate}</span>}
                  </div>
                  <div className="plan_trip_form">
                    <label> Phone Number </label>
                      <input type="tel" name="yournumber" value={formData.yournumber} onChange={handleChange} />
                      {errors.yournumber && <span className='error'>{errors.yournumber}</span>}
                  </div>
                </div>

                <button onClick={handleSubmit}>{
                loading?'submiting...':
                'Submit'}</button>
              </div>
          
            </div>

            <Sidebar/>

          
          </div>


        </div>
      </div>
    </>




  );
};



export default PlanATrip;
