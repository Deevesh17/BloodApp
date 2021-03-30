import React, { Component } from 'react';
import { View, Alert, Text, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import externalstyle from '../Components/externalstyle';
var cookie;
var details ;
const Blood_bank_navigation = ({ navigation }) => {

    const getdata = async () => { 
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify({ "usr": "Administrator", "pwd": "2417" });
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            var responce = await fetch("http://192.168.43.108:8008/api/method/login", requestOptions).catch(error => console.log('error', error));
            cookie = responce["headers"]["map"]["set-cookie"].split(";")[0]
            myHeaders.append("Cookie", cookie);
            var requestOptions = {
                method: 'Get',
                headers: myHeaders,
                redirect: 'follow'
            };
            responce = await fetch("http://192.168.43.108:8008/api/method/blood_donation.blood_bank.bankdata", requestOptions).catch(error => console.log('error', error));
            var resp = await responce.json()
            if (responce.status = 200) {
                details = resp["message"]["data"]
                navigation.navigate('Bank',{details})
            }
        }
        catch (err) {
        Alert.alert('Wrong Input!', 'Network Unreachable.', [
            { text: 'Okay' }
        ]);
        console.log(err)
    }
}

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
                    onPress={() => getdata()}
                >
                    <Text style={[externalstyle.ButtonText]}>Blood Bank</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )


}

export default Blood_bank_navigation;
