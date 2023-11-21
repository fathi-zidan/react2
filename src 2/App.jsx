import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/QuizTitle'
import Q1 from './components/Question1'
import Q2 from './components/Question2'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <Title />
      <Q1 />
      <Q2 />
     
    </div>
  )
}

export default App
