import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
// import {jsx as _jsx} from "react/jsx-runtime.js"
function MyApp(){
  return (
    <div>
      <h1>
        Custom App
      </h1>
    </div>
  )
}

// const anotherElement = (
//   <a href="https://google.com" target="_blank">Google</a>
// )
const anotherUser="Shraddha"
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(

  reactElement

)

