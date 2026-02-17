import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent = (props) => {
  return (
    <div id='page-content' className=' h-[70vh] flex gap-2'>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default PageContent
