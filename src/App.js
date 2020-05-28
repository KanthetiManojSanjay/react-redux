import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Counter from './components/Counter.js';
import {onIncrement, onDecrement} from './actions/actions'


var mapStateToProps = (state) =>{
  return {
    inCount : state.inReducer.inCount,
    deCount : state.deReducer.deCount
  }
}

var mapDispatchToProps = (dispatch) =>{
  return {
    onIncrement: (step)=>{
      dispatch(onIncrement(step))
    },
    onDecrement:(step)=>{
      dispatch(onDecrement(step))
    }
  }
}

var App= connect(mapStateToProps, mapDispatchToProps)(Counter);

export default App;
