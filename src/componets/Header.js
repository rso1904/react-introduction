import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Profile from './Profile';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        const head = (<nav>
            <div className="nav-wrapper">
              <ul className="left hide-on-med-and-down">
                <li><Profile /></li>
                <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
              </ul>
              <ul className="right hide-on-med-and-down">
                <li><a href="sass.html"><i className="material-icons">search</i></a></li>
                <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
                <li>
                    <Link to="/login">
                        <i className="material-icons">lock_open</i>
                    </Link>        
                </li>
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