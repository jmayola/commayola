import React from "react";
import * as motion from "motion/react-client";
import { ArrowRight, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-zinc-950 text-zinc-300">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white tracking-tighter">
              Mayola<span className="text-zinc-500">.com.ar</span>
            </h2>
            <div className="mt-6 flex place-content-center gap-4">
              <SocialIcon icon={Github} />
              <SocialIcon icon={Linkedin} />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Empresa</h3>
            <ul role="list" className="mt-6 space-y-4">
              {["Sobre Nosotros", "Servicios", "Casos de Éxito", "Equipo"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm leading-6 hover:text-zinc-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Legales</h3>
            <ul role="list" className="mt-6 space-y-4">
              {["Política de Privacidad", "Términos de Uso", "Cookies", "Licencias"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm leading-6 hover:text-zinc-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold leading-6 text-white">Unete al mundo del futuro</h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Contactate directamente con nosotros!
            </p>
            <form className="mt-6 sm:flex sm:max-w-md lg:mt-0 lg:flex-col lg:items-start xl:flex-row">
                <div className="flex w-full gap-2 items-center">
                    <input
                        type="email"
                        required
                        className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-2 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-zinc-500 focus:ring-2 focus:ring-inset focus:ring-zinc-500 sm:w-64 sm:text-sm sm:leading-6 outline-none transition-all"
                        placeholder="tu@email.com"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="flex-none rounded-md bg-zinc-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
                    >
                        <ArrowRight size={18} />
                    </motion.button>
                </div>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-zinc-500">
            &copy; {currentYear} Mayola SRL. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -3, color: "#818cf8" }}
      className="text-zinc-400 transition-colors"
    >
      <Icon size={20} />
    </motion.a>
  );
}