import React, { Component, Fragment } from 'react';

class About extends Component {
    state = {
        chooseCompany: [
            { imageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis fugit eum sit quibusdam numquam, iste natus ipsa nemo impedit, quod, libero suscipit enim possimus aut in dolore ullam ea voluptatibus', name: 'TECHNOLOGY' },
            { imageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/042.webp', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis fugit eum sit quibusdam numquam, iste natus ipsa nemo impedit, quod, libero suscipit enim possimus aut in dolore ullam ea voluptatibus', name: 'QUALITY ASSURANCE' },
            { imageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/043.webp', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis fugit eum sit quibusdam numquam, iste natus ipsa nemo impedit, quod, libero suscipit enim possimus aut in dolore ullam ea voluptatibus', name: 'FAST TURNAROUND' },
            { imageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/044.webp', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis fugit eum sit quibusdam numquam, iste natus ipsa nemo impedit, quod, libero suscipit enim possimus aut in dolore ullam ea voluptatibus', name: 'PRICE' },
            { imageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/044.webp', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis fugit eum sit quibusdam numquam, iste natus ipsa nemo impedit, quod, libero suscipit enim possimus aut in dolore ullam ea voluptatibus', name: 'CUSTOMER SERVICE' },
        ],
        values: [
            { imageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis fugit eum sit quibusdam numquam, iste natus ipsa nemo impedit, quod, libero suscipit enim possimus aut in dolore ullam ea voluptatibus', name: 'our values' },
            { imageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/042.webp', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis fugit eum sit quibusdam numquam, iste natus ipsa nemo impedit, quod, libero suscipit enim possimus aut in dolore ullam ea voluptatibus', name: 'our mission' },
            { imageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/043.webp', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis fugit eum sit quibusdam numquam, iste natus ipsa nemo impedit, quod, libero suscipit enim possimus aut in dolore ullam ea voluptatibus', name: 'our promission' },
            { imageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/044.webp', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis fugit eum sit quibusdam numquam, iste natus ipsa nemo impedit, quod, libero suscipit enim possimus aut in dolore ullam ea voluptatibus', name: 'our vibes' },
        ],
        keyDifferentiator: [
            { name: 'Global Work Experience', describe: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis fugit eum sit quibusdam numquam, iste natus ipsa nemo impedit' },
            { name: 'Global Work Experience', describe: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis fugit eum sit quibusdam numquam, iste natus ipsa nemo impedit' },
            { name: 'Global Work Experience', describe: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis fugit eum sit quibusdam numquam, iste natus ipsa nemo impedit' },
            { name: 'Global Work Experience', describe: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis fugit eum sit quibusdam numquam, iste natus ipsa nemo impedit' },
            { name: 'Global Work Experience', describe: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis fugit eum sit quibusdam numquam, iste natus ipsa nemo impedit' },
            { name: 'Global Work Experience', describe: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis fugit eum sit quibusdam numquam, iste natus ipsa nemo impedit' },

        ]
    }
    render() {
        return (
            <Fragment>
                <section className='bg-secondary p-5' style={{ '--mdb-bg-opacity': "0.1" }}>
                    <header className='container text-dark ' style={{ letterSpacing: "3px" }}>
                        <h1 className='text-center display-1 fw-bold p-5' style={{ letterSpacing: '8px' }} >About Us</h1>
                        <p className='text-drak fs-5'>Matrix-Geo Solutions is a privately held global Geospatial Service & Engineering Consultancy Company that is based in New Delhi, India.</p>

                        <p className='text-drak fs-5'>Matrix Geo use the latest technologies like Photogrammetry, Geographical Information System (GIS), LIDAR, Remote Sensing,
                            software solutions integrated with domain engineering excellence to achieve best results and develop solutions for medium
                            to large scale enterprises and government agencies across the world.</p>
                    </header>
                </section>

                <section className='text-center p-5 fs-5 lh-base' style={{ letterSpacing: "2px", wordSpacing: '2px', margin: "80px" }}>
                    <p>Matrix-Geo employs a highly trained and experienced staff of geospatial experts specializing in GIS strategic planning, consulting, development, design,
                        implementation and integration. We have assembled a team having extensive experience in managing and performing citywide, countrywide and regional mapping projects throughout
                        the world that ensures a service higher in quality and accuracy.</p>

                    <p>Matrix-Geo is known for dependability, accuracy and superior quality with a consistant track record in meeting technical
                        requirements on-time and onbudget. Our focus is total “quality management.”</p>

                </section>

                <section className='m-5 py-5'>
                    <h1 className='text-center text-danger fw-bolder mb-4'>Why Choose Iris Arieal Innovation Limited?</h1>
                    <div className='row m-5 p-5 gap-4'>
                        {this.state.chooseCompany.map((data, index) => (
                            <div kye={index} className='col p-0'>
                                <img src={data.imageUrl} alt={data.name} className='img-thumbnail' />
                                <h5 className='d-grid text-uppercase fw-bolder text-secondary fs-3' style={{ letterSpacing: '3px' }}>{data.name}</h5>
                                <p className=''>{data.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='m-5 pb-5'>
                    <h1 className='text-capitalize text-center text-danger fw-bolder mb-4'>Our values</h1>
                    <div className='row m-5 p-2 gap-4'>
                        {this.state.values.map((data, index) => (
                            <div kye={index} className='col p-0' style={{ width: '25%' }}>
                                <div className='card bg-secondary' style={{ '--mdb-bg-opacity': "0.1" }}>
                                    <div className='card-body'>
                                        <img src={data.imageUrl} alt={data.name} className='img-thumbnail' />
                                        <h5 className='text-center text-uppercase fw-bolder text-secondary fs-2 text-danger m-3'
                                            style={{ letterSpacing: '3px' }}>{data.name}</h5>
                                        <p className=''>{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='m-5'>
                    <h1 className='text-capitalize text-center text-danger fw-bolder mb-4'>key differentiator</h1>
                    <div className="container">
                        <div className='row m-5 p-2 g-1'>
                            {this.state.keyDifferentiator.map((data, index) => (
                                <div key={index} className='col-md-4' >
                                    <div className='card bg-secondary' style={{ '--mdb-bg-opacity': "0.5" }}>
                                        <div className='card-body'>
                                            <h5 className='text-center text-white text-uppercase fw-bolder text-secondary fs-2 text-danger m-3'
                                                style={{ letterSpacing: '3px' }}>{data.name}</h5>
                                            <p className=''>{data.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default About;