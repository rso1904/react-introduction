import React, { Component } from 'react';
import { Authentication } from '../componets';
import { connect } from 'react-redux';
import { loginRequest } from '../actions/authentication';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(id, pw) {

    }

    render() {
        return (
            <div>
                <Authentication mode={true}
                    onLogin={this.handleLogin} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.login.status,
        token: state.authentication.login.token
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: (id, pw) => {
            return dispatch(loginRequest(id, pw));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);