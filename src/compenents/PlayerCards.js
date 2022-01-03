import React, { Component } from "react";

import Comment from "./comments";
import UserName from "./username";

const data = [];

class PlayerCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    displayComments() {
        const display = this.state.comments.map((c, idx) => {
            return <Comment key={idx} comments={c.comments} username={c.username} />
        })
        return display;
    }

    handleComment = (e) => {
        e.preventDefault();
        let messageValue = e.target.value;
        console.log("message", messageValue);

        this.setState({
            comment: messageValue,
        });
        console.log("state", this.state.comment);
    };


    // displayRateings() {
    //     const display = this.state.rating.map((c, idx) => {
    //         return <Comment key={idx} message={c.rating} username={c.username} />
    //     })
    //     return display;
    // }

    // handleRateings() {
    //     this.setState({
    //         rating: this.state.rating + 1,
    //     });
    // }

    displayUsername() {
        const display = this.state.username.map((c, idx) => {
            return <Comment key={idx} message={c.username} username={c.username} />
        })
        return display;
    }

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
