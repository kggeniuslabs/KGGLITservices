import React from "react";
import './services.css'
import img1 from '../Assesst/Component 1.png' 
import img2 from '../Assesst/Component 2.png' 
import img3 from '../Assesst/Component 3.png' 
import img4 from '../Assesst/Component 4.png' 
import img5 from '../Assesst/Component 5.png' 
import img6 from '../Assesst/Component 6.png' 
import img7 from '../Assesst/Component 7.png' 
import img8 from '../Assesst/Component 8.png' 
import img9 from '../Assesst/Rectangle 63.png' 
import img10 from '../Assesst/Rectangle 64.png'
import img11 from '../Assesst/laptopimg.png'; 
import Gallery from './gallery.js';


export function Servicesdm(){
    return(
        <>
            <div className="container-fluid ">
                <h2 className="text-center pt-5 mt-5"><b>Digital Marketing Services by <span className="servicestextcolor">KGGL</span></b></h2>
                <p className="text-center container pb-5 mt-2">At our KGGL, we adhere to a methodical approach to ensure that every online marketing endeavour yields profitable outcomes. Harness the power of KGGL's internet marketing services today, and allow us to enhance both your customer acquisition and retention rates.</p>
            </div>
           
            <div class="image-container pb-5">
                <div class="image-wrapper">
                    <img src={img1} alt="Image 1"/>
                    <div class="overlay p-3">   
                        <p> <span><b>Technical SEO</b></span><br/> Build a robust online presence with precise technical SEO and internet marketing services. Our team of technical SEO experts conducts comprehensive crawl error reports, verifies HTTPS status codes, optimizes site speed, audits redirects and eliminates duplicate content. Through these measures, we enhance your website's crawlability and indexability. </p>
                    </div> 
                </div>
                <div class="image-wrapper">
                    <img src={img2} alt="Image 1"/>
                    <div class="overlay p-3 p-sm-0">
                        <p><b>Link Building</b><br/>Gain a consistent flow of traffic from reputable websites and enhance consumer trust. Our internet marketing team leverages paid advertisements, sponsorships and strategic collaborations to position your content where it garners attention from influential audiences. We employ targeted guest blogging, craft engaging and original content, distribute data-driven infographics, and amplify your social media presence. </p>
                    </div>         
                </div>
                <div class="image-wrapper">
                    <img src={img3} alt="Image 1"/>
                    <div class="overlay p-3">
                        <p><b>Social Media Marketing</b><br/>Are you ready to broaden your reach and engage with your audience across social media platforms? Our expertise lies in crafting targeted social media campaigns designed to foster growth and enhance audience engagement for your business.  </p>
                    </div>
                </div>
                <div class="image-wrapper">
                    <img src={img4} alt="Image 1"/>
                    <div class="overlay p-3">
                        <p><b>Web Design & Development</b><br/>At KGGL, we specialize in crafting bespoke, mobile-friendly, and search engine optimized websites tailored to fulfill your business objectives and complement your digital marketing endeavors. Employing a strategic visual hierarchy, we emphasize crucial site elements, prompting visitors to engage with your desired actions. </p>
                    </div>      
                </div>
                <div class="image-wrapper">
                    <img src={img5} alt="Image 1"/>
                    <div class="overlay p-3">
                        <p><b>E-Commerce Marketing</b><br/>With the eCommerce industry witnessing a remarkable 23 percent year-over-year growth in revenue, now is the opportune moment to capitalize on its vast potential. Seize a plethora of opportunities within the eCommerce realm to showcase your products and provide unparalleled convenience to your customers round the clock.</p>
                    </div>               
                </div>
                <div class="image-wrapper">
                    <img src={img6} alt="Image 1"/>
                    <div class="overlay p-2">
                        <p><b>Conversion Rate Optimization <br/> (CRO)</b><br/>Attracting visitors to your website is just the beginning; the real challenge lies in converting them into customers. Conversion optimization is the key to ensuring your site effectively guides visitors through the sales funnel. Elevate your conversion rate and propel more visitors toward making purchases with KGGL's expert CRO services. </p>
                    </div>   
                </div>
                <div class="image-wrapper">
                    <img src={img7} alt="Image 1"/>
                    <div class="overlay p-1">
                        <p><b>Content Writing</b><br/>The content on your website is paramount—it serves as the bedrock of your SEO efforts and the primary reason visitors engage with your site. Entrust your content creation to KGGL and we'll craft it with meticulous precision. Our team of content specialists remains vigilant in staying updated on the latest news and market trends, ensuring adherence to Google's standards in content development. </p>
                    </div>         
                </div>
                <div class="image-wrapper">
                    <img src={img8} alt="Image 1"/>
                    <div class="overlay p-3">
                        <p><b>Email Marketing</b><br/>How often do you find yourself deleting emails from businesses each day? KGGL can transform your email marketing campaigns, ensuring they stand out and drive results for your business. We specialize in crafting personalized email newsletters designed to bypass spam filters and prompt your customers to take the desired action.</p>
                    </div>    
                </div> 
                <div class="image-wrapper">
                <source srcset={img11} media="(max-width: 576px)"/>
                    <img src={img9} alt="Image 1" className="imgsystem"/>
                    <div class="overlay p-3">
                        <p><b>Online Reputation Management (ORM)</b><br/>Boost your success with our expert review generation and monitoring. Trust us to enhance your online reputation using advanced ORM tools, two-way SMS, and QR codes.</p>
                    </div>    
                </div>
                <div class="image-wrapper">
                    <img src={img10} alt="Image 1"/>
                    <div class="overlay p-3">
                        <p><b>Pay Per Click (PPC) Management</b><br/>Swiftly reach customers with our data-driven PPC campaign. Our certified PPC Specialists manage campaigns expertly. We tailor ad copies, fine-tune bidding, optimize device targeting, and monitor ROI. We also leverage seasonal trends to boost promotions and drive traffic.</p>
                    </div>    
                </div>
            </div>
          
        </>
    );
}