// import React, { Component } from 'react'
// import { Text, View, PermissionsAndroid, Platform } from 'react-native'
// import Contacts from 'react-native-contacts';

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {}
//   }

//   componentDidMount() {

//     if (Platform.OS === 'ios') {
//       Contacts.getAll((err, contacts) => {
//         if (err) {
//           throw err;
//         }
//         console.log('contacts==>>>', contacts)
//       })
//     } else {
//       PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
//         {
//           'title': 'Contacts',
//           'message': 'This app would like to view your contacts.'
//         }
//       ).then(() => {
//         Contacts.getAll((err, contacts) => {
//           if (err === 'denied') {
//             // error
//           } else {
//             console.log('contacts==>>>', contacts)
//           }
//         })
//       })
//     }
//   }

//   render() {
//     return (
//       <View>
//         <Text> textInComponent </Text>
//       </View>
//     )
//   }
// }



// import React from 'react'
// import { GiftedChat } from 'react-native-gifted-chat'

// export default class Example extends React.Component {
//   state = {
//     messages: [{
//       _id: 1,
//       text: 'Hello developer',
//       createdAt: new Date(),
//       user: {
//         _id: 2,
//         name: 'React Native',
//         avatar: 'https://placeimg.com/140/140/any',
//       }
//     }]
//   }



//   onSend(messages = []) {
//     console.log('messages', messages);
//     this.setState(previousState => ({
//       messages: GiftedChat.append(previousState.messages, messages),
//     }))
//   }

//   render() {
//     return (Platform.OS === 'ios' ?
//       <GiftedChat
//         messages={this.state.messages}
//         onSend={messages => this.onSend(messages)}
//         user={{
//           _id: 1,
//         }}
//       />
//       :
//       <GiftedChat
//         messages={this.state.messages}
//         onSend={messages => this.onSend(messages)}
//         user={{
//           _id: 2,
//         }}
//       />
//     )
//   }
// }








// import React from 'react';
// import { StyleSheet, Text, TouchableHighlight, View, ScrollView } from 'react-native';

// var { client, jid, xml } = require('./xmpp.js/packages/client');

// var base64 = require('base-64');
// global.btoa = base64.encode;
// global.atob = base64.decode;

// export default class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       output: ''
//     }
//     this.xmppClientListeners = [];
//     this.xmppClient = client({
//       // service: 'http://localhost:5280/admin',
//       // domain: 'localhost',
//       // resource: 'example',
//       // username: 'admin',
//       // password: 'password',
//       service: 'ws://192.168.1.4:5280/xmpp',
//       domain: '192.168.1.4'
//     });
//     // you XMPP server endpoints
//     //
//     // this.XMPPServerOptions = {
//     //   service: 'ws://localhost:5280/xmpp-websocket',
//     //   domain: 'localhost'
//     // };
//     // Demo user credentials (25045–19@chat.connectycube.com)
//     //
//     this.XMPPUserCredentials = {
//       jidLocalPart: '25045–19',
//       password: 'securepwd123'
//     };
//   }


