import { faEnvelope, faGraduationCap, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BH from '../Assest/Kamal-profile.png'
import BDE from '../Assest/Vivin-Richard.png'
import {Link as Sclink} from 'react-scroll'
export function Contactourteam(){
    return(
        <>
        <div className="container-fluid backgroundapa" id="footer">
            <h3 className="text-center mb-5 pt-5"><b>Contact Our Team</b></h3>
            <div className="container-fluid ">
                <div className="row  d-flex flex-column justify-content-between  ">

                    <div className="col-sm-12 col-lg-7 row boder mb-5 ms-1 bg-white ">
                        <div className="col-lg-5">
                            <img src={BH} />
                        </div>
                        <div className="col-sm-12 col-lg-7">
                          <h4 className="mt-4"><b>Kamal Vignesh</b></h4>
                          <p><FontAwesomeIcon icon={faGraduationCap} />Bussiness Head</p>
                          <p><FontAwesomeIcon icon={faPhone} />86954 33663</p>
                          <p><FontAwesomeIcon icon={faEnvelope}/>kamalvignesh.v@kggeniuslabs.com</p>
                          <Sclink activeClass="active" to="form" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page"><button className="btn btn-primary mb-4">Get appointment</button></Sclink>
                        </div>
                    </div>
                    {/* <div className="col-sm-12 col-lg-5 row mb-5 boder me-1 bg-white">
                        <div className="col-lg-5 ">
                            <img src={BDE} className="col-lg-12 col-12 "/>
                            
                        </div>
                        <div className=" col-sm-12 col-lg-6">
                          <h4 className="mt-4">Vivin Richard</h4>
                          <p> <FontAwesomeIcon icon={faGraduationCap} className="me-2 colr"/>Bussiness Development Executive</p>
                          <p> <FontAwesomeIcon icon={faPhone}  className="me-2 colr"/>88385 85398</p>
                          <p> <FontAwesomeIcon icon={faEnvelope}  className="me-2 colr"/>nursingjobs@kggeniuslabs.com</p>
                          <Sclink activeClass="active" to="form" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page"><button className="btn btn-primary mb-4">Get appointment</button></Sclink>
                        </div>
                    </div> */}
                </div>
               
            </div>
        </div>
            {/* <div class="profileListInner" data-aos="fade-left">
            <div class="row">
              <div class="col-sm-4 col-12"><img class="img-fluid" data-aos="fade-up"
                  src="assets/img/arunkumar-cardiothoracic-and-vascular-surgeon.webp" width="100%"
                  alt="arunkumar-cardiothoracic-and-vascular-surgeon"/></div>
              <div class="col-sm-8 col-12" data-aos="fade-down">
                <h4>Dr. U. Arunkumar Ulaganathan</h4>
                <p><i class="fa fa-mortar-board"></i>MS.,Mch(CTVS)</p>
                <p><i class="fa fa-medkit"></i>Consultant Cardiothoracic Surgeon</p>
                <p><i class="fa fa-h-square"></i>KG Heart Center</p>
              </div>
              <div class="belowBtn col-12">
                <div class="row">
                  <div class="col col-sm-5 col-12">
                    <a class="cardBtn" href="https://www.kghospital.com/doctor-profile.html?doc=7093">View
                      Profile</a>
                  </div>
                  <div class="col col-sm-7 col-12">
                    <a class="cardBtn appBtn" rel="canonical" 
                      href="https://pistha.kghospital.com/PISTHA/web/index.php?r=online-appointment%2Fbook-appointment%2F&doctor_id=7093&mode=web"
                      target="_blank">Book
                      Appointment</a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </>
    );
}