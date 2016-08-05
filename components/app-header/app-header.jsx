import React, { Component } from 'react';
import appHeaderCss from './app-header.scss';

class AppHeader extends Component {
    render() {
        return (
            <header className="app-header">
                <div className="col-md-offset-2 col-md-10 app-header__menu hidden-sm hidden-xs">
                    <div className="row">
                        <nav className="col-md-12 app-header__menu--top">
                            <ul>
                                <li>
                                    <i className="glyphicon glyphicon-user"></i>
                                    My Profile
                                </li>
                                <li>
                                    <i className="glyphicon glyphicon-envelope"></i>
                                    Contact us
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="row">
                        <nav className="col-md-12 app-header__menu--main">
                            <ul>
                                <li>Home</li>
                                <li>About us</li>
                                <li>Documents</li>
                                <li>Download Data</li>
                                <li>Education</li>
                                <li>News</li>
                                <li>Join The Index</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }

    // _renderMenuItems(menuItems) {
    //     return menuItems.map((menuItem, itemIndex) => {
    //         return <MenuItem
    //                     onMenuItemSelected = {this.props.onMenuItemSelected}
    //                     itemValue = {menuItem.value}
    //                     key = {menuItem.key}
    //                     itemIndex = {itemIndex}
    //                     className= {'app_header__menuItem--'+itemIndex}>
    //                 </MenuItem>
    //     });
    // }

    // _onMenuItemSelected() {
    //     this.props.onMenuItemSelected(0);
    // }
}

export { AppHeader, appHeaderCss };