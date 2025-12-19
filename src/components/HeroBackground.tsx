import * as motion from "motion/react-client";
import { Code, Server, Cloud, Database, Cpu, Shield } from "lucide-react";
import { useEffect } from "react";
import { useAnimate, stagger } from "motion/react";

const icons = [
  Code, Server, Cloud, Database, Cpu, Shield,
  Code, Server, Cloud, Database, Cpu, Shield,
  Code, Server, Cloud, Database, Cpu, Shield 
];

export default function HeroAnimatedBackground() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const items = scope.current.querySelectorAll("li");
    
    items.forEach((item, i) => {
      const randomLeft = Math.floor(Math.random() * 95);
      const randomTop = Math.floor(Math.random() * 95);
      const randomScale = 0.5 + Math.random() * 0.8;
      const isBlurry = Math.random() > 0.5;

      item.style.left = `${randomLeft}%`;
      item.style.top = `${randomTop}%`;
      item.style.transform = `scale(${randomScale})`;
      item.style.filter = isBlurry ? "blur(2px)" : "blur(0px)";
      item.style.opacity = "0"; 
    });

    animate(
      "li",
      {
        opacity: [0, 0.4, 0.8, 0.4, 0],
        y: [0, -30, -60, -30, 0],
        x: [0, 20, 0, -20, 0],
        rotate: [0, 10, -10, 0],
      },
      {
        duration: 15,
        ease: "easeInOut",
        delay: stagger(0.8, { from: "random" }),
        repeat: Infinity,
      }
    );
  }, [animate]);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-slate-950/50">
      <motion.ul ref={scope} className="relative w-full h-full">
        {icons.map((Icon, index) => (
          <motion.li
            key={index}
            className="absolute text-slate-500 will-change-transform"
          >
            <Icon strokeWidth={1.5} size={42} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}