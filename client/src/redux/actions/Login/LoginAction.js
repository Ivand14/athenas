import ACTION_TYPES from "../actions-type";
import axios from "axios";

export const createUser = (clientData) =>{
    return async (dispatch) =>{
        try {
            const response = await axios.post('http://192.168.1.51:3001/createClient', clientData);

            console.log('Token :',response.data.token)
            
            dispatch({
                type:ACTION_TYPES.CREATE_USER,
                payload_token:response.data.token,
                payload_name:response.data.name
            })
            
        } catch (error) {
            console.log('error',error)
        }
    }
}

export const login = (email,password) =>{
    return async(dispatch) => {
        try {
            const response = await axios.get(`http://192.168.1.51:3001/singIn?email=${email}&password=${password}`)
            dispatch({
                type: ACTION_TYPES.LOGIN,
                payload:response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}