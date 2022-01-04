import React,{ Component } from "react";

class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <pre><code class="language-javascript">{this.props.comment}</code></pre>
        )
    }
}

export default Comment;