import React, { Component } from 'react';

class Rateing extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <h3 class="subtitle">{this.props.comment}</h3>
            </>
        )
    }
}
export default Rateing;