import React from 'react';
import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages';


// const Stack = createNativeStackNavigator();

export default function BaseNavigator() {    
    return (
        <View>
            <Text>Hello</Text>
        </View>
    // <NavigationContainer>
    //     <Stack.Navigator initialRouteName='Home'>
    //         <Stack.Screen name="Home" component={Home} />
    //     </Stack.Navigator>
    // </NavigationContainer>
    );
}
