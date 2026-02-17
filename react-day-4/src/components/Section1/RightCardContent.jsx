import React from 'react'

const RightCardContent = (props) => {
  return (
   <div className='flex flex-col justify-between absolute top-0 left-0 h-full w-full'>
         <h1 className='bg-white rounded-full h-4 w-4 m-5 p-5 text-2xl flex justify-center items-center font-semibold'>{props.id+1}</h1>
         <div className='m-5'>
            <p className='text-white mt-12 mb-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio nisi voluptate a qui placeat! Lorem ipsum dolor sit amet.</p>
            <div className='flex justify-around '>
                <button style={{backgroundColor:props.color}} className='px-3 py-1 rounded-full text-white '>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className='px-2 py-1 rounded-full text-white'><i class="ri-arrow-right-line"></i></button>
            </div>
         </div>
      </div>
  )
}

export default RightCardContent
