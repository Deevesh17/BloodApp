import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StatusBar,
    Alert,
    ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import externalstyle from '../Components/externalstyle';
import DatePicker from "react-native-modal-datetime-picker";

var cookie

const signup = ({ navigation }) => {

    const [data, setData] = React.useState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        current_date: '',
        age: '',
        mobile_number: '',
        blood_group: '',
        location: '',
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
        data.current_date = date.toDateString()
        hideDatePicker();
    };

    const emailchange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
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
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }
    const handlelocation = (val) => {
        setData({
            ...data,
            location: val
        });
    }
    const handleage = (val) => {
        setData({
            ...data,
            age: val
        });
    }
    const handlebloodgroup = (val) => {
        setData({
            ...data,
            blood_group: val
        });
    }
    const handlemobileno = (val) => {
        setData({
            ...data,
            mobile_number: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const signupfunc = async (username, email, password, confirm_password, current_date, mobile_number, age, blood_group, location) => {
        if (username.length == 0 || email.length == 0) {
            Alert.alert('Wrong Input!', 'Username and email are not to be empty.', [
                { text: 'Okay' }
            ]);
        }
        else if (password.length == 0 || confirm_password.length == 0) {
            Alert.alert('Wrong Input!', 'password and confirm password are not to be empty.', [
                { text: 'Okay' }
            ]);
        }
        else if (password != confirm_password) {
            Alert.alert('Wrong Input!', 'password and confirm password are mismatched.', [
                { text: 'Okay' }
            ]);
        }
        else {
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
                raw = JSON.stringify({ "username": username, "email": email, "password": password, "current_date": current_date, "mobile_number": mobile_number, "age": age, "blood_group": blood_group, "location": location });
                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };
                responce = await fetch("http://192.168.43.108:8008/api/method/blood_donation.signup_api.signup", requestOptions).catch(error => console.log('error', error));
                var resp = await responce.json()
                if (responce.status = 200) {
                    console.log(resp["message"]["msg"])
                    var greetings = "Congrats!!"
                    if (resp["message"]["msg"] == "User Already Exist") {
                        greetings = "Alert!!";
                        Alert.alert(greetings, resp["message"]["msg"], [
                            { text: 'Okay' }
                        ]);
                    }
                    else{
                        Alert.alert(greetings, resp["message"]["msg"], [
                            { text: 'Okay' }
                        ]);
                        navigation.navigate('login')
                    }


                }
            }
            catch (err) {
                Alert.alert('Wrong Input!', 'Network Unreachable.', [
                    { text: 'Okay' }
                ]);
            }
        }
    }

    return (
        <View style={[externalstyle.container]}>
            <StatusBar backgroundColor='#ff0038' barStyle="light-content" />
            <View style={[externalstyle.header]}>
                <Text style={[externalstyle.text_header]}>Register Now!</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[externalstyle.footer]}
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
                            placeholderTextColor = "gray"
                            placeholder="Your Name"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            autoCompleteType="name"
                            onChangeText={(val) => textInputChange(val)}
                        />
                    </View>
                    <Text style={[externalstyle.text_footer, { marginTop: 35 }]}>Email</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="envelope"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholderTextColor = "gray"
                            placeholder=" Your Email"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            autoCompleteType="email"
                            onChangeText={(val) => emailchange(val)}
                        />
                    </View>

                    <Text style={[externalstyle.text_footer, {
                        marginTop: 35
                    }]}>Date Of Birth</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="birthday-cake"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholderTextColor = "gray"
                            placeholder={data.current_date}
                            style={[externalstyle.textInput, { color: '#000000' }]}
                            keyboardType="numeric"
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
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
                            placeholderTextColor = "gray"
                            placeholder="Your Age"
                            style={[externalstyle.textInput]}
                            keyboardType="numeric"
                            autoCapitalize="none"
                            onChangeText={(val) => handleage(val)}
                        />
                    </View>
                    <Text style={[externalstyle.text_footer, {
                        marginTop: 35
                    }]}>Location</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="street-view"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholderTextColor = "gray"
                            placeholder="Location"
                            style={[externalstyle.textInput]}
                            keyboardType="default"
                            autoCapitalize="none"
                            onChangeText={(val) => handlelocation(val)}
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
                            placeholderTextColor = "gray"
                            placeholder="Your Blood Group"
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
                            placeholderTextColor = "gray"
                            placeholder="Your Mobile Number"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => handlemobileno(val)}
                        />
                    </View>
                    <Text style={[externalstyle.text_footer, {
                        marginTop: 35
                    }]}>Password</Text>
                    <View style={[externalstyle.action]}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholderTextColor = "gray"
                            placeholder="Your Password"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                    </View>
                    <View style={[externalstyle.textPrivate]}>
                        <Text style={[externalstyle.color_textPrivate]}> Include symbols, numbers and capital letters in the password</Text>
                    </View>
                    <Text style={[externalstyle.text_footer, {
                        marginTop: 35
                    }]}>Confirm Password</Text>
                    <View style={[externalstyle.action]}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholderTextColor = "gray"
                            placeholder="Confirm Your Password"
                            secureTextEntry={data.confirm_secureTextEntry ? true : false}
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                        />

                    </View>
                    <View style={[externalstyle.textPrivate]}>
                        <Text style={[externalstyle.color_textPrivate]}>By signing up you agree to our </Text>
                        <Text style={[externalstyle.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Terms of service</Text>
                        <Text style={externalstyle.color_textPrivate}>{" "}and</Text>
                        <Text style={[externalstyle.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Privacy policy</Text>
                    </View>
                    <View style={[externalstyle.button]}>
                        <TouchableOpacity
                            style={[externalstyle.signIn]}
                            onPress={() => { signupfunc(data.username, data.email, data.password, data.confirm_password, data.current_date, data.mobile_number, data.age, data.blood_group, data.location) }}
                        >
                            <LinearGradient
                                colors={['#ff0038', '#ff0038']}
                                style={[externalstyle.signIn]}
                            >
                                <Text style={[externalstyle.textSign, {
                                    color: '#fff'
                                }]}>Sign Up</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={[externalstyle.signIn, {
                                borderColor: '#ff0038',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <ActivityIndicator />
                            <Text style={[externalstyle.textSign, {
                                color: '#ff0038',
                                alignItems: 'center'
                            }]}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View >
    );
};

export default signup;