import React, { Component } from 'react';
import axios from 'axios';
import './Home';

class Home extends Component {
    render() {
        return (
            <>
                <section className="hero is-info is-fullheight">
                    <div className="hero-head">
                        <nav className="navbar">
                            <div className="container">
                                <div className="navbar-brand">
                                    <a className="navbar-item" href="../">
                                        <img src="https://cdn.discordapp.com/attachments/913089466917339146/925517362407555092/FF.GG_3.png" alt="Logo" />
                                    </a>
                                    <span className="navbar-burger burger" data-target="navbarMenu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </div>
                                <div id="navbarMenu" className="navbar-menu">
                                    <div className="navbar-end">
                                        <span className="navbar-item">
                                            <a className="button is-white is-outlined" href="#">
                                                <span className="icon">
                                                    <i className="fa fa-home"></i>
                                                </span>
                                                <span>Home</span>
                                            </a>
                                        </span>
                                        <span className="navbar-item">
                                            <a className="button is-white is-outlined" href="#">
                                                <span className="icon">
                                                    <i className="fa fa-superpowers"></i>
                                                </span>
                                                <span>Examples</span>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="column is-6 is-offset-3">
                                <img src='https://cdn.discordapp.com/attachments/913089466917339146/925518866812121158/FF.GG_Logo.png' alt='Logo' />
                                {/* <h1 className="title">
                                    FF.GG
                                </h1> */}
                                <h2 className="subtitle">
                                    Wanna see if your team member is a toxic butt licker?!?
                                </h2>
                                <div className="box">
                                    <div className="field is-grouped">
                                        <p className="control is-expanded">
                                            <input className="input" type="text" placeholder="Enter your email" />
                                        </p>
                                        <p className="control">
                                            <a className="button is-info">
                                                .GG
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <script async type="text/javascript" src="../js/bulma.js"></script>
            </>
        );
    }
}

export default Home;