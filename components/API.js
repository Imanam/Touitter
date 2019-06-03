
import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class API extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://touiteur.cefim-formation.org/list')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.messages,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.name}, {item.message}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}
