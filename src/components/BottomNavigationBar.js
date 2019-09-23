import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
const { width, height } = Dimensions.get('window');

export default class BottomNavigationBar extends Component {
    constructor() {
        super();
        this.state = {
            active: 1,
            routes: [
                { label: 'Calls', icon: require('../../assets/images/call.png') },
                { label: 'Chats', icon: require('../../assets/images/chat.png') },
                { label: 'Camera', icon: require('../../assets/images/camera.png') },
                { label: 'Transact', icon: require('../../assets/images/transaction.png') },
                { label: 'Settings', icon: require('../../assets/images/settings.png') },
            ],
        }
    }

    onSelectRoute = (index) => {
        this.setState({ active: index });
        // navigate here
    }

    render() {
        const { active, routes } = this.state;
        return (
            <View style={styles.BottomContainer}>
                {
                    routes.map((item, index) => (
                        <TouchableOpacity onPress={() => this.onSelectRoute(index)}>
                            <View style={styles.itemContainer}>
                                <Image source={item.icon} style={[styles.icons, { tintColor: active === index ? '#00a4bd' : '#8a8b99' }]} />
                                <Text style={[styles.iconText, { color: active === index ? '#00a4bd' : '#8a8b99' }]}>{item.label}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    BottomContainer: {
        height: 85,
        width,
        position: 'absolute',
        top: height - (85 + (StatusBar.currentHeight ? StatusBar.currentHeight : 0)),
        backgroundColor: '#ffffff',
        elevation: 5,
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 0
        },
        flexDirection: 'row',
        paddingTop: 12,
        justifyContent: 'space-around'
    },
    itemContainer: {
        minWidth: 50,
        alignItems: 'center'
    },
    icons: {
        minHeight: 25,
    },
    iconText: {
        fontSize: 12
    }
});