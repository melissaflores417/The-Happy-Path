import React, { Component } from 'react'
import { View, Text, Button} from 'react-native';
import HomeScreen from './Screens/Home';
import DailyReflectionScreen from './Screens/Tips';
import ExploreScreen from './Screens/Explore';
import TipsScreen from './Screens/DailyReflection';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import LandingPage from './Screens/landingpage';



const Tab = createMaterialBottomTabNavigator();



export default function App() {
  return (
  
    
    <NavigationContainer>
    <Tab.Navigator labeled={false} barStyle={{ backgroundColor: '#252525' }} activeColor="white" >
      <Tab.Screen name="Home" component={HomeScreen}           
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-variant-outline" color={color} size={26}/>
        ),
    }}/>
      <Tab.Screen name="Tips" component={TipsScreen}        
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pencil-box-outline" color={color} size={26}/>
        ),
    }}/>
      <Tab.Screen name="DailyReflection" component={DailyReflectionScreen}    
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-outline" color={color} size={26}/>
        ),
    }}/>
      <Tab.Screen name="Explore" component={ExploreScreen}          
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="compass" color={color} size={26}/>
        ),
    }}/>
    </Tab.Navigator>
    </NavigationContainer>
    
  );
}