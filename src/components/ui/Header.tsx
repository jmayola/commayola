import React, { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { Menu, X, ArrowRight } from "lucide-react";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Inicio", href: "#" },
  { name: "Servicios", href: "#" },
  { name: "Proyectos", href: "#" },
  { name: "Blog", href: "#" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Detectar scroll para cambiar la opacidad del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className={`fixed top-0 max-w-screen left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer z-50">
            <motion.div
                 whileHover={{ scale: 1.05 }}
                 className="text-2xl font-bold text-white tracking-tighter text-shadow-sm"
            >
                Mayola<span className="text-zinc-500">.com.ar</span>
            </motion.div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
        </nav>

        {/* CTA BUTTON (Estilo heredado de tu SectionSelector) */}
        <div className="hidden md:block">
          <CTAButton>Contactar</CTAButton>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="md:hidden z-50">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="text-zinc-300 p-2"
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <MobileMenu isOpen={isMobileOpen} />
      </div>
    </motion.header>
  );
};

// --- Subcomponentes para mantener el código limpio ---

const NavLink = ({ item }: { item: NavItem }) => (
  <motion.a
    href={item.href}
    className="text-sm font-semibold text-zinc-300 hover:text-white transition-colors relative"
    whileHover="hover"
  >
    {item.name}
    <motion.span
      className="absolute -bottom-1 left-0 w-full h-[2px] bg-zinc-500 origin-left"
      variants={{
        hover: { scaleX: 1 },
      }}
      initial={{ scaleX: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
  </motion.a>
);

// Botón reutilizando el estilo de tu SectionSelector (bg-zinc-900 + border-b-4)
const CTAButton = ({ children }: { children: React.ReactNode }) => (
  <motion.button
    initial={{ scale: 1 }}
    whileTap={{ scale: 0.95, borderBottomWidth: "2px", translateY: 2 }}
    whileHover={{ scale: 1.05, backgroundColor: "#27272a" }} // zinc-800
    className="px-6 py-2 bg-zinc-900 text-white rounded-xl border-b-4 border-zinc-700 
               inset-ring-1 inset-ring-zinc-800/50 text-sm font-bold flex items-center gap-2 cursor-pointer transition-colors"
  >
    {children}
    <ArrowRight size={16} className="opacity-70" />
  </motion.button>
);

const MobileMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: { 
            opacity: 1, 
            height: "100vh",
            pointerEvents: "auto"
        },
        closed: { 
            opacity: 0, 
            height: 0,
            pointerEvents: "none"
        },
      }}
      className="fixed inset-0 bg-zinc-950 flex flex-col items-center justify-center gap-8 md:hidden overflow-hidden"
    >
      <motion.ul 
        variants={{
            open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
        }}
        className="flex flex-col items-center gap-6"
      >
        {navItems.map((item) => (
          <motion.li
            key={item.name}
            variants={{
                open: { y: 0, opacity: 1 },
                closed: { y: 20, opacity: 0 }
            }}
          >
            <a href={item.href} className="text-3xl font-bold text-zinc-300 hover:text-white">
              {item.name}
            </a>
          </motion.li>
        ))}
        
        <motion.li
            variants={{
                open: { y: 0, opacity: 1 },
                closed: { y: 20, opacity: 0 }
            }}
            className="mt-8"
        >
             <CTAButton>Empezar ahora</CTAButton>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default Header;