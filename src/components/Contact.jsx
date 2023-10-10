import React from 'react'
import { EarthCanvas } from './canvas'
import ContactForm from './ContactForm'
import { styles } from '../styles'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..
AOS.init();
const Contact = () => {
  return (
    <div id='contact' className='mt-10 p-9'>
       <div className='text-center'>
       <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
       </div>
          <div className='flex flex-col md:justify-around md:flex-row-reverse items-center'>
      <div data-aos="fade-left" className='w-[600px] h-[500px] text-center'><EarthCanvas></EarthCanvas></div>
      <div data-aos="fade-right">
      <ContactForm></ContactForm>
      </div>
    </div>

    </div>
  )
}

export default Contact