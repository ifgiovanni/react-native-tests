/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  NativeModules,
  TouchableOpacity,
} from 'react-native';

var HelloWorld = NativeModules.HelloWorld;

export default class App extends Component {
  async sayHiFromJava() {
    HelloWorld.sayHi(
      err => {
        console.log(err);
      },
      msg => {
        console.log(msg);
      },
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Hello World!</Text>
        <TouchableOpacity onPress={this.sayHiFromJava}>
          <Text>Invoke native Java code</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
