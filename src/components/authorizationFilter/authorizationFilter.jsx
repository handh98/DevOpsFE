import React, { Component } from 'react';
import accountService from '../../service/account_service/accountService';
import Home from '../home/home'
class AuthorizationFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isConnected: ''
        };
    }

    componentDidMount() {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let jwt = params.get('jwt');
        localStorage.setItem('jwt', jwt);
        this.setState({
            isConnected: params.get('is_connected')
        })
        localStorage.setItem("is_connected", params.get('is_connected'));
        if (jwt) {
            this.props.history.push('/home');
            window.location.reload();
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default AuthorizationFilter;