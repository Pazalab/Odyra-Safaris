import { HiArrowLongRight } from "react-icons/hi2"
import { Link } from "react-router-dom"

const CallToAction = () => {
  return (
    <div className="call-to-action">
             <div className="inner-row">
                         <div className="call-to-action-content">
                                     <div className="call-action-box">
                                                <h3>We can help you craft a dream safari.</h3>
                                                <h2>Ready for the Adventure of a Lifetime?</h2>

                                                <p>We’re always here for you! Our travel experts are available 24/7 to assist you with planning your perfect safari. Feel free to reach out—we’d love to help!</p>

                                                <Link to={"/contact-us"}>Let&apos;s Connect <span><HiArrowLongRight /></span></Link>
                                     </div>
                         </div>
             </div>
    </div>
  )
}

export default CallToAction