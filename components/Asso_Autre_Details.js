import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TextInput, ScrollView, FlatList} from "react-native";
import CustomTextInput from "./TextInput";
import EventFilterBtn from "./event_filter_btn";
import CustomButton from "./button";
import EventCard from "./event-card";
import Button from "./button";
import EventCardWait from "./event-card-wait";
import {getAssoById, getEventByAssociation, getUrlImage} from "../API/api";
class AssoDetail extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            events: [],
            asso: [],
            isLoading: false //no loading by default
        }
    }

    componentDidMount(){
        const id = this.props.route.params.params.id
        console.log(id)
        getAssoById(id).then(data => {
            console.log(data.data)
            this.setState({
                asso: data.data,
                isLoading: false
            })
        })
        getEventByAssociation(id).then(data => {
            console.log(data.data)
            this.setState({
                events: data.data,
                isLoading: false
            })
        })
    }

    render() {

        const { asso } = this.state
        let count = 0
        for (let key in this.state.asso['users']){
            count++
        }
        return(
            <ScrollView style={styles.scrollView}>
                {/*<Image*/}
                {/*    style={styles.returnBackImg}*/}
                {/*    source={require('../assets/icon/arrow_back.png')}*/}
                {/*    accessibilityLabel={'arrow\'s icon'}*/}
                {/*/>*/}
                <View style={styles.AssoAutreDetailsHeader}>
                    <Image
                        style={styles.assoImg}
                        source={getUrlImage() + '/assos/' + asso.logo}
                        accessibilityLabel={'asso\'s logo'}
                    />
                    <Text style={styles.assoName}>{asso.name}</Text> {/*Asso's name*/}
                    <Text style={styles.assoDesc}>{asso.description}</Text> {/*Asso's desc*/}
                </View>
                <View>
                    <Text style={styles.AssoAutreDetailsMembres}>Membres</Text> {/*meme partie que dans profile*/}
                    <View style={styles.assoMembres}>
                        <Image
                            style={styles.assoMembreImgUn}
                            source={require('../assets/img/profile.png')}
                            accessibilityLabel={'asso\'s logo'}
                        />
                        <Image
                            style={styles.assoMembreImgDeux}
                            source={require('../assets/img/profile.png')}
                            accessibilityLabel={'asso\'s logo'}
                        />
                        <Image
                            style={styles.assoMembreImgTrois}
                            source={require('../assets/img/profile.png')}
                            accessibilityLabel={'asso\'s logo'}
                        />
                        <Image
                            style={styles.assoMembreImgQuatre}
                            source={require('../assets/img/profile.png')}
                            accessibilityLabel={'asso\'s logo'}
                        />
                        <View style={styles.membersNumber}>
                            <Text style={styles.membersNumberText}>+{count}</Text>
                        </View>
                    </View>
                    <Text style={styles.AssoAutreDetailsEvents}>Événements à venir</Text> {/*meme partie que dans profile*/}
                    <FlatList
                        data={this.state.events}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <EventCardWait event={item} eventDetail={this.props}/>}
                    />

                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    scrollView: {
        width: "90%",
        alignSelf: "center",
    },
    returnBackImg: {
        height: 18,
        width: 18,
        position: "absolute",
        top: 32,
        left: 16,
    },
    AssoAutreDetailsHeader: {
        flex: 1,
        alignItems: "center",
        marginTop: 64,
    },
    assoImg: {
        height: 128,
        width: 128,
        borderRadius: 128,
    },
    assoName: {
        fontWeight: 600,
        color: '#14151F',
        fontSize: 24,
        lineHeight: 32.68,
        marginTop: 32,
        marginBottom: 32,
    },
    assoDesc: {
        fontWeight: 400,
        color: '#A3A5C2',
        fontSize: 16,
        lineHeight: 21.79,
        marginBottom: 32,
    },
    AssoAutreDetailsEvents: {
        fontWeight: 400,
        color: '#14151F',
        fontSize: 16,
        lineHeight: 21.79,
        marginBottom: 16,
        marginTop: 16,
    },
    AssoAutreDetailsMembres: {
        fontWeight: 400,
        color: '#14151F',
        fontSize: 16,
        lineHeight: 21.79,
        marginBottom: 16,
        marginTop: 16,
    },
    assoMembres: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
        transform: [{ translateX: 10 }],
    },
    assoMembreImg: {
        height: 40,
        width: 40,
        borderRadius: 40,
        borderColor: "white",
        borderWidth: 2,
    },
    assoMembreImgUn: {
        height: 40,
        width: 40,
        borderRadius: 40,
        borderColor: "white",
        borderWidth: 2,
        transform: [{ translateX: -10 }],
    },
    assoMembreImgDeux: {
        height: 40,
        width: 40,
        borderRadius: 40,
        borderColor: "white",
        borderWidth: 2,
        transform: [{ translateX: -20 }],
    },
    assoMembreImgTrois: {
        height: 40,
        width: 40,
        borderRadius: 40,
        borderColor: "white",
        borderWidth: 2,
        transform: [{ translateX: -30 }],
    },
    assoMembreImgQuatre: {
        height: 40,
        width: 40,
        borderRadius: 40,
        borderColor: "white",
        borderWidth: 2,
        transform: [{ translateX: -40 }],
    },
    membersNumber: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 40,
        borderRadius: 40,
        borderColor: "red",
        backgroundColor: '#E0E1EB',
        transform: [{ translateX: -50 }],
    },
    membersNumberText: {
        fontWeight: 400,
        color: '#14151F',
        fontSize: 16,
        lineHeight: 21.79,
    },
})

export default AssoDetail