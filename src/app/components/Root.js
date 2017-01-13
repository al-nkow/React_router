import React from "react";

import { Header } from "./Header.js";

export class Root extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {/* - здесь выведется Home component - так как он children - см. index.js - Home внутри Route */}
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}