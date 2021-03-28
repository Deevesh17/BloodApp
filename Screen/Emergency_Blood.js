import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import externalstyle from '../Components/externalstyle';
import DatePicker from "react-native-modal-datetime-picker";
var cookie;

const Emergency_Blood = ({ navigation }) => {

    const [data, setData] = React.useState({
        username: '',
        hospital_details: '',
        hospital_landmark: '',
        end_date: '',
        state: '',
        district: '',
        scode: '',
        age: '',
        mobile_number: '',
        blood_group: '',
        date_time : '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
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

    const hospitaldetails = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                hospital_details: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                hospital_details: val,
                check_textInputChange: false
            });
        }
    }
    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const handleage = (val) => {
        console.log(val);
        setData({
            ...data,
            age: val
        });
    }
    const handlstate = (val) => {
        setData({
            ...data,
            state: val
        });
    }
    const handledis = (val) => {
        setData({
            ...data,
            district: val
        });
    }
    const handlebloodgroup = (val) => {
        setData({
            ...data,
            blood_group: val
        });
    }
    const handlescode = (val) => {
        setData({
            ...data,
            scode: val
        });
    }
    const handlemobileno = (val) => {
        console.log(val);
        setData({
            ...data,
            mobile_number: val
        });
    }

    const hospitallandmark = (val) => {
        setData({
            ...data,
            hospital_landmark: val
        });

    }

    const bloodfunc = async (username, hospital_details, hospital_landmark, end_date, mobile_number, age, blood_group, scode, state, district) => {
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
            raw = JSON.stringify({ "username": data.username, "hospital_details": data.hospital_details, "hospital_landmark": data.hospital_landmark, "end_date": data.date_time, "mobile_number": data.mobile_number, "age": data.age, "blood_group": data.blood_group, "scode": data.scode, "state": data.state, "district": data.district });
                var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            responce = await fetch("http://192.168.43.108:8008/api/method/blood_donation.emergency.emergency_create", requestOptions).catch(error => console.log('error', error));
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
        <View style={[externalstyle.emergencybackground]}>
            <StatusBar backgroundColor='#ff0038' barStyle="light-content" />

            <Animatable.View
                animation="zoomInUp"
                style={[externalstyle.emergencybackground]}
            >
                <ScrollView>
                    <Text style={[externalstyle.text_footer]}>Name</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Name"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            autoCompleteType="name"
                            onChangeText={(val) => textInputChange(val)}
                        />
                    </View>
                    <Text style={[externalstyle.text_footer, { marginTop: 35 }]}>Hospital Details</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="address-card"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder=" Hospital Details"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => hospitaldetails(val)}
                        />
                    </View>
                    <Text style={[externalstyle.text_footer, { marginTop: 35 }]}>Hospital Landmark</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="location-arrow"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder=" Hospital Landmark"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => hospitallandmark(val)}
                        />
                    </View>
                    <Text style={[externalstyle.text_footer, { marginTop: 35 }]}>State</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="location-arrow"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="State"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => handlstate(val)}
                        />
                    </View>
                    <Text style={[externalstyle.text_footer, { marginTop: 35 }]}>District</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="location-arrow"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder=" District"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => handledis(val)}
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
                    <Text style={[externalstyle.text_footer, {
                        marginTop: 35
                    }]}>Age</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="birthday-cake"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Age"
                            style={[externalstyle.textInput]}
                            keyboardType="numeric"
                            autoCapitalize="none"
                            onChangeText={(val) => handleage(val)}
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
                            placeholder="Blood Group"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => handlebloodgroup(val)}
                        />
                    </View>
                    <Text style={[externalstyle.text_footer, {
                        marginTop: 35
                    }]}>Mobile Number</Text>
                    <View style={[externalstyle.action]}>
                        <Feather
                            name="phone"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Mobile Number"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => handlemobileno(val)}
                        />
                    </View>
                    <Text style={[externalstyle.text_footer, {
                        marginTop: 35
                    }]}>Secret Code</Text>
                    <View style={[externalstyle.action]}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Secret Code"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => handlescode(val)}
                        />
                    </View>

                    <View style={[externalstyle.button]}>
                        <TouchableOpacity
                            style={[externalstyle.signIn]}
                            onPress={() => { bloodfunc(data.username, data.hospital_details, data.hospital_landmark, data.date_time, data.mobile_number, data.age, data.blood_group, data.scode, data.state, data.district) }}
                        >
                            <LinearGradient
                                colors={['#ff0038', '#ff0038']}
                                style={[externalstyle.signIn]}
                            >
                                <Text style={[externalstyle.textSign, {
                                    color: '#fff'
                                }]}>Emergency</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View >
    );
};

export default Emergency_Blood;