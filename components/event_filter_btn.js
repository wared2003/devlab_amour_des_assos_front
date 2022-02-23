import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
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
                <View style={styles.btnActive}>
                    <Image source={require('../assets/art.png')} style={styles.btnImg}/>
                    <Text style={styles.btnTxtActive}>Sport</Text>
                </View>
                <View style={styles.btn}>
                    <Image source={require('../assets/alter.png')} style={styles.btnImg}/>
                    <Text style={styles.btnTxt}>Sport</Text>
                </View>
                <View style={styles.btn}>
                    <Image source={require('../assets/work.png')} style={styles.btnImg}/>
                    <Text style={styles.btnTxt}>Sport</Text>
                </View>
                <View style={styles.btn}>
                    <Image source={require('../assets/culture.png')} style={styles.btnImg}/>
                    <Text style={styles.btnTxt}>Sport</Text>
                </View>

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
        backgroundColor: '#E0E1EB',
        borderRadius: 10,

    },
    btnTxt: {
        fontSize: 12,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
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
        backgroundColor: '#414BCD',
        color: '#ffffff',
    },
    btnTxtActive: {
        fontSize: 12,
        color: '#ffffff',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
    },
})


export default EventFilterBtn;
