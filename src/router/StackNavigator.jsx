import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from "react-native";
import Home from '../pages/Home'
import Tododetails from '../pages/Todo-details'

const Stack = createNativeStackNavigator()

const StackNavigator = ()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Todo-details" component={Tododetails}/>
        </Stack.Navigator>
    )
}

export default StackNavigator