import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import whatsapp from "../assets/whatsapp.png";


const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.4] bg-black-00 p-8 rounded-2xl'
      >
        <p className={styles.sectionHeadText}>Get in touch</p>

          <div className='grid'
          style={{height: '70vh', marginLeft: '20%'}}>
            <div className='flex items-center'>
              <a
                href='mailto:mohitkumawat110@gmail.com'
                className='text-white hover:underline mr-4'
              >
                EMAIL
              </a>
              <div className='logo-container' 
              style = {{
                width: '40px',
                height: 'auto',
                borderRadius: '50%',
                overflow: 'hidden'}}
              >
                  <img src={email} alt='email' className='logo'/></div>
            </div>
            <div className='flex items-center'>
              <a
                href='https://www.linkedin.com/in/mohit-kumawat-64991217b/'
                className='text-white hover:underline mr-4'
              >
              LinkedIn
              </a>
              <div className='logo-container'
              style = {{
                width: '40px',
                height: 'auto',
                borderRadius: '50%',
                overflow: 'hidden'}}
                ><img src={linkedin} alt='linkedin' className='logo'/></div>

            </div>
            <div className='flex items-center'>
              <a
                href='https://api.whatsapp.com/send?phone=8829029136'
                className='text-white hover:underline mr-4'
              >
                WhatsApp
              </a>
              <div className='logo-container'
              style = {{
                width: '40px',
                height: 'auto',
                borderRadius: '50%',
                overflow: 'hidden'}}
                ><img src={whatsapp} alt='whatsapp' className='logo'/></div>
            </div>
          </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
