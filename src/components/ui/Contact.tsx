import React, { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { ChevronLeft, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  { id: "name", label: "Hola, ¿Cómo te llamas?", placeholder: "Nombre y Apellido", type: "text" },
  { id: "title", label: "¿De qué trata tu propuesta?", placeholder: "Título del proyecto", type: "text" },
  { id: "email", label: "Por último, ¿cuál es tu email?", placeholder: "ejemplo@correo.com", type: "email" },
];

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({ name: "", title: "", email: "" });
  const [isFinished, setIsFinished] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const updateData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [steps[currentStep].id]: e.target.value });
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full bg-zinc-950 text-white overflow-hidden">
      
      {/* --- SECCIÓN IZQUIERDA (1/4 de pantalla) --- */}
      <div className="relative w-full lg:w-1/4 h-[30vh] lg:h-full overflow-hidden flex items-center justify-center p-8">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-110"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1500')" }}
        />
        <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-[2px]" />
        
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl lg:text-3xl font-light tracking-widest uppercase italic"
          >
            Hagamos algo <br /> 
            <span className="font-bold not-italic text-indigo-400">increíble</span> juntos.
          </motion.h1>
        </div>
      </div>

      {/* --- SECCIÓN DERECHA (Formulario Step-by-Step) --- */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-20 bg-zinc-900/50">
        <div className="w-full max-w-xl">
          
          {!isFinished ? (
            <>
              {/* Indicador de pasos */}
              <div className="mb-12 flex gap-2">
                {steps.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 flex-1 rounded-full transition-all duration-500 ${i <= currentStep ? "bg-indigo-500" : "bg-zinc-800"}`} 
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  <label className="block text-3xl lg:text-4xl font-medium text-zinc-100 leading-tight">
                    {steps[currentStep].label}
                  </label>
                  
                  <input
                    type={steps[currentStep].type}
                    placeholder={steps[currentStep].placeholder}
                    value={(formData as any)[steps[currentStep].id]}
                    onChange={updateData}
                    onKeyDown={(e) => e.key === "Enter" && handleNext()}
                    className="w-full bg-transparent border-b-2 border-zinc-700 py-4 text-2xl outline-none focus:border-indigo-500 transition-colors placeholder:text-zinc-600"
                  />

                  <div className="flex items-center justify-between pt-10">
                    <button
                      onClick={handleBack}
                      className={`flex items-center gap-2 text-zinc-500 hover:text-white transition-opacity ${currentStep === 0 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                    >
                      <ChevronLeft size={20} /> Atrás
                    </button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleNext}
                      className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl flex items-center gap-3 font-bold transition-colors"
                    >
                      {currentStep === steps.length - 1 ? "Enviar propuesta" : "Siguiente"}
                      <ArrowRight size={20} />
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            /* Pantalla Final de Éxito */
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center space-y-4"
            >
              <CheckCircle2 size={80} className="mx-auto text-indigo-500 mb-6" />
              <h2 className="text-4xl font-bold">¡Gracias, {formData.name}!</h2>
              <p className="text-zinc-400 text-lg">He recibido tu propuesta sobre "{formData.title}". <br /> Te contactaré pronto a {formData.email}.</p>
              <button 
                onClick={() => {setIsFinished(false); setCurrentStep(0); setFormData({name:"", title:"", email:""})}}
                className="mt-8 text-indigo-400 hover:underline"
              >
                Enviar otro mensaje
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}