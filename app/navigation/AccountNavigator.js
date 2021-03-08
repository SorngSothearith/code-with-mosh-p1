import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import MyAccountScreen from '../screens/MyAccountScreen';
import MessageScreen from '../screens/MessageScreen';

const Stack = createStackNavigator();
export default function AccountNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Account" component={MyAccountScreen}/>
        <Stack.Screen name="Messages" component={MessageScreen}/>
    </Stack.Navigator>
  );
}