//   addListeners = () => {
//     var self = this;
//     var removeAllListeners = function () {
//       self.xmppClientListeners.forEach(function (listener) {
//         self.xmppClient.removeListener(listener.name,
//           listener.callback);
//       });
//       self.xmppClientListeners = [];
//     }
//     removeAllListeners();
//     const callbackConnect = function () {
//       self.log('CONNECTING');
//     };
//     this.xmppClient.on('connect', callbackConnect);
//     this.xmppClientListeners.push({
//       name: 'connect',
//       callback: callbackConnect
//     });
//     const callbackOnline = function (jid) {
//       self.log('ONLINE');
//     };
//     this.xmppClient.on('online', callbackOnline);
//     this.xmppClientListeners.push({
//       name: 'online',
//       callback: callbackOnline
//     });
//     const callbackStatus = function (status, value) {
//       // self.log('status: ' + status);
//     };
//     this.xmppClient.on('status', callbackStatus);
//     this.xmppClientListeners.push({
//       name: 'status',
//       callback: callbackStatus
//     });
//     // this.xmppClientReconnect.on('reconnecting', function() {
//     //     Utils.DLog('[Chat]', 'RECONNECTING');
//     // });
//     //
//     // this.xmppClientReconnect.on('reconnected', function() {
//     //     Utils.DLog('[Chat]', 'RECONNECTED');
//     // });
//     const callbackStanza = function (stanza) {
//       // console.log('stanza', stanza.toString())
//       // after 'input' and 'element' (only if stanza, not nonza)
//       if (stanza.is('presence')) {
//         self.log("On PRESENCE: " + stanza);
//       } else if (stanza.is('iq')) {
//         self.log("On IQ: " + stanza);
//       } else if (stanza.is('message')) {
//         self.log("On MESSAGE: " + stanza);
//       }
//     };
//     this.xmppClient.on('stanza', callbackStanza);
//     this.xmppClientListeners.push({
//       name: 'stanza',
//       callback: callbackStanza
//     });
//     const callbackError = function (err) {
//       self.log('ERROR:', err);
//     };
//     this.xmppClient.on('error', callbackError);
//     this.xmppClientListeners.push({
//       name: 'error',
//       callback: callbackError
//     });
//     // this.xmppClient.on('element', function(element) {
//     //     // console.log('element', element.toString())
//     //     // after 'input'
//     // });
//     // this.xmppClient.on('send', function(element) {
//     //     // console.log('send', element.toString())
//     //     // after write to socket
//     // });
//     // this.xmppClient.on('outgoing', function(element) {
//     //     // before send
//     //     // console.log('outgoing', element.toString())
//     // });
//     const callbackOutput = function (str) {
//       // self.log('SENT:', str);
//     };
//     this.xmppClient.on('output', callbackOutput);
//     this.xmppClientListeners.push({
//       name: 'output',
//       callback: callbackOutput
//     });
//     const callbackInput = function (str) {
//       // self.log('RECV:', str);
//     };
//     this.xmppClient.on('input', callbackInput);
//     this.xmppClientListeners.push({
//       name: 'input',
//       callback: callbackInput
//     });

//     // const callbackAuthenticate = function (authenticate) {
//     //   self.log('AUTHENTICATING');
//     //   return authenticate(self.XMPPUserCredentials.jidLocalPart,
//     //     self.XMPPUserCredentials.password)
//     // };
//     // this.xmppClient.handle('authenticate', callbackAuthenticate);
//     // this.xmppClientListeners.push({
//     //   name: 'authenticate',
//     //   callback: callbackAuthenticate
//     // });
//   }

//   connect = (options) => {
//     this.xmppClient.start();
//   }

//   log = (text) => {
//     console.log(text);
//     this.setState({ output: this.state.output + "\n" + text })
//   }

//   onStartConnect = () => {
//     // this.addListeners();
//     // this.connect(this.XMPPServerOptions);

//     this.xmppClient.on('error', err => {
//       console.error('❌', err.toString())
//     })

//     this.xmppClient.on('offline', () => {
//       console.log('⏹', 'offline')
//     })

//     this.xmppClient.on('stanza', async stanza => {
//       if (stanza.is('message')) {
//         await this.xmppClient.send(xml('presence', { type: 'unavailable' }))
//         await this.xmppClient.stop()
//       }
//     })

//     this.xmppClient.on('online', async address => {
//       console.log('▶', 'online as', address.toString())

//       // Makes itself available
//       await this.xmppClient.send(xml('presence'))

//       // Sends a chat message to itself
//       const message = xml(
//         'message',
//         { type: 'chat', to: address },
//         xml('body', 'hello world')
//       )
//       await this.xmppClient.send(message)
//     })

//     // Debug
//     this.xmppClient.on('status', status => {
//       console.debug('🛈', 'status', status)
//     })
//     this.xmppClient.on('input', input => {
//       console.debug('⮈', input)
//     })
//     this.xmppClient.on('output', output => {
//       console.debug('⮊', output)
//     })

//     this.xmppClient.start().catch(console.error)

//   }
//   onSendMessage = () => {
//   }
//   render() {
//     var buttons = (
//       <View style={styles.container}>
//         <TouchableHighlight
//           onPress={this.onStartConnect}
//           style={styles.button}>
//           <Text style={styles.buttonText}>
//             Connect to XMPP server (login)
//           </Text>
//         </TouchableHighlight>
//         <TouchableHighlight
//           onPress={this.onSendMessage}
//           style={styles.button}>
//           <Text style={styles.buttonText}>
//             Send a message
//           </Text>
//         </TouchableHighlight>
//       </View>
//     );
//     return (
//       <View style={styles.container}>
//         <Text style={styles.output_result}>
//           {this.state.output}
//         </Text>
//         {buttons}
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     height: 50,
//     backgroundColor: '#48BBEC',
//     alignSelf: 'stretch',
//     marginTop: 10,
//     justifyContent: 'center',
//   },
//   buttonText: {
//     fontSize: 22,
//     color: '#FFF',
//     alignSelf: 'center'
//   },
//   output_result: {
//     color: '#000',
//     marginTop: 20,
//   }
// });




