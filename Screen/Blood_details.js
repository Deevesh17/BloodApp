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
const Blood_details = ({ navigation, route }) => {
    const [details, setPeople] = React.useState(route.params["details"]);
    return (
        <View style={[externalstyle.messagecontainer]}>
            <FlatList
                // numColumns={3}
                keyExtractor={(item) => item.id}
                data={details}
                renderItem={({ item }) => (
                    <View style={[externalstyle.msgitem]}>
                        <Text style={[externalstyle.ButtonText]}>{item.value}</Text>
                    </View>
                )}
            />

        </View>
    );
};
export default Blood_details;