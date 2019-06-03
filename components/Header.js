import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Header extends React.Component {
    render(){
        return (
            <View style={s.container}>
                <Text style={[s.h1, s.defaultText]}>Touiteur</Text>
                <Text style={[s.h2, s.defaultText]}>Subtitle.Touiteur</Text>
              
            </View>
        );
    }
}

export default Header;

const s = StyleSheet.create({
    container: {
        alignItems: "center",
        borderWidth: 2,
        margin : 4,
        padding: 10,
        backgroundColor: "#6A5ACD",
        borderColor: "#9370DB",
        borderRadius: 1,
        borderRadius: 10,
        // position: 'absolute'
    },
    defaultText: {
        color: "#fff",
        
        // textTransform: "lowercase"
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    h2: {
        fontSize: 15,
    }
});