import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TextInput,
  FlatList,
  Image,
  StatusBar,
  Animated,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  ActivityIndicator
} from 'react-native';
import BottomNavigationBar from "./src/components/BottomNavigationBar";
var SQLite = require('react-native-sqlite-storage');
const { width, height } = Dimensions.get('window');

// SQLite.DEBUG(true);
SQLite.enablePromise(false);

const databaseName = 'Test.db';
const databaseVersion = '1.0';
const databaseDisplayname = 'SQLite Test Database';
const databaseSize = 200000;
let db;

let DATA = null;


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      scrollPosition: 0,
      focused: false,
      searchAnimationValue: new Animated.Value(0),
      scrollY: new Animated.Value(0),
    }
  }

  componentDidMount() {
    db = SQLite.openDatabase(databaseName, databaseVersion,
      databaseDisplayname, databaseSize,
      this.openCB, this.errorCB);
    // db.executeSql('DROP TABLE IF EXISTS BuildingImages;');
    db.executeSql('CREATE TABLE IF NOT EXISTS Messages( '
      + 'id VARCHAR(50), '
      + 'name VARCHAR(50), '
      + 'msg VARCHAR(50));', []);
    db = SQLite.openDatabase(databaseName, databaseVersion, databaseDisplayname, databaseSize, this.openCB, this.errorCB);
    // for(let i = 1; i <= 100; i++){
    //   db.executeSql(`INSERT INTO Messages (id,name,msg) VALUES ('${i}','aswin','hi there...');`, []);
    // }

    // db.executeSql(`DELETE FROM Messages`, [], this.getMessages, this.errorCB);
    db.executeSql(`SELECT * FROM Messages`, [], this.getMessages, this.errorCB);

  }

  getMessages = (results) => {
    console.log('result ===>>> \n', results);
    var len = results.rows.length;
    DATA = []
    for (let i = 0; i < len; i++) {
      let row = results.rows.item(i);
      DATA.push(row);
      console.log(`id: ${row.id}, name: ${row.name}, Msg: ${row.msg}`);
    }
    this.setState({})
  }

  errorCB(err) {
    console.log("SQL Error: " + err);
  }

  successCB() {
    console.log("SQL executed fine");
  }

  openCB() {
    console.log("Database OPENED");
  };

  onFocus = () => {
    setTimeout(() => {
      const { searchAnimationValue } = this.state;
      Animated.timing(searchAnimationValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      this.setState({ focused: true });
    }, 100);
  }

  onBlur = () => {
    const { searchAnimationValue } = this.state;

    Animated.timing(searchAnimationValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => this.setState({ focused: false }));
  }

  onCancelInput = () => {
    const { focused } = this.state;
    if (focused) {
      this.serchInput.blur();
      this.serchInput.clear();
    } else {
      this.serchInput.focus()
    }
  }

  renderListItem = ({ item, index }) => {
    const { focused } = this.state;
    return (
      <TouchableOpacity style={[styles.item,
      index === DATA.length - 1 && { marginBottom: !focused ? 100 : 30 }]}>
        <View style={styles.itemInfo}>
          <Image source={{ uri: 'https://i.pinimg.com/originals/4e/99/32/4e99328532f963551f559b24ca651d99.jpg' }} style={styles.listImage} />
          <View style={styles.itemTexts}>
            <Text style={styles.itemText1}>Mohammed Ashif</Text>
            <Text style={styles.itemText2}>Bititude Technologies LLP</Text>
            <Text style={styles.itemText3}>How Plasma Tvs And Lcd T…</Text>
          </View>
        </View>
        <View style={styles.rightItems}>
          <Text style={styles.time}>5.16 PM</Text>
          <View style={styles.numberContainer}>
            <Text style={styles.number}>{index === DATA.length - 1 ? 5 : 2}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { searchAnimationValue, scrollY, focused } = this.state;

    const hideHeaderValue = searchAnimationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.5]
    });
    const moveIcon = searchAnimationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, width / 3]
    })
    const opacityValueIn = searchAnimationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })
    const opacityValueOut = searchAnimationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    })
    const moveList = searchAnimationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -60]
    })
    const moveHeader = searchAnimationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -60]
    })
    const moveInput = searchAnimationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -20]
    })
    const bgOpacity = searchAnimationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.1]
    })

    return (
      <SafeAreaView style={styles.container}>

        <Animated.View style={[styles.header,
        {
          transform: [{ scaleY: hideHeaderValue }, { translateY: moveHeader }],
          opacity: opacityValueOut,
        }]}>
          <View style={styles.flexRowBetween}>
            <Text style={styles.ProductName}>BusIn</Text>
            <Text style={styles.plus}>+</Text>
          </View>
          <View style={styles.flexRowBetween}>
            <Text style={styles.subHead}>Contacts</Text>
            <Text style={styles.subHead}>Connect Nearby</Text>
          </View>
        </Animated.View>

        {/* -----------search----------- */}
        <Animated.View style={[styles.search,
        {
          transform: [{ translateY: moveList },],
        }]}>
          <View style={styles.innerSearch}>
            <Animated.Image
              source={require('./assets/images/search.png')}
              style={[styles.searchIcon, { transform: [{ translateX: moveIcon }], opacity: opacityValueOut }]}
            />
            <Animated.View style={{ flex: 1, transform: [{ translateX: moveInput }] }}>
              <TextInput style={styles.searchInput} onFocus={this.onFocus} onBlur={this.onBlur} placeholder="Search..." ref={(e) => this.serchInput = e}
                blurOnSubmit={false} onSubmitEditing={(e) => { e.preventDefault(); Keyboard.dismiss() }} />
            </Animated.View>
            <Animated.View style={{
              opacity: opacityValueIn,
            }} >
              <TouchableOpacity onPress={this.onCancelInput}>
                <Text style={{ color: '#56c5d6', padding: 10 }}>Cancel</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </Animated.View>

        <KeyboardAvoidingView behavior='height' style={{ flex: 1 }}>
          <Animated.View style={{ flex: 1, marginBottom: focused ? -60 : 0, transform: [{ translateY: moveList }] }}>
            <Animated.View style={{ height: '100%', width: '100%', position: 'absolute', backgroundColor: '#333', opacity: bgOpacity, }} pointerEvents="none" />

            {DATA ? <FlatList
              data={DATA}
              renderItem={this.renderListItem}
              keyExtractor={() => Math.random()}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="always"
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
              )}
            />
              :
              <ActivityIndicator />}
          </Animated.View>
        </KeyboardAvoidingView>

        {!focused && <BottomNavigationBar />}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  ProductName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#12152e',
  },
  plus: {
    fontSize: 40,
  },
  subHead: {
    fontSize: 16,
    color: '#00a4bd'
  },
  header: {
    width: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
  },
  flexRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  search: {
    width: width,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerSearch: {
    height: 40,
    width: width - 30,
    borderRadius: 20,
    backgroundColor: '#f7f9fa55',
    paddingHorizontal: 15,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchIcon: {
    height: 21,
    width: 21
  },
  searchInput: {
    // width: '100%',
    flex: 1,
    fontSize: 17,
    color: '#838383',
    paddingLeft: 5
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  item: {
    width,
    height: 78,
    paddingTop: 10,
    paddingLeft: 15,
    borderTopWidth: 1,
    borderColor: '#e8e8e8',
  },
  itemInfo: {
    flexDirection: 'row'
  },
  itemTexts: {
    flex: 1
  },
  itemText1: {
    height: 18,
    fontSize: 15,
    color: '#12152e',
    fontWeight: '700'
  },
  itemText2: {
    height: 18,
    fontSize: 15,
    color: '#838383',
  },
  itemText3: {
    height: 18,
    fontSize: 15,
    color: '#c5c5c5',
  },
  rightItems: {
    position: 'absolute',
    top: 10,
    right: 24,
    alignItems: 'flex-end'
  },
  time: {
    height: 18,
    fontSize: 12,
    color: '#c5c5c5',
  },
  numberContainer: {
    width: 20,
    height: 20,
    backgroundColor: '#56c5d6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15
  },
  number: {
    fontSize: 12,
    color: '#ffffff',
  },
  listImage: {
    height: 48,
    width: 48,
    borderRadius: 24,
    marginRight: 20,
  },
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
    color: '#8a8b99',
    fontSize: 12
  }
});