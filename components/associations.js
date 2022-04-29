import React from 'react';
import EventFilterBtn from "./event_filter_btn";
import SearchEvent from "./search-event";
import {StyleSheet, View, ScrollView, Text, FlatList} from 'react-native'
import JoinEvent from "./joinEvent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getAsso, getAssoByUser, getCategory, getEvent} from "../API/api";
import OtherAssoCard from "./other-asso-card";
import MyAssoCard from "./my-asso-card";


export default class Associations extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            assoUser: [],
            asso: [],
            events: [],
            isLoading: false //no loading by default
        }
    }

    _readData(key) {
        try {
            return (AsyncStorage.getItem('@jwt:key'));
        } catch (error) {
            // Error saving data
            console.log('error')
            console.log(error)
        }
    }

    // _displayEvent = (idFilm) => {
    //     console.log("Display film with id " + idFilm)
    //     this.props.navigation.navigate("FilmDetail", {idFilm: idFilm})
    // }

    componentDidMount() {
        getAsso()
            .then(data => {
                this.setState({
                    asso: data.data
                })
                console.log(data.data)
            })
        AsyncStorage.getItem('@jwt:key')
            .then(jwt => {
            getAssoByUser(jwt).then(data => {
                this.setState({
                    assoUser: data.data
                })
                console.log(data.data)
            })
        })
        getEvent()
            .then((data) => {
                this.setState({
                    events: data.data

                })
            })
            .catch((e) => {
                console.log(e)
            })
    }

    _associations() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.body}>
                    <Text style={styles.headerTitre}>Associations</Text>
                    <SearchEvent/>
                    <EventFilterBtn/>
                    <Text style={styles.otherAssoTitre}>Mes associations</Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.assoUser}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <MyAssoCard asso={item} assoDetail={this.props}/>}
                    />
                    <Text style={styles.otherAssoTitre}>Autres associations</Text>
                    <FlatList
                        data={this.state.asso}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <OtherAssoCard asso={item} assoDetail={this.props}/>}
                    />
                </ScrollView>
            </View>
        )
    }


    render() {
        return this._associations()
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    body: {
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 24,
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    headerTitre: {
        color: '#414BCD',
        fontWeight: "600",
        fontSize: 32,
        marginBottom: 16,
        textAlign: "left",
        marginLeft: 8,
    },
    otherAssoTitre: {
        color: '#14151F',
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 18,
    },
    card: {
        height: 107,
        borderRadius: 15,
        width: 'auto',
        flexDirection: "row",
        padding: 8,
        backgroundColor: '#ffffff',
        marginBottom: 24,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    leftPart: {
        flex: 1,
    },
    cardImg: {
        borderRadius: 14,
        height: 88,
        width: 107,
    },
    rightPart: {
        flex: 2,
        paddingLeft: 12,
    },
    date: {
        position: "relative",
        marginLeft: 'auto',
        left: 3,
        bottom: 25,
        height: 32,
        width: 31,
        backgroundColor: '#FBCA6A',
        borderRadius: 5,
    },
    dateDay: {
        fontSize: 14,
        color: '#232A85',
        textAlign: "center",
    },
    dateMonth: {
        marginTop: -3,
        fontSize: 10,
        color: '#232A85',
        textAlign: "center",
    },
    eventTitre: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    eventDescription: {
        marginTop: 10,
        fontSize: 12,
        color: '#A3A5C2',
        fontWeight: '400',
        paddingRight: 8,
    },
    eventPrix: {
        marginLeft: 'auto',
        color: '#232A85',
        fontSize: 14,
    },
})