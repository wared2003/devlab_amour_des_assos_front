import React, {useState} from 'react'
import {StyleSheet, View, Text, Image, TextInput, ScrollView, Button} from "react-native";
import CustomTextInput from "./TextInput";
import EventFilterBtn from "./event_filter_btn";
import CustomButton from "./button";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as WebBrowser from 'expo-web-browser';

class AddEvent extends React.Component{

    // _uploadImage(e){
    //     e.preventDefault()
    //     const formData = new FormData()
    //     const file = document.getElementById('testa').files
    //     formData.append('files', file[0])
    //     let jwt = AsyncStorage.getItem('@jwt:key')
    //     console.log(file[0])
    //     jwt.then(res => {
    //         axios.post("http://192.46.237.170:1337/upload", formData, {
    //             headers:{
    //                 Authorization: 'Bearer ' + res,
    //             }
    //         })
    //             .then((response)=>{
    //                 console.log(response)
    //             }).catch((error)=>{
    //             //handle error
    //             console.log(error)
    //         })
    //     })
    // }

    _handlePressButtonAsync = async () => {
        let jwt = AsyncStorage.getItem('@jwt:key')
        jwt.then(async res => {
            let result = await WebBrowser.openBrowserAsync('http://devlab.edgar-lecomte.fr/?jwt=' + res);
        })
        console.log(result)
    };

    render() {
        return(
            <ScrollView>
                <View style={styles.main_container}>
                        <View style={styles.formWrapper}>
                    <Button title="Open WebBrowser" onPress={this._handlePressButtonAsync} />
                        <View style={styles.name}>
                            <CustomTextInput placeHolder={"Nom de l'évent"} nom={'name'}/>
                        </View>

                        <View style={styles.inputWrap}>
                            <Image source={require('../assets/icon/pin.png')} style={styles.InputIcon} />
                            <View style={styles.placeInput}>
                                <CustomTextInput placeHolder={'Lieux'}></CustomTextInput>
                            </View>
                        </View>
                        <View style={styles.inputWrap}>
                            <Image source={require('../assets/icon/people.png')} style={styles.InputIcon} />
                            <View style={styles.placesInput}>
                                <CustomTextInput placeHolder={'Places Disponibles'}></CustomTextInput>
                            </View>
                        </View>
                        <View style={styles.inputWrap}>
                            <Image source={require('../assets/icon/calendar.png')} style={styles.InputIcon} />
                            <View style={styles.dateInput}>
                                <CustomTextInput placeHolder={'JJ/MM/AAAA'}></CustomTextInput>
                            </View>
                        </View>
                        <View style={styles.inputWrap}>
                            <Image source={require('../assets/icon/dollars.png')} style={styles.InputIcon} />
                            <View style={styles.priceInput}>
                                <CustomTextInput placeHolder={'Prix'}></CustomTextInput>
                            </View>
                        </View>
                    </View>
                    <View style={styles.about}>
                        <Text style={styles.blackTitle}>A propos</Text>
                        <TextInput style={styles.eventDescriptionInput} placeholder={'Description'}></TextInput>
                    </View>
                    <View style={styles.categories}>
                        <Text style={styles.blackTitle}>Categories</Text>
                            <EventFilterBtn/>
                    </View>
                </View>
                <View style={styles.submitBtn}>
                    <CustomButton title={'AJOUTER'}/>
                </View>
            </ScrollView>

        );
    }
}
const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    formWrapper: {
        flex: 1,
        padding: 32,
    },
    eventImg: {
        width: '100%',
        height: 200
    },
    eventName: {
        width: 'auto',
    },
    dateInput:{
        width: 145,
    },
    priceInput:{
        width: 90,
    },
    contactInput:{
        width: 145,
    },
    placesInput:{
        width: 180,
    },

    InputIcon:{
        height: 45,
        width: 45,
        marginTop: 6,
        marginRight: 16,
    },
    inputWrap:{
        flexDirection: "row",
    },
    about:{
        padding: 24,
    },
    eventDescriptionInput:{
            borderRadius: 25,
            paddingLeft: 15,
            backgroundColor: '#ffffff',
            height: 136,
            width: 'auto',
            justifyContent: "flex-start",
            marginBottom: 24,
            flexDirection: "row",
            alignItems: "center",

            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            borderColor: "#EEEEEE",
            borderWidth: 1,
        },
    blackTitle:{
        fontWeight: "700",
        color: '#000000',
        fontSize: 24,
        marginLeft: 16,
        marginBottom: 8,
    },
    categories:{
        paddingLeft: 24,
        paddingRight: 24,
    },
    submitBtn:{
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 54,
        marginBottom: 24,
    }

})

export default AddEvent