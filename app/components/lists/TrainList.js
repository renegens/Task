import React, {Component} from 'react';
import {
    AppRegistry,
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';

import api from '../../services/api/TrainsSchedule';

class TrainList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          schedule: []
        }
    }

    componentDidMount() {
        api.getSchedule().then((response) => {
            this.setState({
                schedule: response.data.metabash
            })
        });
    }

    renderTrains() {
      return this.state.schedule.map(ride => <Text>{ride.ttt}</Text>)
    }

    render() {


      console.log(this.state)
        return (
            <View>
              {this.renderTrains()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default TrainList;
