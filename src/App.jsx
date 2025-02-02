import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react';
import Home from './pages/Home';

function App() {
  const location = useLocation();

  useEffect(() => {
        window.scrollTo(0, 0)
  }, [location])

  return (
    <Routes>
                <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App
