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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import externalstyle from '../Components/externalstyle';
import {useRoute} from '@react-navigation/native';

var cookie
const login = ({ navigation }) => {
    const route = useRoute();
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }
    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }
    const loginHandle = async (email, password) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify({ "usr": email, "pwd": password });
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            var responce = await fetch("http://192.168.43.108:8008/api/method/login", requestOptions);
            var resp = await responce.json()
            cookie = responce["headers"]["map"]["set-cookie"].split(";")[0]
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
                <Text style={[externalstyle.text_header]}>Welcome!</Text>
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
                            placeholderTextColor = "gray"
                            placeholder="email"
                            style={[externalstyle.textInput]}
                            onChangeText={(val) => textInputChange(val)}
                            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                            autoCapitalize="none"
                        />
                        {data.check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                    </View>
                    <Text style={[externalstyle.text_footer, {
                        marginTop: 35
                    }]}>Password</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholderTextColor = "gray"
                            placeholder="Password"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={{ color: '#009387', marginTop: 15 }}>Forgot password?</Text>
                    </TouchableOpacity>
                    <View style={[externalstyle.button]}>
                        <TouchableOpacity
                            style={[externalstyle.signIn]}
                            onPress={() => { loginHandle(data.email, data.password) }}
                        >
                            <LinearGradient
                                colors={['#ff0038', '#ff0038']}
                                style={[externalstyle.signIn]}
                            >
                                <Text style={[externalstyle.textSign, {
                                    color: '#fff'
                                }]}>Sign In</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Signup')}
                            style={[externalstyle.signIn, {
                                borderColor: '#ff0038',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[externalstyle.textSign, {
                                color: '#ff0038'
                            }]}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Animatable.View>

        </View>
    );
};
export default login;