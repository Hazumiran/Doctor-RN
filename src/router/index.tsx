import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, GetStarted, Login, Register, UploadPhoto, Doctor, Hospitals, Messages, ChooseDoctor, Chatting } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tabs.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
            <Tabs.Screen name="Doctor" component={Doctor} options={{ headerShown: false }}/>
            <Tabs.Screen name="Messages" component={Messages} options={{ headerShown: false }}/>
            <Tabs.Screen name="Hospitals" component={Hospitals} options={{ headerShown: false }}/>
        </Tabs.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="GetStarted"
                component={GetStarted}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="UploadPhoto"
                component={UploadPhoto}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="ChooseDoctor"
                component={ChooseDoctor}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Chatting"
                component={Chatting}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router
