// import  React from 'react'

// export function Newsletter(){
//     return(
//         <>
//             <div className='container-fluid '>
                
//             </div>
            
//         </>
//     );
// }
import React from "react";
// import './contactform.css'
import contact from '../Assest/Group 37454.png'
import axios from "axios";
export function Newsletter(){
   function handlesubmit(event){
      event.preventDefault()
      var name=document.getElementById("name").value
      var phonenumber=document.getElementById("phonenumber").value
      var email=document.getElementById("email").value
      var services=document.getElementById("services").value
      var message=document.getElementById("message").value
      
      var key={
        name:name,
        phonenumber:phonenumber,
        email:email,
        services:services,
        message:message
       
      }
      if(name===''){
        alert("please fill the name")
      }
      else if(phonenumber===''){
        alert("please fill the phone number")
      }
      else if(email===''){
        alert("please fill the email")
      }
      else if(services===''){
        alert("Please select the Services")
      }
     
      else{
        axios.post("http://kggeniuslabs.com:4000/dmform",key)
        .then((res)=>{
          if(res.data.status==="inserted"){
              alert("Will Get Back You Soon...")
              window.location.reload()
          }
          else if(res.data.status==="error"){
              alert("Already register...")
          }
          else{
              alert("data are not Registed")
          }
      })
      }

   }
    return(
        <>
          <section className="" id="form">  
      
            <div class="section-header ">
              <div class="container">
                <h3><b>Get in Touch with Us</b></h3>
                <p className="text-center">Let's connect! Our experienced team is available to answer your questions and provide guidance, we're here to help.</p>
              </div>
            </div>
            
            <div class="container">
              <div class="row">
                
                <div class="contact-info">
                    <img src={contact} className="col-lg-8 col-12"/>
                </div>
                <div class="contact-form">
                  <form onSubmit={handlesubmit} id="contact-form">
                    <h3>Send Message</h3>
                    <div class="input-box">
                      <input type="text" required="true" name="name" id="name" placeholder="Full Name"/>
                      
                    </div>
                    
                    <div class="input-box">
                      <input type="phone" required="true" name="phonenumber" id="phonenumber" placeholder="Phone Number"/>
                      
                    </div>
                    
                    <div class="input-box">
                    <input type="email" required="true" name="email" id="email" placeholder="Email"/>
                     
                    </div>
                    <div class="input-box border py-2 msgboxform">
                        <select className="col-lg-12 " id="services"> 
                            <option>Select the Services</option>
                            <option value="Manpower Consultancy">Manpower Consultancy</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="SAP">SAP</option>
                            <option value="It Services">IT Services</option>
                        </select>
                     
                    </div>
                    <div class="input-box ">
                        <textarea placeholder=" Message" className="border msgboxform" id="message"></textarea>
                     
                    </div>
                    
                    <div class="input-box ">
                      <input type="submit" value="Connect with Us" name=""/>
                    </div>
                  </form>
                </div>
                
              </div>
            </div>
          </section>
        </>
    );
}