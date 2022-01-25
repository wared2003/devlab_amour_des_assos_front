import React from 'react';
import { StyleSheet, TouchableOpacity, Text} from 'react-native';

class CustomButton extends React.Component {


    _button(){
        const btnTitle = this.props.title;
        return(
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>{btnTitle}</Text>
            </TouchableOpacity>

        )
    }
    render() {
        return (
         this._button()
        );
    }
}
const styles = StyleSheet.create({
    btn: {
        height: 43,
        width: 'auto',

        backgroundColor: '#414BCD',
        borderRadius: 54,
        textAlign: "center",
        paddingTop: 16,
    },
    btnTxt:{
        fontSize: 16,
        color: '#ffffff',
        fontWeight: "600",
    },
})


export default CustomButton;
