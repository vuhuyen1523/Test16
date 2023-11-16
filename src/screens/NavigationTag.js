import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionic from 'react-native-vector-icons/Ionicons'
import Cart from './Cart';
import Home from './Home';
const Tab = createBottomTabNavigator();
export default function NavigationTag() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
     tabBarIcon: ({ focused, size, color }) => {
       let iconName;
       if (route.name === "Home") {
         iconName = focused ? 'home' : 'home-outline';
       }  else if (route.name === "Cart") {
         iconName = focused ? 'cart-sharp' : 'cart-outline';
       }
       return <Ionic name={iconName} size={size} color={color} />; 
     },
   })}
   >
     <Tab.Screen name="Home" component={Home} options={{headerShown:false}}  />
     <Tab.Screen name="Cart" component={Cart} options={{headerShown: false}}  />
   </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})