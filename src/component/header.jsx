import React, { Fragment, useState } from 'react';


function HeaderComponent (){
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar px-5 py-2 color">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand" >Brand</a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarButtonsExample"
                        aria-controls="navbarButtonsExample"
                        aria-expanded={open}
                        aria-label="Toggle navigation"
                        onClick={() => setOpen(!open)}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id="navbarButtonsExample">
                        <ul className="navbar-nav w-100 justify-content-end gap-4">
                            <li className="nav-item">
                                <a href="/about" className="nav-link fs-4 fw-bolder text-dark" aria-current="page">ABOUT</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    data-mdb-toggle="dropdown"
                                    className="nav-link dropdown-toggle fs-4 fw-bolder text-dark"
                                    href="/"
                                    id="navbarDropdownMenuLink1"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    SERVICES
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                                    <li>
                                        <a className="dropdown-item" href="/">Railways and Metro</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">Another action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">Something else here</a>
                                    </li>
                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <a
                                    data-mdb-toggle="dropdown"
                                    className="nav-link dropdown-toggle fs-4 fw-bolder text-dark"
                                    href="/"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    PRODUCTS
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a className="dropdown-item" href="/">Railways and Metro</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">Another action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">Something else here</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a href="/contact-us" className="nav-link fs-4 fw-bolder text-dark ">CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default HeaderComponent;
