import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Test = () => {
  const [data, setData] = useState({
    Name: '',
    CityName: '',
    Age: '',
    Email:'',
    test:""
  })
  const [checkName, setCheckName] = useState(false)
  const navigation = useNavigation()
  const handleName = (val) => {
    setData({ ...data, Name: val })
    if (val === '') {
      setCheckName(true);
    }else{
      
      setCheckName(false);
    }
  }
  const onSubmit = () => {
    if (data.Name === '') {
      setCheckName(true);
    } else {
      navigation.navigate('test2',{item:data})
    }
  }
  console.log("Data :::::::::::::::::::::: ", data);
  return (
    <View>
      <TextInput
        placeholder={"enter Name"}
        onChangeText={(text) => handleName(text)}
        value={data?.Name}
      />
      {checkName ? <Text>error</Text> : null}
      <TouchableOpacity
        style={{
          backgroundColor: 'orange',
          width: '60%',
          height: '20%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPress={onSubmit}
      >
        <Text>Test</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})