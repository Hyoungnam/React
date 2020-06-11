import React from "react";
import ImmuCounter from 'presentationals/components/ImmuCounter';
import { connect } from 'react-redux';
import { increase, decrease, changeColor } from "redux/reducers/immuCounter";

function ImmuCounterContainer({number, color, onIncrease, onDecrease}) {
  return (
    <ImmuCounter
      color={color}
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
}

const mapStateToProps = (state) => ({
    color: state.immuCounter.color,
    number: state.immuCounter.number,
}) 

const mapDispatchToProps = (dispatch) => ({
    onIncrease: () => dispatch(increase()),
    onDecrease: () => dispatch(decrease()),
    onChangeColor: (color) => dispatch(changeColor(color))
})

const withConnect = connect(
 mapStateToProps, 
 mapDispatchToProps
)
export default withConnect(ImmuCounterContainer);

