import { useState } from 'react'
import ReactIcon from './assets/react.svg'
import reactLogo from './assets/react.svg?url'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="logo">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Webpack, React, TypeScript Template</h1>
      <div className="logo-svg">
        <ReactIcon />
      </div>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
      </div>
    </>
  )
}

export default App
