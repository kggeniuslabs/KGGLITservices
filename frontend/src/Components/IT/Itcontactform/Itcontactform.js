
import React from "react";
// import './contactform.css'
import contact from '../Assetit/Group 270989678.png';
import axios from "axios";
export function Itcontactform(){
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
          <section className="" id="formit">  
      
            <div class="section-header ">
              <div class="container">
                <h3><b>Get in Touch with Us</b></h3>
                <p className="text-center">Let's connect! Our experienced team is available to answer your questions and provide guidance, we're here to help.</p>
              </div>
            </div>
            
            <div class="container">
              <div class="row">
                
                <div class="contact-info">
                    <img src={contact} className="col-lg-8 col-12" alt="Contact Us"/>
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
                    <div class="input-box border p-3 msgboxform">
                        <select className="col-lg-12 " id="services"> 
                            <option>Select the Services</option>
                            <option>UI/UX Design</option>
                            <option>Web Development</option>
                            <option>Mobile Application Design and Development </option>
                            <option>Customized Application</option>
                            <option>E-Commerce Website</option>
                            <option>LMS</option>
                            <option>CRM</option>
                            <option>Billing Software</option>
                            <option>WhatsApp Bulk Messaging Software</option>
                            <option>KPO</option>
                            <option>BPO</option>    
                        </select> 
                    </div>
                    <div class="input-box">
                        <textarea placeholder=" Message" className="border msgboxform" id="message"></textarea> 
                    </div>
                    <div class="input-box">
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