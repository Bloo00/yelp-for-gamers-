import React, { Component } from "react";

import Comment from "./Comments";
import Rateing from "./Rateing";


class PlayerCards extends Component {
    constructor(props) {
        super(props);
    }
    displayComments() {
        const display = this.state.comments.map((c, idx) => {
            return <Comment key={idx} comments={c.comments} />
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


    displayRateings() {
        const display = this.state.rating.map((c, idx) => {
            return <Rateing key={idx} message={c.rating}/>
        })
        return display;
    }

    handleRateings() {

        this.setState({
            rating: this.state.rating + 1,
        });
    }

    render() {
        return (
                <div className="content is-medium">
                    <h3 className="title is-3">hihi i think this is </h3>
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
        );
    }
}

export default PlayerCards;
