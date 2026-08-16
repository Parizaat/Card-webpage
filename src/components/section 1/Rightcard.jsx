import React from 'react'
import Rightcardcontent from '../section 1/Rightcardcontent'


const Rightcard = (props) => {
  return (
    <div className='h-full w-1/3 rounded-4xl overflow-hidden relative'>
    
      <img className='object-cover h-full w-full' src={props.img} alt="" />
     
     <Rightcardcontent tag={props.tag} id={props.id}/>
    </div>
  )
}

export default Rightcard
