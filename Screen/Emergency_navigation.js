import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native';
import externalstyle from '../Components/externalstyle';

export default class Home extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={[externalstyle.appbackground]}>
                <StatusBar backgroundColor='#ff0038' barStyle="light-content" />
                <View>
                    <TouchableOpacity
                        onPress={() => navigate('Emergency_Blood')}
                        style={[externalstyle.CircleShapeView]}
                    >
                        <Text style={[externalstyle.ButtonText]}>Create</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigate('Emegency_cancel')}
                        style={[externalstyle.CircleShapeView]}
                    >
                        <Text style={[externalstyle.ButtonText]}>Remove</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )

    }
}
