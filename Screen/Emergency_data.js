import React from 'react';
import {
    View,
    Text,
    FlatList,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import externalstyle from '../Components/externalstyle';

const Emergency_data = ({ navigation, route }) => {

    const [people, setPeople] = React.useState(route.params["details"]);
    return (
        <View style={[externalstyle.messagecontainer]}>
            <FlatList
                // numColumns={3}
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={({ item }) => (
                    <View style={[externalstyle.msgitem]}>
                        <Text style={[externalstyle.ButtonText]}>{item.value}</Text>
                    </View>
                )}
            />

        </View>
    );
};
export default Emergency_data;