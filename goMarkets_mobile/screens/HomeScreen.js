import { View, Text, ScrollView, TextInput, Dimensions, Pressable, Image, Platform } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "../styles/styles";
import IonIcons from '@expo/vector-icons/Ionicons';
import colors from '../styles/colors.json';
import HomeHeader from "../components/HomeHeader";
import React from "react";
import MarketCategories from "../components/MarketCategories";
import MarketCardList from "../components/MarketCardList";
import MarketCard from "../components/MarketCard";

export default function Home() {


    return (
        <SafeAreaView style={[styles.container,]}>

            <ScrollView style={{ flex: 1, }} stickyHeaderIndices={[2]}>
                <HomeHeader />
                <View style={{ flexDirection: 'row', marginVertical: 15, backgroundColor: colors.bg, paddingHorizontal: 15, paddingVertical: 12, borderRadius: 25, width: Dimensions.get('window').width * 0.9, alignContent: 'center' }}>
                    <IonIcons name="search-outline"style={{marginTop: Platform.OS ==='ios'? 0: 4 }} size={20} color="grey" />
                    <TextInput style={{ width: Dimensions.get('window').width * 0.85, marginLeft: 10 }} placeholder="Search markets" returnKeyType="send" returnKeyLabel="Done" />
                </View>
                <MarketCategories />
                <MarketCardList />
                <View style={{marginVertical: 10}}>
                    <Text style={[{ marginBottom: 10 }, styles.subHeading]}>Nearby Markets</Text>
                    <View style={{marginBottom: 10}}>
                        <MarketCard />
                    </View>
                    <MarketCard />
                    <MarketCard />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}