import React from 'react'
import * as motion from "motion/react-client";
import HeroAnimatedBackground from './HeroBackground';
import Slider from './ui/Slider';

function Hero() {
  return (
    <>
        <div className="flex flex-col w-screen place-content-center items-center justify-center z-10 p-10">
          <motion.ul className="flex flex-col w-fit h-full gap-3 selection:bg-slate-900 cursor-pointer">
            <motion.li
              initial={{ y: -20, opacity: 0}}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0.2 },
              }}
              whileHover={{scale: 1.05}}
              className="text-9xl text-center font-bold text-shadow-md text-shadow-black"
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
              whileHover={{scale: 1.05}}
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
              whileHover={{scale: 1.05}}
              className="text-2xl text-center font-bold text-shadow-md"
            >
              Consultoria y Creacion de aplicaciones multitecnologia
            </motion.li>
          </motion.ul>
        </div>
        </>
  )
}

export default Hero