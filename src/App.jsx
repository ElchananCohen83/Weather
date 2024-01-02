import { useState } from 'react'
import CustomizedInputBase from './components/search.jsx'
import Weather from "./components/WeatherCard.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CustomizedInputBase />
      <Weather />
    </div>
  )
}

export default App