// Shows the calendar with a detailed section about today's tasks with a calendar.

import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class TodayTask extends Component {
  render() {
    return(
      <View>
        <Text style={styles.main}>TodayTask</Text>
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