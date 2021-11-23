import React from 'react';
import {View, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

class Navbar extends React.Component {
    render() {
        return (
            <View style={styles.navbar}>
                <TouchableOpacity>
                    <Image source={require('../assets/home.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/calendar.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/people.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/user.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    navbar:{
        height: 64,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,

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

        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    }

})


export default Navbar;
