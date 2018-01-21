import React from 'react'
import { Image, Text, View } from 'react-native'
import Row from './Row'
import RowSection from './RowSection'

const TrainDetails = (props) => {

  const train = {apo, wra1, ews, wra2} = props.metabasi.segments[0]

  return (
    <Row>
      <RowSection>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around'
        }}>
          <Text>{train.apo}</Text>
          <Text>{train.wra1}</Text>
        </View>
        <View style={{
          flex: 3,
          flexDirection: 'row',
        }}>
          <Image
            style={{width: 200, height: 50, flex: 2}}
            source={require('./arrow.jpg')}
          />
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'flex-end'

        }}>
          <Text>{train.ews}</Text>
          <Text>{train.wra2}</Text>
        </View>
      </RowSection>
    </Row>
  )
}

export default TrainDetails