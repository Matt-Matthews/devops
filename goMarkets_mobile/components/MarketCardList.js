import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'
import MarketCard from './MarketCard'

export default function MarketCardList() {
    return (
        <View style={{ marginVertical: 15 }}>
            <Text style={[{ marginBottom: 10 }, styles.subHeading]}>Coming Soon!</Text>
            <ScrollView horizontal>
                <View style={{ marginRight: 10 }}>
                    <MarketCard />
                </View>
                <MarketCard />
                <MarketCard />
                <MarketCard />

            </ScrollView>
        </View>
    )
}