import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TextInput, ScrollView} from "react-native";
import CustomTextInput from "./TextInput";
import EventFilterBtn from "./event_filter_btn";
import CustomButton from "./button";
class AddEvent extends React.Component{


    render() {
        return(
            <ScrollView>
                <View style={styles.main_container}>
                    <Image
                        style={styles.eventImg}
                        source={require('../assets/img/event.png')}
                    />
                    <View style={styles.formWrapper}>
                        <View style={styles.name}>
                            <CustomTextInput placeHolder={"Nom de l'évent"}/>
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