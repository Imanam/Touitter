import React, { Component } from 'react';
import { Alert, Button, Text, TextInput, View, TouchableHighlight, StyleSheet } from 'react-native';
import { postMsg } from "../api/apiRN"; // il faut que le nom de function doit respecter sur cet syntax



export default class SendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
            message: '',
            name: '',        
        };
    }
    
      
    submitMessage = () => {
        const {name, message} = this.state;
        // postMsg(name, message, (response) => alert((Object.entries(response)[0][0]))){
        postMsg(name, message, (response) => {
            // alert(Object.entries(response)[0][0]);
            if(Object.entries(response)[0][1]===true){
                Alert.alert(
                    'Youpi',
                    'Your message has been sent!!!!',)
            }else{
                alert(Object.entries(response)[0][1]); 
            }
        
        // postMsg(name, message, (response) => this._simpleAlertHandler())

        }),
        this.setState({
            message: ""
        })
    }


  render() {
    return (
      <View style={s.form}>
        <TextInput
          style={{height: 40}}
          placeholder="Type your name!"
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Type your message!"
          onChangeText={(message) => this.setState({message})}
          value={this.state.message}
          />
         

        <TouchableHighlight onPress={this.submitMessage} style={s.button}>
            <Text style={[s.buttonText]} >Send</Text>
        </TouchableHighlight>        
      </View>
    );
  }
}

const s = StyleSheet.create({
    form: {
        backgroundColor: "#e6e6ff",
        borderRadius: 10,
        marginVertical : 10,
        // alignItems: "center",

    },
    button: {
        backgroundColor: "#9999ff",
        paddingHorizontal: 20,
        paddingVertical : 4,
        marginTop: 20,
        borderRadius: 10,
        // width: 150,
        alignItems: "center",
        marginHorizontal : "auto",
    },
    buttonText : {
        fontSize: 20,
        fontWeight: "bold",
        color: 'white',
        
    }
})
