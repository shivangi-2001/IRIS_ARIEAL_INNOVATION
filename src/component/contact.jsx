import React, { Component, Fragment } from 'react';


class Contact extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <header className='fw-bolder text-center text-uppercase' style={{ fontSize: '100px', letterSpacing: '8px' }}>
                    Contact Us
                </header>
                <section className='d-flex align-item-center justify-content-center' style={{marginTop:"14vh", marginBottom:'14vh'}}>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-6">
                                <h3 className='text-uppercase text-danger fw-bold'>Our Address</h3>
                                <p className='lead fw-bolder'>Iris Areial Innovation Limited</p>
                                <table className='table table-hover table-borderless '>
                                    <tbody className='p-5 text-dark'>
                                        <tr>
                                            <td className='text-center'>
                                                <a class="btn text-white btn-lg btn-floating" data-mdb-ripple-init style={{ backgroundColor: "#e8ba31" }} href="#!" role="button">
                                                    <i class="fas fa-location-dot"></i>
                                                </a>
                                            </td>
                                            <td>
                                                <p className='fw-bolder text-dark fs-5 m-0'>Visit Us:</p>
                                                <p>Adrees 1</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='text-center'>
                                                <a class="btn text-white btn-lg btn-floating" data-mdb-ripple-init style={{ backgroundColor: "#103ceb" }} href="#!" role="button">
                                                    <i class="fas fa-phone"></i>
                                                </a>
                                            </td>
                                            <td>
                                                <p className='fw-bolder text-dark fs-5 m-0'>Office: </p>
                                                <p>XXXXXXX</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='text-center'>
                                                <a class="btn text-white btn-lg btn-floating" data-mdb-ripple-init style={{ backgroundColor: "#e63030" }} href="#!" role="button">
                                                    <i class="fas fa-at"></i>
                                                </a>
                                            </td>
                                            <td>
                                                <p className='fw-bolder text-dark fs-5 m-0'>Email:</p>
                                                <p>abc@gmail.com</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='col-md-6'>
                                <div className="card" style={{ backgroundColor: 'rgba(132, 131, 131, 0.1)' }}>
                                    <div className="card-body">
                                        <form>
                                            <div data-mdb-input-init class="mb-4">
                                                <input type="text" id="fullname" class="form-control p-2 text-dark fs-5" placeholder='Fullname' />
                                            </div>
                                            <div data-mdb-input-init class="mb-4">
                                                <input type="email" id="email" class="form-control p-2 text-dark fs-5" placeholder='Email' />
                                            </div>
                                            <div data-mdb-input-init class="mb-4">
                                                <input type="text" id="email" class="form-control p-2 text-dark fs-5" placeholder='Phone Number' />
                                            </div>
                                            <div data-mdb-input-init class="mb-4">
                                                <textarea name="Details" class="form-control p-2 text-dark fs-5" id="" cols="30" rows="5" placeholder='Write Your Message about Projects'></textarea>
                                            </div>

                                            <div className="d-grid">
                                                <button className=' btn btn-primary btn-lg'>Submit</button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Contact;