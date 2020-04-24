import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen v5</Text>
    </View>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
