import React,{useEffect} from 'react';
import { NavigationContainer ,DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, MyList,Login, Register, Setting, Splash, Intro, Animations } from './pages';
import { NativeBaseProvider } from "native-base";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const AuthTabs = () => {
  return(
    <Tab.Navigator initialRouteName='Login' >
      <Tab.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Tab.Screen name="Register" component={Register} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
  
}

const HomeStack = (navigation) => {
  return(
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="MyList" component={MyList} />
    </Stack.Navigator>
  )
}

const DrawerStack = () => {
  return(
    <Drawer.Navigator initialRouteName='Animations'>
        <Drawer.Screen name="Main" component={HomeStack}/>
        <Drawer.Screen name="Login/Register" component={AuthTabs} />
        <Drawer.Screen name="Setting" component={Setting} />
        <Drawer.Screen name="Animations" component={Animations} />
    </Drawer.Navigator>
  )
}

const StackScreen = () => {
  return(
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
      <Stack.Screen name="Intro" component={Intro} options={{headerShown: false}}/>
      <Stack.Screen name="Initial" component={DrawerStack} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

const App = () => {
  return (
      <NativeBaseProvider>
        <NavigationContainer theme={MyTheme}>
            <StackScreen />
        </NavigationContainer>
      </NativeBaseProvider>
  );
};

export default App;
