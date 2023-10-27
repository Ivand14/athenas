import ACTION_TYPES from "../actions/actions-type"

const initialState = {
    userToken :"",
    userName:"",
    userData:null
}

const auth = (state = initialState,action) =>{
    switch(action.type){
        case ACTION_TYPES.CREATE_USER:{
            return{
                ...state,
                userToken:action.payload_token,
                userName: action.payload_name
            }
        }
        case ACTION_TYPES.LOGIN:{
            console.log(state.userData)
            return{
                ...state,
                userData:[action.payload]
            }
        }
        default:
            return state
        }
    }
export default auth