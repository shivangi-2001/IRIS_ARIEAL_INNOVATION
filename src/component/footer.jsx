import React, { Fragment } from 'react';
import '../css/footer.css';


const FooterComponent = () => {
    return (
        <footer className="footer is-desktop">
            <section className="container">
                <div className="columns">
                    <figure class="image is-128x128">
                        <img class="is-rounded" src={process.env.PUBLIC_URL + 'icons.png'} />
                    </figure>
                </div>
                <div class="columns is-desktop">

                    <div class="column">
                        <div className="column">
                            Iris Aerial Innovation develops, produces and commercializes high-precision VTOL drones that collect survey-grade aerial data.
                        </div>
                        <div className="column">
                            <h1>HEADQUARTERS</h1>
                            <li><a href="#!">IRIS AG</a></li>
                            <li><a href="#!">Giesshübelstrasse 40</a></li>
                            <li><a href="#!"> 8045 Zurich</a></li>
                            <li><a href="#!">Switzerland</a></li>
                        </div>
                        <div className="column">
                            <h1>OTHER OFFICES</h1>
                            <li><a href="#!">Fort Lauderdale, USA</a></li>
                            <li><a href="#!">Zagreb, Croatia</a></li>
                        </div>
                    </div>
                    <div class="column">
                        <div className="column">
                            <h1>Drone</h1>
                            <li><a href="#!">Camera</a></li>
                            <li><a href="#!">Features</a></li>
                            <li><a href="#!">Extended Services</a></li>
                            <li><a href="#!">Post-processing Software</a></li>
                        </div>
                        <div class="column">
                            <h1>Data Type</h1>
                            <li><a href="#!">Orthomosaic</a></li>
                            <li><a href="#!">Point cloud</a></li>
                            <li><a href="#!">3D recontruction</a></li>
                            <li><a href="#!">Multispectral imagery</a></li>
                        </div>
                        <div class="column">
                            <h1>SOLUTIONS</h1>
                            <li><a href="#!">Urban planning and land management</a></li>
                            <li><a href="#!">Mining and metals</a></li>
                            <li><a href="#!">Construction and infrastructure</a></li>
                            <li><a href="#!">Agriculture</a></li>
                            <li><a href="#!">Environmental monitoring</a></li>
                        </div>
                    </div>
                    <div class="column">
                        <div className="column">
                            <h1>LEARN</h1>
                            <li><a href="#!">Case studies</a></li>
                            <li><a href="#!">Webinars</a></li>
                            <li><a href="#!">Downloads</a></li>
                            <li><a href="#!">Drone comparisons</a></li>
                            <li><a href="#!">Blog</a></li>
                            <li><a href="#!">Knowledge base</a></li>
                        </div>

                        <div class="column">
                            <h1>ABOUT IRIS Aerial</h1>
                            <li><a href="#!">Company</a></li>
                            <li><a href="#!">Career</a></li>
                            <li><a href="#!">Company news</a></li>
                            <li><a href="#!">Press / Media kits</a></li>
                            <li><a href="#!">Partners</a></li>
                        </div>
                    </div>
                    <div class="column">
                        <div className="column">
                            <h1>contact us</h1>
                            <li><a href="#!">Talk to sales</a></li>
                            <li><a href="#!">Find a distributor</a></li>
                            <li><a href="#!">Other inquiries</a></li>
                        </div>

                        <div class="column">
                            <h1>SUPPORT</h1>
                            <li><a href="#!">Quick start guide</a></li>
                            <li><a href="#!">Knowledge base</a></li>
                            <li><a href="#!">Submit a ticket</a></li>
                            <li><a href="#!"><i class="fa fa-lock mr-5" aria-hidden="true"></i>Customer portal</a></li>
                            <li><a href="#!"><i class="fa fa-lock mr-5" aria-hidden="true"></i>Product roadmap</a></li>
                            <li><a href="#!"><i class="fa fa-lock mr-5" aria-hidden="true"></i>Product changelog</a></li>
                            <li><a href='#!'><i class="fa fa-lock mr-5" aria-hidden="true"></i>Send a feature request</a></li>
                        </div>

                        <div class="column">
                            <h1>PARTNER PROGRAM</h1>
                            <li><a href="#!">Become a partner</a></li>
                            <li><a href="#!">Partner news</a></li>
                            <li><a href="#!"><i class="fa fa-lock mr-5" aria-hidden="true"></i>Partner portal</a></li>
                            <li><a href="#!"><i class="fa fa-lock mr-5" aria-hidden="true"></i>Knowledge Base for distributors</a></li>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default FooterComponent;