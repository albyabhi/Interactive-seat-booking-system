import { useState } from 'react'


import Home from './sections/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />
    </> 
  )
}

export default App
