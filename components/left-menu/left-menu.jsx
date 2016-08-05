import React, { Component } from 'react';
import leftMenuCss from './left-menu.scss';

class LeftMenu extends Component {
    render() {
        return (
            <nav className="left-nav col-md-2">
                <div className="row">
                    <div
                        className="col-md-12 app-header__logo-base">
                            <img className="app-header__logo" src="../../styles/images/logo.png"></img>
                    </div>
                </div>
                <div className="row">
                    <ul className="col-md-12 left-nav__menu--primary">
                        <li className="">Broad Indexes</li>
                        <li className="">All Hedge Indexes</li>
                        <li className="">Liquid Alternative Beta</li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export { LeftMenu, leftMenuCss };