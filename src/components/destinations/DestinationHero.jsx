import destinationBg from "../../assets/destinationBg.jpg"

const DestinationHero = () => {
  return (
    <div className="destination-hero">
               <div className="inner-row">
                          <div className="destination-hero-content">
                                    <div className="destination-hero-texts">
                                                  <h1>Where Your Next Adventure Begins</h1>
                                                  <p>From the vast savannahs teeming with wildlife to the breathtaking coastlines and hidden gems off the beaten path, our destinations offer the ultimate African adventure. Whether you&apos;re chasing the Great Migration in the Maasai Mara, exploring the rugged landscapes of Samburu, or unwinding on the white sands of Diani Beach, every journey is designed to immerse you in the heart of Africa. Let Odyra Safaris take you to the most iconic and untouched corners of Kenya for an experience you&apos;ll never forget.</p>
                                    </div>
                                    <div className="destination-hero-image">
                                                <img src={destinationBg} alt="" />
                                    </div>
                          </div>
               </div>
    </div>
  )
}

export default DestinationHero