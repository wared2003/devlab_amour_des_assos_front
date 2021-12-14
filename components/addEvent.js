import React from "react";
import { StyleSheet, View, Text} from "react-native";

class AddEvent extends React.Component{

        _renderAddEvent(){
            return(
                <View style={styles.main_container}>
                    <Text>je suis du text</Text>
                </View>
                );

        };

    render() {
        return this._renderAddEvent();
    }
}
const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },

})

export default AddEvent