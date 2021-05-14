import axios from 'axios';
import React, { useState } from 'react';

const Items = props => (
    <tr>
        <th scope="row">{props.index}</th>
        <td scope="row">{props.user.username}</td>
        <td scope="row">{props.user.email}</td>
        <td scope="row">{props.user.name}</td>
        <td scope="row"><button className="btn btn-danger" onClick={() => { props.deleteUser(props.user._id) }}>Delete</button></td>
    </tr>
);

const Admin = () => {

    const [users, setUsers] = useState([]);
    const [isAdding, setAdding] = useState(false);
    const [email, setEmail] = useState('');

    const deleteUser = (id) => {
        console.log("Delete User: "+ id);
    }

    const getItems = () => {
        return users.length ===0 ?
            <tr>
                <td colspan="5"><p className="norecord">No Record</p></td>
            </tr>
        :
            users.map((user, index) => {
                return <Items user={user} deleteUser={deleteUser} key={index} index={index+1}/>;
            });
    }

    const add_employee = () => {
        console.log("Adding...")
        setAdding(true);
    }

    const cancel = () => {
        setAdding(false);
    }

    const enterEmail = event => {
        setEmail(event.target.value);
    }

    const add = () => {
        // Send a POST request
        axios({
            method: 'post',
            url: global.config.URI_BE + '/user/create',
            data: {
                email: {
                    address: email,
                    privacy: 'private'
                },
                userType: 'employee'
            }
        })
        .then(() => {
            console.log("User Added");
        })
        .catch( err => {
            console.log("User Not Added: " + err);
        })

    }

    return (
        <>
            <div className="main">
                <div className="container flex-column">
                    <div className="dash-header">
                        <button className="btn btn-primary">Account</button>
                        <button className="btn btn-danger">Logout</button>
                    </div>
                    <div className="header-btn">
                        <button onClick={add_employee} className="btn btn-primary">Add Employee</button>
                    </div>
                    <div id="record" className="record table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getItems()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {isAdding ? 
                <div id="add_employee" className="add_employee">
                    <div className="add_employee_form">
                        <h1>Add employee</h1>
                        <form>
                            <div className="form-item">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="text" placeholder="Enter Email" onChange={enterEmail}/>
                            </div>
                            <div className="form-button">
                                <button className="form-cancel" onClick={cancel}>Cancel</button>
                                <button className="form-submit" onClick={add}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                :
                <div></div>
            }
        </>
    );
}

export default Admin;