import { View, Text, Animated, PanResponder } from 'react-native';
import React, { useState, useRef } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Animations() {
    const opacity = useState(new Animated.Value(0))[0];
    const pan = useRef(new Animated.ValueXY()).current;
    const AnimatedView = Animated.createAnimatedComponent(View);


    const panResponder = useRef(
        PanResponder.create({
            useNativeDriver: true,
            onstartshouldsetpanresponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    { dx: pan.x, dy: pan.y }
                ]
            ),
            onPanResponderRelease: () => { pan.flattenOffset(); }
        })
    ).current;

    const fadeSequence = () => {
        console.log('fadeSequence');
        Animated.loop(
            Animated.sequence(
                [
                    Animated.timing(opacity, {
                        toValue: 1,
                        duration: 400,
                        useNativeDriver: false
                    }),
                    Animated.timing(opacity, {
                        toValue: 0,
                        duration: 400,
                        useNativeDriver: false
                    })
                ])
        ).start((e) => console.log('callback', e));
    };

    const fadeInBall = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: false
        }).start();
    };
    const fadeOutBall = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 5000,
            useNativeDriver: false
        }).start();
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}>
            <AnimatedView style={[{
                width: 100,
                height: 100,
                opacity,
                borderRadius: 100 / 2,
                backgroundColor: 'red',
            },
            pan.getLayout()]}
                {...panResponder.panHandlers}
            />
            <TouchableOpacity onPress={fadeSequence}>
                <Text>Fade Ball</Text>
            </TouchableOpacity>
        </View>
    );
}