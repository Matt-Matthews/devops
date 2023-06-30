import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'
import colors from '../styles/colors.json';
import IonIcons from '@expo/vector-icons/Ionicons';

export default function HomeHeader() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
                <Text style={styles.heading}>Welcome back!</Text>
                <Text style={styles.subHeading}>John doe</Text>
            </View>
            <View style={{ backgroundColor: colors.bg, padding: 15, borderRadius: 25 }}>
                <IonIcons name="person-sharp" size={20} color="grey" />
            </View>
        </View>
    )
}