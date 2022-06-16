import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React , {useState}from 'react'

const Test2 = ({route}) => {
    const {item} = route.params;
    const [first, setfirst] = useState(item)
    console.log("item : ",first);
    const handleName = (val) => {
        setfirst({...first, Email:val})
    }
    return (
    <View>
      <Text>Test2</Text>
      <TextInput
        placeholder={"enter Name"}
        onChangeText={(text) => handleName(text)}
        value={first?.Email}
      />
    </View>
  )
}

export default Test2

const styles = StyleSheet.create({})