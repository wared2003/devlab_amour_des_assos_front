import React from "react";
import { StyleSheet, View, Text,ActivityIndicator, Image, TouchableOpacity } from "react-native";
// import { getFilmDetailFromApi, getImageFromApi } from "../API/TMDBApi";

class JoinEvent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            event : undefined,
            isLoading: true
        }
    }

    _displayLoading(){
        if(this.state.isLoading){
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large'/>
                </View>
            )
        }
    }

    // componentDidMount(){
    //     getFilmDetailFromApi(this.props.navigation.getParam('idFilm')).then(data => {
    //         this.setState({
    //             film: data,
    //             isLoading: false
    //         })
    //     })
    // }

    _displayEvent() {
        // const { film } = this.state
        // if (film != undefined) {
            return (
                <View style={styles.view_container}>
                    <Image
                        style={styles.image}
                        source={require('../assets/img/event.png')}
                    />
                    <View style={styles.text_container}>
                        <Text style={styles.title_text}>Nom Event</Text>
                        <View style={styles.main_information}>
                            <Image style={styles.icon} source={require('../assets/icon/calendar.png')}/>
                            <View style={styles.info}>
                                <Text style={styles.first_text}>Vendredi 22 octobre 2021</Text>
                                <Text style={styles.seconde_text}>22H-02H</Text>
                            </View>
                        </View>
                        <View style={styles.main_information}>
                            <Image style={styles.icon} source={require('../assets/icon/pin.png')}/>
                            <View style={styles.info}>
                                <Text style={styles.first_text}>Terminal 7</Text>
                                <Text style={styles.seconde_text}>1 Pl. de la Prte de Versailles, 75015 Paris</Text>
                            </View>
                        </View>
                        <View style={styles.main_information}>
                            <Image style={styles.icon} source={require('../assets/icon/dollars.png')}/>
                            <View style={styles.info}>
                                <Text style={styles.first_text}>15 €</Text>
                            </View>
                        </View>
                        <View style={styles.main_information}>
                            <Image style={styles.icon} source={require('../assets/icon/people.png')}/>
                            <View style={styles.info}>
                                <Text style={styles.first_text}>Encore 150 places</Text>
                            </View>
                        </View>
                        <Text style={styles.aPropos}>A propos</Text>
                        <Text style={styles.description_aPropos}>Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris gravida, dolor quis elementum fermentum, augue erat varius metus, sit amet
                            aliquet lactrequis.</Text>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('test')}>
                            <Text style={styles.text_button}>M'INSCRIRE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )

        // }
    }
    
    render() {
        return (
            <View style={styles.main_container}>
                {this._displayLoading()}
                {this._displayEvent()}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main_container: {
        flex: 1,
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
        justifyContent: "space-around"
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
        marginBottom: 16,
    },

    first_text:{
        fontSize: 16,
        lineHeight: 22,
    },

    seconde_text:{
        fontSize: 12,
        lineHeight: 16,
    },

    icon: {
        width: 40,
        height: 40,
        marginRight:8,
    },

    aPropos: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 22
    },

    description_aPropos: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22
    },

    button: {
        width: '90%',
        paddingVertical: 10,
        margin: 'auto',
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

export default JoinEvent