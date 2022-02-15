import React, { Component } from 'react';
import AudioPlayer from "./AudioPlayer";
import AudioPlayerSettings from "./AudioPlayerSettings";

class Footer extends Component {
  render() {
    return (
      <>
         <div className="contentInfo "> </div>
         <div className="playerInterface "><AudioPlayer /></div>
         <div className="playerSettings"><AudioPlayerSettings /></div>

      </>
    )
  }
}

export default Footer