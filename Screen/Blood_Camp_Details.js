import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Alert,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import externalstyle from '../Components/externalstyle';
import DatePicker from "react-native-modal-datetime-picker";

var cookie;

const Blood_Camp_Details = ({ navigation }) => {

    const [data, setData] = React.useState({
        username: '',
        camp_orga: '',
        camp_app: '',
        camp_venue: '',
        end_date: '',
        scode: '',
        age: '',
        mobile_number: '',
        state: '',
        date_time: '',
        district: '',
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


    const handleorga = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                camp_orga: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                camp_orga: val,
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
    const handlescode = (val) => {
        setData({
            ...data,
            scode: val
        });
    }
    const handledate = (val) => {
        setData({
            ...data,
            end_date: val
        });
    }
    const handleapp = (val) => {
        setData({
            ...data,
            camp_app: val
        });
    }
    const handlevenue = (val) => {
        setData({
            ...data,
            camp_venue: val
        });
    }
    const handlemobileno = (val) => {
        setData({
            ...data,
            mobile_number: val
        });
    }
    const handlestate = (val) => {
        setData({
            ...data,
            state: val
        });
    }
    const handledistrict = (val) => {
        setData({
            ...data,
            district: val
        });

    }

    const bloodcamp = async (username, camp_app, camp_orga, camp_venue, end_date, mobile_number, state, district, scode) => {
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
            raw = JSON.stringify({ "username": data.username, "camp_app": data.camp_app, "camp_orga": data.camp_orga, "camp_venue": camp_venue, "end_date": data.date_time, "mobile_number": data.mobile_number, "state": data.state, "district": data.district, "scode": data.scode });
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            responce = await fetch("http://192.168.43.108:8008/api/method/blood_donation.blood_camp.camp_create", requestOptions).catch(error => console.log('error', error));
            var resp = await responce.json()
            if (responce.status = 200) {
                navigation.navigate('Blood_navigation')

            }
        }
        catch (err) {
            Alert.alert('Wrong Input!', 'Network Unreachable.', [
                { text: 'Okay' }
            ]);
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
                            placeholderTextColor="gray"
                            placeholder="Name"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            autoCompleteType="name"
                            onChangeText={(val) => textInputChange(val)}
                        />
                    </View>
                    <Text style={[externalstyle.text_footer, { marginTop: 35 }]}>Camp Organization</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="address-card"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholderTextColor="gray"
                            placeholder="Camp Organization"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => handleorga(val)}
                        />
                    </View>
                    <Text style={[externalstyle.text_footer, { marginTop: 35 }]}>Camp Venuej</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="location-arrow"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholderTextColor="gray"
                            placeholder="Camp Venue"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => handlevenue(val)}
                        />
                    </View>
                    <Text style={[externalstyle.text_footer, {
                        marginTop: 35
                    }]}>Camp Approval ID</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="hourglass"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholderTextColor="gray"
                            placeholder="Camp Approval"
                            style={[externalstyle.textInput]}
                            keyboardType="number-pad"
                            autoCapitalize="none"
                            onChangeText={(val) => handleapp(val)}
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
                            placeholderTextColor="gray"
                            placeholder="State"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => handlestate(val)}
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
                            placeholderTextColor="gray"
                            placeholder=" District"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => handledistrict(val)}
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
                            placeholderTextColor="gray"
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
                    }]}>Organizer Mobile Number</Text>
                    <View style={[externalstyle.action]}>
                        <Feather
                            name="phone"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholderTextColor="gray"
                            placeholder="Organizer Mobile Number"
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
                            placeholderTextColor="gray"
                            placeholder="Secret Code"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => handlescode(val)}
                        />
                    </View>

                    <View style={[externalstyle.button]}>
                        <TouchableOpacity
                            style={[externalstyle.signIn]}
                            onPress={() => { bloodcamp(data.username, data.camp_app, data.camp_orga, data.camp_venue, data.end_date, data.mobile_number, data.state, data.district, data.scode) }}
                        >
                            <LinearGradient
                                colors={['#ff0038', '#ff0038']}
                                style={[externalstyle.signIn]}
                            >
                                <Text style={[externalstyle.textSign, {
                                    color: '#fff'
                                }]}>Create Camp</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View >
    );
};

export default Blood_Camp_Details;