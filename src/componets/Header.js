import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Profile from './Profile';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        const head = (<nav>
            <div className="nav-wrapper">
              <Profile />
              <ul className="right hide-on-med-and-down">
                <li><a href="sass.html"><i className="material-icons">search</i></a></li>
                <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
                <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
                <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
              </ul>
            </div>
          </nav>);

        return (
            <div>
                {head}                
            </div>
        );
    }
}

Header.propTypes = {

};

export default Header;