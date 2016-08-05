import React, { Component } from 'react';
import footerCss from './footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <span className = "copyright">Copyright 2016 | All Rights Reserved | Technology Partner Sapient
                </span>
            </div>
        );
    }
}

export { Footer, footerCss };

