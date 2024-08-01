import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';




const Blog = ({ route }) => {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: item.imageurl }} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.details}>{item.details}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
       
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sub: {
        fontSize: 16,
    },
    details:{
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 20,
        color: '#333', // Dark gray color
        lineHeight: 24, // Line height for better readability
    }
});

export default Blog;
export const BlogScreenOptions={
    headerTitle:"",
}
