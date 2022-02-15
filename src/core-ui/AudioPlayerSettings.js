import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { volumeChange, toggleMute, toggleUnmount } from '../reducers/playerActions';
import playerVolumeOn from '../assets/images/playerVolumeOn.png';
import playerVolumeOff from '../assets/images/playerVolumeOff.png';
import playerKeepAlive from '../assets/images/player_alive.png';

const AudioPlayerSettings = () => {
   const dispatch = useDispatch();
   const player = useSelector(state => state.player);
   
  

  return (
    <Fragment>
       <input className={player.stopOnUnmount ? "playerKeepAliveButton" : "playerKeepAliveButtonDeactivated"} alt="Im Hintergrund ausführen" type="image" src={playerKeepAlive} onClick={() => dispatch(toggleUnmount())} />
       <input className="playerVolumeOnButton" type="image" alt="Stummschalten" src={player.muted ? playerVolumeOff : playerVolumeOn} onClick={() => dispatch(toggleMute())} />
       <input type='range' min={0} max={1} step='any' value={player.volume} onChange={(e) => dispatch(volumeChange(e.target.value))} />
    </Fragment>
  )
}

export default AudioPlayerSettings