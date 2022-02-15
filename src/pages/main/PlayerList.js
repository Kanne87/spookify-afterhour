import React, { Component, Fragment } from 'react';
import PlayerItem from './PlayerItem';
import { sets } from '../../constants/constants';

class PlayerList extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        sets: sets,
     }
   }
  render() {
    return (
      <Fragment>
        <h2>Recent Sets</h2>
        <div className="playerItemWrapper ">
         
         {this.state.sets.map(set => (
            <PlayerItem key={set.id} set={set}/>
         ))}
         </div>

      </Fragment>
    )
  }
}

export default PlayerList