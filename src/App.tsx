import { useState } from 'react'
import reactLogo from './react.png'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="logo">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Webpack, React, TypeScript Template</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
      </div>
    </>
  )
}

export default App
