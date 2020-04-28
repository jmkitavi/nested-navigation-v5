import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen v5</Text>
      <Button
        title="Open Drawer"
        onPress={() => navigation.openDrawer()}
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

export default Settings
