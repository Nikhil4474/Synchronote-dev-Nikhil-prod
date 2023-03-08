// Picture and Biology
// TODO: Add profile picture uploading option

import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from "react-native"

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})