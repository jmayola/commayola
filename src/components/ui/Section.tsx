import React, { type PropsWithChildren } from 'react'
import * as motion from "motion/react-client";
import { MotionConfig } from 'motion/react';

function Section({children}: PropsWithChildren) {
  return (
    <MotionConfig transition={{ duration: .3 }} >
    <motion.section  whileFocus={{ scale: 1 }} className='h-screen flex place-content-center flex-col text-left relative' initial={{opacity: 0}} whileInView={{ opacity: 1 }}>
      {children}
    </motion.section>
    </MotionConfig>
  )
}

export default Section