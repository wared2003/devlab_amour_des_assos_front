import React from 'react';
import {Text, View, ScrollView, StyleSheet, Image} from "react-native";
import SearchEvent from "./search-event";
import DropdownMenu from 'react-native-dropdown-menu';
import Member from "./member";
import MembreAssoAdmin from "./membre_asso_admin";


class MembreAsso extends React.Component {

    render(){
        var data = [["Année", "Mois", "Semaines", "Jours"],];
        var filter = [["A-Z","Z-A"]];
        return(
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>LéoWorkout</Text>
                        <Text style={styles.descPage}>Membres de l'association</Text>
                    </View>
                    <View style={styles.containerSearch}>
                        <SearchEvent></SearchEvent>
                    </View>


                    <View>
                        <View style={styles.dropContainer}>
                            <View style={styles.dropBox}>
                                <DropdownMenu
                                    style={{borderRadius: 10}}
                                    bgColor={'#FAFAFA'}
                                    tintColor={'#666666'}
                                    activityTintColor={'green'}
                                    // arrowImg={}
                                    // checkImage={}
                                    // optionTextStyle={{color: '#333333'}}
                                    // titleStyle={{color: '#333333'}}
                                    // maxHeight={300}
                                    handler={(selection, row) => this.setState({text: data[selection][row]})}
                                    data={data}
                                />
                            </View>
                            <View style={styles.dropBox}>
                                <DropdownMenu
                                    style={{borderRadius: 10}}
                                    bgColor={'#FAFAFA'}
                                    // tintColor={'#666666'}
                                    activityTintColor={'green'}
                                    // arrowImg={}
                                    // checkImage={}
                                    // optionTextStyle={{color: 'green'}}
                                    // titleStyle={{color: '#333333'}}
                                    // maxHeight={300}
                                    handler={(selection, row) => this.setState({text: data[selection][row]})}
                                    data={filter}
                                />
                            </View>
                        </View>


                        <View style={styles.containerMember}>
                            <View style={styles.titleMember}>
                                <Image source={require('../assets/icon/member.png')} style={styles.cardImg}/>
                                <Text>Membres du bureau</Text>
                            </View>
                            <View>
                                <View><MembreAssoAdmin/></View>
                                <View><MembreAssoAdmin/></View>
                                <View><MembreAssoAdmin/></View>
                            </View>
                        </View>


                        <View style={styles.containerMember}>
                            <View style={styles.titleMember}>

                                <Text>Autres membres</Text>
                            </View>
                            <View>
                                <View><MembreAssoAdmin/></View>
                                <View><MembreAssoAdmin/></View>
                                <View><MembreAssoAdmin/></View>
                            </View>
                        </View>


                    </View>



                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FAFAFA',
        paddingLeft: 24,
        paddingRight: 24,
        flex: 1,
    },
    cardImg: {
        width:30,
        height:30,
        marginRight:11,
    },
    containerMember: {
        marginTop:34,
    },
    titleMember: {
        flex: 1,
        flexDirection:"row",
        alignItems:"center",
    },
    headerContainer: {
        marginTop:67,
        marginLeft:30,
    },
    title:{
        fontSize:24,
        fontWeight:"bold"
    },
    descPage:{
        fontSize:16,
        color:'#a3a5c2',
        marginTop:10,
    },
    containerSearch: {
        marginTop:32,
    },
    dropBox: {
        width: 100,
        zIndex: 100,
        borderWidth:3,
        borderColor: "#E0E1EB"

    },
    dropContainer: {
        flex: 1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "space-between",
        zIndex: 100,
    }

})

export default MembreAsso;