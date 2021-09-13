import React, {useState} from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import {firebase} from '../firebase/Config'

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmPass, setConfirmPass] = useState('');


    var db = firebase.firestore();
    
    const signUp = ()=>{
        if (password !== confirmPass){
           alert("Passwords do not match")
        }else if(password == confirmPass){
            alert('You have successfuly signed up')

            firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
                  db.collection("users").doc(firstName).set({firstName:firstName, lastName:lastName,}).then(() =>{  
                    {navigation.navigate('Login')}         
                  })
          }) .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
              } else {
                alert(errorMessage);
              }
              console.log(error);
            });  
          }
    }
  
    return (
        <View style={styles.container}>
            <View>
                <TextInput style={styles.input} 
                placeholder='First Name' 
                onChangeText={((firstName) =>setFirstName(firstName))} />

                <TextInput style={styles.input} 
                placeholder='Last Name' 
                onChangeText={((lastName) => setLastName(lastName))} />

                <TextInput style={styles.input} 
                placeholder='Email' 
                onChangeText={((email) => setEmail(email))} />

                <TextInput style={styles.input} 
                placeholder='Password'  
                secureTextEntry
                onChangeText={((password) => setPassword(password))}/>

                <TextInput style={styles.input} 
                secureTextEntry
                placeholder='Confirm Password' onChangeText={(confirmPass) => setConfirmPass(confirmPass)} />
                <View style={styles.btnWrapper} >
                    <Button title='Sign Up' onPress={signUp} />
                </View>
            </View>
            
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        width: 300,
        height: 50,
        paddingLeft: 30,
        marginTop: 10,
    },
    btnWrapper:{
        marginTop:10,
    }
})

