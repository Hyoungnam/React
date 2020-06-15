import React from 'react'
import { toJS } from 'immutable'

const Reselect = ({players, onAddPlayers, onRemovePlayers}) => {
    console.log("players: ", players);
    return (
        <div> 
         <h1>Reselect</h1>
         {players.map((i, idx)=> [
             <React.Fragment>
              <button 
                key={i+idx}
                onClick={()=>onAddPlayers(idx)}>
                    {i}
              </button>
              <button 
                key={i+idx}
                onClick={()=>onRemovePlayers(idx)}>
                    Remove
              </button>
             </React.Fragment>
        ])}
        </div>
    )
}

export default Reselect
