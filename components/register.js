import React from "react";
import {StyleSheet, View, SafeAreaView, TextInput, Button, Text, TouchableOpacity} from "react-native";
import axios from "axios";

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            passwordConfirmation: ''
        }
    }

    _register(){
        if (this.state.passwordConfirmation === this.state.password){
            axios.post('http://192.46.237.170:1337/auth/local/register', {
                password: this.state.password,
                email: this.state.email,
                username: this.state.username
            })
                .then((response) => {
                    console.log(response)
                    if(response.status === 200){
                        this.props.navigation.navigate('Login')
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
        else{
            console.log('erreur password')
        }
    }

    _displayRegister() {
        return(
            <SafeAreaView style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adresse mail"
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />
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
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mot de passe confirmation"
                    textContentType={"password"}
                    secureTextEntry={true}
                    onChangeText={(passwordConfirmation) => this.setState({passwordConfirmation})}
                    value={this.state.passwordConfirmation}
                    onSubmitEditing={() => {this._register(this.props)}}
                />
                <Button
                    onPress={() => {this._register(this.props)}}
                    title="Se connecter"
                    color="#414BCD"
                    accessibilityLabel="Se connecter a l'application"
                />

                <TouchableOpacity style={styles.register} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.text_register}>Se connecter</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }

    render() {
        return (
            <View style={styles.main_container}>
                {this._displayRegister()}
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

export default Register