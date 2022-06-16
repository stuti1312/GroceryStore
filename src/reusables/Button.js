import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {colors} from '../styles/Colors';
import {fonts} from '../styles/Fonts';

const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.LIGHT_GREEN,
    height: 50,
    width: 259,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.MEDIUM,
    color: colors.WHITE,
    textAlign: 'center',
  },
});
