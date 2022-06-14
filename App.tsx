import * as React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Screen from './navigation/Screen';
// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
enableScreens();

export default function App() {
  return (
      <SafeAreaProvider>
        <StatusBar />
        <Screen/>
      </SafeAreaProvider>
  );
}