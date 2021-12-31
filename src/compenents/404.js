import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./404.css";

class E404 extends Component {
    render() {
        return (
            <>
                <section class="hero is-fullheight is-default is-bold">
                    <div class="hero-head">
                        <nav class="navbar">
                            <div class="container">
                                <div class="navbar-brand">
                                    <a class="navbar-item" href="../">
                                        <img src="../images/bulma.png" alt="Logo"/>
                                    </a>
                                    <span class="navbar-burger burger" data-target="navbarMenu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </div>
                                <div id="navbarMenu" class="navbar-menu">
                                    <div class="navbar-end">
                                        <div class="tabs is-right">
                                            <ul>
                                                <li class="is-active"><a href="/">Home</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="hero-body">
                        <div class="container has-text-centered">
                            <div class="columns is-vcentered">
                                <div class="column is-5">
                                    <figure class="image is-4by3">
                                        <img src="https://picsum.photos/800/600/?random" alt="Description" />
                                    </figure>
                                </div>
                                <div class="column is-6 is-offset-1">
                                    <h1 class="title is-2">
                                        Error 404
                                    </h1>
                                    <h2 class="subtitle is-4">
                                        What did you do :c
                                    </h2>
                                    <br />
                                        
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="hero-foot">
                        <div class="container">
                            <div class="tabs is-centered">
                              
                            </div>
                        </div>
                    </div>
                </section>
                <script src="../js/bulma.js"></script>
            </>

        )
    }
}

export default E404;