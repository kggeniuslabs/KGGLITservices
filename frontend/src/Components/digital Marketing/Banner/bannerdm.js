import React,{useEffect} from 'react'
import './bannerdm.css'
import bannerimg from '../Assesst/Group 37441 (1).png'
import AOS from "aos";
import { Link as Sclink } from 'react-scroll';
import "aos/dist/aos.css";
export function Bannerdm(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <>
            <div className='container-fluid bgcolordm' id='dmbanner'>
                <div className='row'>

                    <div className='col-lg-6 p-5 ' data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <p className='text-white ms-5'>Elevate Your Online Presence</p>
                        <h1 className='text-white ms-5'>Transform Your <span className='textbannercolor'>Brand's Digital Landscape</span> with Our Dynamic <span className='textbannercolor'>Digital Marketing Strategies</span></h1>
                        <p className='text-white ms-5'>KGGL Introduces Tailored Digital Marketing Solutions!</p>
                        <div className="d-flex flex-wrap">
                        <Sclink activeClass="active" to="servicesdm" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page"><button className="btn  colorbtndm btn-lg ms-5 mt-5">Explore More</button></Sclink>
                        <Sclink activeClass="active" to="form" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page"> <button className="btn  text-white bor  btn-lg ms-5 mt-5">Contact Us</button></Sclink>
                        </div>
                    </div>
                    <div className='col-lg-6 mt-5'  >
                        <img src={bannerimg} className='container-fluid' data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"/>
                    </div>
                    
                </div>
                <div id="aboutdm"></div>
            </div>
        </>
    );
}