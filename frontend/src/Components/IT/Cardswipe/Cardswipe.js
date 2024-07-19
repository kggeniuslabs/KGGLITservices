import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Cardswipe.css";

function Cardswipe() {
  return (
    <div className='container-fluid bannerit pb-5' id='servicesitpage'>
    <h1 className='text-center text-light'>Our Expertise</h1>
    <div className='slider-container'>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <div className='card1'>
            <h3>UI/UX Design</h3>
            <p>We focus on designing intuitive, engaging user interfaces that elevate our client's digital experiences, boosting engagement and satisfaction.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card1'>
            <h3>Web Development</h3>
            <p>Our developers use advanced tech to build responsive, scalable websites for top performance on all devices.
</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
            <h3>Mobile Application</h3>
            <p>We design sleek mobile apps for iOS and Android, reflecting your brand and ensuring smooth user interaction.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
            <h3>E-Commerce Website</h3>
            <p>We create customizable e-commerce websites with secure payments, mobile optimization, SEO, inventory management and analytics to boost sales.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
            <h3>LMS</h3>
            <h5>Learning Management System</h5>
            <p>We specialize in custom LMS for seamless online training. Our solutions enhance learning, efficiency and organizational growth. </p>
            {/* <button class="btn btn-primary ms-auto">Demo</button> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
            <h3>CRM</h3>
            <h5>Customer Relationship Management</h5>
            <p>Our CRM solutions streamline customer interactions and sales processes and enhance satisfaction, fostering stronger customer relationships and revenue growth.</p>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className='card1'>
            <h3>Billing Software</h3>
            <p>Our billing software simplifies invoicing, billing and payment processes, allowing businesses to manage their finances more efficiently and effectively.
            </p>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className='card1'>
            <h3>WhatsApp Bulk Messaging Software</h3>
            <p>Enhance communication with WhatsApp Bulk Messaging. Automate campaigns, personalize messages and track performance effortlessly to drive growth.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
            <h3>KPO</h3>
            <h5>Knowledge Process Outsourcing</h5>
            <p>Our KPO services offer expertise in data analysis, research and knowledge tasks, enabling informed decisions and valuable insights.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
            <h3>BPO</h3>
            <h5>Business Process Outsourcing</h5>
            <p>Our BPO services encompass a wide range of back-office functions, including customer support, data entry and administrative tasks, allowing businesses to focus on their core competencies while we handle the rest.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}

export default Cardswipe;

