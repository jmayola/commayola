import React from 'react'
import Note from './ui/Note'

function Notes() {
  return (
    <div className='w-full flex flex-row gap-3 justify-center absolute left-0 right-0 px-20 -top-30'>
        <Note title='Classplanner' desc='hola mundo'></Note>
        <Note title='hola' desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic maiores sapiente fuga dignissimos rerum dolor tenetur libero perferendis, eligendi, odio vel aperiam neque esse recusandae voluptatibus? Ipsam, explicabo esse. Iure?'></Note>
        <Note title='hola' desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic maiores sapiente fuga dignissimos rerum dolor tenetur libero perferendis, eligendi, odio vel aperiam neque esse recusandae voluptatibus? Ipsam, explicabo esse. Iure?'></Note>
    </div>
  )
}

export default Notes