import * as React from 'react';
import AddEvent from "./addEvent";
import JoinEvent from "./joinEvent";
import Friends from "./Friends";
import ListMember from "./list-member";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./home_page";
import {View, Image, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity,} from 'react-native';

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
                <Tab.Screen name="Home" component={Home} options={{headerShown: false,
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
                <Tab.Screen name="Member" component={ListMember} options={{headerShown: false,
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