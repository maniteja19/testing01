import {} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from '../Screens/Login';
import LoginScreen from '../Screens/LoginScreen';
import SignInScreen from '../Screens/SignInScreen';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name ="Signin" component={SignInScreen}/>
      </Stack.Navigator>
  );
};

export default StackNavigation;
