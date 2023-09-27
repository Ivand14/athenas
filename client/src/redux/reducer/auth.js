import ACTION_TYPES from "../actions/actions-type"

const initialState = {
    userRegistered : []
}

const auth = (state = initialState,action) =>{
    switch(action.type){
        case ACTION_TYPES.CREATE_USER:{
            return{
                ...state,
                userRegistered:[...state.userRegistered,action.payload],
            }
        }
        default:
            return state
    }
}

export default auth