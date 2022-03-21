import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import moment from "moment";

class OtherAssoCard extends React.Component {

    render() {
        const {event, eventDetail} = this.props
        return (
            <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Event')}>
                <View style={styles.leftPart}>
                    <Image source={require('../assets/content.png')} style={styles.cardImg}/>
                </View>
                <View style={styles.rightPart}>
                    <Text style={styles.eventTitre}>{event.name}</Text>
                    <Text style={styles.eventDescription}>{event.description}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        height: 107,
        borderRadius: 15,
        width: 'auto',
        flexDirection: "row",
        padding: 8,
        backgroundColor: '#ffffff',
        marginBottom: 24,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    leftPart: {
        flex: 1,
    },
    cardImg: {
        borderRadius: 14,
        height: 88,
        width: 107,
    },
    rightPart: {
        flex: 2,
        paddingLeft: 12,
        position: "relative"
    },
    date: {
        position: "relative",
        marginLeft: 'auto',
        left: 3,
        bottom: 25,
        height: 32,
        width: 31,
        backgroundColor: '#FBCA6A',
        borderRadius: 5,
    },
    dateDay: {
        fontSize: 14,
        color: '#232A85',
        textAlign: "center",
    },
    dateMonth: {
        marginTop: -3,
        fontSize: 10,
        color: '#232A85',
        textAlign: "center",
    },
    eventTitre: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    eventDescription: {
        marginTop: 10,
        fontSize: 12,
        color: '#A3A5C2',
        fontWeight: '400',
        paddingRight: 8,
    },
    eventPrix: {
        position: "absolute",
        bottom: 0,
        right: 10,
        color: '#232A85',
        fontSize: 14,
    },
})


export default OtherAssoCard;
