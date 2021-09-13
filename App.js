import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Display from './Screens/components/Display';
import Update from './Screens/Update';
const Stack = createNativeStackNavigator();


function App (){
  return (
    
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Login">
       <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login} /> 
       <Stack.Screen name="SignUp" component={SignUp} />
       <Stack.Screen name="Display" component={Display} />
       <Stack.Screen name="Update" component={Update} />
      </Stack.Navigator>
    </NavigationContainer>
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

export default App