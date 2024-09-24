import axios from 'axios';
import React, { useState } from 'react';


const AddMeetings = () => {

    const [addMeeting, setAddMeeting] = useState({
        "projectMeetingId": 0,
        "projectId": 0,
        "meetingLeadByEmpId": 0,
        "meetingDate": "2024-09-24T14:43:29.592Z",
        "startTime": "string",
        "endTime": "string",
        "meetingMedium": "string",
        "isRecordingAvailable": true,
        "recordingUrl": "string",
        "meetingNotes": "string",
        "clientPersonNames": "string",
        "meetingTitle": "string",
        "meetingStatus": "string"
    })

    const readForm = (event, key) => {
        setAddMeeting(prevData => ({ ...prevData, [key]: event.target.value }));
    };

    const addNewMeeting = async () => {
        try {
            const result = await axios.post("https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdateProjectMeeting", addMeeting);
            if (result.data.result) {
                alert("New Meeting Created successfully.");
                  // Navigate back to the GetAllMeetings page after successful submission
                  //navigate('/GetAllMeetings');
            } else {
                alert(result.data.message);
            }
        } catch (error) {
            console.error('Error adding payment:', error);
            alert('Error Create Meeting Again. Please try again.');
        }
    }

    return (
        <div>
          <div className="container">
            <div className="row">
                <div className="col-12 pt-3">
                    <div className="card">
                        <div className="card-header bg-warning fw-bold">Create New Meeting</div>
                        <div className="card-body">
                            <form className="d-flex flex-wrap align-items-end" onSubmit={(e) => e.preventDefault()}>
                                <div className="row gx-3 gy-2">
                                    <div className="mb-3 col-sm-3">
                                        <label className="form-label">Project Meeting Id</label>
                                        <input
                                            type="number"
                                            onChange={(event) => readForm(event, 'projectMeetingId')}
                                            value={addMeeting.projectMeetingId}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3 col-sm-3">
                                        <label className="form-label">Project Id</label>
                                        <input
                                            type="number"
                                            onChange={(event) => readForm(event, 'projectId')}
                                            value={addMeeting.projectId}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3 col-sm-3">
                                        <label className="form-label">Meeting Date</label>
                                        <input
                                            type="datetime-local"
                                            onChange={(event) => readForm(event, 'meetingDate')}
                                            value={addMeeting.meetingDate.slice(0, 16)}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3 col-sm-3">
                                        <label className="form-label">Start Time</label>
                                        <input
                                            type="time"
                                            onChange={(event) => readForm(event, 'startTime')}
                                            value={addMeeting.startTime}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3 col-sm-3">
                                        <label className="form-label">End Time</label>
                                        <input
                                            type="time"
                                            onChange={(event) => readForm(event, 'endTime')}
                                            value={addMeeting.endTime}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3 col-sm-3">
                                        <label className="form-label">Meeting Medium</label>
                                        <input
                                            type="text"
                                            onChange={(event) => readForm(event, 'meetingMedium')}
                                            value={addMeeting.meetingMedium}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3 col-sm-3">
                                        <label className="form-label">Is Recording Available?</label>
                                        <input
                                            type="checkbox"
                                            onChange={(event) => readForm(event, 'isRecordingAvailable')}
                                            checked={addMeeting.isRecordingAvailable}
                                            className="form-check-input"
                                        />
                                    </div>
                                    <div className="mb-3 col-sm-3">
                                        <label className="form-label">Recording URL</label>
                                        <input
                                            type="text"
                                            onChange={(event) => readForm(event, 'recordingUrl')}
                                            value={addMeeting.recordingUrl}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3 col-sm-3">
                                        <label className="form-label">Meeting Notes</label>
                                        <input
                                            type="text"
                                            onChange={(event) => readForm(event, 'meetingNotes')}
                                            value={addMeeting.meetingNotes}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3 col-sm-3">
                                        <label className="form-label">Client Person Names</label>
                                        <input
                                            type="text"
                                            onChange={(event) => readForm(event, 'clientPersonNames')}
                                            value={addMeeting.clientPersonNames}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3 col-sm-3">
                                        <label className="form-label">Meeting Title</label>
                                        <input
                                            type="text"
                                            onChange={(event) => readForm(event, 'meetingTitle')}
                                            value={addMeeting.meetingTitle}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3 col-sm-3">
                                        <label className="form-label">Meeting Status</label>
                                        <input
                                            type="text"
                                            onChange={(event) => readForm(event, 'meetingStatus')}
                                            value={addMeeting.meetingStatus}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3 col-sm-3">
                                        <button type="button" className="btn btn-primary" onClick={addNewMeeting}>
                                            Add New Meeting
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
};

export default AddMeetings;