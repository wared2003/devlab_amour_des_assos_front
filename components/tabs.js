import * as React from 'react';
import AddEvent from "./addEvent";
import JoinEvent from "./joinEvent";
import Friends from "./Friends";
import ListMember from "./list-member";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "./home_page";
import MembreAsso from "./membre_asso";
import {View, Image, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity,} from 'react-native';
import login from "./login";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "./login";
import Register from "./register";
import AsyncStorage from "@react-native-async-storage/async-storage";

function checkJwt(){
    AsyncStorage.getItem('@jwt:key').then(jwt => {
        return jwt === null || jwt === 'undefined'
    })
}

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            {checkJwt ? (
                <HomeStack.Screen name="Login" component={Login}/>
            ) : (null)}
            <HomeStack.Screen name="JoinEvent" component={JoinEvent}/>
            <HomeStack.Screen name="Friends" component={Friends}/>
            <HomeStack.Screen name="Register" component={Register}/>
        </HomeStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#FFFFFF',
                        height: 60,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                    }
                }}>
                {/*<Tab.Screen name="Home" component={HomeStackScreen} options={{headerShown: false}}/>*/}
                <Tab.Screen name="HomeStack" component={HomeStackScreen} options={{headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View style={styles.container}>
                            <Image source={require('../assets/home.png')}
                                   resizeMode='contain'
                                   style={{
                                       width:25,
                                       height:25,
                                       opacity: focused ? 1 : 0.5,

                                   }}
                            />

                        </View>
                    )}}/>
                <Tab.Screen name="addEvent" component={AddEvent} options={{headerShown: false ,
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Image source={require('../assets/calendar.png')}
                                   resizeMode='contain'
                                   style={{
                                       width:25,
                                       height:25,
                                       opacity: focused ? 1 : 0.5,
                                   }}/>

                        </View>
                    )}}/>
                <Tab.Screen name="Friends" component={Friends} options={{headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Image source={require('../assets/people2.png')}
                                   resizeMode='contain'
                                   style={{
                                       width:25,
                                       height:25,
                                       opacity: focused ? 1 : 0.5,

                                   }}/>
                        </View>
                    )}}/>
                <Tab.Screen name="Member" component={MembreAsso} options={{headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Image source={require('../assets/user2.png')}
                                   resizeMode='contain'
                                   style={{
                                       width:25,
                                       height:25,
                                       opacity: focused ? 1 : 0.5,

                                   }}/>
                        </View>
                    )}}/>
            </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
 homeImage:{
     opacity: 0.2
 }
})

export default Tabs