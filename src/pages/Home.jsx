import { Text, View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Todos from '../components/Todos'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home = ({})=>{
    const [todos,setTodos]=useState([])
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const navigation = useNavigation()

    useEffect(()=>{trackStorage()},[])

    const trackStorage = async ()=>{
        const asyncTodos = await AsyncStorage.getItem('todos')
        setTodos(JSON.parse(asyncTodos))
    }

    // useEffect(()=>{
    //     AsyncStorage.setItem('todos',JSON.stringify(todos))
    // },[todos])

    const addToDo = async ()=>{
        if(title){
            const obj = {
                id: Date.now(),
                done: false,
                title,
                description
            }
            const allTodos = [...todos,obj]
            await AsyncStorage.setItem('todos',JSON.stringify(allTodos))
            setTodos(allTodos)
        }
    }

    return(
        <View style={{flex:1, alignItems: 'center', justifyContent: 'flex-start', padding: 50}}>
            <Text style={styles.title}>TODO APP</Text>
            <TextInput onChangeText={(value)=>setTitle(value)} style={styles.input} placeholder="Write your todo..."/>
            <TextInput onChangeText={(value)=>setDescription(value)} style={styles.input} placeholder="description..."/>
            <TouchableOpacity onPress={addToDo} style={styles.button}>
                <Text>Save</Text>
            </TouchableOpacity>
            {todos.length !==0 &&(
                <>
                    <View style={styles.divider}/>
                    <Todos todos={todos}/>
                </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        marginBottom: 20
    },
    input: {
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 20,
        marginBottom: 10,
        padding: 4,
        width: '100%'
    },
    button: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'moccasin',
        borderRadius: 20,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    divider: {
        backgroundColor: 'black',
        height: 1,
        marginTop: 25,
        width: '100%'
    }
})

export default Home