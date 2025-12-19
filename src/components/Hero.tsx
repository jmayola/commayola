import React from 'react'
import * as motion from "motion/react-client";
import HeroAnimatedBackground from './HeroBackground';
import Slider from './ui/Slider';

function Hero() {
  return (
    <>
    <HeroAnimatedBackground></HeroAnimatedBackground>
        <div className="flex flex-col w-screen place-content-center items-center justify-center z-10 p-10">
          <motion.ul className="flex flex-col place-content-center w-fit h-full gap-3 selection:bg-slate-900">
            <motion.li
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0.2 },
              }}
              whileHover={{borderBottom: 12, borderColor:"#fff" ,borderBlockColor: "#fff", rotate: "3deg", transitionBehavior: "easeinOut", textShadow: "-15px 15px 5px #000"}}
              className="text-9xl text-center font-bold text-shadow-lg "
            >
              Mayola
            </motion.li>
            <motion.li
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0.5 },
              }}
              className="text-4xl text-center font-bold text-shadow-md"
            >
              Servicios Informaticos
            </motion.li>
            <motion.li
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0.8 },
              }}
              className="text-2xl text-center font-bold text-shadow-md"
            >
              Consultoria y Creacion de aplicaciones multitecnologia
            </motion.li>
            
            <motion.li className='p-3 flex flex-row gap-5 place-content-center items-center justify-center'>
              <motion.button initial={{flex:1}} whileHover={{flex:2}} className="p-20 border-b-4 border-white">Contactame!</motion.button>
            <motion.button initial={{flex:1}} whileHover={{flex:2}} className="p-20 border-b-4 border-white">Proyectos</motion.button>
            </motion.li>
          </motion.ul>
        </div>
        </>
  )
}

export default Hero