import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SingUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

const Authenticate = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="signUp" component={SignUp} options={{headerShown:false}}/>
            <Stack.Screen name="login" component={Login} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default Authenticate