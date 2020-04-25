import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import { AuthenticationContext } from "./context"

const SignIn = () => {
  const { logIn } = React.useContext(AuthenticationContext);

  return (
    <View style={styles.container}>
      <Text>Sign In Screen v5</Text>
      <Button
        title="Sign In"
        onPress={() => logIn()}
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

export default SignIn
