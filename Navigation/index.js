import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Page
import Login from '../Page/Login';
import Register from '../Page/Register';
import Home from '../Page/Home';
import Courses from '../Page/Courses';
import ListCourse from '../Page/LIstCourse';
import CourseDetail from '../Page/CourseDetail';

const Stack = createStackNavigator();


const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>

                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{ headerShown: false }} />

                <Stack.Screen
                    name='Register'
                    component={Register}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name='Courses'
                    component={Courses}
                    options={{ headerShown: false }}
                />
                  <Stack.Screen
                    name='ListCourse'
                    component={ListCourse}
                    options={{ headerShown: false }}
                />
                   <Stack.Screen
                    name='CourseDetail'
                    component={CourseDetail}
                    options={{ headerShown: false }}
                />
                
                


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;