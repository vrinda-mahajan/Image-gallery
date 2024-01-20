const initialReducerValue = {
    history:[]
}

const appReducer = (state,action) => {
    switch (action.type){
        case "SET_HISTORY":
            return {...state,history:action.payload}
        default:
            return state
    }
}

export {initialReducerValue,appReducer}