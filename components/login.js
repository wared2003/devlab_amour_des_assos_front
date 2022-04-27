import React from "react";
import {StyleSheet, View, SafeAreaView, TextInput, Button, Text, TouchableOpacity} from "react-native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from "./home_page";
import JoinEvent from "./joinEvent";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    _storeData(jwt){
        try {
            AsyncStorage.setItem(
                '@jwt:key',
                jwt
            );
        } catch (error) {
            // Error saving data
            console.log('error')
            console.log(error)
        }
    }

    _readData(key){
        try {
            return (AsyncStorage.getItem('@jwt:key'));
        } catch (error) {
            // Error saving data
            console.log('error')
            console.log(error)
        }
    }

    _login(){
        axios.post('https://127.0.0.1:8000/api/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then((response) => {
                console.log(response)

                if(response.status === 200){
                    this._storeData(response.data.token)
                    console.log('ici')
                    this.props.navigation.navigate('Home')
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    _displayLogin() {
        return(
            <SafeAreaView style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mot de passe"
                    textContentType={"password"}
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    onSubmitEditing={() => {this._login(this.props)}}
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {this._login(this.props)}}
                >
                    <Text style={styles.text} >Se connecter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.register} onPress={() => this.props.navigation.navigate('Register')}>
                    <Text>Toujours pas membre ? <Text style={styles.text_register}>Créer un compte</Text></Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }

    render() {
        return (
            <View style={styles.main_container}>
                {this._displayLogin()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    form:{
        margin: 'auto',
        width: '80%',
        alignItems: "center"
    },

    input:{
        width: '100%',
        marginBottom: 24,
        borderBottomColor: '#D7D7D7',
        borderStyle: "solid",
        borderBottomWidth: 2,
        paddingBottom: 10
    },

    btn:{
        backgroundColor: '#414BCD',
        textAlign: "center",
        borderRadius: 100,
        alignItems: "center"
    },

    text:{
        color: '#FFFFFF',
        padding: 10,
        textTransform: "uppercase",
    },

    register:{
        marginTop: 24,
        textAlign: "center"
    },

    text_register:{
        color: '#414CBD'
    }
})

export default Login