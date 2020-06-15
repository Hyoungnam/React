import React from "react";
import Reselect from 'presentationals/components/Reselect';
import { connect } from 'react-redux';
import { addPlayers, removePlayers} from 'redux/reducers/reselect';

function ReselectContainer({players, onAddPlayers, onRemovePlyaers}) {
  return (
    <Reselect
      players={players}
      onAddPlayers={onAddPlayers}
      onRemovePlayers={onRemovePlyaers}
    />
  );
}

const mapStateToProps = (reducer) => ({
    players: reducer.reselect.get('players')
}) 

const mapDispatchToProps = (dispatch) => ({
    onAddPlayers: (name) => dispatch(addPlayers(name)),
    onRemovePlyaers: () => dispatch(removePlayers()),
})

const withConnect = connect(
 mapStateToProps, 
 mapDispatchToProps
)
export default withConnect(ReselectContainer);

