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
          <img src={viteLogo} className="h-50 w-50 pl-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="logo react flex justify-end">
          <img src={reactLogo} className="pr-16 h-30 w-30" alt="React logo" />
        </a>
      </div>
      <h1>I'm Going Through Changes</h1>
      <div className="card">
        <h3 className="mb-3">{count} Changes</h3>
      <div className="buttons flex justify-center">
        <button onClick={() => setCount((plusCount) => count + 1)} className="px-0.5 py-0.5 bg-blue-500 text-white rounded-md hover:bg-blue-700">
            +
        </button>
        <button onClick={() => setCount((minusCount) => {
            if (count > 0) {
                return count - 1
            } else {
            return 0
            }
        })} className="px-1 py-0.5 bg-red-500 text-white rounded-md hover:bg-red-700 ml-2">
            -
        </button>
      </div>
      </div>
    </>
  )
}

export default App
