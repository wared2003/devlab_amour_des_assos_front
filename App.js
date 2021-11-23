import React from 'react';
import EventCard from "./components/event-card";
import EventFilterBtn from "./components/event_filter_btn"
import {StyleSheet, View} from 'react-native'
export default class App extends React.Component {
  render() {
    return (
        <View style={styles.body}>
          <EventFilterBtn></EventFilterBtn>
          <EventCard></EventCard>
        </View>
    )
  }

}

const styles = StyleSheet.create({
  body: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
    flex: 1,
    backgroundColor: '#FAFAFA',
  }
})