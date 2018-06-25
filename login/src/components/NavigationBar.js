import React, { Component } from 'react';

export class NavigationBar extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Login Demo</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="#login">Login</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavigationBar;
