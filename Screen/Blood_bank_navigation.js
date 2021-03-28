import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native';
import externalstyle from '../Components/externalstyle';

export default class Blood_camp_navigation extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={[externalstyle.appbackground]}>
                <StatusBar backgroundColor='#ff0038' barStyle="light-content" />
                <View>
                    <TouchableOpacity
                        onPress={() => navigate('Blood_Camp_Details')}
                        style={[externalstyle.CircleShapeView]}
                    >
                        <Text style={[externalstyle.ButtonText]}>Create</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigate('Blood_Cancel')}
                        style={[externalstyle.CircleShapeView]}
                    >
                        <Text style={[externalstyle.ButtonText]}>Remove</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigate('Camp_login')}
                        style={[externalstyle.CircleShapeView]}
                    >
                        <Text style={[externalstyle.ButtonText]}>Blood Bank</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )

    }
}
