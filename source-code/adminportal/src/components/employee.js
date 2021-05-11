import axios from 'axios';
import React, { useState } from 'react';

const Items = props => (
    <tr>
        <th scope="row">{props.index}</th>
        <td>{props.request.title}</td>
        <td>{props.request.sender}</td>
        <td>{props.request.address}</td>
        <td><button className="btn btn-success" onClick={() => { props.viewReq(props.request) }}>View</button></td>
    </tr>
);

const Employee = () => {

    const [requests, setRequests] = useState([]);

    const [viewing, setViewing] = useState(false);

    const getItems = () => {
        return requests.length === 0 ? <p className="norecord">No Record</p>:
        requests.map((request, index) => {
            return <Items request={request} viewReq={viewReq} key={index} index={index+1}/>;
        });
    }

    const viewReq = request => {
        setViewing(request);
    }

    const cancel = () => {
        setViewing(false);
    }

    return (
        <>
            <div className="main">
                <div className="container flex-column">
                    <div className="dash-header">
                        <button className="btn btn-primary">Account</button>
                        <button className="btn btn-danger">Logout</button>
                    </div>
                    <div id="record" className="record table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Sender</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">View</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {getItems()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {viewing ? 
                <div id="view_request" className="view_request">
                    <div className="cross" onClick={cancel}>
                        <span className="btn btn-danger m-2">x</span>
                    </div>
                    <div className="request">
                        <h1>{viewing.title}</h1>
                        <h1>{viewing.sender}</h1>
                        <h1>{viewing.address}</h1>
                    </div>
                </div>
            :
                <div></div>}
        </>
    );
}

export default Employee;