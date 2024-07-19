// import React, { useState, useEffect } from 'react';
// import { Modal, Button } from 'react-bootstrap';
// import '../../Components/nursing/call to action/contactform.css'
// import axios from 'axios';

// const AutoPopupModalgl = () => {
//   const [showModal, setShowModal] = useState(false);

//   // useEffect hook to show modal after 30 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowModal(true);
//     }, 8000); // 30 seconds in milliseconds

//     // Cleanup function to clear timeout if component unmounts before 30 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   // Function to handle closing modal
//   const handleClose = () => setShowModal(false);
//   const [formData, setFormData] = useState({
//     name:'',
//     phonenumber:'',
//     email:'',
//     services:'',
//     message:''
//     // other form fields
//   });
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   function handlesubmit(event){
//     event.preventDefault()
//     if(formData.name===''){
//       alert("please fill the name")
//     }
//     else if(!/^[a-zA-Z\s]+$/.test(formData.name)) {
//       alert("Please enter a valid name with only letters and spaces");
//   }
//     else if(formData.phonenumber===''){
//       alert("please fill the phone number")
//     } else if(!/^[6-9]\d{9}$/.test(formData.phonenumber)) {
//       alert("Please enter a valid 10-digit phone number");
//   }
//     else if(formData.email===''){
//       alert("please fill the email")
//     }
//     else if(!/^[a-z]\S+@\S+\.\S{2,20}$/.test(formData.email)) {
//       alert("Please enter a valid email address (2-20 characters after the dot)");
//     }  
//     else if(formData.services===''){
//       alert("please select the services")
//     }
  
//     else{
//       axios.post("http://kggeniuslabs.com:4000/dmform",formData)
//       .then((res)=>{
//         if(res.data.status==="inserted"){
//             alert("Will Get Back You Soon...")
//             window.location.reload()
//         }
//         else if(res.data.status==="error"){
//             alert("Already register...")
//         }
//         else{
//             alert("data are not Registed")
//         }
//     })
//     }

//  }
//   return (
//     <Modal show={showModal} onHide={handleClose} className='mt-5 zindexdm'>
//       <Modal.Header closeButton>
//         <Modal.Title className=''>Get in Touch with Us</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div class="container-fluid mt-n5">
//             <form onSubmit={handlesubmit}>
//             <div class="col-lg-12 mb-2">
                
//                 <input type="text" className="form-control mt-4" placeholder='Full Name' required="true" name="name" id="name" onChange={handleChange}/>
//             </div>
            
//             <div class="mb-2">
                
//                 <input type="phone" className="form-control mt-4" required="true" placeholder='Phone Number' name="phonenumber" id="phonenumber" onChange={handleChange}/>
//             </div>
            
//             <div class="mb-3">
                 
//                 <input type="email" className="form-control mt-4" required="true" name="email" placeholder='Email' id="email" onChange={handleChange}/>
//             </div>
//             <div class="input-box  mt-4 border p-2">
//                         <select className="col-lg-12 " name='services'  id="services" onChange={handleChange}> 
//                             <option>Select the Services</option>
//                             <option value="Manpower Consultancy">Manpower Consultancy</option>
//                             <option value="Digital Marketing">Digital Marketing</option>
//                             <option value="SAP">SAP</option>
//                             <option value="IT Services">IT Services</option>
//                         </select>
//                     </div>
//                     <div class="input-box mb-4 mt-4">
//                     <textarea placeholder="Message" className="border form-control" name='message' id="message" onChange={handleChange}></textarea>
//                     </div>
                    
//                     <div class="input-box">
//                       <input type="submit" value="Submit" className='btn btn-success' name=""/>
//                     </div>
//             </form>
//         </div>
//       </Modal.Body>
    
//     </Modal>
//   );
// };

// export default AutoPopupModalgl;

import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import '../../Components/nursing/call to action/contactform.css';
import axios from 'axios';

const AutoPopupModalgl = () => {
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    phonenumber: '',
    email: '',
    services: '',
    message: ''
  });

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

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    let formValid = true;
    const newErrors = {
      name: '',
      phonenumber: '',
      email: '',
      services: '',
      message: ''
    };

    // Validation logic
    if (formData.name.trim() === '') {
      newErrors.name = 'Please fill in the name';
      formValid = false;
    } else if (!/^[a-zA-Z\s]{2,}$/.test(formData.name)) {
      newErrors.name = 'Please enter a valid name ';
      formValid = false;
    }

    if (formData.phonenumber.trim() === '') {
      newErrors.phonenumber = 'Please fill in the phone number';
      formValid = false;
    } else if (!/^[6-9]\d{9}$/.test(formData.phonenumber)) {
      newErrors.phonenumber = 'Please enter a valid 10-digit phone number';
      formValid = false;
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Please fill in the email';
      formValid = false;
    } else if (!/^[a-z]\S+@\S+\.\S{2,20}$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      formValid = false;
    }

    if (formData.services === '' || formData.services === 'Select the Services') {
      newErrors.services = 'Please select a service';
      formValid = false;
    }

    if (formValid) {
      // Submit the form if valid
      axios.post("http://kggeniuslabs.com:4000/dmform", formData)
        .then((res) => {
          if (res.data.status === "inserted") {
            alert("Will Get Back You Soon...");
            window.location.reload();
          } else if (res.data.status === "error") {
            alert("Already registered...");
          } else {
            alert("Data are not registered");
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      // Update state with error messages if form is invalid
      setErrors(newErrors);
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    phonenumber: '',
    email: '',
    services: '',
    message: ''
  });

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear the error message when user starts typing again
    setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <Modal show={showModal} onHide={handleClose} className='mt-5 zindexdm'>
      <Modal.Header closeButton>
        <Modal.Title>Get in Touch with Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container-fluid">
          <form onSubmit={handleSubmit}>
            <div className="col-lg-12">
              <input type="text" className="form-control mt-4" placeholder='Full Name' required name="name" id="name" onChange={handleChange} />
              {errors.name && <small className="text-danger">{errors.name}</small>}
            </div>

            <div className="mt-3">
              <input type="tel" className="form-control" placeholder='Phone Number' required name="phonenumber" id="phonenumber" onChange={handleChange} />
              {errors.phonenumber && <small className="text-danger">{errors.phonenumber}</small>}
            </div>

            <div className="mt-3">
              <input type="email" className="form-control" placeholder='Email' required name="email" id="email" onChange={handleChange} />
              {errors.email && <small className="text-danger">{errors.email}</small>}
            </div>

            <div className="input-box mb-3 border p-2 mt-4">
              <select className="col-lg-12 form-control" name='services' id="services" onChange={handleChange}>
                <option>Select the Services</option>
                <option value="Manpower Consultancy">Manpower Consultancy</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="SAP">SAP</option>
                <option value="IT Services">IT Services</option>
              </select>
              {errors.services && <small className="text-danger">{errors.services}</small>}
            </div>

            <div className="input-box mb-4 mt-4">
              <textarea placeholder="Message" className="border form-control" name='message' id="message" onChange={handleChange}></textarea>
            </div>

            <div className="input-box">
              <input type="submit" value="Submit" className='btn btn-success' />
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AutoPopupModalgl;
