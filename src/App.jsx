import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import { HeaderComponent } from './components/components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-w-full min-h-screen bg-transparent">
      <main>
        <HeaderComponent />
        <Outlet />
      </main>
    </div>
  )
}

export default App
