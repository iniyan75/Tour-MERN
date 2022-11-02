import React from "react";
import Hero from "./modules/hero";
import Destinations from "./modules/destinations";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'
import './css/footer.css'
export default function Home() {
    return (
        <div>
            <div className='home'>


                <Hero />

            </div>



            <div id="destinations">
                <Destinations />

            </div>

            <div>
                <section id='about'>
                    <small style={{ color: 'white' }}>This is a website where you can find reviews of tourist places and add your reviews to it</small>

                </section>


            </div>
            <div>
                <section id="contact">
                    <div className='footer' style={{backgroundColor:"white"}}>
                        <div className='social'>
                            <FaFacebook  className='icon'></FaFacebook>
                            <FaInstagram className='icon' />
                            <FaTwitter className='icon' />
                            <FaPinterest className='icon' />
                        </div>

                    </div>

                </section>

            </div>
        </div>

    )
}


{/* <div className='recent'>

                    <div className="row">
                        <div className="col-12">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://images.pexels.com/photos/12035356/pexels-photo-12035356.jpeg?cs=srgb&dl=pexels-siraj-nazar-12035356.jpg&fm=jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://images.pexels.com/photos/13691356/pexels-photo-13691356.jpeg?cs=srgb&dl=pexels-nandhu-kumar-13691356.jpg&fm=jpg"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://images.pexels.com/photos/2378278/pexels-photo-2378278.jpeg?cs=srgb&dl=pexels-shafifotumcatcher-2378278.jpg&fm=jpg"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>


                </div>

                <h4 style={{ color: "white", padding: '2%', marginLeft: ' 15%' }}>we will help you to find the best places of recent time and review of the people who visited it</h4>







            </div>
            <div className='cardsline'>
               <div>
                 <h2 className='display-3' style={{ color: "white", padding: '2%', marginLeft: ' 5%' }}>Top destinations </h2></div>
                 <div className='cardsi'>
                <div className="cardi">

                    <h3 style={{ color: "pink", padding: '2%', marginLeft: ' 15%' }} >Famous picks of this month</h3>
                    <p style={{ color: "white", padding: '2%', marginLeft: ' 15%' }}>Popular places of the month will be visible here click the button to explore</p>
                    <img className="cardimg" src='https://images.pexels.com/photos/15286/pexels-photo.jpg?cs=srgb&dl=pexels-luis-del-r%C3%ADo-15286.jpg&fm=jpg' alt="none"></img>
                    <Link to="/destin"><button className='button' >Open</button></Link>
                    

                </div>
                <div className="cardi">

                    <h3 style={{ color: "pink", padding: '2%', marginLeft: ' 15%' }} >All time popular places</h3>
                    <p style={{ color: "white", padding: '2%', marginLeft: ' 15%' }}>Popular places of the month will be visible here click the button to explore</p>
                    <img className="cardimg" src='https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?cs=srgb&dl=pexels-stein-egil-liland-3408744.jpg&fm=jpg' alt="none"></img>
                    <button className='button'>Open</button>

                </div>
                <div className="cardi">

                    <h3 style={{ color: "pink", padding: '2%', marginLeft: ' 15%' }} >Famous picks for Family</h3>
                    <p style={{ color: "white", padding: '2%', marginLeft: ' 15%' }}>Popular places of the month will be visible here click the button to explore</p>
                    <img className="cardimg" src='https://images.pexels.com/photos/39691/family-pier-man-woman-39691.jpeg?cs=srgb&dl=pexels-pixabay-39691.jpg&fm=jpg' alt="none"></img>
                    <button className='button'>Open</button>

                </div>
                </div>

            </div>




        </div>


    )
} */}