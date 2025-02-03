
const ContactForm = () => {
  return (
    <div className="contact-form">
              <form>
                       <div className="form-row">
                                <input type="text" className="form-control" placeholder="Full Name*" />
                       </div>
                       <div className="form-row">
                                  <input type="text" className="form-control" placeholder="Email*" />
                       </div>
                       <div className="form-row">
                                 <input type="number" pattern="+[0,9]" className="form-control" placeholder="Phone Number"/>
                       </div>
                       <div className="form-row">
                                 <textarea placeholder="Your Message*"></textarea>
                       </div>
                       <div className="form-btn">
                                <button type="submit">Send Message</button>
                       </div>
              </form>
    </div>
  )
}

export default ContactForm