import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TodoItem ({item, pressHandler}){
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding:16,
        marginTop:16,
        borderColor:'#ddd',
        borderBottomWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
        backgroundColor:'black',
        color:'#fff'
    }
})

