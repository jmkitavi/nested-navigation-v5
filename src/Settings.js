import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen v5</Text>
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

export default Settings
