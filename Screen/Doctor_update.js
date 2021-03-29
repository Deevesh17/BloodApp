import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import externalstyle from '../Components/externalstyle';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';


var cookie
const Doctor_update = ({ navigation }) => {

    const [data, setData] = React.useState({
        email: '',
        name: '',
        mobile_no: '',
        scode: '',
    });
    const handlename = (val) => {
        setData({
            ...data,
            name: val
        });
    }
    const handlemobileno = (val) => {
        setData({
            ...data,
            mobile_no: val
        });
    }
    const handlescode = (val) => {
        setData({
            ...data,
            scode: val
        });
    }

    const remove = async (name, mobile_no, scode) => {
        console.log(name);
        console.log(mobile_no);
        console.log(scode);
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
            raw = JSON.stringify({ "name": name, "mobile": mobile_no, "scode": scode });
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            responce = await fetch("http://192.168.43.108:8008/api/method/blood_donation.emergency.remove_emergency", requestOptions).catch(error => console.log('error', error));
            var resp = await responce.json()
            if (responce.status = 200) {
                Alert.alert("Alert", resp["message"]["msg"], [
                    { text: 'Okay' }
                ]);
                navigation.navigate('Emergency')
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
        <Animatable.View
            animation="fadeInUpBig"
            style={[externalstyle.footer]}
        >

            <View style={[externalstyle.emergencybackground]}>
            <ScrollView>
                <StatusBar backgroundColor='#ff0038' barStyle="light-content" />
                <Text style={[externalstyle.text_footer, {
                    marginTop: 35, marginLeft: 20
                }]}>Enter The Donor's Email ID</Text>
                <View style={[externalstyle.doctoraction]}>

                    <TextInput
                        placeholder="Enter Mail Id"
                        placeholderTextColor="gray"
                        style={[externalstyle.textInput]}
                        onChangeText={(val) => handlename(val)}
                        autoCapitalize="none"
                    />
                </View>
                <Text style={[externalstyle.text_footer, {
                    marginTop: 35, marginLeft: 20
                }]}>Enter The Donor's Name</Text>
                <View style={[externalstyle.doctoraction]}>

                    <TextInput
                        placeholder="Enter Name"
                        placeholderTextColor="gray"
                        style={[externalstyle.textInput]}
                        onChangeText={(val) => handlename(val)}
                        autoCapitalize="none"
                    />
                </View>
                <Text style={[externalstyle.text_footer, {
                    marginTop: 35, marginLeft: 20
                }]}>Mention The Health Issues</Text>
                <View style={[externalstyle.doctoraction]}>

                    <TextInput
                        placeholder="Mention The Health Issues"
                        placeholderTextColor="gray"
                        style={[externalstyle.textInput]}
                        autoCapitalize="none"
                        onChangeText={(val) => handlemobileno(val)}
                    />
                </View>
                <Text style={[externalstyle.text_footer, {
                    marginTop: 35, marginLeft: 20
                }]}>No Of Days after which Donor can donate Blood</Text>
                <View style={[externalstyle.doctoraction]}>

                    <TextInput
                        placeholder="No Of Days after which Donor can donate Blood"
                        placeholderTextColor="gray"
                        keyboardType = "number-pad"
                    />
                </View>
                <View style={[externalstyle.button]}>
                    <TouchableOpacity
                        style={[externalstyle.signIn]}
                    >
                        <LinearGradient
                            colors={['#ff0038', '#ff0038']}
                            style={[externalstyle.signIn]}
                        >
                            <Text style={[externalstyle.textSign, {
                                color: '#fff'
                            }]}>Update</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        </Animatable.View>
    );
};
export default Doctor_update;