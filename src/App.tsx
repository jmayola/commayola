import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

import * as motion from "motion/react-client";
import AppLayout from "./components/AppLayout";
import { animate, inView } from "motion";
import Section from "./components/ui/Section";
import Coder from "./components/Coder";

function App() {
  inView("#hola", (element) => {
    animate(element, { opacity: 1 });
  });
  return (
    <AppLayout>
      <Section>
        <div className="flex flex-row">
          <motion.ul className="flex flex-col place-content-center w-full h-full gap-3">
            <motion.li
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0.2 },
              }}
              className="text-9xl text-left"
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
              className="text-4xl text-left"
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
              className="text-2xl text-left"
            >
              Consultoria y Creacion de aplicaciones multitecnologia
            </motion.li>
          </motion.ul>
          <img src={reactLogo} alt="" />
        </div>
      </Section>
      <Section>
        <div className="flex flex-row place-content-between h-full">
          <div>
        <motion.h2>5+ Anhos de Experiencia</motion.h2>
        <motion.h3>10+ aplicaciones en funcionamiento</motion.h3>
        </div>
        <Coder></Coder>
        </div>
      </Section>
    </AppLayout>
  );
}

export default App;
