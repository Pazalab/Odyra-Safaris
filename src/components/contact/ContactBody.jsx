import { IoMdCall } from "react-icons/io"
import { PiMapPinLine } from "react-icons/pi";
import { BsEnvelopeAt } from "react-icons/bs";
import ContactForm from "./ContactForm";


const ContactBody = () => {
  return (
    <div className="contact-body">
              <div className="inner-row">
                      <div className="contact-body-content">
                                 <div className="contact-body-texts">
                                            <h1>Get in Touch with Us</h1>
                                            <p>Whether you&apos;re ready to embark on your dream safari or just have a few questions, we’re here to help!</p>
                                            <p>Reach out to us by simply leaving a message in the contact form or use the details below to get in touch directly—we’d love to hear from you!</p>

                                            <div className="details-texts">
                                                    <div className="contact-box">
                                                             <span><IoMdCall /></span>
                                                                <div className="contact-box-details">
                                                                           <p>+61 4311 06503</p>
                                                                           <p>+254 7123 45678</p>
                                                             </div>
                                                    </div>
                                                      <div className="contact-box">
                                                                  <span><BsEnvelopeAt /></span>
                                                                  <p>info@odyrasafaris.com.au</p>
                                                      </div>
                                                      <div className="contact-box">
                                                                <span><PiMapPinLine /></span>
                                                                <p>25 Carbine Loop, Banksia Grove WA</p>
                                                      </div>
                                            </div>
                                 </div>
                                 <div className="contact-body-form">
                                             <ContactForm />
                                 </div>
                      </div>
              </div>
    </div>
  )
}

export default ContactBody