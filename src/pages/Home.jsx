import Navbar from "../components/common/navigation/Navbar"
import AboutSection from "../components/home/AboutSection"
import DestinationSection from "../components/home/DestinationSection"
import HeroSection from "../components/home/HeroSection"
import "../css/home.css"

const Home = () => {
  return (
       <>
             <Navbar />
             <HeroSection />
             <AboutSection />
             <DestinationSection />
       </>
  )
}

export default Home