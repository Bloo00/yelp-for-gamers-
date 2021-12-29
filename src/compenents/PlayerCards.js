import React, { Component } from "react";

class PlayerCards extends Component {
    render() {
        return (
            <div className="column is-9">
                <div className="content is-medium">
                    <h3 className="title is-3">thingy mabober to change</h3>
                    <div className="box">
                        <h4 id="const" className="title is-3">Game type</h4>
                        <article className="message is-primary">
                            <span className="icon has-text-primary">
                                <i className="fab fa-js"></i>
                            </span>
                            <div className="message-body">
                                Should have a card with game type character icon
                                <br />
                                kda
                                <br />
                                team and enemy team
                            </div>
                        </article>
                        <pre><code className="language-javascript">Dont know i want to keep em</code></pre>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayerCards;
