import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert,
    StatusBar,
    ScrollView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import externalstyle from '../Components/externalstyle';
import DatePicker from "react-native-modal-datetime-picker";

var cookie
const Emergency_message = ({ navigation }) => {

    const [data, setData] = React.useState({
        msg: '',
        mobile_no: '',
        grp: '',
        end_date : '',
        date_time : ''
    
    });
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
        data.end_date = date.toString();
        data.date_time = date;
        hideDatePicker();
    };

    const handlename = (val) => {
        setData({
            ...data,
            msg: val
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
            grp: val
        });
    }

    const remove = async (msg, mobile_no, grp,end_date) => {
        console.log(msg);
        console.log(mobile_no);
        console.log(grp);
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
            raw = JSON.stringify({ "msg": msg, "no": mobile_no, "grp": grp,"datec" : end_date });
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            responce = await fetch("http://192.168.43.108:8008/api/method/blood_donation.emergency.message", requestOptions).catch(error => console.log('error', error));
            var resp = await responce.json()
            if (responce.status = 200) {
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
                    <ScrollView>
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
                            onChangeText={(val) => handlescode(val)}
                        />
                    </View>
                    <Text style={[externalstyle.text_footer, {
                        marginTop: 35
                    }]}>Date Time</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="calendar-check-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholderTextColor = "gray"
                            placeholder={data.end_date}
                            style={[externalstyle.textInput]}
                            editable={false}
                        />
                        <TouchableOpacity style={[externalstyle.calender_icon]} onPress={showDatePicker} >
                            <FontAwesome
                                name="calendar"
                                color="#05375a"
                                size={20}
                            />
                        </TouchableOpacity>
                        <DatePicker
                            isVisible={isDatePickerVisible}
                            mode="datetime"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </View>
                    <View style={[externalstyle.button]}>
                        <TouchableOpacity
                            style={[externalstyle.signIn]}
                            onPress={() => { remove(data.msg, data.mobile_no, data.grp,data.date_time) }}
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
                    </ScrollView>
                </View>
            </Animatable.View>

        </View>
    );
};
export default Emergency_message;