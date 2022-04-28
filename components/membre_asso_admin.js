import React from 'react';
import Member from "./member";
import {StyleSheet, View} from "react-native";
import DropdownMenu from 'react-native-dropdown-menu';

class MembreAssoAdmin extends React.Component{

    render(){
        var data = [["Membre", "Admin"],];
        return(
            <View style={styles.userContainer}>
                <Member></Member>

                <View style={styles.dropContainer}>
                    <DropdownMenu
                        style={{ borderColor: 'blue', }}
                        bgColor={'#FAFAFA'}
                        // tintColor={'#666666'}
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
            </View>
        )
    }
}

const styles = StyleSheet.create({

    userContainer: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
    },
    dropContainer: {
        width: 100,
        borderWidth:3,
        borderColor: "#E0E1EB"
    }
})

export default MembreAssoAdmin;