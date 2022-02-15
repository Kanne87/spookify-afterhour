import React from "react";
import thumb_set from '../../assets/images/thumb_set.PNG';
import itemPlayButton from '../../assets/images/itemPlayButton.png';
import { useSelector, useDispatch } from 'react-redux';
import { loadTrack } from '../../reducers/playerActions';

 const PlayerItem = (props) => {
    const dispatch = useDispatch();
  return (
    
      <div className="playerItem ">
         <div className="playerPlayButton" >
            <input className="itemPlayButton" type="image" src={itemPlayButton} onClick={() => dispatch(loadTrack({url: props.set.url, played: 0, loaded: 0, pip: false, stopOnUnmount: false}))} />
         </div>
         <div className="playerItemImg" style={{backgroundImage: `url(${thumb_set})`}}>
            
         </div>
         

         <h3>
         {props.set.titel}
         </h3>
         <p className="setDescription">{props.set.desc}</p>
         
    </div>
  );
};

export default PlayerItem;
