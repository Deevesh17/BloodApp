import React from 'react';
import {
    View,
    Text,
    FlatList,
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
const message_data = ({ navigation, route }) => {
    console.log(route.params["peaple"]);
    const [people, setPeople] = React.useState(route.params["peaple"]);
    return (
        <View style={[externalstyle.messagecontainer]}>
            <FlatList
                // numColumns={3}
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={({ item }) => (
                    <View style={[externalstyle.msgitem]}>
                        <Text style={[externalstyle.ButtonText]}>{item.name}</Text>
                    </View>
                )}
            />

        </View>
    );
};
export default message_data;