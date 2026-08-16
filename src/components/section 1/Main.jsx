import React from 'react'
import Left from '../section 1/Left'
import Right from '../section 1/Right'




const Main = (props) => {
  return (
    <div className='flex h-[90vh] py-10 items-center px-18 gap-4'>
     <Left />
     <Right users={props.users}/>
    </div>
  )
}

export default Main
