import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import externalstyle from '../Components/externalstyle';

var cookie
const Emergency_message = ({ navigation }) => {

    const [data, setData] = React.useState({
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
        <View style={[externalstyle.container]}>
            <StatusBar backgroundColor='#ff0038' barStyle="light-content" />

            <View style={[externalstyle.header]}>
                <Text style={[externalstyle.msg]}>You are requested to enter the required emergency blood group in the message field along with your contact details </Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[externalstyle.footer]}
            >

                <View style={[externalstyle.footer]}>
                    <Text style={[externalstyle.text_footer]}>Message To Donor</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="envelope"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholderTextColor="gray"
                            style={{ height: 80, borderColor: 'gray', borderWidth: 2 }}
                            placeholder="Enter Your Message"
                            style={[externalstyle.textInput]}
                            onChangeText={(val) => handlename(val)}
                            autoCapitalize="none"
                        />

                    </View>
                    <Text style={[externalstyle.text_footer, {
                        marginTop: 35
                    }]}>Mobile</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="phone"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholderTextColor="gray"
                            placeholder="Enter Your Mobile Number"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => handlemobileno(val)}
                        />
                    </View>
                    <Text style={[externalstyle.text_footer, {
                        marginTop: 35
                    }]}>Blood Group</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="tint"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholderTextColor="gray"
                            placeholder="Blood Group"
                            style={[externalstyle.textInput]}                          
                            autoCapitalize="none"
                            onChangeText={(val) => handlemobileno(val)}
                        />
                    </View>
                    <View style={[externalstyle.button]}>
                        <TouchableOpacity
                            style={[externalstyle.signIn]}
                            onPress={() => { remove(data.name, data.mobile_no, data.scode) }}
                        >
                            <LinearGradient
                                colors={['#ff0038', '#ff0038']}
                                style={[externalstyle.signIn]}
                            >
                                <Text style={[externalstyle.textSign, {
                                    color: '#fff'
                                }]}>Send</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animatable.View>

        </View>
    );
};
export default Emergency_message;