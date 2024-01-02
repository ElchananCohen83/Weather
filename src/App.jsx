import { useState } from 'react'
import CustomizedInputBase from './components/search.jsx'
import WeatherCard from "./components/WeatherCard.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CustomizedInputBase />
      <WeatherCard />
    </div>
  )
}

export default App