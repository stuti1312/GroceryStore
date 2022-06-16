import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeRoute from './src/navigators/HomeRoute'

const App = () => {
  return (
    <NavigationContainer>
      <HomeRoute />
    </NavigationContainer>
  )
}

export default App
