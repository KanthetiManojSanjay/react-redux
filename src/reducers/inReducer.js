const inReducer= (state={inCount:0},action)=>{
    var currentState=state.inCount;
    switch(action.type){
        case "INC": return {
            ...state, inCount: currentState  + parseInt(action.step)
        }
        default: 
            return state;
    }
}

export default inReducer;