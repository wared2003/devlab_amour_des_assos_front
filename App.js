import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./components/home_page";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddEvent from "./components/addEvent";
import JoinEvent from "./components/joinEvent";
import Login from "./components/login";
import Register from "./components/register";
import Friends from "./components/Friends";


const Tab = createBottomTabNavigator();


//pour chaque page qui contient une navigation de type stack, creer une navigation homestack comme suit puis l'inclure dans la bar de navigation tabscreen.

//navigation stack de la homepage:
//<headerShown : false>permet de ne pas afficher le header.
const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Login" component={Login}/>
            <HomeStack.Screen name="Register" component={Register}/>
            <HomeStack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <HomeStack.Screen name="JoinEvent" component={JoinEvent} />
            <HomeStack.Screen name="Friends" component={Friends}/>
        </HomeStack.Navigator>
    );
}






//bar de navigation general :
const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator >
                <Tab.Screen name="Home" component={HomeStackScreen} options={{headerShown: false}}/>
                <Tab.Screen name="addEvent" component={AddEvent} options={{headerShown: false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;

