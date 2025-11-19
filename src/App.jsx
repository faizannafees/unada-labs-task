import './App.css'
import Navbar from './components/Navbar'
import SolarSystem from './components/SolarSystem'

function App() {

  return (
    <div className=''>
     <Navbar />
      <main className="flex-1">
        <SolarSystem />
      </main>
    </div>
  )
}

export default App
