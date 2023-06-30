import colors from './colors.json';
import {StyleSheet, } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 16,
        color: '#fff'
    },
    heading: {
        fontSize: 25,
        color: '#000',
        fontWeight: '700'
    },
    subHeading: {
        color: '#000',
        fontSize: 17,
        fontWeight: '400'
    },
    bottomNav: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderTopColor: colors.border,
        borderTopWidth: 0.3,
    },
    tabButton: {
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexDirection: 'row',
        paddingHorizontal: 7,
        paddingVertical: 3, 
        borderRadius: 25,
        
    },
    rowGap: {
        marginLeft: 5
    }
});