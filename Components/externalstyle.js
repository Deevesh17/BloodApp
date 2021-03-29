import { StyleSheet } from 'react-native';
import Elevations from "react-native-elevation";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const externalstyle = StyleSheet.create({
    appbackground:
    {
        flex: 300,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emergencybackground:
    {
        flex: 300,
        margin: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    doctorbackground:
    {
        flex: 200,
        margin: 30,
        marginLeft: 30,
        backgroundColor: 'white',
        justifyContent: 'space-around',
    },
    splash_text:
    {
        alignItems: 'center',
        fontSize: 40,
        fontWeight: 'normal',
    },
    CircleShapeView: {
        marginVertical: 30,
        height: 130,
        width: 130,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 65,
        backgroundColor: '#ff0038',
        elevation: 60
    },
    CirclepluseeView: {
        marginVertical: 30,
        height: 80,
        width: 80,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        backgroundColor: '#ff0038',
        elevation: 60
    },
    ButtonText: {
        textTransform: 'uppercase',
        color: '#ffffff',
        fontSize: hp('2%'),
        fontWeight: 'bold',
    },
    PluseText: {
        color: '#ffffff',
        fontSize: 100,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#ff0038'
    },
    messagecontainer: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    msgitem: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 24,
        borderRadius: 40,
        padding: 30,
        backgroundColor: '#ff0038',
        fontSize: 24,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    msg: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    doctoraction: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    calender_icon: {
        alignItems: 'flex-end'
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    color_textPrivate: {
        color: 'grey'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
});

export default externalstyle;