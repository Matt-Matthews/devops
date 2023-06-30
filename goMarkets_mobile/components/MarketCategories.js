import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'
import categories from '../data/categories.json';
import colors from '../styles/colors.json';

export default function MarketCategories() {
    const [catIndex, setCatIndex] = React.useState(0);
    return (
        <View style={{backgroundColor: '#fff',paddingVertical: 10}}>
            <Text style={[{ marginBottom: 10 }, styles.subHeading]}>Market Categories</Text>
            <ScrollView horizontal>
                {categories.map((category, index) => <Pressable onPress={() => setCatIndex(index)}
                    style={{
                        marginRight: 20,
                        paddingVertical: 3,
                        paddingHorizontal: 15,
                        backgroundColor: catIndex === index ? colors.primary : colors.bg,
                        borderRadius: 25,
                    }}>
                    <Text style={catIndex === index ? styles.text : { color: '#000' }}>
                        {category.name}
                    </Text>
                </Pressable>)}
            </ScrollView>
        </View>
    )
}