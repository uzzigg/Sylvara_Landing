import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ModoUso from './pages/ModoUso'
import Android from './pages/Android'

function App() {
  return (
    <div className="min-h-screen paper-texture">
      {/* Skip to main content link (accesibilidad) */}
      <a href="#main-content" className="skip-to-main">
        Saltar al contenido principal
      </a>
      
      <Navbar />
      
      <main id="main-content" role="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modo-uso" element={<ModoUso />} />
          <Route path="/android" element={<Android />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
