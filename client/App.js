import { StyleSheet, Text, View } from 'react-native';

import Login from './src/components/Login/Login';
import MainNavigator from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import SignUp from './src/components/SignUp/SingUp';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from './src/redux/store';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
