import {getMsg} from "../api/apiRN";
import React, { Component } from 'react';
import { Alert, TouchableHighlight, Image, StyleSheet, Text, View, FlatList } from 'react-native';
import Touit from "./Touit";








export default class TouitContainer extends Component {

    constructor(props){
        super(props);
        this.i = 0,

        this.state = {
            touits:[],            
        }
      dic = {};
    //   touit = {};
      arrayDic = [];
    }
    nextMessages = () => {
        // console.log("next" + this.i);
        this.getMessage();
        return this.i += 20;
    }
    previousMessage = () => {
        // console.log("previous" + this.i);
        this.getMessage();
        return this.i -= 20;
    }
    getMessage(){
        getMsg(0, (response) => {
        this.setState({
            // response est "callback(JSON.parse(request.responseText));" de TouitAPI.js
            touits: response.messages, // c'est le nom de tableau JSON              
        });
        // console.log(this.state.touits);
        // this.checkSpam();

        
        // touits = this.state.touits.filter((touit, index, list) => {
        //     let next = list[index + 1];
        //     if (next &&(touit.message == next.message && touit.name == next.name)){
        //          if(touit.countDouble){
        //              next.countDouble = touit.countDouble + 1;
        //          } else {
        //              next.countDouble = 2;
        //          }
        //         return false;
        //      }
        //     return true;
        //  });
            
        
            // touits = this.state.touits
            // for (let i = 0; i <= touits.length; i++ ){
            //     let theElement = touits[i]
            //     let theElementBefore = touits[i+1]
                

            //     if (theElement != undefined && theElementBefore != undefined){
                
            //         if (theElement.message === theElementBefore.message && theElement.name === theElementBefore.name){
            //             this.countDouble++; 
            //             console.log("1er " + theElement.message + " : " + theElement.name);
            //             console.log("2eme " + theElementBefore.message + " : " + theElementBefore.name);
            //             console.log("retrun ")
            //             touits = touits.splice(i+1, 1);

            //             if (this.countDouble > 1){
            //                 console.log(this.countDouble);
                        
            //             }

            //         }else {
            //             this.countDouble = 0;
            //         }

            //     }

            // }
            // return touits;
        })
        
    }
    // dic = {};
    // arrayDic = [];
    checkSpam = () => {

        touits = this.state.touits.filter((touit, index, list) => {
            let next = list[index + 1];
            if (next &&(touit.message == next.message && touit.name == next.name)){
                 if(touit.countDouble){
                     next.countDouble = touit.countDouble + 1;
                 } else {
                     next.countDouble = 2;
                 }
                return false;
             }
            return true;
         });
    }
        // this.state.touits
    //     touits = this.state.touits
    
    //     for (let i = 0; i <= touits.length; i++ ){
    //         const theElement = touits[i]
    //         const theElementFollowing = touits[i+1]
            
    //         if (theElement && theElementFollowing){
    //            if (theElement.message === theElementFollowing.message && theElement.name === theElementFollowing.name){
    //                 // console.log("1er " + theElement.message + " : " + theElement.name);
    //                 // console.log("2eme " + theElementFollowing.message + " : " + theElementFollowing.name);
    //                 // console.log("retrun ");
    //                 touits.splice(i, 1);
                    
    //                 if(theElement.countDouble){
    //                     theElementFollowing.countDouble = theElement.countDouble+1;
    //                 }else{
    //                     theElementFollowing.countDouble = 2;
    //                 }
                    

    //             }
    //             // else {
    //             //     theElementFollowing.countDouble = 0;
    //             // }

    //         }

    //     }
    // }

    componentDidMount(){
        setInterval(() => this.getMessage(), 5000);
    }
    // setInterval(function() {
    //     updateTouitContainer(touit_container);
    // }, 5000);


    render() {
        // setState ne doit jamais appeler dans le render(){} ca va faire un boucle infini         
        touits = this.checkSpam();
        let { touits } = this.state;
        // this.checkSpam(touits);
        // console.log(touits);

        // let objectBeforeTheLast = touits[touits.length-2];
        // let countDouble = 1;
        // if (lastObject != undefined && objectBeforeTheLast != undefined){
        //     // console.log('1: ' + lastObject.message)
        //     // console.log('2: '+ objectBeforeTheLast.message)
            
        //     if (lastObject.message === objectBeforeTheLast.message && lastObject.name === objectBeforeTheLast.name){
        //         // console.log('meme message' + touits.length);
        //         countDouble++;
        //         // console.log(countDouble);
        //         let item = touits.pop();
        //         // console.log(JSON.stringify(item));
        //     }else{
        //         countDouble=0;
        //         // console.log('different message' + touits.length);
        //     }
        // }

            // for (let i = 0; i <= touits.length; i++ ){
            //     let theElement = touits[i]
            //     let theElementBefore = touits[i-1]
                

            //     if (theElement != undefined && theElementBefore != undefined){
                   
            //         if (theElement.message === theElementBefore.message && theElement.name === theElementBefore.name){
            //             this.countDouble++; 
            //             // console.log("1er " + theElement.message + " : " + theElement.name);
            //             // console.log("2eme " + theElementBefore.message + " : " + theElementBefore.name);
            //             // console.log("retrun ")
            //             // console.log(touits.splice(i-1, 1));

            //             if (this.countDouble > 1){
            //                 // console.log(this.countDouble);
                           
            //             }

            //         }else {
            //             this.countDouble = 0;
            //         }

            //     }

            // }

        // let lastMessage = JSON.stringify(touits[touits.length-1]);
        // let messageBeforeTheLast = JSON.stringify(touits[touits.length-2]);
        // let countDouble = 0;

        // if (lastMessage === messageBeforeTheLast) {
        //    countDouble ++; 
        // }
        // console.log('dans render : ' + touits[touits.length-1]);
        
        // Object.keys( touits ).forEach(function(key) {
            
        //     console.log(key, this[key]);            
        //   },touits);

        
        return (
            <View className="container touit-container" id="touit-container" style={s.touitContainer}>

                {/* { this.i >= 20 && 20 <= touits.length-this.i?   */}
                { this.i >= 20 ?  

                    <TouchableHighlight onPress={this.previousMessage} >
                        <Text>Previous Messages</Text>
                    </TouchableHighlight> : <Text></Text> 
                }
                                  
                {/* { touits.map( (touit, index) => 
                    (<Touit 
                                // transformation de JSON a JSX
                                // pour rafrechissement il faut mettre key={index} qui est proprieté genérique 
                                key={index} 
                                name={touit.name} 
                                message={touit.message} 
                                likes={touit.likes}
                                timestamp={touit.ts} />), // il faut mettre key={index} pour ameliorer la performance                    
                    )
                } */}
                
                <FlatList
                data={touits.reverse().slice(this.i, this.i+20)}
                    keyExtractor={
                    (item, index) => index.toString()
                    }
                    renderItem={
                    ({item}) => <Touit  {...item}/>
                    }
                />

                {20 <= touits.length - (this.i + 20)?  
                    <TouchableHighlight onPress={this.nextMessages} >
                        <Text>Next messages</Text>
                    </TouchableHighlight> : <Text></Text> 
                }
                            
            </View>
        )
    }
}

const s = StyleSheet.create({
    touitContainer: {
        height: 400,
    }
})
