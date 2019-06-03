import React, { Component } from 'react';
import { Alert, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { sendLike } from "../api/apiRN"; // il faut que le nom de function doit respecter sur cet syntax



export default class Touit extends Component {
    //il y a de props mais pas de state car messageBox est static
    constructor(props) {
        super(props);
        this.state = {
                nbLikes: props.likes,
                touits : props,
                array: [],
            };
        };

    addLike = () => {
        const {id} = this.props;
        let { nbLikes } = this.state;
        sendLike(id, () => {
            this.setState({
                nbLikes: nbLikes + 1
            })
        })
     };
    
    createArray = () => {
        const {array}  = this.state;
        array.push(this.props);
    }
    render() {
        this.createArray();
        // console.log(JSON.stringify(array));
        const { name, message, countDouble} = this.props;
        let { nbLikes } = this.state;
        return ( // une seule div dans JSX
            <View style={s.container}>
                   <Text>{message}</Text>
                    <Text>{name}</Text>
                    <Text>Nb de likes: {nbLikes}</Text>
                    <TouchableHighlight onPress={this.addLike} >
                        <Text>Liker</Text>
                    </TouchableHighlight>
                    { countDouble  && <Text>{countDouble} Times</Text>}
                    
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
        backgroundColor: "#6A5ACD",
        borderColor: "#9370DB",
        borderRadius: 10
    },
    ts: {

    }
});