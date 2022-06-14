import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Schools from '../screens/Schools.tsx';
import Schoolinfo from '../screens/Schoolinfo.tsx';



const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function Screen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Schools" component={Schools} />
        <Stack.Screen name="Schoolinfo" component={Schoolinfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Screen;