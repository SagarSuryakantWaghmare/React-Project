import { useState } from "react"
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  // const [name,setName]=useState("anikta")
  // const setRajatgf = (gfName) => {
  //   setName(gfName);
  // };
  return (
  
    <>
      <div
        className="transition duration-400"
        style={{ width: '1920px', height: '1080px', backgroundColor: color }}>
      </div>
      {/* <div className="mx-2 my-2  " style={{background:"orange", color:'black'}}>
       {name}
      </div> */}
      {/* <div className="mx-2 py-2 px-4 my-2">
      <button onClick={ ()=>setRajatgf("sayali")} className="outline-none px-4 mx-2 py-1 rounded-xl text-white shadow-lg" style={{ backgroundColor: "red" }}>
      Sayali</button>
      <button onClick={()=> setRajatgf("aditi")} className="outline-none px-4 mx-2 py-1 rounded-xl text-white shadow-lg" style={{ backgroundColor: "red" }}>
      Aditi</button>
      <button onClick={()=>setRajatgf("nikita")} className="outline-none px-4 mx-2 py-1 rounded-xl text-white shadow-lg" style={{ backgroundColor: "red" }}>
      Nikita</button>
      <button onClick={()=>setRajatgf("tanvi")} className="outline-none px-4 mx-2 py-1 rounded-xl text-white shadow-lg" style={{ backgroundColor: "red" }}>
      Tanvi</button>
      </div> */}



      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <button onClick={() => setColor("red")} className="outline-none px-4 mx-2 py-1 rounded-xl text-white shadow-lg" style={{ backgroundColor: "red" }}>
          Red</button>
        <button onClick={() => setColor("green")} className="outline-none mx-2 px-4 py-1 rounded-xl text-white shadow-lg" style={{ backgroundColor: "green" }}>
          Green</button>
        <button onClick={() => setColor("yellow")} className="outline-none px-4 mx-2 py-1 rounded-xl text-white shadow-lg" style={{ backgroundColor: "yellow" }}>
          Yellow</button>
        <button onClick={() => setColor("black")} className="outline-none px-4 mx-2 py-1 rounded-xl text-white shadow-lg" style={{ backgroundColor: "black" }}>
          black</button>
        <button onClick={() => setColor("orange")} className="outline-none px-4 mx-2 py-1 rounded-xl text-white shadow-lg" style={{ backgroundColor: "orange" }}>
          orange</button>
        <button onClick={() => setColor("pink")} className="outline-none px-4 mx-2 py-1 rounded-xl text-white shadow-lg" style={{ backgroundColor: "pink" }}>
          pink</button>
        <button onClick={() => setColor("blue")} className="outline-none px-4 mx-2 py-1 rounded-xl text-white shadow-lg" style={{ backgroundColor: "blue" }}>
          blue</button>
      </div>
    </>
  )
}

export default App
