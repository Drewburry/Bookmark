import React, { useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import {firebase} from '../firebase/Config'

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const signIn = ()=>{
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
            {navigation.navigate('Home')}  
            alert('sign in successfull')
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
              alert('Wrong password.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
          });
    }
    return (
        <View style={styles.container}>
            <View>
                {/* Header Text */}
                <Text style={styles.headerText}>LOGIN</Text>
            </View>
            <View style={styles.form}>
                {/* This is my form input types */}
                <TextInput style={styles.input}
                 placeholder='Email' 
                 keyboardType='email-address'
                 onChangeText={((email) => setEmail(email))} />

                <TextInput style={styles.input}
                 placeholder='Password'
                 secureTextEntry
                 onChangeText={((password) => setPassword(password))} />

                <View style={styles.btnWrapper} >
                    <Button title='Login' onPress={signIn}/>
                </View>

                <TouchableOpacity style={styles.textWrapper}>
                    <Text style={styles.signupText}>Don't have an account?
                        <Text style={styles.spanText} onPress={() => navigation.navigate('SignUp')}>  Sign Up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerText: {
        fontSize: 55,
        marginBottom: 25,
        color: '#297F87',
    },

    input: {
        width: 300,
        height: 50,
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 5,
        paddingLeft: 10,
    },
    btnWrapper: {
        marginTop: 35,
    },

    textWrapper: {
        marginTop: 20,
        textAlign: 'center'
    },
    signupText: {
        fontSize: 18,
    },
    spanText:{
        color:'blue',
    },
})
