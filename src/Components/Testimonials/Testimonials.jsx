import React from 'react'
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/Sanjeev.jpg";
import profilePic2 from "../../img/Atul.jpg";
import profilePic3 from "../../img/Khusboo.jpg";
import profilePic4 from "../../img/Aditya.jpg";


function Testimonials() {
    const clients = [
        {
          img: profilePic1,
          name: "Sanjiv Pradhan",
          profileLink : "https://www.linkedin.com/in/sanjiv-pradhan/",
          review:
           "She is an example of sheer hardwork and dedication. I am very happy to have worked and learnt from her. ",
        },
        {
          img: profilePic2,
          name: "Atul Singh",
          profileLink: "https://www.linkedin.com/in/atul-singh-90572474/",
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: profilePic3,
          name: 'Khushbu kumari',
          profileLink: "https://www.linkedin.com/in/khushbu-k-46b50a198/",
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: profilePic4,
          name:"Kumar Aditya",
          profileLink: "https://www.linkedin.com/in/kumar-aditya-8577b6104/",
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
      ];

  return (
    <div className='t-wrapper'>
        <div className="t-heading"> 
          <span>Linked Recommedation</span>
          <span> Given By </span>
          <span> colleague</span>
          <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

        </div>
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
       
       {clients.map((client,i) => (
        
        <SwiperSlide key={i}>
        <div className='testimonial'>
        <a href={client.profileLink} target="_blank">
        <img src={client.img} alt="profile_photo" className='t_imagestyle'/>
        </a>
        <p>{client.name}</p>
        <span>{client.review}</span>
        </div>
        </SwiperSlide>
      
       ))}
      
        </Swiper>
    </div>
  )
}

export default Testimonials