import React from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';

class SearchEvent extends React.Component {
    render() {
        return (
            <View style={styles.searchBar}>
                <Image style={styles.iconSearch} source={require('../assets/search.png')}/>
                <TextInput
                    placeholder="Titre de l'événement"
                    // onChangeText={(text) => this._searchTextInputChanged(text)}
                    returnKeyType= 'search' // met le bouton de retour en mode recherche
                    // onSubmitEditing={() => this._searchFilm()}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    searchBar:{
        borderRadius: 50,
        paddingLeft: 15,
        width: 'auto',
        backgroundColor: '#ffffff',
        height: 50,
        justifyContent: "flex-start",
        marginBottom: 24,
        flexDirection: "row",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderColor: "#EEEEEE",
        borderWidth: 1,
    },

    iconSearch:{
        marginRight: 15,
    }

})


export default SearchEvent;
