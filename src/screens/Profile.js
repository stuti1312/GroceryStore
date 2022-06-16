import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { colors } from '../styles/Colors';
import { fonts } from '../styles/Fonts';

const Profile = () => {
  return (
    <View styl={styles.container}>
      <Text style={styles.txt}>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center", backgroundColor: colors.LIGHT_GRAY, padding: 10, margin: 20 },
  txt: { color: colors.BLACK, borderWidth: 2, borderRadius: 5, borderColor: colors.GRAY }
})