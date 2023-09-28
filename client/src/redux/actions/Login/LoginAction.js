import ACTION_TYPES from "../actions-type";
import axios from "axios";

export const createUser = (clientData) =>{
    return async (dispatch) =>{
        try {
            const response = await axios.post('http://192.168.1.50:3001/createClient', clientData);

            console.log('Token :',response.data.token)
            
            dispatch({
                type:ACTION_TYPES.CREATE_USER,
                payload_token:response.data.token,
                payload_name:response.data.name
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}