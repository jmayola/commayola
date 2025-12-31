import React, { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const images = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=1000",
];

const sliderVariants = {
  enter: { x: "100%", opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

export default function ShowRoom() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full bg-zinc-800 overflow-hidden">
      <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full bg-zinc-800 overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.img
            key={index}
            src={images[index]}
            alt={`Slide ${index}`}
            className="absolute inset-0 w-full h-full object-cover"
            variants={sliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
          />
        </AnimatePresence>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col items-center justify-center p-8 lg:p-20 bg-zinc-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="flex flex-col items-center text-center space-y-8 max-w-lg"
        >
          <motion.h2 className="text-xl font-medium text-zinc-400 uppercase tracking-widest">
            Elige lo mejor para tu negocio
          </motion.h2>

          <motion.div className="border-t-4 border-b-4 border-zinc-300 py-6 w-full">
            <h1 className="text-xl font-extrabold leading-tight">
              Prueba nuestros productos <br />
              <span className="text-indigo-600">de forma gratuita.</span>
            </h1>
          </motion.div>

          <div className="space-y-2">
            <motion.p className="text-lg font-semibold">
              Sistemas personalizados a medida.
            </motion.p>
            <motion.p className="text-base ">
              Donde todo lo que pasa en tu negocio importa.
            </motion.p>
          </div>

          <motion.button
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.95, transition: 1 }}
            whileHover={{ scale: 1.05 }}
            className="p-3 w-full bg-zinc-900 rounded-2xl border-b-2 border-white"
          >
            Probar ahora
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
