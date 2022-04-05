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
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {this._register(this.props)}}
                >
                    <Text style={styles.text} >S'inscrire</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.register} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text>Déjà un compte ? <Text style={styles.text_register}>Se connecter</Text></Text>
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

    register:{
        marginTop: 24
    },

    text_register:{
        color: '#414CBD'
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
})

export default Register