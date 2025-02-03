import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import DestinationBody from "../components/destinations/DestinationBody"
import DestinationHero from "../components/destinations/DestinationHero"
import "../css/destinations.css"

const Destinations = () => {
  return (
    <>
          <Navbar />
          <DestinationHero />
          <DestinationBody />
          <CallToAction />
          <Footer />
    </>
  )
}

export default Destinations