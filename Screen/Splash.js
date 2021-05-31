import React, { Component } from 'react';
import { View, Text } from 'react-native';
import externalstyle from '../Components/externalstyle';
import LottieView from 'lottie-react-native';


export default class Splash extends Component {
    
    render() {
        const { replace } = this.props.navigation;
        return (
            <View style={[externalstyle.appbackground]}>
                <LottieView source={require('../assets/splash_animation.json')}
                    autoPlay
                    loop={false}
                    speed={2.5}
                    onAnimationFinish={() => {
                        replace('Home')
                    }}
                />
            </View>

        )
    }
}