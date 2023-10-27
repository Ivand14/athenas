import Reserv from "../components/Reservation/Reserv";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Reservation = () =>{
    
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{
            headerShown:false,
        }}>
            <Stack.Screen name="shifts" component={Reserv} />
        </Stack.Navigator>
    )
    
}

export default Reservation