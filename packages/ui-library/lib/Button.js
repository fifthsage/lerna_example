import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  root: {
    padding: 16,
    backgroundColor: 'red',
    borderRadius: 4,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

const Button = () => (
  <View style={style.root}>
    <Text style={style.text}>button</Text>
  </View>
);

export default Button;
