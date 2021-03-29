import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import externalstyle from '../Components/externalstyle';

const Blood_bank_navigation = ({ navigation }) => {

    return (
        <View style={[externalstyle.appbackground]}>
            <StatusBar backgroundColor='#ff0038' barStyle="light-content" />
            <ScrollView>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Emergency_Blood')}
                    style={[externalstyle.CircleShapeView]}
                >
                    <Text style={[externalstyle.ButtonText]}>Create</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Emegency_cancel')}
                    style={[externalstyle.CircleShapeView]}
                >
                    <Text style={[externalstyle.ButtonText]}>Remove</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Emergency_message')}
                    style={[externalstyle.CircleShapeView]}
                >
                    <Text style={[externalstyle.ButtonText]}>Message to Donor</Text>
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

export default Blood_bank_navigation;
