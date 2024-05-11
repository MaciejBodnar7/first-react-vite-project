import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img className="logo" src={reactLogo} alt="react logo" />
        <div className="ml-6 text-left">
          <h1 className="text-4xl font-bold">Fun facts about react</h1>
          <ul className="ml-6 mt-4">
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
