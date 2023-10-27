import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {createUser} from '../../redux/actions/Login/LoginAction'
import { useNavigation } from '@react-navigation/native'
import validate from './validate'

const SignUp = () => {
    
    const dispatch = useDispatch()
    const navigation = useNavigation()
    
    
    const[formAuth,setFormAuth] = useState({
        name:'',
        phone:'',
        email:'',
        password:''
    })


    const[error,setError] = useState({})

    const onHandleChange = (property,value) =>{
        setFormAuth({...formAuth,[property]:value})
    }

    const onHandleSubmit = () =>{
        const validateErrors = validate(formAuth)
        setError(validateErrors)

        if(Object.keys(validateErrors).length === 0){
            dispatch(createUser(formAuth))
            setFormAuth({
                name:'',
                phone:'',
                email:'',
                password:''
            })
            navigation.navigate('login')
        }
    }

    
    return (
        <View style={styles.containerInput}>
            <View style={styles.allInputs}>
                <View style={styles.containerImage}>
                    <Image
                        source={require('../../../assets/athenasLogo.png')}
                        style={styles.image}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.TextInput}
                        onChangeText={(text)=>onHandleChange("name",text)}
                        value={formAuth.name}
                        placeholder='Escribi tu nombre'
                    />
                    {error.name && <Text style={styles.error}>{error.name}</Text>}
                </View>
                
                <View>
                    <TextInput
                        style={styles.TextInput}
                        onChangeText={(text)=>onHandleChange("phone",text)}
                        value={formAuth.phone}
                        placeholder='Tu numero de celular'
                        keyboardType='decimal-pad'
                    />
                    {error.phone && <Text style={styles.error}>{error.phone}</Text>}
                </View>

                <View>    
                    <TextInput
                        style={styles.TextInput}
                        onChangeText={(text)=>onHandleChange("email",text)}
                        value={formAuth.email}
                        placeholder='Escribi tu email'
                        keyboardType='email-address'
                    />
                    {error.email && <Text style={styles.error}>{error.email}</Text>}
                </View>

                <View>    
                    <TextInput
                        style={styles.TextInput}
                        onChangeText={(text)=>onHandleChange("password",text)}
                        value={formAuth.password}
                        placeholder='Escribi contraseña'
                        secureTextEntry={true}
                    />
                    {error.password && <Text style={styles.error}>{error.password}</Text>}
                </View>

            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={onHandleSubmit}>
                    <Text style={styles.textButton}>Registrarse</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.haveAccount}>
                <Text>Ya tenes una cuenta?</Text>
                <TouchableOpacity>
                    <Text style={styles.loginButton} onPress={()=>navigation.navigate('login')}>Ir al Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    containerInput:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        alignContents:'center',
        borderColor: '#f7e1d7',
        borderWidth: 1.5,
        padding:50,
        borderRadius:10,
    },
    allInputs:{
        gap:10,
    },
    TextInput:{
        borderColor: '#f7e1d7',
        borderWidth:1,
        height:50,
        width:370,
        borderRadius:10,
        padding:10
    },
    containerImage:{
        alignItems:'center'
    },
    image:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 2,
        width:250,
        height:150,
    },
    button:{
        marginTop:18,
        backgroundColor:'#fcd5ce',
        padding:10,
        borderRadius:10,
    },
    textButton:{
        color:'white',
        fontSize:18,
        textTransform:'uppercase'
    },
    error:{
        color:'red'
    },
    haveAccount:{
        marginTop:10,
        flexDirection:'row'
    },
    loginButton:{
        textDecorationLine:'underline',
        marginLeft:5,
    }

})
