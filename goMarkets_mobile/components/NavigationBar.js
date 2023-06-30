import { Pressable, View, Text, Dimensions, Platform } from "react-native";
import React from "react";
import { styles } from "../styles/styles";
import colors from '../styles/colors.json';
import IonIcons from '@expo/vector-icons/Ionicons';

export default function NavigationBar({ state, navigation }) {
    const [tabIndex, setTabIndex] = React.useState(state.index);
    const navigateTo = (name) => {
        navigation.navigate({ name: name });
    }
    const iconSize = Platform.OS ==='android'? Dimensions.get('window').width * 0.05 : Dimensions.get('window').width * 0.06;
    React.useEffect(() => {
        setTabIndex(state.index);
    }, [state.index])
    return (
        <View style={styles.bottomNav}>
            <Pressable style={[styles.tabButton, { backgroundColor: tabIndex === 0 ? colors.primary : '#fff' }]} onPress={() => navigateTo('Home')}>
                <IonIcons name={tabIndex === 0 ? "home-sharp" : "home-outline"} size={iconSize} color={tabIndex === 0 ? '#fff' : colors.darkGrey} />
                {tabIndex === 0 && <Text style={[styles.text, styles.rowGap]}>Home</Text>}
            </Pressable>
            <Pressable style={[styles.tabButton, { backgroundColor: tabIndex === 1 ? colors.primary : '#fff' }]} onPress={() => navigateTo('Explore')}>
                <IonIcons name={tabIndex === 1 ? "compass-sharp" : "compass-outline"} size={iconSize} color={tabIndex === 1 ? '#fff' : colors.darkGrey} />
                {tabIndex === 1 && <Text style={[styles.text, styles.rowGap]}>Explore</Text>}
            </Pressable>
            <Pressable onPress={() => navigateTo('Map')} style={[styles.tabButton, { backgroundColor: tabIndex === 2 ? colors.primary : '#fff' }]}>
                <IonIcons name={tabIndex === 2 ? "map-sharp" : "map-outline"} size={iconSize} color={tabIndex === 2 ? '#fff' : colors.darkGrey} />
                {tabIndex === 2 && <Text style={[styles.text, styles.rowGap]}>Map</Text>}
            </Pressable>
            <Pressable onPress={() => navigateTo('Notifications')} style={[styles.tabButton, { backgroundColor: tabIndex === 3 ? colors.primary : '#fff' }]}>
                <IonIcons name={tabIndex === 3 ? "notifications-sharp" : "notifications-outline"} size={iconSize} color={tabIndex === 3 ? '#fff' : colors.darkGrey} />
                {tabIndex === 3 && <Text style={[styles.text, styles.rowGap]}>Notifications</Text>}
            </Pressable>
            <Pressable onPress={() => navigateTo('Settings')} style={[styles.tabButton, { backgroundColor: tabIndex === 4 ? colors.primary : '#fff' }]}>
                <IonIcons name={tabIndex === 4 ? "settings-sharp" : "settings-outline"} size={iconSize} color={tabIndex === 4 ? '#fff' : colors.darkGrey} />
                {tabIndex === 4 && <Text style={[styles.text, styles.rowGap]}>Settings</Text>}
            </Pressable>
        </View>
    )
}