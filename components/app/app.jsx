import React, { Component } from 'react';
import {AppHeader, appHeaderCss} from '../app-header/app-header';
import DataProvider from '../../data/data';
import { Footer, footerCss } from '../footer/footer';
import { LeftMenu, leftMenuCss } from '../left-menu/left-menu';

let App = React.createClass({
    dataProvider: new DataProvider(),
    getInitialState: function() {
        return {
            mainMenuItems: this.dataProvider.getMainMenuItems()
        }
    },
    render: function() {
        return (
            <div className="container-fluid">
                <div className="row" >
                    <AppHeader menuItems = {this.state.mainMenuItems} onMenuItemSelected = {this._onMenuItemSelected}></AppHeader>
                </div>
                <div className="row">
                    <LeftMenu></LeftMenu>
                </div>
                <div className="row">
                    <Footer></Footer>
                </div>
            </div>
        );
    },

    _onMenuItemSelected: function(itemIndex) {
        //handle selections
    }
});

export default App;