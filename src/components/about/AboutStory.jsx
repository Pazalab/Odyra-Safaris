import valueImg from "../../assets/statements.jpg"
const AboutStory = () => {
  return (
    <div className="about-story">
              <div className="inner-row">
                        <div className="about-story-content">
                                    <div className="about-story-row">
                                               <div className="about-story-column">
                                                         <h3>Background</h3>
                                                         <p>Odyra Safaris was born from the shared vision of a Kenyan-Australian couple who longed to reconnect with their native roots in Africa. After years of living abroad, they decided to return to Kenya and rediscover the wild beauty of their homeland. What started as a personal journey of rediscovery soon transformed into a passion to share the magic of Africa with the world. Together, they began curating bespoke safari experiences, crafting personalized, seamless adventures across Kenya that allowed others to feel the same deep connection to Africa that they did.</p>
                                               </div>
                                               <div className="about-story-extra">
                                                           <p>Today, Odyra Safaris is more than just a safari company; it’s a bridge between cultures, a celebration of Africa’s natural beauty, and a commitment to sustainable travel. The couple, along with their team of expert guides, continue to work tirelessly to offer unforgettable, authentic safari experiences, connecting travelers with the land, its people, and the incredible wildlife that calls Africa home. </p>
                                                           <p>Looking ahead, Odyra Safaris aims to continue growing while staying true to its roots—promoting responsible travel and fostering meaningful connections with local communities. Our goal is to inspire more travelers to not only visit Africa but to engage deeply with its culture and natural wonders, leaving a positive footprint on the land they explore. Through every safari, Odyra hopes to ignite a lasting passion for Africa, ensuring its beauty is cherished for years to come.</p>
                                               </div>
                                    </div>

                                    <div className="about-statements">
                                                 <div className="about-statement">
                                                           <h3>Our Mission</h3>
                                                           <p>To deliver extraordinary and sustainable safari adventures that create lifelong memories, foster meaningful relationships with local communities, and protect Africa’s heritage for future generations.
                                                           </p>
                                                 </div>
                                                 <div className="about-statement">
                                                              <h3>Our Vision</h3>
                                                              <p>To be the most trusted and inspiring safari company in East and Central Africa, connecting travellers to the heart of Africa’s natural beauty, wildlife, and vibrant cultures.
                                                              </p>
                                                 </div>
                                    </div>


                                    <div className="values-section">
                                                  <div className="value-image">
                                                            <img src={valueImg} alt="" />
                                                  </div>
                                                  <div className="values-description">
                                                              <h4>At the heart of Odyra Safaris is a passion for authenticity, safety, and immersive travel. These values expounded below shape our approach, allowing us to design meaningful safaris and unforgettable journeys that celebrate and preserve Africa’s rich heritage.</h4>

                                                              <div className="values-row">
                                                                            <div className="value-moja">
                                                                                       <h5>Stay Open & Honest</h5>
                                                                                       <p>We believe trust is the foundation of every great journey. By fostering transparency, inclusivity and respect in every interaction, we ensure that travelers feel informed, valued, and welcomed throughout their safari experience.</p>
                                                                            </div>
                                                                            <div className="value-moja">  
                                                                                       <h5>All In. Every Time</h5>
                                                                                       <p>We&apos;re passionate about delivering more than just a trip; we create extraordinary adventures. Our team goes above and beyond to ensure that every safari exceeds expectations, offering seamless planning, exceptional service, and unforgettable moments in the heart of Africa.</p>
                                                                            </div>
                                                                            <div className="value-moja">
                                                                                        <h5>Passion for Adventure</h5>
                                                                                        <p>Africa&apos;s beauty is meant to be explored, and we love inspiring others to experience it firsthand. Whether it&apos;s a thrilling game drive, a cultural immersion or a breathtaking sunset over the savannah, we create experiences that ignite a deep love for Africa.</p>
                                                                            </div>
                                                                            <div className="value-moja">
                                                                                        <h5>Travel with Care</h5>
                                                                                        <p>We believe in responsible travel that leaves a positive impact. From supporting conservation efforts to uplifting local communities, we are committed to preserving Africa&apos;s natural and cultural heritage for generations to come while ensuring ethical and sustainable tourism practices.</p>
                                                                            </div>
                                                                            <div className="value-moja">
                                                                                         <h5>Keep it Real</h5>
                                                                                         <p>Every safari should be as authentic as the land it explores. We curate experiences that honor Africa&apos;s traditions, diverse ecosystems, and incredible wildlife, ensuring travelers gain a true and meaningful connection to this remarkable continent.</p>
                                                                            </div>
                                                              </div>
                                                  </div>
                                    </div>
                        </div>
              </div>
    </div>
  )
}

export default AboutStory