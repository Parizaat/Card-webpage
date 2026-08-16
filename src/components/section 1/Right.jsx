import React from 'react'
import Rightcard from '../section 1/Rightcard'

const Right = (props) => {
  return (
    <div className=' h-full w-3/4 flex gap-4'>
      {props.users.map(function (elem,idx) {
        return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default Right
