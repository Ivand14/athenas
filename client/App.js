import { StyleSheet, Text, View } from 'react-native';

import Login from './src/components/Login/Login';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
      <Provider store={store}>
        <Login/>
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
