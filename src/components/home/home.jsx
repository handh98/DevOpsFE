import React, { Component } from 'react'
import loginService from '../../service/author_serivce/loginService'
import Form from 'react-validation/build/form'
import './sidebar/sidebarHome';
import employeeService from '../../service/employee_service/employeeService';
import ThirdPartiesService from '../../service/third_parties_service/thirdPartiesService'
import githubRepoService from '../../service/githubrepository_service/githubRepoService';
import accountService from '../../service/account_service/accountService';
import Sidebar from '../home/sidebar/sidebar';


export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            employee: {},
            gitHubLoginURI: "",
            successMessage: "",
            errMessage: "",
            isConnected: ''
        }

    }

    componentDidMount() {
        accountService.getAccount().then((res) => {
            localStorage.setItem("account_id", res.data[0].id);
        });
    }


    componentWillUnmount() {

    }

    // Prototype methods, Bind in Constructor (ES2015)

    // Class Properties (Stage 3 Proposal)
    logout = (event) => {
        event.preventDefault();
        loginService.logout().then(() => {
            localStorage.removeItem('user');
            this.props.history.push('/');
            window.location.reload();
        }, (error) => {
            console.log(error.response.statusText);
            alert(error.response.statusText)
        });
    }

    render() {
        const username = this.state.employee.name
        return (
            <div>

                <h1> Hello {username}</h1>
                <hr />
                {localStorage.getItem('is_connected') === 'False' ?
                    (<a href="/?submit=connect">Connect to Nococid account </a>) :
                    ('')
                }
                {/* {this.state.successMessage.length > 0 ? (
                    <h1>{this.state.successMessage}</h1>
                ) : (
                        <a href={this.state.gitHubLoginURI}>Connect with Github</a>
                    )} */}
                <Form onSubmit={this.logout}>
                    <button type="submit">Logout</button>
                </Form>
                <p>{this.state.errMessage}</p>
                <Sidebar />
            </div>

        )
    }
}
