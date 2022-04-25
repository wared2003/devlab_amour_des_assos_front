import React from 'react';
import EventFilterBtn from "./event_filter_btn";
import SearchEvent from "./search-event";
import {StyleSheet, View, ScrollView, Image, Text, TouchableOpacity, FlatList} from 'react-native'
import JoinEvent from "./joinEvent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getCategory, getEvent} from "../API/api";
import EventCard from "./event-card";


export default class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            events: [],
            isLoading: false //no loading by default
        }
    }

    _readData(key){
        try {
            return (AsyncStorage.getItem('@jwt:key'));
        } catch (error) {
            // Error saving data
            console.log('error')
            console.log(error)
        }
    }

    _displayEvent(){
        console.log("Display film with id ")
        this.props.navigation.navigate("JoinEvent")
    }

    componentDidMount() {
        getEvent()
            .then((data)=>{
                this.setState({
                    events: data.data

                })
            })
            .catch((e)=>{
                console.log(e)
            })
    }

    _homepage(){
        return (
            <View style={styles.container}>
                <ScrollView style={styles.body}>
                    <Text style={styles.headerTitre}>Bienvenue</Text>
                    <SearchEvent/>
                    <EventFilterBtn/>
                    <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('JoinEvent')}>
                        <View style={styles.leftPart}>
                            <Image source={require('../assets/content.png')} style={styles.cardImg}/>
                            <View style={styles.date}>
                                <Text style={styles.dateDay}>25</Text>
                                <Text style={styles.dateMonth}>Nov</Text>
                            </View>
                        </View>
                        <View style={styles.rightPart}>
                            <Text style={styles.eventTitre}>Titre de l'évenement</Text>
                            <Text style={styles.eventDescription}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                dia sadipscing elitr sed dia </Text>
                            <Text style={styles.eventPrix}>15€</Text>
                        </View>
                    </TouchableOpacity>
                    <FlatList
                        data={this.state.events}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <EventCard event={item} eventDetail={this.props}/>}
                    />
                </ScrollView>
            </View>
        )
    }


    render() {
        return this._homepage()
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
    },

    headerTitre: {
        color:'#414BCD',
        fontWeight: "600",
        fontSize: 32,
        marginBottom: 16,
        textAlign: "left",
        marginLeft: 8,
    },
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