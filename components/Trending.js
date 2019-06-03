import React, { Component } from 'react';
import { Alert, TouchableHighlight, StyleSheet, Text, View } from 'react-native';

export default class Trending extends Component {
    render () {
        const { word, count } = this.props;
        return ( // une seule div dans JSX
            <View style={s.container}>
                    <Text>{word}</Text>
                    <Text>{count}</Text>
            </View>
        );
    }

}

const s = StyleSheet.create({
    container: {
        alignItems: "center",
        borderWidth: 2,
        margin : 4,
        padding: 10,
        backgroundColor: "#cc99ff",
        borderColor: "#9370DB",
        borderRadius: 10,
    },
})