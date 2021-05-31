import React, { Component } from 'react';
import { View, Alert, Text, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import externalstyle from '../Components/externalstyle';

var elements;

const Blood_Doner_Navigation = ({ navigation, route }) => {
    elements =  route.params
    const getdata = async () => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Cookie", route.params["cookie"]);
            var requestOptions = {
                method: 'Get',
                headers: myHeaders,
                redirect: 'follow'
            };
            responce = await fetch("http://192.168.43.108:8008/api/method/blood_donation.blood_bank.camp_data", requestOptions).catch(error => console.log('error', error));
            var resp = await responce.json()
            if (responce.status = 200) {
                var details = resp["message"]["data"]
                navigation.navigate('camp_data', { details })
            }
        }
        catch (err) {
            Alert.alert('Wrong Input!', 'Network Unreachable.', [
                { text: 'Okay' }
            ]);
            console.log(err)
        }
    }
    const getemer = async () => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Cookie", route.params["cookie"]);
            var requestOptions = {
                method: 'Get',
                headers: myHeaders,
                redirect: 'follow'
            };
            responce = await fetch("http://192.168.43.108:8008/api/method/blood_donation.blood_bank.eme_data", requestOptions).catch(error => console.log('error', error));
            var resp = await responce.json()
            if (responce.status = 200) {
                var details = resp["message"]["data"]
                navigation.navigate('Emedata', { details })
            }
        }
        catch (err) {
            Alert.alert('Wrong Input!', 'Network Unreachable.', [
                { text: 'Okay' }
            ]);
            console.log(err)
        }
    }
    const getmsg = async () => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Cookie", route.params["cookie"]);
            var requestOptions = {
                method: 'Get',
                headers: myHeaders,
                redirect: 'follow'
            };
            responce = await fetch("http://192.168.43.108:8008/api/method/blood_donation.blood_bank.emrmsg", requestOptions).catch(error => console.log('error', error));
            var resp = await responce.json()
            if (responce.status = 200) {
                var details = resp["message"]["data"]
                navigation.navigate('Message', { details })
            }
        }
        catch (err) {
            Alert.alert('Wrong Input!', 'Network Unreachable.', [
                { text: 'Okay' }
            ]);
            console.log(err)
        }
    }
    const fun = async () =>{
        navigation.navigate('Donor_update',{elements})
    }
    return (
        <View style={[externalstyle.appbackground]}>
            <StatusBar backgroundColor='#ff0038' barStyle="light-content" />
            <ScrollView>
                <View>
                    <TouchableOpacity
                        onPress={() => fun() }
                        style={[externalstyle.CircleShapeView]}
                    >
                        <Text style={[externalstyle.ButtonText]}>Donor Proile</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => getemer()}
                        style={[externalstyle.CircleShapeView]}
                    >
                        <Text style={[externalstyle.ButtonText]}>Emergency</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => getmsg()}
                        style={[externalstyle.CircleShapeView]}
                    >
                        <Text style={[externalstyle.ButtonText]}>Message</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={[externalstyle.CircleShapeView]}
                        onPress={() => getdata()}

                    >
                        <Text style={[externalstyle.ButtonText]}>Blood Camp</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
};
export default Blood_Doner_Navigation;

