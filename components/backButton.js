import React from "react";
import {StyleSheet, TouchableOpacity, Image, View} from "react-native";

class BackButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            event : undefined,
        }
    }

    _button(){
        return(
            <View>
                <TouchableOpacity style={styles.buttonBack} onPress={() => this.props.navigation.goBack()}>
                    <Image style={styles.backIcon} source={require('../assets/icon/arrow_back.png')}/>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return(
            this._button()
        )
    }
}

const styles = StyleSheet.create({
    buttonBack:{
      height: 27,
      width: 27,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#E0E1EB',
      borderRadius: '50%',
    },
    backIcon:{
        height: 11,
        width: 7,
    }
})

export default BackButton