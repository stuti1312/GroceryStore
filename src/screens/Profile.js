import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { colors } from '../styles/Colors';
import { fonts } from '../styles/Fonts';
import Gap from '../reusables/Gap';

const Profile = () => {
  return (
    <View style={{ margin: 20, flex: 1 }}>
      <Text style={[styles.txt, { flex: 2 }]}>USER PROFILE</Text>
      <Gap height={20} />
      <Text style={[styles.txt, { flex: 4 }]}>USER INFO</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  txt: { color: colors.BLACK, borderWidth: 2, borderRadius: 5, borderColor: colors.GRAY, padding: 20, }
})