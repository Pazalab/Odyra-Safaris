import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import CountryDestinationBody from "../components/destinations/CountryDestinationBody"


const DestinationCountry = () => {
  return (
    <>
           <Navbar />
           <CountryDestinationBody />
           <CallToAction />
           <Footer />
    </>
  )
}

export default DestinationCountry