import React from 'react';
import {View, Text, TouchableOpacity, useState, Image, StyleSheet, TouchableHighlight, Pressable} from 'react-native';
import {getCategory} from '../API/api'

class EventFilterBtn extends React.Component {

    constructor(props){
        super(props)
        this.category = []
    }



    componentDidMount() {
        getCategory()
            .then((data)=>{
                this.category = data.data
            })
            .catch((e)=>{
                console.log(e)
            })
    }

    render() {


        return (

            <View style={styles.btnsWrap}>
                {/*<TouchableOpacity style={styles.btn}>*/}
                {/*    <Image source={require('../assets/art.png')} style={styles.btnImg}/>*/}
                {/*    <Text style={styles.btnTxt}>Soirées</Text>*/}
                {/*</TouchableOpacity>*/}
                <Pressable onPress={() => {
                    let category =  console.log(this.category[0].name)
                    console.log(this.category)

                }}
                           style={({ focused }) => [{ borderColor: focused ? '#414BCD' : '#E0E1EB' }, styles.btn ]}>
                    {({ pressed }) => (
                        <View>
                            <Image source={require('../assets/alter.png')} style={styles.btnImg}/>
                            <Text style={styles.btnTxt}>Soirée</Text>
                        </View>
                    )}
                </Pressable>
                <Pressable onPress={() => {
                    console.log(this.category[1].name)
                }} style={({ focused }) => [{ borderColor: focused ? '#414BCD' : '#E0E1EB' }, styles.btn ]}>
                    {({ pressed }) => (
                        <View>
                            <Image source={require('../assets/alter.png')} style={styles.btnImg}/>
                            <Text style={styles.btnTxt}>Sport</Text>
                        </View>
                    )}
                </Pressable>
                <Pressable onPress={() => {
                    console.log(this.category[2].name)
                }}  style={({ focused }) => [{ borderColor: focused ? '#414BCD' : '#E0E1EB' }, styles.btn ]}>
                    {({ pressed }) => (

                        <View>
                            <Image source={require('../assets/alter.png')} style={styles.btnImg}/>
                            <Text style={styles.btnTxt}>Buisness</Text>
                        </View>


                    )}
                </Pressable>
                <Pressable onPress={() => {
                    console.log(this.category[3].name)
                }} style={({ focused }) => [{ borderColor: focused ? '#414BCD' : '#E0E1EB' }, styles.btn ]}>
                    {({ pressed }) => (

                        <View>
                            <Image source={require('../assets/culture.png')} style={styles.btnImg}/>
                            <Text style={styles.btnTxt}>Culture</Text>
                        </View>

                    )}
                </Pressable>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    btnsWrap:{
        display: "flex",
        justifyContent: 'space-between',
        flexDirection: "row",
        marginBottom: 24,
    },
    btn: {
        height: 67,
        width: 67,
        //backgroundColor: '#E0E1EB',
        borderRadius: 10,
        borderWidth : 2,
        // borderColor : '#E0E1EB',
    },
    btnTxt: {
        fontSize: 12,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
        color: '#14151F',
    },
    btnImg: {
        height: 25,
        width: 25,
        marginTop: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    btnActive:{
        height: 67,
        width: 67,
        borderRadius: 10,
        borderColor: '#414BCD',
        borderWidth: 2,
    },
    btnTxtActive: {
        fontSize: 12,
        color: '#414BCD',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
    },
})




export default EventFilterBtn;
