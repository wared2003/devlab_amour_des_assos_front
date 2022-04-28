import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {getUrlImage} from "../API/api";
import moment from "moment";

class MyAssoCard extends React.Component {

    render() {
        const {asso, eventDetail} = this.props
        return (
            <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Event', {id: asso.id})}>
                <View style={styles.imgContainer}>
                    <Image source={getUrlImage() + '/assos/' + asso.logo} style={styles.cardImg}/>
                </View>
                <View style={styles.myAssoContainer}>
                    <Text style={styles.eventTitre}>{asso.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        marginRight: 24,
        height: 'auto',
        borderRadius: 15,
        width: 150,
        flexDirection: "column",
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
    imgContainer: {
        width:'auto',
        height:71,
    },
    cardImg: {
        borderTopLeftRadius:14,
        borderTopRightRadius:14,
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0,
        width:'100%',
        height:'100%',
    },
    myAssoContainer: {
       paddingTop:4,
        paddingBottom:12,
        paddingLeft:9,
    },
    eventTitre: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    eventDescription: {
        marginTop: 10,
        fontSize: 12,
        color: '#A3A5C2',
        fontWeight: '400',
        paddingRight: 8,
    },
})


export default MyAssoCard;
