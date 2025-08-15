import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-between h-30 w-30">
        <a href="https://vite.dev" target="_blank" className="logo flex justify-start">
          <img src={viteLogo} className="h-50 w-50" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="logo react flex justify-end">
          <img src={reactLogo} className="h-30 w-30" alt="React logo" />
        </a>
      </div>
      <h1>I'm Going Through Changes</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {count} changes
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
