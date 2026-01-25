import React, { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import Note from "./ui/Note";
import Notes from "./Notes";
const tabs = [
  {
    id: 0,
    label: "Experiencia",
    color: "bg-zinc-800",
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Experiencia Empresarial</h2>
        <p className="text-zinc-400">
          Mas de 10 anhos entregando sistemas para tu pyme al mejor precio.
        </p>
        <ul className="list-disc pl-5 text-zinc-300 space-y-2">
          <li>+5 anhos en el desarrollo de aplicaciones para negocios.</li>
          <li>+10 clientes satisfechos</li>
        </ul>
      </div>
    ),
  },
  {
    id: 1,
    label: "Proyectos",
    color: "bg-zinc-800",
    content: (
      <div className="space-y-4 sdasdh-[300px]">
        <h2 className="text-2xl font-bold text-white">Proyectos Destacados</h2>
        <p className="text-zinc-400">
          Prueba ahora.
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 place-content-center">
        <Note desc='Administrador de clases el con mejor manejo de datos y velocidad, de estudiantes y profesores para estudiantes y profesores.' img="/classplanner_logo.png"></Note>
        <Note desc='Pagina profesional disenhada a medida, con animaciones y disenho moderno.' img="/raptor_logo.png"></Note>
        <Note title='PowerRush' desc='Catalogo de ropa con carrito de compras y facturacion.' img="/vite.svg"></Note>
        </div>
      </div>
    ),
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full flex min-h-[400px] flex-col md:flex-col items-center md:items-baseline justify-center p-10">
      <div className="w-fit min-w-3xl relative">
        <div className="flex pl-4 space-x-[-10px]">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                initial={false}
                animate={{
                  y: isActive ? 0 : 8,
                  opacity: isActive ? 1 : 0.6,
                  backgroundColor: isActive ? "#27272a" : "#18181b", 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                  zIndex: isActive ? 10 : 0,
                }}
                className={`
                  relative px-8 py-3 rounded-t-2xl text-lg font-medium cursor-pointer select-none
                  ${isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300"}
                `}
              >
                {tab.label}
              </motion.button>
            );
          })}
        </div>

        <motion.div
          layout
          className="relative z-10 w-full overflow-hidden bg-zinc-800 p-8 rounded-b-2xl rounded-tr-2xl shadow-2xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="overflow-scroll w-full"
            >
              {tabs[activeTab].content}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}