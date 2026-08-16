import React from 'react'
import Section_2 from './components/section 2/Section_2.jsx'
import Section_1 from './components/section 1/Section_1.jsx'

const App = () => {
  const users =[
    {img:'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag:"Satisfied"
    },
    {img:"https://images.unsplash.com/photo-1571365689578-618663443bd7?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      tag:"Underserved"},
    {img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      tag:"Underbanked"}
  ]
  return (
    <div>
      <Section_1 users={users}/>
      <Section_2 />
    </div>
  )
}

export default App
