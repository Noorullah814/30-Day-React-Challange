import React from 'react'

const Navbar = () => {
  return (
    <div id='navbar' className='flex justify-between py-6 px-10'>
      <h3 className='bg-black text-white py-1 px-2 rounded-full uppercase text-sm'>Target Audience</h3>
      <button className='bg-gray-200 px-2 rounded-full uppercase text-sm tracking-wider'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar
