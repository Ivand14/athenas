import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { useSelector } from 'react-redux'

const viewSingIn_SingUp = () => {

  const userRegistered = useSelector(state => state.authReducer.userRegistered)
  console.log(userRegistered)
  
  
  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default viewSingIn_SingUp

const styles = StyleSheet.create({})