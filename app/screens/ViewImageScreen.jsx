import React from 'react'
import { StyleSheet, Text, View,Image, Platform, SafeAreaView } from 'react-native'
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons';
const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.groupButton}>
                <View style={styles.closeButton}>
                <MaterialCommunityIcons name="close" color="white" size={35}/>
                </View>
                <View style={styles.deleteButton}>
                    <MaterialCommunityIcons name="trash-can-outline" color={colors.primary} size={35}/>
                </View>
            </View>
            <Image source={require('../assets/chair.jpg')} style={styles.image} />
        </View>
    )
}

export default ViewImageScreen

const styles = StyleSheet.create({
    container:{
        paddingTop:Platform.OS=='ios' ? 45  : 0,
        backgroundColor:colors.black,
        flex:1,
    },  
    image:{
        alignSelf:'center',
        width:'100%',
        height:'100%',
        resizeMode:'contain',
        ...Platform.select({
            ios:{
                fontSize:20,
            },
            android:{
                fontSize:18
            }
        })
    },
    groupButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: 30,
    },
    // closeButton:{
    //     backgroundColor: colors.primary,
    // },
    // deleteButton:{
    //     backgroundColor: colors.secondary,
    // }
})
