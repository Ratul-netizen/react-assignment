import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import './MyPlayer.css'


const MyPlayer = (props) => {
    
    const {img,name,Price,country} = props.player;
    
    return (
        <div div className = "card shadow p-3 mb-5 bg-white rounded gapping d-flex justify-content-around" >
        <div className="container player-img">
            <img className="card-img" src={img} alt=""/>
        </div>
        <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <h4 className="card-text">{country}</h4>
        <h4 className="card-text">{Price}</h4>
        <button className="main-button" onClick={() => props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faInbox} /> Hire</button>
        </div> 
        </div>
    );
};

export default MyPlayer;