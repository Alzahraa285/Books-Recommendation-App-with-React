import React from 'react'
import './contact.css';



export default function About() {

            return (
              <div>
        
                
                
                <section className="hero-wrap hero-wrap-2 " style={{backgroundImage: 'url("https://img.freepik.com/premium-photo/bookstore-romance-cozy-library-setting-with-lovethemed-book-covers_918839-19418.jpg?w=1380")'}} data-stellar-background-ratio="0.5">
                  
                
                  <div className="overlay" />

                  <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                      <div className="col-md-9 ftco-animate text-center">
                        <h1 className="mb-0 bread">Contact Us</h1>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="ftco-section bg-light sec">
                  <div className="container">
                    <div className="row no-gutters">
                      <div className="col-md-8">

                      </div>
                      {/* <section className="about">
        <div className="row">
          <div className="image">
            <img src="https://newbookrecommendation.com/wp-content/uploads/2024/08/The_One_Memory_of_Flora_Banks.webp" alt="" />
          </div>
          <div className="content">
            <h3>why choose us?</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolorum quasi illo? Distinctio expedita commodi, nemo a quam error repellendus sint, fugiat quis numquam eum eveniet sequi aspernatur quaerat tenetur.</p>
            <a href="courses.html" className="inline-btn">our courses</a>
          </div>
        </div>
      
      </section> */}

                      <div className="col-md-12">
                        <div className="wrapper">
                          <div className="row no-gutters">
                            <div className="col-lg-8 col-md-7 d-flex align-items-stretch">
                              <div className="contact-wrap w-100 p-md-5 p-4">
                                <h3 className="mb-4">Get in touch</h3>
                                <div id="form-message-warning" className="mb-4" /> 
                                <div id="form-message-success" className="mb-4">
                                  Your message was sent, thank you!
                                </div>
                                <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label className="label" htmlFor="name"></label>
                                        <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                                      </div>
                                    </div>
                                    <div className="col-md-6"> 
                                      <div className="form-group">
                                        <label className="label" htmlFor="email"></label>
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="form-group">
                                        <label className="label" htmlFor="subject"></label>
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="form-group">
                                        <label className="label" htmlFor="#"></label>
                                        <textarea name="message" className="form-control" id="message" cols={30} rows={4} placeholder="Message" defaultValue={""} />
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="form-group">
                                        <input type="submit" defaultValue="Send Message" className="btn btn-primary" />
                                        <div className="submitting" />
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                              <div className="info-wrap bg-primary w-100 p-md-5 p-4">
                                <h3>Let's get in touch</h3>
                                <p className="mb-4">We're open for any suggestion or just to have a chat</p>
                                <div className="dbox w-100 d-flex align-items-start">
                                  <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-map-marker" />
                                  </div>
                                  <div className="text pl-3">
                                    <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                                  </div>
                                </div>
                                <div className="dbox w-100 d-flex align-items-center">
                                  <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-phone" />
                                  </div>
                                  <div className="text pl-3">
                                    <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                  </div>
                                </div>
                                <div className="dbox w-100 d-flex align-items-center">
                                  <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-paper-plane" />
                                  </div>
                                  <div className="text pl-3">
                                    <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                  </div>
                                </div>
                                <div className="dbox w-100 d-flex align-items-center">
                                  <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-globe" />
                                  </div>
                                  <div className="text pl-3">
                                    <p><span>Website</span> <a href="#">yoursite.com</a></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
       
                {/* loader */}
              </div>
            );
          }
