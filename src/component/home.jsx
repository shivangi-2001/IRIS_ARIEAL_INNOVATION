import React, { Fragment, Component } from 'react';


class Home extends Component {
    state = {
        styles: {
            image: {
                height: "60vh"
            },
            squareContainer: {
                position: 'relative',
                width: '100px', // Set your desired width
                height: '100px', // Set your desired height
                margin: '0 auto', // Center the square
            },

            squareImage: {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
            },
        },
        sectorData: [
            { imageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp', href: '#link1', name: 'Railways & Metro' },
            { imageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/042.webp', href: '#link2', name: 'Road & Highways' },
            { imageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/043.webp', href: '#link3', name: 'Mining , Oil & Gas' },
            { imageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/044.webp', href: '#link4', name: 'Water & Agriculture' },
            { imageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/044.webp', href: '#link5', name: 'Cities & Rural' },
            { imageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/044.webp', href: '#link6', name: 'Archaeology' },
            { imageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp', href: '#link7', name: 'Power' },
            { imageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/043.webp', href: '#link8', name: 'others' },
        ],
        offers: [
            { ServiceImageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp', href: '#link1', name: 'Low Altitude Drone Photogrammetry' },
            { ServiceImageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/042.webp', href: '#link2', name: 'Aerial Photogrammetry' },
            { ServiceImageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/043.webp', href: '#link3', name: 'Satellite Photogrammetry' },
            { ServiceImageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/044.webp', href: '#link4', name: 'LiDAR Survey' },
            { ServiceImageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/044.webp', href: '#link5', name: 'GIS & Remote Sensing' },
            { ServiceImageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/044.webp', href: '#link6', name: 'Asset Inspection' },
            { ServiceImageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp', href: '#link1', name: 'Aerial Photography' },
            { ServiceImageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/042.webp', href: '#link2', name: 'Geospatial Video' },
            { ServiceImageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/043.webp', href: '#link3', name: 'Engineering services' },
            { ServiceImageUrl: 'https://mdbcdn.b-cdn.net/img/new/slides/044.webp', href: '#link4', name: 'Training' },
        ],
        stageOfProjects: [
            { url: 'https://mdbcdn.b-cdn.net/img/new/slides/043.webp', href: '#!', name: "Conceptualization, PFR, DFR, DPR & Design Stage" },
            { url: 'https://mdbcdn.b-cdn.net/img/new/slides/043.webp', href: '#!', name: "Pre Construction Tender & Construction Stage" },
            { url: 'https://mdbcdn.b-cdn.net/img/new/slides/043.webp', href: '#!', name: "Existing Project / Asset Management" }
        ]
    }

    render() {
        return (

            <Fragment>

                <section>
                    <div id="carouselExampleIndicators" className="carousel slide" data-mdb-ride="carousel" data-mdb-carousel-init>
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-mdb-target="#carouselExampleIndicators"
                                data-mdb-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-mdb-target="#carouselExampleIndicators"
                                data-mdb-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-mdb-target="#carouselExampleIndicators"
                                data-mdb-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img style={this.state.styles.image} src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" className="d-block w-100" alt="Wild Landscape" />
                            </div>
                            <div className="carousel-item">
                                <img style={this.state.styles.image} src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" className="d-block w-100" alt="Camera" />
                            </div>
                            <div className="carousel-item">
                                <img style={this.state.styles.image} src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" className="d-block w-100" alt="Exotic Fruits" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
                <br />
                <section style={{ marginTop: '120px', marginLeft: '100px', marginRight: '100px' }}>
                    <h1 className='text-uppercase text-center text-danger f-w-8 my-5 pb-5'>Sectors</h1>
                    <div >
                        <div className="row d-flex justify-content-center g-5">
                            {this.state.sectorData.map((data, index) => (
                                <div key={index} className="col-md-3">
                                    <div
                                        className="p-5 text-center bg-image"
                                        style={{
                                            backgroundImage: `url('${data.imageUrl}')`,
                                            height: '270px',
                                        }}
                                    >
                                        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', fontSize: '12px' }}>
                                            <div className="d-flex justify-content-center align-items-center h-100">
                                                <div className="text-white shadow-4">
                                                    <h1 className='mx-3 fw-bold'>{data.name}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <br />
                <section style={{ marginTop: '120px' }}>
                    <h1 className='text-capitalize text-center text-primary f-w-8 my-5 pb-5'>What we offer</h1>
                    <div className='container px-auto'>
                        <div className="row d-flex justify-content-center gap-2">
                            {this.state.offers.map((data, index) => (
                                <div key={index} className="col-lg-2 col-md-6">
                                    <a href={data.href} className="text-decoration-none text-dark text-center d-block">
                                        <div style={this.state.styles.squareContainer} className='mb-3'>
                                            <img
                                                style={this.state.styles.squareImage}
                                                src={data.ServiceImageUrl}
                                                className="img-fluid rounded-circle"
                                                alt={data.name}
                                            />
                                        </div>
                                        <p className='fw-bolder fs-5'>{data.name}</p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <br />
                <section className="color" style={{ marginTop: '120px' }} >
                    <div className='row px-5' style={{ height: '400px' }}>
                        <div className="col-lg-6 px-5 d-flex align-items-center">
                            <div className='fw-bold text-dark lh-lg' style={{ wordSpacing: '8px' }}>
                                <h1 className='mb-3 h1 fw-bolder'>About Us</h1>
                                <p className='h5 lh-base'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, doloremque earum
                                    expedita maiores aliquam ratione unde culpa placeat labore commodi temporibus
                                    laudantium repudiandae in voluptates amet provident itaque nemo officia.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 p-0">
                            <iframe
                                style={{ width: '100%', height: '100%' }}
                                src="https://www.youtube.com/embed/vlDzYIIOYmM"
                                title="YouTube video"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                </section>
                <section className="color" style={{ marginTop: '120px' }} >
                    <h1 className='fw-bolder text-center text-danger mb-5 pb-5'>Your GeoSpatial Data Partner at Different Stages of Project</h1>
                    <div className='row d-flex justify-content-center mt-5 gap-3' >
                        {this.state.stageOfProjects.map((data, index) => (
                            <div key={index} className="col-md-3">
                                <div className="bg-image hover-overlay ripple">
                                    <img src={data.url} alt="{data.name}" className="img-fluid" />
                                    <div className="mask" style={{ backgroundColor: "rgba(227, 216, 224, 0.2)" }}></div>
                                    <a href={data.href}>
                                        <button className="btn btn-dark btn-lg w-100 fs-5 fw-bold" >{data.name}</button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="color" style={{ marginTop: '120px' }} >
                    <h1 className='fw-bolder text-center text-capitalize text-danger mb-5 pb-5'>Global Experience</h1>
                    <div className='row d-flex justify-content-center container mx-auto' style={{width:'75%'}} >
                        <img src="https://www.matrix-geo.com/wp-content/uploads/2018/12/new-map-dec.jpg" alt="map" />
                    </div>
                </section>
                <section className="color" style={{ marginTop: '120px' }} >
                    <h1 className='fw-bolder text-center text-capitalize text-danger mb-5 pb-5'>Our clients</h1>
                    <div className='row d-flex justify-content-center mt-5 gap-3' >
                        <h1>Client images .................. in carousel</h1>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Home;



