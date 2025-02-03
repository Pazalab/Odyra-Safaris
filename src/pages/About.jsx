import AboutHero from "../components/about/AboutHero"
import AboutStory from "../components/about/AboutStory"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import ProcessSection from "../components/home/ProcessSection"
import TestimonialsSection from "../components/home/TestimonialsSection"
import "../css/about.css"

const About = () => {
  return (
    <>
            <Navbar />
            <AboutHero />
            <AboutStory />
            <ProcessSection />
            <TestimonialsSection />
            <Footer />
    </>
  )
}

export default About