import * as motion from "motion/react-client";
import { spring, stagger } from "motion";
type Card = {
  title?: string;
  desc?: string;
  img?: string;
};

function Note(props: Card) {
  return (
    <>
    <motion.div
      initial={{ rotateX: 0 }}
      transition={{ duration: 10, delay: 0, mass: 0.5, type: spring}}
      animate={{
        y: ["100%", 0],
        x: 0,
        opacity: [0, 1],
        rotateX: [-30, 0],
        rotateY: [-30, 0],
      }}
      whileHover={{ height: "full", zIndex:100 }}
      whileFocus={{ rotateX: 40 }}
      className=" rounded-xl bg-linear-to-b from-slate-900/90 to-slate-800/90 flex flex-col perspective-midrange transform-3d shadow-lg/30"
    >
      <motion.div className="rounded-t-xl p-1 gap-5 dark:text-white text-black text-shadow-2xs text-shadow-zinc-600 font-medium text-lg flex flex-col justify-center items-center h-max">
        {props.img && <img src={props.img} alt="" className="object-contain w-64 h-32" />}
        {props.title && <span className="text-justify">{props.title}</span>}
      </motion.div>
      <div className="text-black dark:text-white relative w-full h-full">
        <p className="p-5 font-sans text-justify">{props.desc}</p>
      </div>
    </motion.div>
    </>
  );
}

export default Note;
