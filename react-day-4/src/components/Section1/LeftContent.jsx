import React from 'react'
import Hero from './Hero'
import Arrow from './Arrow'


const LeftContent = () => {
  return (
    <div id='left-content' className='bg-white w-1/4 m-3 p-2 flex flex-col justify-between'>
        <Hero/>
        <Arrow/>
    </div>
  )
}

export default LeftContent
