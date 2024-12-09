import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loginscreen from './src/Loginscreen';
import VerificationScreen from './src/VerificationScreen';
import MainMenuScreen from './src/MainMenuScreen';

export type RootStackParamList = {
    Login: undefined;
    Verification: undefined;
    MainMenu: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
                <Stack.Screen name="Verification" component={VerificationScreen} options={{ title: 'Verifikasi' }} />
                <Stack.Screen name="MainMenu" component={MainMenuScreen} options={{ title: 'Menu Utama' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}