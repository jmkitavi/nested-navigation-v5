import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen v5</Text>
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
