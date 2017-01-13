import React from "react";
import {browserHistory} from "react-router";

export class User extends React.Component {

    onNavigateHome() {
        browserHistory.push("/")
        // browserHistory.push("/home")
    }

    render() {

        const butStyle = {
            color: '#363fca',
            cursor: 'pointer',
            padding: '10px',
            borderRadius: '4px',
            fontSize: '14px'
            // backgroundImage: 'url(' + imgUrl + ')'
        };

        return (
            <div>
                <h3>The User page!</h3>
                <p>User ID: {this.props.params.id}</p>
                <button style={butStyle} onClick={this.onNavigateHome} >Go to default route</button>
            </div>
        );

    }
}