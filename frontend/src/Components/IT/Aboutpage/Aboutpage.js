



import React, { useState ,useEffect} from 'react';
import im1 from '../Assetit/video_shape_1.png.png';
import im2 from "../Assetit/Group 27.png";
import logo from "../Assetit/Group 270989676.png";
import im4 from "../Assetit/about_3_1-shape.png.png";
import visionimg from "../Assetit/Rectangle 2381.png";
import missionimg from "../Assetit/Rectangle 21 (1).png";
import "./Aboutpage.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Aboutpage() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
      }, []);
    const [activeTab, setActiveTab] = useState('mission'); // Default active tab is 'mission'

    return (
        <div className='container' id='aboutuspageit'>
            <div className='row my-4 doodlebg'>
                <div className='col'>
                    <img src={im1} alt="Background" className='imb1' data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" />
                </div>
                <div className='col'>
                    <h3>About Us</h3>
                    <p>At KG Genius Labs, we are dedicated to empowering businesses with cutting-edge IT solutions and services that drive growth, efficiency, and success.</p>
                    <p>With a focus on innovation and excellence, we offer a comprehensive suite of services tailored to meet the diverse needs of our clients. Driven by a passion for technology and a commitment to customer satisfaction, we strive to deliver innovative solutions that exceed expectations and drive tangible results for our clients.</p>
                </div>
            </div>
{/* mission vision */}
            <div className='row my-4'>
                <div className='col-sm-12 col-lg-7'>
                    <div className=' row'>
                        <div className={`col mission ${activeTab === 'mission' ? 'active' : ''}`} onClick={() => setActiveTab('mission')}>
                            <h3>Our Mission</h3>
                        </div>
                        <div className={`col vision ${activeTab === 'vision' ? 'active' : ''}`} onClick={() => setActiveTab('vision')}>
                            <h3>Our Vision</h3>
                        </div>
                    </div>
                



                    <div className={`row border border-1 rounded-3 clrbox ${activeTab === 'vision' ? 'vision-active' : ''}`} style={{ height: '300px', overflow: 'auto' }}>
                        <div className='col-sm-12 col-lg-6'>
                            <div className='row'>
                                <div className='col'>
                                    <img src={activeTab === 'mission' ?missionimg : visionimg} alt={activeTab === 'mission' ? 'Mission Image' : 'Vision Image'} className="img-fluid mission-image" />
                                </div>
                            </div>
                        </div>
                        <div className='col' style={{ maxHeight: '400px', overflow: 'auto' }}>
                            {activeTab === 'mission' ? (
                                <>
                                    <p>We're dedicated to helping businesses and individuals thrive online through creative solutions in design, development and e-commerce.</p>
                                    <p><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Providing innovative IT solutions</p>
                                        <p><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Ensuring customer satisfaction</p>
                                        <p><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Driving growth and efficiency</p>
                                </>
                            ) : (
                                <>
                                    <p>Our vision is to be a global leader in IT services, recognized for our innovation, customer-centric approach and sustainability.</p>
                                        <p><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Leading the industry with cutting-edge technology</p>
                                        <p><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Fostering a culture of continuous improvement</p>
                                    <p><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Promoting sustainable business practices</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className='col-lg-5'>
                    <div className='row'>
                        <div className='col'>
                            <img src={im4} className='imb2'data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Section for Key Differentiators */}
            <div className='row my-4'>
                <div className='col'>
                    <img src={im2} alt="Key Differentiators" className="img-fluid imb3 ms-5" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="300"/>
                </div>
                <div className='col'>
                    <h3>Why KG Genius Labs?</h3>
                    <p>We offer tailored solutions that precisely align with your business objectives. We empower organizations to thrive in today's digital landscape.</p>
                    <div className='row'>
                        <div className='col'>
                            <ul>
                                <li style={{ display: 'flex', alignItems: 'center' }}><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Versatility</li>
                                <li style={{ display: 'flex', alignItems: 'center' }} ><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} /> Scalability</li>
                                <li style={{ display: 'flex', alignItems: 'start' }}><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px',marginTop:'10px'}} />Industry-Specific Solutions and<br/> Expertise</li>
                                <li style={{ display: 'flex', alignItems: 'start' }}><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px',marginTop:'10px' }} />Dedicated Support and Maintenance</li>
                            </ul>
                        </div>
                        <div className='col'>
                            <ul>
                                <li style={{ display: 'flex', alignItems: 'center' }}><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Tailored IT Solutions</li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Innovation</li>
                                <li style={{ display: 'flex', alignItems: 'start' }}><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px',marginTop:'10px' }} />Highly Customizable E-commerce Solutions</li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><img src={logo} alt="Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />Integrated ERP Solutions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Aboutpage;
