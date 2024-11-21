import { FlatList } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigation from './components/navigations/StackNavigation';
import Flatlist from './components/Screens/Flatlist';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {/* <Stack.Screen name="Home" component={StackNavigation} /> */}
        <Stack.Screen name ="ok" component={Flatlist}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

