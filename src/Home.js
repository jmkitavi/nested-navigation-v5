import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen v5</Text>
      <Button
        title="Navigation v5 Blog"
        onPress={() => navigation.push('Blog', { name: 'Navigation v5 Blog' })}
      />
      <Button
        title="React Native Blog"
        onPress={() => navigation.push('Blog', { name: 'React Native Blog' })}
      />
    </View>
  )
}

export const Blog = ({ route }) => {
  const blogName = route.params.name

  return (
    <View style={styles.container}>
      <Text>{blogName}</Text>
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
