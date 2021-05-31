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
import DatePicker from "react-native-modal-datetime-picker";

var cookie;
const Donor_update = ({ navigation, route }) => {
    console.log(route.params)
    const [data, setData] = React.useState({
        current_date: '',
        email: ''
    });
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        data.current_date = date.toDateString()
        hideDatePicker();
    };
    const textInputChange = (val) => {
        setData({
            ...data,
            email: val,
        });
    }

    const update = async (email, current_date) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Cookie", route.params["elements"]["cookie"]);
            var raw = JSON.stringify({ "email": email, "datec": current_date });
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            responce = await fetch("http://192.168.43.108:8008/api/method/blood_donation.signup_api.doupdate", requestOptions).catch(error => console.log('error', error));
            var resp = await responce.json()
            if (responce.status = 200) {
                navigation.navigate('Donor_navigation')
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
                <Text style={[externalstyle.text_header]}></Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[externalstyle.footer]}
            >

                <View style={[externalstyle.footer]}>
                    <Text style={[externalstyle.text_footer]}>Email</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="envelope"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholderTextColor="gray"
                            placeholder="email"
                            style={[externalstyle.textInput]}
                            onChangeText={(val) => textInputChange(val)}
                            autoCapitalize="none"
                        />

                    </View>
                    <Text style={[externalstyle.text_footer, {
                        marginTop: 35
                    }]}>Donated Date</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="tint"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholderTextColor="black"
                            placeholder={data.current_date}
                            style={[externalstyle.textInput, { color: '#000000' }]}
                            editable={false}
                            keyboardType="numeric"
                            autoCapitalize="none"
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
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </View>

                    <View style={[externalstyle.button]}>
                        <TouchableOpacity
                            style={[externalstyle.signIn]}
                            onPress={() => { update(data.email, data.current_date) }}
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
                </View>
            </Animatable.View>

        </View>
    );
};
export default Donor_update;