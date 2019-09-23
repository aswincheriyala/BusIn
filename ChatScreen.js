import React, { Component, PureComponent } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    FlatList,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Animated
    // LayoutAnimation, 
    // UIManager 
} from 'react-native';
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('window');

// if (Platform.OS === 'android') {
//     if (UIManager.setLayoutAnimationEnabledExperimental) {
//         UIManager.setLayoutAnimationEnabledExperimental(true);
//     }
// }

export default class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.msg = '';
        this.myRef = React.createRef();
        this.state = {
            msg: '',
            message: '',
            showInstant: false,
            positionLeft: false,
            scrollValue: 0,
            msgs: [
                { id: '0', type: 'reciver', msg: 'reciever msg' },
                { id: '1', type: 'sender', msg: 'sender msg' },
                { id: '2', type: 'sender', msg: 'sender msg' },
                { id: '3', type: 'sender', msg: 'sender msg' },
                { id: '4', type: 'reciver', msg: 'reciever msg' },
                { id: '5', type: 'sender', msg: 'sender msg' },
                { id: '6', type: 'sender', msg: 'sender msg' },
                { id: '7', type: 'reciver', msg: 'reciever msg' },
                { id: '8', type: 'reciver', msg: 'reciever msg' },
                { id: '9', type: 'sender', msg: 'sender msg' },
                { id: '10', type: 'reciver', msg: 'reciever msg' },
                { id: '11', type: 'sender', msg: 'sender msg' },
                { id: '12', type: 'sender', msg: 'sender msg' },
                { id: '13', type: 'sender', msg: 'sender msg' },
                { id: '14', type: 'reciver', msg: 'reciever msg' },
                { id: '15', type: 'sender', msg: 'sender msg' },
                { id: '16', type: 'sender', msg: 'sender msg' },
                { id: '17', type: 'reciver', msg: 'reciever msg' },
                { id: '18', type: 'reciver', msg: 'reciever msg' },
                { id: '19', type: 'sender', msg: 'sender msg' },
                { id: '20', type: 'reciver', msg: 'reciever msg' },
                { id: '21', type: 'sender', msg: 'sender msg' },
                { id: '22', type: 'sender', msg: 'sender msg' },
                { id: '23', type: 'sender', msg: 'sender msg' },
                { id: '24', type: 'reciver', msg: 'reciever msg' },
                { id: '25', type: 'sender', msg: 'sender msg' },
                { id: '26', type: 'sender', msg: 'sender msg' },
                { id: '27', type: 'reciver', msg: 'reciever msg' },
                { id: '28', type: 'reciver', msg: 'reciever msg' },
                { id: '29', type: 'sender', msg: 'sender msg' },
                { id: '30', type: 'reciver', msg: 'reciever msg' },
                { id: '31', type: 'sender', msg: 'sender msg' },
                { id: '32', type: 'sender', msg: 'sender msg' },
                { id: '33', type: 'sender', msg: 'sender msg' },
                { id: '34', type: 'reciver', msg: 'reciever msg' },
                { id: '35', type: 'sender', msg: 'sender msg' },
                { id: '36', type: 'sender', msg: 'sender msg' },
                { id: '37', type: 'reciver', msg: 'reciever msg' },
                { id: '38', type: 'reciver', msg: 'reciever msg' },
                { id: '39', type: 'sender', msg: 'sender msg' },
                { id: '40', type: 'reciver', msg: 'reciever msg' },
                { id: '41', type: 'sender', msg: 'sender msg' },
                { id: '42', type: 'sender', msg: 'sender msg' },
                { id: '43', type: 'sender', msg: 'sender msg' },
                { id: '44', type: 'reciver', msg: 'reciever msg' },
                { id: '45', type: 'sender', msg: 'sender msg' },
                { id: '46', type: 'sender', msg: 'sender msg' },
                { id: '47', type: 'reciver', msg: 'reciever msg' },
                { id: '48', type: 'reciver', msg: 'reciever msg' },
                { id: '49', type: 'sender', msg: 'sender msg' },
                { id: '50', type: 'reciver', msg: 'reciever msg' },
                { id: '51', type: 'sender', msg: 'sender msg' },
                { id: '52', type: 'sender', msg: 'sender msg' },
                { id: '53', type: 'sender', msg: 'sender msg' },
                { id: '54', type: 'reciver', msg: 'reciever msg' },
                { id: '55', type: 'sender', msg: 'sender msg' },
                { id: '56', type: 'sender', msg: 'sender msg' },
                { id: '57', type: 'reciver', msg: 'reciever msg' },
                { id: '58', type: 'reciver', msg: 'reciever msg' },
                { id: '59', type: 'sender', msg: 'sender msg' },
                { id: '60', type: 'reciver', msg: 'reciever msg' },
                { id: '61', type: 'sender', msg: 'sender msg' },
                { id: '62', type: 'sender', msg: 'sender msg' },
                { id: '63', type: 'sender', msg: 'sender msg' },
                { id: '64', type: 'reciver', msg: 'reciever msg' },
                { id: '65', type: 'sender', msg: 'sender msg' },
                { id: '66', type: 'sender', msg: 'sender msg' },
                { id: '67', type: 'reciver', msg: 'reciever msg' },
                { id: '68', type: 'reciver', msg: 'reciever msg' },
                { id: '69', type: 'sender', msg: 'sender msg' },
                { id: '70', type: 'reciver', msg: 'reciever msg' },
                { id: '71', type: 'sender', msg: 'sender msg' },
                { id: '72', type: 'sender', msg: 'sender msg' },
                { id: '73', type: 'sender', msg: 'sender msg' },
                { id: '74', type: 'reciver', msg: 'reciever msg' },
                { id: '75', type: 'sender', msg: 'sender msg' },
                { id: '76', type: 'sender', msg: 'sender msg' },
                { id: '77', type: 'reciver', msg: 'reciever msg' },
                { id: '78', type: 'reciver', msg: 'reciever msg' },
                { id: '79', type: 'sender', msg: 'sender msg' },
                { id: '80', type: 'reciver', msg: 'reciever msg' },
                { id: '81', type: 'sender', msg: 'sender msg' },
                { id: '82', type: 'sender', msg: 'sender msg' },
                { id: '83', type: 'sender', msg: 'sender msg' },
                { id: '84', type: 'reciver', msg: 'reciever msg' },
                { id: '85', type: 'sender', msg: 'sender msg' },
                { id: '86', type: 'sender', msg: 'sender msg' },
                { id: '87', type: 'reciver', msg: 'reciever msg' },
                { id: '88', type: 'reciver', msg: 'reciever msg' },
                { id: '89', type: 'sender', msg: 'sender msg' },
                { id: '90', type: 'reciver', msg: 'reciever msg' },
                { id: '91', type: 'sender', msg: 'sender msg' },
                { id: '92', type: 'sender', msg: 'sender msg' },
                { id: '93', type: 'sender', msg: 'sender msg' },
                { id: '94', type: 'reciver', msg: 'reciever msg' },
                { id: '95', type: 'sender', msg: 'sender msg' },
                { id: '96', type: 'sender', msg: 'sender msg' },
                { id: '97', type: 'reciver', msg: 'reciever msg' },
                { id: '98', type: 'reciver', msg: 'reciever msg' },
                { id: '99', type: 'sender', msg: 'sender msg' },
                { id: '100', type: 'reciver', msg: 'reciever msg' },
                { id: '101', type: 'sender', msg: 'sender msg' },
                { id: '102', type: 'sender', msg: 'sender msg' },
                { id: '103', type: 'sender', msg: 'sender msg' },
                { id: '104', type: 'reciver', msg: 'reciever msg' },
                { id: '105', type: 'sender', msg: 'sender msg' },
                { id: '106', type: 'sender', msg: 'sender msg' },
                { id: '107', type: 'reciver', msg: 'reciever msg' },
                { id: '108', type: 'reciver', msg: 'reciever msg' },
                { id: '109', type: 'sender', msg: 'sender msg' },
                { id: '110', type: 'reciver', msg: 'reciever msg' },
                { id: '111', type: 'sender', msg: 'sender msg' },
                { id: '112', type: 'sender', msg: 'sender msg' },
                { id: '113', type: 'sender', msg: 'sender msg' },
                { id: '114', type: 'reciver', msg: 'reciever msg' },
                { id: '115', type: 'sender', msg: 'sender msg' },
                { id: '116', type: 'sender', msg: 'sender msg' },
                { id: '117', type: 'reciver', msg: 'reciever msg' },
                { id: '118', type: 'reciver', msg: 'reciever msg' },
                { id: '119', type: 'sender', msg: 'sender msg' },
                { id: '120', type: 'reciver', msg: 'reciever msg' },
                { id: '121', type: 'sender', msg: 'sender msg' },
                { id: '122', type: 'sender', msg: 'sender msg' },
                { id: '123', type: 'sender', msg: 'sender msg' },
                { id: '124', type: 'reciver', msg: 'reciever msg' },
                { id: '125', type: 'sender', msg: 'sender msg' },
                { id: '126', type: 'sender', msg: 'sender msg' },
                { id: '127', type: 'reciver', msg: 'reciever msg' },
                { id: '128', type: 'reciver', msg: 'reciever msg' },
                { id: '129', type: 'sender', msg: 'sender msg' },
                { id: '130', type: 'reciver', msg: 'reciever msg' },
                { id: '131', type: 'sender', msg: 'sender msg' },
                { id: '132', type: 'sender', msg: 'sender msg' },
                { id: '133', type: 'sender', msg: 'sender msg' },
                { id: '134', type: 'reciver', msg: 'reciever msg' },
                { id: '135', type: 'sender', msg: 'sender msg' },
                { id: '136', type: 'sender', msg: 'sender msg' },
                { id: '137', type: 'reciver', msg: 'reciever msg' },
                { id: '138', type: 'reciver', msg: 'reciever msg' },
                { id: '139', type: 'sender', msg: 'sender msg' },
                { id: '140', type: 'reciver', msg: 'reciever msg' },
                { id: '141', type: 'sender', msg: 'sender msg' },
                { id: '142', type: 'sender', msg: 'sender msg' },
                { id: '143', type: 'sender', msg: 'sender msg' },
                { id: '144', type: 'reciver', msg: 'reciever msg' },
                { id: '145', type: 'sender', msg: 'sender msg' },
                { id: '146', type: 'sender', msg: 'sender msg' },
                { id: '147', type: 'reciver', msg: 'reciever msg' },
                { id: '148', type: 'reciver', msg: 'reciever msg' },
                { id: '149', type: 'sender', msg: 'sender msg' },
                { id: '150', type: 'reciver', msg: 'reciever msg' },
                { id: '151', type: 'sender', msg: 'sender msg' },
                { id: '152', type: 'sender', msg: 'sender msg' },
                { id: '153', type: 'sender', msg: 'sender msg' },
                { id: '154', type: 'reciver', msg: 'reciever msg' },
                { id: '155', type: 'sender', msg: 'sender msg' },
                { id: '156', type: 'sender', msg: 'sender msg' },
                { id: '157', type: 'reciver', msg: 'reciever msg' },
                { id: '158', type: 'reciver', msg: 'reciever msg' },
                { id: '159', type: 'sender', msg: 'sender msg' },
                { id: '160', type: 'reciver', msg: 'reciever msg' },
                { id: '161', type: 'sender', msg: 'sender msg' },
                { id: '162', type: 'sender', msg: 'sender msg' },
                { id: '163', type: 'sender', msg: 'sender msg' },
                { id: '164', type: 'reciver', msg: 'reciever msg' },
                { id: '165', type: 'sender', msg: 'sender msg' },
                { id: '166', type: 'sender', msg: 'sender msg' },
                { id: '167', type: 'reciver', msg: 'reciever msg' },
                { id: '168', type: 'reciver', msg: 'reciever msg' },
                { id: '169', type: 'sender', msg: 'sender msg' },
                { id: '170', type: 'reciver', msg: 'reciever msg' },
                { id: '171', type: 'sender', msg: 'sender msg' },
                { id: '172', type: 'sender', msg: 'sender msg' },
                { id: '173', type: 'sender', msg: 'sender msg' },
                { id: '174', type: 'reciver', msg: 'reciever msg' },
                { id: '175', type: 'sender', msg: 'sender msg' },
                { id: '176', type: 'sender', msg: 'sender msg' },
                { id: '177', type: 'reciver', msg: 'reciever msg' },
                { id: '178', type: 'reciver', msg: 'reciever msg' },
                { id: '179', type: 'sender', msg: 'sender msg' },
                { id: '180', type: 'reciver', msg: 'reciever msg' },
                { id: '181', type: 'sender', msg: 'sender msg' },
                { id: '182', type: 'sender', msg: 'sender msg' },
                { id: '183', type: 'sender', msg: 'sender msg' },
                { id: '184', type: 'reciver', msg: 'reciever msg' },
                { id: '185', type: 'sender', msg: 'sender msg' },
                { id: '186', type: 'sender', msg: 'sender msg' },
                { id: '187', type: 'reciver', msg: 'reciever msg' },
                { id: '188', type: 'reciver', msg: 'reciever msg' },
                { id: '189', type: 'sender', msg: 'sender msg' },
                { id: '190', type: 'reciver', msg: 'reciever msg' },
                { id: '191', type: 'sender', msg: 'sender msg' },
                { id: '192', type: 'sender', msg: 'sender msg' },
                { id: '193', type: 'sender', msg: 'sender msg' },
                { id: '194', type: 'reciver', msg: 'reciever msg' },
                { id: '195', type: 'sender', msg: 'sender msg' },
                { id: '196', type: 'sender', msg: 'sender msg' },
                { id: '197', type: 'reciver', msg: 'reciever msg' },
                { id: '198', type: 'reciver', msg: 'reciever msg' },
                { id: '199', type: 'sender', msg: 'sender msg' },
                { id: '200', type: 'reciver', msg: 'reciever msg' },
                { id: '201', type: 'sender', msg: 'sender msg' },
                { id: '202', type: 'sender', msg: 'sender msg' },
                { id: '203', type: 'sender', msg: 'sender msg' },
                { id: '204', type: 'reciver', msg: 'reciever msg' },
                { id: '205', type: 'sender', msg: 'sender msg' },
                { id: '206', type: 'sender', msg: 'sender msg' },
                { id: '207', type: 'reciver', msg: 'reciever msg' },
                { id: '208', type: 'reciver', msg: 'reciever msg' },
                { id: '209', type: 'sender', msg: 'sender msg' },
                { id: '210', type: 'reciver', msg: 'reciever msg' },
                { id: '211', type: 'sender', msg: 'sender msg' },
                { id: '212', type: 'sender', msg: 'sender msg' },
                { id: '213', type: 'sender', msg: 'sender msg' },
                { id: '214', type: 'reciver', msg: 'reciever msg' },
                { id: '215', type: 'sender', msg: 'sender msg' },
                { id: '216', type: 'sender', msg: 'sender msg' },
                { id: '217', type: 'reciver', msg: 'reciever msg' },
                { id: '218', type: 'reciver', msg: 'reciever msg' },
                { id: '219', type: 'sender', msg: 'sender msg' },
                { id: '220', type: 'reciver', msg: 'reciever msg' },
                { id: '221', type: 'sender', msg: 'sender msg' },
                { id: '222', type: 'sender', msg: 'sender msg' },
                { id: '223', type: 'sender', msg: 'sender msg' },
                { id: '224', type: 'reciver', msg: 'reciever msg' },
                { id: '225', type: 'sender', msg: 'sender msg' },
                { id: '226', type: 'sender', msg: 'sender msg' },
                { id: '227', type: 'reciver', msg: 'reciever msg' },
                { id: '228', type: 'reciver', msg: 'reciever msg' },
                { id: '229', type: 'sender', msg: 'sender msg' },
                { id: '230', type: 'reciver', msg: 'reciever msg' },
                { id: '231', type: 'sender', msg: 'sender msg' },
                { id: '232', type: 'sender', msg: 'sender msg' },
                { id: '233', type: 'sender', msg: 'sender msg' },
                { id: '234', type: 'reciver', msg: 'reciever msg' },
                { id: '235', type: 'sender', msg: 'sender msg' },
                { id: '236', type: 'sender', msg: 'sender msg' },
                { id: '237', type: 'reciver', msg: 'reciever msg' },
                { id: '238', type: 'reciver', msg: 'reciever msg' },
                { id: '239', type: 'sender', msg: 'sender msg' },
                { id: '240', type: 'reciver', msg: 'reciever msg' },
                { id: '241', type: 'sender', msg: 'sender msg' },
                { id: '242', type: 'sender', msg: 'sender msg' },
                { id: '243', type: 'sender', msg: 'sender msg' },
                { id: '244', type: 'reciver', msg: 'reciever msg' },
                { id: '245', type: 'sender', msg: 'sender msg' },
                { id: '246', type: 'sender', msg: 'sender msg' },
                { id: '247', type: 'reciver', msg: 'reciever msg' },
                { id: '248', type: 'reciver', msg: 'reciever msg' },
                { id: '249', type: 'sender', msg: 'sender msg' },
                { id: '250', type: 'reciver', msg: 'reciever msg' },
                { id: '251', type: 'sender', msg: 'sender msg' },
                { id: '252', type: 'sender', msg: 'sender msg' },
                { id: '253', type: 'sender', msg: 'sender msg' },
                { id: '254', type: 'reciver', msg: 'reciever msg' },
                { id: '255', type: 'sender', msg: 'sender msg' },
                { id: '256', type: 'sender', msg: 'sender msg' },
                { id: '257', type: 'reciver', msg: 'reciever msg' },
                { id: '258', type: 'reciver', msg: 'reciever msg' },
                { id: '259', type: 'sender', msg: 'sender msg' },
                { id: '260', type: 'reciver', msg: 'reciever msg' },
                { id: '261', type: 'sender', msg: 'sender msg' },
                { id: '262', type: 'sender', msg: 'sender msg' },
                { id: '263', type: 'sender', msg: 'sender msg' },
                { id: '264', type: 'reciver', msg: 'reciever msg' },
                { id: '265', type: 'sender', msg: 'sender msg' },
                { id: '266', type: 'sender', msg: 'sender msg' },
                { id: '267', type: 'reciver', msg: 'reciever msg' },
                { id: '268', type: 'reciver', msg: 'reciever msg' },
                { id: '269', type: 'sender', msg: 'sender msg' },
                { id: '270', type: 'reciver', msg: 'reciever msg' },
                { id: '271', type: 'sender', msg: 'sender msg' },
                { id: '272', type: 'sender', msg: 'sender msg' },
                { id: '273', type: 'sender', msg: 'sender msg' },
                { id: '274', type: 'reciver', msg: 'reciever msg' },
                { id: '275', type: 'sender', msg: 'sender msg' },
                { id: '276', type: 'sender', msg: 'sender msg' },
                { id: '277', type: 'reciver', msg: 'reciever msg' },
                { id: '278', type: 'reciver', msg: 'reciever msg' },
                { id: '279', type: 'sender', msg: 'sender msg' },
                { id: '280', type: 'reciver', msg: 'reciever msg' },
                { id: '281', type: 'sender', msg: 'sender msg' },
                { id: '282', type: 'sender', msg: 'sender msg' },
                { id: '283', type: 'sender', msg: 'sender msg' },
                { id: '284', type: 'reciver', msg: 'reciever msg' },
                { id: '285', type: 'sender', msg: 'sender msg' },
                { id: '286', type: 'sender', msg: 'sender msg' },
                { id: '287', type: 'reciver', msg: 'reciever msg' },
                { id: '288', type: 'reciver', msg: 'reciever msg' },
                { id: '289', type: 'sender', msg: 'sender msg' },
                { id: '290', type: 'reciver', msg: 'reciever msg' },
                { id: '291', type: 'sender', msg: 'sender msg' },
                { id: '292', type: 'sender', msg: 'sender msg' },
                { id: '293', type: 'sender', msg: 'sender msg' },
                { id: '294', type: 'reciver', msg: 'reciever msg' },
                { id: '295', type: 'sender', msg: 'sender msg' },
                { id: '296', type: 'sender', msg: 'sender msg' },
                { id: '297', type: 'reciver', msg: 'reciever msg' },
                { id: '298', type: 'reciver', msg: 'reciever msg' },
                { id: '299', type: 'sender', msg: 'sender msg' },
            ]
        };
    }

    componentDidMount() {

    }

    returnChatStyle = (item, index) => {
        const { msgs } = this.state;
        if (item.type === 'sender') {
            if (index === msgs.length - 1) {
                return styles.senderChatBox;
            } else if (item.type !== msgs[index + 1].type) {
                return styles.senderChatBox;
            } else {
                return styles.restSenderChatBox;
            }
        } else {
            if (index === msgs.length - 1) {
                return styles.recieverChatBox;
            } else if (item.type !== msgs[index + 1].type) {
                return styles.recieverChatBox;
            } else {
                return styles.restRecieverChatBox;
            }
        }
    }
    returnDummyChatStyle = () => {
        const { msgs } = this.state;
        if (msgs[0].type !== 'sender') {
            return styles.senderChatBox;
        } else {
            return styles.restSenderChatBox;
        }
    }

    isTrianglePresent = (item, index) => {
        const { msgs } = this.state;
        if (item.type === 'sender') {
            if (index === msgs.length - 1) {
                return true;
            } else if (item.type !== msgs[index + 1].type) {
                return true;
            } else {
                return false;
            }
        } else {
            if (index === msgs.length - 1) {
                return true;
            } else if (item.type !== msgs[index + 1].type) {
                return true;
            } else {
                return false;
            }
        }
    }

    isDummyTrianglePresent = () => {
        const { msgs } = this.state;
        if (msgs[0].type !== 'sender') {
            return true;
        } else {
            return false;
        }
    }

    renderChatItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ width, marginTop: this.isTrianglePresent(item, index) ? 4 : 4, marginBottom: index === 0 ? 10 : 0 }} activeOpacity={Platform.OS === 'ios' ? 0.6 : 0.9}>
                <View style={item.type === 'sender' ? styles.senderChat : styles.recieverChat}>
                    <View
                        style={[
                            styles.chatItem,
                            this.returnChatStyle(item, index)
                        ]}>

                        {item.type === 'sender' ?
                            <View style={{ minHeight: 37, paddingHorizontal: 7, paddingTop: 8 }}>
                                <Text style={{ paddingRight: 40, color: '#041f29' }}>{item.msg}</Text>
                                <View style={{ alignSelf: 'flex-end', flexDirection: 'row', alignItems: 'center', marginBottom: 5, width: 70 }}>
                                    <Text style={{ color: '#b0b0b0', fontSize: 11 }}> 02:12PM </Text>
                                    {/* <Text>✓</Text>
                                    <Text style={{ marginLeft: -8 }}>✓</Text> */}
                                </View>
                            </View>
                            :
                            <View style={{ minHeight: 37, paddingHorizontal: 7, paddingTop: 8 }}>
                                <Text style={{ paddingRight: 40, color: '#ffffff' }}>{item.msg}</Text>
                                <Text style={{ alignSelf: 'flex-end', color: '#e6e6e6', fontSize: 11, marginBottom: 5 }}> 02:12PM </Text>
                            </View>
                        }

                        {/* //// left and right trianglr corner component (absolute position) ////// */}
                        {item.type === 'reciver' && this.isTrianglePresent(item, index) &&
                            <View style={styles.recieveTriangleCorner} />
                        }
                        {item.type === 'sender' && this.isTrianglePresent(item, index) &&
                            <View style={styles.senderTriangleCorner} />
                        }
                    </View>

                </View>
            </TouchableOpacity>
        );
    }

    recieveMsg = () => {
        const { msgs, message } = this.state;
        if (message.length !== 0) {
            this.setState({ positionLeft: true, showInstant: true, }, () => {
                this.msgInput.clear();
                let data = [...msgs];
                data.unshift({ id: Math.random(), type: 'reciver', msg: message });
                setTimeout(() => {
                    this.setState({ msgs: data, msg: '', showInstant: false });
                }, 10);
            })
        }
    }

    sendMsg = () => {
        // this.msgInput.clear();
        // console.log(this.myRef)
        this.myRef.current.clear();
        const { msgs, message } = this.state;
        // this.setState({ message: '' });

        // let data = [...msgs];
        // data.unshift({ id: Math.random(), type: 'sender', msg: message });

        // this.setState({ msgs: data, message: '', showInstant: false });
        // this.msg = '';



        if (message.length !== 0) {
            // this.setState({ positionLeft: false, showInstant: true, }, () => {
            let data = [...msgs];
            data.unshift({ id: Math.random().toString(), type: 'sender', msg: message });
            // setTimeout(() => {
            this.setState({ msgs: data, message: '', showInstant: false });
            // }, 10);
            // });
        }

    }

    handleScroll = (event) => {
        this.setState({ scrollValue: event.nativeEvent.contentOffset.y })
    }

    render() {
        const { msgs, showInstant, positionLeft, scrollValue, message } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>

                </View>
                <KeyboardAvoidingView style={styles.chatSection} behavior={Platform.OS === 'ios' && "padding"} >
                    <FlatList
                        ref={(e) => this.flatList = e}
                        style={showInstant && { marginTop: -50, }}
                        data={msgs}
                        // extraData={this.state}
                        keyExtractor={item => item.id}
                        renderItem={this.renderChatItem}
                        // showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps="always"
                        inverted
                        // removeClippedSubviews={true}
                        // windowSize={21}
                        onScroll={this.handleScroll}
                    // legacyImplementation={true}
                    // updateCellsBatchingPeriod={100}
                    />

                    {/* <ScrollView
                        ref={(e) => this.flatList = e}
                        onLayout={() => this.flatList.scrollToEnd({ animated: false })}
                        keyboardShouldPersistTaps="always"
                    >
                        {
                            msgs.map((item, index) => {
                                return this.renderChatItem({ item, index });
                            })
                        }
                    </ScrollView> */}

                    {/* this is a dummy chat box fpr better user experience */}
                    {showInstant && !positionLeft && scrollValue === 0 &&
                        <Animated.View style={{
                            width, marginTop: scrollValue - 6, marginBottom: 10 - scrollValue,
                            transform: [{ translateY: scrollValue }],
                        }} activeOpacity={Platform.OS === 'ios' ? 0.6 : 0.9}>
                            <View style={!positionLeft ? styles.senderChat : styles.recieverChat}>
                                <View
                                    style={[
                                        styles.chatItem,
                                        this.returnDummyChatStyle()
                                    ]}>
                                    <View style={{ minHeight: 37, paddingHorizontal: 7, paddingTop: 8 }}>
                                        <Text style={{ paddingRight: 40, color: '#041f29' }}>{message}</Text>
                                        <View style={{ alignSelf: 'flex-end', flexDirection: 'row', alignItems: 'center', marginBottom: 5, width: 70 }}>
                                            <Text style={{ color: '#b0b0b0', fontSize: 11 }}> 02:12PM </Text>
                                            {/* <Text>✓</Text> */}
                                            {/* <Text style={{ marginLeft: -8 }}>✓</Text> */}
                                        </View>
                                    </View>

                                    {/* //// left and right trianglr corner component (absolute position) ////// */}
                                    {this.isDummyTrianglePresent() &&
                                        <View style={styles.senderTriangleCorner} />
                                    }
                                </View>

                            </View>
                        </Animated.View>

                    }


                    <View style={{ width, flexDirection: 'row', alignItems: 'center', height: 50, justifyContent: 'space-between', backgroundColor: 'white', }}>
                        <TouchableOpacity onPressOut
                            ={this.recieveMsg} style={{ paddingHorizontal: 20 }}>
                            <Text>Left</Text>
                        </TouchableOpacity>
                        {/* <Text>{scrollValue}</Text> */}

                        <TextInput autoCorrect={false} value={message} ref={this.myRef} onChangeText={(txt) => this.setState({ message: txt })} style={{ flex: 1, backgroundColor: '#eeeeee', height: '100%', borderRadius: 50, paddingHorizontal: 10 }} />

                        <TouchableOpacity onPressOut={this.sendMsg}>
                            <Text style={{ margin: 20 }}>Right</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        height: 85,
        width,
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowRadius: 1,
        shadowOffset: {
            height: 2,
            width: 0
        },
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    chatSection: {
        flex: 1,
        backgroundColor: '#eeeeee',
        zIndex: -1,
        marginTop: -20,
        paddingTop: 20
    },
    senderChat: {
        width,
        paddingHorizontal: 20,
        alignItems: 'flex-end',
        backgroundColor: '#eeeeee'
    },
    recieverChat: {
        width,
        paddingHorizontal: 20,
        alignItems: 'flex-start',
        backgroundColor: '#eeeeee'
    },
    chatItem: {
        elevation: 2,
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 0
        },
    },
    // first chat item with triangle corner (reciever)
    recieverChatBox: {
        backgroundColor: '#00cad7',
        maxWidth: width * 3 / 4,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
    },
    recieveTriangleCorner: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 10,
        borderTopWidth: 10,
        borderRightColor: 'transparent',
        borderTopColor: '#00cad7',
        transform: [{ rotate: '90deg' }],
        position: 'absolute',
        left: -10,
    },
    // first chat item with triangle corner (sender)
    senderChatBox: {
        backgroundColor: '#ffffff',
        maxWidth: width * 3 / 4,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 5
    },
    senderTriangleCorner: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 10,
        borderTopWidth: 10,
        borderRightColor: 'transparent',
        borderTopColor: '#ffffff',
        position: 'absolute',
        right: -10,
    },
    // rest of chat items with non triangle corner 
    restRecieverChatBox: {
        backgroundColor: '#00cad7',
        borderRadius: 8,
    },
    restSenderChatBox: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
    },
});