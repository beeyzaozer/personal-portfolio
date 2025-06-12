import Chips from '@/components/Chips'
import React from 'react'

function AboutMe() {
  return (
    <div className='max-w-6xl mx-auto mt-12'>
      <h1 className='text-red-300 md:text-3xl text-2xl font-extrabold mb-4'>Hakkımda</h1>
      <p className='bg-zinc-900 p-4 rounded-2xl background-blur-md border border-red-200'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur iure atque blanditiis sint magni animi accusamus consequuntur? Iure esse, dicta doloribus beatae distinctio fugit commodi, id veniam ratione repellat suscipit!</p>
      <h1 className='text-red-300 font-extrabold mb-4 mt-12 md:text-3xl text-2xl'>Kullandığım Teknolojiler</h1>
      <div className='grid grid-col-1 sm:grid-cols-2 gap-4'>
        <div className='flex flex-wrap items-center jusitfy-between gap-2 bg-zinc-900 p-4 rounded-2xl background-blur-md border border-red-200'>
          <Chips />
          <Chips />
          <Chips />
          <Chips />
          <Chips />
          <Chips />
          <Chips />
        </div>
        <div className='flex flex-wrap items-center jusitfy-between gap-2 bg-zinc-900 p-4 rounded-2xl background-blur-md border border-red-200'>
          <Chips />
          <Chips />
          <Chips />
          <Chips />
          <Chips />
          <Chips />
        </div>
      </div>
    </div>
  )
}

export default AboutMe