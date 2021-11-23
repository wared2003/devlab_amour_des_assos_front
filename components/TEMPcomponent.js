import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import backButton from "./backButton";

class test extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            event : undefined,
        }
    }

    _button() {
        return (
            <View style={styles.container}>
                <backButton/>
                <Text>Open up App.js to start working on your app!</Text>
                <StatusBar style="auto"/>
                <Button title={'GO'} onPress={() => this.props.navigation.navigate('Event')}/>
            </View>
        );
    }

    render() {
        return(
            this._button()
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default test
