import { EXPORT_ALL_APIS } from '@/utils/api/apis';
import React, { useState } from 'react';
import { toast } from 'sonner';

function BookingForm({ setIsOpen }) {
    let api = EXPORT_ALL_APIS();

    let [resp, setResp] = useState({
        yourname: '',
        youremail: '',
        yourdestination: '',
        phonenumber: '',
        yourmessage: '',
    });

    let [errors, setErrors] = useState({});

    let getInputHandle = (e) => { // Corrected typo from "getInputHandel"
        let { name, value } = e.target;
        setResp({ ...resp, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    let validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    let validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phoneNumber);
    };

    let handleFormError = () => { // Corrected typo from "handelFormError"
        let { yourname, youremail, yourdestination, phonenumber, yourmessage } = resp;
        let valid = true;
        let errorFields = {};

        if (!yourname) {
            valid = false;
            errorFields.yourname = 'Name is required';
        }

        if (!youremail) {
            valid = false;
            errorFields.youremail = 'Email is required';
        } else if (!validateEmail(youremail)) {
            valid = false;
            errorFields.youremail = 'Please provide a valid email';
        }

        if (!phonenumber) {
            valid = false;
            errorFields.phonenumber = 'Phone number is required';
        } else if (!validatePhoneNumber(phonenumber)) {
            valid = false;
            errorFields.phonenumber = 'Phone number must be exactly 10 digits';
        }

        if (!yourdestination) {
            valid = false;
            errorFields.yourdestination = 'Destination is required'; // Updated message for better clarity
        }

        if (!yourmessage) {
            valid = false;
            errorFields.yourmessage = 'Message is required';
        }

        setErrors(errorFields);
        return valid;
    };

    let handleSubmit = async () => { // Corrected typo from "handelFormError" to "handleFormError"
        if (handleFormError()) {
            let formData = new FormData();
            formData.append('_wpcf7_unit_tag', 82);
            formData.append('yourname', resp.yourname);
            formData.append('youremail', resp.youremail);
            formData.append('yourdestination', resp.yourdestination);
            formData.append('phonenumber', resp.phonenumber);
            formData.append('yourmessage', resp.yourmessage);

            let data = await api.submitBookingQuery(formData);
            if (data) {
                console.log(data);
                setResp({
                    yourname: '',
                    youremail: '',
                    yourdestination: '',
                    phonenumber: '',
                    yourmessage: '',
                });
                toast.success(`Dear ${resp.yourname}, your query was sent successfully`);

                setTimeout(() => {
                    setIsOpen(false);
                }, 700);
            }
        }
    };

    return (
        <>
            <div className="booking_form_outer">
                <div className="booking_flex">
                <div className="booking-form-overlay">
                    <div className="left_section_booking">
                        <div className="heading_button_wrapper">

                        <h2>Send Us a Query</h2>
                        <button onClick={() => setIsOpen(false)}>X</button>
                        </div>
                        <div className="booking-form-container">
                            <div className="input_wrapper">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="yourname"
                                   
                                    className="input-field"
                                    value={resp.yourname}
                                    onChange={getInputHandle}
                                />
                                {errors.yourname && <p className="error">{errors.yourname}</p>}
                            </div>

                            <div className="input_wrapper">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="youremail"
                                     
                                    className="input-field"
                                    value={resp.youremail}
                                    onChange={getInputHandle}
                                />
                                {errors.youremail && <p className="error">{errors.youremail}</p>}
                            </div>

                            <div className="input_wrapper">
                                <label htmlFor="phonenumber">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phonenumber"
                                  
                                    className="input-field"
                                    value={resp.phonenumber}
                                    onChange={getInputHandle}
                                />
                                {errors.phonenumber && <p className="error">{errors.phonenumber}</p>}
                            </div>

                            <div className="input_wrapper">
                                <label htmlFor="destination">Destination</label>
                                <input
                                    type="text"
                                    name="yourdestination"
                                  
                                    className="input-field"
                                    value={resp.yourdestination}
                                    onChange={getInputHandle}
                                />
                                {errors.yourdestination && <p className="error">{errors.yourdestination}</p>}
                            </div>

                            <div className="input_wrapper">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    name="yourmessage"   
                                    className="input-field"
                                    value={resp.yourmessage}
                                    onChange={getInputHandle}
                                />
                                {errors.yourmessage && <p className="error">{errors.yourmessage}</p>}
                            </div>

                            <div className="button_handler">
                                <button type="submit" className="btn" onClick={handleSubmit}>
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
              
            </div>
        </>
    );
}

export default BookingForm;
