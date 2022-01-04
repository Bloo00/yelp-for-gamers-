import React, { Component } from 'react';
import axios from 'axios';
import './Player.css';
import { Redirect } from 'react-router-dom';

import PlayerCard from "./PlayerCards";

let comments = [];
let username = String;
let rating = Number;



class Player extends Component {
    constructor(props) {
        super(props);
        console.log(this.props," hihihihihi");
        const urlParams = new URLSearchParams(window.location.search);
        this.state = {
            data: [],
            username: urlParams.get("username")
        };
    }
    componentDidMount() {
        console.log("im running");
        axios.get('http://localhost:3000/playercard?username=' + this.state.username)
            .then((response) => {
                console.log(response.data , "anything");
                
            })
            .catch((err) => {
                console.log("error getting api", err);
                window.location.href="/404";
            })
    }
    displayPlayerCards() {
        const display = this.state.data.map((a, idx) => {
            return <PlayerCard
            key={idx}
            comments={a.comments}
            rating={a.rating}
            />
        })
        return display;
    }
    displayUserName() {
        const display = this.state.data.map((a, idx) => {
            return <PlayerCard
            key={idx}
            username={a.username}
            />
        })
    }

    render() {
        return (
            <>
                <section class="hero is-primary">
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
                                                <a href='/'>
                                                    <span>Home</span>
                                                </a>
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
                                        <form>
                                            <div className="navbar-item">
                                                <div className="control has-icons-left has-icons-right">
                                                    <input className="input is-success" type="text" placeholder="Summoner ..." />
                                                    <span className="icon is-small is-left">
                                                        <i className="fas fa-user"></i>
                                                    </span>
                                                    <span className="icon is-small is-right">
                                                        <i className="fas">.GG</i>
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="hero-body">

                        <div class="columns">
                            <div class="column is-12">
                                <div class="container content">
                                    {/*  have user profile icon here */}
                                    <i class="is-large fab fa-discord"></i>
                                    {/* should be username */}
                                    {/* {this.displayUserName()} */}
                                    {/* should be rating */}
                                    <h3 class="subtitle">
                                        
                                    </h3>
                                    <a href="https://github.com/BulmaTemplates/bulma-templates" target="_blank" class="button is-primary is-large">
                                        <span>Update</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section">
                    <div class="container">
                        <div class="columns">
                            <div class="column is-3">
                                <aside class="is-medium menu">
                                    <p class="menu-label">
                                    Game Type
                                    </p>
                                    <ul class="menu-list">
                                        <li class="is-right"><a href="#const" class="is-active"><i ></i> Norms</a></li>
                                        <li><a href="#let" class="is-active"><i ></i> Ranked</a></li>
                                        <li><a href="#const" class="is-active"><i ></i> Flex</a></li>
                                    </ul>
                                    <p class="menu-label">
                                        i dunno what i want this to be
                                    </p>
                                    <ul class="menu-list">
                                        <li><span class="tag is-white is-medium">Lorem</span></li>
                                        <li><span class="tag is-white is-medium">Ipsum</span></li>
                                        <li><span class="tag is-white is-medium">Dolor</span></li>

                                    </ul>
                                </aside>
                            </div>
                            <div class="column is-9">
                                {this.displayPlayerCards()}
                                
                            </div>
                        </div>
                    </div>
                </section>
                <footer class="footer">

                </footer>
                <script src='https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.js'></script>
                <script src='https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.9.1/js/OverlayScrollbars.min.js'></script>
            </>
        );
    }
}

export default Player;