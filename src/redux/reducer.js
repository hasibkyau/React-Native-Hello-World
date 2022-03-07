import * as actionTypes from './actionTypes'

const initState = {
    placeList : [],

}

export const rootReducer = (state = initState, action) =>{
    switch (action.type) { 
        case actionTypes.ADD_PLACE:
            return{
                ...state,
                placeList: state.placeList.concat(action.payload)
            }           
        default:
            return state
    }
}