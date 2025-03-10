import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Itinerary from './pages/Itinerary';
import Contact from './pages/Contact';
import DestinationCountry from './pages/DestinationCountry';
import SingleItineraryPage from './pages/SingleItineraryPage';

function App() {
  const location = useLocation();

  useEffect(() => {
        window.scrollTo(0, 0)
  }, [location])

  return (
    <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/destinations' element={<Destinations />} />
                <Route path='/itineraries' element={<Itinerary />} />
                <Route path='/contact-us' element={<Contact />} />
                <Route path="/destination/country/:name" element={<DestinationCountry />} />
                <Route path='/itinerary/:name' element={<SingleItineraryPage />} />
    </Routes>
  )
}

export default App
