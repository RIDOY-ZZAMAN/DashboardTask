import React from 'react';
import './LeftColumn.css';
import home from '../../../images/LCImage/home.png'
import course from '../../../images/LCImage/course.png';
import specialization from '../../../images/LCImage/specialization.png';
import pform from '../../../images/LCImage/pform.png';
import cart from '../../../images/LCImage/cart.png';
import setting from '../../../images/LCImage/settings.png';




const LeftColunm = () => {
    return (
        <div className='container leftColumnItems text-start'>
            <div className='d-flex '>
                <img className='lColumnIcon' src={home} alt="" />  <h6 className='ms-3'>Home</h6>
            </div>
            <div className='d-flex '>
                <img className='lColumnIcon' src={course} alt="" />  <h6 className='ms-3'>Course</h6>
            </div>
            <div className='d-flex '>
                <img className='lColumnIcon' src={specialization} alt="" />    <h6 className='ms-3'>Specilization</h6>
            </div>
            <div className='d-flex '>
                <img className='lColumnIcon' src={specialization} alt="" />  <h6 className='ms-3'>Learning Path</h6>
            </div>
            <div className=' d-flex '>
                <img className='lColumnIcon' src={pform} alt="" />   <h6 className='ms-3'>Performance</h6>
            </div>
            <div className=' d-flex '>
                <img className='lColumnIcon' src={cart} alt="" />  <h6 className='ms-3'>Cart</h6>
            </div>
            <div className=' d-flex '>
                <img className='lColumnIcon' src={setting} alt="" />  <h6 className='ms-3'>Settings</h6>
            </div>

        </div>
    );
};

export default LeftColunm;