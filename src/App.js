import React, { useState, useMemo } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { AuthenticationContext } from "./context"
import Home from './Home'
import Settings from './Settings'
import SignIn from './SignIn'

const AppStack = createStackNavigator()

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const authenticationContext = useMemo(() => {
    return {
      logIn: () => {
        setIsLoggedIn(true)
      }
    }
  }, [])

  return (
    <AuthenticationContext.Provider value={authenticationContext}>
      <NavigationContainer>
        <AppStack.Navigator>
          {isLoggedIn ? (
            <>
              <AppStack.Screen name="Home" component={Home} />
              <AppStack.Screen name="Settings" component={Settings} />
            </>
          ) : (
            <AppStack.Screen name="SignIn" component={SignIn} />
          )}
        </AppStack.Navigator>
      </NavigationContainer>
    </AuthenticationContext.Provider>
  )
}

export default App
