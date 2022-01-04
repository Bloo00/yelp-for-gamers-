import React, { Component } from 'react';
import axios from 'axios';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props); 
    }
    render() {
        return (
            <>
                <section className="hero is-info is-fullheight">
                    <div className="hero-head">
                        <nav className="navbar">
                            <div className="container">
                                <div className="navbar-brand">
                                    <a className="navbar-item" href="../">
                                        <img src="https://cdn.discordapp.com/attachments/913089466917339146/925571217061208074/Mini_LOGO.png" alt="Logo" />
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
                                                <span>Other thing i should change</span>
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

                                <form action='/player' method='get'>
                                    <div className="box">
                                        <div className="field is-grouped">
                                            <p className="control is-expanded">
                                                <input className="input" name="username"type="text" placeholder="Put in your ign ..." />
                                            </p>
                                            <p className="control">
                                                <button className="button is-info">
                                                    .GG
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </form>

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