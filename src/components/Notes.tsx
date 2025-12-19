import React from 'react'
import Note from './ui/Note'

function Notes() {
  return (
    <div className='w-full h-full flex flex-row gap-3 justify-center '>
        <Note title='Classplanner' desc='hola mundo'></Note>
        <Note title='hola' desc='hola mundo'></Note>
        <Note title='hola' desc='hola mundo'></Note>
        <Note title='hola' desc='hola mundo'></Note>
        <Note title='hola' desc='hola mundo'></Note>
    </div>
  )
}

export default Notes