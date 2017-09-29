import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {

    componentDidMount() {
        $(".brand-logo").sideNav();
    }
    
    render() {

        const sideNav = (
            <div>
            <ul id="slide-out" className="side-nav">
                <li><div className="user-view">
                    <div className="background">
                        <img src="images/office.jpg" />
                    </div>
                        <a href="#!user"><img className="circle" src="images/yuna.jpg"/></a>
                            <a href="#!name"><span className="white-text name">John Doe</span></a>
                            <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div>
                </li>
                    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Subheader</a></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
            </ul>
            <a href="#" data-activates="slide-out" className="brand-logo"><i className="material-icons">portrait</i></a>
            </div>);

        return (
            <div>
                {sideNav}
            </div>
        );
    }
}

Profile.propTypes = {

};

export default Profile;