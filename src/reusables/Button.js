import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../styles/Colors';
import { fonts } from '../styles/Fonts';

const Button = ({ onPress, text, bgColor }) => {
  return (
    <View>
      <TouchableOpacity style={[styles.container, { backgroundColor: bgColor }]} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.LIGHT_GREEN,
    // height: 50,
    // width: 260,
    // flex: 1,
    paddingHorizontal: 40,
    paddingVertical:15,
    borderRadius: 15,
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
