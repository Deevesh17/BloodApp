import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import externalstyle from '../Components/externalstyle';

const peaple = [
    { name: 'shaun 9524214493 shaun 9524214493 shaun 9524214493 shaun 9524214493 shaun 9524214493 shaun 9524214493 shaun 9524214493 shaun 9524214493 shaun 9524214493 shaun 9524214493 shaun 9524214493 shaun 9524214493 ', id: '1' },
    { name: 'yoshi    9524214493', id: '2' },
    { name: 'mario    9524214493', id: '3' },
    { name: 'luigi    9524214493', id: '4' },
    { name: 'peach    9524214493', id: '5' },
    { name: 'toad     9524214493', id: '6' },
    { name: 'bowser   9524214493', id: '7' },
]

export default class Bloo_Donor_Navigation extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={[externalstyle.appbackground]}>
                <StatusBar backgroundColor='#ff0038' barStyle="light-content" />
                <ScrollView>
                    <View>
                        <TouchableOpacity
                            onPress={() => navigate('Emergency_Blood')}
                            style={[externalstyle.CircleShapeView]}
                        >
                            <Text style={[externalstyle.ButtonText]}>Donor Proile</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => navigate('Emegency_cancel')}
                            style={[externalstyle.CircleShapeView]}
                        >
                            <Text style={[externalstyle.ButtonText]}>Emergency</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => navigate('Message',{peaple})}
                            style={[externalstyle.CircleShapeView]}
                        >
                            <Text style={[externalstyle.ButtonText]}>Message</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={[externalstyle.CircleShapeView]}
                        >
                            <Text style={[externalstyle.ButtonText]}>Blood Bank</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )

    }
}