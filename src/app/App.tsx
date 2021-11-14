import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationPropList, NavigationScreens, linking } from '../models';
import Main from '../main';
import Privacy from '../privacy';

const Stack = createStackNavigator<NavigationPropList>();

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={NavigationScreens.Main} component={Main} />
        <Stack.Screen name={NavigationScreens.Privacy} component={Privacy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
