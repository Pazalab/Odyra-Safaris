import CallToAction from "../components/common/CallToAction"
import Navbar from "../components/common/navigation/Navbar"
import AboutSection from "../components/home/AboutSection"
import DestinationSection from "../components/home/DestinationSection"
import ExperiencesSection from "../components/home/ExperiencesSection"
import HeroSection from "../components/home/HeroSection"
import ProcessSection from "../components/home/ProcessSection"
import TestimonialsSection from "../components/home/TestimonialsSection"
import "../css/home.css"

const Home = () => {
  return (
       <>
             <Navbar />
             <HeroSection />
             <AboutSection />
             <DestinationSection />
             <ExperiencesSection />
             <ProcessSection />
             <TestimonialsSection />
             <CallToAction />
       </>
  )
}

export default Home