import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css';


import solution from './components/solution.png'

function App() {
  const [lenght, setLenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState(" ")

  const passwordRef = useRef(null)
  const passwordGenrator = useCallback(
    () => {
      let pass = ""
      let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      if (numberAllowed) str += "0123456789"
      if (charAllowed) str += "!@#$%^&*=+_-{}[]()~"

      for (let i = 0; i < lenght; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)

      }
      setPassword(pass)

    },
    [lenght, numberAllowed, charAllowed]
  )
  useEffect(() => {
    passwordGenrator()
  }
    , [lenght, numberAllowed, charAllowed, passwordGenrator])

  const copyPassword = useCallback(
    () => {

      window.navigator.clipboard.writeText(password)
    },
    [password],
  )


  return (
    <>
      
      <div className="content">

        <div className="Hello">
          <div className="upperSection" style={{ width: '100%', textAlign: "center" }}>
            <div style={{ color: "blueviolet", fontSize: '50px' }}><span id="element">Random Password Generator</span>
            </div>
            <p className="whatido">Create strong and secure passwords to keep your account safe online.</p>
          </div>
          <div className="image">
            <img src={solution} alt="" />
          </div>

        </div>
        <div className="container">
          <div className="Password">
            <input type="text" value={password} className=' bg-slate-400 outline-none w-full py-1 px-3' placeholder='Password' />
            <button className='bg-blue-700 text-white px-3 py-0.5 shrink-0 outline-none' onClick={copyPassword}>Copy</button>
          </div>

          <div className="Inputs">
            <div className="flex items-center gap-x-1">

              <input
                type="range"
                min={6}
                max={100}
                useRef={passwordRef}
                value={lenght}
                className='cursor-pointer'
                onChange={(e) => {
                  setLenght(e.target.value)
                }}
              />

              <label className="text-red-600" >Lenght : {lenght}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Number</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>

          </div>
        </div>
      </div>
      

    </>
  );
}

export default App;
