import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from "./components/tabs";





//pour chaque page qui contient une navigation de type stack, creer une navigation homestack comme suit puis l'inclure dans la bar de navigation tabscreen.

//navigation stack de la homepage:
//<headerShown : false>permet de ne pas afficher le header.




//bar de navigation general :
const Navigation = () => {
    return (
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    );
};

export default Navigation;

