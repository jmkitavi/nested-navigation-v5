import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen v5</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Home
