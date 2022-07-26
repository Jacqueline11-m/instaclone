import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landing.css';

const LandingPage = () =>{
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/postview');
    }
    return(
        <>
            <div className='landing_container'>
                <div className='content'>
                    <h2 id='getinText'>Insta Clone App</h2>
                    <button type='button' style={{"cursor":"pointer"}} onClick={handleSubmit}>Enter</button>
                </div>
            </div>
        </>
    )
}
export default LandingPage;