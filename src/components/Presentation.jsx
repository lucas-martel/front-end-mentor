import React from 'react';
import Clients from './Clients';


import './Presentation.css';

const Presentation = () => {
    return ( 
        <div className='presentation-container'>
            <h1>Make<br /> remote work</h1>
            <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <button className='learn-more'>Learn more</button>
            <Clients />
        </div>
     );
}
 
export default Presentation;