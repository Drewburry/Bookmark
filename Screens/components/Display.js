import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Card, Paragraph, Title } from 'react-native-paper';
import firebase from 'firebase';

const Display = ({ navigation }) => {
    const user = firebase.auth().currentUser
    const id = user.uid
    const [cards, setCards] = useState([])
    const [del, setDel] = useState()

    useEffect(() => {
        firebase
            .firestore()
            .collection('Bookmark').doc(id).collection('music')
            .onSnapshot(snapshot => {
                const lists = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setCards(lists)
            })
    })

    // Code for deleting the data 
    var db = firebase.firestore();
    const handleDel = (id2) => {
        db.collection("Bookmark").doc(id).collection('music').doc(id2).delete()
    }
    const Update = (id,partist,palbum,pgenre,pyear,ptrack) => {
        navigation.navigate('Update', { id:id, partist:partist,palbum:palbum,pgenre:pgenre,pyear:pyear,ptrack:ptrack })
    }

    return (
        <Card style={styles.constainer}>
            {cards.map(list => {
                return (
                    <Card.Content style={styles.contentWrapper}>
                        <Title style={styles.bookmarkHeader}>My Bookmark</Title>
                        <Text style={styles.cardText}><Text style={styles.cardTextTitle}>Artist:</Text> {list.artist}</Text>
                        <Text style={styles.cardText}><Text style={styles.cardTextTitle}>Album:</Text>{list.album}</Text>
                        <Text style={styles.cardText}><Text style={styles.cardTextTitle}>Genre:</Text> {list.genre}</Text>
                        <Text style={styles.cardText}><Text style={styles.cardTextTitle}>Year:</Text> {list.year}</Text>
                        <Text style={styles.cardText}><Text style={styles.cardTextTitle}>Track:</Text> {list.track}</Text>
                        <View style={styles.btnContainer}>

                            <TouchableOpacity onPress={() => handleDel(list.id)}>
                                <Text style={styles.delete}>Delete</Text>
                            </TouchableOpacity>

                            <TouchableOpacity >
                                <Text style={styles.update} onPress={() => Update(list.id, list.artist, list.album, list.genre, list.year, list.track)}>Update</Text>
                            </TouchableOpacity>
                        </View>
                    </Card.Content>
                )
            })}

        </Card>
    )
}

export default Display

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    bookmarkHeader: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    contentWrapper: {
        backgroundColor: '#F3F0D7',
        shadowOpacity: 0.5,
        shadowOffset: { width: -2, height: 3 },
        flex: 4,
        textAlign: 'center',
        marginTop: 15,
        borderWidth: 2,
        width: 400,
        height: 100,
        borderRadius: 10,
        borderStyle: 'solid',
        padding: 5,
    },
    cardTextTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    cardText: {
        fontSize: 20,
    },
    btnContainer: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        marginTop: 10,
    },
    delete: {
        width: 100,
        height: 40,
        backgroundColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        color: '#fff',
        paddingTop: 8,
    },
    update: {
        width: 100,
        height: 40,
        backgroundColor: 'green',
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        color: '#fff',
        paddingTop: 8,
    },
})
