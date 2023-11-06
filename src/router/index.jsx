import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home'
import Tododetails from '../pages/Todo-details'
import CompletedTodos from '../pages/Completed-Todos'
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Router = ()=> {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{headerTitle: "TODO APP"}}>
            <Tab.Screen name="Main" component={StackNavigator}/>
            {/* <Tab.Screen name="Home" component={Home}/> */}
            {/* <Tab.Screen name="Todo-details" component={Tododetails}/> */}
            <Tab.Screen name="CompletedTodos" component={CompletedTodos}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router