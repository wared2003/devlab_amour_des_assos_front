import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {autoCapitalize} from "react-native/Libraries/DeprecatedPropTypes/DeprecatedTextInputPropTypes";

class EventCard extends React.Component {
    render() {
        return (
            <View style={styles.card} >
                <View style={styles.leftPart}>
                    <Image source={require('../assets/content.png')} style={styles.cardImg}/>
                    <View style={styles.date}>
                        <Text style={styles.dateDay}>25</Text>
                        <Text style={styles.dateMonth}>Nov</Text>
                    </View>
                </View>
                <View style={styles.rightPart}>
                    <Text style={styles.eventTitre}>Titre de l'évenement</Text>
                    <Text style={styles.eventDescription}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia sadipscing elitr sed dia </Text>
                    <Text style={styles.eventPrix}>15€</Text>
                </View>
            </View>
        );
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
    eventTitre:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    eventDescription:{
        marginTop: 10,
        fontSize: 12,
        color: '#A3A5C2',
        fontWeight: '400',
        paddingRight: 8,
    },
    eventPrix:{
        marginLeft: 'auto',
        color: '#232A85',
        fontSize: 14,
    },
})


export default EventCard;
