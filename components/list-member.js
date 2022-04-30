import React from "react";
import {View, Text, StyleSheet, ScrollView, Image, SafeAreaView,} from 'react-native';
import Member from "./member";

class ListMember extends React.Component {

    render(){
        return(
            <View style={styles.container}>
                <ScrollView style={styles.body}>
                    <View>
                        <Text style={styles.title}>LéoWorkout</Text>
                        <Text style={styles.descPage}>Membres de l'association</Text>
                    </View>
                    <View style={styles.containerMember}>
                        <View style={styles.titleMember}>
                            <Image source={require('../assets/icon/member.png')} style={styles.cardImg}/>
                            <Text>Membres du bureau</Text>
                        </View>
                        <View>
                            <Member/>
                            <Member/>
                            <Member/>
                        </View>
                    </View>

                    <View style={styles.containerOtherMember} >
                        <View style={styles.titleMember}>
                            <Text>Autre membres</Text>
                        </View>
                        <View>
                            <Member/>
                            <Member/>
                            <Member/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    body: {
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 40,
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    title:{
        marginTop: 27,
        fontSize:24,
        fontWeight:"bold"
    },
    descPage:{
        fontSize:16,
        color:'#a3a5c2',
        marginTop:10,
    },
    cardImg: {
        width:30,
        height:30,
        marginRight:11,
    },
    titleMember: {
        flex: 1,
        flexDirection:"row",
        alignItems:"center",
    },
    containerMember: {
        marginTop:34,
    },
    containerOtherMember:{
        marginTop:40,
    }

})

export default ListMember