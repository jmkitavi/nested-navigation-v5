import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Home'
import Settings from './Settings'

const AppStack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Settings" component={Settings} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default App
