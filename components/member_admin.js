import React from "react";
import {View, Text, StyleSheet, ScrollView, Image, SafeAreaView,FlatList} from 'react-native';
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
                <View style={styles.delete}>
                    <View style={styles.deleteView}>
                        <Image
                            style={styles.assoDelete}
                            source={require('../assets/icon/delete.png')}
                            accessibilityLabel={'asso\'s logo'}
                        />
                    </View>
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
        color: "#A3A5C2",
    },
    containerMember:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        marginTop:20,
    },
    delete:{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    deleteView: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff',
        borderRadius: 28,
        height: 28,
        width: 28,
    },
    assoDelete: {
        height: 20,
        width: 20,
        alignSelf: "center",
    },
})

export default Member