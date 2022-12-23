import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Lottie from 'lottie-react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { readAsync, saveAsynce } from '../utils/Utils';

const slides = [
    {
      key: 'one',
      title: 'Meditation',
      text: '  Do Some Meditation You Bitch \nIt\'s Good For Your Fucking Sould',
      image: require('../assets/meditation.json'),
      backgroundColor: '#faedcd',
      titleColor: 'black',
      textColor: 'black',
    },
    {
      key: 'two',
      title: 'Happy',
      text: 'Play Some Music and Enjoy Life as it is',
      image: require('../assets/space.json'),
      backgroundColor: '#febe29',
      titleColor: 'black',
      textColor: 'black',
    },
    {
      key: 'three',
      title: 'Gang',
      text: 'Join a Colt, and enjoy Being Creepy as HELL',
      image: require('../assets/bike.json'),
      backgroundColor: '#84a98c',
      titleColor: 'black',
      textColor: 'black',
    },
    {
      key: 'four',
      title: 'captain',
      text: 'Try War, Killing People Calm your SOUL',
      image: require('../assets/captain.json'),
      backgroundColor: '#212529',
      titleColor: 'white',
      textColor: 'white',
    }
];


export default function Intro({navigation}){
    const[showIntro, setShowIntro] = useState(false)

    passIntro = () => {
        console.log('passIntro called');
        navigation.replace('Initial');
    }
    useEffect(() => {
        readAsync('@intro_status').then((value) => {
            console.log('useEffect intro called', value);
            value == 'seen' ? passIntro() : setShowIntro(true);
        })
    },[])

    introSeen = () => {
        saveAsynce('@intro_status', 'seen').then(() => {
            navigation.replace('Initial');
            console.log('Intro Seen');
        })
    }

    _onDone = () => {
        introSeen();
    }

    _renderItem = ({item}) => {
        return(
            <View style={[styles.slide,{ backgroundColor: item.backgroundColor}]}>
            <Text style={[styles.title,{color:item.titleColor}]}>{item.title}</Text>
            <Lottie source={item.image} autoPlay loop autoSize cacheComposition resizeMode='cover' style={{width: 400, height: 400}} />
            <Text style={[styles.text,{color: item.textColor}]}>{item.text}</Text>
            </View>
        )
    }

    if(showIntro){
        return(
            <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} /> 
        )
}}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        marginBottom: 16,
    },
    text: {
        fontSize: 18,
        marginTop: 20,
    },
    image:{

    },
})