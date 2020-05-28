const deReducer = (state={deCount:5},action)=>{
    var currentState= state.deCount;
    switch(action.type){
        case "DEC": return{
            ...state, deCount: currentState - parseInt(action.step)
        }
        default: 
            return state;
    }
}

export default deReducer;