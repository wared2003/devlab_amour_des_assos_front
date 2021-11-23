import React from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import {autoCapitalize} from "react-native/Libraries/DeprecatedPropTypes/DeprecatedTextInputPropTypes";

class SearchEvent extends React.Component {
    render() {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    placeholder={"Rechercher"}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    input:{
        height: 49,
    }
})


export default EventCard;
