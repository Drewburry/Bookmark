import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'

import React, { useState, useEffect } from 'react'
import firebase from 'firebase';

const Update22 = ({navigation,route}) => {
  let {id, partist,pgenre,palbum,ptrack,pyear} = route.params
  const [artist, setArtist] = useState(partist)
  const [album, setAlbum] = useState(palbum)
  const [year, setYear] = useState(pyear)
  const [track, setTrack] = useState(ptrack);
  const [genre, setGenre] = useState(pgenre);

let uid = firebase.auth().currentUser.uid
  const setData = () => {
    firebase.firestore().collection("Bookmark").doc(uid).collection('music').doc(id).set({ track, artist, album, genre, year }).then(() => {
        alert('Bookmark added successfully')
    })
        .catch((error) => {
            alert.error("Error adding bookmark: ", error);
        });
    }
  return (
    <View style={styles.container}>
        <View>
            {/* Header */}
            <Text style={{ color: 'blue', fontSize: 32, fontWeight: 'bold', marginBottom: 15, }}>Bookmark <Text style={{ color: 'green' }}>App</Text></Text>
        </View>
        <View>
            <TextInput style={styles.input}
                placeholder='Artist'
                onChangeText={setArtist}
                value={artist} />
                

            <TextInput style={styles.input}
                placeholder='Album'
                onChangeText={setAlbum}
                value={album} />

            <TextInput style={styles.input}
                placeholder='Genre'
                onChangeText={setGenre}
                value={genre} />

            <TextInput style={styles.input}
                placeholder='Year'
                onChangeText={setYear}
                value={year} />

            <TextInput style={styles.input}
                placeholder='Track Title'
                onChangeText={setTrack}
                value={track} />
            <View style={styles.btnContainer}>
                {/* Buttons */}
                <TouchableOpacity onPress={setData}>
                    <Text style={styles.bookmarkBtn}>Update</Text>
                </TouchableOpacity>
            </View>
            {/* <TouchableOpacity onPress={signOut}>Sign out</TouchableOpacity> */}

        </View>

    </View>
)
}

export default Update22

const styles = StyleSheet.create({

    bookmarkText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 50,
    },
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
    btnWrapper: {
        marginTop: 10,
    },
    btnContainer: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
    },
    bookmarkBtn: {
        width: 145,
        height: 50,
        backgroundColor: 'blue',
        marginTop: 5,
        paddingLeft: 0,
        paddingTop: 15,
        borderRadius: 10,
        color: '#fff',
        fontWeight: 'bold',
    },
    bookmarkBtn2: {
        width: 145,
        height: 50,
        backgroundColor: 'green',
        marginLeft: 10,
        marginTop: 5,
        paddingLeft: 0,
        paddingTop: 15,
        borderRadius: 10,
        color: '#fff',
        fontWeight: 'bold',
    },
})
