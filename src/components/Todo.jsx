import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Platform} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Tododetails from "../pages/Todo-details";
import AsyncStorage from '@react-native-async-storage/async-storage';


const todo = ({todo})=>{
    const navigation = useNavigation()

    const deleteItem = async (id) => {
      await AsyncStorage.removeItem('todos');
    };

    return(
        <TouchableOpacity  
        onLongPress={() => deleteItem(todo.id)} 
        onPress={()=> navigation.navigate ('Todo-details', todo)} 
        style={styles.todo}>
            <Text>{todo.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        width: 300,
        height: 50,
        fontSize: 20,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 25,
        backgroundColor: Platform.OS === "ios" ? 'thistle' : 'aquamarine',
        borderRadius:50,
    }
})

export default todo