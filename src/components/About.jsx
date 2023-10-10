import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { fadeIn } from "./utils/motion";
import { SectionWrapper } from "./hoc";

AOS.init();

const About = () => {
  
  const services = [
    {
      title: "Web Developer",
      img: 'https://e0.pxfuel.com/wallpapers/712/885/desktop-wallpaper-web-developer-web-programming.jpg'
    },
    {
      title: "React Developer",
      img : 'https://www.pullrequest.com/blog/create-a-persisting-dark-mode-with-react/images/create-a-persisting-dark-mode-with-react.jpg'
    },
    {
      title: "Backend Developer",
      img : 'https://res.cloudinary.com/practicaldev/image/fetch/s--a0VqOvf_--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4a6t7pmm323uaz9rv1rf.png'
    },
   
  ];

  return (
    <div id="about" className="my-20 w-full">
      <motion.div
        className="mx-auto text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className="flex justify-center gap-10 flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-14  text-secondary text-center text-[17px] max-w-3xl leading-[30px]"
        >
      Hi, I'm Ashaduzzaman! I am a highly motivated individual with a strong passion for collaboration and achieving success through teamwork. I bring a diverse range of skills and experiences to the table, and I'm excited about the opportunity to work with you. Together, I believe we can create something truly remarkable and make a positive impact in our respective fields. Let's join forces and embark on this exciting journey together!
        </motion.p>
        <AnimatePresence>
          <div className="md:flex mt-10 justify-between gap-20">
            {services.map((data,index) => (
              <Tilt   key={data.title}>
           <motion.div
      variants={fadeIn("right", "spring", index * 0.85, 0.95)}
      className='w-full green-pink-gradient mt-6 p-[1px] rounded-[20px] shadow-card'
    >
                
                  <article
                  
                    className="relative card w-full  h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
                    style={{ backgroundImage: `url(${data.img})` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                      <h3 className="text-center">
                        <a
                          className="text-white text-2xl font-bold text-center"
                          href="#"
                        >
                          <span className="absolute inset-0"></span>
                          {data.title}
                        </a>
                      </h3>
                    </div>
                  </article>
               
              </motion.div>
              </Tilt>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "");
