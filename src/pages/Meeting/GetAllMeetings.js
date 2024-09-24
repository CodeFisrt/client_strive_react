import React, { useEffect, useState } from 'react';
import { allMeettingData } from '../../services/Meeting/AllMeeting';
import { useNavigate } from 'react-router-dom';

const GetAllMeetings = () => {
    const [meeting, setMeeting] = useState([]);

    useEffect(() => {
        getAllMeetings();
    }, []);

    const getAllMeetings = async () => {
        try {
            allMeettingData().then((result) => {
                setMeeting(result);
            }) // Await the response to ensure data fetching is complete.
            // Check if `result` is in the expected format (array of payment objects).
        } catch (error) {
            console.error('Error fetching payments:', error); // Log any errors that occur during data fetching.
        }
    };
    
    const history = useNavigate()

   
    
    
    const onNavigateAddMeeting = () => {
        history('/AddMeetings'); // Navigate to AddMeetings page
    };


    
    

    return (
        <div>
               <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header bg-primary">
                            <h1> Get Employee Metting Details</h1>
                        </div>
                         <div>
                            <button className='btn btn-success' onClick={getAllMeetings}>Meetings</button>
                            <button className='btn btn-warning' onClick={onNavigateAddMeeting}>Add New Meetings</button>
                        </div> 
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Sr.No</th>
                                        <th>meetingDate</th>
                                        <th>meetingTitle</th>
                                        <th>meetingMedium</th>
                                        <th>projectMeetingId</th>
                                        <th>startTime</th>
                                        <th>endTime</th>
                                        <th>projectName</th>
                                        <th>companyName</th>
                                        <th>clientId</th>
                                        <th>clientPersonNames</th>
                                        <th>leadByEmployeName</th>
                                        <th>meetingStatus</th>
                                        <th>Action</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {meeting.length > 0 ? (
                                        meeting.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.meetingDate}</td>
                                                <td>{item.meetingTitle}</td>
                                                <td>{item.meetingMedium}</td>
                                                <td>{item.projectMeetingId}</td>
                                                <td>{item.startTime}</td>
                                                <td>{item.endTime}</td>
                                                <td>{item.projectName}</td>
                                                <td>{item.companyName}</td>
                                                <td>{item.clientId}</td>
                                                <td>{item.clientPersonNames}</td>
                                                <td>{item.leadByEmployeName}</td>
                                                <td>{item.meetingStatus}</td>

                                                <td>
                                                    <button className='btn btn-primary'>Edit</button>
                                                    <button className='btn btn-danger' >Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="8" className="text-center">
                                                No data available
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GetAllMeetings;