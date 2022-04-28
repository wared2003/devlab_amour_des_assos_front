import React from 'react';
import Member from "./member";
import MemberAdmin from "./member_admin";
import {StyleSheet, View, Text, Image, TextInput, ScrollView, FlatList} from "react-native";
import DropdownMenu from 'react-native-dropdown-menu';

class MembreAssoAdmin extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            events: [],
            isLoading: false //no loading by default
        }
    }

    render(){
        var data = [["Membre", "Admin"],];
        return(
            <ScrollView style={styles.scrollView}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Titre de l'évènement</Text>
                    <Text style={styles.descPage}>Participants à l'évènement</Text>
                </View>
                <MemberAdmin/>

                <FlatList
                    data={this.state.events}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <MemberAdmin event={item} eventDetail={this.props}/>}
                />
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        width: "90%",
        alignSelf: "center",
    },
     userContainer: {
         flex: 1,
         flexDirection: "row",
         justifyContent: "center",
         alignItems: "center",
         marginBottom: 8,
     },
    dropContainer: {
        width: 100,
        borderWidth:3,
        borderColor: "#E0E1EB"
    },
    headerContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginTop:64,
        marginBottom: 32,
        alignSelf: "center",
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

})

export default MembreAssoAdmin;