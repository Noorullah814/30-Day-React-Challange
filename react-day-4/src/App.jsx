import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users= [
    {img:'./src/assets/img1.avif',
      color:'royalblue',
      tag:'Satisfied'
    },

    {img:'/src/assets/img2.avif',
      color:'green',
      tag:'Underserved'},

    {img:'/src/assets/img3.avif',
      color:'black',
      tag:'Underbanked'},
      
       {img:'/src/assets/img4.avif',
      color:'gray',
      tag:'Underbanked'}
  ]
  return (
    <div id='app'>
      <Section1 users={users}/>
    </div>
  )
}

export default App
