import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './app/components/Header'
import TrainList from './app/components/lists/TrainList'

export default class App extends Component<{}> {
  render() {
    return (
      <View>
        <Header headerText={'Train Schedule'} />
        <TrainList/>
      </View>
    );
  }
}
