import React from 'react'
import Navbar from '../section 1/Navbar.jsx'
import Main from '../section 1/Main.jsx'


const Section_1 = (props) => {
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Main users={props.users} />
    </div>
  )
}

export default Section_1
