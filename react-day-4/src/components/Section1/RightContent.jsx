import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='card' className=' m-3 w-3/4 flex flex-nowrap gap-5 overflow-x-auto rounded-4xl'>
     {props.users.map(function(elem,idx){

      return <RightCard key={idx} id={idx} img={elem.img} color={elem.color} tag={elem.tag}/>
     })}
    </div>
  )
}

export default RightContent
