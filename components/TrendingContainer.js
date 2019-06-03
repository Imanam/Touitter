import React, { Component } from 'react';
import { Alert, TouchableHighlight, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import Trending from "./Trending";
import { getTrending } from "../api/apiRN"; // il faut que le nom de function doit respecter sur cet syntax




export default class TrendingContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            trendingList:[],            
        }
        this.getListTrending();        
    }
    getListTrending(){
        getTrending(0, (response) => {
            let list;
            list = Object.entries(response).sort((a, b) => b[1] - a[1]),
            // list = list.slice(0, 30)
            // console.log(list);
        
        this.setState({
            // response est "callback(JSON.parse(request.responseText));" de TouitAPI.js
            trendingList: list         
        })
        // trendingList = Object.entries(trendingList).sort((a, b) => a[1] - b[1])

        })
    }

    componentDidMount(){
        setInterval(() => this.getListTrending(), 5000);
    }

    render(){
        const { trendingList } = this.state;
        Object.keys(trendingList).forEach(function(key) {
            // console.log(key, this[key]);            
          },trendingList);


        return (
           
            <ScrollView contentContainerStyle={styles.contentContainer} style={styles.container}>
                
                { trendingList.map( (trend, index) => 
                    <Trending 
                                // transformation de JSON a JSX
                                // pour rafrechissement il faut mettre key={index} qui est proprieté genérique 
                                key={index} 
                                word={trend[0]} 
                                count={trend[1]}
                    />// il faut mettre key={index} pour ameliorer la performance                    
                )}    

                {/* {Object.keys(trendingList).map(key => (
                // {Object.keys(trendingList).map(key => (
                    <Text key={key}>
                    {trendingList[key][0]} 
                    {trendingList}
                    </Text>
                ))} */}
                                
            
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        // maxHeight : 500,
    },
    contentContainer: {
        // paddingVertical: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

        // paddingTop: 20,
        // paddingBottom : 80,
    }
  });