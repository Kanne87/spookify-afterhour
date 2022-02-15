import React from 'react';
import { useDispatch } from 'react-redux';
import { setPlay } from '../reducers/playerActions';
import navBackward from '../assets/images/navBackward.png';
import navForward from '../assets/images/navForward.png';

const TopNavBar = () => {

  const dispatch = useDispatch();
  
  return (
    <>
    <div className="top-nav-arrows">
    <input className="navArrows" type="image" src={navBackward} />
    <input className="navArrows" type="image" src={navForward} />

    </div>
    <div className="top-nav-links">
      <button className="top-nav-button">Künstler</button>
      <button className="top-nav-button">Parties</button>
    </div>
    
    </>
  )
}

export default TopNavBar