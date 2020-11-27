import React from 'react'
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../config/colors'
export default function AppButton({title,color,onPress}) { 
    return (
        <TouchableOpacity style={[styles.button,{backgroundColor:colors[color]}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
        width:'100%',
        padding:15,
        backgroundColor:colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,
        marginVertical:10
    },
    text:{
        color:colors.white,
        fontSize:18,
        textTransform:'uppercase'
    }   
});

