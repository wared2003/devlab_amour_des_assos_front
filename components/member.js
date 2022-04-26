import React from "react";
import {View, Text, StyleSheet, ScrollView, Image, SafeAreaView,} from 'react-native';
import ViewabilityHelper from "react-native-web/dist/vendor/react-native/ViewabilityHelper";
import TextAncestorContext from "react-native-web/dist/exports/Text/TextAncestorContext";

class Member extends React.Component{
    render() {
        return(
            <View style={styles.containerMember}>
                <View>
                    <Image source={require('../assets/user-friend.png')}  style={styles.cardImg}/>
                </View>
                <View>
                    <Text style={styles.nameMember}>Quentin Drouet</Text>
                    <Text style={styles.nameClasse}>IIM-A2</Text>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({

    nameMember:{
        marginBottom: 10,
        fontSize:14,
        fontWeight:'600'
    },
    cardImg: {
        borderRadius: 100,
        width:55,
        height:55,
        marginRight:18,
    },
    nameClasse:{

    },
    containerMember:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        marginTop:20,
    }
})

export default Member