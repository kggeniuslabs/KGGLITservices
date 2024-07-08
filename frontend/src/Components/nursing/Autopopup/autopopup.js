import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../call to action/contactform.css'
import axios from 'axios';

const AutoPopupModal = () => {
  const [showModal, setShowModal] = useState(false);

  // useEffect hook to show modal after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 30000); // 30 seconds in milliseconds

    // Cleanup function to clear timeout if component unmounts before 30 seconds
    return () => clearTimeout(timer);
  }, []);

  // Function to handle closing modal
  const handleClose = () => setShowModal(false);
  const [formData, setFormData] = useState({
    name:'',
    phonenumber:'',
    email:'',
    degree:'',
    specialization:'',
    experience:''
    // other form fields
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  function handlesubmit(event){
    event.preventDefault()
    if(formData.name===''){
      alert("please fill the name")
    }
    else if(formData.phonenumber===''){
      alert("please fill the phone number")
    }
    else if(formData.email===''){
      alert("please fill the email")
    }
    else if(formData.degree===''){
      alert("please fill the degree")
    }
    else if(formData.specialization===''){
      alert("please fill the specialization")
    }
    else if(formData.experience===''){
      alert("please fill the Experience")
    }
    else{
      axios.post("http://kggeniuslabs.com:4000/form",formData)
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
  return (
    <Modal show={showModal} onHide={handleClose} className='putmt-5 zindexdm'>
      <Modal.Header closeButton>
        <Modal.Title>Get in Touch with Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="container-fluid">
            <form onSubmit={handlesubmit}>
            <div class=" col-lg-12">
                <input type="text" className="form-control mt-4" required="true" placeholder='Full Name' name="name" id="name" onChange={handleChange}/>
            </div>
            
            <div class=""> 
                <input type="phone" className="form-control mt-4" required="true" name="phonenumber" placeholder='Phone Number' id="phonenumber" onChange={handleChange}/>
            </div>
            
            <div class="">
                <input type="email" className="form-control mt-4" required="true" name="email" id="email" placeholder='Email' onChange={handleChange}/>
            </div>
            <div class="">
                <input type="text" className="form-control mt-4" required="true" name="degree" placeholder='Degree' id="degree" onChange={handleChange}/>
            </div>
            <div class="">
                <input type="text" className="form-control mt-4" required="true" name="specialization" placeholder='Specialization' id="specialization" onChange={handleChange}/>
            </div>
            <div class=""> 
                <input type="text"  className="form-control mt-4" required="true" name="experience" placeholder='Years of Experience' id="experience" onChange={handleChange}/>
            </div>
            
            <div class="">
                <input type="submit" value="Submit" className='form-control btn btn-success mt-4' name=""/>
            </div>
            </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AutoPopupModal;