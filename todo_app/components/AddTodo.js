import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

function AddTodo({submitHandler}){
    const [text, setText] = useState("")
    const changeHandler = (val) =>{
    setText(val);
    
}
    return (
        <View>
            <TextInput 
            style={styles.input}
            placeholder="New Todo . ."
            onChangeText={changeHandler}/>
            <Button onPress={() => submitHandler(text)}
            title="Add Todo"
            color='#002366'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderColor:"#ddd",
    }
})
export default AddTodo
