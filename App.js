import React from 'react'
import {StyleSheet,TouchableOpacity,Text,View} from 'react-native'
import { Component } from 'react/cjs/react.production.min'

import homeScreen from './Screens/homeScreen'
import locationScreen from './Screens/locationScreen'
import meteorScreen from './Screens/meteorScreen'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
  
const stack = createStackNavigator()


export default class App extends Component{
  render(){
    return(
      <NavigationContainer >
        <Stack.Navigator initialRouteName = 'home' ScreenOptions = {{headerShown : false}}>
        <stack.Screen name = 'home' Component = {homeScreen}/>
        <stack.Screen name = 'location' Component = {locationScreen}/>
        <stack.Screen name = "meteor " Component = {meteorScreen }/>
        </Stack.Navigator>          +
      </NavigationContainer>

    )
  }
}