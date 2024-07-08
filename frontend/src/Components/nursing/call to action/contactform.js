import React from "react";
import './contactform.css';
import contact from '../Assest/Group 37419.png';
import axios from "axios";
export function Contactform(){
   function handlesubmit(event){
      event.preventDefault()
      var name=document.getElementById("name").value
      var phonenumber=document.getElementById("phonenumber").value
      var email=document.getElementById("email").value
      var degree=document.getElementById("degree").value
      var specialization=document.getElementById("specialization").value
      var experience=document.getElementById("experience").value
      
      var key={
        name:name,
        phonenumber:phonenumber,
        email:email,
        degree:degree,
        specialization:specialization,
        experience:experience
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
      else if(degree===''){
        alert("please fill the degree")
      }
      else if(specialization===''){
        alert("please fill the specialization")
      }
      else if(experience===''){
        alert("please fill the Experience")
      }
      else{
        axios.post("http://kggeniuslabs.com:4000/form",key)
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
              <div class="container ">
                <h3><b>Get in Touch with Us</b></h3>
                <p className="text-center">Let's connect! Our experienced team is available to answer your questions and provide guidance, we're here to help.</p>
              </div>
            </div>
            
            <div class="container">
              <div class="row">
                
                <div class="contact-info">
                    <img src={contact} className="col-lg-8 col-12" alt="Job Opportunity"/>
                </div>
                <div class="contact-form">
                  <form onSubmit={handlesubmit} id="contact-form">
                    <h3>Send Message</h3>
                    <div class="input-box">
                      <input type="text" required="true" name="name" id="name" placeholder="Full Name"/>
                      {/* <span>Full Name</span> */}
                    </div>
                    
                    <div class="input-box">
                      <input type="phone" required="true" name="phonenumber" id="phonenumber" placeholder="Phone Number"/>
                      {/* <span>phone Number</span> */}
                    </div>
                    
                    <div class="input-box">
                    <input type="email" required="true" name="email" id="email" placeholder="Email"/>
                      {/* <span>Email</span> */}
                    </div>
                    <div class="input-box">
                    <input type="text" required="true" name="degree" id="degree" placeholder="Degree"/>
                      {/* <span>Degree</span> */}
                    </div>
                    <div class="input-box">
                    <input type="text" required="true" name="specialization" id="specialization" placeholder="Specialization" />
                      {/* <span>Specialization</span> */}
                    </div>
                    <div class="input-box">
                    <input type="text" required="true" name="experience" id="experience" placeholder="Years of Experience"/>
                      {/* <span>Year Of Experience</span> */}
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