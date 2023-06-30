import { View, Text, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'
import IonIcons from '@expo/vector-icons/Ionicons';
import colors from "../styles/colors.json"

export default function MarketCard() {
    const bgImg = { uri: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg" };
    return (
        <View style={{ height: Dimensions.get("window").height * 0.25, width: Dimensions.get('window').width * 0.9, borderRadius: 11 }}>
            <Image source={bgImg} style={{ height: Dimensions.get("window").height * 0.25, width: Dimensions.get('window').width * 0.9, borderRadius: 11, position: 'absolute', }} />
            <View style={{flexDirection: 'row', borderRadius: 7, backgroundColor: colors.bg, paddingHorizontal: 10, paddingVertical: 3, marginTop: 7, marginLeft: 6, width: Dimensions.get('window').width * 0.2}}>
                <IonIcons name='eye-sharp' size={20} color="#000" /> 
                <Text style={{marginLeft: 5}}>Views</Text>
            </View>
        </View>
    )
}