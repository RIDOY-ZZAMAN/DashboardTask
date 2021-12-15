import React from 'react';
import './RigntColumn.css'
import download from '../../../images/RCImage/download.png';
import book from '../../../images/RCImage/book.png';
import arrow from '../../../images/RCImage/arrow.png';
import tick from '../../../images/RCImage/tick (1).png';
import error from '../../../images/RCImage/error.png';

import PiChart from './PiChart/PiChart';

const RightColumn = () => {
    return (
        <div className='container'>
            <h3>Performance</h3>
            <div className='greetingsAndDownload d-flex'>
                <div className='greetings'>
                    <h5 className='ms-3 pt-2'>Hello Jane !</h5>
                    <p className='ms-3'>It's good to see you again </p>
                </div>

                <div className='download ms-3 text-start d-flex'>
                    <div>
                        <h6 className='text-white  ms-3 mt-2'>Download Reports</h6>
                        <span className='text-primary  ms-3'>Last week</span> <i className="fas fa-angle-down text-primary"></i>
                    </div>
                    <div className='downloadIcon'>

                        <img src={download} style={{ marginLeft: "9px" }} alt="" />
                    </div>
                </div>
            </div>
            <div className='text-end my-3'>
                <span >Show:</span> <span className='text-primary me-2'>Employee</span><i className="fas fa-angle-down text-primary"></i>
            </div>
            <div className=" overflow-hidden">
                <div className="row gy-4 gx-5">
                    <div className="col-4">
                        <div className="p-3 commonHeightWidth1 text-start">
                            <h6>Course</h6>
                            <p className='text-success'>Total Course Assigned</p>
                            {/* <PiChart></PiChart> */}

                            <div className='row'>

                                <div className="col-4">

                                </div>

                                <div className="col-8">
                                    <div className='d-flex'>
                                        <img src={tick} alt="" /> <span className='ms-3'>Course completed</span>

                                    </div>
                                    <div className='d-flex my-3'>
                                        <img src={arrow} alt="" /> <span className='ms-3'>Ongoing course</span>

                                    </div>
                                    <div className='d-flex my-3'>
                                        <img src={error} alt="" /> <span className='ms-3'>Not started</span>

                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className="col-8">
                        <div className="p-3 commonHeightWidth2 text-start">
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h6>Your statics</h6>
                                    <h6 className='my-4'>Overview</h6>

                                </div>

                                <div style={{ marginRight: "60px" }}>
                                    <div className='d-flex'>
                                        <h6 className='me-4'>Graph</h6>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                            <label className="form-check-label" for="flexSwitchCheckChecked"></label>
                                        </div>
                                    </div>
                                    <div className='text-end my-2 d-flex'>
                                        <span >Show:</span> <span className='text-primary me-2'>Employee</span><i className="fas fa-angle-down text-primary my-1"></i>
                                    </div>
                                </div>

                            </div>
                            <div className='d-flex'>
                                <h6 className='text-primary bg-light p-2 rounded'>Active user</h6>
                                <div className='d-flex' style={{ fontSize: "14px" }} >
                                    <span className='p-2'>Attendence</span>
                                    <span className='p-2'>Hour spent</span>
                                    <span className='p-2'>Enrolled</span>
                                    <span className='p-2'>Questions</span>
                                    <span className='p-2'>Resolved</span>
                                    <span className='p-2'>Quiz Scored</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-4">
                        <div className="p-3  commonHeightWidth1 text-start">
                            <h6>Announcement</h6>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="p-3 commonHeightWidth2 text-start">
                            <h6>Visitors</h6>

                            <div className='d-flex'>
                                <h4 className='me-3 my-1'>254,845</h4>
                                <span style={{ fontSize: "11px" }} className='p-2 text-dark fw-bold'>Most visited</span>
                                <span style={{ fontSize: "11px" }} className='text-primary bg-light p-2 rounded fw-bold'>Introduction to hadoop</span>
                                <span style={{ fontSize: "11px" }} className='text-primary bg-light p-2 rounded mx-3 fw-bold'>Introduction to hadoop</span>
                                <span style={{ fontSize: "11px" }} className='text-primary bg-light p-2 rounded fw-bold'>Introduction to hadoop</span>


                            </div>
                            <div className='d-flex my-3 justify-content-between' style={{ marginRight: "40px" }}>
                                <div className='d-flex'>
                                    <span className='me-3'>New/Returning</span>
                                    <span>45,762/2491</span>

                                </div>
                                <div className='d-flex'>
                                    <p className='me-3'>New visitors</p>
                                    <p>Returning visitors</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="p-3 commonHeightWidth1 text-start">
                            <h6>Course in Demand</h6>
                            <div className='course d-flex '>
                                <div className='cirular me-3'>
                                    <img src={book} style={{ marginLeft: "9px", marginTop: "4px" }} alt="" />
                                </div>
                                <div className='d-flex flex-column'>
                                    <span style={{ fontSize: "12px", fontWeight: "bold" }}>Introduction to hadoop</span>
                                    <span className='text-primary' style={{ fontSize: "12px" }}>28 Employee</span>
                                </div>
                            </div>
                            <div className='course d-flex my-3'>
                                <div className='cirular me-3'>
                                    <img src={book} style={{ marginLeft: "9px", marginTop: "4px" }} alt="" />
                                </div>
                                <div className='d-flex flex-column'>
                                    <span style={{ fontSize: "12px", fontWeight: "bold" }}>Introduction to hadoop</span>
                                    <span className='text-primary' style={{ fontSize: "12px" }}>28 Employee</span>
                                </div>
                            </div>
                            <div className='course d-flex '>
                                <div className='cirular me-3'>
                                    <img src={book} style={{ marginLeft: "9px", marginTop: "4px" }} alt="" />
                                </div>
                                <div className='d-flex flex-column'>
                                    <span style={{ fontSize: "12px", fontWeight: "bold" }}>Introduction to hadoop</span>
                                    <span className='text-primary' style={{ fontSize: "12px" }}>28 Employee</span>
                                </div>
                            </div>
                            <div className='course d-flex my-3 '>
                                <div className='cirular me-3'>
                                    <img src={book} style={{ marginLeft: "9px", marginTop: "4px" }} alt="" />
                                </div>
                                <div className='d-flex flex-column'>
                                    <span style={{ fontSize: "12px", fontWeight: "bold" }}>Introduction to hadoop</span>
                                    <span className='text-primary' style={{ fontSize: "12px" }}>28 Employee</span>
                                </div>
                            </div>
                            <div className='course d-flex '>
                                <div className='cirular me-3'>
                                    <img src={book} style={{ marginLeft: "9px", marginTop: "4px" }} alt="" />
                                </div>
                                <div className='d-flex flex-column'>
                                    <span style={{ fontSize: "12px", fontWeight: "bold" }}>Introduction to hadoop</span>
                                    <span className='text-primary' style={{ fontSize: "12px" }}>28 Employee</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="p-3  commonHeightWidth1 text-start">
                            <h6>Recently Activity</h6>
                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <div className="p-3 commonHeightWidth1 text-start">
                            <div className='d-flex'>
                                <h6 className='me-4'>Recently Activity</h6>
                                <span >Show:</span> <span className='text-primary '>Employee</span><i className="fas fa-angle-down text-primary mt-1 ms-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightColumn;