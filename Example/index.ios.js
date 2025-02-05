/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
const {
  AppRegistry,
  StyleSheet,
  View,
  LinkingIOS,
  AlertIOS,
} = React;

import ParsedText from 'react-native-parsed-text';

class Example extends React.Component {
  static displayName = 'Example';

  handleUrlPress(url) {
    LinkingIOS.openURL(url);
  }

  handlePhonePress(phone) {
    AlertIOS.alert(`${phone} has been pressed!`);
  }

  handleNamePress(name) {
    AlertIOS.alert(`Hello ${name}`);
  }

  handleEmailPress(email) {
    AlertIOS.alert(`send email to ${email}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <ParsedText
          style={styles.text}
          parse={
            [
              {type: 'url',          style: styles.url, onPress: this.handleUrlPress},
              {type: 'phone',        style: styles.phone, onPress: this.handlePhonePress},
              {type: 'email',        style: styles.email, onPress: this.handleEmailPress},
              {pattern: /Bob|David/, style: styles.name, onPress: this.handleNamePress},
              {pattern: /42/,        style: styles.magicNumber},
              {pattern: /#(\w+)/,    style: styles.hashTag},
            ]
          }
        >
          Hello this is an example of the ParsedText, links like http://www.google.com or http://www.facebook.com are clickable and phone number 444-555-6666 can call too.
          But you can also do more with this package, for example Bob will change style and David too. foo@gmail.com
          And the magic number is 42!
          #react #react-native
        </ParsedText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  url: {
    color: 'red',
    textDecorationLine: 'underline',
  },

  email: {
    textDecorationLine: 'underline',
  },

  text: {
    color: 'black',
    fontSize: 15,
  },

  phone: {
    color: 'blue',
    textDecorationLine: 'underline',
  },

  name: {
    color: 'red',
  },

  magicNumber: {
    fontSize: 42,
    color: 'pink',
  },

  hashTag: {
    fontStyle: 'italic',
  },

});

AppRegistry.registerComponent('Example', () => Example);
