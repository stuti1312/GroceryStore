import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Button from '../reusables/Button';
import Gap from "../reusables/Gap"
import {colors} from "../styles/Colors"
import {fonts} from "../styles/Fonts"
import { IL_GetStarted_PNG } from '../assets/images/Images';

const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Image source={IL_GetStarted_PNG} style={styles.image} />
      <View style={styles.wrapperSlogan}>
        <Text style={styles.txtSlogan}>Shop Your Daily </Text>
        <Text style={styles.txtSlogan}>Necessary</Text>
      </View>
      <Gap height={90} />
      <Button
        onPress={() => navigation.replace('MainApp')}
        text="Get Started"
        bgColor={colors.LIGHT_GREEN}
      />
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  screen: { flex: 1, paddingHorizontal: 20, justifyContent: 'center' },
  image: { height: 225, width: '100%', resizeMode: 'stretch' },
  wrapperSlogan: { marginTop: 51 },
  txtSlogan: {
    fontSize: 30,
    color: colors.LIGHT_GREEN,
    textAlign: 'center',
    fontFamily: fonts.SEMI_BOLD,
  },
});
