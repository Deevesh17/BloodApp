import React, { Component } from 'react';
import { View, Text, TouchableOpacity,StatusBar } from 'react-native';
import externalstyle from '../Components/externalstyle';


export default class Home extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            
            <View style={[externalstyle.appbackground]}>
            <StatusBar backgroundColor='#fff' barStyle="light-content" />

                <TouchableOpacity
                    onPress={() => navigate('Doctor_login')}
                    style={[externalstyle.CircleShapeView]}>
                    <View>
                        <Text style={[externalstyle.ButtonText]}>Doctor </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('login')}
                    style={[externalstyle.CircleShapeView]}
                >
                    <Text style={[externalstyle.ButtonText]}>Blood donor</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate('Emergency')}
                    style={[externalstyle.CircleShapeView]}
                >
                    <View>
                        <Text style={[externalstyle.ButtonText]}>Emergency</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate('Blood_navigation')}
                    style={[externalstyle.CircleShapeView]}>
                    <View>
                        <Text style={[externalstyle.ButtonText]}>Blood Camp</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )

    }
}
