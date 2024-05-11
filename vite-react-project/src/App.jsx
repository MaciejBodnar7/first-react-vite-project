import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <div className="div-main ml-6 text-left bg-slate-200 w-fit p-6 mt-6 rounded-2xl">
          <div className="div-1 flex gap-3 items-center h-fit ">
            <h1 className="text-4xl font-bold">Fun facts about react</h1>
            <img className="mt-1" src={reactLogo} alt="react logo" />
          </div>
          <ul className="ml-6 mt-4 flex flex-col">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
