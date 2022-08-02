import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from "./screen/welcome";
import Login from "./screen/login";

const Stack = createNativeStackNavigator()

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='welcome' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='welcome' component={WelcomeScreen} />
                <Stack.Screen name='login' component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App
