import React from "react";
import SearchEvent from "./search-event";
import {View, Text, StyleSheet, ScrollView, Image, SafeAreaView,} from 'react-native';
import JoinEvent from "./joinEvent";
import {Collapse, CollapseHeader, CollapseBody,AccordionList} from "accordion-collapse-react-native";

class Friends extends React.Component {


    render(){
        return(
            <View style={styles.container}>
                <ScrollView style={styles.body}>
                    <Text style={styles.headerTitre}>Friends</Text>
                    <SearchEvent placeholder="Titre"/>
                    <Collapse>
                        <CollapseHeader>
                            <View>
                                <View style={styles.box}>
                                    <View style={styles.containerUser} onPress={() => this.props.navigation.navigate('JoinEvent')}>
                                        <View style={styles.containerName}>
                                            <Image source={require('../assets/user-friend.png')} style={styles.cardImg}/>
                                            <Text style={styles.nameUser}>Bernard Dupont</Text>
                                        </View>
                                        <View>
                                            <Image source={require('../assets/icon/plus.png')}  style={styles.iconPlus}/>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={styles.containerBody}>
                            <View style={styles.containerText}>
                                <Text>Soirée Nova</Text>
                                <Text>Soirée DevWeb</Text>
                                <Text>Soirée corcoran</Text>
                                <Text>Soirée catacombes</Text>
                            </View>
                        </CollapseBody>
                        <View style={styles.containerDraw} >
                        <View
                            style={{
                                borderBottomColor: '#BBBEED',
                                borderBottomWidth: 1,
                                marginTop:10,
                            }}
                        />
                    </View>
                    </Collapse>

                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btn: {
        fontSize: 12,
        color: '#ffffff',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
    },
    containerBody: {
        paddingRight: 20,
        paddingLeft: 20,
        marginTop:20,
    },

    containerText: {
        width: '100%',
        height: 100,
        backgroundColor: '#c4c4c4',
        borderRadius: 10,
        paddingLeft: 20,
        paddingTop: 20,
    },

    body: {
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 40,
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    nameUser: {
        fontSize:18,
    },
    box: {
        flex:1,
        marginTop:30,
    },
    containerDraw: {
      paddingRight:30,
      paddingLeft:30,
    },
    headerTitre: {
        color:'#414BCD',
        fontWeight: "600",
        fontSize: 32,
        marginBottom: 16,
        textAlign: "left",
        marginLeft: 8,
    },
    cardImg: {
        borderRadius: 100,
        width:70,
        height:70,
        marginRight:35,
    },
    containerUser: {
        //backgroundColor:'#d94c12',
        borderColor: '#d94c12',
        flex: 2,
        flexDirection:"row",
        alignItems:"center",
        justifyContent: 'space-between',
    },
    iconPlus:{
        width:20,
        height:20,
        color:'#C4C4C4',
    },
    containerName:{
        flex:1,
        flexDirection:'row',
        alignItems:"center"
    }
})

export default Friends;