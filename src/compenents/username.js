import React, { Component } from 'react';

class UserName extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
            <i class="title">{this.props.username}</i>
            </>
        )
    }
}
export default UserName;