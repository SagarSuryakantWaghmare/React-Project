import './App.css'
import { useState } from 'react'
// This above is called as the hooks
function App() {
  // using the useState
  // one of the hooks
  const [progress,setProgress]=useState(10)
  //  let progress=5
   const addValue=()=>{
    console.log("Adding"+progress)
    // setProgress(progress+1)
    setProgress(prevProgress=>prevProgress+1);
    setProgress(prevProgress=>prevProgress+1);
    setProgress(prevProgress=>prevProgress+1);
    setProgress(prevProgress=>prevProgress+1);
    // progress+=1;
  }
  const removeValue=()=>{
    console.log("Removing"+progress);
    setProgress(progress-1)
    // progress-=1;
   }

  return (
    <>
      <h1>Way to the react phase</h1>
      <h2>Progress counter:{progress}
      </h2>
      <button
      onClick={addValue}>Add Progress:{progress}</button>
      <br />
      <button
      onClick={removeValue}>Remove Progress:{progress}</button>
      <p>footer:{progress}</p>
    </>
  )
}

export default App
