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
const Blood_update = ({ navigation ,route}) => {

    const [data, setData] = React.useState({
          blood: '',
    });
    const handlescode = (val) => {
        setData({
            ...data,
            blood: val
        });
    }

    const update = async (blood) => { 
        console.log(route.params)
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
            raw = JSON.stringify({ "email": route.params["email"], "blood": blood });
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            responce = await fetch("http://192.168.43.108:8008/api/method/blood_donation.blood_bank.update", requestOptions).catch(error => console.log('error', error));
            var resp = await responce.json()
            if (responce.status = 200) {
                var greetings = "NOTE"
                if (resp["message"]["msg"] == "User Not Exist") {
                    greetings = "Alert!!";
                    Alert.alert(greetings, resp["message"]["msg"], [
                        { text: 'Okay' }
                    ]);
                }
                else {
                    Alert.alert(greetings, resp["message"]["msg"],[
                        { text: 'Okay', onPress: () => navigation.navigate('Home') }
                    ]);
                }
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
                <Text style={[externalstyle.text_footer, {
                    marginTop: 35
                }]}>Update Available Blood Group</Text>
                <View style={[externalstyle.action]}>
                    <FontAwesome
                        name="tint"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholderTextColor = "gray"
                        placeholder="Update Available Blood Group"
                        style={[externalstyle.textInput]}
                        onChangeText={(val) => handlescode(val)}
                    />
                </View>
                <View style={[externalstyle.textPrivate]}>
                        <Text style={[externalstyle.color_textPrivate]}> Please Enter the Blood Group Followed by Comma(,)</Text>
                    </View>
                <View style={[externalstyle.button]}>
                    <TouchableOpacity
                        style={[externalstyle.signIn]}
                        onPress={() => { update(data.blood) }}
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
export default Blood_update;