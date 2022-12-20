import React,{useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Lottie from 'lottie-react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

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
    const [showRealApp, setShowRealApp] = useState(false)
    _onDone = () => {
        setShowRealApp(true)
        navigation.replace('Initial');
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

    return(
        <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>
    )
}

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