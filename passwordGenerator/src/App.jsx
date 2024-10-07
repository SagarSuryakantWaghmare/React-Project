import { useState, useCallback, useEffect,useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // useref hook
  const passwordRef=useRef(null) 
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*(){}~`";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  const copyPasswordToClipBoard=useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,4);
  window.navigator.clipboard.writeText(password);
  },[password])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-8 bg-gray-800 text-orange-500 my-8">
        <h1 className="text-2xl font-semibold text-white text-center mb-4">
          Password Generator
        </h1>
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4 bg-gray-600">
          <input
            type="text"
            value={password}
            placeholder="Your Password"
            className="w-full px-4 py-2 text-gray-900 outline-none"
            readOnly
            ref={passwordRef}
          />
          <button  onClick={copyPasswordToClipBoard}className="w-40 py-2 bg-blue-500 text-white rounded-lg hover:bg-orange-600">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={80}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
