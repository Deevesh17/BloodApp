import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native';
import externalstyle from '../Components/externalstyle';


const Blood_bank_navigation = ({ navigation }) => {

    return (
        <View style={[externalstyle.appbackground]}>
            <StatusBar backgroundColor='#ff0038' barStyle="light-content" />
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Blood_Camp_Details')}
                    style={[externalstyle.CircleShapeView]}
                >
                    <Text style={[externalstyle.ButtonText]}>Create</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Blood_Cancel')}
                    style={[externalstyle.CircleShapeView]}
                >
                    <Text style={[externalstyle.ButtonText]}>Remove</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Camp_login')}
                    style={[externalstyle.CircleShapeView]}
                >
                    <Text style={[externalstyle.ButtonText]}>Blood Bank</Text>
                </TouchableOpacity>
            </View>

        </View>
    )


}

export default Blood_bank_navigation;
