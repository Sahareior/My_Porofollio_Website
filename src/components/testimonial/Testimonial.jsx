
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import { styles } from "../../styles";

export default function App() {
     const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Ashaduzzaman proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Ashaduzzaman does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Ashaduzzaman optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  return (
    <>
     <div id="test" className="my-10">
      <p className={`${styles.sectionSubText} text-center`}>What People Say
About Me</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Testimonial</h2>
    </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
            testimonials.map(data =><SwiperSlide key={data}>     <div className="hero min-h-screen background bg-slate-700" >
            <div className="hero-content mb-64 w-80 md:w-full flex-col ">
              <img src={data.image} className="max-w-sm rounded-full shadow-2xl" />
              <div>
               
                <p className="py-6 text-3xl font-mono  text-white">{data.testimonial}</p>
                <h1 className="text-yellow-400 text-end">....{data.name}</h1>
              </div>
            </div>
          </div></SwiperSlide>)
        }
        
      </Swiper>
    </>
  );
}
