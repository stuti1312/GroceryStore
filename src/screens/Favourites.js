import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { colors } from '../styles/Colors';
import { fonts } from '../styles/Fonts';
import Gap from '../reusables/Gap';

const Favorite = () => {
  const [data, setData] = useState([])
  const favouriteData = [
    { id: 1, title: "check your profile", desc: "i'm not complete yet" },
    { id: 2, title: "check your name", desc: "i'm not complete yet" },
    { id: 3, title: "check your profile", desc: "i'm not complete yet" },
    { id: 4, title: "check your store", desc: "i'm not complete yet" },
    { id: 5, title: "check your account", desc: "i'm not complete yet" },
  ]
  return (
    <View style={{ margin: 20, flex: 1 }}>
      <Text style={[styles.txt, { flex: 2 }]}>USER PROFILE</Text>
      <Gap height={20} />
      <View>
        <Text style={[styles.txt, { flex: 4 }]}>USER INFO</Text>
        {data.map((itm, index) => {
          <>
            <Text>{itm.title}</Text>
            <Text>{itm.desc}</Text>
          </>
        })}

      </View>
    </View>
  )
}


export default Favorite

const styles = StyleSheet.create({
  txt: { color: colors.BLACK, borderWidth: 2, borderRadius: 5, borderColor: colors.GRAY,padding:20,}
})