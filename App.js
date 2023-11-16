import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cart from './src/screens/Cart';
import Home from './src/screens/Home';
import Scanf from './src/screens/Scanf';
import NavigationTag from './src/screens/NavigationTag';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';


const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="NavigationTag" component={NavigationTag} options={{headerShown:false}}/>
      {/* <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/> */}
      <Stack.Screen name="Scanf" component={Scanf} options={{headerShown:false}}/>
      {/* <Stack.Screen name="Cart" component={Cart} options={{headerShown:false}}/> */}
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
