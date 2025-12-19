import { Circle, FolderClosed, FolderOpen } from 'lucide-react'
import { useEffect, useRef } from 'react';
import * as motion from "motion/react-client";
import { animate, spring, stagger } from 'motion';

function Coder() {
  const rootRef = useRef<HTMLUListElement | null>(null);
  const cards = ["#333","#222","#434","#912423"]
  const handleOnFocus = ()=>{
    animate(".card", )
  }
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!rootRef.current) return;
        
        const { left, top, width, height } = rootRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

         const $images = rootRef.current.querySelectorAll('.card');
         $images.forEach((val)=>{
  animate(val,{
            translateX: 10 * x,
            translateY: 10 * y,
            rotateY: 5 * x,
            rotateX: 5 * y,
        },{delay: stagger(0.1), ease: 'easeOut', type:spring});
         })
        
    };

    const handleMouseLeave = () => {
        if (!rootRef.current) return;
        
        animate(".card",{
            translateX: 0,
            translateY: 0,
            rotateY: 0,
            
        },{delay: stagger(0.1), ease: 'easeInOut',type:spring, mass:2});
    };
  return (
    <div className='bg-zinc-800 rounded-2xl w-1/2 h-fit flex flex-col p-3'>
    <span className='text-zinc-400 text-xs p-2'>Proyectos</span>
      <ul className='flex flex-row justify-between transform-3d'>
        <div className='w-2/3 flex flex-row gap-1 '>
        <li className='bg-zinc-600 flex-2 dark:bg-zinc-700 rounded-lg  px-5 py-1 flex justify-start items-center flex-row gap-1 text-sm font-console'><FolderOpen size={16}/>Huffmann.py</li>
        <li className='bg-zinc-400 flex-1 dark:bg-zinc-600 rounded-lg  px-5 py-1 flex justify-start items-center flex-row gap-1 text-sm font-console'><FolderClosed size={16}/>Javascript</li>
        <li className='bg-zinc-400 flex-1 dark:bg-zinc-600 rounded-lg  px-5 py-1 flex justify-start items-center flex-row gap-1 text-sm font-console'><FolderClosed size={16}/>Python</li>
        </div>
        <div className='flex flex-row gap-3 items-center flex-end'>
          <Circle size={16} color='red' fill='red'/>
          <Circle size={16} color='yellow' fill='yellow'/>
          <Circle size={16} color='green' fill='green'/>
        </div>
      </ul>
    <ul className='h-full w-full grid grid-cols-3 gap-2 place-content-center justify-center place-items-center bg-zinc-700 my-1 rounded-lg p-3' ref={rootRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {
        cards.map((val)=>{
    return <motion.li initial={{opacity: 1}} whileTap={{scale:0.8}} className="card perspective-distant">{val}</motion.li>
        })
      }
    </ul>
    </div>
  )
}

export default Coder