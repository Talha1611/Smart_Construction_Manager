import React, { useState } from 'react';

const Items = props => (
    <tr>
        <th scope="row">{props.user._id}</th>
        <td>{props.user.username}</td>
        <td>{props.user.email}</td>
        <td>{props.user.name}</td>
        <td><button className="btn btn-danger" onClick={() => { props.deleteUser(props.user._id) }}>Delete</button></td>
    </tr>
);

const Dashboard = () => {

    const [users, setUsers] = useState([
        {
            _id: 1,
            username: 'Mark',
            email: 'Otto',
            name: '@mdo'
        },
        {
            _id: 2,
            username: 'Jacob',
            email: 'Thronton',
            name: '@fat'
        },
        {
            _id: 3,
            username: 'Larry',
            email: 'the Bird',
            name: '@twitter'
        }
    ]);
    
    const deleteUser = () => {
        return "Delete User";
    }

    const getItems = () => {
        return users.map(user => {
            return <Items user={user} deleteUser={deleteUser} key={user._id}/>;
        });
    }

    return (
        <div className="main">
            <div className="dash-header">
                <button>Logout</button>
            </div>
            <div className="header-btn">
                <button onclick="add()">Add Employee</button>
            </div>
            <div id="record" className="record">
                <table className="table">
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
    );
}

export default Dashboard;