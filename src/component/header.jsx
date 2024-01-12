import React, { Fragment, useState } from 'react';
import '../css/header.css'

function HeaderComponent() {
    const [isActive, setisActive] = useState(false)
    return (
        <Fragment>
            <header className='header'>
                <div class="tabs is-right">
                    <ul>
                        <li><a href='#!'><i class="fa-regular fa-user ml-2 mr-2"></i>login</a></li>
                        <li><a href='#!'>Find a Distributor</a></li>
                        <li><a href='#!'>Support</a></li>
                    </ul>
                </div>
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/">
                            <img src={process.env.PUBLIC_URL + 'fevicon.png'} width="80" height="35" />
                        </a>
                        <li className="brand-name">
                            <h1>IRIS AERIAL</h1>
                            <h4>INNOVATION</h4>
                        </li>

                        <a role="button" class="navbar-burger" onClick={() => {
                            setisActive(!isActive)
                        }}
                            aria-label="menu" aria-expanded="false"
                            data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                            <div className="navbar-start">
                                <div class="navbar-item has-dropdown is-hoverable">
                                    <a class="navbar-link is-arrowless">
                                        Drone
                                    </a>
                                    <div class="navbar-dropdown">
                                       <div className="columns">
                                         <div className="column  p-4">
                                            <h1>IRIS DRONE</h1>
                                            <img width={89} height={400}
                                                src={process.env.PUBLIC_URL+'drone.png'} alt="" />
                                            <li>This is High Percion drone for large survey</li>
                                         </div>
                                         <div className="column">
                                            <h1>Products</h1>
                                            <li><a href="#!">Drone</a></li>
                                            <li><a href="#!">Camera</a></li>
                                            <li><a href="#!">Features</a></li>
                                            <li><a href="#!">Extended Services</a></li>
                                            <li><a href="#!">Post-processing Software</a></li>
                                         </div>
                                       </div>
                                    </div>
                                </div>
                                <div class="navbar-item has-dropdown is-hoverable">
                                    <a class="navbar-link is-arrowless">
                                        Solutions
                                    </a>
                                    <div class="navbar-dropdown">
                                        <a class="navbar-item">
                                            Overview
                                        </a>
                                        <a class="navbar-item">
                                            Elements
                                        </a>
                                        <a class="navbar-item">
                                            Components
                                        </a>
                                        <hr class="navbar-divider" />
                                        <div class="navbar-item">
                                            Version 0.9.4
                                        </div>
                                    </div>
                                </div>
                                <div class="navbar-item has-dropdown is-hoverable">
                                    <a class="navbar-link is-arrowless">
                                        Learn
                                    </a>
                                    <div class="navbar-dropdown">
                                        <a class="navbar-item">
                                            Overview
                                        </a>
                                        <a class="navbar-item">
                                            Elements
                                        </a>
                                        <a class="navbar-item">
                                            Components
                                        </a>
                                        <hr class="navbar-divider" />
                                        <div class="navbar-item">
                                            Version 0.9.4
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="navbar-end ">
                                <div className="buttons">
                                    <button className="button is-info is-light is-medium mr-5">Watch Demo</button>
                                    <button className="button is-dark is-medium">Talk to sales</button>
                                </div>
                            </div>
                    </div>
                </nav>
            </header>
        </Fragment>
    );
}

export default HeaderComponent;
