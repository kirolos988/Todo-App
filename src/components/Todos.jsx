import React from "react";
import { Text, View } from "react-native";
import Todo from './Todo'

const todos = ({todos})=>{
    return(
        <View style={{marginTop: 20}}>
            {todos.map(todo=>(
                <Todo todo={todo} key={todo.id}/>
            ))}
        </View>
    )
}

export default todos