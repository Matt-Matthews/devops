import { View, Text } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/styles';

export default function Map() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Map</Text>
    </SafeAreaView>
  )
}