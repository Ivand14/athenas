import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { login } from '../../redux/actions/Login/LoginAction'
import { useNavigation } from '@react-navigation/native'
import validate from './validate'

const Login = () => {

    const dispatch = useDispatch()

    
    const[formAuth,setFormAuth] = useState({
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
            dispatch(login(formAuth.email,formAuth.password))
            // setFormAuth({
            //     email:'',
            //     password:''
            // })
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
                    <Text style={styles.textButton}>Iniciar sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default Login

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
    }

})
