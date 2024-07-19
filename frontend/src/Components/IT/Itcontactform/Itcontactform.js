import React, { useState } from "react";
import contact from '../Assetit/Group 270989678.png';
import axios from "axios";
import "./Itcontactform.css"; // Ensure to create and import your CSS file for styling

export function Itcontactform() {
  const [formData, setFormData] = useState({
    name: '',
    phonenumber: '',
    email: '',
    services: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phonenumber: '',
    email: '',
    services: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate inputs
    switch (name) {
      case 'name':
        setErrors({ ...errors, name: /^[a-zA-Z\s]{2,}$/.test(value) ? '' : 'Please enter a valid name with only letters and spaces' });
        break;
      case 'phonenumber':
        setErrors({ ...errors, phonenumber: /^[6-9]\d{9}$/.test(value) ? '' : 'Please enter a valid 10-digit phone number' });
        break;
      case 'email':
        setErrors({ ...errors, email: /^[a-z]\S+@\S+\.\S{2,20}$/.test(value) ? '' : 'Please enter a valid email address.'});
        break;
      case 'services':
        setErrors({ ...errors, services: value !== '' ? '' : 'Please select the Services' });
        break;
      case 'message':
        setErrors({ ...errors, message: value !== '' ? '' : 'Please enter a message' });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the services field
    if (formData.services === '' || formData.services === 'Select the Services') {
      setErrors({ ...errors, services: 'Please select the Services' });
      return;
    }

    // Check for any remaining errors
    const formValid = Object.values(errors).every(error => error === '');

    if (formValid) {
      axios.post("http://kggeniuslabs.com:4000/dmform", formData)
        .then((res) => {
          if (res.data.status === "inserted") {
            alert("Will Get Back You Soon...");
            window.location.reload();
          } else if (res.data.status === "error") {
            alert("Already registered...");
          } else {
            alert("Data are not Registered");
          }
        })
        .catch(error => {
          console.error("Error submitting form:", error);
          alert("Failed to submit form. Please try again later.");
        });
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <>
      <section className="" id="formit">  
        <div className="section-header">
          <div className="container-fluid">
            <h3><b>Get in Touch with Us</b></h3>
            <p className="text-center">Let's connect! Our experienced team is available to answer your questions and provide guidance, we're here to help.</p>
          </div>
        </div>
        
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12"> {/* Adjusted grid class for the image */}
              <div className="contact-info">
                <img src={contact} className="img-fluid" alt="Contact Us"/> {/* Added img-fluid for responsive images */}
              </div>
            </div>
            <div className="col-lg-9 col-12"> {/* Adjusted grid class for the form */}
              <div className="contact-form">
                <form onSubmit={handleSubmit} id="contact-form" >
                  <h3>Send Message</h3>
                  <div className="input-box">
                    <input type="text" required name="name" id="name" className="form-control" placeholder="Full Name" onChange={handleChange} />
                    {errors.name && <small className="text-danger">{errors.name}</small>}
                  </div>
                  <div className="input-box">
                    <input type="tel" required name="phonenumber" id="phonenumber" className="form-control" placeholder="Phone Number" onChange={handleChange} />
                    {errors.phonenumber && <small className="text-danger">{errors.phonenumber}</small>}
                  </div>
                  <div className="input-box">
                    <input type="email" required name="email" id="email" className="form-control" placeholder="Email" onChange={handleChange} />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                  </div>
                  <div className="input-box border p-3 msgboxform">
                    <select className="form-control" id="services" name="services" onChange={handleChange}>
                      <option value="">Select the Services</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile Application Design and Development">Mobile Application Design and Development</option>
                      <option value="Customized Application">Customized Application</option>
                      <option value="E-Commerce Website">E-Commerce Website</option>
                      <option value="LMS">LMS</option>
                      <option value="CRM">CRM</option>
                      <option value="Billing Software">Billing Software</option>
                      <option value="WhatsApp Bulk Messaging Software">WhatsApp Bulk Messaging Software</option>
                      <option value="KPO">KPO</option>
                      <option value="BPO">BPO</option>    
                    </select>
                    {errors.services && <small className="text-danger">{errors.services}</small>}
                  </div>
                  <div className="input-box">
                    <textarea placeholder="Message" className="form-control msgboxform" id="message" name="message" onChange={handleChange}></textarea>
                    {errors.message && <small className="text-danger">{errors.message}</small>}
                  </div>
                  <div className="input-box">
                    <input type="submit" value="Connect with Us" className="btn btn-info"/>
                  </div>
                </form>
              </div>   
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
