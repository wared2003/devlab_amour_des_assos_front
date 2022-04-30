import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TextInput, ScrollView, FlatList} from "react-native";
import CustomTextInput from "./TextInput";
import EventFilterBtn from "./event_filter_btn";
import CustomButton from "./button";
import EventCard from "./event-card";
import EventCardWait from "./event-card-wait";
class Profile extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            events: [],
            isLoading: false //no loading by default
        }
    }

    render() {
        return(
            <ScrollView style={styles.scrollView}>
                <Image
                    style={styles.returnBackImg}
                    source={require('../assets/icon/arrow_back.png')}
                    accessibilityLabel={'arrow\'s icon'}
                />
                <View style={styles.AssoDetailsHeader}>
                    <Image
                        style={styles.assoImg}
                        source={require('../assets/img/asso.jpg')}
                        accessibilityLabel={'asso\'s logo'}
                    />
                    <Text style={styles.assoName}>IIMPACT</Text> {/*Asso's name*/}
                    <Text style={styles.assoDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque eos facilis optio porro unde vel, vero voluptate voluptatibus. Corporis eius fuga hic ipsam, labore modi nobis repellat sit voluptas?</Text> {/*Asso's desc*/}
                </View>
                <View>
                    <Text style={styles.AssoDetailsEvents}>Événements à venir</Text> {/*meme partie que dans profile*/}
                    <EventCardWait/>
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
    AssoDetailsHeader: {
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
        fontWeight: "600",
        color: '#14151F',
        fontSize: 24,
        lineHeight: 32.68,
        marginTop: 32,
        marginBottom: 32,
    },
    assoDesc: {
        fontWeight: "400",
        color: '#A3A5C2',
        fontSize: 16,
        lineHeight: 21.79,
    },
    AssoDetailsEvents: {
        fontWeight: "400",
        color: '#14151F',
        fontSize: 16,
        lineHeight: 21.79,
        marginBottom: 16,
        marginTop: 16,
    },
})

export default Profile