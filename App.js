import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JoinEvent from "./components/joinEvent";
import TEMPcomponent from "./components/TEMPcomponent";
import backButton from "./components/backButton";
import {Image, TouchableOpacity} from "react-native";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="test"
                    component={TEMPcomponent}
                    options={{ title: 'Bienvenue'}}
                />
                <Stack.Screen
                    name="Event"
                    component={JoinEvent}
                    options={{
                        title: '',
                        // header background is transparent
                        headerTransparent: 'true',
                        headerStyle:{
                            // remove border bottom and shadow on header
                            elevation: 0,
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },

                        // headerBackImageSource: () => ('../assets/icon/arrow_back.png')

                        // headerLeft: (props) => {
                        //     return(
                        //         <TouchableOpacity onPress={() => navigation.navigate('text')}>
                        //             <Image style={{height: 27, width: 27, marginLeft: 16}} source={require('./assets/icon/arrow_back.png')}/>
                        //         </TouchableOpacity>
                        //     )
                        // }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;