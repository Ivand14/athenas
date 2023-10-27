import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import React from 'react'
import { useSelector } from 'react-redux'

const Reserv = () => {
    const userInfo = useSelector(state => state.authReducer.userData)
    const user = userInfo[0]
    
    return (
        <View style={styles.containerReserv}>
            <ImageBackground
                source={require('../../../assets/fondoInfoHome.jpg')}
                style={styles.backgroundInfoHome}
            >
                <View style={styles.infoHome}>
                    <Text style={styles.TextInfoEmail}>{user.singin.email}</Text>
                    <Text style={styles.TextInfoName}>{user.singin.name}</Text>
                </View>
            </ImageBackground>
            <View style={styles.ContainerNextShift}>
                <View style={styles.nextShift}>
                    <Text style={styles.textShift}>Proxima Reserva</Text>
                    <Text style={styles.textShift}>04/11/2023</Text>
                </View>
            </View>
            <View style={styles.ContainerOptions}>
                <View style={styles.options}>
                    <TouchableOpacity style={styles.newReserv}>
                        <Icon name='add-circle' color='white' size={30} />
                        <Text style={styles.textOptions}>Nueva Reserva</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.newReserv}>
                        <Icon name='today' color='white' size={30} />    
                        <Text style={styles.textOptions}>Mis Reservas</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Reserv

const styles = StyleSheet.create({
    containerReserv:{
        flex:1,
    },
    infoHome:{
        flex:2,
        justifyContent:'start',
        alignItems:'center',
    },
    TextInfoEmail:{
        fontSize:25,
        paddingTop:60,
        color:'white'
    },
    TextInfoName:{
        fontSize:27,
        color:'white',
        textTransform:'uppercase'
    },
    backgroundInfoHome:{
        flex:2,
        height:200
    },
    ContainerNextShift:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center'
        
    },
    nextShift:{
        alignItems:'center',
        backgroundColor:'#fcd5ce',
        borderColor:'#f7e1d7',
        borderWidth:1,
        width:350,
        height:100,
        justifyContent:'center',
        borderTopRightRadius:20,
        borderBottomLeftRadius:20
    },
    textShift:{
        color:'white',
        fontSize:20
    },
    ContainerOptions:{
        flex:3,
        justifyContent:'start',
        alignItems:'center',
    },
    options:{
        alignItems:'center',
        width:350,
        height:100,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        justifyContent:'center',
    },
    newReserv: {
        backgroundColor: '#fcd5ce', // Color de fondo
        borderRadius: 10, // Bordes redondeados
        width: 350,
        paddingVertical: 15, // Espacio vertical interno
        paddingHorizontal: 20, // Espacio horizontal interno
        alignItems: 'start', 
        marginTop: 20,
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    textOptions:{
        color:'white',
        fontSize:20
    }
})