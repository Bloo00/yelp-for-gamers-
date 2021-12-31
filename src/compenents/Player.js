import React, { Component } from 'react';
import axios from 'axios';
import './Player.css';

import PlayerCard from "./PlayerCards";



class Player extends Component {
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
                                    <i class="title">Change to user name</i>
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
                                    Should be a for current season ranked or flex ranked
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
                                <div class="content is-medium">
                                    <h3 class="title is-3">thingy mabober to change</h3>
                                    <div class="box">
                                        <h4 id="const" class="title is-3">Game type</h4>
                                        <article class="message is-primary">
                                            <span class="icon has-text-primary">
                                                <i class="fab fa-js"></i>
                                            </span>
                                            <div class="message-body">
                                                Should have a card with game type character icon 
                                                <br/> 
                                                kda
                                                <br/>
                                                team and enemy team
                                            </div>
                                        </article>
                                        <pre><code class="language-javascript">Dont know i want to keep em</code></pre>
                                    </div>
                                    <div class="box">
                                        <h4 id="let" class="title is-3">let</h4>
                                        <article class="message is-primary">
                                            <span class="icon has-text-primary">
                                                <i class="fas fa-info-circle"></i>
                                            </span>
                                            <div class="message-body">
                                                Block-scoped. Can be re-assigned.
                                            </div>
                                        </article>
                                        <pre><code class="language-javascript">let i = 0;</code></pre>
                                    </div>
                                    <h3 class="title is-3">More to Come...</h3>
                                    <div class="box">
                                        <h4 id="lorem" class="title is-4">More to come...</h4>
                                        <article class="message is-primary">
                                            <span class="icon has-text-primary">
                                                <i class="fas fa-info-circle"></i>
                                            </span>
                                            <div class="message-body">
                                                Lorem ipsum dolor sit amet, mea ne viderer veritus menandri, id scaevola gloriatur instructior sit.
                                            </div>
                                        </article>
                                        <pre><code class="language-javascript">let i = 0;</code></pre>
                                    </div>
                                </div>
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