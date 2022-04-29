import React, {useState } from 'react'
import {StyleSheet, View, Text, Image, TextInput, ScrollView, Button, TouchableOpacity, Platform} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import EventFilterBtn from "./event_filter_btn";
import * as ImagePicker from 'expo-image-picker';
import CustomButton from "./button";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as WebBrowser from 'expo-web-browser';

class AddEvent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isPickerShow: false,
            date: new Date(),
            image: null
        }
    }
    showPicker(){
        this.setState({isPickerShow: true})
    }

    onChange(value){
        console.log(value)
        console.log('value')
        this.setState({date: value})
        if (Platform.OS === 'android') {
            this.setState({isPickerShow: false})
        }
    }
    async pickImage(){
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        this.setState({result})
        if (!result.cancelled) {
            console.log('this.state.image')
            this.setState({image: result.uri});
        }
    }
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

    render() {
        return(
            <View style={styles.view_container}>
                <View style={styles.image_container}>
                    <Image
                        style={styles.image}
                        source={require('../assets/img/event.png')}
                    />
                    <TouchableOpacity style={styles.image_btn}>
                        <Text style={styles.image_btn_txt}>Ajouter une image</Text>
                    </TouchableOpacity>
                    {/*<TouchableOpacity style={styles.back_btn}>*/}
                    {/*    <Image*/}
                    {/*        style={styles.back_icon}*/}
                    {/*        source={require('../assets/action.png')}*/}
                    {/*    />*/}
                    {/*</TouchableOpacity>*/}
                </View>
                <View style={styles.text_container}>
                <Button title="Pick an image from camera roll" onPress={this.pickImage} />
                <Button title="get image" onPress={() => {
                    console.log(this.state.image)
                }} />
                    <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} />
                    <ScrollView>
                    <View style={styles.name}>
                        <TextInput
                            style={styles.input_add_event}
                            placeholder="Nom de l'event"
                            keyboardType="numeric"
                        />
                    </View>
                    <View>
                        <View style={styles.main_information}>
                            <Image source={require('../assets/icon/calendar.png')} style={styles.icon} />
                            <TextInput
                                style={styles.input_add_event}
                                placeholder="Ajouter"
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={styles.main_information}>
                            <Image source={require('../assets/icon/pin.png')} style={styles.icon} />
                            <TextInput
                                style={styles.input_add_event}
                                placeholder="Place"
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={styles.main_information}>
                            <Image source={require('../assets/icon/pin.png')} style={styles.icon} />
                            <TextInput
                                style={styles.input_add_event}
                                placeholder="Adresse"
                            />
                        </View>
                        <View style={styles.main_information}>
                            <Image source={require('../assets/icon/dollars.png')} style={styles.icon} />
                            <TextInput
                                style={styles.input_add_event}
                                placeholder="Prix"
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={styles.main_information}>
                            <Image source={require('../assets/icon/people.png')} style={styles.icon} />
                            <TextInput
                                style={styles.input_add_event}
                                placeholder="Nombre participant"
                                keyboardType="numeric"
                            />
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.aPropos}>A propos</Text>
                        <TextInput
                            style={[styles.input_add_event, styles.input_desc_event ]}
                            placeholder="Description"
                            multiline={true}
                        />
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.aPropos}>Catégories</Text>
                        <EventFilterBtn/>
                    </View>
                        <View>
                            {/* The button that used to trigger the date picker */}
                            {!this.state.isPickerShow && (
                                <View style={styles.btnContainer}>
                                    <Button title="Show Picker" color="purple" onPress={this.showPicker()} />
                                </View>
                            )}

                            {/* The date picker */}
                            {this.state.isPickerShow && (
                                <DateTimePicker
                                    minimumDate={new Date()}
                                    value={this.state.date}
                                    mode={'datetime'}
                                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                    is24Hour={true}
                                    onChange={(event, date) => {
                                        this.setState({...this.state.date, ['date']: date});
                                    }}
                                />
                            )}
                        </View>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.text_button}>AJOUTER</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    input_add_event: {
        paddingLeft: 13,
        backgroundColor: '#ffffff',
        height: 36,
        width: '100%',
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        fontSize: 14,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

    },
    input_desc_event: {
        height: 85,
    },
    image_btn : {
        elevation: 99,
        color: "white",
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 10,
        paddingVertical: 9,
        paddingHorizontal: 13,
        position: 'absolute',
        alignSelf: 'center',
        marginVertical: 0,
        top: '50%',
        transform: [{translateY: '-50%'}]
    },
    back_btn : {
        elevation: 99,
        position: 'absolute',
    },
    back_icon : {
        width: 48,
        height: 48,
    },
    image_btn_txt : {
        color: "white",
        fontSize: 16,
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
    image_container: {

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
        justifyContent: "space-around",
        paddingTop: 17,
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
        marginTop: 18,
    },

    first_text:{
        fontSize: 16,
        lineHeight: 22,
    },
    icon: {
        width: 40,
        height: 40,
        marginRight:14,
    },

    aPropos: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 13,
        marginTop: 20,
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

export default AddEvent