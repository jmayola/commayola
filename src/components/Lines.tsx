import React, { useEffect } from 'react'
import * as motion from "motion/react-client"
import { animate, stagger } from 'motion'
function Lines() {
  useEffect(() => {
    return () => {
      animate(".lines",{height:[10,20,30,40,50,60,70,80,70,60,50,40,30,20,10],accentColor:"#fff", backgroundColor: "#fff", borderRadius: "9999px"},{delay:stagger(0.1),repeat: Infinity})
    }
  }, [])
  
  return (
    <motion.div className='h-1/6 bottom-0'>
        <ul className='flex flex-row justify-center items-bottom absolute top-0 bottom-0 left-0 right-0 gap-16'>
          <li className="lines w-1 h-1 bg-amber-200"></li>
          <li className="lines w-1 h-1 bg-amber-200"></li>
          <li className="lines w-1 h-1 bg-amber-200"></li>
          <li className="lines w-1 h-1 bg-amber-200"></li>
          <li className="lines w-1 h-1 bg-amber-200"></li>
          <li className="lines w-1 h-1 bg-amber-200"></li>
          <li className="lines w-1 h-1 bg-amber-200"></li>
          <li className="lines w-1 h-1 bg-amber-200"></li>
        </ul>
    </motion.div>
  )
}

export default Lines