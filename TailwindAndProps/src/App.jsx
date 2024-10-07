import { useState } from 'react'

import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:'Sagar',
    age:22
  }
  let newArr=[1,2,3,4];
  return (
    <>
      <h1 className='bg-green-600 mb-4 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="Sagar" btnText="click me"/>
      <Card username="Shraddha" btnText="click here"/>
    </>

  )
}

export default App
