import {combineReducers} from 'redux';
import inReducer from './inReducer';
import deReducer from './deReducer';

const reducer =combineReducers({
    inReducer,
    deReducer
})

export default reducer;