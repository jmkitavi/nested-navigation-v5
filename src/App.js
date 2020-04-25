import React, { useState, useMemo } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { AuthenticationContext } from "./context"
import Home from './Home'
import Settings from './Settings'
import SignIn from './SignIn'

const AppStack = createStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNav = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Settings" component={Settings} />
  </Drawer.Navigator>
)

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
        <AppStack.Navigator headerMode="none">
          {isLoggedIn ? (
            <AppStack.Screen name="Drawer" component={DrawerNav} />
          ) : (
            <AppStack.Screen name="SignIn" component={SignIn} />
          )}
        </AppStack.Navigator>
      </NavigationContainer>
    </AuthenticationContext.Provider>
  )
}

export default App
