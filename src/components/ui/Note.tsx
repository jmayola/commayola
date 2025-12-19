import { X } from 'lucide-react'
import React, { type PropsWithChildren } from 'react'
import * as motion from "motion/react-client";

type Card = {
    title: string,
    desc: string
}

function Note(props: Card) {
  return (
    <motion.div initial={{rotateX:0}} animate={{ y: ["100%",0], x: 0, opacity: [0,1],rotateX: [-30,0], rotateY: [-30,0]}} whileHover={{flexGrow:1, height:"30%", zIndex:10}} whileFocus={{rotateX: 40}} drag dragConstraints={{bottom: 0, top: 0, left: 0, right: 0}} className='w-1/6 h-1/5 rounded-xl dark:bg-zinc-700 bg-amber-50 flex flex-col perspective-midrange transform-3d shadow-lg/30'>
        <div className='bg-amber-300 border-b-2 dark:border-gray-300 border-gray-400 rounded-t-xl p-3 dark:text-white text-black text-shadow-2xs text-shadow-zinc-600 font-medium text-lg flex flex-row justify-between items-center z-0'><span>{props.title}</span><span className='rounded-full  hover:bg-red-300 p-1'><X  width={12} height={12} /></span></div>
        <div className='text-black dark:text-white p-2'>{props.desc}</div>
    </motion.div>
  )
}

export default Note