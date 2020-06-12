import React from "react";
import ImmuCounter from 'presentationals/components/ImmuCounter';
import { connect } from 'react-redux';
import immuCounter, { increase, decrease, changeColor } from "redux/reducers/immuCounter";

function ImmuCounterContainer({number, color, onIncrease, onDecrease, onChangeColor}) {
  return (
    <ImmuCounter
      color={color}
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onChangeColor={onChangeColor}
    />
  );
}

const mapStateToProps = (reducer) => ({
    color: reducer.immuCounter.get('color'),
    number: reducer.immuCounter.get('number')
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

