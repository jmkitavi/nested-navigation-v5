import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export const Tab1 = () => {
  return (
    <View style={[styles.container, { backgroundColor: '#764ABC'}]}>
      <Text>Tab 1 Screen</Text>
    </View>
  )
}

export const Tab2 = () => {
  return (
    <View style={[styles.container, { backgroundColor: 'purple' }]}>
      <Text>Tab 2 Screen</Text>
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
