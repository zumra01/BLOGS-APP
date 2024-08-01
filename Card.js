
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function Card({ item, state }) {
    if (state === true) {
        return (
            <View style={styles.card}>
                <Image style={styles.cardImage} source={{ uri: item.imageurl }} />
                <View style={styles.contentBox}>
                    <Text>{item.title}</Text>
                    <Text>{item.sub}</Text>
                </View>
            </View>
        );
    } else {
        return (
            <View style={styles.cardGrid}>
                <Image style={styles.cardGridImage} source={{ uri: item.imageurl }} />
                <View style={styles.contentGridBox}>
                    <Text>{item.title}</Text>
                    <Text>{item.sub}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginHorizontal: 20,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.51,
        elevation: 2,
        marginVertical: 10,
        width: 'auto',
        height: 120,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
    },
    cardGrid: {
        width: 165,
        height: 250,
        backgroundColor: 'white',
        borderRadius: 20,
        marginHorizontal: 5,
        marginVertical: 10,
        // paddingVertical: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.3,
        borderColor: 'gray',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.51,
        elevation: 2,
    },
    cardImage: {
        resizeMode: 'cover',
        borderRadius: 100,
        marginHorizontal: 20,
        width: 100,
        height: 100,
    },
    cardGridImage: {
        resizeMode: 'cover',
        borderRadius: 50,
        width: 100,
        height: 100,
    },
    contentBox: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    contentGridBox: {
        justifyContent: 'center',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
});