import React from "react";
import {StyleSheet, View, SafeAreaView, TextInput, Button, Text, TouchableOpacity} from "react-native";
import axios from "axios";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    _login(){
        axios.post('http://192.46.237.170:1337/auth/local', {
            identifier: this.state.username,
            password: this.state.password
        })
            .then((response) => {
                console.log(response)
                if(response.status === 200){
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
                    placeholder="Nom d'utilisateur"
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
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
                <Button
                    onPress={() => {this._login(this.props)}}
                    title="Se connecter"
                    color="#414BCD"
                    accessibilityLabel="Se connecter a l'application"
                />

                <TouchableOpacity style={styles.register} onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.text_register}>S'inscrire</Text>
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
    },
    form:{
        margin: 'auto',
        width: '80%',
    },

    input:{
        marginBottom: '2rem',
    },

    register:{
        marginTop: '2rem'
    },

    text_register:{
        textAlign: 'center',
    }
})

export default Login