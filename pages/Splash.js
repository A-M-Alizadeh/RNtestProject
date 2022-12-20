import { View, Text } from 'react-native'
import React,{useEffect, useState} from 'react'
import Lottie from 'lottie-react-native';

export default function Splash({navigation}) {
  const [AuthLoaded, setAuthLoaded] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if(AuthLoaded)
      navigation.replace('Intro');
  }, [AuthLoaded]);


  return (
    <Lottie source={require('../assets/splash.json')} autoPlay loop />
  );
} 