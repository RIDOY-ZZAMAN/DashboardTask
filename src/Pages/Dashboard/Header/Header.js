import React from 'react';
import './Header.css'
import band from '../../../images/HImages/band.png';
import user from '../../../images/HImages/user.png'

const Header = () => {
    return (
        <div>
            {/* Nav Section */}
            <nav className="navbar navbar-expand-lg navbar-light navbarBackground ">
                <div className="container-fluid">
                    <img src={band} alt="" className='ms-4' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" style={{ marginLeft: "116px", paddingTop: "5px" }}>
                                <button type="button" class="btn btn-primary">Explore <i class="fas fa-angle-down "></i></button>
                            </li>
                            <li className="nav-item searchArea" style={{ paddingTop: "5px" }}>
                                <i class="fas fa-search searchIcon"> <span style={{ fontWeight: "100", marginLeft: "20px" }}>Search course</span></i>
                                <input className='searchField' type="text" />

                            </li>

                            <li className="nav-item">

                            </li>
                        </ul>
                        <div className="d-flex align-items-center me-3">


                            <i class="far fa-bell"></i><img src={user} alt="" className='mx-3' />
                            <div>
                                <span className='headerUser'>Jane Doe</span> <i class="fas fa-angle-down text-primary"></i> <br />
                                <span className='text-danger me-2'>987654321</span>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>



        </div>
    );
};

export default Header;


