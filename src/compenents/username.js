import React, { Component } from 'react';

class UserName extends Component {
    constructor(props) {
        super(props);
        this.state.username = props.username;
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