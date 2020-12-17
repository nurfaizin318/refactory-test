import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Page
import Login from '../Page/Login';
import Register from '../Page/Register';

const Stack = createStackNavigator();


const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>

                <Stack.Screen 
                name='Login' 
                component={Login}
                options={{headerShown:false}}/>

                <Stack.Screen 
                name='Register' 
                component={Register} 
                options={{headerShown:false}}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;