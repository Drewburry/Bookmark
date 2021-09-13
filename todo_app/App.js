import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Priority from './components/Priority';
export default function App() {

  const [todos, setTodos] = useState([])

  const pressHandler = (key) =>{
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo => todo.key != key)
    });
  }
  
  const submitHandler = (text, Prio) =>{
    if(text == ""){
      alert("Please add a todo Item")
    }else{
 
      setTodos((prevTodos) =>{
        return [{text: text, key: Math.random().toString()},
          ...prevTodos, ];
      })
    }
    }
  return (
    <View style={styles.container}>
        {/* Header */}
        <Header/>
      <View style={styles.content}>  
         {/* Form  */}
         <AddTodo submitHandler={submitHandler} />
         <Priority />
          <View style={styles.list}>
             <FlatList data={todos}
             renderItem={({item}) => (
            <TodoItem item={item} pressHandler={pressHandler}/>)}/>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
content:{
  padding:40,
},
list:{
  marginTop:20,
},
});
