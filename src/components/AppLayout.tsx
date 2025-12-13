import React, { type PropsWithChildren } from 'react'

function AppLayout({children}: PropsWithChildren) {
  return (
    <div className='min-h-screen place-content-center'>
        {children}
    </div>
  )
}

export default AppLayout