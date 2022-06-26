import React from 'react';
import './Clients.css';


import DataBiz from './imgs/client-databiz.svg'
import AudioPhile from './imgs/client-audiophile.svg'
import Meet from './imgs/client-meet.svg'
import Maker from './imgs/client-maker.svg'

const Clients = () => {
    return ( 
        <div className="clients-container">
            <img className="client" src={DataBiz} alt="" />
            <img className="client" src={AudioPhile} alt="" />
            <img className="client" src={Meet} alt="" />
            <img className="client" src={Maker} alt="" />
        </div>
     );
}
 
export default Clients;