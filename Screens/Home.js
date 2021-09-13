import React, { useState, useEffect } from 'react'
// import {firebase} from "../firebase/Config"
import  firebase  from 'firebase'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'

const Home = ({ navigation, route }) => {
    const [artist, setArtist] = useState()
    const [album, setAlbum] = useState()
    const [year, setYear] = useState()
    const [track, setTrack] = useState();
    const [genre, setGenre] = useState();
    const [uid, setUid] = useState();

    const [music, setMusic] = useState();
    var db = firebase.firestore();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user)
                setUid(user.uid)
            }
        });



    })

    const Update = () => {
        db.collection("Bookmark").doc(uid).collection("music").doc().update({
            year,
            track,
            genre,
            artist,
            album
        })

    }
    const setData = () => {
        db.collection("Bookmark").doc(uid).collection('music').add({ track, artist, album, genre, year }).then(() => {
            alert('Bookmark added successfully')
        })

    }

    //    Code below is to retrieve the data that was inserted into the bookmark
    const displayData = () => {

        {
            navigation.navigate("Display"), {
                list: music
            }
        }


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
                    onChangeText={((artist) => setArtist(artist))} />

                <TextInput style={styles.input}
                    placeholder='Album'
                    onChangeText={((album) => setAlbum(album))} />

                <TextInput style={styles.input}
                    placeholder='Genre'
                    onChangeText={((genre) => setGenre(genre))} />

                <TextInput style={styles.input}
                    placeholder='Year'
                    onChangeText={((year) => setYear(year))} />

                <TextInput style={styles.input}
                    placeholder='Track Title'
                    onChangeText={((track) => setTrack(track))} />
                <View style={styles.btnContainer}>
                    {/* Buttons */}
                    <TouchableOpacity onPress={setData}>
                        <Text style={styles.bookmarkBtn}>Add Bookmark</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={displayData}>
                        <Text style={styles.bookmarkBtn2}>Show</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Update()}>
                        <Text style={styles.bookmarkBtn2}>Update</Text>
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity onPress={signOut}>Sign out</TouchableOpacity> */}

            </View>

        </View>
    )

}

export default Home

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
