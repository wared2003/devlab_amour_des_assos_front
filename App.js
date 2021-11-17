import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JoinEvent from "./components/joinEvent";
import TEMPcomponent from "./components/TEMPcomponent";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Event"
                    component={JoinEvent}
                    options={{ title: 'Bienvenue' }}
                />
                <Stack.Screen name="test" component={TEMPcomponent} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;