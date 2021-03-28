import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import externalstyle from '../Components/externalstyle';


const Emergency_Blood = ({ navigation }) => {

    const [data, setData] = React.useState({
        username: '',
        hospita_details: '',
        hospital_landmark: '',
        end_date: '',
        age: '',
        mobile_number: '',
        blood_group: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });


    const hospitaldetails = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                hospita_details: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                hospita_details: val,
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

    const handledate = (val) => {
        setData({
            ...data,
            end_date: val
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

    const hospitallandmark = (val) => {
        setData({
            ...data,
            hospital_landmark: val
        });

    }

    const bloodcamp = async (username, hospita_details, hospital_landmark, end_date, mobile_number, age, blood_group) => {
        console.log(age);
        console.log(hospital_landmark);
        console.log(hospita_details);
        console.log(mobile_number);
        console.log(blood_group);
        navigation.navigate('Home')
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
                    <Text style={[externalstyle.text_footer, { marginTop: 35 }]}>Camp Organization</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="address-card"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Camp Organization"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => hospitaldetails(val)}
                        />
                    </View>
                    <Text style={[externalstyle.text_footer, { marginTop: 35 }]}>Camp Approval</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="location-arrow"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Camp Approval"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => hospitallandmark(val)}
                        />
                    </View>
                    <Text style={[externalstyle.text_footer, {
                        marginTop: 35
                    }]}>Camp Venue</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="hourglass"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Camp Venue"
                            style={[externalstyle.textInput]}
                            keyboardType="number-pad"
                            autoCapitalize="none"
                            onChangeText={(val) => handleage(val)}
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
                            onChangeText={(val) => hospitallandmark(val)}
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
                            onChangeText={(val) => hospitallandmark(val)}
                        />
                    </View>
                    <Text style={[externalstyle.text_footer, {
                        marginTop: 35
                    }]}>Camp Conducting Date</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="calendar-check-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Camp Conducting Date"
                            style={[externalstyle.textInput]}
                            keyboardType="number-pad"
                            autoCapitalize="none"
                            onChangeText={(val) => handleage(val)}
                        />
                    </View>
                    <Text style={[externalstyle.text_footer, {
                        marginTop: 35
                    }]}>Camp Conducting Time</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="hourglass"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Camp Conducting Time"
                            style={[externalstyle.textInput]}
                            keyboardType="number-pad"
                            autoCapitalize="none"
                            onChangeText={(val) => handleage(val)}
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
                            placeholder="Organizer Mobile Number"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => handlemobileno(val)}
                        />
                    </View>

                    <View style={[externalstyle.button]}>
                        <TouchableOpacity
                            style={[externalstyle.signIn]}
                            onPress={() => { bloodcamp(data.username, data.hospita_details, data.hospital_landmark, data.end_date, data.mobile_number, data.age, data.blood_group) }}
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

export default Emergency_Blood;