import React from 'react'
import "remixicon/fonts/remixicon.css";
import RightCardContent from './RightCardContent';
const RightCard = (props) => {
  return (
    <div id='card-img' className='h-full w-70 bg-red-200 rounded-3xl overflow-hidden relative shrink-0'>
      <img className='h-full w-full object-cover' src={props.img} alt="bg-pic" />
      <RightCardContent id={props.id} color={props.color} tag={props.tag}/>
    </div>
    
  )
}

export default RightCard
