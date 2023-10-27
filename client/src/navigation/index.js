import Authenticate from "./authNavigation";
import BottomTabNavigator from "./BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default ()=>{
    const userData = useSelector(state => state?.authReducer?.userData)
    const loginSuccesfully = userData && userData[0] && userData[0].login
    console.log('login',loginSuccesfully)
    
    return(
        <NavigationContainer>
            { loginSuccesfully === true && userData ? <BottomTabNavigator/> : <Authenticate/>}
        </NavigationContainer>
    )
}

