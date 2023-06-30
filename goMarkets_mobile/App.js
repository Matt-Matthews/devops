import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from "./components/BottomNav";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false,}}>
        <Stack.Screen name="BottomNav"  component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

