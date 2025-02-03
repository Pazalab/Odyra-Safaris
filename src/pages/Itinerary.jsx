import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import ItineraryHero from "../components/itinerary/ItineraryHero"
import "../css/itinerary.css"
const Itinerary = () => {
  return (
    <>
           <Navbar />
           <ItineraryHero />
           <CallToAction />
           <Footer />
    </>
  )
}

export default Itinerary