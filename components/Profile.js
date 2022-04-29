import React, { useState } from 'react'
import {StyleSheet, View, Text, Image, TextInput, ScrollView, FlatList, TouchableOpacity} from "react-native";
import CustomTextInput from "./TextInput";
import EventFilterBtn from "./event_filter_btn";
import CustomButton from "./button";
import EventCard from "./event-card";
import EventCardWait from "./event-card-wait";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getAssoByUser, getMe, getMyEvents} from "../API/api";
class Profile extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            events: [],
            user: [],
            isLoading: false //no loading by default
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('@jwt:key')
            .then(jwt => {
                getMyEvents(jwt).then(data => {
                    this.setState({
                        events: data.data
                    })
                    console.log(data.data)
                })
                getMe(jwt).then(data => {
                    this.setState({
                        user: data.data
                    })
                    console.log(data.data)
                })
            })
    }

    logout(){
        AsyncStorage.clear()
        this.props.navigation.navigate('Login')
    }


    render() {
        return(


            <ScrollView style={styles.scrollView}>
                <View>
                </View>
                <View style={styles.profileHeader}>
                    <View style={styles.profileHead}>
                        <Image
                            style={styles.ProfileImg}
                            source={require('../assets/img/profile.png')}
                            accessibilityLabel={'profile\'s image'}
                        />
                    </View>
                    <View style={styles.modifyPicture}>
                        <Image
                            style={styles.pencilImg}
                            source={require('../assets/img/profile.png')}
                            accessibilityLabel={'pencil\'s icon'}
                        />
                    </View>
                    <View style={styles.profileHeaderTexts}>
                        <Text style={styles.profileName}>{this.state.user.firstName} {this.state.user.lastName}</Text> {/*Name Profile*/}
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.logout()
                    }}>
                        <Text style={styles.text_button}>Déconnections</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.profileSettings}>
                        <View style={styles.profileSet}>
                            <Image
                                style={styles.settingImg}
                                source={require('../assets/icon/setting.png')}
                                accessibilityLabel={'setting\'s icon'}
                            />
                            <Text style={styles.profileSettingsText}>Paramètres</Text>
                        </View>
                        <Image
                            style={styles.ProfileSettingsArrowImg}
                            source={require('../assets/icon/arrow_back.png')}
                            accessibilityLabel={'arrow\'s icon'}
                        /> {/*Pas la bonne icon*/}
                    </View>
                    <View style={styles.profileSettings}>
                        <View style={styles.profileSet}>
                            <Image
                                style={styles.settingImg}
                                source={require('../assets/icon/bells.png')}
                                accessibilityLabel={'setting\'s icon'}
                            />
                            <Text style={styles.profileSettingsText}>Notifications</Text>
                        </View>
                        <Image
                            style={styles.ProfileSettingsArrowImg}
                            source={require('../assets/icon/arrow_back.png')}
                            accessibilityLabel={'arrow\'s icon'}
                        /> {/*Pas la bonne icon*/}
                    </View>
                    <View style={styles.profileSettings}>
                        <View style={styles.profileSet}>
                            <Image
                                style={styles.settingImg}
                                source={require('../assets/icon/info.png')}
                                accessibilityLabel={'setting\'s icon'}
                            />
                            <Text style={styles.profileSettingsText}>A Propos</Text>
                        </View>
                        <Image
                            style={styles.ProfileSettingsArrowImg}
                            source={require('../assets/icon/arrow_back.png')}
                            accessibilityLabel={'arrow\'s icon'}
                        /> {/*Pas la bonne icon*/}
                    </View>
                </View>
                <View>
                    <Text style={styles.profileEvents}>Événements inscrit</Text>
                </View>

                <FlatList
                    data={this.state.events}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <EventCardWait event={item} eventDetail={this.props}/>}
                />

            </ScrollView>

        );
    }
}
const styles = StyleSheet.create({
    scrollView: {
        width: "90%",
        alignSelf: "center",
    },
    profileHeader: {
        alignItems: "center",
    },
    profileHeaderTexts: {
        flex: 1,
        alignItems: "center",
        marginBottom: 40,
    },
    profileSettings: {
        flex: 1,
        flexDirection: "row",
    },
    profileSet: {
        flex: 1,
        marginBottom: 24,
        flexDirection: "row",
    },
    leaveImg: {
        height: 18,
        width: 18,
        position: "absolute",
        top: 16,
        right: 0,
    },
    settingImg: {
        height: 18,
        width: 18,
        backgroundColor: '#E0E1EB',
        marginRight: 24,
        borderRadius: 10,
    },
    ProfileSettingsArrowImg: {
        height: 18,
        width: 18,
        borderRadius: 18,
        backgroundColor: '#E0E1EB',
        marginRight: 24,
        transform: [{ rotate: "180deg" }],
    },
    profileHead: {
        padding: 32,
    },
    modifyPicture: {
        height: 24,
        width: 24,
    },
    PencilImg: {
        height: 18,
        width: 18,
    },
    ProfileImg: {
        height: 128,
        width: 128,
        borderRadius: 128,
    },
    profileName: {
        fontWeight: 600,
        color: '#14151F',
        fontSize: 24,
        lineHeight: 32.68,
    },
    profileStudies: {
        fontWeight: 400,
        color: '#A3A5C2',
        fontSize: 18,
        lineHeight: 24.51,
    },
    profileEvents: {
        fontWeight: 400,
        color: '#14151F',
        fontSize: 16,
        lineHeight: 21.79,
        marginBottom: 16,
        marginTop: 16,
    },

    button: {
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 12,
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

export default Profile