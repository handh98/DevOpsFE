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
        console.log("search", search);
        let params = new URLSearchParams(search);
        let jwt = params.get('jwt');
        localStorage.setItem("jwt", jwt);
        this.setState({
            isConnected: params.get('is_connected')
        })
        localStorage.setItem("is_connected", params.get('is_connected'));
        accountService.getAccount().then((res) => {
            console.log(res.data[0].id)
            accountService.getProjects(res.data[0].id).then((res) => {
                console.log(res.data)
            })
        });
        if (jwt) {
            this.props.history.push('/home');
            window.location.reload();
        }
    }

    render() {
        return (
            <div>
                <Home isConnectedParam = {this.state.isConnected}/>
            </div>
        );
    }
}

export default AuthorizationFilter;