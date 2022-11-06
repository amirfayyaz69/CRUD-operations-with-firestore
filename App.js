import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CrudScreen from './CrudScreen';

const Stack = createNativeStackNavigator();

export default function App(props) {
  return (
   <CrudScreen/>
  );
}
