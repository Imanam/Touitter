import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { SIZE } from 'react-native/Libraries/Components/RefreshControl/RefreshControl';
import Header from './components/Header.js';
// import API from './components/API.js';
import SendForm from './components/SendForm.js';
import TouitContainer from './components/TouitContainer';
import TrendingContainer from './components/TrendingContainer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <SendForm/>
        <TouitContainer/>
        {/* <API/> */}
        <TrendingContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 40,
    // paddingBottom: 40,
  },
});
