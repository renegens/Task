import React, { Component } from 'react'
import {
  ActivityIndicator,
  ListView,
  Text,
  View,
  StyleSheet
} from 'react-native'

import api from '../../services/api/TrainsSchedule'
import TrainRow from './Row'
import TrainDetails from './TrainDetails'

class TrainList extends Component {

  constructor (props) {
    super(props)
    this.state = {
      schedule: [],
      isLoading: true

    }
  }

  componentDidMount () {
    api.getSchedule().then((response) => {
      this.setState({
        isLoading: false,
        schedule: response.data.metabash
      })
    })
  }

  renderTrainSchedule () {
    return this.state.schedule.map(metabasi =>
      <TrainDetails key={metabasi.ttt} metabasi={metabasi}/>)
  }

  render () {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 50}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View>
        {this.renderTrainSchedule}
      </View>
    )
  }
}

export default TrainList
