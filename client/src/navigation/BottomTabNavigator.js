import { StyleSheet, View } from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons'
import Reservation from "./Reservation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabNavigator = () =>{
    const TabNavigator = createBottomTabNavigator()
    return(
        <TabNavigator.Navigator screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:styles.tabStyle
        }}>
            <TabNavigator.Screen name="Reserv" component={Reservation} options={{
                tabBarIcon:()=>(
                    <View>
                        <Icon name="home" size={40} color="white" />
                    </View>
                )
            }}/>
        </TabNavigator.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabStyle:{
        backgroundColor:'#fcd5ce',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height:52
    }
})
