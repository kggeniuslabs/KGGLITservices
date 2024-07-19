// import React from "react";
// // import './contactform.css'
// import contact from '../Assesst/Mask group (3).png'
// import axios from "axios";
// import "./contactformdm.css";
// export function Contactformdm(){
//    function handlesubmit(event){
//       event.preventDefault()
//       var name=document.getElementById("name").value
//       var phonenumber=document.getElementById("phonenumber").value
//       var email=document.getElementById("email").value
//       var services=document.getElementById("services").value
//       var message=document.getElementById("message").value
      
//       var key={
//         name:name,
//         phonenumber:phonenumber,
//         email:email,
//         services:services,
//         message:message
       
//       }
//       if(name===''){
//         alert("please fill the name")
//       }
//       else if(phonenumber===''){
//         alert("please fill the phone number")
//       }
//       else if(email===''){
//         alert("please fill the email")
//       }
//       else if(services===''){
//         alert("Please select the Services")
//       }
     
//       else{
//         axios.post("http://kggeniuslabs.com:4000/dmform",key)
//         .then((res)=>{
//           if(res.data.status==="inserted"){
//               alert("Will Get Back You Soon...")
//               window.location.reload()
//           }
//           else if(res.data.status==="error"){
//               alert("Already register...")
//           }
//           else{
//               alert("data are not Registed")
//           }
//       })
//       }

//    }
//     return(
//         <>
//           <section className="" id="form">  
      
//             <div class="section-header ">
//               <div class="container">
//                 <h3><b>Get in Touch with Us</b></h3>
//                 <p className="text-center">Let's connect! Our experienced team is available to answer your questions and provide guidance, we're here to help.</p>
//               </div>
//             </div>
            
//             <div class="container">
//               <div class="row">
                
//                 <div class="contact-info">
//                     <img src={contact} className="col-lg-8 col-12" alt="Contact Us"/>
//                 </div>
//                 <div class="contact-form">
//                   <form onSubmit={handlesubmit} id="contact-form">
//                     <h3>Send Message</h3>
//                     <div class="input-box">
//                       <input type="text" required="true" name="name" id="name" placeholder="Full Name"/> 
//                     </div>
                    
//                     <div class="input-box">
//                       <input type="phone" required="true" name="phonenumber" id="phonenumber" placeholder="Phone Number"/> 
//                     </div>
                    
//                     <div class="input-box">
//                     <input type="email" required="true" name="email" id="email" placeholder="Email"/>
                     
//                     </div>
//                     <div class="input-box border p-3 msgboxform">
//                         <select className="form-control" id="services"> 
//                             <option>Select the Services</option>
//                             <option>Complete digital marketing solution</option>
//                             <option>Social Media Marketing</option>
//                             <option>Content Marketing</option>
//                             <option>SEO ( Search Engine Optimisation )</option>
//                             <option>Blog</option>
//                             <option>Paid Advertisement</option>
//                             <option>Email Marketing</option>
                           
//                         </select> 
//                     </div>
//                     <div class="input-box ">
//                         <textarea placeholder=" Message" className="border msgboxform" id="message"></textarea> 
//                     </div>
//                     <div class="input-box">
//                       <input type="submit" value="Connect with Us" name=""/>
//                     </div>
//                   </form>
//                 </div>   
//               </div>
//             </div>
//           </section>
//         </>
//     );
// }



import React, { useState } from "react";
import contact from '../Assesst/Mask group (3).png';
import axios from "axios";
import "./contactformdm.css";

export function Contactformdm() {
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
    services: ''
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
        setErrors({ ...errors, email: /^[a-z]\S+@\S+\.\S{2,20}$/.test(value) ? '' : 'Please enter a valid email address (2-20 characters after the dot)' });
        break;
      case 'services':
        setErrors({ ...errors, services: value !== '' ? '' : 'Please select the Services' });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();



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
      <section className="" id="form">
        <div className="section-header ">
          <div className="container">
            <h3><b>Get in Touch with Us</b></h3>
            <p className="text-center">Let's connect! Our experienced team is available to answer your questions and provide guidance, we're here to help.</p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-5">
            <div className="contact-info " >
              <img src={contact} alt="Contact Us" />
            </div>
            </div>
            <div className="col-sm-12 col-lg-6">
            <div className="contact-form col-sm-12 col-lg-7">
              <form onSubmit={handleSubmit} id="contact-form">
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
                    <option>Select the Services</option>
                    <option>Complete digital marketing solution</option>
                    <option>Social Media Marketing</option>
                    <option>Content Marketing</option>
                    <option>SEO ( Search Engine Optimisation )</option>
                    <option>Blog</option>
                    <option>Paid Advertisement</option>
                    <option>Email Marketing</option>
                  </select>
                  {errors.services && <small className="text-danger">{errors.services}</small>}
                </div>
                <div className="input-box">
                  <textarea placeholder="Message" className="form-control msgboxform" id="message" name="message" onChange={handleChange}></textarea>
                </div>
                <div className="input-box">
                  <input type="submit" value="Connect with Us" className="btn btn-info" />
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
