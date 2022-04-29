import React from "react";
import { StyleSheet, View, Text,ActivityIndicator, Image, TouchableOpacity } from "react-native";
import {getEventById, getUrlImage} from "../API/api";
import moment from "moment";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import checkout from "./checkout";


import {buyTicket} from "../API/api";
import * as WebBrowser from "expo-web-browser";
// import CheckoutScreen from "./checkout";
// import { getFilmDetailFromApi, getImageFromApi } from "../API/TMDBApi";

class JoinEvent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            event : undefined,
            isLoading: true
        }
    }

    _displayLoading(){
        if(this.state.isLoading){
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large'/>
                </View>
            )
        }

    }

    async getTicket(ticketId) {
        let jwt = AsyncStorage.getItem('@jwt:key')
        jwt.then(jwt =>{
            console.log(jwt)
            buyTicket(ticketId, jwt)
                .then((response)=>{
                    if (response.data.needBilling){

                        jwt.then(async (res) => {
                            let result = await WebBrowser.openBrowserAsync(`http://stripe-devlab.vercel.app?jwt=${res}&paymentIntent=${response.data.stripe.paymentIntent}&publishableKey=${response.data.stripe.publishableKey&success==false}`);
                        })
                    }else{
                        return false
                    }
                })
        })
    }

    componentDidMount(){
        const id = this.props.route.params.params.id
        console.log(id)
        getEventById(id).then(data => {
            console.log(data.data)
            this.setState({
                event: data.data,
                isLoading: false
            })
        })
    }

    _displayEvent() {
        // const { film } = this.state
        const { event } = this.state
        console.log(event)
        if (event !== undefined) {
        return (
                <View style={styles.view_container}>
                    <Image
                        style={styles.image}
                        source={getUrlImage() + "/events/" + event.path}
                    />
                    <View style={styles.text_container}>
                        <Text style={styles.title_text}>{event.name}</Text>
                        <View style={styles.main_information}>
                            <Image style={styles.icon} source={require('../assets/icon/calendar.png')}/>
                            <View style={styles.info}>
                                <Text style={styles.first_text}>{moment(event.date).locale('fr').format('dddd DD MMMM')}</Text>
                                <Text style={styles.seconde_text}>{moment(event.date, "YYYY-MM-DDTH:mm").locale('fr').format('H:mm')}</Text>
                            </View>
                        </View>
                        <View style={styles.main_information}>
                            <Image style={styles.icon} source={require('../assets/icon/pin.png')}/>
                            <View style={styles.info}>
                                <Text style={styles.first_text}>{event.namePlace}</Text>
                                <Text style={styles.seconde_text}>{event.adresse}</Text>
                            </View>
                        </View>
                        <View style={styles.main_information}>
                            <Image style={styles.icon} source={require('../assets/icon/dollars.png')}/>
                            <View style={styles.info}>
                                <Text style={styles.first_text}>{event.price} €</Text>
                            </View>
                        </View>
                        <View style={styles.main_information}>
                            <Image style={styles.icon} source={require('../assets/icon/people.png')}/>
                            <View style={styles.info}>
                                <Text style={styles.first_text}>Place : {event.placeRemaining} / {event.placeNumber}</Text>
                            </View>
                        </View>
                        <Text style={styles.aPropos}>A propos</Text>
                        <Text style={styles.description_aPropos}>{event.description}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => {this.getTicket(event.id)}}>
                            <Text style={styles.text_button}>M'INSCRIRE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )

        }
    }
    
    render(){
        return (
            <View style={styles.main_container}>
                {this._displayLoading()}
                {this._displayEvent()}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    view_container: {
        flex: 1,
    },
    image: {
        height: 240,
        margin: 0,
    },

    text_container: {
        position: "absolute",
        top: 220,
        bottom: 0,
        right: 0,
        left: 0,
        paddingLeft: 24,
        paddingRight: 24,
        backgroundColor: '#FAFAFA',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        color: '#14151F',
        justifyContent: "space-around"
    },
    title_text: {
        // fontFamily: 'Open Sans',
        fontWeight: '600',
        fontSize: 24,
        flexWrap: 'wrap',
        marginTop: 16,
        marginBottom: 24,
        textAlign: 'left',
    },

    main_information: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },

    first_text:{
        fontSize: 16,
        lineHeight: 22,
    },

    seconde_text:{
        fontSize: 12,
        lineHeight: 16,
    },

    icon: {
        width: 40,
        height: 40,
        marginRight:8,
    },

    aPropos: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 22
    },

    description_aPropos: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22
    },

    button: {
        width: '90%',
        paddingVertical: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 24,
        backgroundColor: '#414BCD',
        borderRadius: 20,
        bottom: 0,
    },

    text_button: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 16,
        textAlign: "center",
    }

})

export default JoinEvent