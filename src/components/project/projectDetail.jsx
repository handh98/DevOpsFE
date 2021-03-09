import React from 'react'
import loginService from '../../service/author_serivce/loginService';
import employeeService from '../../service/employee_service/employeeService';
import projectService from '../../service/project_service/projectService';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import CreateSprintModal from './sprint/create-sprint-modal';
import sprintService from '../../service/project_service/sprint_service/sprintService';
import './sprint/sprint.css'
import moment from 'moment';
import accountService from '../../service/account_service/accountService';

class ProjectDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employee: [],
            user: {},
            projectId: '',
            // this.props.match.params.projectId,
            project: {},
            isOpenModal: false,
            sprints: [],
            projectType: {},

        }
    }

    componentDidMount() {
        let search = window.location.search;
        let params = new URLSearchParams(search);

        let projectId = params.get('projectId');
        let account_id = localStorage.getItem('account_id');

        projectService.getProjectById(projectId, account_id).then((res) => {

            this.setState({
                project: res.data,
                projectType: res.data.projectType,
                employee: res.data.accounts
            })
            sprintService.getAllSprint(projectId, account_id).then((response) => {
                console.log(response.data);
                this.setState({
                    sprints: response.data
                })
            })
        });


    }


    componentWillUnmount() {

    }
    openCreateSprintModal = () => {
        this.setState({
            isOpenModal: true
        })
    }
    handleCancel = () => {
        this.setState({
            isOpenModal: false
        })
    };



    render() {
        const project = this.state.project;
        return (

            <>

                <div className='container'>

                    <div className='row px-5'>
                        <h1>{project.name}</h1>
                    </div>

                    <div className="row">
                        <table className="table">
                            <tr>
                                <th>Create date: </th>
                                <th>Start date: </th>
                                <th>End date: </th>
                                <th>Project type: </th>

                            </tr>
                            <tr>
                                <td>{moment(project.createdDate).format("DD-MM-YYYY")}</td>
                                <td>{moment(project.startDate).format("DD-MM-YYYY")}</td>
                                <td>{moment(project.endDate).format("DD-MM-YYYY")}</td>
                                <td>{this.state.projectType.name}</td>

                            </tr>

                        </table>
                    </div>




                    <div className="row">
                        <div className="col-8">
                            <h1>Sprint</h1>
                            <div className='content center'>
                                <Button
                                    type="dashed"
                                    shape="round"
                                    onClick={this.openCreateSprintModal}
                                    icon={<PlusCircleOutlined />}>
                                    Sprint
                                 </Button>
                            </div>


                            {this.state.sprints.map(sprint => (
                                <div key={sprint.id} className='row justify-content-md-center'>
                                    <div className='col-9 sprint'>
                                        <span className='float-left'> {sprint.name}</span>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className="col-4">
                            <table className="table">
                                <tr>
                                    <th colSpan="2">Employee</th>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <th>Roles</th>
                                </tr>
                                {this.state.employee.map(emp => {
                                    return (
                                        <tr>
                                            <td> {emp.name} </td>
                                            <td>{emp.roles.map(role => {
                                                return role.name + ' '
                                            })}</td>
                                        </tr>)
                                }
                                )}
                            </table>
                        </div>
                    </div>

                    <CreateSprintModal
                        isOpenModal={this.state.isOpenModal}
                        onHide={this.handleCancel}
                        projectId={this.state.projectId} />
                </div>


            </>
        )
    }
}

export default ProjectDetail;