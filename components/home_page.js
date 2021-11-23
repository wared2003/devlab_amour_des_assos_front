import React from 'react';
import EventCard from "event-card";
import EventFilterBtn from "event_filter_btn";
import SearchEvent from "search-event";
import Navbar from "navbar";
import {StyleSheet, View, ScrollView} from 'react-native'

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.body}>
                    <SearchEvent/>
                    <EventFilterBtn/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                </ScrollView>
                <Navbar/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    body: {
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 24,
        flex: 1,
        backgroundColor: '#FAFAFA',
    }
})